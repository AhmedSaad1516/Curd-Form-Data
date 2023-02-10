import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from 'src/app/modelsUser/user';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
 private Url="http://localhost:3000/user"
  constructor(private http:HttpClient) {
    
   }
getData(){
  return this.http.get('http://localhost:3000/user');
}
 post(object: user){
 return this.http.post('http://localhost:3000/user', object);
 }
put(id,object):Observable<user>{
  return this.http.put<user>(this.Url + "/" + id ,object)
}
getById(id){
return this.http.get(this.Url + "/" + id)

}
 delet(id){
  return this.http.delete(this.Url + "/" + id)
 }



}

