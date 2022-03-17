import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-modifier-admin',
  templateUrl: './modifier-admin.component.html',
  styleUrls: ['./modifier-admin.component.scss']
})
export class ModifierAdminComponent implements OnInit {
  id: any;
  admin: any
  admins = { nom: '', prenom: '', telephone: '', email: '', login: '' }

  constructor(
    private service: AdminServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailAdmin(this.id).subscribe((data: any) => {
      this.admin = data;
    })
  }

  updateAdmin() {
    this.service.updateAdmin(this.id, this.admin).subscribe((data: any) => {
      this.router.navigate(['liste-admin']);
    })
  }

}
