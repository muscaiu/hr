Template.Favorites.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('cvs')
    })
});

Template.Favorites.helpers({
    totalAngajati: () => {
        return Cvs.find({inMenu: true});
    }
});