import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicArticlesComponent } from './topic-articles.component';

describe('TopicArticlesComponent', () => {
  let component: TopicArticlesComponent;
  let fixture: ComponentFixture<TopicArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
