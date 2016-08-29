Template.Header.events({
    'click .login-toggle': ()=> {
        Session.set('nav-toggle', 'open');
    },
    'click .logout': () =>{
        //Meteor.logout();
        //console.log("logged out")
        //Session.set('nav-toggle', '');
        //this above is done in accounts.js
        AccountsTemplates.logout();
    },
    // 'click .submit': () =>{
    //     Session.set('nav-toggle', '');
    // }
})