var num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num1.forEach(function (num1) {
    var suffix = "th";
    if (num1 === 1) {
        suffix = "st";
    }
    else if (num1 === 2) {
        suffix = "nd";
    }
    else if (num1 === 3) {
        suffix = "rd";
    }
    console.log("".concat(num1).concat(suffix));
});
