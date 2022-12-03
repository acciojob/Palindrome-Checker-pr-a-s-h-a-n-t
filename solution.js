 
// function palindrome(str){
//     let revStr = '';
//     for(let i=0; i<str.length; i++){
//         let temp = str.charAt(i);
//         revStr =   temp + revStr ;
//     }
//     if(revStr === str){
// 		return(true)
// 	}
// 	else{
// 		return(false)
		
// 	}

// }
function palindrome(str){
	let lowerStr = str.toLowerCase()
		 
	
    let revStr = '';
    for(let i=0; i<lowerStr.length; i++){
        let temp = lowerStr.charAt(i);
        revStr =   temp + revStr ;
    }
    if(revStr == lowerStr){
		console.log(true)
	}
	else{
		console.log(false)
		
	}

}
module.exports = palindrome

 