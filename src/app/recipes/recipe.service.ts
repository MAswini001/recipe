import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { shoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";



@Injectable()
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();


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

    addIngrediebtsToShoppingList(ingredients:Ingredient[]){

        this.slService.addIngredient(ingredients);
    }
}