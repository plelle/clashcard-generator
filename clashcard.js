"use strict";

class BasicCard {
    constructor(front,back){
        this.front = front;
        this.back = back;
    }

    save(){
        var fs = require('fs');
        fs.appendFile('log.txt', "Basic Flashcard : \t Front : " + this.front + ", \t Back : " + this.back + "\n");
    }
}

class ClozeCard{
    constructor(text,cloze){
        this.text = text;
        this.cloze = cloze;
    }

    save(){
        var fs = require('fs');
        fs.appendFile("log.txt", "Cloze Flashcard : \t Front : " + this.text + ", \t Back : " + this.cloze + "\n");
    }
}

var typeOfCard = process.argv[2];
var arg1 = process.argv[3];
var arg2 = process.argv[4];

if (typeOfCard == "basic"){
    var cardBasic = new BasicCard(arg1, arg2);
    cardBasic.save();
} else if (typeOfCard == "cloze"){
    var cardCloze = new ClozeCard(arg1, arg2);
    cardCloze.save();
} else{
    console.log("Pick between basic of cloze please")
}

