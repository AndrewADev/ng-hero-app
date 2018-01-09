import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { HeroesComponent } from './heroes.component';
import { Observable } from 'rxjs/Observable';
import { HeroService } from '../hero.service';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let heroService: HeroService;
  let heroServiceStub: {};

  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach((async() => {
    heroServiceStub = {
      getHeroes(): void {}
    };

    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        MockHeroDetailComponent,
       ],
       providers: [
         {provide: HeroService, useValue: heroServiceStub}
       ]
    })
    .compileComponents();

    heroService = TestBed.get(HeroService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


@Component({
  selector: 'app-hero-detail',
  template: ''
})
class MockHeroDetailComponent {
  @Input() hero;
}
