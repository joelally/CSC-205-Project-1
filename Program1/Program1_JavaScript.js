


  field1.oninput = function() {
    p1.innerHTML = field1.value;
	let x = field1.value;
	let y = x*x;
	let z = y;
	 
	 if(y == z )//this is the best way I could figure out how to determine if something was a number or NaN
	 {
		 p2.innerHTML = ("The square of "+x+" is "+y+".");
	 }
	 else
	 { 
		 p2.innerHTML = (x+" is not numeric.");
	 }
		 
  };
  
 



main_body.onkeydown = function(clear){
	if(clear.key == 'Escape')
	{
		p1.innerHTML = "1";
		p2.innerHTML = "2";
	}
}



