import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PopoverModule } from './popover/popover.module';
import { ChildComponent } from './child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ChildComponent]
})
export class AppModule { }
