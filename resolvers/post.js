const Post = {
    comments(parent,args,{dataSources}){
        return dataSources.comment.getAllComments(parent["_id"])
    }
}

module.exports = Post