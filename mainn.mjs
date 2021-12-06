function videoPlay(id){
    const urlSecreta = "https://paginawebseguramuyseguramasquelfbi.com" + id
    console.log("Se está reproducionedo desde la url" + urlSecreta);
}


function videoStop(){
    const urlSecreta = "https://paginawebseguramuyseguramasquelfbi.com";
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

//voler 'privados', esconde metodos y atributos 
//no permitir la alteracion de metodos y atributos 

//Encapsular en JS
//Getters & Setters
//Namespaces 
//Object.defineProperties
//Modulos de {} ES6

class Course{
    constructor({
        name, 
        classes=[],
    }){
        this._name = name;
        this.classes = classes;
    }

    get name(){
        return this._name;
    }
    //changeName(nuevoNombre){
        //this._name = nuevoNombre;
    set name(nuevoNombre){
        if(nuevoNombre === "Fuck"){
            console.error("Web...no");
        } else {
            this._name = nuevoNombre;
        }
    }
}

const cursoProgBascia = new Course({
    name: "curso gratis de programacion Basica",
});

cursoProgBascia.name = ""
//cursoProgBasic.changeName("") //correcto pero no es forma getters and setter
//cursoProgBasic.changeName("nuevoNombre") //no es forma getters and setters.


const cursoDefinitivoHTML = new Course({
    name: "HTML & CSS",
});
const cursoPractioCSS = new Course({
    name: "Collest CSS",
});

class LearningPaths{
    constructor({
        name, 
        courses = [], 
        description, 
        level=[],
    }){
        this.name = name;
        this.courses = courses
        this.description = description; 
        this.level = level;
    }
}

const escuelaWeb = new LearningPaths({
    name: "Escuela de Desarrollo Web", 
    courses:[

        cursoPractioCSS, 
        cursoDefinitivoHTML,
    ],
});
const escuelaVG = new LearningPaths({
    name: "Escuela de Video Juegos", 
    courses:[
        "JS Phraser", 
        "Unity 3D",
    ],
});
const escuelaData = new LearningPaths(
    {
        name: "Escuela de DataScience", 
        courses:[
            "DataBusinness", 
            "Phyton",
        ],
    }
);


class Studentt {
    constructor({
        name, 
        email, 
        username, 
        twitter = undefined, 
        instagram = undefined,
        facebook = undefined, 
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name; 
        this.email = email; 
        this.username = username; 
        this.socialMedia = {
            twitter, 
            instagram, 
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
};

const juan2 = new Studentt({
    name: "JuaneX", 
    username: "Juanitotot", 
    emial: "janititio@correo.com",
    twitter: "juanitoito", 
    LearningPaths:[
        escuelaWeb,
        escuelaVG,
    ],
});

const miguelito23 = new Studentt({
    name: "miguelitoto",
    username: "Happy Miguelito", 
    facebook: "migulito2000",
    LearningPaths:[
        escuelaWeb, 
        escuelaData,
    ]
});