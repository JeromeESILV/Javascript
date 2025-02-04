//creat a function to Capitalize the first letter of a string
function ucfirst (chaine) {
    if(typeof chaine === "string" ){
      var firstLetter = chaine.charAt(0).toUpperCase(); //You can string a bunch of functions back to back
      const rest = chaine.substring(1);//creating a sub string to splice the wanted letter
      const cap = firstLetter.concat(rest);
      return console.log(cap);
    }else{
      return console.log("Tell me why");
    }
  }
    //console log is a print function

    ucfirst("a sentence to test"); //Calling the function