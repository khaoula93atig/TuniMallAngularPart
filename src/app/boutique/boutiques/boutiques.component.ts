import { BoutiqueService } from './../boutique.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boutiques',
  templateUrl: './boutiques.component.html',
  styleUrls: ['./boutiques.component.css']
})
export class BoutiquesComponent implements OnInit {

  data:any;
  constructor(private BoutiqueService:BoutiqueService) { }
  ngOnInit(): void {
      this.BoutiqueService.getBoutiques().subscribe((result)=>{
      this.data=result;
      })
    }
}
