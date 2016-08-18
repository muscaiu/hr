Template.CvDetails.onCreated(function(){
    var self = this;
    self.autorun(function(){
        // self.subscribe('cvs')
        var id = FlowRouter.getParam('id');
        self.subscribe('singleCv', id);
    })
});

Template.CvDetails.helpers({
    cv: () =>{
        var id = FlowRouter.getParam('id');
        return Cvs.findOne({_id: id});
    }
});