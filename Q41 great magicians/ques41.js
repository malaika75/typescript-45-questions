var magicians1 = ["alice", "david", "chris"];
function show_magicians(magicians1) {
    for (var i = 0; i < magicians1.length; i++) {
        magicians1[i] = magicians1[i] + " the great ";
    }
}
show_magicians(magicians1);
console.log(magicians1);
