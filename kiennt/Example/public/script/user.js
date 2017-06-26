$(document).ready(function() {

    $('#create').click(function () {
        var data = $('#users').serialize();
        $.ajax({
            url: '/create',
            type: 'POST',
            cache: false,
            data: data,
            success: function (data) {
                alert('Success!')
            }
        })
    })
})