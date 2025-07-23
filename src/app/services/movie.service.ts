import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credits, MovieDetail, MovieVideos, NowPlaying } from '../models/movies/movieModel.inteface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKeyToken = '';
  private language = 'en-US';
  private region = 'TR';

  constructor(private http: HttpClient) {}

  getNowPlaying(page: number): Observable<NowPlaying> {
    const url = `${this.baseUrl}/movie/now_playing?language=${this.language}&region=${this.region}&page=${page}`;
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.apiKeyToken}`
    );

    return this.http.get<NowPlaying>(url, { headers });
  }

  getMovieDetail(id: number): Observable<MovieDetail> {
    const url = `${this.baseUrl}/movie/${id}?language=${this.language}`;
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.apiKeyToken}`
    );

    return this.http.get<MovieDetail>(url, { headers });
  }


  getMovieVideos(id: number): Observable<MovieVideos>{
    const url = `${this.baseUrl}/movie/${id}/videos?language=${this.language}`;
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.apiKeyToken}`
    );
    return this.http.get<MovieVideos>(url, { headers });
  }

  getCasts(id: number): Observable<Credits> {
    const url = `${this.baseUrl}/movie/${id}/credits?language=${this.language}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiKeyToken}`);
    
    return this.http.get<Credits>(url, { headers });

  }
}
