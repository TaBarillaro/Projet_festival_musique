import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesArtistes } from './liste-des-artistes';

describe('ListeDesArtistes', () => {
  let component: ListeDesArtistes;
  let fixture: ComponentFixture<ListeDesArtistes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeDesArtistes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDesArtistes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
