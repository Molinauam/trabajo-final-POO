
// Clase que representa una persona.
class Persona {
    constructor(nombre = '', edad = 0, sexo = 'H', peso = 0, altura = 0) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        const imc = this.peso / (this.altura ** 2);
        if (imc < 20) return 'Bajo peso';
        if (imc <= 25) return 'Peso ideal';
        return 'Sobrepeso';
    }

    esMayorDeEdad() {
        return this.edad >= 18;
    }

    toString() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Sexo: ${this.sexo}`;
    }
}

// Manejo del formulario de Persona
document.getElementById('formulario-persona').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario

    const nombre = document.getElementById('nombre').value.trim();
    const edad = parseInt(document.getElementById('edad').value) || 0;
    const sexo = document.getElementById('sexo').value;
    const peso = parseFloat(document.getElementById('peso').value) || 0;
    const altura = parseFloat(document.getElementById('altura').value) || 0;

    if (!nombre || edad <= 0 || peso <= 0 || altura <= 0) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }

    const persona = new Persona(nombre, edad, sexo, peso, altura);
    const info = `${persona.toString()}, IMC: ${persona.calcularIMC()}, Mayor de edad: ${persona.esMayorDeEdad()}`;

    const personaInfoDiv = document.getElementById('persona-info');
    const newParagraph = document.createElement('p');
    newParagraph.innerText = info;
    personaInfoDiv.appendChild(newParagraph);
});

// Clase que representa una contraseña.
class Password {
    constructor(longitud = 8) {
        this.longitud = longitud;
        this.contraseña = this.generarPassword();
    }

    generarPassword() {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789012345678901234567890123456789';
        let contrasena = '';
        for (let i = 0; i < this.longitud; i++) {
            contrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return contrasena;
    }

    esFuerte() {
        const mayusculas = this.contraseña.match(/[A-Z]/g) || [];
        const minusculas = this.contraseña.match(/[a-z]/g) || [];
        const numeros = this.contraseña.match(/[0-9]/g) || [];
        console.log(mayusculas.length)
        console.log(minusculas.length)
        console.log(numeros.length)
        return mayusculas.length >= 2 && minusculas.length >= 1 && numeros.length >= 3;
    }

    toString() {
        return this.contraseña;
    }
}

// Manejo del formulario de Contraseña
document.getElementById('formulario-password').addEventListener('submit', function(event) {
    event.preventDefault();

    const longitud = parseInt(document.getElementById('longitud').value) || 10;
    const password = new Password(longitud);
    document.getElementById('password').innerText = `Contraseña: ${password.toString()}, Es Segura: ${password.esFuerte()}`;
});

// Clase que representa una serie de televisión.
class Serie {
    constructor(titulo = '', temporadas = 3) {
        this.titulo = titulo;
        this.temporadas = temporadas;
    }

    toString() {
        return `Título: ${this.titulo}, Temporadas: ${this.temporadas}`;
    }
}

// Manejo del formulario de Serie
document.getElementById('formulario-serie').addEventListener('submit', function(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo-serie').value;
    const temporadas = parseInt(document.getElementById('temporadas').value);
    
    const serie = new Serie(titulo, temporadas);
    document.getElementById('serie').innerText = serie.toString();
});

// Clase que representa un videojuego.
class Videojuego {
    constructor(titulo = '', horasEstimadas = 10) {
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas;
    }

    toString() {
        return `Título: ${this.titulo}, Horas Estimadas: ${this.horasEstimadas}`;
    }
}

// Manejo del formulario de Videojuego
document.getElementById('formulario-videojuego').addEventListener('submit', function(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo-videojuego').value;
    const horasEstimadas = parseInt(document.getElementById('horas-estimadas').value) || 0;
    
    const videojuego = new Videojuego(titulo, horasEstimadas);
    document.getElementById('videojuego').innerText = videojuego.toString();
});

// Clase que representa una cuenta bancaria.
class Cuenta {
    constructor(titular, cantidad = 0) {
        this.titular = titular;
        this.cantidad = cantidad;
    }

    toString() {
        return `Titular: ${this.titular}, Cantidad: ${this.cantidad}`;
    }
}
