import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatDataComponent } from 'src/component/creat-data/creat-data.component';
import { HomeComponent } from 'src/component/home/home.component';
import { NotFoundComponent } from 'src/component/not-found/not-found.component';
import { UpdateComponent } from 'src/component/update/update.component';
import { ViewDataComponent } from 'src/component/view-data/view-data.component';
import { ViewUsersComponent } from 'src/component/view-users/view-users.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'creat',component:CreatDataComponent},
  {path:'view',component:ViewDataComponent},
  {path:'not',component:ViewDataComponent},
  {path:"edit/:id",component:UpdateComponent},
    {path:"viewUsers/:id",component:ViewUsersComponent},

  {path:'**',component:NotFoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
