function UndefinedPropertyError(property, path, object) {
    try{
      property.path;
    }catch(err){
        errMsg = "Property ‘{",property,"}’ not exist for path ‘{",path,"}’ expected one of :", Object.keys(object);
        return errMsg
    }
  }
console.log(UndefinedPropertyError("animal.gender", "gender", {type: "dog", name: "spoky"}));