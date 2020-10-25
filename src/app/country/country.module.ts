import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  imports: [
    CommonModule,
    NzPaginationModule,
    NzTableModule
  ],
  exports: [
    NzPaginationModule,
    NzTableModule 
  ],
  declarations: []
})
export class CountryModule { }
