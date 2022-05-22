
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class shoppingListService{
    ingredientChanged=new Subject<Ingredient[]>();


 private ingredients: Ingredient[] = [
        new Ingredient('apple', 10),
        new Ingredient('orange', 20),
        
     ];

     getIngredients(){
         return this.ingredients.slice();
     }
     addIngredients(ingredient:Ingredient){
         this.ingredients.push(ingredient);
         this.ingredientChanged.next(this.ingredients.slice());
     }
     addIngredient(ingredients:Ingredient[]){
        // for(let ingredient of ingredients){
          //   this.addIngredient(Ingredient);
         //}
         this.ingredients.push(...ingredients);
         this.ingredientChanged.next(this.ingredients.slice());

     }
}