import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'about',
  standalone: true,
  template: `<h1>About</h1>`,
})
export class AboutComponent {
  constructor(
    private readonly titleService: Title,
    private readonly metaTagService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Glibrary | About');
    this.metaTagService.addTags([
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Glib Zaycev' },
      {
        name: 'og:image',
        content: 'https://ternet.com.ua/wp-content/img/os/vista.jpg',
      },
      { name: 'description', content: 'Glib Zaycev | About Page' },
    ]);
  }
}
