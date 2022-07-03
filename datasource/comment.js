const {DataSource} = require("apollo-datasource");
const Comment = require("./../model/comment.model");

class CommentDataSource extends DataSource {
    initialize(config) {
        this.context = config.context;
    }

    create(commentContent) {
        return Comment.create(commentContent);
    }

    async getAllComments(postId) {
        return Comment.find({postId});
    }

    async getComment(id) {
        return Comment.findById(id);
    }

    delete(commentId) {
        Comment.findByIdAndDelete(commentId)
            .then(() => true)
            .catch(() => false);
    }

    async update(commentID, newComment) {
        return Comment.findByIdAndUpdate(commentID, {$set: newComment});
    }
}

module.exports = CommentDataSource;