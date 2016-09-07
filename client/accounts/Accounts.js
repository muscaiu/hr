var myLogoutFunc = function(){
    console.log('logged out')
    Session.set('nav-toggle', '');
}

AccountsTemplates.configure({
    //onLogoutHook: myLogoutFunc
    //confirmPassword: false,
    showLabels: false,
    onLogoutHook: myLogoutFunc,
})

// AccountsTemplates.addFields([
//     {
//         _id: 'firstName',
//         type: 'text',
//         displayName: 'FirstName',
//         required: true,
//         re: /(?=.*[a-z])(?=.*[A-Z])/,
//         errStr: 'At least 1 lowercase and 1 uppercase letter required',
//     },
//     {
//         _id: 'grup',
//         type: 'select',
//         displayName: 'Grup',
//         select:[
//             {
//                 text: 'HR',
//                 value: 'hr'
//             },
//             {
//                 text: 'Normal',
//                 value: 'normal'
//             },
//             {
//                 text: 'Other',
//                 value: 'other'
//             }
//         ]
//     }
// ])
