var postSignUp = function(userId, info){
    console.log(userId)
    console.log(info)
}

AccountsTemplates.configure({
    //after user registration
    postSignUpHook: postSignUp
})