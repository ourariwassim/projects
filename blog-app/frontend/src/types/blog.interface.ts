export interface blog {
  id: string;
  title: string;
  created: string;
  category: string;
  content: string;
  description: string;
  image: string;
  comment: {
    content: string;
    user: {
      email: string;
    };
  }[];
}
