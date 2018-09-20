import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {CustomMaterialModule} from '../core/material.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { AppRoutingModule} from './app.rouring.module';
import {HttpClientModule} from '@angular/common/http';
import { UpdateComponent} from './device/update.component';
import { StatusComponent} from './device/status.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    UpdateComponent,
    StatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CustomMaterialModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
