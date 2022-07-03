const Query = {
    posts(_,__,{dataSources}){
        return dataSources.post.getAllPosts()
    },
    comments(_,{postId},{dataSources}){
        return dataSources.comment.getAllComments(postId);
    },
    post(_,{id},{dataSources}){
        return dataSources.post.getPost(id);
    },
    comment(_,{commentId},{dataSources}){
        return dataSources.comment.getComment(commentId);
    }
}

module.exports = Query;