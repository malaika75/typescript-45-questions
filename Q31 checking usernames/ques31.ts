let user = ["admin", "user1", "user2", "user3", "user4"]
let newusers = ["user5", "user6","user7", "user8"]
newusers.forEach(newusers => {
    if (user.some(user => user.toLowerCase() === newusers.toLowerCase())){
        console.log(`${newusers} we need to add new users`)
    }else{
        console.log(`${newusers} is available`)
    }
})