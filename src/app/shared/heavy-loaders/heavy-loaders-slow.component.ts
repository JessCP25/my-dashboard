import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>heavy-loaders-slow works!</p>`,
})
export class HeavyLoadersSlowComponent { }
