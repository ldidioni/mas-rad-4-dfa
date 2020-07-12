import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueMapComponent } from './issue-map.component';

describe('IssueMapComponent', () => {
  let component: IssueMapComponent;
  let fixture: ComponentFixture<IssueMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
