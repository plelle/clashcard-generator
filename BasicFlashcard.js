var prompt = require('prompt');
var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "pimpin66",
    database: "flashcards",
});

var beginningQs = [{
    name: 'firstQ',
    message: "Do you want to make flashcards or use them?",
    choices: ['Make them', 'Use them']
}]

inquirer.prompt(beginningQs);

var basic = {
    properties:{
        front:{
            description: "What would you like the front of the card to say?",
        },
        back:{
            description: "What would you like the back of the card to say?"
        }
    }
};

prompt.start();

prompt.get(basic, function(err, result){
    var qa = {question: result.front, answer: result.back};
    var query = connection.query("INSERT INTO basic SET ?", qa, function(err, result){
        console.log(query.sql)
        connection.destroy();
    });
});

