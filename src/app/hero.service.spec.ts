import { TestBed, inject } from '@angular/core/testing';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';

import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';


describe('HeroService', () => {
  let httpClientSpy: {get: jasmine.Spy};
  let messageServiceStub: {};



  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    messageServiceStub = {
      add(message: string): void {},
      clear(): void {}
    };

    TestBed.configureTestingModule({
      providers: [
        HeroService,
        {provide: MessageService, useValue: messageServiceStub },
        {provide: HttpClient, useValue: httpClientSpy}
      ]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));

  it('should return expected heroes (HttpClient called once)',
      inject([HeroService], (service: HeroService) => {
    const expectedHeroes: Hero[] = [
      {id: 12, name: 'Narco'},
      {id: 14, name: 'Celeritas'}
    ];

    // Tutorial references asyncData (in lieu of "of"), which is not inlcuded
    // in our above imports. Some googling failed to reveal where exactly it
    // comes from, and this works, so here we are
    httpClientSpy.get.and.returnValue(of(expectedHeroes));

    service.getHeroes().subscribe(
      heroes => expect(heroes).toEqual(expectedHeroes, 'expected heroes'),
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  }));


  it('should handle error when the server returns a 404',
      inject([HeroService], (service: HeroService) => {
        const errorResponse = new HttpErrorResponse({
          error: 'test 404 error',
          status: 404, statusText: 'Not Found'
        });

        httpClientSpy.get.and.returnValue(_throw(errorResponse));

        service.getHeroes().subscribe(
          heroes => expect(heroes).toEqual(jasmine.any(Array), 'Expected benign type'),
          error => fail('Expected hero service to handle API error')
        );
  }));
});
