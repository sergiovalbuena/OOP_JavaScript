class Course {
    #name;
  
    constructor({
      name,
      classes = []
    }) {
      this.#name = name;
      this.classes = classes;
    }
  
    get name() {
      return this.#name;
    }
  
    set name(nuevoNombrecito) {
      if (nuevoNombrecito === 'Curso Malito de Programación Básica') {
        console.error('Web... no');
      } else {
        this.#name = nuevoNombrecito;
      }
    }
  }