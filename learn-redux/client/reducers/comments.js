//1. the actions
//2. copy of current state
 function postComments(state=[], action) {
   switch(action.type){
   case 'ADD_COMMENT':
    //return the new state with the comment
    return [...state, {
      user: action.author,
      text: action.comment
    }];
    case 'REMOVE_COMMENT':
      //we need to return the new state without the deleted comment
      return [
        //from the start to the one want to delete
        ...state.slice(0,action.i),
        //after the deleted one, to the end
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
   }
 }

 function comments(state=[], action) {
  if( typeof action.postId !== 'undefined'){
    return {
      //take a current state
      ...state,
      //overview this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
   return state;
 }

 export default comments;