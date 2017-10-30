import { SejmComponent } from './components/sejm/sejm.component';
import { SejmService } from './services/sejm.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterService } from './services/counter.service';
import { PersonFilterPipe } from './pipes/person-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    SejmComponent,
    PersonFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CounterService,
    SejmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
