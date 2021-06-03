import { Component, OnInit } from '@angular/core';
import { BoutiqueService } from '../boutique.service';

@Component({
  selector: 'app-boutiques',
  templateUrl: './boutiques.component.html',
  styleUrls: ['./boutiques.component.css']
})
export class BoutiquesComponent implements OnInit {
  data:any;
  constructor(private shop:BoutiqueService) { }
  ngOnInit(): void {
      this.shop.getData().subscribe((result)=>{
      console.warn(result)
      this.data=result;
      })
    }
}
