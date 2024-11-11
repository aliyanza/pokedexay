import { Component } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { GraficoComponent } from '../grafico/grafico.component';
import { CommonModule } from '@angular/common';
import { ViewChild, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokemonComponent,GraficoComponent,CommonModule,FormsModule],
  templateUrl: './pokedex-view.component.html',
  styleUrl: './pokedex-view.component.css'
})
export class PokedexViewComponent {
  @Input() hearts: number = 5;
   pokemonImagen:string ='https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/1.png';
   pokemonID: number = 0;


   cambiarPokemon():void{
    this.pokemonID++;
    this.pokemonImagen= 'https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/'+this.pokemonID+'.png';
   }
  
   handlePokemon(event:number){
    this.pokemonID += event;
    this.pokemonImagen =  'https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/'+this.pokemonID+'.png';


    /*Mostrar la imagen en la UI */
   }

   buscarPokemon() {
    this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/${this.pokemonID}.png`;
  }

   @ViewChild(GraficoComponent) graficoComponent!: GraficoComponent;

  // ...

  atacar() {
    this.graficoComponent.atacar();
  }

  curar() {
    this.graficoComponent.curar();
  }



}
