import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPortletComponent } from './chat-portlet.component';

describe('ChatPortletComponent', () => {
  let component: ChatPortletComponent;
  let fixture: ComponentFixture<ChatPortletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatPortletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPortletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
