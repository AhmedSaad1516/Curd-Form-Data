  import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/modelsUser/user';
import { GetDataService } from 'src/services/get-data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

    userObject = new user();
id;
    mass:boolean=false;
      constructor(private srv:GetDataService ,private router:Router,private active:ActivatedRoute) { }
    
    
      ngOnInit(): void {
        this.id= this.active.snapshot.paramMap.get('id')
    this.srv.getById(this.id).subscribe((data:any)=>{

        this.userObject=data;
    })
        }
    
          send(){
            this.srv.put(this.id,this.userObject).subscribe((data:any) =>{
             
       this.mass=true;
       this.router.navigateByUrl('view')
    
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