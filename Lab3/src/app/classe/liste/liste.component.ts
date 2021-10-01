import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  liste:Person[] = [];

  inputFirstName: string ="";
  inputLastName: string ="";
  inputCellNumber: string ="";
  inputEmail: string="";


  constructor() { }

  ngOnInit(): void {
    this.liste = [this.Mika, this.Maeva]
  }

  Maeva: Person = new Person("Maeva", "Dupuis", "0332243412", "Maeva@gmail.com");
  Mika: Person = new Person("Mika", "Rafaralahy", "0327689876", "Rafaralahymika@gmail.com");
  
  // Suppression
  suppression(id: number){
    this.liste = this.liste.filter((v, i) => i !==id );
  }

  ajouter(){
    this.liste.push({
      lastName: this.inputLastName,
      firstName: this.inputFirstName,
      cellNumber: this.inputCellNumber,
      email: this.inputEmail
    })

    this.inputLastName ="";
    this.inputFirstName="";
    this.inputCellNumber="";
    this.inputEmail="";
  }
  
}
