import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tmodel } from '../models/tmodel.model';
import { MytransactionsService } from '../services/mytransactions.service';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  
  public submitted: boolean = false;

  MytransactionsService: any;

  constructor(private router: Router,
    private transactiondetails: MytransactionsService) { }

  ngOnInit(): void {
   
    
  }
  validate(){ //validation function
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      console.log("Please fill all the fields !!!");
    }
    else{
      this.submitted=true; // successfull page
    }
    form.classList.add('was-validated');
  }
 

  onClickSubmit(data:any) {
    this.validate();
    console.log("Entered name : " + data.name);
    console.log("Entered phone num : " + data.pno);
    console.log("Entered email id : " + data.emailid);
    console.log("Entered description : " + data.des);
    console.log("Entered option : " + data.options);
    
    const data1 = data
    this.transactiondetails.create(data1)
      .subscribe(
        (response: any) => {
          console.log(response);
          
        },
        (error: any) => {
          console.log(error);
        });
 }

  
  

}
