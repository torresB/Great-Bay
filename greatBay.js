var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Grocero8',
    database : 'greatBay_DB'
  });

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
    inquirer
        .prompt([
            {
                name: 'item_name',
                message: 'What is the item called?',
              },
              {
                  name: 'category',
                  message: 'What is the category!!!!!'
              },
              {
                  name: 'bid',
                  message: "What is your bid?"
              }
            ])
            .then(function(answer) {
                console.log(answer);
                
            });
}

function postBid() {
    console.log("bid");
}