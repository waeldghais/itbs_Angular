import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  public prodListe: any[] = [
    {
      _id:"1",
      name:"pantalon",
      prix:"80 DT",
      image:"penta.jpg"
    },
    {
      _id:"2",
      name:"micro onde",
      prix:"180 DT",
      image:"micro.jpg"
    },
    {
      _id:"3",
      name:"golf 8",
      prix:"38000 DT",
      image:"golf8.jpg"
    },
  ]
  constructor() { }

  ngOnInit(): void {
    
  }

}
