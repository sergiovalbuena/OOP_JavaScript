//sacar los datos, abstraer los datos de una clase. 

class Course{
    constructor({
        name, 
        classes=[],
    }){
        this.name = name;
        this.classes = classes;
    }
}

const cursoProgBascia = new Course({
    name: "curso gratis de programacion Basica",
});
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


class Student {
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

const juan2 = new Student({
    name: "JuaneX", 
    username: "Juanitotot", 
    emial: "janititio@correo.com",
    twitter: "juanitoito", 
    LearningPaths:[
        escuelaWeb,
        escuelaVG,
    ],
});

const miguelito23 = new Student({
    name: "miguelitoto",
    username: "Happy Miguelito", 
    facebook: "migulito2000",
    LearningPaths:[
        escuelaWeb, 
        escuelaData,
    ]
});