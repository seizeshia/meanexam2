import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentmessageComponent } from './commentmessage.component';

describe('CommentmessageComponent', () => {
  let component: CommentmessageComponent;
  let fixture: ComponentFixture<CommentmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
