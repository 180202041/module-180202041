import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AytPage } from './ayt.page';

describe('AytPage', () => {
  let component: AytPage;
  let fixture: ComponentFixture<AytPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AytPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AytPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
