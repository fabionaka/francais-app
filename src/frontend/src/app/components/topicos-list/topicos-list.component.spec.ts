import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicosListComponent } from './topicos-list.component';

describe('TopicosListComponent', () => {
  let component: TopicosListComponent;
  let fixture: ComponentFixture<TopicosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
