//creat a function to Capitalize the first letter of each word in a string
function capitalize (chaine) {
    if(typeof chaine === "string" ){
      const arr = chaine.split(/[\W]+/); //regex for non alphanumeric
      
      for(let i = 0; i < arr.length; i++){
        var letterCap = arr[i].charAt(0).toUpperCase();
        const rest = arr[i].substring(1).toLowerCase();
        arr[i] =  letterCap.concat(rest);
      }
      return console.log(arr.join(" "));
      
      }else{
        return "";
      }
  }
    //console log is a print function

    capitalize("jerome dupret is human");