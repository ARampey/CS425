/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var PA3B = {
 
  faceChoices: [4, 6, 8, 10, 12, 20, 100],
 
  die: function(f) {
    var faces = f;
    var value = 1;
    return {
      getFaceValue: function() { 
        
        return this.value; 
      
      },
      getNumFaces: function() { 
      
        return this.faces;
        
      },
      toString: function() { 
      
      var string = "d" + faces + " = " + value;
        console.log(string);
        return string;
      
      },
      isGreater: function(d) { 
      
      if (this.faces > d.faces || this.faces == d.faces && this.value > d.value) {
        return true;
      }
      return false;
      
      },
      roll: function() { 
      value = Math.floor(Math.random() * faces) + 1;
      //console.log(faces);
        return value;
        
      
      }
    };
  },

  start: function() {
   /*var numDie = this.faceChoices[Math.floor(Math.random() * this.faceChoices.length)];
   d = this.die(numDie);
   d.roll();
   d.toString();*/
    
   var playerOnePoints = 0;
   var playerTwoPoints = 0;
    
   var playerOneString = "Player 1: ";
   var playerTwoString = "Player 2: ";
   var i;
   for (i = 0; i < 5; i++) {
     pOneDie = this.die(this.faceChoices[Math.floor(Math.random() * this.faceChoices.length)]);
     pTwoDie = this.die(this.faceChoices[Math.floor(Math.random() * this.faceChoices.length)]); 
     pOneDie.roll();
     pTwoDie.roll();
     playerOneString += pOneDie.toString() + ", ";
     playerTwoString += pTwoDie.toString() + ", ";
     
     if (pOneDie.isGreater(pTwoDie)) {
       playerOnePoints++;
     }
     else if (pTwoDie.isGreater(pOneDie)) {
       playerTwoPoints++;
     }
   }
    console.log(playerOneString);
    console.log(playerTwoString);
    console.log(playerOnePoints);
    console.log(playerTwoPoints);
    
    
  }
 
};

PA3B.start();
