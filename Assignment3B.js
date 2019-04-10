var PA3B = {
  
  faceChoices: [4, 6, 8, 10, 12, 20, 100],
  
  die: function(f) {
    var faces = f;
    var value = 1;
    
    
    return {
      getFaceValue: function() { /* returns the current face value of the die */ 
      
      
      return this.value;
        
        //working
        
      
      },
      getNumFaces: function() { /* returns the number of faces of the die */ 
      
        f = faceChoices[Math.floor(Math.random() * faceChoices.length)];
        
        
        //working
      
      },
      toString: function() { /*  returns the string representation of the number of faces and the current face value, separated by an equals sign; for example, "d100 = 47" (see below for more examples) */
      
        var string = "d" + numFaces + " = " + faceValue;
        
        return string;
      
      },
      isGreater: function(d) { /*  which accepts another die object as a parameter and which returns true if the other die has a lower number of faces, or if the other die has the same number of faces but a lower face value, and false in all other situations. */ },
      
      
      
      
      roll: function() { /* sets the face value of the die to a uniform random number between 1 and the number of faces, and returns this value to the caller. */
      
        this.value = Math.floor(Math.random() * numFaces);
        
        return this.value;
        }

        
    };
  },

  start: function() {
    // INSERT YOUR CODE HERE
    
    
    var d = new die(faceChoices);
    d.roll();
    
    
  }
  
};

PA3B.start();

/*
Exception: ReferenceError: die is not defined
start@Scratchpad/11:55:5
@Scratchpad/11:63:1
*/
/*
Exception: ReferenceError: die is not defined
start@Scratchpad/11:55:9
@Scratchpad/11:63:1
*/