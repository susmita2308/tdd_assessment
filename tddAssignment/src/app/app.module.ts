import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatorComponent } from '../calculator/calculator.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule { }
