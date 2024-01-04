import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition-1',
  standalone: true,
  imports: [
    CommonModule, TitleComponent
  ],
  template: `
    <app-title title="View Transition 1"></app-title>
    <section class="flex justify-start">
      <img srcset="https://picsum.photos/id/237/200/300" alt="Picsum" width="200" height="300" style="view-transition-name: hero1"/>
      <div class="bg-blue-800 w-32 h-32 rounded" style="view-transition-name: hero1"></div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class ViewTransitionComponent1 { }
