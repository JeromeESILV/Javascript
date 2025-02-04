String.prototype.leet = function() {
      let arr = this.split("");
      for(let i = 0; i < arr.length; i++){
        switch (arr[i]){
            case "a":
                case "A":
            arr[i] = "4";
            break;
            
            case "e":
                case "E":
            arr[i] = "3";
            break;
            
            case "i":
                case "I":
            arr[i] = "1";
            break;
            
            case "o":
                case "O":
            arr[i] = "0";
            break;
            
            case "u":
                case "U":
            arr[i] = "(_)";
            break;
            
            case "y":
                case "Y":
            arr[i] = "7";
            break;
        }
      }
      return console.log(arr.join(""));
  }
  "anaconda".leet();