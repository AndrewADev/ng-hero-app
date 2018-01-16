import { TestBed, async } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockHeroesComponent,
        MockMessagesComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Hero'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toContain('Hero');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hero');
  }));
});


@Component({
  selector: 'app-heroes',
  template: ''
})
class MockHeroesComponent {
  @Input() hero;
}

@Component({
  selector: 'app-messages',
  template: ''
})
class MockMessagesComponent {
  @Input() hero;
}
