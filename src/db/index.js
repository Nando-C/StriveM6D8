import sequelize from "./models/index.js"
import BlogPost from "./models/BlogPostModel.js"
import Author from "./models/AuthorModel.js"

Author.hasMany(BlogPost)
BlogPost.belongsTo(Author)

export { sequelize, Author, BlogPost }