Template.Angajati.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('cvs')
    })
});

Template.Angajati.helpers({
    cvs: () => {
        return Cvs.find({inMenu: true});
    }
});