# file-upload
Upload Single and Multi Files

### Visits

![Image](images/img.png)
(images/img1.png)

## Install 
 	Require Bootstrap getbootstrap.com & JQuery File

---------------------------------------------------------------
 					Header
```
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="includes/custom.css">
```
---------------------------------------------------------------
					Footer
```
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script type="text/javascript" src="includes/custom.js" ></script>
```

## Form 
```
  	<form method="post" id="uploader" >

		<div class="form-group dropFile1">
	        <span class="btn btn-file btn-block">
	            Browse <input type="file" id="files-upload" multiple>
	        </span>
	    </div>
    	<div class="files row"></div>
    
		    <div class="my_file hidden">
		    	<div class="col-sm-3 col-md-3 file">
				    <div class="thumbnail">
				      <img src="" class="img-rounded img-responsive" alt="">
				      <div class="caption">
				        <input type="hidden" name="files[]">
				        <div class="progress hidden">
							<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
							    0%
							</div>
						</div>
						<p align="center" class="file-name" >  </p>
				        <p align="center">
				        	<a class="btn btn-primary fl-upload" data-file="" >
				        		<span class="glyphicon glyphicon-upload" ></span>
				        	</a>
				        	<a class="btn btn-danger rm-file">
				        		<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
				        	</a>
				        </p>
				      </div>
				    </div>
				</div>	
		    </div>
	    <div class="form-group">
	    	<a class="btn btn-info multi-upload" > Upload All </a>
	    </div>
	</form>
```