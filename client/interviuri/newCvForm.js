Template.NewCvForm.events({
    'click .fa-close' :function(){        
        Session.set('newCvForm', false);
    }
})

// AutoForm.addHooks('insertCvForm'),{
//     onSuccess: function (){
//         setTimeout(function (){
//             toastr.options = {
//                 closeButton: true,
//                 progressBar: true,
//                 showMethod: 'slideDown',
//                 timeout: 2000
//             };
//             toastr.success(
//                 'Successfully Created' );
//         }, 1300);
//         console.log('success');
//     },
//     onError: function () {
//         setTimeout( function () {
//         toastr.options = {
//             closeButton: true,
//             progressBar: false,
//             showMethod: 'slideDown',
//             timeOut: 10000
//         };
//         toastr.error(
//             'Please review the form if you have left something empty',
//             'Ooops! Something is missing.' );
//         }, 1300 );
//     }
// }