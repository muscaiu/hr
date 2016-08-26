
Template.DetaliiInterviu.onCreated(function(){
    var self = this;
    self.autorun(function(){
        // self.subscribe('cvs')
        var id = FlowRouter.getParam('id');
        self.subscribe('singleCv', id);
    })
});

Template.DetaliiInterviu.helpers({
    cv: () =>{
        var id = FlowRouter.getParam('id');
        return Cvs.findOne({_id: id});
    },
    getAuthorName: function(){
        return Meteor.users.find({_id: 'wuAdZkugjY8BsvzoS'});
    },
});

//helper for cratedAt Format
Template.registerHelper('formatDate', function(date, format){
    return moment(new Date(date)).format(format);    
});
