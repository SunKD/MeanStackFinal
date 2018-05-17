import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: String;
  thisPet;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => (this.id = params['id']));
    let Pet = this._httpService.getPet(this.id).subscribe(data => {
      console.log(data);
      this.thisPet = data['data'];
    })
  }

  like(petId) {
    console.log("voteUp")
    let voted = this._httpService.likePet(petId,
      {"voteVal": 1 }).subscribe(data => {
        this.thisPet = data['data'];
      });
  }

  delete() {
    let deletequote = this._httpService.deletePet(this.thisPet._id)
      .subscribe(data => {
        this.thisPet = data['data'];
        this._router.navigate(['/']);
      });
      
  }
}

