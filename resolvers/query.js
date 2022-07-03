const Query = {
    posts(_,__,{dataSources}){
        return dataSources.post.getAllPosts()
    },
    comments(_,{id},{dataSources}){
        return dataSources.comment.getAllComments(id);
    },
    post(_,{id},{dataSources}){
        return dataSources.post.getPost(id);
    },
    comment(_,{id},{dataSources}){
        return dataSources.comment.getComment(id);
    }
}

module.exports = Query;