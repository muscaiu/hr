///////////// LOGIN
//Redirect on Login and Logout
Accounts.onLogin(function(){
    FlowRouter.go('interviuri')
})
Accounts.onLogout(function(){
    FlowRouter.go('home')
})
//If user is not logged in go home
FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()){
        FlowRouter.go('home')
    }
}])

///////////// ROUUTING
//Adding a simpe route based on filename and template name
FlowRouter.route('/', {
    name: 'home',   
    action(){
        BlazeLayout.render('HomeLayout')
    }
})
//Adding a route based on filename that has multiple templates
FlowRouter.route('/interviuri',{
    name: 'interviuri',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Interviuri'})
    }
})
//Routing by id
FlowRouter.route('/interviu/:id',{
    name: 'cv-details',
    action(){
        BlazeLayout.render('MainLayout', {main: 'DetaliiInterviu'})
    }
})
//Route to Angajati
FlowRouter.route('/angajati',{
    name: 'angajati',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Angajati'})
    }
})
//Route to Satatistici
FlowRouter.route('/statistici',{
    name: 'statistici',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Statistici'})
    }
})
//Admin Routes
var adminRoutes = FlowRouter.group({
    prefix:'/admin',
    name: 'admin'
})

adminRoutes.route('/users', {
    name: 'users',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Users'})
    }
})


//Redirect to interviuri if it was logged the previos session
// Check if user is logged in an redirect to /login
FlowRouter.triggers.enter([isNotLoggedIn], {
    except: ['home']
})
// Check if user is logged in an redirect to /clients
FlowRouter.triggers.enter([isLoggedIn], {
    only: ['home']
})
function isNotLoggedIn(context, redirect) {
    if (!Meteor.user() && !Meteor.loggingIn()) {
        redirect('/home')
    }
}
function isLoggedIn(context, redirect) {
    if (Meteor.user() || Meteor.loggingIn()) {
        redirect('/interviuri')
    }
}
