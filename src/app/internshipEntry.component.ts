import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators, FormControl
} from '@angular/forms';
import {InternshipValidators} from "./internship.validators";
import { ActivatedRoute, Params } from '@angular/router';
import {InternshipsService} from "./internships.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'internship-entry',
  template: `
  
  <h2 class="">Internship Entry</h2>
  <form class="" [formGroup]="internshipForm" (ngSubmit)="onSubmit(internshipForm)">

    <div class="row">
      <div class="col-sm-12 " [ngClass]="{'has-error': !internshipForm.valid && internshipForm.touched }">
    
        <div class="form-group">
          <label for="initials">Initials</label>
          <input type="text"
                 id="initials"
                 [value]="name"
                 placeholder="Initials"
                 class="form-control"
                                  [formControl]="internshipForm.controls['initials']"

                 >

           <p *ngIf="!internshipForm.controls.initials.valid"
              class="help-block">
              Initials are invalid
           </p>
           
           <p *ngIf="internshipForm.controls.initials.hasError('required') && internshipForm.controls.initials.touched"
              class="ui message help-block">
              Initials are required
           </p>
           
           <p *ngIf="internshipForm.controls.initials.hasError('invalidChars') && internshipForm.controls.initials.touched"
                class="ui  message help-block" >
              Initials must begin with 123 
           </p>  
        </div>
        
        <p *ngIf="!internshipForm.valid && internshipForm.controls.initials.touched" class="help-block">
          Form is invalid
        </p>
          
        <button type="submit" class="btn btn-primary" [disabled]="!internshipForm.valid">Submit</button>
      </div>
    </div>
  </form>
  `
})
export class InternshipEntryComponent implements OnInit {
  private internships: any[] = [];
  private internships1: any[] = [];

  private errorMessage: string = "";
    internshipForm: FormGroup;
    selectedInternship: any;
  private subscription : Subscription;
  private  name: string = '';
  id: string = '';



    ngOnInit():void {


      this.route.params.forEach((params: Params) => {
        let id = params['id'];
        let name = params['name'];
        // this.selectedInternship = this.internshipsService.getInternship(id);
          if(id==null&&name==null){
          }else {
            this.id=id;
            this.name = name;
          }



        console.log(this.id + this.name);


      });

        this.internshipForm = this.fb.group( {
            'initials': ['', Validators.compose([
                Validators.required, InternshipValidators.getInitialsValidator()])]
        })
    }




  constructor(private fb: FormBuilder, private route: ActivatedRoute, private internshipsService: InternshipsService) {

  }

  public invalidInitials() : Boolean {

    if (!this.internshipForm.controls['initials'].valid && this.internshipForm.controls['initials'].touched) {
      return true;
    }
    return false;
  }

  public onSubmit(form) {
    if (form.valid) {
       if(this.id===''){
         this.internshipsService.addInternship(form.value.initials).subscribe(
           internships => this.internships = internships,
           error => this.errorMessage = error
         );
       }else {
         this.internshipsService.update(this.id,form.value.initials).subscribe(
           internships => this.internships = internships,
           error => this.errorMessage = error
         );
       }



    }
    else {
      console.log("there was an error.")
    }
  }
}
