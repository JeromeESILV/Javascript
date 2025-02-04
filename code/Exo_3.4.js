String.prototype.snake_case = function() { //replace all non-alpha with _ and put in lower case

        const arr = this.toLowerCase().split(/[\W]+/); //regex for non alphanumeric
        
        return console.log(arr.join("_"));
    }

    "Hi, I'm Jerome Dupret!".snake_case();