import { Component } from '@angular/core';
import { green } from '../../node_modules/@types/color-name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = ""
  length = 0
  includeLetters = false
  includeNumbers = false
  includeSymbols = false

  handleInputChange(value: string) {
    const parsedValue = parseInt(value)
    if (!isNaN(parsedValue)) {
      this.length = parsedValue

    }
  }

  handleClick() {
    console.log(`About to generate a password with the following: 
    Includes letters: ${this.includeLetters}
    Include numbers: ${this.includeNumbers}
    Include symbols: ${this.includeSymbols}

    `);

    let letters = 'abcdefghijklmnopqrstuvwxyz'
    let numbers = '1234567890'
    let symbols = '!@#$%^&*()'
    let validChars = ''
    let generatedPassword = ''

    if (this.includeLetters) {
      validChars += letters
    }
    if (this.includeNumbers) {
      validChars += numbers
    }
    if (this.includeSymbols) {
      validChars += symbols
    }

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
    }
    console.log('password generated:: ', generatedPassword);
    this.password = generatedPassword


  }
  handleLetterChange() {
    this.includeLetters = !this.includeLetters
    console.log("include letters ? ", this.includeLetters);
  }
  handleNumberChange() {
    this.includeNumbers = !this.includeNumbers
    console.log("include numbers ? ", this.includeNumbers);
  }
  handleSymbolChange() {
    this.includeSymbols = !this.includeSymbols
    console.log("include symbols ? ", this.includeSymbols);
  }


}
