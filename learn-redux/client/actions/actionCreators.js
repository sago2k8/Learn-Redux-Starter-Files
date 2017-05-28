// increment likes
export function increment(index){
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add_comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}
//remove_comment

export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  }
}