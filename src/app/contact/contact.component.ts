import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../appModels/employee.model';
import { EmployeeService } from '../appServices/employee.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
empForm:FormGroup;
employees:Employee[];


  constructor(private fb:FormBuilder,private empService:EmployeeService ) { }

  ngOnInit() {
    
    this.empForm = this.fb.group({
      _id: [''],
      fname:['',Validators.required],
      lname: ['',Validators.required],
      address:['',Validators.required],
      phoneno:['',Validators.required]
    })
  }
 
  onEmpSubmit(){
    if(this.empForm.valid){
      this.empService.addEmployee(this.empForm.value).subscribe(
        (res)=>{
          console.log(res);
          this.empForm.reset();
        },
        (err)=>{
          console.log(err);
        },
      )
    }
  }
  
  

}
