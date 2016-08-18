Template.Favorites.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('cvs')
    })
});

Template.Favorites.helpers({
    cvs: () => {
        return Cvs.find({inMenu: true});
    }
});