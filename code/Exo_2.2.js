function type_check_v1(variable, type) {
  const vartype = typeof variable;
  switch(typeof variable){
    case 'number':
    case 'string':
    case 'boolean':
    case 'function':
    case 'undefined':
      return vartype === type;
    case 'object':
      switch(type){
        case 'array':
          return Array.isArray(variable);
        case 'null':
          return variable === null;
        case 'object':
          return !Array.isArray(variable) && variable !== null;

      }
  }
}

function type_check_v2(variable, conf) {

  if (conf.type) {
    if (!type_check_v1(variable, conf.type)) return false;
  }
  if(conf.value){
    let variablestring = JSON.stringify(variable);
    let confstring = JSON.stringify(conf.value);
    if(variablestring !== confstring){
      return false;
    }
  }
  if(conf.enum) {
    let flag = false;
    for(var val of conf.enum) {
      flag = type_check_v2(variable, {value: val});
      if(flag === true){
        break;
      }
    }
      if(flag === false) {
        return false;
      }
    }
  return true;
}

console.log(type_check_v2(1, {type: 'number'})); // true 
console.log(type_check_v2(1, {value: 1})); // true
console.log(type_check_v2(1, {enum: ["hello", 3]})); // false