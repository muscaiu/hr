//publish all cvs
Meteor.publish('cvs', function () {
    // return Cvs.find(
    //                 { author: this.userId }, 
    //                 {sort: {createdAt: -1}}
    //                 );
    return Cvs.find({}, {sort: {createdAt: -1}});
});

//Publish single cv by id
Meteor.publish('singleCv', function(id){
    check(id, String);
    return Cvs.find({_id: id});
});


// Publish files and thumbnails
Meteor.publish('files', function (fields, options) {
    fields = _.extend({}, fields, {});
    options = _.extend({}, options, {});

    if (!this.userId) {
        // Publish only public files
        // with no userId attached.
        fields.userId = null;
    }
    //get files and thumbs from db
    return [
        Files.find(fields, options),
        //Thumbnails.find(fields, options)
    ];
});
