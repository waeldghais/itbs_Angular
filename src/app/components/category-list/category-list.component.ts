import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public catListe: any[] = []
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

  deleteCategory(category: any) {
    let indice = this.catListe.indexOf(category);
    this.catListe.splice(indice, 1)

    this.http.delete<any>("https://itbs-backend.herokuapp.com/category/delete/" + category._id)
      .subscribe(
        result => {
          console.log(result)
        },
        error => {
          console.log(error);
        }
      )
  }

}
