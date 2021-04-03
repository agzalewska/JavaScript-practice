This project contains Vanilla JavaScript code to power a small number guessing game.

Creating a generateTarget() function. This function will be called at the start of each new round in order to generate the new secret target number.

This function should return a random integer between 0 and 9.


Create a compareGuesses() function. This function will be called each round to determine which guess is closest to the target number.

This function:

Has three parameters representing the user (human) guess, a computer guess, and the secret target number to be guessed.
Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
Return true if the human player wins, and false if the computer player wins.

