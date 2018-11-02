export class Article {
  constructor(
    private category: string,
    private title: string,
    private image: string,
    private image_alt: string,
    private content: string,
    private _likes: number,
    private comments: number,
    private shares: number,
    private author: string,
    private date: string,
    private tags: string[]
  ) {}

  get likes(): number {
    return this._likes;
  }

  set likes(n: number) {
    this._likes = n;
  }
}
