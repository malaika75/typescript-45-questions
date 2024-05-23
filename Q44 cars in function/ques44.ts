function make_cars (manufacturers :string, model:string, colour :string, year:number ):object {
    let car = {
        manufacturers,
        model,
        colour,
        year
    }
        return car
        
    }
    
console.log (make_cars("ford", "mustang", "red", 2022))
console.log (make_cars("toyota", "corolla", "blue", 2021))
