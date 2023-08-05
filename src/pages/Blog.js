import React, {useState, useEffect } from 'react';
const Blogpost = ({ title, content, date, tags }) => {
    return (
        <div className="blogpost">
            <h2 className="blogpost-title">{title}</h2>
            <p className="blogpost-content">{content}</p>
            <p className="blogpost-date">{date}</p>
            {tags && 
            <div className="blogpost-tags">
                <p className="tags-label">Tags:</p>
                {tags.map((tag, index) => (
                    <span key={index} className="blogpost-tag">{tag}</span>
                ))}
            </div>
            }
        </div>
    )
}


const Blog = () => {
    //can have an array of blogposts here. This can be fetched from an API or hardcoded
    
    const blogPosts = [
        {
            title: 'Step Up to the Plate: Your First Time at the Batting Cages',
            content: 'Never swung a bat before? No problem! Batting cages are not only for the pros. They are a great place to have fun and relieve stress, no experience required. This blog post will guide you through what to expect on your first visit, some basic batting tips, and how to make the most out of your time in the cage. You will be hitting home runs in no time!',
            date: 'August 1, 2023',
            tags: ['beginner', 'how-to', 'fun']
        },
        {
            title: 'Mastering Batting Techniques with Our Automatic Pitching Machines',
            content: 'Our state-of-the-art automatic pitching machines are not just a fun way to pass the time – they are a legitimate tool to help you improve your batting technique. Learn about how you can use our tech to enhance your swing, increase your precision, and become a more formidable player.',
            date: 'July 15, 2023',
            tags: ['Training', 'Pitching Machines', 'Technique']
        },
        {
            title: 'Choosing the Right Baseball Equipment: Your Ultimate Guide',
            content: 'In baseball, the right equipment can make all the difference. From selecting the perfect bat to fitting your glove like a second skin, this blog post will guide you through the important considerations and help you make informed decisions.',
            date: 'July 12, 2023',
            tags: ['Equipment', 'Guide']
        },
        {
            title: 'Plan the Perfect Baseball-Themed Party at Our Batting Cages',
            content: 'Looking for a unique, fun-filled party idea? Why not throw a baseball-themed party right here at our batting cages? This blog post will guide you through the planning process, from invitations to party games to food ideas.',
            date: 'June 1, 2023',
            tags: ['Party', 'Planning']
        },
        {
            title: 'Discover the Health Benefits of Batting Cage Practice',
            content: 'Did you know that a session at the batting cages can be more than just fun? It’s also a great workout! Learn more about the physical benefits of regular batting practice in this blog post.',
            date: 'July 28, 2023',
            tags: ['Health', 'Workout']
        },
        {
            title: 'A Parent’s Guide to Batting Cages: All You Need to Know',
            content: 'Thinking of bringing your kids to the batting cages? Here’s your ultimate guide. We’ll walk you through everything you need to know, from safety measures to potential benefits for your little ones.',
            date: 'July 7, 2023',
            tags: ['Parents', 'Guide', 'Kids']
        },
        {
            title: 'A Day at the Batting Cages: What to Bring and How to Prepare',
            content: 'First time planning a trip to the batting cages or need a refresher? We’ve got you covered. From what to wear to what to bring, this guide will ensure you’re well-prepared for a day of swings and hits.',
            date: 'August 7, 2023',
            tags: ['Preparation', 'Batting Cages', 'Guide']
        },
        {
            title: 'Take Your Team to the Next Level: Group Bookings at Our Batting Cages',
            content: 'Looking for a new, exciting way to bond with your team and improve your performance? Find out how booking a group session at our batting cages can foster teamwork, boost morale, and elevate your game.',
            date: 'August 21, 2023',
            tags: ['Teams', 'Booking', 'Performance']
        },
        {
            title: 'The History of Baseball: From Pastime to National Phenomenon',
            content: 'Journey with us as we explore the rich history of baseball. From its humble beginnings to its evolution into a nationally beloved sport, this post will delve into the milestones that have shaped the game we know today.',
            date: 'July 17, 2023',
            tags: ['History', 'Baseball']
        },
        {
            title: 'Understanding Baseball: The Basic Rules and Positions',
            content: 'Whether you’re completely new to the sport or just need a quick refresher, this blog post covers the basic rules of baseball and the various positions on the field. Get to know the game and elevate your appreciation for the sport.',
            date: 'June 22 , 2023',
            tags: ['Rules', 'Positions', 'Basics', 'Baseball']
        },
        {
            title: 'The Science of Baseball: Physics at the Plate',
            content: 'Baseball is more than just a game - it’s a showcase of physics in action. From the curve of a pitch to the trajectory of a hit, we’ll break down how the principles of physics come into play on the baseball field.',
            date: 'July 2, 2023',
            tags: ['Science', 'Baseball']
        },
        {
            title: 'Baseball in Pop Culture: Movies, Music, and More',
            content: 'Baseball has made its mark not only on the sports field, but in movies, music, and other facets of pop culture. In this post, we celebrate some of the most iconic representations of baseball in popular culture.',
            date: 'June 7, 2023',
            tags: ['Pop Culture', 'Movies', 'Music']
        },
        {
            title: 'Great Moments in Baseball History: Highlights and Turning Points',
            content: 'Join us as we relive some of the greatest moments in baseball history. From legendary games to outstanding individual performances, these highlights have left an indelible mark on the sport and continue to inspire fans worldwide.',
            date: 'May 15, 2023',
            tags: ['History', 'Baseball']
        },
    ];

    const [filter, setFilter] = useState('all');
    const [filteredPosts, setFilteredPosts] = useState([]);
    const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

    useEffect(() => {
        if (filter === 'all') {
            setFilteredPosts(blogPosts);
        } else if (filter === 'date') {
            setFilteredPosts([...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)));
        } else {
            setFilteredPosts(blogPosts.filter(post => post.tags.includes(filter)));
        }
    }, [filter, blogPosts]);

    return (
        <div className="blog">
            <h1 className="blog-title">Blog Posts</h1>
            <div className="blog-filters">
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('date')}>Sort by Date</button>
                {allTags.map((tag, index) => (
                    <button key={index} onClick={() => setFilter(tag)}>{tag}</button>
                ))}
            </div>
            {filteredPosts.map((post, index) => (
                <Blogpost key={index} title={post.title} content={post.content} date={post.date} tags={post.tags} />
            ))}
        </div>
    )
}

export default Blog;

