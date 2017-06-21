function Xoa(a){
    $(document).ready(function(){
        $.ajax({
            url : "/delete", 
            type : "delete", 
            dateType:"json",
            data : {
                id: a.value
            },
            success: function(argument) {
                window.location.assign("/");
            }
        })
    })
};
function update(a){
    $(document).ready(function(){
        $(".collapse").collapse('show');
        var name = $('#'+a.value).children().eq(1).text();
        var address = $('#'+a.value).children().eq(2).text();
        var age = $('#'+a.value).children().eq(3).text();
        $('#name').val(name);
        $('#address').val(address);
        $('#age').val(age);
        $('#them').hide();
        $('#sua').val(a.value);
        $('#sua').show();
    })
};
$(document).ready(function(){
    $('#sua').hide();
    $(".collapse").on('hidden.bs.collapse', function(){
        $('#them').show();
        $('#sua').hide();
        $('#name').val("");
        $('#address').val("");
        $('#age').val("");
    });
    $('#sua').click(function() {
        $.ajax({
            url : "/update", 
            type : "put", 
            dateType:"json",
            data : {
                id: $('#sua').val(),
                name: $('#name').val(),
                address: $('#address').val(),
                age: $('#age').val()
            },
            success: function(argument) {
                window.location.assign("/");
            }
        })
    })
    $.ajax({
        url : "/get", 
        type : "get",
        dateType:"json", 
        success: function (result){
            var html='';
            var l=result.length;
            $.each(result, function (key, item){
                html= '</tr>'+html;
                html='</td>'+html;
                html= '<button type="button" onclick="Xoa(this)" value="'+item._id+'" class="btn btn-danger btn-xs">Xóa</button>' +html;
                html= '<button type="button" onclick="update(this)" value="'+item._id+'" class="btn btn-primary btn-xs">Sua</button>' +html;
                html= '<td>'+html;
                html= '<td>'+item.age+'</td>'+html;
                html= '<td>'+item.address+'</td>'+html;
                html= '<td>'+item.name+'</td>'+html;
                html= '<td>'+(l-key)+'</td>'+html;
                html= '<tr id="'+item._id+'">'+html;

            });
            $('#d').html(html);
        }
    });
})