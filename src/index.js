function generator(input) {
  var index = 0;
  return {
    next: function() {
      if (index < input.length) {
        index += 1;
        return input[index - 1];
      }
      return "";
    }
  };
}

var mygenerator = generator("boomerang");
console.log(mygenerator.next()); // returns "b"
console.log(mygenerator.next()); // returns "o"
mygenerator = generator("toon");
console.log(mygenerator.next()); // returns "t"
