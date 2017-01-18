import {Component} from "@angular/core";
import {
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapsLatLng,
  GoogleMapsMarker,
  Geolocation
} from 'ionic-native';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private _latitude: number;
  private _longitude: number;

  constructor() {}

  ngAfterViewInit() {
    let map = new GoogleMap(document.getElementById('map'));

    map.one(GoogleMapsEvent.MAP_READY).then(() => {
      Geolocation.getCurrentPosition().then(pos => {
        this._latitude = pos.coords.latitude;
        this._longitude = pos.coords.longitude;

        map.moveCamera({
          target: new GoogleMapsLatLng(this._latitude, this._longitude),
          zoom: 18,
          tilt: 30
        }).then(() => {
          map.addMarker({
            position: new GoogleMapsLatLng(this._latitude, this._longitude),
            title: 'You are here!'
          })
            .then((marker: GoogleMapsMarker) => {
              marker.showInfoWindow();
            });
        });
      });
    });
  }
}
