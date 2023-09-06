/**
 * The following object must contain:
 *  `first_name`property that is of type string
 *  `last_name` property that is of type string
 *  `class_of` property that is of type number
 *   a `full_name` function that would return the concatenation of `first_name` and `last_name` properties.
 *   an `introduction` function that returns a string of a welcome message. The introduction function:
 *      * must call the `full_name()` function to present the person's name.
 *      * must use the `class_of` property in the introduction
 */
/*
const personObject = {
  first_Name: 'Wilmer',
  last_Name : 'Esquivel',
  class_of: 2024,
  full_Name : function() {
    console.log(this.first_Name + " " + this.last_Name);
  }
};

console.log(personObject.first_Name);
console.log(personObject.last_Name);
personObject.full_Name();
//personObject.introduction();

function introduction(){
  console.log('Welcome! My name is ' + personObject.full_Name + ' and I am the class of ' + personObject.class_of + '.');
}
introduction();

//};
//console.log(personObject.full_Name());
//console.log(personObject.introduction());
*/

const personObject = {
  first_Name: "Wilmer",
  last_Name : "Esquivel",
  class_of: 2024,
  full_Name : function() {
    return this.first_Name + " " + this.last_Name;
  },
  introduction : function(full_Name) {
      return "Welcome! My name is " + full_Name() + " and I'm in the class of " + personObject.class_of + ".";
  }
};

module.exports = {
  personObject
};