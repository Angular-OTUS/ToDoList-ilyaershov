import { Component, Input } from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @Input() tooltip = '';

  @Input() top = 0;

  @Input() left = 0;
}