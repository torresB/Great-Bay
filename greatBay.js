var inquirer = require('inquirer');
var mysql = require('mysql');

var userChoice;

inquirer
    .prompt([{
        type: 'list',
        name: 'userChoice',
        message: 'Would you like to Post an item or Bid on an item?',
        choices: ['post', 'bid']
    }, ])
    .then(function( answer ) {
        console.log("userChoice", answer.userChoice);
        switch (answer.userChoice) {
            case "post":
                postItem();
                break;
            case "bid":
                postBid();
                break;
            default:
                console.log("Error: try again");

        }

    });

function postItem() {
    console.log("post");
}

function postBid() {
    console.log("bid");
}