import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {SystemComponent} from './system.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {HeaderComponent} from '../shared/component/header/header.component';
import {FooterComponent} from '../shared/component/footer/footer.component';
import {SystemRoutingModule} from './system-routing.modules';
import {FormsModule} from '@angular/forms';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {CollapseModule} from 'ngx-bootstrap/collapse';


@NgModule({
  declarations: [
    SystemComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SystemRoutingModule,
    FormsModule,
    TabsModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [SystemComponent]
})
export class SystemModul {
}
