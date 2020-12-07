import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabChannelComponent } from './tab-channel.component';

describe('TabChannelComponent', () => {
  let component: TabChannelComponent;
  let fixture: ComponentFixture<TabChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
