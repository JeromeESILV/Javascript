String.prototype.yoda = function() { // reverse order of words
    let arr = this.split(/ /); //regex for spaces. Split chaine for every word inputed.
    var rev = new Array(); //Initialize a new empty array to hold reversed array later.

        for(let j = 1; j <= arr.length; j++){ // rev is the reversed array of arr2
        rev[j - 1] = arr[arr.length - j]; // rev[0] = arr2[LAST], rev[1] = arr2[LAST - 1] ... rev[LAST] = arr2[0]
        }

    return console.log(rev.join(" "));
}
    "Hello World".yoda();