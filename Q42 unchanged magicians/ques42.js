var magicians = ["Alice", "David", "chris"];
function make_great(magicians) {
    var greatMagneticians = [];
    magicians.forEach(function (magician) {
        greatMagneticians.push("".concat(magician, " the Great"));
    });
    return greatMagneticians;
}
var greatMagicians = make_great(magicians.slice(0));
console.log("orignal magicians:");
console.log(magicians);
console.log("great magicians:");
console.log(greatMagicians);
