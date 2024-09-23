class PersonList{
    constructor(songs){
        this.songs = songs; 
    }

    sort(){
        SortClient.sort(this.persons);
    }
}