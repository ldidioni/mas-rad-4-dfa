import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IssueType } from 'src/app/models/issue-type';
import { IssueTypeService } from 'src/app/api/services/issue-type.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
})
export class FilterFormComponent {
  form: FormGroup;
  issueTypes: IssueType[]; 
  issueDescription: String;

  constructor(private formBuilder: FormBuilder, 
              private issueTypeService: IssueTypeService) {
    this.form = this.formBuilder.group({
        issueTypes: [''],
        issueDescription: ''
    });
  }

  ngOnInit(): void {
    this.getAllIssueTypes();
  }

  getAllIssueTypes(): void {
    this.issueTypeService.loadAllIssueTypes()
        .subscribe({
            next: (issueTypes: IssueType[]) => this.issueTypes = issueTypes,
            //error: err => this.errorMessage = err
        });
  }

  submit() {}

}