import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicHeadComponent } from './topic-head.component';

describe('TopicHeadComponent', () => {
  let component: TopicHeadComponent;
  let fixture: ComponentFixture<TopicHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
