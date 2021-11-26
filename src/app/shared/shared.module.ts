import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    SliderComponent
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
