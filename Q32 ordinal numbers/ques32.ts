let num1 :number[] = [1,2,3,4,5,6,7,8,9,10]
num1.forEach(num1 =>{
    let suffix = "th"
    if (num1 === 1){
        suffix = "st"
    }else if (num1 === 2){
        suffix = "nd"
    }else if (num1 === 3){
        suffix = "rd"
    }
    console.log (`${num1}${suffix}`)

    
})