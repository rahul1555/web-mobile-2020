import { VenuesService } from "./../services/venues.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-venues",
  templateUrl: "./venues.component.html",
  styleUrls: ["./venues.component.css"],
})
export class VenuesComponent implements OnInit {
  public venuesList = [];
  public cityName: string;
  public locationSearched = "";
  constructor(private venueService: VenuesService) {}

  ngOnInit() {}

  getVenues() {
    this.venuesList = [];
    this.venueService.getVenues(this.cityName).subscribe((data) => {
      const response = data["response"];
      const items = response["groups"][0]["items"];
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
        this.venuesList.push(venueObj);
      });
      this.locationSearched = response["geocode"]["displayString"];
      console.log(this.venuesList, this.locationSearched);
    });
  }
}
