import { Injectable } from '@angular/core';

import { Recipe } from "./recipe";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
   new Recipe('Nityasr','Raghavan','http://srisrinivasaperumaltemplecoimbatore.com/gallery/images/190.JPG',[]),
 new Recipe('Sridhar','Kidambi','http://www.sravanam.org/wp-content/uploads/2013/11/Kanchi_Navarathri_331.jpg',[])
  ];

  constructor() {}

  getRecipes() {
    return this.recipes;
  }

}