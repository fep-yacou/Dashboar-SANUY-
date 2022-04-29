import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { CategorieServiceService } from '../categorie-service.service';

@Component({
  selector: 'app-detail-categorie',
  templateUrl: './detail-categorie.component.html',
  styleUrls: ['./detail-categorie.component.scss']
})
export class DetailCategorieComponent implements OnInit {
  id: any;
  categorie: any;

  constructor(
    private service: CategorieServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailCategorie(this.id).subscribe((data)=>{
      this.categorie = data;
      console.log("====================",this.categorie);
      
    })
  }

}
