var user = ["admin", "user1", "user2", "user3", "user4"];
var newusers = ["user5", "user6", "user7", "user8"];
newusers.forEach(function (newusers) {
    if (user.some(function (user) { return user.toLowerCase() === newusers.toLowerCase(); })) {
        console.log("".concat(newusers, " we need to add new users"));
    }
    else {
        console.log("".concat(newusers, " is available"));
    }
});
