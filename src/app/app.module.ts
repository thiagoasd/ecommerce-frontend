import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './modules/produto/produto.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CriarComponent } from './modules/produto/criar/criar.component';
import { ListarComponent } from './modules/produto/listar/listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './modules/produto/editar/editar.component';
import { DeleteComponent } from './modules/produto/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    CriarComponent,
    ListarComponent,
    EditarComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
