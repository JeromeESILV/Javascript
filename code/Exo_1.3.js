function camelCase (chaine) {
    if(typeof chaine === "string" ){
      const arr = chaine.split(/[\W_]+/);
      let CC = ""; //Unecessary can directly join array with .join
      
      for(let i = 0; i < arr.length; i++){
        var letterCap = arr[i].charAt(0).toUpperCase();
        const rest = arr[i].substring(1).toLowerCase();
        CC +=  letterCap.concat(rest);
      }
      return CC;
      
      }else{
        return "";
      }
  }