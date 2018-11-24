import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

import { StubRouterLinkDirective } from '../../testing/router-link-directive-stub';

import { Hero } from '../hero';
import { HeroesComponent } from './heroes.component';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  template: ''
})
class MockHeroDetailComponent {
  @Input() hero;
}

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let heroServiceStub: {};
  const emptyHeroes: Hero[] = [];
  // TODO: better typing?
  let linkDes: any;
  let routerLinks: any[] = [];

  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach((async() => {
    heroServiceStub = {
      getHeroes(): Observable<Hero[]> { return of(emptyHeroes as Hero[]); }
    };

    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        MockHeroDetailComponent,
        StubRouterLinkDirective,
       ],
       providers: [
         {provide: HeroService, useValue: heroServiceStub}
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    linkDes = fixture.debugElement.queryAll(By.directive(StubRouterLinkDirective));

    routerLinks = linkDes.map(de => de.injector.get(StubRouterLinkDirective));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
