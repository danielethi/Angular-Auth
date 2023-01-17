import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { EventsComponent } from './events/events.component';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { AuthGuard } from './auth.guard';
// import { ToeknInterceptorService } from './toekn-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SpecialEventsComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // {
    //   // provide: HTTP_INTERCEPTORS,
    //   useClass: ToeknInterceptorService,
    //   multi: true,

    // },
  ],
  providers: [AuthService, EventService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
