/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const ARTICLE_ADD = 'ARTICLE_ADD';
export const ARTICLE_EDITING = 'ARTICLE_EDITING';
export const ARTICLE_DELETE = 'ARTICLE_DELETE';
// ------------------------------------
// Actions
// ------------------------------------
// NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
// If you're unfamiliar with Flow, you are completely welcome to avoid annotating your code, but
// if you'd like to learn more you can check out: flowtype.org.
// DOUBLE NOTE: there is currently a bug with babel-eslint where a `space-infix-ops` error is
// incorrectly thrown when using arrow functions, hence the oddity.
export function addArticle(value:object = {
  title: '',
  thumbMediaId: '',
  author: '',
  digest: '',
  showCoverPic: false,
  content: '',
  contentSourceUrl: ''
}):Action {
  console.log(value)
  return {
    type: ARTICLE_ADD,
    articles: value
  }

}

function editingArticle(value):Action {
  return {
    type: ARTICLE_EDITING,
    articles: value
  }
}
function deleteArticle(value):Action {
  return {
    type: ARTICLE_DELETE,
    articles: value
  }
}

export const actions = {
  addArticle,
  editingArticle,
  deleteArticle
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ARTICLE_ADD]: (state:object, action:{articles: object}): object=> action.articles

}


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function articleReducer(state:object = initialState, action:Action):object {
  const handler = ACTION_HANDLERS[action.type]
  console.log(state)


  return handler ? handler(state, action) : state
}
