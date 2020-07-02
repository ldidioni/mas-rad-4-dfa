import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SorterService } from './sorter.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ SorterService ]
})
export class SharedModule { }
