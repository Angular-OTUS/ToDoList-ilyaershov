import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { ButtonColor } from './button.types';

interface SpecifiedColorTestCase {
  color: ButtonColor,
  expectedClass: string
}

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have specified color', () => {
    const testCases: SpecifiedColorTestCase[] = [
      { color: 'red', expectedClass: 'button--red' },
      { color: 'green', expectedClass: 'button--green' },
    ];

    testCases.forEach(({ color, expectedClass }) => {
      // Arrange
      const compiled = fixture.nativeElement as HTMLElement;

      // Act
      component.color = color;
      fixture.detectChanges();

      // Assert
      const button = compiled.querySelector('button');

      expect(button).toHaveClass('button');
      expect(button).toHaveClass(expectedClass);
    });
  });

  it('should have not any color', () => {
    // Arrange
    const compiled = fixture.nativeElement as HTMLElement;

    // Act & Assert
    const button = compiled.querySelector('button');

    expect(button).toHaveClass('button');
    expect(button?.classList.contains('button--red')).toBeFalse();
    expect(button?.classList.contains('button--green')).toBeFalse();
  });
});
