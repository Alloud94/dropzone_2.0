import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './site/login/login.component';
import { BoardComponent } from './site/board/board.component';
import { LoadsComponent } from './site/loads/loads.component';
import { DayComponent } from './site/day/day.component';
import { SkydiverComponent } from './site/skydiver/skydiver.component';
import { DocsComponent } from './site/docs/docs.component';
import { CreateLoadComponent } from './pop/create-load/create-load.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'board', component: BoardComponent,
  canActivate: [AuthenticationGuard] },
  { path: 'loads', component: LoadsComponent },
  { path: 'day', component: DayComponent },
  { path: 'skydiver', component: SkydiverComponent },
  { path: 'docs', component: DocsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BoardComponent,
    LoadsComponent,
    DayComponent,
    SkydiverComponent,
    DocsComponent,
    CreateLoadComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
