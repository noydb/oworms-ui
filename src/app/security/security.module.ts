import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security-guard/security.component';



@NgModule({
  declarations: [SecurityComponent],
  imports: [
    CommonModule
  ]
})
export class SecurityModule { }
