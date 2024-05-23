const personName:string = "malaika zahid"
console.log (personName.toLowerCase())
console.log (personName.toUpperCase())
console.log (personName.toLowerCase().replace(/\b\w/g,(char)=>char.toUpperCase()))