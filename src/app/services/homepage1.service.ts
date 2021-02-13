import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Homepage1Service {

  constructor(private http: HttpClient) { }
  _apiKey:string = "ddd21803ed32ad24e81dc576ffbe1b57";

  whatsPopular(){
   const urlV: string = "https://api.themoviedb.org/3/discover/movie?api_key=ddd21803ed32ad24e81dc576ffbe1b57&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
   console.log(this.http.get(urlV));
  }

}
