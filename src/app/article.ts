export class Article {
  constructor(
    private category: string,
    private title: string,
    private image: string,
    private image_alt: string,
    private content: string,
    private _views: number,
    private _likes: number,
    private comments: string[],
    private shares: number,
    private author: string,
    private date: string,
    private tags: string[]
  ) {}

  get views(): number {
    return this._views;
  }

  get likes(): number {
    return this._likes;
  }

  set likes(n: number) {
    this._likes = n;
  }
}
