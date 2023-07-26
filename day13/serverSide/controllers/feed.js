exports.getPosts = (req,res,next) => {
    res.status(200).json({
        posts: [{
            _id: "1",
            title: "First post",
            content: "this is the first post",
            imageUrl: "images/cane.png",
            creator: {
                name: "feyzi"
            },
            createdAt: new Date()
        }]
    });
};

exports.createPost = (req,res,next)=> {
    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({
        message: "post created successfully",
        post: { 
            id: new Date().toISOString(),
            title: title,
            content: content
        }
    });
};