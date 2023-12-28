import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './defer-options.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class DeferOptionsComponent { }
