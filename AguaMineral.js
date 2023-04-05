//Apartado B
//Si es agua mineral nos interesa saber también el origen (manantial tal sitio o donde sea).
//Si es una bebida azucarada queremos saber el porcentaje que tiene de azúcar 
//y si tiene o no alguna promoción (si la tiene tendrá un descuento del 10% en el precio).
//Crear todos sus atributos, constructor, getters, setters y toString

class AguaMineral extends Bebida{
    #origen;

    constructor(identificador,litros,precio,marca,origen){
        super(identificador,litros,precio,marca);

        this.#origen = origen;
    }

    get origen(){
        return this.#origen;
    }
    set origen(nuevoOrigen){
        this.#origen = nuevoOrigen;
    }

    toString(){
        const texto = super.toString();
        return `${texto}\nOrigen: ${this.#origen}`;
    }
}

