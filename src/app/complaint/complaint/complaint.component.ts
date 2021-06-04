import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ComplainTypeEnum } from 'src/app/enums/complain-type.enum';
import { complainEntity } from '../complaint';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
  constructor(
    private complaintservice:ComplaintService,
    private router: Router,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
  }

  processForm(monFormulaire: NgForm){
    this.complaintservice.create(monFormulaire.value).subscribe(
      (complain)=>{
        this.toaster.success(
          `votre reclamation de ${complain.id}${complain.nom} a été envoyée avec succès`
        );
        this.router.navigate(['']);
      },
      (erreur) => {
        console.log(erreur);
        this.toaster.error(
          `Problème avec le serveur veuillez contacter l'admin`
        );
      }

    );

  }
}
