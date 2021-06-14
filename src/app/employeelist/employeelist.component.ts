import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../appModels/employee.model';
import { EmployeeService } from '../appServices/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  empForm:FormGroup;
  constructor(private fb:FormBuilder, private empService:EmployeeService) { }
  employees:Employee[];

  ngOnInit(): void {
    
    
      this.getEmployees();
      this.empForm = this.fb.group({
        _id: [''],
        fname:['',Validators.required],
        lname: ['',Validators.required],
        address:['',Validators.required],
        phoneno:['',Validators.required]
      })
  }
  getEmployees(){
    this.empService.getEmployeeList().subscribe((res:Employee[])=>{
      console.log(res);
      this.employees=res;
    })
  }
  onDeleteEmployees(id){
    if(confirm('Do you Want to delete this contact')){
      this.empService.deleteEmployee(id).subscribe(
        (res)=>{
          console.log(res);
          this.getEmployees();
        },
        (err)=>{
          console.log(err);
        }
      )
    }
  }
  onEditEmployee(emp){
    this.empForm.patchValue(emp);

  }
  onEmpSubmit(){
    this.empService.updateEmployee(this.empForm.value).subscribe(
      (res)=>{
        console.log(res);
        this.getEmployees();
      },
      (err)=>{
        console.log(err);
      }
    )
  }


}
