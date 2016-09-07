Meteor.subscribe('allusers')

Template.Users.onCreated(function(){
    this.autorun( () => {
        this.subscribe('allUsers')
    })
})

Template.Users.helpers({
    users: function(){
        return Meteor.users.find()
    },
    userEmail: function(){
        return this.emails[0].address;
    },
    isAdmin: function(){
        return Roles.userIsInRole(this._id, 'admin') ? 'admin' : ''
    },
    dateFormat: function(){
        return moment(this.createdAt).format('D MMMM YYYY hh:mm')
    },
    editMode: function(){
        return Session.get('currentUser') ? 'edit-mode' : ''
    },
    currentEdit: function(){
        let user = Session.get('currentUser')
        if(user === null){
            return false
        }
        else{
            return user._id === this._id
        }
    }
})

Template.Users.events({
    'click .user_id': function(){
        console.log(this)
        Session.set('currentUser', this)
    },
    'click .toggle-admin': function(){
        Meteor.call('toggleAdmin', this._id)
    },
    'click .close-edit-mode': function(){
        Session.set('currentUser', null)
    }
})

//Moment another more indirect way of using it like in interviu.js
// Template.registerHelper('formatDate', function(date, format){
//     return moment(new Date(date)).format(format);
// });