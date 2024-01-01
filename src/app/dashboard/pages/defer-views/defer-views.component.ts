import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [
    CommonModule, HeavyLoadersSlowComponent
  ],
  templateUrl: './defer-views.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class DeferViewsComponent { }
