import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageLaunchComponent } from './homepage-launch.component';

describe('HomepageLaunchComponent', () => {
  let component: HomepageLaunchComponent;
  let fixture: ComponentFixture<HomepageLaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
