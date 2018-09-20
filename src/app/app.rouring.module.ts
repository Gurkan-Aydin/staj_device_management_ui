import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeviceComponent } from './device/device.component';
import { UpdateComponent } from './device/update.component';
import { StatusComponent} from './device/status.component';

const routes: Routes = [
  { path: 'devices', component: DeviceComponent},
  { path: 'devices', component: UpdateComponent},
  { path: 'devices/status/:deviceId', component: StatusComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
