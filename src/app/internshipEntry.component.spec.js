"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var internshipEntry_component_1 = require('./internshipEntry.component');
var comp;
var fixture;
var de;
var el;
var input;
var forms_1 = require("@angular/forms");
describe('InternshipEntryComponent', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [internshipEntry_component_1.InternshipEntryComponent
            ],
            imports: [
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
        });
        fixture = testing_1.TestBed.createComponent(internshipEntry_component_1.InternshipEntryComponent);
        comp = fixture.componentInstance; // BannerComponent test instance
        // query for the title <h1> by CSS element selector
        input = fixture.debugElement.query(platform_browser_1.By.css("input")).nativeElement;
        el = fixture.debugElement.nativeElement; //the component. (Beware of *ngIf invisible elements)
    });
    it('should display error message - initials', function () {
        input.value = '';
        fixture.detectChanges();
        var msgs = el.querySelectorAll("p.help-block");
        expect(msgs[0].innerHTML).toContain("Initials are invalid");
    });
    it('should start with invalid form', function () {
        comp.ngOnInit();
        fixture.detectChanges();
        expect(comp.internshipForm.valid).toBeFalsy();
    });
});
//# sourceMappingURL=internshipEntry.component.spec.js.map