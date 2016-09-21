import { Injectable } from '@angular/core';

import { Recipe } from "./recipe";
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
   new Recipe('Nityasri','Raghavan','http://srisrinivasaperumaltemplecoimbatore.com/gallery/images/190.JPG',[
     new Ingredient('Archanai',100),new Ingredient('Hundi',101)
   ]),
 new Recipe('Sridhar','Kidambi','http://www.sravanam.org/wp-content/uploads/2013/11/Kanchi_Navarathri_331.jpg',[
     new Ingredient('Thirumanjanam',1000),new Ingredient('Kalyanautsavam',1001)
   ])
  ];

  constructor() {}

  getRecipes() {
    return this.recipes;
  }

}