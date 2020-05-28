import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { EventData, ImageTypeList, UserData } from '../models/apis.model';
import { of } from 'rxjs';

@Component({
  selector: 'hh-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.scss' ],
})
export class CardComponent implements OnChanges {
  @Output() public toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() public type: string;
  @Input() public title: string;
  @Input() public tags: string[];
  @Input() public summary: string;
  @Input() public isHelping: boolean;
  @Input() public userData: UserData;
  @Input() public eventData: EventData;

  public image: string;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.type) {
      this.fillImages();
    }
  }

  public toggleHelping(): void {
    this.isHelping = !this.isHelping;
    this.toggle.emit(this.isHelping);
  }

  private fillImages() {
    const imageList: ImageTypeList = {
      first: [ 'https://ionicframework.com/docs/demos/api/card/madison.jpg' ],
      garden: [ 'assets/images/garden1.jpeg', 'assets/images/garden2.jpeg' ],
      move: [ 'assets/images/move1.jpeg' ],
      diy: [ 'assets/images/diy1.jpeg' ],
    };
    // mock valuable images for different tags request
    of(imageList).subscribe((images) => {
      const availableImages = images[this.type];
      this.image = availableImages[this.getRandomInt(availableImages.length)];
    });
  }

  // from https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/math.random
  private getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
