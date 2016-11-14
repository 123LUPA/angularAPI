"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var internship_validators_1 = require("./internship.validators");
var InternshipEntryComponent = (function () {
    function InternshipEntryComponent(fb, route, internshipsService) {
        this.fb = fb;
        this.route = route;
        this.internshipsService = internshipsService;
        this.internships = [];
        this.internships1 = [];
        this.errorMessage = "";
        this.name = '';
        this.id = '';
    }
    InternshipEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            var name = params['name'];
            // this.selectedInternship = this.internshipsService.getInternship(id);
            if (id == null && name == null) {
            }
            else {
                _this.id = id;
                _this.name = name;
            }
            console.log(_this.id + _this.name);
        });
        this.internshipForm = this.fb.group({
            'initials': ['', forms_1.Validators.compose([
                    forms_1.Validators.required, internship_validators_1.InternshipValidators.getInitialsValidator()])]
        });
    };
    InternshipEntryComponent.prototype.invalidInitials = function () {
        if (!this.internshipForm.controls['initials'].valid && this.internshipForm.controls['initials'].touched) {
            return true;
        }
        return false;
    };
    InternshipEntryComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            if (this.id === '') {
                this.internshipsService.addInternship(form.value.initials).subscribe(function (internships) { return _this.internships = internships; }, function (error) { return _this.errorMessage = error; });
            }
            else {
                this.internshipsService.update(this.id, form.value.initials).subscribe(function (internships) { return _this.internships = internships; }, function (error) { return _this.errorMessage = error; });
            }
        }
        else {
            console.log("there was an error.");
        }
    };
    InternshipEntryComponent = __decorate([
        core_1.Component({
            selector: 'internship-entry',
            template: "\n  \n  <h2 class=\"\">Internship Entry</h2>\n  <form class=\"\" [formGroup]=\"internshipForm\" (ngSubmit)=\"onSubmit(internshipForm)\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-12 \" [ngClass]=\"{'has-error': !internshipForm.valid && internshipForm.touched }\">\n    \n        <div class=\"form-group\">\n          <label for=\"initials\">Initials</label>\n          <input type=\"text\"\n                 id=\"initials\"\n                 [value]=\"name\"\n                 placeholder=\"Initials\"\n                 class=\"form-control\"\n                                  [formControl]=\"internshipForm.controls['initials']\"\n\n                 >\n\n           <p *ngIf=\"!internshipForm.controls.initials.valid\"\n              class=\"help-block\">\n              Initials are invalid\n           </p>\n           \n           <p *ngIf=\"internshipForm.controls.initials.hasError('required') && internshipForm.controls.initials.touched\"\n              class=\"ui message help-block\">\n              Initials are required\n           </p>\n           \n           <p *ngIf=\"internshipForm.controls.initials.hasError('invalidChars') && internshipForm.controls.initials.touched\"\n                class=\"ui  message help-block\" >\n              Initials must begin with 123 \n           </p>  \n        </div>\n        \n        <p *ngIf=\"!internshipForm.valid && internshipForm.controls.initials.touched\" class=\"help-block\">\n          Form is invalid\n        </p>\n          \n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!internshipForm.valid\">Submit</button>\n      </div>\n    </div>\n  </form>\n  "
        })
    ], InternshipEntryComponent);
    return InternshipEntryComponent;
}());
exports.InternshipEntryComponent = InternshipEntryComponent;
//# sourceMappingURL=internshipEntry.component.js.map