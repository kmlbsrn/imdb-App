
import { Component } from '@angular/core';
import {CarouselModule} from 'primeng/carousel';
import { MovieService } from '../../services/movie.service';
import { Movie, NowPlaying } from '../../models/movies/movieModel.inteface';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [CarouselModule,HttpClientModule,RouterLink],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.scss'
})
export class MovieCarouselComponent {

  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];

constructor(private movieService:MovieService) { }

  nowPlayingMovies!: Movie[] ;
  
  
  ngOnInit() {
    console.log('MovieCarouselComponent');
    this.movieService.getNowPlaying(1).subscribe((data) => {
      this.nowPlayingMovies = data.results;
      console.log(this.nowPlayingMovies);
    });
  }
}
