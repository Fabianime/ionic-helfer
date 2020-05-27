import { Component, OnInit } from '@angular/core';
import { Post } from '../models/apis.model';
import { of } from 'rxjs';
import { delay, first } from 'rxjs/operators';

@Component({
  selector: 'hh-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: [ 'tab1.page.scss' ]
})
export class Tab1Page implements OnInit {
  public posts: Post[];

  private post: Post = {
    type: 'garden',
    title: 'Garten Pflege',
    tags: [ 'garden', 'watering' ],
    summary: 'Hilfe bei meiner Gartenpflege',
    userData: { firstName: 'Fabian', age: '60' },
    eventData: { city: 'Stuttgart', date: '22.06.2020' },
  };

  public ngOnInit(): void {
    this.fillPosts();
  }

  public trackByFn(index: number, data: any): number {
    return index;
  }

  private fillPosts() {
    this.posts = [ this.post, this.post, this.post ];
  }

  public extendPosts(event) {
    of('').pipe(
      first(),
      delay(1500)
    ).subscribe(() => {
      this.posts.push(this.post);
      this.posts.push(this.post);
      this.posts.push(this.post);
      event.target.complete();
    });
  }

}
