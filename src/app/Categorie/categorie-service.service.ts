import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {
  url = environment.URL

  constructor(
    private http: HttpClient,
  ) { }

  //liste Categorie
  listeCategorie() {
    return this.http.get(this.url + '/listCategorie');
  }
  //ajout Categorie
  ajoutCategorie(formdata: FormData): Observable<any> {
    return this.http.post(this.url + '/ajoutCategorie', formdata);
  }
  //Modifier Categorie
  updateCategorie(id: any, part: any) {
    return this.http.put(this.url + '/modifiercategorie/'+ id, part, {responseType:"text"});
  }
  //Details Categorie
  detailCategorie(id_participant: any) {
    return this.http.get(this.url + '/infoannonce/${id_participant}');
  }

  //Supprimer Categorie
  deleteCategorie(id: any) {
    console.log("delete service");
    return this.http.delete(this.url + '/supprimercategorie/' + id)
  }
}
