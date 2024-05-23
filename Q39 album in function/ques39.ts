function album (artist:string , title:string , track:number){
    let album = {artist, title}
    if (track){
        album ['track'] = track
    }
    return album
}
console.log (album("artist one", "the first album", 11));
console.log(album("artist two", "the second album", 12));
console.log(album("artist three", "the third album",13));
