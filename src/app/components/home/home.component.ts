import { Component } from '@angular/core';
import { MovieCarouselComponent } from '../movie-carousel/movie-carousel.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieCarouselComponent,SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
