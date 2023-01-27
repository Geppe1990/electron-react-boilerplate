interface IArticle {
  id: number;
  title: string;
  body: string;
}

type ArticleState = {
  articles: IArticle[];
};

type ArticleAction = {
  type: string;
  article: IArticle;
};

type PhotosState = {
  photos: string[];
};

type PhotosAction = {
  type: string;
  photos: string[];
};

type DispatchArticleType = (args: ArticleAction) => ArticleAction;
type DispatchPhotoType = (args: PhotosAction) => PhotosAction;
