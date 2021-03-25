const OptionFilter = ({ onChange, option }) => {

    return (
        <div>
            <input type='radio' name='options' id='beach' value='beach' onChange={onChange} checked={option === 'beach'} />
            <label htmlFor="beach">Beach</label>
            <input type='radio' name='options' id='heritage' value='heritage' onChange={onChange} checked={option === 'heritage'} />
            <label htmlFor="heritage">Heritage</label>
            <input type='radio' name='options' id='nature' value='nature' onChange={onChange} checked={option === 'nature'} />
            <label htmlFor="nature">Nature</label>
            <input type='radio' name='options' id='all' value='all' onChange={onChange} checked={option === 'all'} />
            <label htmlFor="all">All</label>
        </div>
    )
}

export default OptionFilter
