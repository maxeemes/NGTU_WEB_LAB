import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  sitePages: any[] = [
    {
      name: 'Главная',
      link: ['/system', 'home'],
      isActive: true
    },
    {
      name: 'Контакты',
      link: ['/system', 'contact'],
      isActive: false
    }
  ];

  inActivateAll() {
    this.sitePages.forEach(sitePage => {
      sitePage.isActive = false;
    });
  }

  ngOnInit() {
  }
}
