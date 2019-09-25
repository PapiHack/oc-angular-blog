export class Post {

    public loveIts: number;
    public createdAt: Date;

    constructor(public id: number,
                public title: string,
                public content: string) {
                    this.title = title;
                    this.content = content;
                    this.loveIts = 0;
                    this.id = id;
                    this.createdAt = new Date();
                }
}
