import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedIGComponent } from './feed-ig.component';

describe('FeedIGComponent', () => {
  let component: FeedIGComponent;
  let fixture: ComponentFixture<FeedIGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedIGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedIGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
