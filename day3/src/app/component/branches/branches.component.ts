import { Component } from '@angular/core';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent {
  recTrack:string = '';
trackNames:string[]= ['Front-End','Back-End','Open Source','AI']
  constructor(){}
}


