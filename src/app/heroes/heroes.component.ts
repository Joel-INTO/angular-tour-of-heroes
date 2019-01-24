import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css', './../messages/messages.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  /*
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  */

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    // It's basically saying "get this method (getHeroes), asynchronously,
    // and assign the result (heroes) to our heroes property (this.heroes)
    // and it returns an observable, which looks for promise changes, so it
    // can be updated
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  add(name: String): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit() {
    this.getHeroes();
  }
}
