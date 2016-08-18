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