import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should cleanVariables', () => {

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.cleanVariables();
    expect(app.produto).toBeFalse();
    expect(app.loja).toBeFalse();
  });

  it('should ProdutoPage', () => {

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ProdutoPage();
    expect(app.produto).toBeTrue();
    expect(app.loja).toBeFalse();
  });

  it('should LojaPage', () => {

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.LojaPage();
    expect(app.produto).toBeFalse();
    expect(app.loja).toBeTrue();
  });


});
