import { BoutiqueService } from './../../../boutique/boutique.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-boutique',
  templateUrl: './add-boutique.component.html',
  styleUrls: ['./add-boutique.component.css']
})
export class AddBoutiqueComponent implements OnInit {
  boutique = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    nom:'',
    path: '',
    image: '',
  };
  submitted = false;
  constructor(private BoutiqueService:BoutiqueService) { }

  ngOnInit(): void {
  }
  createBoutique(): void {
    const data = {
      nom: this.boutique.nom,
      path: this.boutique.path,
      image: this.boutique.image,
    };

    this.BoutiqueService.createBoutique(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newBoutique(): void {
    this.submitted = false;
    this.boutique = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    nom: '',
    path:'',
    image:'',
    };
  }

}
