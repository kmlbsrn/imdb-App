import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie, NowPlaying } from '../../models/movies/movieModel.inteface';
import { delay } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition('* => void', [
        style({ opacity: 1 }),
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class SliderComponent {
  movies!: Movie[];

  constructor(private movieService: MovieService) {}

  currentSlide = 0;

  ngOnInit() {
    this.getNowPlayingMovies(1);
    this.sliderTimer();
  }

  getNowPlayingMovies(page: number) {
    this.movieService
      .getNowPlaying(page)
      .pipe(delay(2000))
      .subscribe((data) => {
        
        console.log(data);
        this.movies = data.results;
        console.log(this.movies);
        
      });
  }

  sliderTimer() {
    setInterval(() => {
      this.currentSlide = ++this.currentSlide % this.movies.length;
    }, 5000);
  }
}
