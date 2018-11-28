import {
  fromJS
} from 'immutable';
import * as actionTypes from "./actionTypes";

const defaultSate = fromJS({
  topicList: [],
  articleList: []
});

export default (state = defaultSate, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOPIC_LIST:
      return state.set('topicList', action.value);
    case actionTypes.CHANGE_ARTICLE_LIST:
      return state.set('articleList', action.value);
    default:
      return state;
  }

}