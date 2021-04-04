import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  // El operador afirmación no nulo, ! , le permite afirmar que una expresión no es null o undefined cuando el compilador de TypeScript no puede inferir eso automáticamente
  // Entonces, podemos usar el operador de aserción no nulo,!,
  // para afirmar que node.next no está indefinido y silenciar la advertencia del compilador
  @Input()
  character!: Character;

  constructor() {}

  ngOnInit(): void {}
}
