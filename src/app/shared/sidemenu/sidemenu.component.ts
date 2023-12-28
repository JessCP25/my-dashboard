import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './sidemenu.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SidemenuComponent { }
