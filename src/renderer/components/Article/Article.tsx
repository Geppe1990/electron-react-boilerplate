import * as React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

type Props = {
  article: IArticle;
  removeArticle: (article: IArticle) => void;
};

const Article: React.FC<Props> = ({ article, removeArticle }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteArticle = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    (article: IArticle) => dispatch(removeArticle(article)),
    [dispatch, removeArticle]
  );

  return (
    <div className="Article">
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
      <button type="button" onClick={() => deleteArticle(article)}>
        Delete
      </button>
    </div>
  );
};

export default Article;
