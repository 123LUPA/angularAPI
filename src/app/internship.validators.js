"use strict";
var InternshipValidators = (function () {
    function InternshipValidators() {
    }
    InternshipValidators.getInitialsValidator = function () {
        return function initialsValidator(control) {
            //all initials must start with 123.
            //It is an example of how you can create custom validators, if you replace the code
            //with a meaningful validator
            if (!control.value.match(/^123/)) {
                return { invalidChars: true };
            }
        };
    };
    return InternshipValidators;
}());
exports.InternshipValidators = InternshipValidators;
//# sourceMappingURL=internship.validators.js.map