import {useState} from 'react'

const BlogCreator = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title: title, content: content};
        console.log(blog);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                <input type="text" value={content} onChange={(e) => {setContent(e.target.value)}}/>
                <input type="submit" value='POST'/>
            </form>
        </div>
    )
}

export default BlogCreator
