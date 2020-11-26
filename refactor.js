function findFirstStringInBracket(str){
    if(str.length > 0){
       const open = str.indexOf('(') 
       const close = str.indexOf(')')
        
       if (open < 0 && close < 0) {
           return ''
       }
       
       return str.substring(open + 1, close)
    } else{
       return '';
    }
}