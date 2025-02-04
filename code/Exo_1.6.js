function prop_access(obj, path) {
  if(path=== "" || path===null){
    return obj;
  }

  let sp = path.split(".");
  let j=[];
  let copy = obj;

  if(obj===null){
    return console.log(sp[0] + " not exist.");
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