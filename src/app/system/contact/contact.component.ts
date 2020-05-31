import {Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
// tslint:disable-next-line:prefer-const


export class ContactComponent {
  isRobot = true;
  conts: [string, string][] = [
    ['E-mail: max.s.99@yandex.ru', 'mailto:max.s.99@yandex.ru'],
    ['GitHub: https://github.com/maxeemes', 'https://github.com/maxeemes']
  ];

  notARobot() {
    this.isRobot = false;
  }
}
