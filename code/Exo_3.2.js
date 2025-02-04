String.prototype.capitalize = function(){
    const arr = this.split(/[\W]+/); //regex for non alphanumeric
      
      for(let i = 0; i < arr.length; i++){
        var letterCap = arr[i].charAt(0).toUpperCase();
        const rest = arr[i].substring(1).toLowerCase();
        arr[i] =  letterCap.concat(rest);
      }
      return console.log(arr.join(" "));
}

    "i am hooman".capitalize();