Meteor.subscribe('cvs');

Template.Interviuri.onCreated(function(){
    var self = this;
    self.autorun(function(){//unsubsribe from old subscriptions
        self.subscribe('cvs');
        self.sortOrder = new ReactiveVar(-1);        
    });
});

Template.Interviuri.helpers({
    cvs(){
        const instance = Template.instance();
        return Cvs.find({}, {sort: {createdAt: instance.sortOrder.get() } });
    }
    // cvs: () =>{
    //     return Cvs.find({}, {sort: {createdAt: -1}});
    // }
});

Template.Interviuri.events({
    'click .new-recipe': () =>
        Session.set({
            'newCvForm': true,
            'formId': null
        }),
    'click .sorteaza'(event, instance) {
            instance.sortOrder.set(instance.sortOrder.get() * -1);
        },
        // 'click .sorteaza': function(){
        //     return Cvs.find({}, {sort: {createdAt: 1}})
        // }
});