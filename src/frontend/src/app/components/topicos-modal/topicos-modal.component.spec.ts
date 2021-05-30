import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicosModalComponent } from './topicos-modal.component';

describe('TopicosModalComponent', () => {
  let component: TopicosModalComponent;
  let fixture: ComponentFixture<TopicosModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicosModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
