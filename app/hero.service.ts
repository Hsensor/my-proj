import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
//导出HeroService类，
export class HeroService{
	//promise .then(function(result){}) result's data type  should be Hero[]
	getHeroes(): Promise<Hero[]>{
		return Promise.resolve(HEROES);
	},
	getHeroesSlowly(): Promise<Hero[]>{
		return new Promise<Hero[]>(resolve=>
			setTimeout(resolve,2000)).then(()=>this.getHeroes())

		)
	}
}