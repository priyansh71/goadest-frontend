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
            <center>
                <form onSubmit={handleSubmit}>
                    <input id="title" type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='Blog Title' />

                    <input id="post" type="submit" value='POST' />
                    <br />
                    <br />
                    <textarea value={content} onChange={(e) => { setContent(e.target.value) }} rows='20' cols='200' placeholder='Blog Content'>CONTENT</textarea>
                </form>
            </center>
        </div>
    )
}

export default BlogCreator
