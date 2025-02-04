function snake_case (chaine) { //replace all non-alpha with _ and put in lower case
    if(typeof chaine === "string" ){
        chaine = chaine.toLowerCase();
        const arr = chaine.split(/[\W]+/); //regex for non alphanumeric
        
        return console.log(arr.join("_"));
        
        }else{
          return "";
        }
}

    snake_case("Hi, I'm Jerome Dupret!")