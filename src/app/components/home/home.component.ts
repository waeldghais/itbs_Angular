import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public catListe: any[] = []
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
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("https://itbs-backend.herokuapp.com/category/all")
      .subscribe(
        result => {
          this.catListe = result
        },
        error => {
          console.log("error");
        }
      )
  }

}
