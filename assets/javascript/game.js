//Dragon image source array
        //var = ["assets/images/GreenDragon.png", "assets/images/Lizzie.png", "assets/images/Baalzack.png", "assets/images/Barbarus.png", "assets/images/Zenith.png"]
        //Click on the door to show a random dragon image to start the game.
        
//Game start (select a dragon by clicking the door and once the dragon image is present activate the dice to allow a single roll of each)
        $("#door").on("click", function() {
            $("#door").attr("src", "assets/images/GreenDragon.png");
            red.addEventListener("click", rollDice1)
            orange.addEventListener("click", rollDice2)
            yellow.addEventListener("click", rollDice3)
            green.addEventListener("click", rollDice4)
            blue.addEventListener("click", rollDice5)
            purple.addEventListener("click", rollDice6)
          });
//Music file source
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "./music.mp3");

// Play on click of door
    $("#door").on("click", function() {
      audioElement.play();
    });
    $("#purple").on("click", function() {
      audioElement.pause();
    });

        //Game running variables 
            var gameRunning = false;
            var diceRolled = true;
            var dragon = $("#dragon");
            var rolledDice1 = false;
            var rolledDice2 = false;
            var rolledDice3 = false;
            var rolledDice4 = false;
            var rolledDice5 = false;
            var rolledDice6 = false;
            var red = document.getElementById("red");
            var orange = document.getElementById("orange");
            var yellow = document.getElementById("yellow");
            var green = document.getElementById("green");
            var blue = document.getElementById("blue");
            var purple = document.getElementById("purple");
            var score = document.getElementById("status");
            var dragonhealth = document.getElementById("dragonhealth");
            var dragonInitialHealth = 65;
            var totalDragonHealth
            var d1 = 0;
            var d2 = 0;
            var d3 = 0;
            var d4 = 0;
            var d5 = 0;
            var d6 = 0;
            var rolledTotal ;
            console.log(rolledTotal);
//New game conditions
            function newGame () {
                gameRunning = true;
                dragonhealth.innerHTML = dragonInitialHealth
            }
// Dragon health decrease 
            function rollDice () {
                rolledTotal = d1 + d2 + d3 + d4 + d5 + d6
                totalDragonHealth = dragonInitialHealth - rolledTotal
                return dragonhealth.innerHTML = totalDragonHealth
            }
//Dice 1 (red)
        function rollDice1(event) {
            event.preventDefault()
            if(rolledDice1 == false){
                d1 = Math.floor(Math.random() * 20) + 1;
                rolledDice1 = true
                alert("You rolled: " + d1);
                rollDice()
                isDragonDead()
            } else {
                window.alert('already rolled')
            }
        }
//Dice 2 (orange)        
        function rollDice2(event) {
            event.preventDefault()
            if(rolledDice2 == false){
                d2 = Math.floor(Math.random() * 20) + 1;
                rolledDice2 = true
                alert("You rolled: " + d2);
                rollDice()
                isDragonDead()
            } else {
                window.alert('already rolled')
            }
        }
//Dice 3 (yellow)
        function rollDice3(event) {
            event.preventDefault()
            if(rolledDice3 == false){
                d3 = Math.floor(Math.random() * 20) + 1;
                rolledDice3 = true
                alert("You rolled: " + d3);
                rollDice()
                isDragonDead()
            } else {
                window.alert('already rolled')
            }
        }
//Dice 4 (green)
        function rollDice4(event) {
            event.preventDefault()
            if(rolledDice4 == false){
                d4 = Math.floor(Math.random() * 20) + 1;
                rolledDice4 = true
                alert("You rolled: " + d4);
                rollDice()
                isDragonDead()
            } else {
                window.alert('already rolled')
            }
        }
//Dice 5 (blue)
        function rollDice5(event) {
            event.preventDefault()
            if(rolledDice5 == false){
                d5 = Math.floor(Math.random() * 20) + 1;
                rolledDice5 = true
                alert("You rolled: " + d5);
                rollDice()
                isDragonDead()
            } else {
                window.alert('already rolled')
            }
        }
//Dice 6 (purple)
        function rollDice6(event) {
            event.preventDefault()
            if(rolledDice6 == false){
                d6 = Math.floor(Math.random() * 20) + 1;
                rolledDice6 = true
                alert("You rolled: " + d6);
                rollDice()
                isDragonDead()
            } else {
                window.alert('already rolled')   
            }
        }
//Win or loose condition  
        function isDragonDead(){
            if(totalDragonHealth <= 0){
                alert('you have won!')
            }else{
            if (rolledDice1 && rolledDice2 && rolledDice3 && rolledDice4 && rolledDice5 && rolledDice6){
                 alert('you have lost!')
                } 
            }
        }
//Call a new game.        
        newGame()
    