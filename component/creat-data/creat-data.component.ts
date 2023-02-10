import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  user } from 'src/app/modelsUser/user';
import { PostUser } from 'src/interface/post-user';
import { GetDataService } from 'src/services/get-data.service';

@Component({
  selector: 'app-creat-data',
  templateUrl: './creat-data.component.html',
  styleUrls: ['./creat-data.component.css']
})
export class CreatDataComponent implements OnInit {

  userObject = new user();

mass:boolean=false;
  constructor(private srv:GetDataService ,private router:Router) { }


  ngOnInit(): void {

    }

      send(){
        this.srv.post(this.userObject).subscribe((data:any) =>{

   this.mass=true;

        })
      }
      rem(){
        this.mass=false
        this.router.navigateByUrl('view')
      }
      ok(){
        this.router.navigateByUrl('view')

      }
  }

