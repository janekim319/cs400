import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherFormComponent } from './weather-form/weather-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {WeatherDisplayResultComponent} from './weather-form/weather-display-result/weather-display-result.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherFormComponent,
    WeatherDisplayResultComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
