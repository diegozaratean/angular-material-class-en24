import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { TablaComponent } from './tabla/tabla.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './material.module';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    TablaComponent,
    DragDropComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
