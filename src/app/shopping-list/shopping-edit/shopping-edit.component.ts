import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { shoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f')slForm!:NgForm;
 subscription!:Subscription;
 editMode=false;
 editedItemIndex!:number;
 editedItem!:Ingredient;

 
  constructor(private slService:shoppingListService) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.subscription=this.slService.startedEditing
    .
    subscribe((index:number) =>{
      this.editedItemIndex=index;
      this.editMode=true;
      this.editedItem=this.slService.getIngredient(index);
      this.slForm.setValue({
        name:this.editedItem.name,
        amount:this.editedItem.amount
      })
      
    });
  }
  onSubmit(form:NgForm){
     const value=form.value;
     const newIngrediant = new Ingredient(value.name,value.amount);
     if(this.editMode){
       this.slService.updateIngredient(this.editedItemIndex,newIngrediant);
     }
     else{
      this.slService.addIngredient(newIngrediant);
     }
     this.editMode=false;
     form.reset();
    
    }
    onClear(){
      this.slForm.reset();
      this.editMode=false;
      
    }
    onDelete(){
      this.slService.deleteIngredient(this.editedItemIndex)
      this.onClear();
    }
    OnDestroy(){
      this.subscription.unsubscribe();
    }





}


