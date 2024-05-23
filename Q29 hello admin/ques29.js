var greet = ["admin", "user1", "user2", "user3", "user4"];
greet.forEach(function (greet) {
    if (greet == "admin") {
        console.log("hello admin how are you");
    }
    else {
        console.log("hello ".concat(greet, " what are you doing today"));
    }
});
