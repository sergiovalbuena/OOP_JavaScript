function videoPlay(id){
    const urlSecreta = "https://paginawebseguramuyseguramasquelfbi.com" + id
    console.log("Se está reproducionedo desde la url" + urlSecreta);
}


function videoStop(){
    const urlSecreta = "https://paginawebseguramuyseguramasquelfbi.com" + id
    console.log("Pausamos desde la url" + urlSecreta);
}


export class coursesClass {
    constructor({
        name, 
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoID);
    }
}