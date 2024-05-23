let beforeguests = ["samra" , "zaira","nashra", "laiba", "ramsha", "kinza", "rumaisa", "rahat"]
console.log("unfortunately, i can only invite two people for dinner.")
while (beforeguests.length > 2 ){
    let removedguest = beforeguests.pop();
    console.log (`sorry ${removedguest} i can't invite you for dinner`)
    }
    let newGuests = ["samra" , "zaira" ]
newGuests.forEach(newGuests =>{
    console.log (`dear ${newGuests} your still invite to dinner`)
})
newGuests.splice(0 , newGuests.length);
console.log (newGuests)