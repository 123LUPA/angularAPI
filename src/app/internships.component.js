"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var InternshipsComponent = (function () {
    function InternshipsComponent(internshipsService, router) {
        this.internshipsService = internshipsService;
        this.router = router;
        this.internships = [];
        this.id = [];
        this.errorMessage = "";
    }
    InternshipsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.internshipsService.getAllInternships().subscribe(function (internships) { return _this.internships = internships; }, function (error) { return _this.errorMessage = error; });
    };
    InternshipsComponent.prototype.gotoInternship = function (internship) {
        var link = ['/internship', internship._id];
        this.router.navigate(link);
    };
    InternshipsComponent.prototype.delete = function (internship) {
        var _this = this;
        this.internshipsService.delete(internship._id).subscribe(function (id) { return _this.id = id; }, function (error) { return _this.errorMessage = error; });
    };
    InternshipsComponent.prototype.update = function (intership) {
        console.log(intership.initials);
        var link = ['/internship', intership._id, intership.initials];
        this.router.navigate(link);
    };
    InternshipsComponent = __decorate([
        core_1.Component({
            selector: 'internships',
            template: "\n\n    <div *ngFor=\"let internship of internships\" >\n        {{internship.initials}}\n        <button (click)=\"delete(internship)\">Delete</button>\n        <button (click)=\"update(internship)\">UPDATE</button>\n    </div>\n\n    <button routerLink=\"a\">Goto A component</button>\n    <button routerLink=\"b\">Goto B component</button>\n\n    <button routerLink=\"/internship\">Create new internship</button>\n\n    <router-outlet></router-outlet>\n    "
        })
    ], InternshipsComponent);
    return InternshipsComponent;
}());
exports.InternshipsComponent = InternshipsComponent;
//# sourceMappingURL=internships.component.js.map