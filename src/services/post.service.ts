import { Post } from '../models/Post';
import { Subject } from 'rxjs';

export class PostService {

    postsSubject = new Subject<Post[]>();

    private posts = [
      new Post(1, 'Mon premier post', 'Ceci est mon premier post'),
      new Post(2, 'Mon second post', 'Ceci est mon second post'),
      new Post(3, 'Mon dernier post', 'Ceci est mon dernier post'),
    ];

    emitPostSubject() {
        this.postsSubject.next(this.posts.slice());
    }

    getPostById(id: number) {
        const post = this.posts.find(
            (p) => {
                return p.id === id;
            }
        );
        return post;
    }

    addPost(title: string, content: string) {
        const id = this.posts[this.posts.length - 1].id + 1;
        const post = new Post(id, title, content);
        this.posts.push(post);
        this.emitPostSubject();
      }

      removePost(id: number) {
          this.posts.splice(id - 1);
          this.emitPostSubject();
      }

      increasePostLoveIts(id: number) {
          this.getPostById(id).loveIts++;
      }

      decreasePostLoveIts(id: number) {
          this.getPostById(id).loveIts--;
      }
}
