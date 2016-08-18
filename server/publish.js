//publish all cvs
Meteor.publish('cvs', function () {
    //get only the cvs created by the user
    return Cvs.find({ author: this.userId});
});

//Publish single cv by id
Meteor.publish('singleCv', function(id){
    check(id, String);
    return Cvs.find({_id: id});
});