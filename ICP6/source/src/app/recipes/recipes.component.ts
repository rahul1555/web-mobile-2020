import { VenuesService } from "./../services/venues.service";
import { RecipesService } from "./../services/recipes.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
})
export class RecipesComponent implements OnInit {
  public itemName: string;
  public recipesList = [];
  public restaurants = [];
  public cityName: string = "";
  constructor(
    private recipeService: RecipesService,
    private venusService: VenuesService
  ) {}

  ngOnInit() {}

  getRecipeDetails() {
    this.restaurants = [];
    this.recipeService.getRecipeInfo(this.itemName).subscribe((data) => {
      const recipes = data["hits"];
      console.log(recipes)
      recipes.map(recipe => {
        console.log(recipe)
        const recipeObj = {
          name : recipe['recipe']['label'],
          url : recipe['recipe']['url'],
          icon : recipe['recipe']['image'],
          ingredients: recipe['recipe']['ingredientLines'].slice(0,4)
        }
        this.recipesList.push(recipeObj);
      })
    });

    this.venusService
      .getVenueByItem(this.itemName, this.cityName)
      .subscribe((data) => {
        const response = data["response"];
        const items = response["groups"][0]["items"].slice(0, 5);
        items.map((item) => {
          const venueObj = {
            id: item["venue"]["id"],
            name: item["venue"]["name"],
            address: {
              street: item["venue"]["location"]["address"],
              city: item["venue"]["location"]["city"],
              state: item["venue"]["location"]["state"],
              postalCode: item["venue"]["location"]["postalCode"],
              country: item["venue"]["location"]["country"],
            },
            category: item["venue"]["categories"][0]["name"],
          };
          this.restaurants.push(venueObj);
        });
        // this.locationSearched = response["geocode"]["displayString"];
      });
  }
}
