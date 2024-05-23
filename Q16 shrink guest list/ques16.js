var beforeguests = ["samra", "zaira", "nahra", "laiba", "ramsha", "kinza", "rumaisa", "rahat"];
console.log("unfortunately, i can only invite two people for dinner.");
while (beforeguests.length > 2) {
    var removedguest = beforeguests.pop();
    console.log("sorry ".concat(removedguest, " i can't invite you for dinner"));
}
var newGuests = ["samra", "zaira"];
newGuests.forEach(function (newGuests) {
    console.log("dear ".concat(newGuests, " your still invite to dinner"));
});
newGuests.splice(0, newGuests.length);
console.log(newGuests);
