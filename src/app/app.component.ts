import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  typedText = '';

  onChangeTypedText(event: Event) {
    const target = event.target as HTMLInputElement;
    const parsedValue = target.value;
    this.typedText = parsedValue;
    console.log(this.typedText);
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    if (randomLetter === ' ' && enteredLetter !== ' ') {
      return 'incorrect-empty';
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
