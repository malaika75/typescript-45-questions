var invitation = ["samra", "zaira", "nashra", "laiba", "ramsha", "kinza", "rumaisa", "rahat",];
invitation.forEach(function (invitation) {
    console.log(" Dear ".concat(invitation, ", would you like to join me for dinner? "));
});
var invitation1 = ["samra", "zaira", "nashra", "laiba", "ramsha", "kinza", "rumaisa", "rahat"];
console.log("".concat(invitation1, " can't make it to dinner."));
var newInvitation = "zaira baby";
invitation[invitation.indexOf("zaira baby")] = newInvitation;
invitation.forEach(function (invitation) {
    console.log(" dear ".concat(invitation, " would you like to join me for dinner"));
});
