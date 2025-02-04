function verlan (chaine) { // reverse each word
  if(typeof chaine === "string" ){
      let arr = chaine.split(/ /); //regex for spaces. Split chaine for every word inputed.
      var rev = new Array(); //Initialize a new empty array to hold reversed array later.
      
      for(let i = 0; i < arr.length; i++){ //For every word in our arr 
        var arr2 = arr[i].slice(); // slice up each letter into arr2

        for(let j = 1; j <= arr2.length; j++){ // rev is the reversed array of arr2
          rev[j - 1] = arr2[arr2.length - j]; // rev[0] = arr2[LAST], rev[1] = arr2[LAST - 1] ... rev[LAST] = arr2[0]
        }
        arr[i] = rev.join("") // Join back up EACH reversed word into arr
        rev = [];
      }

      return console.log(arr.join(" "));
      
      }else{
        return "";
      }  
}
    verlan("convict");