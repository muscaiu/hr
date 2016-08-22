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
        var self = this;
        new Confirmation({
            message: "Esti sigur?",
            //title: "Confirma",
            cancelText: "Cancel",
            okText: "Sterge",
            //success: true, // whether the button should be green or red
            focus: "cancel" // which button to autofocus, "cancel" (default) or "ok", or "none"
            }, 
            function (ok) {
                if(!ok) return
                    //else delete CV
                    Meteor.call('deleteCv', self._id);
            });
       
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

