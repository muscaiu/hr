Template.Angajati.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('cvs')
        self.sort_by = new ReactiveVar('')
    })
    // this.editMode = new ReactiveVar(false);
})

Template.Angajati.helpers({
    cvs: () => {
        const instance = Template.instance()
        
        if(instance.sort_by.get() == ''){
            return Cvs.find({inMenu: true}, {sort: {department : 1}})       
        }else{
            return Cvs.find({inMenu: true, department: instance.sort_by.get()})
        }
    },
    // maran: () => {
    // }
    // updateCvId: function(){
    //     return this._id;
    // },
    // editMode: function(){
    //     return Template.instance().editMode.get();
    // }, 
})

Template.Angajati.events({
    'click .btn-all'(event, instance){
        instance.sort_by.set('')
    },
    'click .btn-maran'(event, instance){
        instance.sort_by.set('Maran')
    },
    'click .btn-maranbo'(event, instance){
        instance.sort_by.set('MaranBO')
    },
    'click .btn-vodafone'(event, instance){
        instance.sort_by.set('Vodafone')
    },
    'click .btn-triboo'(event, instance){
        instance.sort_by.set('Triboo')
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