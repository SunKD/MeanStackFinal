import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  Pets: any;
  newPet: any;
  editPet;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newPet = {
      name: "",
      petType: "",
      description: "",
      skills: []
    };
    this.getAllPets();
  }

  getAllPets(){
    let Pets = this._httpService.getPets().subscribe(data=>{
      console.log("get all Pet");
      console.log(data);
      this.Pets = data['data'];
    });

  }

  edit(id){
    let edit = this._httpService.getPet(id).subscribe(data=>{
      this.editPet = data;
    })
  }

  delete(id){
    let deletePet = this._httpService.deletePet(id).subscribe(data=>{
      console.log(data);
    });
    this.getAllPets()
  }

}
