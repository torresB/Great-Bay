var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Grocero8',
    database: 'greatBay_DB'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    startPrompt();
});


function startPrompt() {

    inquirer
        .prompt([{
            type: 'list',
            name: 'userChoice',
            message: 'Would you like to Post an item or Bid on an item?',
            choices: ['post', 'bid']
        }, ])
        .then(function (answer) {
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
}

function postItem() {
    console.log("post");
    inquirer
        .prompt([{
                name: 'item_name',
                message: 'What is the item called?',
            },
            {
                name: 'category',
                message: 'What is the category!!!!!'
            },
            {
                name: 'starting_bid',
                message: "What is your bid?"
            }
        ])
        .then(function (answer) {
            console.log(answer);

            console.log("Inserting a new product...\n");
            connection.query(
                "INSERT INTO bids SET ?", {
                    item_name: answer.item_name,
                    category: answer.category,
                    starting_bid: answer.starting_bid
                },
                function (err, res) {
                    if (err) throw err;
                    console.log(res.affectedRows + " bids inserted!\n");
                    startPrompt();
                    // Call updateProduct AFTER the INSERT completes
                }
            );

        });
}

function postBid() {
    console.log("bid");
    console.log("Selecting all bids...\n");
    connection.query("SELECT * FROM bids", function (err, res) {
        var userArray = [];
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            userArray.push(res[i].item_name);
        }

        inquirer
            .prompt([{
                type: 'list',
                name: 'bidSelect',
                message: 'Which is better?',
                choices: userArray
            }, ])
            .then(function(answer) {
                console.info('Answer:', answers.bidSelect);
            });
    });
}