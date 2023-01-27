import * as React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { Dispatch } from 'redux';
import Article from '../Article/Article';
import AddArticle from '../AddArticle/AddArticle';
import { addArticle, removeArticle } from '../../store/actionCreators';

const Test: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  return (
    <main>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  );
};

export default Test;
