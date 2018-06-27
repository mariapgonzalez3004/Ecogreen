/**
 * Created by John on 3/28/2017.
 */

$(document).ready(function(){
//     $('.sec3_5_btn.small36').on('click', function(){
//         console.log('swal: ',swal);
//         swal({
//             title : 'Hold Your Horses!',
//             text : "Our beta version is coming soon, but it hasn't been released yet.  Use the form to join our mailing list, we'll let you know once it's ready.  We promise not to bother you with email until then.",
//             type : 'info',
//             confirmButtonText : 'Got it!'
//         });
//     });

//     $('#maitre-submit-button').on('click', function(){
//         $('#maitre-content').css('display', 'block');
//     });
    $('.social-feed-container').socialfeed({
        facebook : {
            accounts : ['@qipoco'],
            limit : 3,
            access_token : 'EAABbPx0tBz8BAEeHLXeVnaZBO4mxx5nzZC79ata8K7ShGZAHyZCMkiy8CrhAcRrNZALRKfvoCvFwQbHSZBbnd3jkJckES1nifJvs2e4VZCZAdPd3PdZBzF1HMIIVnchGEHNBITxuZAb8LSQasvaLvalgwPxhvnThH5bYBAtstgyBFlnQZDZD'
        },
        show_media : true
        //twitter : {
        //    accounts : ['@qipo.io'],
        //    limit : 3,
        //    consumer_key : 'UupQInh3kg9mHSVaEb5tR8JUb',
        //    consumer_secret : 'tHH9SqLyIyvVcG4s8sQSy1xOwhLlfDpmD6u4FqouVG3OHzEvrq'
        //}
    });
});