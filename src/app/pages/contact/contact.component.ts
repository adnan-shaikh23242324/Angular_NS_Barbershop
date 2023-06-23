import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { globalConstants } from './shared/constant';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.setupForm();
  }

  contactForm: FormGroup = new FormGroup({});

  submitted:boolean=false;

  submitButtonFalselyTriggered=false;

  setupForm() {
    this.contactForm = this.fb.group({
      Name: ["",[Validators.required]],
      Email: ["",[Validators.required,Validators.pattern(globalConstants.EMAIL)]],
      PhoneNumber: ["",[Validators.required,Validators.pattern(globalConstants.CONTACT_NO)]],
      Message: [""]
    })


  }

  onsubmit(){
    if(this.contactForm.invalid){
      this.submitButtonFalselyTriggered=true

      this.submitted=false;
      return false;
    }
    else{
      this.submitted=true;
      this.submitButtonFalselyTriggered=false;
      console.log(this.contactForm.value);
      console.log(this.contactForm.status);
      this.contactForm.reset();

      return;
    }

  }

  get NameControl() {
    return this.contactForm.get('Name');
  }

  get EmailControl() {
    return this.contactForm.get('Email');
  }

  get PhoneNumberControl() {
    return this.contactForm.get('PhoneNumber');
  }

  get MessageControl() {
    return this.contactForm.get('Message');
  }



}