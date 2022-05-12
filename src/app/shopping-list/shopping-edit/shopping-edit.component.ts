import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nameInputref!: ElementRef;
 @ViewChild('amountInput') amountInputref!: ElementRef;
 @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName = this.nameInputref.nativeElement.value;
    const ingAmount = this.amountInputref.nativeElement.value;
     const newIngrediant = new Ingredient(ingName,ingAmount);
     this.ingredientAdded.emit(newIngrediant);
    }
}
