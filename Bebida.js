//Ejercicio 9
//Apartado A
//En un almacén se guardan un conjunto de  bebidas.
//De los bebidas nos interesa saber su identificador (cada uno tiene uno distinto), 
//cantidad de litros, precio y marca.
//Crear todos sus atributos, constructor, getters, setters y toString

class Bebida{
    _identificador;
    _litros;
    _precio;
    _marca;

    constructor(identificador,litros,precio,marca){
        this._identificador = identificador;
        this._litros        = litros;
        this._precio        = precio;
        this._marca         = marca;
    }

    get identificador(){
        return this._identificador;
    }

    get litros(){
        return this._litros;
    }

    get precio(){
        return this._precio;
    }

    get marca(){
        return this._marca;
    }

    set identificador(nuevoIdentificador){
        this._identificador = nuevoIdentificador;
    }

    set litros(nuevosLitros){
        this._litros = nuevosLitros;
    }

    set precio(nuevoPrecio){
        this._precio = nuevoPrecio;
    }

    set marca(nuevaMarca){
        this._marca = nuevaMarca;
    }

    toString(){
        return `Identificador: ${this._identificador}\nLitros: ${this._litros}\nPrecio: ${this._precio}\nMarca: ${this._marca}`;
    }
}