
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  result:any;
  weatherForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private weatherService: WeatherService) { }

    ngOnInit() {this.weatherForm= this.formBuilder.group({
      city:["",[Validators.required]],
      
     
    })
    }
    search(){
      console.log("here city", this.weatherForm.value);
      this.weatherService.searchWeather(this.weatherForm.value.city).subscribe((response)=>{
        this.result=response.result;
        
        
      });
    }
  
  }