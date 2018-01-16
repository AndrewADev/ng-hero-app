import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';

describe('HeroService', () => {
  let messageServiceStub: {};



  beforeEach(() => {
    messageServiceStub = {
      add(message: string): void {},
      clear(): void {}
    };

    TestBed.configureTestingModule({
      providers: [
        HeroService,
        {provide: MessageService, useValue: messageServiceStub }]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
