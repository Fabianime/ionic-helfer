import { Component, OnInit } from '@angular/core';
import { Post } from '../models/apis.model';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { PostDataService } from '../services/post-data.service';

@Component({
  selector: 'hh-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: [ 'tab1.page.scss' ]
})
export class Tab1Page implements OnInit {
  public posts$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
  private startPosition = 0;

  constructor(private readonly postDataService: PostDataService) {
  }

  public ngOnInit(): void {
    this.fillPosts();
  }

  public trackByFn(index: number, data: any): string {
    return data.id;
  }

  private fillPosts(event?: any): void {
    this.postDataService.getPostsWithHelpingIndicator(this.startPosition, 5)
      .pipe(first())
      .subscribe((posts) => {
        posts = [ ...this.posts$.value, ...posts ];
        this.posts$.next(posts);

        if (event) {
          event.target.complete();
        }
      });
    this.startPosition += 5;
  }

  public sendChangeToApi(isHelping: boolean, id: string) {
    this.postDataService.updateHelpingStatus(id, isHelping).subscribe();
  }
}
