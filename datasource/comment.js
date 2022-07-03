const {DataSource} = require("apollo-datasource");
const Comment = require("./../model/comment.model");

class CommentDataSource extends DataSource {
    initialize(config) {
        this.context = config.context;
    }

    create(postData) {
        return Comment.create(postData);
    }

    async getAllComments(postId) {
        return Comment.find({postId});
    }

    async getComment(id) {
        return Comment.findById(id);
    }

    delete(postID) {
        Comment.findByIdAndDelete(postID)
            .then(() => true)
            .catch(() => false);
    }

    async update(postID, newComment) {
        return Comment.findByIdAndUpdate(postID, {$set: newComment});
    }
}

module.exports = CommentDataSource;