import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {WebstartComponent} from './webstart.component';
import {WebstartRoutingModule} from './webstart-routing.module';
import {AlertModule} from 'ngx-bootstrap/alert';
import {ButtonsModule} from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [
    WebstartComponent
  ],
  imports: [
    BrowserModule,
    WebstartRoutingModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [WebstartComponent]
})
export class WebstartModule {
}
