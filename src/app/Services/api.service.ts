import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = 'https://api.themoviedb.org/3';
  // private apiKey: string = '7410728c0817c3b5b4d09a65455b20fc';

  private headers = {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDEwNzI4YzA4MTdjM2I1YjRkMDlhNjU0NTViMjBmYyIsInN1YiI6IjY1MjkwNGMxMWYzZTYwMDBjNTg4NjRjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SK2Pedp50IbimXLLWxyJ2i2DvIOjwYGz1mTNcbpxm00',
  };
  options = {
    params: { language: 'en-US' },
    headers: this.headers,
  };
  getPopMovies(page: any = 1) {
    return this.http.get(
      `${this.baseUrl}/movie/popular?page=${page}`,
      this.options
    );
  }
  getTrending() {
    return this.http.get(`${this.baseUrl}/trending/movie/day`, this.options);
  }
  getMoviesDetails(movie_id: any) {
    return this.http.get(`${this.baseUrl}/movie/${movie_id}`, this.options);
  }
  getMovieTrailer(movie_id: any) {
    return this.http.get(
      `${this.baseUrl}/movie/${movie_id}/videos`,
      this.options
    );
  }
  getSimilarMovies(movie_id: any) {
    return this.http.get(
      `${this.baseUrl}/movie/${movie_id}/similar`,
      this.options
    );
  }
  getCast(movie_id: any) {
    return this.http.get(
      `${this.baseUrl}/movie/${movie_id}/credits`,
      this.options
    );
  }
  getPopSeries(page:any=1) {
    return this.http.get(`${this.baseUrl}/tv/popular?page=${page}`, this.options);
  }
  search(keyword: any) {
    return this.http.get(
      `${this.baseUrl}/search/multi?query=${keyword}&include_adult=false`,
      this.options
    );
  }
  getSeriesDetails(se_id: any) {
    return this.http.get(`${this.baseUrl}/tv/${se_id}`, this.options);
  }
  getPeople() {
    return this.http.get(`${this.baseUrl}/person/popular`, this.options);
  }
  getPeopleDetails(id: any) {
    return this.http.get(`${this.baseUrl}/person/${id}`, this.options);
  }
  getPersonMovies(id: any) {
    return this.http.get(
      `${this.baseUrl}/person/${id}/movie_credits`,
      this.options
    );
  }
  getTvCast(id: any) {
    return this.http.get(`${this.baseUrl}/tv/${id}/credits`, this.options);
  }
  getTvTrailer(id: any) {
    return this.http.get(`${this.baseUrl}/tv/${id}/videos`, this.options);
  }
  changeLang(lang: any) {
    return (this.options.params.language = lang);
  }
}
