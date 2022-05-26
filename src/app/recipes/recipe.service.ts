
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { shoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";



@Injectable()
export class RecipeService{
 recipesChanged=new Subject<Recipe[]>();   


 private  recipes:Recipe[]=[

        new Recipe('This is Recipe',
        'this is simply test',
        'https://purewows3.imgix.net/images/articles/2017_03/healthy_comfortfood_enchiladacasserole.jpg',
        [
         new Ingredient('Meat',1),
         new Ingredient('french Fries',1)
        ]),
        new Recipe('Another Test Recipe','this is simply test','https://purewows3.imgix.net/images/articles/2017_03/healthy_comfortfood_enchiladacasserole.jpg',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1)
        ])
    
    ];

    constructor(private slService:shoppingListService){}
    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index:number){
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){

        this.slService.addIngredients(ingredients);
    }
    addRecipe(recipe:Recipe){
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index:number,newRecipe:Recipe){
       this.recipes[index]=newRecipe;
       this.recipesChanged.next(this.recipes.slice())
    }
    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}