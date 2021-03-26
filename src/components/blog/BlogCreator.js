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
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                <input type="text" value={author} onChange={(e) => { setAuthor(e.target.value) }} />
                <input type="text" value={content} onChange={(e) => { setContent(e.target.value) }} />
                <input type="submit" value='POST' />
            </form>
        </div>
    )
}

export default BlogCreator
