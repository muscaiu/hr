Meteor.subscribe('cvs')

Template.Interviuri.onCreated(function(){
    var self = this
    self.autorun(function(){//unsubsribe from old subscriptions
        self.subscribe('cvs')
        self.sortOrder = new ReactiveVar(-1)     
    })
});

Template.Interviuri.helpers({
    cvs(){
        const instance = Template.instance()
        return Cvs.find({}, {sort: {createdAt: instance.sortOrder.get() } })
    },
    // cvs: () =>{
    //     return Cvs.find({}, {sort: {createdAt: -1}});
    // }
    // hrUser: function(){
    //     return Roles.userIsInRole(Meteor.userId(), 'hr');
    // }
    cvsIndex: () => CvsIndex,
    // styleEasySearch: function(){
    //     return {class: 'searchBox'}
    // }
});

Template.Interviuri.events({
    'click .new-recipe': () =>
        Session.set({
            'newCvForm': true,
            'formId': null
        }),
    'click .sorteaza'(event, instance) {
            instance.sortOrder.set(instance.sortOrder.get() * -1)
        },
        // 'click .sorteaza': function(){
        //     return Cvs.find({}, {sort: {createdAt: 1}})
        // }
    'click .searchBox': function(event){
        var search = {
            
        }
    }
})

// Template.searchBox.helpers({
//   cvsIndex: () => CvsIndex
// });