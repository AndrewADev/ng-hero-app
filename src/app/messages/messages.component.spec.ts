import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';
import { MessageService } from '../message.service';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;
  let messageServiceStub: {};
  const testMessages: string[] = ['hi', 'hey there!'];

  beforeEach(async(() => {
    messageServiceStub = {
      messages: testMessages,
      add(message: string): void {},
      clear(): void {}
    };

    TestBed.configureTestingModule({
      declarations: [ MessagesComponent ],
      providers: [
        {provide: MessageService, useValue: messageServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show messages', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain(testMessages[0]);
    expect(compiled.textContent).toContain(testMessages[1]);
  });
});
