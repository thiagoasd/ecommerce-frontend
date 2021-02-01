import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  produto: boolean = false;
  loja: boolean = true;
  title = 'ecommerce-frontend';

  public cleanVariables(): void {
    this.produto = false;
    this.loja = false;
  }

  public ProdutoPage() {
    this.cleanVariables();
    this.produto = true;
  }

  public LojaPage() {
    this.cleanVariables();
    this.loja = true;
  }


}

