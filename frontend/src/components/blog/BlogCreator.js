import { useState } from 'react'
import { Container, Row, InputGroup, FormControl, Col } from 'react-bootstrap';

const BlogCreator = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const style = {
        padding: '30px',
    }

    const styler = {
        paddingBottom: '15px',
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title: title, content: content };
        console.log(blog);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Container style={style} >
                    <Row>
                        <Col>
                            <input style={styler} type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                        </Col>
                    </Row>
                    <Row>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>BlogText</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as="textarea" aria-label="With textarea" />
                        </InputGroup>
                    </Row>
                    <br />
                    <input type="submit" value='POST' />
                </Container>
            </form >
        </div >
    )
}

export default BlogCreator
