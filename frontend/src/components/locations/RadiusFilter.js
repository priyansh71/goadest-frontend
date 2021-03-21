
const RadiusFilter = ({onChange, radius}) => {
    return (
        <div>
            <input type='range' min='1' max='100' value={radius} onChange={onChange}/>
        </div>
    )
}

export default RadiusFilter
