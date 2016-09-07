var postSignUp = function(userId, info){
    console.log(userId)
    console.log(info.profile.grup)
    Roles.addUsersToRoles(userId, ['normal-user', info.profile.grup])
}

AccountsTemplates.configure({
    //after user registration
    postSignUpHook: postSignUp,
    forbidClientAccountCreation : true
})
