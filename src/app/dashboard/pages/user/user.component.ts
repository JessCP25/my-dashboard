import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop'
import { UsersService } from '@services/users.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule, TitleComponent
  ],
  template: `
    <app-title title="User" />

    @if (personaje()) {
      <section>
        <img [srcset]="personaje()?.image" [alt]="personaje()?.name">

        <div>
          <h3> {{personaje()?.name}} </h3>
          <p> Origen: {{personaje()?.origin?.name}} </p>
        </div>
      </section>
    }
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject( UsersService );

  public personaje = toSignal(
    this.route.params.pipe(
      switchMap(({id}) => this.usersService.getUserById(id))
    )
  )
}
