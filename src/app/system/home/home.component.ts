import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // tslint:disable-next-line:max-line-length
  items: string[] = ['ФИО: Савва Максим Русланович',
    'Группа: 19ИСТ-В1', 'Форма обучения: очно-заочная',
    'Дата рождения: 01.06.1999'];
  condition = true;
  buttonText = 'Скрыть информацию о студенте';

  getSum(): number {
    return this.items.reduce((pr, nx) => pr + nx).length * 10 / 8;
  }

  toggle() {
    this.condition = !this.condition;
    if (this.condition) {
      this.buttonText = 'Скрыть информацию о студенте';
    } else {
      this.buttonText = 'Отобразить информацию о студенте';
    }
  }
}
