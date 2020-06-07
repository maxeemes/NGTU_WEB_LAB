import {Component} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  condition = true;
  buttonText = 'Скрыть информацию о студенте';
  contentID = 0;

  studentInfo: any[] = [
    {
      headTitle: 'Общая информация о студенте',
      content: [
        {
          title: 'ФИО',
          value: ['Савва Максим Русланович'],
          isCollapsed: false
        },
        {
          title: 'Род деятельности',
          value: ['программист'],
          isCollapsed: false
        },
        {
          title: 'Дата рождения',
          value: ['01.06.1999'],
          isCollapsed: false
        }
      ]
    },
    {
      headTitle: 'Информация об образовании',
      content: [
        {
          title: 'ЗАМТ',
          value: [
            'Вид образования: среднее-специальное',
            'Годы обучения: 2015-2019',
            'Специальность: "Программирование в компьютерных системах"'
          ],
          addInfoLink: 'http://www.xn--80anqy.xn--p1ai/',
          isCollapsed: false
        },
        {
          title: 'НГТУ',
          value: [
            'Вид образования: высшее',
            'Годы обчения: 2019-2023',
            'Направление подготовки: "Информационные системы и технологии"',
            'Образовательная программа: "Информационно-телекоммуникационные системы и сети"'
          ],
          addInfoLink: 'https://www.nntu.ru/',
          isCollapsed: true
        }
      ]
    },
    {
      headTitle: 'Портфолио',
      content: [
        {
          title: 'Программа тестирования API сайта',
          value: [
            'В рамках создания выпускной квалификационной работы для организации ООО "Селон2" сделана прогрмма для тестирования API сайта'
          ],
          addInfoLink: 'https://yadi.sk/i/jPSR5vQGm9lUPA',
          isCollapsed: false
        }
      ]
    },
    {
      headTitle: 'Опыт работы',
      content: [
        {
          title: 'SELDON',
          value: [
            'Должность: специалист сбора и заливки данных',
            'Обязанности: создание скриптов пасинга источнков данных, организация сохранения данных в таблицы БД',
            'Дата начала работы: март 2019'
          ],
          addInfoLink: 'https://company.myseldon.com/',
          isCollapsed: false
        }
      ]
    }
  ];

  toggle() {
    this.condition = !this.condition;
    if (this.condition) {
      this.buttonText = 'Скрыть информацию о студенте';
    } else {
      this.buttonText = 'Отобразить информацию о студенте';
    }
  }

  newID(): number {
    return this.contentID++;
  }
}
