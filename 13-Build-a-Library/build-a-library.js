// making a parent class Media
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  
  // creating getters and setters
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
  
  // creating a method that changes the value of _isCheckedOut property
  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut; // we using getter/setter here
  }
  
  // creating a method that returns an average value of the ratings array
  getAverageRating() {
    let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
    return ratingsSum / this.ratings.length;
  }
  
  // adding a rating value to the end of the ratings array
  addRating(value) {
    if (value >= 1 && value <= 5) {
      this.ratings.push(value);
    } else {
      console.log("Please enter number between 1 and 5!");
    }
  }
}

// creating a Book class
class Book extends Media {
  constructor (author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }  
  get pages() {
    return this._pages;
  }
}

// creating a Movie class
class Movie extends Media {
  constructor (director, title, runTime) {
    super (title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = [];    
  }

  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
  get movieCast() {
    return this._movieCast;
  }

  addMovieCast(actor) {
    this.movieCast.push(actor);
  }
}

// creating a CD class
class CD extends Media {
  constructor (artist, title, runTime) {
    super (title);
    this._artist = artist;
    this._runTime = runTime;
    this._songTitles = [];
    this._randomSongs = [];
  }

  get artist() {
    return this._artist;    
  }
  get runTime() {
    return this._runTime;this.songTitles
  }
  get songTitles() {
    return this._songTitles;
  }
  get randomSongs() {
    return this._randomSongs;
  }

  addSongTitles(name) {
    this.songTitles.push(name)
  }

  shuffle() {
    // cloning songTitles array 
    for (let i=0; i<this.songTitles.length; i++) {
      this.randomSongs.push(this.songTitles[i]);
    }
    // randomizing randomSongs array
    let currentIndex = this.randomSongs.length, temporaryValue, randomIndex;   
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.randomSongs[currentIndex];      
      this.randomSongs[currentIndex] = this.randomSongs[randomIndex];
      this.randomSongs[randomIndex] = temporaryValue;
    }
    return this.randomSongs;
  }
}

// creating a Book instance
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything);
console.log(historyOfEverything.isCheckedOut);
console.log(historyOfEverything.getAverageRating());

// creating a Movie instance
const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed);
console.log(speed.isCheckedOut);
console.log(speed.getAverageRating());

// creating a CD instance
const smak = new CD('Radomir Mihajlovic Tocak', 'Smak Hitovi', 90);
smak.addSongTitles('Sumadijski Bluz');
smak.addSongTitles('Profesor');
smak.addSongTitles('Satelit');
smak.addSongTitles('Ulazak u Harem');
smak.addSongTitles('Crossroads');
smak.toggleCheckOutStatus();
smak.addRating(5);
smak.addRating(5);
smak.addRating(5);

console.log(smak.songTitles);
console.log(smak.shuffle());
console.log(smak.isCheckedOut);
console.log(smak.getAverageRating());
