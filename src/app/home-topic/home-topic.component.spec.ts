import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopicComponent } from './home-topic.component';

describe('HomeTopicComponent', () => {
  let component: HomeTopicComponent;
  let fixture: ComponentFixture<HomeTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
