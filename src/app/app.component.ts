import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `X`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly metaTagService = inject(Meta);
  private readonly titleService = inject(Title);
  constructor() {
    this.titleService.setTitle('Glibrary');
    this.metaTagService.addTags([
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Glib Zaycev' },
      { name: 'description', content: 'Glib Zaycev | Arrested Developer' },
    ]);
  }
}
