import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { SubSink } from 'subsink';
import { Cast, MovieVideo } from '../../models/movies/movieModel.inteface';
import { DomSanitizer } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { VideoComponent } from './video/video.component';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule,MatTabsModule,MatDialogModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  movieId: number = 0;
  movieDetails: any;
  movieVideos: MovieVideo[] = {} as MovieVideo[];
  trailers: MovieVideo[] = [];
  behindTheScenes: MovieVideo[] = [];

  cast : Cast[] = {} as Cast[];



  private subs = new SubSink();

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
   this.subs.sink = this.route.paramMap.subscribe((params) => {
      this.movieId = Number(params.get('id'));
    });

    this.subs.sink = this.movieService.getMovieDetail(this.movieId).subscribe((data) => {
      this.movieDetails = data;
      console.log(this.movieDetails);
    });

    this.subs.sink = this.movieService.getMovieVideos(this.movieId).subscribe((data) => {
      
      this.movieVideos = data.results;
      console.log(this.movieVideos);

      console.log(this.movieVideos);
      this.trailers = this.getTrailers();
     this.behindTheScenes = this.getBehindTheScenes();


    });

    this.subs.sink = this.movieService.getCasts(this.movieId).subscribe((data) => {
      
      this.cast = data.cast;
     
    });
    
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getTrailers():MovieVideo[]{
    return this.movieVideos.filter((video) => video.type === 'Trailer');
  };

  getClips():MovieVideo[]{
    return this.movieVideos.filter((video) => video.type === 'Clip');
  };


  getBehindTheScenes(): MovieVideo[]{
    return this.movieVideos.filter((video) => video.type === 'Behind the Scenes');
  }

  

  showTrailers(){
  
    this.trailers = this.getTrailers();
    console.log(this.trailers);

  }


  openVideoDialog(video: MovieVideo) {
    this.dialog.open(VideoComponent, {
      data: video,
      width: '800px',
      height: '450px',
    });
  }

}
