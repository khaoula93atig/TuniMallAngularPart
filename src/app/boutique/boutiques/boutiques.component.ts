import { BoutiqueService } from './../boutique.service';
import { Component, OnInit } from '@angular/core';
import { shopEntity } from 'src/app/model/shop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutiques',
  templateUrl: './boutiques.component.html',
  styleUrls: ['./boutiques.component.css']
})
export class BoutiquesComponent implements OnInit {

  boutiques:shopEntity[];
  constructor(
    private BoutiqueService:BoutiqueService,
    public router: Router,
    ) { }
  ngOnInit(): void {
    this.getall();
    this.boutiques;

    }
    getall(){
      this.BoutiqueService.getAllboutiques().subscribe(data =>{
        this.boutiques=data
      }
        )
    }

    visite(boutique:shopEntity)
    {
      console.log(boutique.path);
      window.open(boutique.path, "_blank");

      //this.router.navigateByUrl(boutique.path);
    }
}
