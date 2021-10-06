import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  url='http://localhost:44381/api';
 
  constructor(private http:HttpClient) { }
}
