import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ba-new-post',
  templateUrl: './new-post.component.html'
})
export class NewPostComponent implements OnInit {

  title = 'Nouveau post';

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.postService.addPost(form.value.title, form.value.content);
    this.router.navigate(['posts']);
   }

}
