"use strict";

let randomDamage = () => {
    // grab a random number with a max of 10, min of 1
    return Math.floor(Math.random() * 10 + 1);  // return that number
}

let chooseOption = (opt1, opt2) => {
    // grab a random number between 0 and 1
    let randNum = Math.round(Math.random());   // round that number to avoid fractions
    return (randNum === 0 ? opt1 : opt2);   // return opt1 if 0, else return opt2
}

let attackPlayer = function (health) {
    // subtract randomDamage from health
    return health - randomDamage();   // return remaining health
}

let logHealth = (player, health) => {

    console.log(`${player} health: ${health}`);   // log player's current health
}

let logDeath = (winner, loser) => {
    // determine a winner and a loser of a fight
    console.log(`${winner} defeated ${loser}`);    // log who won and who lost
}

let isDead = (health) => {
    // determine if a player is dead
    return health <= 0;   // return 'true' if health reaches 0
}

function fight (player1, player2, player1Health, player2Health) {
    // create a loop to run the game until somebody dies
    while (true) {
        
        let attacker = chooseOption('player1', 'player2');   // randomly decides who attacks

        if (attacker === 'player1') {   // when player 1 is attacking:

            console.log(`${player1} attacks ${player2}.`)   // declare the attacker
            player2Health = attackPlayer(player2Health);   // calculate the attack
            logHealth(player2, player2Health);   // log the defender's remaining health
            if (isDead(player2Health) === true) {   // is the defender dead?

                logDeath(player1, player2);   // if so log the death
                break;   // game ends
            }
            
        } else {   //when player 2 is attacking:

            console.log(`${player2} attacks ${player1}.`)   // declare the attacker
            player1Health = attackPlayer(player1Health);   // calculate the attack
            logHealth(player1, player1Health);   // log the defender's remaining health
            if (isDead(player1Health) === true) {   // is the defender dead?

                logDeath(player2, player1);   //if so log the death
                break; // game ends
            }
        }
    }
}

fight('Dylan', 'Bootcamp', 100, 100); // runs game