import { useState } from 'react'

const BlogCreator = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title: title, content: content };
        console.log(blog);
        // Send the object 'blog' to backend
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='Title'/>
                
                <input type="submit" value='POST' />
            </form>
            <textarea value={content} onChange={(e) => { setContent(e.target.value)}} rows='20' cols='200' placeholder='Content'>CONTENT</textarea>
        </div>
    )
}

export default BlogCreator
