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
  
  function type_check(variable, conf) {
      if(!type_check_v2) return false;

      if(conf.properties){
          return conf.properties;
      }
  }
  
  console.log(type_check({prop1: 'test'}, {type: 'object', properties:{prop1: {type: 'string'}}})); //true
  console.log( type_check({prop1: 'test'}, {type: 'object', properties:{prop2: {value: 'string'}}})); //false