import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropietarioPageRoutingModule } from './propietario-routing.module';

import { PropietarioPage } from './propietario.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    PropietarioPageRoutingModule
  ],
  declarations: [PropietarioPage]
})
export class PropietarioPageModule {}
