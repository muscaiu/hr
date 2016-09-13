import 'animate.css/animate.css';

Meteor.subscribe('cvs')

Template.Interviuri.onCreated(function () {
    var self = this

    self.autorun(function () {//unsubscribe from old subscriptions
        self.subscribe('cvs')
        self.sortOrder = new ReactiveVar(-1)
        
    })
})

Template.Interviuri.helpers({
    cvs() {

        const instance = Template.instance()
        
        return Cvs.find({}, { sort: { createdAt: instance.sortOrder.get() } })
    },

    // hrUser: function(){
    //     return Roles.userIsInRole(Meteor.userId(), 'hr');
    // }
    // styleEasySearch: function(){
    //     return {class: 'searchBox'}
    // }

    // cvsIndex: () => CvsIndex,
    // searchAttributes() {
    //     return {
    //         placeholder: 'Search'
    //     }
    // }
})

Template.Interviuri.events({
    'click .new-recipe': () =>
        Session.set({
            'newCvForm': true,
            'formId': null
        }),

    // 'click .sorteaza'(event, instance) {
    //      $('#cvs').addClass('animated bounce')
    //     instance.sortOrder.set(instance.sortOrder.get() * -1)
    // }
    'click .sorteaza'(event, instance) {

        instance.sortOrder.set(instance.sortOrder.get() * -1)
        // if(sortUp == true && sortDown == false){
        //     $('#cvs').addClass('animated slideInDown')
        //     sortUp = false
        //     sortDown = true
        //     console.log("sortUp " + sortUp)
        //     console.log("sortDown " + sortDown)
        // }

        // else if(sortDown == true && sortUp == false){
        //     $('#cvs').addClass('animated slideInUp')
        //     sortUp = true
        //     sortDown = false
        //     console.log("sortUp " + sortUp)
        //     console.log("sortDown " + sortDown)
        // }

     }
})
