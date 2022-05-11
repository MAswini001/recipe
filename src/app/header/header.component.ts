import { Component, EventEmitter,Output } from "@angular/core";


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{
@Output() featureselcted= new EventEmitter<string>();
onselect(feature:string){
  this.featureselcted.emit(feature);
}
}