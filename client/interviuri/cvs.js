Meteor.subscribe('cvs');

Template.Cvs.onCreated(function(){
    var self = this;
    self.autorun(function(){//unsubsribe from old subscriptions
        self.subscribe('cvs');
    })
});

Template.Cvs.helpers({
    cvs: () =>{
        return Cvs.find({}, {sort: {createdAt: -1}});
    }
});

Template.Cvs.events({
    'click .new-recipe': () =>
        Session.set({
            'newCvForm': true,
            'formId': null
        }),
    'click .sorteaza': function(){
        return Cvs.find({}, {sort: {createdAt: 1}})
    }

});