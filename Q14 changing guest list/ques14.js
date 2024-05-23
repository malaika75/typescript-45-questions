var beforeList = ["samra", "zaira", "nashra", "ramsha", "laiba", "rumaisa"];
var unableToAttend = ["rumaisa"];
console.log("".concat(unableToAttend, " can't make it to dinner."));
var newInvitation = "arshiya";
beforeList[beforeList.indexOf("rumaisa")] = newInvitation;
beforeList.forEach(function (beforeList) {
    console.log(" dear ".concat(beforeList, " would you like to join me for dinner"));
});
//ye question samamajh nhi aa rha 
