import { Component, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'ba-post-list-item',
  templateUrl: './post-list-item.component.html'
})
export class PostListItemComponent {
  @Input() post: Post;

  constructor(private postService: PostService) { }

  getPostClass() {
    if (this.post.loveIts > 0) {
      return {
        'list-group-item-success': true,
        'list-group-item-danger': false
      };
    } else if (this.post.loveIts < 0) {
      return {
        'list-group-item-danger': true,
        'list-group-item-success': false
      };
    }
  }

  lovePost() {
    this.postService.increasePostLoveIts(this.post.id);
  }

  dontLovePost() {
    this.postService.decreasePostLoveIts(this.post.id);
  }

  deleteIt() {
    this.postService.removePost(this.post.id);
  }

}
