import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindKeywordsComponent } from './find-keywords.component';

describe('FindKeywordsComponent', () => {
  let component: FindKeywordsComponent;
  let fixture: ComponentFixture<FindKeywordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindKeywordsComponent]
    });
    fixture = TestBed.createComponent(FindKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
