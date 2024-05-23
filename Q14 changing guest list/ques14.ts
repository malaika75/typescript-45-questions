let beforeList =["samra", "zaira", "nashra", "ramsha", "laiba", "rumaisa"]
let unableToAttend = ["rumaisa"]
console.log (`${unableToAttend} can't make it to dinner.`)
let newInvitation = "arshiya"
beforeList[beforeList.indexOf("rumaisa")] = newInvitation;
beforeList.forEach(beforeList => {
    console.log (` dear ${beforeList} would you like to join me for dinner`)
})
