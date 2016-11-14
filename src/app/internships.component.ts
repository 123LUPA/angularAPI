import {Component, OnInit} from '@angular/core';
import {InternshipsService} from "./internships.service";
import { Router } from '@angular/router';
import {Response} from "@angular/http";

@Component({
    selector: 'internships',
    template: `

    <div *ngFor="let internship of internships" >
        {{internship.initials}}
        <button (click)="delete(internship)">Delete</button>
        <button (click)="update(internship)">UPDATE</button>
    </div>

    <button routerLink="a">Goto A component</button>
    <button routerLink="b">Goto B component</button>

    <button routerLink="/internship">Create new internship</button>

    <router-outlet></router-outlet>
    `
})

export class InternshipsComponent implements OnInit {
    private internships: any[] = [];
    private id: any[] = [];
    private errorMessage: string = "";

    ngOnInit():void {
        this.internshipsService.getAllInternships().subscribe(
          internships => this.internships = internships,
          error => this.errorMessage = error
        );
    }
    constructor(private internshipsService: InternshipsService,
                private router: Router) {


    }


  gotoInternship(internship: any): void {


      let link = ['/internship', internship._id];
      this.router.navigate(link);

  }

  delete(internship){

      this.internshipsService.delete(internship._id).subscribe(
      id => this.id = id,
      error => this.errorMessage = error
    );

  }

  update(intership){



    console.log(intership.initials);
    let link = ['/internship', intership._id, intership.initials];
    this.router.navigate(link);

  }
}
