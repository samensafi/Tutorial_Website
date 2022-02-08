import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitFormButton() {
    const backendBaseUrl = 'http://arash2079.pythonanywhere.com'
    console.log("Hello");
    var emailValue = (<HTMLInputElement>document.getElementById("email")).value;
    var subjectValue = (<HTMLInputElement>document.getElementById("subject")).value;
    var messageValue = (<HTMLInputElement>document.getElementById("message")).value;
    console.log();

    let formData = new FormData();
    formData.append('email', emailValue? emailValue : 'Email Blank');
    formData.append('subject', subjectValue? subjectValue : 'Subject Blank');
    formData.append('message', messageValue? messageValue : 'Message Blank');

    fetch(`${backendBaseUrl}/submit_form`,
    {
        body: formData,
        method: "post"
    }).then(function(value) {
      if(value.status === 200) {
        window.location.href = `${backendBaseUrl}/thankyou.html`;
      }
    })

  }

}
