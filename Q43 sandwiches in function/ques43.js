var sandwich = ["bread", "tomato", "pattie", "lettuce", "mayo"];
function sandwich1(sandwich) {
    sandwich.push("ketchup");
    sandwich.forEach(function (sandwich) {
        console.log(sandwich);
    });
}
console.log("Making a sandwich with these ingredients");
sandwich1(sandwich);
