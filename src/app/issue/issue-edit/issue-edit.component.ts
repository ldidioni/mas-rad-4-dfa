import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from 'src/app/api/services/issue.service';
import { Issue } from 'src/app/models/issue';

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.scss']
})
export class IssueEditComponent implements OnInit {

  issueForm: FormGroup;
  issue: Issue;
  private sub: Subscription;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private issueService: IssueService) { 

  }

  ngOnInit(): void {
    this.issueForm = this.fb.group({

    });

    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getIssue(id);
      }
    );
  }

  getIssue(id: number): void {
    this.issueService.loadIssue(id)
      .subscribe({
        next: (issue: Issue) => this.displayIssue(issue),
        //error: err => this.errorMessage = err
      });
  }

  displayIssue(issue: Issue) {
    this.issue = issue;
  }

}
