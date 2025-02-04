function type_check_v1(variable, type) {
  const vartype = typeof variable
  switch(typeof variable) {
    case 'number':
    case 'string':
    case 'boolean':
    case 'function':
    case 'undefined':
      return vartype === type;
    case 'object':
      switch(type) {
        case 'array':
          return Array.isArray(variable);
        case 'null':
          return variable === null;
        case 'object':
          return !Array.isArray(variable) && variable !== null;
      }
  }
}