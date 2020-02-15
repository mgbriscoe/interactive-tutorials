

/* Tutorial 
// purpose of the exercise is to demonstrate inheritance by 
//using an object where the user and add and remove colours 
// using the 'push' and 'pop' methods.
//this code defines two type each has a single property and
//a single method
//the lower type inherits from the upper type.  

*/

function upperType(){
    this.color = ['red', 'blue', 'green'];
  }
  function lowerType(){}
  // inherit from the superType
  subType.prototype= new upperType();
 // use the pop method to remove the colour blue. 
  var obj1 = new lowerType();
  obj1.color.push('black');
  console.log(obj1.color);
  
  var obj2 = new lowerType();
  console.log(obj2.color);