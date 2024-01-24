import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
import { AuthenticationGuard } from './services/authentication.guard';
import { StartDayComponent } from './site/start-day/start-day.component';
import { PageNotFoundComponent } from './others/page-not-found/page-not-found.component';
import { LoadSpinnerComponent } from './others/load-spinner/load-spinner.component';
import { CituroMailComponent } from './site/cituro-mail/cituro-mail.component';
import { UserComponent } from './site/user/user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: StartDayComponent,
  canActivate: [AuthenticationGuard]},
  { path: 'board', component: BoardComponent,
  canActivate: [AuthenticationGuard] },
  { path: 'loads', component: LoadsComponent,
  canActivate: [AuthenticationGuard] },
  { path: 'day', component: DayComponent,
  canActivate: [AuthenticationGuard] },
  { path: 'skydiver', component: SkydiverComponent,
  canActivate: [AuthenticationGuard] },
  { path: 'user/:id', component: UserComponent,
  canActivate: [AuthenticationGuard]},
  { path: 'docs', component: DocsComponent,
  canActivate: [AuthenticationGuard] },
  { path: 'cituroMail', component: CituroMailComponent,
  canActivate: [AuthenticationGuard]},
  { path: '404', component: PageNotFoundComponent},
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
    SidebarComponent,
    StartDayComponent,
    PageNotFoundComponent,
    LoadSpinnerComponent,
    CituroMailComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }], 
  bootstrap: [AppComponent],
  entryComponents: [CreateLoadComponent]
})
export class AppModule { }
