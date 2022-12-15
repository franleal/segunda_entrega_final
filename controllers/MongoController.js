import mongoose from "mongoose";

class Contenedor {
    constructor() {
        this.connection = mongoose;
    }

    async save(objeto){
        
        try{
            const productosCollection = 'productos'

            const ProductosSchema = new mongoose.Schema({
                title:{type:String, require:true, max:100},
                price:{type:Number, require:true, max:100},
                thumbnail:{type:String, require:true, max:100}

            })
            const productosDAO = mongoose.model(productosCollection,ProductosSchema)

        }
        
        catch (error) {
            console.log(`Error agregando productos a mongoose: ${error.message}`);
        } 
        
    }
    

}
module.exports = Contenedor;