/**
  * @author ibrahim shendy
  * @copyright ibrahim shendy
  */
$(document).ready(function()
{
	$('input[id=files-upload]').change(function()
	{
		$('.files').html('');
		readURL(this);
	})

  	function readURL(input) {

	  	var file_num = 0;
	  	for (var i = 0 ; i < input.files.length; i++) {
			var ext = input.files[i].name.split('.').pop().toLowerCase(); // Get File Extentions ..

			var img = '';
			// About File Image ..
			if($.inArray(ext, ['gif','png','jpg','jpeg']) != -1) {   
				img = 'img';
			} else if($.inArray(ext, ['pdf']) != -1) {
				img = 'images/doc-pdf.png';
			} else if($.inArray(ext, ['txt']) != -1) {
				img = 'images/doc-txt.png';
			} else if($.inArray(ext, ['docx']) != -1) {
				img = 'images/doc-w.png';
			} else {
				img = 'images/file.png';
			}

	  		if (input.files && input.files[i]) {
	  			var reader = new FileReader();
	  					        
		        if(img == 'img'){
			        reader.addEventListener('load' , function (e) {
			        	var filename = $('input[type=file]').prop('files')[file_num].name;

			        	if(filename.length > 20) filename = filename.substring(0,20);
			        	var $myFile = $('.my_file').clone();
				    	$myFile.removeClass('hidden');
						$myFile.find('img').attr('src' , e.target.result);
						$myFile.find('input[name="files[]"]').val(file_num);
					    $myFile.find('.file-name').html(filename);
					    $myFile.find('.fl-upload').attr('data-file' , file_num);
					    $('.files').append($myFile.first());
					    
					    file_num = file_num + 1;
			        });
			    } else {
					var filename = $('input[type=file]').prop('files')[file_num].name;
		        
		        	if(filename.length > 20) filename = filename.substring(0,20);
		        	var $myFile = $('.my_file').clone();
			    	$myFile.removeClass('hidden');
					$myFile.find('img').attr('src' , img);
					$myFile.find('input[name="files[]"]').val(file_num);
				    $myFile.find('.file-name').html(filename);
				    $myFile.find('.fl-upload').attr('data-file' , file_num);
				    $('.files').append($myFile.first());
				    
				    file_num = file_num + 1;
			    }

		    	reader.readAsDataURL(input.files[i]);
		    }
	  	}
  	}
})