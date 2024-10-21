import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[isbnValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IsbnValidatorDirective, multi: true }]
})
export class IsbnValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const isbn = control.value;
    if (isbn && !this.isValidIsbn(isbn)) {
      return { invalidIsbn: true };
    }
    return null;
  }

  private isValidIsbn(isbn: string): boolean {
    // Simple ISBN validation logic (for demonstration purposes)
    return isbn.length === 10 || isbn.length === 13;
  }
}
