import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './title.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class TitleComponent { }