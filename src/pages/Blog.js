import React, { useState, useEffect, useMemo } from 'react';
import './Blog.css';

const Blogpost = ({ title, content, date, tags }) => {
    return (
        <div className="blog-post">
            <h2 className="blog-post-title">{title}</h2>
            <div className="blog-post-content">
                {content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <p className="blog-post-date">{date}</p>
            {tags && (
                <div className="blog-post-tags">
                    <p className="blog-tags-label">Tags:</p>
                    {tags.map((tag, index) => (
                        <span key={index} className="blog-post-tag">{tag}</span>
                    ))}
                </div>
            )}
        </div>
    );
};

const Blog = () => {
    // Use useMemo Hook: Wrapped the blogPosts array in the useMemo hook to memoize the array.
    // This prevents it from being re-initialized on every render and keeps the useEffect dependencies stable.
    const blogPosts = useMemo(() => [
        {
            title: 'First Time at the Batting Cages?',
            content: [
                "If you’ve never swung a bat before, don’t worry! Batting cages are for everyone. When you arrive, take a moment to watch others and observe the different pitches. Start with some warm-up exercises to loosen up your muscles. Remember, the goal is to have fun and enjoy yourself. The staff is always there to help if you have any questions.",
                "Whether you're aiming to hit a home run or just looking to have some fun, the batting cages provide a great opportunity to experience the thrill of baseball. Just relax, focus on your swing, and enjoy the moment. Before you know it, you'll be hitting those pitches with confidence."
            ],
            date: 'August 1, 2023',
            tags: ['Beginner', 'How-To', 'Fun']
        },
        {
            title: 'Improve Your Batting with Our Pitching Machines',
            content: [
                "Our top-of-the-line automatic pitching machines are designed to help you improve your batting skills. Practicing with different speeds and styles can build your confidence and enhance your technique. Regular use of our machines can simulate real-game scenarios, giving you an edge on the field.",
                "Take advantage of the variety of pitches our machines offer. From fastballs to curveballs, each session can help you refine your swing and timing. Consistent practice with our machines will not only improve your batting average but also make you a more versatile player."
            ],
            date: 'July 15, 2023',
            tags: ['Training', 'Pitching Machines', 'Technique']
        },
        {
            title: 'Your Guide to Choosing the Right Baseball Gear',
            content: [
                "Choosing the right baseball gear is essential for both performance and comfort. Start by selecting a bat that feels right in your hands. Try out different weights and lengths to find the perfect fit. A good glove should fit snugly, allowing you to catch and field with ease.",
                "Don't overlook the importance of wearing the right shoes. Cleats provide the traction needed for quick movements and stability on the field. Additionally, consider protective gear like helmets and guards to stay safe while playing. The right equipment can significantly enhance your game."
            ],
            date: 'July 12, 2023',
            tags: ['Equipment', 'Guide']
        },
        {
            title: 'Health Benefits of Batting Cage Practice',
            content: [
                "Batting cages offer more than just fun; they provide a great workout too! Swinging a bat and hitting balls can improve your cardiovascular health, build muscle strength, and enhance coordination. It's a full-body workout that keeps you engaged and active.",
                "Regular sessions at the batting cages can also help relieve stress and improve mental well-being. The physical activity combined with the satisfaction of hitting the ball can boost your mood and energy levels. Plus, it's a great way to burn calories while having fun."
            ],
            date: 'July 28, 2023',
            tags: ['Health', 'Workout']
        },
        {
            title: 'Planning a Baseball-Themed Event?',
            content: [
                "Hosting a baseball-themed party at our batting cages is a unique and exciting way to celebrate any occasion. Whether it's a birthday, a team-building event, or a special gathering, our venue offers the perfect setting. Plan your invitations, party games, and even baseball-themed snacks to create an unforgettable experience.",
                "Decorate with baseball memorabilia and set up fun activities like a home run derby or pitching contest. Our staff can assist with setting up and ensuring your event runs smoothly. Your guests will enjoy the unique blend of fun and competition that only a batting cage party can provide."
            ],
            date: 'June 1, 2023',
            tags: ['Party', 'Planning', 'Events']
        }
    ], []);

    const [filter, setFilter] = useState('All');
    const [filteredPosts, setFilteredPosts] = useState([]);
    const mainTags = ['All', 'Beginner', 'Training', 'Equipment', 'Health', 'Events'];

    useEffect(() => {
        if (filter === 'All') {
            setFilteredPosts(blogPosts);
        } else if (filter === 'Date') {
            setFilteredPosts([...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)));
        } else {
            setFilteredPosts(blogPosts.filter(post => post.tags.includes(filter)));
        }
    }, [filter, blogPosts]);

    return (
        <div className="blog-container">
            <h1 className="blog-title">Blog Posts</h1>
            <div className="blog-filters">
                {mainTags.map((tag, index) => (
                    <button key={index} onClick={() => setFilter(tag)}>{tag}</button>
                ))}
            </div>
            {filteredPosts.map((post, index) => (
                <Blogpost key={index} title={post.title} content={post.content} date={post.date} tags={post.tags} />
            ))}
        </div>
    );
};

export default Blog;
