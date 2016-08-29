Template.Header.events({
    'click .login-toggle': ()=> {
        Session.set('nav-toggle', 'open');
    },
    'click .logout': () =>{
        AccountsTemplates.logout();
    },
    // 'click .submit': () =>{
    //     Session.set('nav-toggle', '');
    // }
})