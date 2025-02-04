/*function type_check_v2(variable, conf) {
  if (conf.type) {
    if (!type_check_v1(variable, conf.type)) return false;

  }
////////////////
  if(typeof conf.enum === "string") {
    if(!type_check_v1(variable, conf.enum)) return false;
  }
  if(typeof conf.enum === "number") {
    if(!type_check_v1(variable, conf.enum)) return true;
  }
// C'est incorrect, il n'y a pas lieu de tester le type de conf.enum, s'il est présent ce sera toujours un tableau.
// Il faut donc vérifier que la valeur de variable est bien présente dans le tableau renvoyé par conf.enum
////////////////
 
    ///////////
  if(conf.value) {
    if(conf.value === variable) {
      return true;
    } else {
      return false;
    }
  }
// Bien essayé mais cela ne fonctionnera pas pour les objets
    si je fais type_check_v2(
           { foo: "bar" },
           { value: { foo: "bar" } }
       ) =>  // ton code va renvoyer false au lieu de true car deux objets sont créés malgré qu'ils se ressemblent
              // et qui dit 2 objets dit 2 pointeurs différents lorsque l'on fait un === entre 2 objets, il teste les pointeurs
              // d'où le false et pourquoi tu ne passes pas le test objectMatch.
              // Indice: Essaie de transformer tes objets en String, un objet n'est rien d'autre que du JSON :wink:
  /////////// 
  if(conf.enum) {
    if(typeof conf.enum === variable) {
      return true;
    } else {
      return false;
    }
  }
  // Comme dit plus haut pour conf.enum, il faut parcourir les valeurs du tableau conf.enum et vérifier que
  // variable soit au moins présent une fois dans le tableau
  /////////// 
  return true;
} */

/*
function type_check(variable, conf){
  let re = new RegExp(/[^\w]/);

  const arr1 = JSON.stringify(variable).split(re).filter(String);
  const arr2 = JSON.stringify(conf).split(re).filter(String);

  for(let i = 0; i < arr1.length; i++){
    var j = 0;
    while(j < arr2.length){
      if(arr1[i] === arr2[j]){
        return console.log("true");
      }
      j++;
    }
  }
}

type_check(  { foo: "bar" },  { value: { foo: "bar" } });
  */
