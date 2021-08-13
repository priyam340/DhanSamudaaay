import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mobile-sign',
  templateUrl: './mobile-sign.component.html',
  styleUrls: ['./mobile-sign.component.scss']
})
export class MobileSignComponent implements OnInit {

  authFlag:Boolean=false;
  mobileAuthForm: FormGroup|any;
  ot="";
  Otp=[{mob:"9876543210",otp:"a5erty9"},{mob:"9876543120",otp:"artuty9"},{mob:"9875673210",otp:"a5965y9"}];

  constructor() { }

  ngOnInit(): void {
    this.mobileAuthForm= new FormGroup(
      {
        mobile: new FormControl(''),
        otp: new FormControl('')
      }
    )
  }

  sendOtp(){
    this.authFlag=true;
    var num = this.mobileAuthForm.value.mobile;
    for(var i=0;i<this.Otp.length;i++){
      if(this.Otp[i].mob == num){
        this.ot = this.Otp[i].otp;
      }
    }
    alert('Enter : '+this.ot);
    console.log(this.ot)
  }

  auth(){
    if(this.mobileAuthForm.value.otp == this.ot){
      alert(("validation successfull"));
    }
    alert("invalid otp try again");
  }

}
