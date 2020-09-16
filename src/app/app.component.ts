import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbol = false;
  password = '';

  onChangeLength(value: string) {
    const parseValue = parseInt(value);
    if (!isNaN(parseValue)) {
      this.length = parseValue;
    }
    return this.length;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbol() {
    this.includeSymbol = !this.includeSymbol;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'asdfghjklqwertyuipopzxcvbnm';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbol) {
      validChars += symbols;
    }

    let generatePassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatePassword += validChars[index];
    }
    this.password = generatePassword;
  }
}
