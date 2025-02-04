String.prototype.vig = function(code) { //Basically You have a Key which shifts up each letter by a space. A = 0 Z = 26
        const arr1 = this.split(""); //arr1 holds the phrase to be ciphered
        const arr2 = code.split(""); //arr2 holds the key to the cipher
        var coded = []; //coded will hold the ciphered text
    
        for(let i = 0; i < this.length; i += code.length){
            for(let j = 0; j < code.length; j++){
            
                let key = arr2[j].toLowerCase().charCodeAt() - "a".charCodeAt(); // number to shift by

                console.log(j);
                if(i + j < this.length){
                    var cipher = arr1[i + j].charCodeAt() + key; // ciphered letter in unicode
                    if(arr1[i + j] === " "){
                        i++; j--;
                        coded[i + j] = arr1[i + j];
                        continue;
                    }
                }else{
                    break;
                }                                

                if(( 90 < cipher && arr1[i + j].charCodeAt() <= 90) || ( 122 < cipher) ){ 
                    cipher = cipher - 26;
                    coded[i + j] =  String.fromCharCode(cipher);
                    //console.log(String.fromCharCode(cipher));
                }else if(cipher > 65){
                    coded[i + j] = String.fromCharCode(cipher);
                    
                }else{
                    coded[i + j] = arr1[i + j];
                    //console.log(arr1[i + j]);
                }

            }
        }
        return console.log(coded.join("").toLowerCase());
}

"une phrase tres tres longue mais qui ne veut absolument rien dire car c est juste un test", "nawakdecheznawak".vig()