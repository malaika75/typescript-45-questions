let sandwich = ["bread", "tomato", "pattie", "lettuce", "mayo"];
function sandwich1(sandwich:string[]){
    sandwich.push("ketchup");
    sandwich.forEach(sandwich =>{
        console.log (sandwich)
    })
}
console.log ("Making a sandwich with these ingredients");
sandwich1(sandwich)