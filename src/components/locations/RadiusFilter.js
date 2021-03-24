
const RadiusFilter = ({onChange, radius}) => {
    return (
        <label>
            Radius:
            <input type='range' min='1' max='100' value={radius} onChange={onChange}/>
        </label>
    )
}

export default RadiusFilter
