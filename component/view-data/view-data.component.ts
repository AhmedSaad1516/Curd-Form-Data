import { Component, OnInit } from '@angular/core';

import { GetDataService } from 'src/services/get-data.service';


@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {
allData:[];
mass:boolean=false; 
  constructor(private get:GetDataService ) {

   }

  ngOnInit(){

this.get.getData().subscribe((data:any)=>{
  this.allData=data;
})
  }

  remove(id){

    this.get.delet(id).subscribe(data =>{

      this.mass=true;
    

    })
  
  }
  removemass(){
    this.mass=false
    
    location.reload();
  }
}
