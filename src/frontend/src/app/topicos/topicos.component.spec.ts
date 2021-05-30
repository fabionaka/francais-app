import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicosComponent } from './topicos.component';

describe('TopicosComponent', () => {
  let component: TopicosComponent;
  let fixture: ComponentFixture<TopicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
