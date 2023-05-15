import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import * as Components from './components/';
import { TooltipDirective } from './directives/tooltip.directive';

@NgModule({
  declarations: [
    Components.ButtonComponent,
    Components.LoadingSpinnerComponent,
    Components.TooltipComponent,
    TooltipDirective,
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    Components.ButtonComponent,
    Components.LoadingSpinnerComponent,
    Components.TooltipComponent,
    TooltipDirective,
  ],
})
export class SharedModule { }
