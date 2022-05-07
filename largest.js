var marks = [44, 65, 55, 52, 29, 98, 55, 82];
var max = marks[0];
for (var i = 0; i < marks.length; i++) {
   var element = marks[i];
   if (element > max) {
      max = element;
   }
}

console.log(max);