import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  produto: boolean = false;
  title = 'ecommerce-frontend';





  public cleanVariables(): void {
    this.produto = false;
  }

  public setProductPage(){
    this.cleanVariables();
    this.produto = true;
  }



}

