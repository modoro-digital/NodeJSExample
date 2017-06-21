function getdt(){
	$.get("getdata", function(data){
		var sinhvien = "";
		for(var i = 0;i < data.length; i++)
		{
			var item = data[i];
			sinhvien = sinhvien + '<tr><td hidden>'+item._id+'</td><td>' + item.mssv + '</td><td>'+item.name+'</td><td>'+item.sex+'</td><td>'+item.birthday + '</td><td><button class="btn btn-primary btn-xs edit_data" id="'+item._id+'" data-toggle="modal" data-target=".editsv"><span class="glyphicon glyphicon-pencil"></span></button></td><td><button class="btn btn-danger btn-xs delete_data" id="'+item._id+'"><span class="glyphicon glyphicon-trash"></span></button></td></tr>';   
		}
		$('tbody').html(sinhvien);
	});
}

function checkform(x)
{
	var a = 0;
	$.each(x, function(i, field){
        if(field.value == ""){
        	a = 1;	
        }
        else if(field.name == "birthday" && !(parseFloat(field.value, 10))){
        	a = 2;
        }
    });
    return a;
}
function postData(l, fdata, cl){
	var i = checkform(fdata);
	if(i == 1){
		alert("Vui lòng điền đầy đủ thông tin.");
	}
	else if(i == 2){
		alert("Năm sinh không hợp lệ.");
	}
	else{
		$.ajax({
			type: "post",
			url: l,
			dateType: "json",
			data: fdata,
			success: function() {
				$(cl).modal('hide');
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(textStatus, errorThrown);
				alert("Có lỗi. Vui lòng kiểm tra lại quá trình nhập liệu. Cảm ơn");
				}
		});
	}
	return i;
}

$(document).ready(function(){

// Lấy dữ liệu
	getdt();

//Xóa
	$("table").on('click', '.delete_data',function(){
		var id = $(this).attr('id');
		if(confirm("Bạn có muốn xóa sinh viên?")){
			$.get("/xoa/"+id, function(){ getdt(); });
		}
	});

//Thêm mới
	$("#addnew").submit(function(e){
		e.preventDefault();
		var x = $('#addnew').serializeArray();
		if(postData("/them", x, ".addsv") == 0){
			getdt();
			this.reset();
		}
	});

//get data from table
	$("table").on('click','.edit_data',function(){
        var trElem = $(this).closest("tr");// grabs the button parent tr element
        var id = $(trElem).children("td")[0];
       	var mssv = $(trElem).children("td")[1];
       	var name = $(trElem).children("td")[2];
       	var sex = $(trElem).children("td")[3];
       	var birthday = $(trElem).children("td")[4];
       	$('#edit input[name="id"]').val($(id).text());
       	$('#edit input[name="mssv"]').val($(mssv).text());
       	$('#edit input[name="name"]').val($(name).text());
       	$('#edit input[name="sex"]').val($(sex).text());
       	$('#edit input[name="birthday"]').val($(birthday).text());
	});

//Sửa
	$("#edit").submit(function(e){
		e.preventDefault();
		var x = $('#edit').serializeArray();
		postData("/sua", x, ".editsv");
		if(postData("/sua", x, ".editsv") == 0){
			getdt();
		}

	});
});
