import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor(public HttpClient: HttpClient) { }
  public getItems():any{
    let url = "http://localhost:5001/menu";
    return this.HttpClient.get(url);
  }
}
