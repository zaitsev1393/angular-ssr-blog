import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'blog-list',
  standalone: true,
  template: `<h1>Blog List</h1> `,
})
export class BlogListComponent {
  constructor(
    private readonly titleService: Title,
    private readonly metaTagService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Glibrary | Blog');
    this.metaTagService.addTags([
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Glib Zaycev' },
      {
        name: 'og:image',
        content:
          'https://3dnews.ru/assets/external/illustrations/2018/06/26/971746/01.jpghttps://upload.wikimedia.org/wikipedia/ru/thumb/1/1d/%D0%91%D0%B5%D0%B7%D0%BC%D1%8F%D1%82%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C.png/300px-%D0%91%D0%B5%D0%B7%D0%BC%D1%8F%D1%82%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C.png',
      },
      { name: 'description', content: 'Glib Zaycev | Blog List' },
    ]);
  }
}
