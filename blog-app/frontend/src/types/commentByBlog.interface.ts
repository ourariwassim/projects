export interface commentByBlog {
  title: string;
  comment: {
    id: string;
    content: string;
    created: string;
    user: {
      email: string;
    };
  }[];
}
