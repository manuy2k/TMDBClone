import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatspopularComponent } from './whatspopular.component';

describe('WhatspopularComponent', () => {
  let component: WhatspopularComponent;
  let fixture: ComponentFixture<WhatspopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatspopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatspopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
