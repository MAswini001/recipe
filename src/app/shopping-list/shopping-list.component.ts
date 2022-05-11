import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients : ingredient[]=[
   new ingredient('apple', 10),
   new ingredient('orange', 20),
   
];
  constructor() { }

  ngOnInit(): void {
  }
  onIngrediantAdded(ingredient: ingredient){
    this.ingredients.push(ingredient);

  }

}
