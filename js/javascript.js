
document.getElementById('SignUpForm').onsubmit = function(e) { // check if password is correct
	var pass = document.getElementById('password').value ; //get password 
	var passconf = document.getElementById('passconfirm').value;//get re-password

	var firstchar = pass.charAt(0).match(/[A-Z]/); //return value if first char is uppercase or not

	var lastchar = pass.charAt(pass.length-1).match(/[0-9]/); // return value if last index is number
	


	if (pass.length <8 || pass.length >12 || firstchar==null || lastchar==null) { //check if password entered is correct
		alert ("Your password must begin with uppercase letter ,ends with a number and its length between 8-12 ");
		e.preventDefault();
	}

	else if (pass !== passconf) {//confirmation password checking
		alert("The passwords doesn't match");
		e.preventDefault();
	}


}


function hilght(X){ //this happen when foucs
	X.style.backgroundColor = "#FFE0B2" ;
}
function nonhilight(x){ // this happen when blur
	x.style.backgroundColor = "white" ;
}

function onBookFun(check) { // this function happen when user book picnic without sign in
     check =1 ;//this value returned from validate signIn 
    if (check==1) 
    	alert("You have to sign in to can Booking");
}
/*
function signin(){
	
	var check = 1;

	var usertype= "manager";
	alert(check+"    "+usertype);
	
	if(usertype === "manager" || check==1){
		alert("mohmad");

    	document.getElementById("manage").style.visibility = "hidden";
    	
	}
    alert("out alert");

}*/