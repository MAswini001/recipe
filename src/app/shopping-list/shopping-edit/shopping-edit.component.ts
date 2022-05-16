import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { shoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nameInputref!: ElementRef;
 @ViewChild('amountInput') amountInputref!: ElementRef;
 
  constructor(private slService:shoppingListService) { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName = this.nameInputref.nativeElement.value;
    const ingAmount = this.amountInputref.nativeElement.value;
     const newIngrediant = new Ingredient(ingName,ingAmount);
    this.slService.addIngredients(newIngrediant);
    }
}
