import axios from 'axios';
import { useState } from 'react'
import { useHistory } from 'react-router';

const BlogCreator = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, author, content };

        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_GOADEST_BACKEND}/post`,
            headers: {
                "Content-Type": "application/json"
            },
            data: blog
        }).then(() => {
            setTitle('');
            setContent('');
            setAuthor('');
            history.push('/blogs')
        })
    }

    return (
        <div>
            <center>
                <form onSubmit={handleSubmit}>
                    <input id="title" type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='Blog Title' />

                    <input type="text" value={author} onChange={(e) => { setAuthor(e.target.value) }} />

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
