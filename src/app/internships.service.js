"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var rxjs_1 = require('rxjs');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
//I want to be able to inject this service into other components.
var InternshipsService = (function () {
    function InternshipsService(http) {
        this.http = http;
        this.internshipUrl = 'http://angularkea2.azurewebsites.net/api/internships/'; // url to web api
    }
    InternshipsService.prototype.addInternship = function (initials) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.internshipUrl, { initials: initials }, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    //I want a method that returns the internships
    InternshipsService.prototype.getAllInternships = function () {
        return this.http.get("http://angularkea1.azurewebsites.net/api/internships/getall")
            .map(this.extractData)
            .catch(this.handleError);
    };
    InternshipsService.prototype.update = function (id, initials) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.internshipUrl + id, { initials: initials }, options)
            .map(this.extractData1)
            .catch(this.handleError);
    };
    InternshipsService.prototype.delete = function (id) {
        return this.http.delete("http://angularkea2.azurewebsites.net/api/internships/" + id)
            .map(this.extractData1)
            .catch(this.handleError);
    };
    InternshipsService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    InternshipsService.prototype.extractData1 = function (res) {
        var body = res;
        console.log(body);
        return body || {};
    };
    InternshipsService.prototype.handleError = function (error) {
        console.log(error);
        return rxjs_1.Observable.throw("some error message");
    };
    InternshipsService.prototype.getInternship = function (id) {
        //return this.getAllInternships().find(internship => internship._id === id);
        return {};
    };
    InternshipsService = __decorate([
        core_1.Injectable()
    ], InternshipsService);
    return InternshipsService;
}());
exports.InternshipsService = InternshipsService;
//# sourceMappingURL=internships.service.js.map