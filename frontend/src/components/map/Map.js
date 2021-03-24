const Map = ({latitude, longitude}) => {
    
    return (
        <div>
            <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" title='title'
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20BITS%20goa+(BITS)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
            </iframe>
            <a href="https://maps-website.com/">maps-website.com</a>
            <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=ac2972eee374f315ac465917875d0c2b242d4862'></script>
        </div>
        
    )
}

export default Map
