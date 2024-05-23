let magicians:string[] = ["Alice", "David", "chris"]
function make_great (magicians:string[]) :string[]{
    let greatMagneticians:string[] = [];
    magicians.forEach(magician => {
        greatMagneticians.push(`${magician} the Great`);
    });
    return greatMagneticians
}

let greatMagicians = make_great(magicians.slice(0));
console.log ("orignal magicians:");
console.log(magicians);
console.log ("great magicians:");
console.log(greatMagicians)