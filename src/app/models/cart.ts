import { Anita } from "./Anita"
import { User } from "./user";
  
export class cartproduct{
    anitas : Anita 
    qty : number
    constructor(anitas : Anita ){
        this.anitas = anitas
        this.qty = 1
    }
    addQuantity(){
        this.qty++
    }
  }
export class Cart{
    user !: User
    items : cartproduct[] = []
    total : number = 0
  
    add(product: Anita){
      this.total += product.price
      let found : boolean = false;
      for(let item of this.items){
        if(item.anitas.code == product.code){
          item.qty++
          found = true
          break
        }
      }
      if(!found)
        this.items.push(new cartproduct(product))
    }
  
    delete(product: Anita){
      let temp : cartproduct[] = []
      for(let item of this.items){
        let val = this.items.pop()
        if(val!=null){
          if(val.anitas.code == product.code) break
          else temp.push(val)
        }
      }
      for(let item of temp)
        this.items.push(item)
  
    }
    remove(product: Anita){
      this.total -= product.price
      for(let item of this.items){
        if(item.anitas.code == product.code){
          item.qty--
          if(item.qty==0){
            this.delete(product)
            break
          }
        }
      }
    }
  
  }

/*add(an:Anita){
  for(let a of this.anitas){
      if(an === a.anitas){
          a.addQuantity();
          this.sum+=an.price;
      }
      this.sum+=an.price
      this.anitas.push(new cartproduct(an))
     }
  }
  getanitas(){
      return this.anitas;
  }
  deqQuantity(){}
  addQuantity(){}
}--*/