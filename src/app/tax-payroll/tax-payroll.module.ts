import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { AllInOneBankComponent } from './all-in-one-bank/all-in-one-bank.component';



@NgModule({
  declarations: [CalculatorComponent, AllInOneBankComponent],
  imports: [
    CommonModule
  ]
})
export class TaxPayrollModule { }
