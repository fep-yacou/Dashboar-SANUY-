import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  url = environment.URL;
  demande:any;

  constructor(private http : HttpClient,) { }
  setDemande(data: any){this.demande = data}
  getDemande(){return this.demande}
  //Modifier DemandeDemandeAnnonce
  updateDemandeAnnonce(id: any, demande:any){
    return this.http.put(this.url + `/modifierDemandeAnnonce/${id}`, demande, {responseType:"text"});
  }

  //liste DemandeAnnonce
  listeDemandeAnnonce(){
    return this.http.get(this.url + '/listDemandeAnnonce');
  }

  //Details Annonce
  detailDemandeAnnonce(id:any){
    return this.http.get(this.url + `/getDemandeAnnonce/${id}`);
  }
}
