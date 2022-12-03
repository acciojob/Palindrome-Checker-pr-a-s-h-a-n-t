// complete the given function

function palindrome(str){
    let revStr = '';
    for(let i=0; i<str.length; i++){
        let temp = str.charAt(i);
        revStr =   temp + revStr ;
    }
    return revStr;

}
module.exports = palindrome

 