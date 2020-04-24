import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export enum SearchType {
    all = '',
    quote_id = 'id',
    author = 'author',

}

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    

    getEpisodes() {
        return this.http.get('https://breakingbadapi.com/api/episodes');

    }

    getEpisode(id) {
        return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`);
    }

    getCharacters() {
        return this.http.get('https://breakingbadapi.com/api/characters');

    }
    getCharacter(id) {
        return this.http.get(`https://breakingbadapi.com/api/characters/${id}`);
    }

    getQuotes() {
        return this.http.get('https://breakingbadapi.com/api/quotes');

    }
    getQuote(id) {
        return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`);
    }

    getDeaths() {
        return this.http.get('https://breakingbadapi.com/api/deaths');

    }

}