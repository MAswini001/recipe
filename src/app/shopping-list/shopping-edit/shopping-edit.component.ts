import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ingrediants } from 'src/app/shared/ingrediants.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput')nameInputref!: ElementRef;
 @ViewChild('amountInput')amountInputref!: ElementRef;
 @Output() IngredientAdded = new EventEmitter<ingrediants>();
  constructor() { }

  ngOnInit(): void {
  }
  onadditem(){
    const ingName=this.nameInputref.nativeElement.value;
    const ingAmount=this.amountInputref.nativeElement.value;
     const newIngrediant=new ingrediants(ingName,ingAmount);
     this.IngredientAdded.emit(newIngrediant);

}
}
