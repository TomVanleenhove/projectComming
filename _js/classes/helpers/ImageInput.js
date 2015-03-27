module.exports = (function(){

  function ImageInput(){
  	if (window.File && window.FileReader && window.FileList && window.Blob) {
			initImages()
		} 
  }
  function initImages(){
		var imageinputs = document.querySelectorAll('.image-input');
		
		//[].forEach.call( imageinputs, initimageinput());
		
		for(var i = 0; i < imageinputs.length; i++){
			console.log(imageinputs[i]);
			
			initimageinput(imageinputs[i]);

		}
		
	}
  function initimageinput(el){
		el.classList.add('image-input-js');
		
		var fileinput = el.querySelector('input[type=file]');
		
		var previewcontainer = document.createElement("div");
		previewcontainer.classList.add('image-input-preview');
		previewcontainer.setAttribute("id", "imagepreviewkader");
		el.insertBefore(previewcontainer,fileinput);
		
		fileinput.addEventListener('change', function(e){
			
			var files = e.target.files; // FileList object

			// Loop through the FileList and render image files as thumbnails.
			for (var i = 0, f; f = files[i]; i++) {

			  // Only process image files.
			  if (!f.type.match('image.*')) {
				continue;
			  }

			  var reader = new FileReader();

			  // Closure to capture the file information.
			  reader.onload = (function(theFile) {
				return function(e) {
				  // Render thumbnails
				  
				  var errors = [];
				  var errors2 = [];
				  
					var img = new Image();
					img.src = reader.result;
					console.log(img.width);
										
					if(errors.length != 0){
						
						
					}else if(errors.length === 0){
						
						previewcontainer.style.backgroundImage = 'url(' + e.target.result + ')';

					}
					
					if(errors2.length != 0){
						
						
					}else if(errors2.length === 0){
						
						previewcontainer.style.backgroundImage = 'url(' + e.target.result + ')';

					}
				  
			};
			  })(f);

			  // Read in the image file as a data URL.
			  reader.readAsDataURL(f);
			}
			
			
			
		});
	}
	return ImageInput;
})();


