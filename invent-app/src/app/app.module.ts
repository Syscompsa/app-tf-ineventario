import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeViewComponent } from './home-view/home-view.component';
import { HeaderComponent } from './header/header.component';
import { HistoryQRComponent } from './history-qr/history-qr.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeViewComponent,
    HeaderComponent,
    HistoryQRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'HomeView', component: HomeViewComponent },
      { path: 'QRData', component: HistoryQRComponent },
      { path: 'Login', component: LoginComponent, pathMatch: 'full' },
      { path: '**', pathMatch: 'full', redirectTo: 'Login'  }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }