// rework ucfirst into a prototype
String.prototype.ucfirst = function(){ //Creating a prototype can be called anywhere in the world, or so i understand.
    // the first variable of a prototype doesnt need to be declared and is replaced by "this"
    var firstLetter = this.charAt(0).toUpperCase();
    const rest = this.substring(1);
    const cap = firstLetter.concat(rest);
    return console.log(cap);
}

"hi jfe fdsqj ids".ucfirst();