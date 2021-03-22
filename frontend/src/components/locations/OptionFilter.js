const OptionFilter = ({onChange, option}) => {

    return (
        <div>
            <input type='radio' name='options' id='beach' onChange={onChange} checked={option === 'beach'} />
            <input type='radio' name='options' id='heritage' onChange={onChange} checked={option === 'heritage'} />
            <input type='radio' name='options' id='nature' onChange={onChange} checked={option === 'nature'} />
            <input type='radio' name='options' id='all' onChange={onChange} checked={option === 'all'} />
        </div>
    )
}

export default OptionFilter
