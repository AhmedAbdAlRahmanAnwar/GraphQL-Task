const {DataSource} = require("apollo-datasource");
const Post = require("./../model/post.model");

class PostDataSource extends DataSource {
    initialize(config) {
        this.context = config.context;
    }

    create(postData) {
        return Post.create(postData);
    }

    async getAllPosts() {
        return Post.find();
    }

    async getPost(id) {
        return Post.findById(id);
    }

    delete(postID) {
        Post.findByIdAndDelete(postID)
            .then(() => true)
            .catch(() => false);
    }

    async update(postID, newPost) {
        return  Post.findByIdAndUpdate(postID, {$set: newPost});
    }
}

module.exports = PostDataSource;