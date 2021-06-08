var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// wrap the game logic in a startGame() function
//when player is defeated and there are no more enemies cal endGame() function that alerts players total stats
// , asks player if they want to play again, 
// if yes then call startGame() function to restart the game
// After the player skips or defeats an enemy (with more bots to fight, ask the player if they want to shop, 
// if not then contue as normal, 
// if yes call the shop() function
// in the shop() function, ask player if they want to refill health or upgrade attack or leave to stop the game
// if refill, subtract money from player and increase power
// if upgrade, subtract money and increase health
// if leave alert goodbye and exit the function
// if any invalid option, call shop() again

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

// function to start a new game
var startGame = function() {
  for (var i= 0; i < enemyNames.length; i++) {
// reset playe stats
platerHealth = 100;
playerAttack = 10;
playerHMoney = 10;
// fight each enemy-robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
  // if player is still alive, keep fighting
  if (playerHealth > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];
    // reset enemyHealth before starting new fight
    enemyHealth = 50;
    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;
    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  }
  // if player isn't alive, stop the game
  else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
  } // this ends the enemyNames for loop
  //after the loop ends, the player is either out of health of out of enemies, so run the endGame
  endGame();
  } // this closes the startGame function

//play again
startGame();
}
}; // this closes the startGame function

// function to end the entire game
var endGame = function() {
  // if player is still alive, player wins
  if (playerHealth > 0) {
    window.alert("Great Job, you've survived the game! You now have a score of " + playerMoney + ".");
  }
else {
  window.alert("You've lost your robot in battle.");
}

// ask player is they;d like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  //restart the game
  startGame();
}
else {
  window,alert("Thank you for playing Robot Gladiators! Come back soon!");
}

} // this ends the endGame function

//start the game when the page loads
startGame();

