import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private _http: HttpClient) {
    this.getPets();
  }

  getPets(): any {
    return this._http.get('/pets');
  }

  getPet(id: String) {
    return this._http.get('/pets/' + id);
  }

  addPet(newPet) {
    return this._http.post('/pets', newPet);
  }

  likePet(id: String,  pet){
    return this._http.post('/pet/'+ id, pet);
  }

  updatePet(updateInfo, id: String) {
    return this._http.put('/pets/' + id, updateInfo);
  }

  deletePet(id: String) {
    return this._http.delete('/pets/' + id);
  }
}
