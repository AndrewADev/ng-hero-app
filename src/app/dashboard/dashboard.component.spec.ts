import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { StubRouterLinkDirective } from '../../testing/router-link-directive-stub';
import { HeroService } from '../hero.service';
import { HeroServiceStub } from '../../testing/hero-service-stub';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  const heroServiceStub: HeroServiceStub = new HeroServiceStub();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        StubRouterLinkDirective
       ],
       providers: [{provide: HeroService, useValue: heroServiceStub}],
       schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
