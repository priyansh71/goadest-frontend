const Map = () => {
    return (
        <div>
            <h2>Maps Page</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3846.729603898282!2d73.87597291479901!3d15.39112358930294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1616137666477!5m2!1sen!2sin"
                    style = {
                        {width: "600"}, 
                        {height: "450"}, 
                        {style: "border:0;"}, 
                        {allowfullscreen: ""},
                        {loading: "lazy"}
                    }
            >

            </iframe>
        </div>
        
    )
}

export default Map
