 
function palindrome(str){
    let revStr = '';
    for(let i=0; i<str.length; i++){
        let temp = str.charAt(i);
        revStr =   temp + revStr ;
    }
    if(revStr == str){
		return(true)
	}
	else{
		return(false)
		
	}

}
module.exports = palindrome

 