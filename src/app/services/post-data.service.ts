import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HelpingPost, Post } from '../models/apis.model';
import { delay, map, switchMap } from 'rxjs/operators';

@Injectable()
export class PostDataService {

  private dummyPosts: Post[] = [
    {
      id: '123',
      type: 'garden',
      title: 'Garten Pflege',
      tags: [ 'garden', 'watering' ],
      summary: 'Hilfe bei meiner Gartenpflege',
      userData: { firstName: 'Fabian', age: '60', profileImg: 'assets/images/profil1.jpeg' },
      eventData: { city: 'Stuttgart', date: '22.06.2020' },
    },
    {
      id: Math.random().toString(),
      type: 'garden',
      title: 'Garten Renovieren',
      tags: [ 'garden', 'watering', 'lawn_mowing', 'cleaning' ],
      summary: 'Hilfe beim Garten Renovieren',
      userData: { firstName: 'Peter', age: '23', profileImg: 'assets/images/profil2.png' },
      eventData: { city: 'Gerlingen', date: '01.01.2021' },
    },
    {
      id: Math.random().toString(),
      type: 'first',
      title: 'Some random',
      tags: [ 'first', 'stuff', 'random' ],
      summary: 'Hilfe bei meiner Gartenpflege',
      userData: { firstName: 'Fabian', age: '60', profileImg: 'assets/images/profil3.png' },
      eventData: { city: 'Stuttgart', date: '22.06.2020' },
    },
    {
      id: Math.random().toString(),
      type: 'diy',
      title: 'Schrank bauen',
      tags: [ 'diy', 'wood' ],
      summary: 'Ich will einen Schrank selber bauen und brächte dabei hilfe das holz zusammen zu sägen',
      userData: { firstName: 'Sahra', age: '32', profileImg: 'assets/images/profil4.png' },
      eventData: { city: 'Giebel', date: '01.05.2020' },
    },
    {
      id: '444',
      type: 'move',
      title: 'Umzug Giebel',
      tags: [ 'move', 'giebel', 'student' ],
      summary: 'Hallo zusammen. Ich bin ein Student und ziehe demnächst hier her. Ich bräuchte Hilfe folgende sachen in den 3 Stock zu trage: Tisch, PC, Stühle, etc.',
      userData: { firstName: 'Josh', age: '20', profileImg: 'assets/images/profil2.png' },
      eventData: { city: 'Giebel', date: '30.08.2020' },
    },
    {
      id: Math.random().toString(),
      type: 'diy',
      title: 'DIY Party',
      tags: [ 'diy', 'helping', 'something_else' ],
      summary: 'Ihr wollt creative werden und sachen wie z.B. Bilderrahmen, Behälter und weiteres selber bauen? Dann kommt doch am Wochenende zu mir und wir veranstallten eine kleine diy party.',
      userData: { firstName: 'Franziska', age: '42', profileImg: 'assets/images/profil3.png' },
      eventData: { city: 'Gerlingen', date: '30.05.2020' },
    }
  ];

  private helpingPosts: HelpingPost[] = [
    {
      postId: '123',
    },
    {
      postId: '444',
    }
  ];

  constructor(private readonly httpClient: HttpClient) {
  }

  public getPostsWithHelpingIndicator(start: number, amount: number): Observable<Post[]> {
    return this.getHelpingPosts()
      .pipe(
        map(helpingPosts => helpingPosts.map(({ postId }) => postId)),
        switchMap((helpingPosts) =>
          this.getPosts(start, amount).pipe(
            map((posts) => posts.map(post => {
              post.isHelping = helpingPosts.indexOf(post.id) !== -1;
              return post;
            }))
          )
        )
      );
  }

  public getPosts(start: number, amount: number): Observable<Post[]> {
    return of(this.dummyPosts).pipe(delay(1000));
  }

  public getHelpingPosts(): Observable<HelpingPost[]> {
    return of(this.helpingPosts);
  }

  public updateHelpingStatus(id: string, isHelping: boolean) {
    return of('');
  }
}
