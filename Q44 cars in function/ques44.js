function make_cars(manufacturers, model, colour, year) {
    var car = {
        manufacturers: manufacturers,
        model: model,
        colour: colour,
        year: year
    };
    return car;
}
console.log(make_cars("ford", "mustang", "red", 2022));
console.log(make_cars("toyota", "corolla", "blue", 2021));
