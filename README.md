# clicky-game
The objective of this game is to keep clicking on cards without clicking on the same card twice. The app is designed to test your memory by re-shuffling the cards after every click.

# Under the hood
This simple React app was created using "create-react-app". An initial list of playing cards is loaded from a JSON file while a a fisher-yates shuffling alogrithm is used via the 'd3-array' module. A player's concurrent score and high score is maintained via the App Component's state. 
