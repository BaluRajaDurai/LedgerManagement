import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tmodel } from '../models/tmodel.model';
import { MytransactionsService } from '../services/mytransactions.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

    transaction_details: Tmodel = {
    Customer: '',
    Type: '',
    Description: '',
    Amount: 0
  };

  t_details: Tmodel[] = [];
 

  public userDetails: any;

  credit:number=0;
  debit:number=0;
  Total:number=0;
  


  constructor(private router: Router,
    private transactiondetails: MytransactionsService) {}

    retrievedetails(){
      this.transactiondetails.getAll()
      .subscribe((msg:Tmodel[])=>{
        for(let i=0;i<msg.length;i++)
        {
          this.t_details.push(msg[i]);
          if(msg[i].Type==='Credit')
          {
              this.credit=this.credit+msg[i].Amount;
          }
          if(msg[i].Type==='Debit')
          {
              this.debit=this.debit+msg[i].Amount;
          }
          console.log(msg[i]);
        }
        this.Total=this.credit-this.debit;
      });
    }

    
  

  ngOnInit(): void {
    const storage = localStorage.getItem('google_auth');

    if (storage) 
    {
      this.userDetails = JSON.parse(storage);
    } 

    this.retrievedetails();
    
    
  }

}
