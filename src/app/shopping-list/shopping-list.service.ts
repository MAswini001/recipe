
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class shoppingListService{
    ingredientChanged=new Subject<Ingredient[]>();
    startedEditing =new Subject<number>();


 private ingredients: Ingredient[] = [
        new Ingredient('apple', 10),
        new Ingredient('orange', 20),
        
     ];

     getIngredients(){
         return this.ingredients.slice();
     }
     getIngredient(index:number){
         return this.ingredients[index];

     }
     addIngredient(ingredient:Ingredient){
         this.ingredients.push(ingredient);
         this.ingredientChanged.next(this.ingredients.slice());
     }
     addIngredients(ingredients:Ingredient[]){
        // for(let ingredient of ingredients){
          //   this.addIngredient(Ingredient);
         //}
         this.ingredients.push(...ingredients);
         this.ingredientChanged.next(this.ingredients.slice());

     }
     updateIngredient(index:number,newIngrediant:Ingredient){
         this.ingredients[index]=newIngrediant;
         this.ingredientChanged.next(this.ingredients.slice());
     }
     deleteIngredient(index:number){
         this.ingredients.splice(index,1);
         this.ingredientChanged.next(this.ingredients.slice())
     }
}