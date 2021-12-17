class Media{
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title(){
      return this._title;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    set isCheckedOut(result){
          this._isCheckedOut = result;
    }
    get ratings(){
      return this._ratings;
    }
    toggleCheckOutStatus(){
      this.isCheckedOut = !this.isCheckedOut
    }
    getAverageRating(){
      let ratingSum = this.ratings.reduce((acumulator, rating) => acumulator + rating);
      return ratingSum / this.ratings.length;
    }
    addRating(newRating){
      if(newRating <= 5){
     return this.ratings.push(newRating);
      }else{
        console.log('The rating number needs to be less or equal 5')
      }
    }
  }
  class Book extends Media {
    constructor(author, title, pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  }
  class Movie extends Media {
    constructor(director, title, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director(){
      return this._director;
    }
    get runTime(){
      return this._runTime;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(Math.floor(historyOfEverything.getAverageRating()))
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(Math.floor(speed.getAverageRating()));