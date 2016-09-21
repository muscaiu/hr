Template.Angajati.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('cvs')
    })
    // this.editMode = new ReactiveVar(false);
});

Template.Angajati.helpers({
    cvs: () => {
        return Cvs.find({inMenu: true});
    },
    maran: () => {
        return Cvs.find({department: 'Maran'})
    }
    // updateCvId: function(){
    //     return this._id;
    // },
    // editMode: function(){
    //     return Template.instance().editMode.get();
    // }, 
});

Template.Angajati.events({
    'click .maran': function(){
    }
})
//     'click .toggle-menu': function(){
//         Meteor.call('toggleMenuItem', this._id, this.inMenu);
//     },
//     'click .fa-trash': function(){
//         var self = this;
//         new Confirmation({
//             message: "Esti sigur?",
//             //title: "Confirma",
//             cancelText: "Cancel",
//             okText: "Sterge",
//             //success: true, // whether the button should be green or red
//             focus: "cancel" // which button to autofocus, "cancel" (default) or "ok", or "none"
//             }, 
//             function (ok) {
//                 if(!ok) return
//                     //else delete CV
//                     Meteor.call('deleteCv', self._id);
//                     toastr.success('Camp Sters');
//             });       
//     },
//     'click .fa-pencil': function(event, template){
//         Session.set('formId', this._id);
//         template.editMode.set(!template.editMode.get());
//     },
// })