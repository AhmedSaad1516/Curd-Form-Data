import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from 'src/component/form/form.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/component/navbar/navbar.component';
import { HomeComponent } from 'src/component/home/home.component';
import { ViewDataComponent } from 'src/component/view-data/view-data.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatDataComponent } from 'src/component/creat-data/creat-data.component';
import { FooterComponent } from 'src/component/footer/footer.component';
import { NotFoundComponent } from 'src/component/not-found/not-found.component';
import { UpdateComponent } from 'src/component/update/update.component';
import { ViewUsersComponent } from 'src/component/view-users/view-users.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    HomeComponent,
    ViewDataComponent,
    CreatDataComponent,
    FooterComponent,
    NotFoundComponent,
  UpdateComponent,
  ViewUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
  
 
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
