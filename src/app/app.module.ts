import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { ConversorComponent } from './pages/conversor/conversor.component';
import { CalcComponent } from './pages/calc/calc.component';
import { ReducerComponent } from './pages/reducer/reducer.component';
import { HistoryComponent } from './pages/history/history.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { InputValidationPipe } from './pipes/input-validation.pipe';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    NavBarComponent,
    HomeComponent,
    ConversorComponent,
    CalcComponent,
    ReducerComponent,
    HistoryComponent,
    AboutComponent,
    NotFoundComponent,
    InputValidationPipe
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
