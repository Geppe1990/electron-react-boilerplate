import * as actionTypes from './actionTypes';

export function simulateHttpRequest(action: ArticleAction) {
  return (dispatch: DispatchArticleType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}

export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.ADD_ARTICLE,
    article,
  };

  return simulateHttpRequest(action);
}

export function removeArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.REMOVE_ARTICLE,
    article,
  };
  return simulateHttpRequest(action);
}

export function addPhotos(photos: string[]) {
  const action: PhotosAction = {
    type: actionTypes.ADD_PHOTOS,
    photos,
  };
  return (dispatch: DispatchPhotoType) => {
    dispatch(action);
  };
}
