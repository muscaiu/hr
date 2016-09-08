var postSignUp = function(userId, info){
    //display on server
    console.log(userId)
    console.log(info.profile.grup)
    Roles.addUsersToRoles(userId, ['normal-user', info.profile.grup])
}

AccountsTemplates.configure({
    //after user registration
    postSignUpHook: postSignUp,
    //forbidClientAccountCreation : true
})

// //a try
// function register(){
//     if(Roles.userIsInRole(id, 'admin'))
//         //Roles.removeUsersFromRoles(id, 'admin')
//         return true
//     else
//         return false
// }
        