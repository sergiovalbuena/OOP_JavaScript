//objeto literal 
const natalia = {
    name: "Natalia",
    age: 20, 
    approvedCourses: [
        "Basic HTML & CSS", 
        "Workshop HTML & CSS"
    ], 
    //methodo en JS
    aprobarCurso(nuevoCurso){
        this.approvedCourses.push(nuevoCurso);
    },
};



function Student(name, age, approvedCourses){
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
    //this.aprobarCurso = function (nuevoCurso){
    //    this.approvedCourses.push(nuevoCurso);
    //}
}

Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.approvedCourses.push(nuevoCurso);
};
//intancia de prototype ..usando new 
const juanita = new Student(
    "Jaunita Aguilar", 
    15, 
    [
       "3D Rendering",
       "Printing 3D", 
    ],
);


//CLASES
//protoipos con la sintaxsis de clases
//las clases en js son prototipos 
class Student2 {
    //methodo constructor
    //constructor(name, age, approvedCourses){
    constructor({
        name, 
        age,
        gender = 'none',  
        approvedCourses,
        email, 
    }){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.approvedCourses = approvedCourses;
        this.email = email;
        
    }

    //crear un methodo cualquiera
    aprobarCurso(nuevoCurso){
        this.approvedCourses.push(nuevoCurso);
    }
};

const miguelito = new Student2(
    "Niguel", 
    24, 
    [
       "Data Analytics", 
       "Computer Scientific", 
    ],

);
//llamado para cuando se recibe un objeto{} como 
//parametro en los argumentos() del constructor
const sergio = new Student2({
    email: "correo@email.com",
    name: "Sergio", 
    age: 28, 
    approvedCourses:[
        "HTML5 & coolest CSS3 #Grid",
        "GitHub and 2022 workflow",
    ],
});