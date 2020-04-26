import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavouriteService } from '../../services/favourite.service';
@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {
    character: any;
    characterId = null;
    isFavouriteCharacters = false;

    constructor(private activatedRoute: ActivatedRoute,
        private api: ApiService,
        private favouriteService: FavouriteService, ) { }

    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
        });

        this.favouriteService.isFavourite(this.characterId).then(isFav => {
            this.isFavouriteCharacters = isFav;
        });
    }
    

    favouriteCharacter() {
        this.favouriteService.favouriteCharacter(this.characterId).then(() => {
            this.isFavouriteCharacters = true;
        });
    }


    unfavouriteCharacter() {
        this.favouriteService.unfavouriteCharacter(this.characterId).then(() => {
            this.isFavouriteCharacters = false;
        });
    }

}
