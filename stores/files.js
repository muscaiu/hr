import '../collections/files';
import {UploadFS} from 'meteor/jalik:ufs';

FileFilter = new UploadFS.Filter({
    minSize: 1,
    // maxSize: 1024 * 1000 * 10, // 10MB,
    contentTypes: ['image/*', 'audio/*', 'video/*', 'application/*']
});

/**
 * File store using local file system
 * @type {UploadFS.store.Local}
 */
// FileStore = new UploadFS.store.Local({
//     collection: Files,
//     name: 'files',
//     path: '/uploads/files',
//     filter: FileFilter,
//     // permissions: defaultPermissions,
//     // onRead: FileReadHandler,
//     // copyTo: [
//     //     ThumbnailStore
//     // ]
// });

/**
 * File store using Mongo GridFS
 * @type {UploadFS.store.GridFS}
 */
FileStore = new UploadFS.store.GridFS({
    collection: Files,
    name: 'photos',
    chunkSize: 1024 * 255,
    filter: FileFilter,
    // permissions: defaultPermissions,
    // onRead: FileReadHandler,
    // copyTo: [
    //     ThumbnailStore
    // ]
});