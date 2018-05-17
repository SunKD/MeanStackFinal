import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  editPet;
  thisPet;
  message = "";
  errors = { name: "" };
  skill1: any;
  skill2: any;
  skill3: any;
  allskills: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => (this.id = params['id']));
    this.getEditPet(this.id);
    this.editPet = {
      name: "",
      petType: "",
      description: "",
      skills: []
    };
  }

  getEditPet(id) {
    console.log('edit id ', id)
    let editing = this._httpService.getPet(this.id);
    editing.subscribe(data => {
      this.editPet = data['data'];
      console.log(this.editPet);
      this.skill1 = this.editPet.skills[0];
      this.skill2 = this.editPet.skills[1];
      this.skill3 = this.editPet.skills[2];
    })
    // this._httpService.getPet(id).subscribe(data=>{
    //   this.editPet = data;
    // })
  }

  onSubmit(id: String) {
    this.editPet.skills[0] = this.skill1;
    this.editPet.skills[1] = this.skill2;
    this.editPet.skills[2] = this.skill3;
    console.log(this.editPet)
    let update = this._httpService.updatePet(this.editPet, id);
    update.subscribe(data => {
      console.log("submited form")
      console.log(data);
      this.message = data["message"];
      if (data['message'] === "Success") {
        this.message = this.editPet.name + "added updated!";
        this._router.navigate(['/details/' + id]);
      } else {
        if (data['error'].errors['name']) {
          this.errors.name = data['error'].errors['name'];
        }
      }
    })
  }


}
