import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'add-nav',
  templateUrl: './add-nav.component.html',
  styleUrls: ['./add-nav.component.scss']
})
export class AddNavComponent {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  goToSection(event: Event): void {
    const item: HTMLElement = event.target as HTMLElement;

    if (item.dataset.anchor) {
      const anchor: string = item.dataset.anchor;
      const target: HTMLElement | null = this.document.getElementById(anchor);
      const header: HTMLElement | null = this.document.getElementById('header');

      if (target && header) {
        const targetPosY: number = target.offsetTop - header.offsetHeight - 6;

        window.scrollTo(0, targetPosY);
      }
    }
  }

}
