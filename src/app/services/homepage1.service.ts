import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Homepage1Service {

  constructor(private http: HttpClient) { }
  _baseurl: string = "https://api.themoviedb.org/3/";
  _apiKey:string = "ddd21803ed32ad24e81dc576ffbe1b57";

  trendingDay(){
    return this.http.get("https://api.themoviedb.org/3/trending/all/day?api_key=ddd21803ed32ad24e81dc576ffbe1b57");

  }

  trendingWeek(){
    return this.http.get("https://api.themoviedb.org/3/trending/all/week?api_key=ddd21803ed32ad24e81dc576ffbe1b57");

  }

  popularMoviesDay(){
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=ddd21803ed32ad24e81dc576ffbe1b57&language=en-US&page=1");
  }
}
