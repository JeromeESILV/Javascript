String.prototype.camelCase = function(){
      const arr = this.split(/[\W_]+/);
      let CC = ""; //Unecessary can directly join array with .join
      
      for(let i = 0; i < arr.length; i++){
        var letterCap = arr[i].charAt(0).toUpperCase();
        const rest = arr[i].substring(1).toLowerCase();
        CC +=  letterCap.concat(rest);
      }
      return console.log(CC);
  }

"Test sentence for the exercise 3.3".camelCase();