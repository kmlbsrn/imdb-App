import { SafeResourceUrl ***REMOVED*** from "@angular/platform-browser";


export interface MovieModel {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
***REMOVED***

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
***REMOVED***

export interface NowPlaying {
***REMOVED***dates: Dates;
***REMOVED***page: number;
***REMOVED***results: Movie[];
***REMOVED***total_pages: number;
***REMOVED***total_results: number;
***REMOVED***

export interface Dates {
***REMOVED***maximum: string;
***REMOVED***minimum: string;
***REMOVED***


export interface MovieVideo{
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
  url: SafeResourceUrl;
***REMOVED***

export interface MovieVideos {
  id: number;
  results: MovieVideo[];
***REMOVED***

export interface Genre {
  id: number;
  name: string;
***REMOVED***

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
***REMOVED***

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
***REMOVED***

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
***REMOVED***

export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any; // Eğer koleksiyon bilgisi yoksa null olabilir
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
***REMOVED***

export interface Credits {
 
  id: number;
  cast: Cast[];
  crew: Crew[];
  
***REMOVED***

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;


***REMOVED***

export interface Crew {
  adult: boolean
***REMOVED***