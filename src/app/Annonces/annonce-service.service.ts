import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnonceServiceService {
  url = environment.URL;
  constructor(
    private http : HttpClient,
  ) { }

      //liste Annonce
      listeAnnonce(){
        return this.http.get(this.url + '/listAnnonce');
      }
      //ajout Annonce
      ajoutAnnonce(formdata: FormData): Observable<any>{
        return this.http.post(this.url + '/ajouterAnnonce', formdata);
      }
      //Modifier Annonce
      updateAnnonce(id: any, part:any){
        return this.http.put(this.url + '/modifierAnnonce/' + id, part, {responseType:"text"});
      }
      //Details Annonce
      detailAnnonce(id_participant:any){
        return this.http.get(this.url + '/participantById/${id_participant}');
      }
  
      //Supprimer Annonce
      deleteAnnonce(id: any){
        console.log("delete service");
        return this.http.delete(this.url + '/deleteParticipant/'+id)
      }
}
