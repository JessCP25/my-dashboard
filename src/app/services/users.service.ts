import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Personajes, Result } from '@interfaces/users.interface';
import { delay } from 'rxjs';

interface State {
  users: Result[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    users: []
  })

  public users = computed(()=> this.#state().users)
  public loading = computed(()=> this.#state().loading)

  constructor() {
    this.http.get<Personajes>('https://rickandmortyapi.com/api/character')
      .pipe(delay(1000))
      .subscribe(res => {
        this.#state.set({
          loading: false,
          users: res.results,
        })
      })
  }

  getUserById(id: string) {
    return this.http.get<Result>(`https://rickandmortyapi.com/api/character/${id}`)
      .pipe(delay(1000))
  }
}
