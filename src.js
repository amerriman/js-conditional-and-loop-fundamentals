var yourCode = {
  commafy: function(n) {
      var willBeStr = [];
    for (var i = 1; i < n+1; i++) {
      willBeStr.push(i);
    }
    return willBeStr.join(",");
  },

  joinToString: function(array) {
    str = [];
    for (var i = 0; i < array.length; i++) {
      if(i ===array.length -1){
        str.push(array[i] + " oh my.");}
      else{
        str.push(array[i] + " and ");
      }
    }
    return str.join("");
  },

  printBracketedNumbers: function(num){
    bracket = "";
    counter = 0;
    while (counter<=num ){
        bracket+= "["+counter+"]";
      counter++;
    }
    return bracket;
  },

  sumOfN: function(num){
    var total = 0;
    var counter = 0;
    for (var i = 1; i <=num; i++) {
      counter = i;
      total += counter;
    }
    return total;
  },

  moviesFor: function(actor){
    if (actor === "Robin Williams"){
      return "Jumanji, Hook, Good Will Hunting";
    }
    else if (actor === "Daniel Radcliffe"){
      return "All of the Harry Potters";
    }
    else if (actor === "Sandra Bullock"){
      return "Gravity, The Lake House, The Blind Side";
    }
    else if (actor === undefined){
      return "Please provide an actor or actress";
    }
  },

  joinWithForAndIndex: function(arr){
    var string = "";
    for (var i = 0; i < arr.length; i++){
        string += arr[i] + [i];
    }
      return string;
  },

  joinWithForAndToken: function(arr, token){
    var string = "";
    for (var i = 0; i < arr.length; i++) {
      if(i == arr.length-1){
        string += arr[i];
      }
      else{
        string += arr[i] + token;
      }
    }
    return string;
  },

};

module.exports = yourCode;
