import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  number1: number = 0;
  number2: number = 0;
  sum: any | null = null;

  calculateSum(num1: any , num2: any) {
    console.log(num1);
    console.log(num2);
   let num1Negative =  this.isNegative(num1)
   let num2Negative =  this.isNegative(num2)
 console.log(num1Negative);
 console.log(num2Negative);
 
    if(!num1Negative && !num2Negative){
      this.sum = this.number1 + this.number2;
    }else{
      this.sum = 'negative numbers not allowed'
    }
    
  }

isNegative(number: number): boolean {
    return Math.sign(number) === -1;
}
}

