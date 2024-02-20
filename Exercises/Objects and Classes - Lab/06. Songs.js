function songs(arr) {

    let numberOfSongs = arr.shift();
    let type = arr.pop();

    class Song {
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time
        }
    }
    let songs = [];
    for (let i = 0; i < numberOfSongs; i++) {
        let songInfo = arr[i].split("_");
        songs.push(new Song(songInfo[0], songInfo[1], songInfo[2]));
    }
    songs.filter(song => song.typeList == type || type == "all").forEach(song => console.log(song.name));
}
// songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
// songs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater']);
songs([2, "like_Replay_3:15", "ban_Photoshop_3:48" ,"all"]);