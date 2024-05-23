let guestlist = ["nahra", "laiba", "ramsha", "kinza", "rumaisa", "rahat"]
console.log (` ${guestlist} good news! i have more guests to join us for dinner`)
guestlist.push("hamza", "wajeeha")
guestlist.unshift("samra", "zaira")
guestlist.splice(2, 0, "usman", "mahnoor")
guestlist.forEach(guestlist=>{
    console.log (`${guestlist} would you like to join me for dinner `)
})