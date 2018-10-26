export class Article {
  constructor(
    private category: string,
    private title: string,
    private image: string,
    private image_alt: string,
    private content: string,
    private likes: number,
    private comments: string[],
    private shares: number,
    private author: string,
    private date: string,
    private tags: string[]
  ) {}
}
