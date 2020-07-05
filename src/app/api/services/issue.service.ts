import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Issue } from "src/app/models/issue";
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: "root",
})
export class IssueService {
  constructor(private http: HttpClient) {}

  loadAllIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${environment.apiUrl}/issues`);
  }

  loadIssue(id: number): Observable<Issue> {
    return this.http.get<Issue>(`${environment.apiUrl}/issues/${id}`);
  }

  createIssue(issue: Issue): Observable<Issue> {
    return this.http.post<Issue>(`${environment.apiUrl}/issues`, issue);
  }

  updateIssue(issue: Issue): Observable<Issue> {
    return this.http.patch<Issue>(`${environment.apiUrl}/issues/${issue.id}`, issue);
  }

  initializeIssue(): Issue {
    return new Issue();
  }

}