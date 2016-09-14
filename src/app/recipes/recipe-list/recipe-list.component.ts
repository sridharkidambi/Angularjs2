import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';
@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives : [ RecipeItemComponent ]
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[];
  //recipe:Recipe;
  recipe = new Recipe('Dummy','dummy','http://srisrinivasaperumaltemplecoimbatore.com/gallery/images/190.JPG');
  
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { };

  ngOnInit() {
  };

  OnSelected(recipe:Recipe)
  {
   this.recipeSelected.emit(recipe);
  }

}
