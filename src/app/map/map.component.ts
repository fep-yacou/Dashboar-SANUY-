import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Leaflet from 'leaflet';
import 'leaflet.locatecontrol';
import { AnnonceServiceService } from '../Annonces/annonce-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  latitude: any;
  longitude: any;
  propertyList = [];
  map: Leaflet.Map;
  url = environment.URL;

  constructor(
    private service : AnnonceServiceService,
  ) { }

  ngOnInit(): void {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(pos =>{

      });
      this.map = new Leaflet.Map('mapId').setView([12.63078, -8.026994], 16);
    }
  }

  

  ngAfterViewInit() {
    Leaflet.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ3JheWhhbWlsdG9uIiwiYSI6ImNpbHFxZmFpNzA4bW52dmx5eTY5YW5ia2EifQ.hoCUaTVuAJqLlSchwzwAGQ', {   
      maxZoom:20,
      
    }).addTo(this.map);
    
    Leaflet.control.layers().addTo(this.map);

    this.service.listeAnnonce().subscribe((data:any)=> {
      this.propertyList = data;
      this.leafletMap();
    })


  }
  leafletMap() {
    for (const property of this.propertyList) {
      Leaflet.marker([property.latitude, property.longitude]).addTo(this.map)
        .bindPopup(property.ville.quartier)
        .openPopup();
    }
  }

  ngViewWillLeave() {
    this.map.remove();
  };

}
