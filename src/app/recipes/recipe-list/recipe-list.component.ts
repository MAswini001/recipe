import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipewasselcted=new EventEmitter<Recipe>()
  recipes:Recipe[]=[

    new Recipe('This is Recipe','this is simply test','https://purewows3.imgix.net/images/articles/2017_03/healthy_comfortfood_enchiladacasserole.jpg'),
    new Recipe('This is test','this is simply test','https://purewows3.imgix.net/images/articles/2017_03/healthy_comfortfood_enchiladacasserole.jpg')

];

  constructor() { }

  ngOnInit(): void {
  }
  onrecipeselected(recipe:Recipe){

    this.recipewasselcted.emit(recipe);
    
  }

}
