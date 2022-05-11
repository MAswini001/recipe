import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedfeautre='recipe';
  onnavigate(feature:string){
      this.loadedfeautre=feature;
  }
  
}
