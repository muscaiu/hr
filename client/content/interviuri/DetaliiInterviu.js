
Template.DetaliiInterviu.onCreated(function () {
    var self = this
    self.autorun(function () {
         //self.subscribe('files')
        var id = FlowRouter.getParam('id')
        self.subscribe('singleCv', id)
    })    
})

Template.DetaliiInterviu.helpers({
    cv: () => {
        var id = FlowRouter.getParam('id')
        Session.set('formId', id)
        return Cvs.findOne({ _id: id })
    },
    // getAuthorName: function(){
    //     return Meteor.users.find({_id: 'wuAdZkugjY8BsvzoS'})
    // },
    getAuthorName: function () {
        console.log(this.userId)
        return Meteor.users.find({ _id: this.userId })
    },

})

//helper for cratedAt Format
Template.registerHelper('formatDate', function (date, format) {
    return moment(new Date(date)).format(format)
})
