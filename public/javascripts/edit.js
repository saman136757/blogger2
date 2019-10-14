$(document).ready(function () {




    // $('#newsubmit').click(function (e) {
    //  e.preventDefault();
    //     $.ajax({
    //     type: "POST",
    //     url: "/editProfile",
    //     data: {
    //         mobile: $('#newmobile').val(),
    //         userName: $('#newuserName').val(),
    //         firstName: $('#newfirstName').val(),
    //         lastName: $('#newlastName').val(),
    //         password: $('#newpassword').val(),
    //         gender:$('#newgender').val(),
    //     },
    //     data,
    //     success: function (result) {
    //         window.location.replace('/login')
    //      }
    //     });
    // });


    $('#article').click(function (e) { 
        e.preventDefault();
        
        $.ajax({
            type: "PUT",
            url: "/addArticle",
            data: {
                title:$('#title').val(),
                content:$('#content').val()
            },
            
            success: function (response) {
                
            }
        });
    });
});



