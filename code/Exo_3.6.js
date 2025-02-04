Object.prototype.prop_access = function(path) {
    if(path=== "" || path===null){
      return this;
    }
  
    let sp = path.split(".");
    let j=[];
    let copy = this;
  
    if(copy===null){
      copy = {};
    }
  
    for(let i of sp){
      j.push(i);
  
      if(i in copy){
        copy = copy[i];
      }else{
        j = j.join(".");
        return console.log(j + " not exist.");
      }
    }
  
    return copy;
  }