import { Hero } from '../app/hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export class HeroServiceStub {
    getHeroes(): Observable<Hero[]> { return of([] as Hero[]); }

    getHero(id: number): Observable<Hero> {return of({} as Hero); }
}
