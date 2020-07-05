import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/api/services/issue.service';
import { Issue } from 'src/app/models/issue';


@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {

  issues: Issue[];
  displayedColumns: string[] = ['id', 'state', 'description', 'createdAt', 'updatedAt'];

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
    this.getAllIssues();
  }

  getAllIssues(): void {
    this.issueService.loadAllIssues()
        .subscribe({
            next: (issues: Issue[]) => this.issues = issues,
            //error: err => this.errorMessage = err
        });
  }

  editIssue(issue: Issue): void {
    this.issueService.updateIssue(issue)
        .subscribe({
          next: () => this.onSaveComplete(),
          //error: err => this.errorMessage = err
      });
  }

  onSaveComplete(): void {
    
  }

}
