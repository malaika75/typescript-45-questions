var personName = "malaika zahid";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.toLowerCase().replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
