import { Component, OnInit } from '@angular/core';
import { ingrediants } from '../shared/ingrediants.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingrediant : ingrediants[]=[
   new ingrediants('apple', 10),
   new ingrediants('orange', 20),
   
];
  constructor() { }

  ngOnInit(): void {
  }
  onIngrediantAdded(ingredian: ingrediants){
    this.ingrediant.push(ingredian);

  }

}
