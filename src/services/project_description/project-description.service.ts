import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectDescription } from 'models/ProjectDescription';
import { ProjectDesc } from 'models/ProjectDesc';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectDescriptionService {

  
  constructor(private httpclt:HttpClient) { 
  }

  createProjectDescription(projectDescription: any): Observable<any>
  {
    return this.httpclt.post<any>("http://localhost:8002/CreateProjectDescription", projectDescription);
  }

  getAllProjects():Observable<ProjectDescription[]>
  {
    return this.httpclt.get<ProjectDescription[]>("http://localhost:8003/api/project-descriptions")
  }
}
