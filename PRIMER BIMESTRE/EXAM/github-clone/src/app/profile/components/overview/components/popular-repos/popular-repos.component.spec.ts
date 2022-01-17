import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularReposComponent } from './popular-repos.component';

describe('PopularReposComponent', () => {
  let component: PopularReposComponent;
  let fixture: ComponentFixture<PopularReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
