import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	ed;
	pwd;
	invalidmailid;
	invalidpwd;
	
 onClickSubmit(data) {
	 
	 this.ed=data.emailid;
	 this.pwd=data.passwd;
	 
	 if((this.ed.indexOf("@")<2)||(this.ed.indexOf("@")!=this.ed.lastIndexOf("@")))
		 this.invalidmailid="Invalid MailId"
	 else
		 this.invalidmailid=""
	 
	 if(this.pwd.length<5)
		 this.invalidpwd="Invalid Password"
	 else
		 this.invalidpwd=""
		 
	 
     // alert("Results Generated");
	  
   }
}
