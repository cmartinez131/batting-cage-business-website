
const Blogpost = ({ title, content }) => {
    return (
        <>
            <h2>{title}</h2>
            <p>{content}</p>
        </>
    )
}


const Blog = () => {
    //can have an array of blogposts here. This can be fetched from an API or hardcoded
    
    const blogPosts = [
        { title: 'Intro blog post', content: 'This is the content of blog post 1.' },
        { title: 'Blog post 2', content: 'This is the content of blog post 2.' },
        { title: 'Blog post 3', content: 'This is the content of blog post 3.' },
    ];
    
    return (
        <>
            <h1>This is our Blog</h1>
            {blogPosts.map((post, index) => (
                <div key={index}>
                    <Blogpost key={index} title={post.title} content={post.content} />
                </div>
            ))}

            
        </>
    )
}

export default Blog;

