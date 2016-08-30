//using reactive-var package make SessionVariable for Template
Template.Interviu.onCreated(function(){
    this.editMode = new ReactiveVar(false);
    //console.log(editMode);
})

//Toggle inMenu in Interviu.html
Template.Interviu.events({
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
                    toastr.success('Camp Sters');
            });       
    },
    'click .fa-pencil': function(event, template){
        Session.set('formId', this._id);
        template.editMode.set(!template.editMode.get());
    },
    'click .fa-plus': function(){
        toastr.success('Adaugat la Angajati');
    },
    'click .fa-minus': function(){
        toastr.success('Sters de la Angajati');
    },
    'click .submitClicked': function(event, template){
        template.editMode.set(!template.editMode.get());
    }
});

//helper for quickform in CV.html
Template.Interviu.helpers({
    updateCvId: function(){
        return this._id;
    },
    editMode: function(){
        return Template.instance().editMode.get();
    }, 
    hrUser: function(){
        return Roles.userIsInRole(Meteor.userId(), 'hr');
    }

});

//helper for cratedAt Format
Template.registerHelper('formatDate', function(date, format){
    return moment(new Date(date)).format(format);
});