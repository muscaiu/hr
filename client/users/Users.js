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
        return Roles.userIsInRole(this._id, 'admin') ? 'admin' : 'normal'
    },
    dateFormat: function(){
        return moment(this.createdAt).format('D MMMM YYYY hh:mm')
    }
})

//Moment another more indirect way of using it like in interviu.js
// Template.registerHelper('formatDate', function(date, format){
//     return moment(new Date(date)).format(format);
// });