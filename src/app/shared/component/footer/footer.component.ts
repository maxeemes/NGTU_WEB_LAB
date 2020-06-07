import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  myDate = new Date(Date.now());

  siteInfo: any[] = [
    {
      headTitle: 'Инструменты разработки сайта',
      footerText: '© ' + this.myDate.getFullYear() + ' - Личная страница на Angular',
      content: [
        {
          title: 'Angular',
          value: [
            'Это открытая и свободная платформа для разработки веб-приложений'
          ],
          addInfoLink: 'https://angular.io/',
          isCollapsed: true
        },
        {
          title: 'Bootstrap',
          value: [
            'Свободный набор инструментов для создания сайтов и веб-приложений.'
          ],
          addInfoLink: 'https://getbootstrap.com/',
          isCollapsed: true
        },
        {
          title: 'ngx-bootstrap',
          value: [
            'Bootstrap компоненты, на Angular.'
          ],
          addInfoLink: 'https://valor-software.com/ngx-bootstrap',
          isCollapsed: true
        }
      ]
    }
  ];
}


