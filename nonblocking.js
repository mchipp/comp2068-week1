// link to the node filesystem library to read the text files
var fs = require('fs');

// load food asynchronously
var food = fs.readFile('food.txt', 'utf8', function(err, food) {
  // display food list when done
  if(err) {
    console.log(err);
  }
  else {
    console.log(food);
  }
});

// print food heading
console.log('FOOD');

// load food asynchronously
var drinks = fs.readFile('drinks.txt', 'utf8', function(err, drinks) {
  // display food list when done
  if(err) {
    console.log(err);
  }
  else {
    // print food heading
    console.log('\nDRINKS');
    console.log(drinks);
  }
});
