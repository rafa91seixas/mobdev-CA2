import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavouriteService } from '../../services/favourite.service';
@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {
  episode: any;
  episodeId = null;
  isFavourite = false;

  constructor(private activatedRoute: ActivatedRoute, 
    private api: ApiService, 
    private favouriteService: FavouriteService,
    ) {}

  ngOnInit() {
        //page iniciation of the page
        this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
        //asking Api to take the episode (where the http goes for that specific episode(id))
        //pass the request back to Api
        this.api.getEpisode(this.episodeId).subscribe(res => {
            this.episode = res[0]; //the result of that request for each id of this array
        });



        this.favouriteService.isFavourite(this.episodeId).then(isFav => {
            this.isFavourite = isFav; 
        });
    }



    favouriteEpisode() {
        this.favouriteService.favouriteEpisode(this.episodeId).then(() => {
            this.isFavourite = true; 
        });
    }

    unfavouriteEpisode() {
        this.favouriteService.unfavouriteEpisode(this.episodeId).then(() => {
            this.isFavourite = false; 
        });
    }
     
    
}