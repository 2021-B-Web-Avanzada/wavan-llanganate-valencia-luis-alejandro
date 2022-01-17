import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularRepositoryComponent } from './popular-repository.component';

describe('PopularRepositoryComponent', () => {
  let component: PopularRepositoryComponent;
  let fixture: ComponentFixture<PopularRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularRepositoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
