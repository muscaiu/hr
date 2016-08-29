Template.Statistici.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('cvs')
    })
});

Template.Statistici.helpers({
    totalInterviuri: () => {
        return Cvs.find().count();
    },
    totalAngajati: () => {
        return Cvs.find({inMenu: true}).count();
    }
});