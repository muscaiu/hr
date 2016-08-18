//using reactive-var package make SessionVariable for Template
Template.Cv.onCreated(function(){
    this.editMode = new ReactiveVar(false);
})

//Toggle inMenu in Cv.html
Template.Cv.events({
    'click .toggle-menu': function(){
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    'click .fa-trash': function(){
        Meteor.call('deleteCv', this._id)
    },
    'click .fa-pencil': function(event, template){
        template.editMode.set(!template.editMode.get());
    }
});

//helper for quickform in CV.html
Template.Cv.helpers({
    updateCvId: function(){
        return this._id;
    },
    editMode: function(){
        return Template.instance().editMode.get();
    }
});

