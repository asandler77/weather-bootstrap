import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import {ApixuService} from '../apixu.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  fullImagePath: string;
  constructor(private formBuilder: FormBuilder,
              private apixuService: ApixuService) {
    this.fullImagePath = '/assets/images/partial.png';
    }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({location: ['']});
  }


  sentToAPIXU(formValues: string) {
    this.apixuService.getWeather(formValues)
      .subscribe(data => this.weatherData = data);
    console.log(this.weatherData);
  }
}
