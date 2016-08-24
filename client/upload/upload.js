
//UploadFS.config.simulateWriteDelay = 0;

window.workers = {};

//upload
Template.uploadForm.events({
    'click [name=upload]': function (ev, tpl) {
        ev.preventDefault();

        UploadFS.selectFiles(function (file) {
            const ONE_MB = 1024 * 100;
            let uploader = new UploadFS.Uploader({
                adaptive: false,
                chunkSize: ONE_MB * 16.66,
                maxChunkSize: ONE_MB * 20,
                data: file,
                file: file,
                store: FileStore,
                maxTries: 3
            });
            uploader.onAbort = function (file) {
                console.log(file.name + ' upload aborted');
            };
            uploader.onComplete = function (file) {
                console.log(file.name + ' upload completed');
                toastr.options.timeOut = 5000;
                toastr.options.extendedTimeOut = 2000;
                toastr.success('File Uploaded','Success');
            };
            uploader.onCreate = function (file) {
                console.log(file.name + ' created');
                workers[file._id] = this;
            };
            uploader.onError = function (err, file) {
                console.error(file.name + ' could not be uploaded', err);
                toastr.error('Maximum size 10MB','Error');
            };
            uploader.onProgress = function (file, progress) {
                console.log(file.name + ' :'
                    + "\n" + (progress * 100).toFixed(2) + '%'
                    + "\n" + (this.getSpeed() / 1024).toFixed(2) + 'KB/s'
                    + "\n" + 'elapsed: ' + (this.getElapsedTime() / 1000).toFixed(2) + 's'
                    + "\n" + 'remaining: ' + (this.getRemainingTime() / 1000).toFixed(2) + 's'
                );
            };
            uploader.start();
        });        
    }
});

//fileTable
Template.fileTable.onCreated(function () {
    this.subscribe('files');
});

Template.fileTable.helpers({
    files: function () {
        return Files.find({}, {
            sort: {createdAt: 1, name: 1}
        });
    }
});

Template.fileTableRow.events({
    'click [name=delete]': function (ev) {
        ev.preventDefault();
        Files.remove(this._id);
    },
    'click [name=abort]': function (ev) {
        ev.preventDefault();
        workers[this._id].abort();
    },
    'click [name=stop]': function (ev) {
        ev.preventDefault();
        workers[this._id].stop();
    },
    'click [name=start]': function (ev) {
        ev.preventDefault();
        workers[this._id].start();
    }
});

Template.fileTableRow.helpers({
    canAbort: function () {
        return workers.hasOwnProperty(this._id);
    },
    canDelete: function () {
        let userId = Meteor.userId();
        return userId === this.userId || !this.userId;
    },
    formatSize: function (bytes) {
        if (bytes >= 1000000000) {
            return (bytes / 1000000000).toFixed(2) + ' GB';
        }
        if (bytes >= 1000000) {
            return (bytes / 1000000).toFixed(2) + ' MB';
        }
        if (bytes >= 1000) {
            return (bytes / 1000).toFixed(2) + ' KB';
        }
        return bytes + ' B';
    },
    progress: function () {
        return Math.round(this.progress * 10000) / 100;
    },
    // thumb: function () {
    //     return Thumbnails.findOne({originalId: this._id});
    // }
});