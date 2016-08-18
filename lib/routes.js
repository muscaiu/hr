///////////// LOGIN
//Redirect on Login and Logout
Accounts.onLogin(function(){
    FlowRouter.go('cvs');
});
Accounts.onLogout(function(){
    FlowRouter.go('home')
});
//If user is not logged in go home
FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()){
        FlowRouter.go('home')
    }
}]);

///////////// ROUUTING
//Adding a simpe route based on filename and template name
FlowRouter.route('/', {
    name: 'home',
    action(){
        BlazeLayout.render('HomeLayout');
    }
});
//Adding a route based on filename that has multiple templates
FlowRouter.route('/cvs',{
    name: 'cvs',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Cvs'});
    }
});
//Routing by id
FlowRouter.route('/cv/:id',{
    name: 'cv-details',
    action(){
        BlazeLayout.render('MainLayout', {main: 'CvDetails'});
    }
});
//Route to Favorites
FlowRouter.route('/favorites',{
    name: 'favorites',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Favorites'});
    }
});