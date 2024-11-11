import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})
export class GraficoComponent {
  @Input() salud: number = 5;
  @Input() energia: number = 5;
  @Input() ataque: number = 5;
  @Input() defensa: number = 5;

  hearts: string[] = [];
  flash: string[] = [];
  atack: string[] = [];
  defense: string[] = [];

  ngOnInit() {
    this.crearArraysDeIconos();
  }

  crearArraysDeIconos() {
    this.atack = Array(this.ataque).fill('⚔︎'); 
    this.defense = Array(this.defensa).fill('🫂'); 
    this.hearts = Array(this.salud).fill('💜'); 
    this.flash = Array(this.energia).fill('✨'); 
  }

  atacar() {
    if (this.salud > 0) {
      this.salud--;
      // Update the hearts array to reflect the change
      this.hearts = Array(this.salud).fill('💜');
    }
  }

  curar() {
    if (this.salud < 5) { // Limit of 5 hearts
      this.salud++;
      // Update the hearts array to reflect the change
      this.hearts = Array(this.salud).fill('💜');
    }
  }
}