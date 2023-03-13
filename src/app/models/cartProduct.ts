import { Anita } from "./Anita"

export class cartproduct{
    anitas : Anita 
    qty : number
    constructor(anita : Anita ){
        this.anitas = anita
        this.qty = 1
    }
    addQuantity(){
        this.qty++
    }

}