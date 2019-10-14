$(document).ready(function(){

    $('#submit').click(function(e){
        e.preventDefault();

        let data = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            mobile: $('#mobile').val(),
            password: $('#password').val(),
            userName:$('#userName').val(),
            
            gender:$('#gender').val(),


        }

         console.log(data);


        $.ajax({
            url: '/addUser',
            type: 'POST',
            data,
            success: function(result) {
                window.location.replace('/login')

            },
            error: function(err) {
                console.log(err);

            }
        })
    })




});