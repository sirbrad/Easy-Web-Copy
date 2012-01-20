define(['jquery', 'Utils/getEl'], function(jQuery, getId){
	var input = getId('input'),
		output = getId('output'),
		group = [];
		
	function render(val) {
		
		// Strip out all line breaks.
		var strSingleLineText = input.value.replace(
			// Replace out the new line character.
			new RegExp( "\\n", "g" ), 
			 
			// Put in ... so we can see a visual representation of where
			// the new line characters were replaced out.
			"</p><p>" 
			);
			
		val = '<p>' + strSingleLineText + '</p>';
		group.push(val.split('<p></p>'));
		arr = group[0];
		
		
		
		for (var i = 0; i < arr.length; i++) {
			var elems = document.createTextNode(arr[i]),
				bre = document.createElement('br');
			
			output.appendChild(elems)
			output.appendChild(bre)
		}	




		 
		 //output.appendChild(document.createTextNode(arr))
	}
		 
	
		
	jQuery(input).bind('focusout', function(e){
		var targ = e.target,
			val = targ.value;
			
			console.log(targ.value)
		
		render(val);
		
	});

});