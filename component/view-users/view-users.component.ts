import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from 'src/app/modelsUser/user';
import { GetDataService } from 'src/services/get-data.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
id;
viwe: user;
  constructor(private http:GetDataService ,private rout:ActivatedRoute) 
  {  
 this .id =this.rout.snapshot.paramMap.get('id')
    this.http.getById(this.id).subscribe((data:any)=>{
this.viwe=data;
    })
  }


  ngOnInit(): void {
  }

}
