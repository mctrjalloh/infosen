import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadArticleComponent } from './head-article.component';

describe('HeadArticleComponent', () => {
  let component: HeadArticleComponent;
  let fixture: ComponentFixture<HeadArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
