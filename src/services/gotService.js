export default class GotService {
    constructor() {
        this._apiBase = 'https://anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`COuld not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter);
    }

    getCharacters = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllBooks = async () => {
        const res = await this.getResource(`/books?page2`);
        return res.map(this._transformBook);
    }

    getBooks = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformCharacter(book);
    }

    getAllHouses = async () => {
        const res = await this.getResource(`/houses?page1`);
        return res.map(this._transformHouse);
    }

    getHouses = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformCharacter(house);
    }

    isSet(data) {
        if (data) {
            return data
        } else {
            return 'no data :('
        }
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformCharacter(char) {
       return {
           name: char.name,
           born: char.born,
           gender: char.gender,
           died: char.died,
           culture: char.culture
       }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book){
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }
}