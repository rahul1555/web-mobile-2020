import { RecipesComponent } from "./recipes/recipes.component";
import { VenuesComponent } from "./venues/venues.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "venues",
    component: VenuesComponent,
  },
  {
    path: "recipes",
    component: RecipesComponent,
  },
  {
    path: "",
    redirectTo: "venues",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
