import { useRouteMatch } from 'react-router-dom';

const Search = ({value, onChange}) => {


    const { url } = useRouteMatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting: ${value}${url}`)
    }

    if (url === '/') {
        return null;
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={value} onChange={onChange} />
            <input id="button" type='submit' value='Submit' />
        </form>
    )

}

export default Search;