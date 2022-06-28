import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonEmbeddedAuthModalComponent } from './non-embedded-auth-modal.component';

describe('NonEmbeddedAuthModalComponent', () => {
  let component: NonEmbeddedAuthModalComponent;
  let fixture: ComponentFixture<NonEmbeddedAuthModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: {
            get: () => null,
            put: () => null,
            post: () => null,
            delete: () => null,
          },
        },
      ],
      declarations: [NonEmbeddedAuthModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonEmbeddedAuthModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
