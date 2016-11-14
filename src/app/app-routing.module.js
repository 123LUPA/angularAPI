"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var about_component_1 = require("./about.component");
var internships_component_1 = require("./internships.component");
var internshipEntry_component_1 = require("./internshipEntry.component");
var a_component_1 = require("./a.component");
var b_component_1 = require("./b.component");
var routes = [
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'internships',
        component: internships_component_1.InternshipsComponent,
        children: [
            { path: '' },
            { path: 'a', component: a_component_1.AComponent },
            { path: 'b', component: b_component_1.BComponent }
        ]
    },
    {
        path: 'internship',
        component: internshipEntry_component_1.InternshipEntryComponent
    },
    {
        path: 'internship/:id',
        component: internshipEntry_component_1.InternshipEntryComponent
    },
    {
        path: 'internship/:id/:name',
        component: internshipEntry_component_1.InternshipEntryComponent
    }
];
var InternshipsRoutingModule = (function () {
    function InternshipsRoutingModule() {
    }
    InternshipsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
            providers: []
        })
    ], InternshipsRoutingModule);
    return InternshipsRoutingModule;
}());
exports.InternshipsRoutingModule = InternshipsRoutingModule;
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app-routing.module.js.map