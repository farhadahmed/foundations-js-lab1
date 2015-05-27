
/* ----------------- Favorite Animals ----------------------------------------
 The zoo is closing in 20 minutes. You still haven't seen your four favorite
 animals. You only have time for one. Use Math.random() to pick which animal
 to see next. http://www.w3schools.com/jsref/jsref_random.asp
 Hint: read the whole Math.random description on that page and try the examples
*/

// TODO: 10 points
// Assign one of your favorite animals to nextAnimal using Math.random() to pick

exports.chooseAnimal = function() {
  var favoriteAnimals = [ "elephant", "penguin", "eagle", "camel" ],
    nextAnimal;

    // TODO Implement me
    var randomArrayVal = Math.floor(Math.random() * favoriteAnimals.length);
    switch (randomArrayVal) {
      case 0:
      nextAnimal = "elephant";
      break;
      case 1:
      nextAnimal = "penguin";
      break;
      case 2:
      nextAnimal = "eagle";
      break;
      case 3:
      nextAnimal = "camel";
      break;
    }
    return nextAnimal;
};
