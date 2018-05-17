
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newPet;
  message = "";
  errors = { name: "" } ;
  skill1: any;
  skill2: any;
  skill3: any;
  allskills: any;
  
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newPet = {
      name: "",
      petType: "",
      description: "",
      skills: []
    };
  }

  onSubmit(){
    this.allskills=[this.skill1, this.skill2, this.skill3,] 
    this.newPet.skills = this.allskills;
    
    console.log(this.newPet.skills)
    console.log(this.skill1, this.skill2, this.skill3)
    let addPet = this._httpService.addPet(this.newPet).subscribe(data=>{
      console.log(data);
      console.log("New Pet added");
      console.log("This is the message from data", data["message"]);
      this.message = data["message"];
      if(data['message'] === "Success"){
        this.message = this.newPet.name + "added successfully!";
        this._router.navigate(['/']);
      }else{
        if (data['error'].errors['name']) {
          console.log("print this when error" ,data['error'])
          this.errors.name = data['error'].errors['name'];
        }
      }
    })
    
  }
}
