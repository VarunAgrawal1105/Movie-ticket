import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector : '[confirmequalvalidator]',
    providers : [{
        provide : NG_VALIDATORS,
        useExisting : ConfirmPasswordValidator,
        multi:true
    }]
})
export class ConfirmPasswordValidator implements Validator{
    @Input() confirmequalvalidator:string
    validate(control:AbstractControl):{[key:string] : any}| null
   {
       const controlToCompare = control.parent.get(this.confirmequalvalidator);
       if(controlToCompare && controlToCompare.value != control.value)
       {
           return {'notEqual' : true};
       }

       return null;
   }
}