import 'animate.css/animate.css';

Meteor.subscribe('cvs')

Template.Interviuri.onCreated(function () {
    var self = this
    self.autorun(function () {
        self.sortOrder = new ReactiveVar(-1)

    })
})

Template.Interviuri.helpers({
    cvs() {
        const instance = Template.instance()
           return Cvs.find({}, { sort: { createdAt: instance.sortOrder.get() } })
    },

    cvsIndex: () => CvsIndex,
    //     cvsIndex: function(){
    //     return CvsIndex
    // } ,
    searchAttributes() {
        return {
            placeholder: 'Search'
        }
    },


    // hrUser: function(){
    //     return Roles.userIsInRole(Meteor.userId(), 'hr');
    // }
    styleEasySearch: function(){
        return {class: 'searchBox'}
    },
})

Template.Interviuri.events({
    'click .new-recipe': () =>
        Session.set({
            'newCvForm': true,
            'formId': null
        }),

    'click .sorteaza'(event, instance) {
        instance.sortOrder.set(instance.sortOrder.get() * -1)
        // console.log('cvsindex' + cvsIndex)

        // 'click .sorteaza'(event, instance) {
        //      $('#cvs').addClass('animated bounce')
        //     instance.sortOrder.set(instance.sortOrder.get() * -1)
        // }
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
