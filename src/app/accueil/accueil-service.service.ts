import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccueilServiceService {
  url = environment.URL;

  constructor(
    private http : HttpClient,
  ) { }


  nmbreTotalUtilisateur(){
    return this.http.get(this.url + "/nmbreUser");
  }

  nmbreTotalAnnonce(){
    return this.http.get(this.url + "/nmbreAnnonce");
  }
}
