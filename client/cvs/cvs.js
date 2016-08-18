Meteor.subscribe('cvs');

Template.Cvs.onCreated(function(){
    var self = this;
    self.autorun(function(){//unsubsribe from old subscriptions
        self.subscribe('cvs');
    })
});

Template.Cvs.helpers({
    cvs: () =>{
        return Cvs.find({});
    }
});

Template.Cvs.events({
    'click .new-recipe': () =>
        Session.set('newCvForm', true)
});