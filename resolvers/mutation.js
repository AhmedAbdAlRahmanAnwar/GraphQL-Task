const Mutation = {
    createPost(_,data,{dataSources}){
        return dataSources.post.create(data)
    },
    deletePost(_,{id},{dataSources}){
        return dataSources.post.delete(id);
    },
    updatePost(_,{id,content},{dataSources}){
        return dataSources.post.update(id,content);
    },
    addComment(_,commentContent,{dataSources}){
        return dataSources.comment.create(commentContent)
    },
    deleteComment(_,{id},{dataSources}){
        return dataSources.comment.delete(id);
    },
    updateComment(_,{id,content},{dataSources}){
        return dataSources.comment.update(id,content);
    }
}

module.exports = Mutation;