import a from '../../images/a.jpg';
import b from '../../images/b.jpg';
import c from '../../images/c.jpg';
import d from '../../images/d.jpg';
import e from '../../images/e.jpg';
const Bootstrap = () => {
  return (
  <div className="body">  
    <div className="main">
      <div className="master">
        <input type="radio" name="radio-btn" id="r1"/>
        <input type="radio" name="radio-btn" id="r2"/>
        <input type="radio" name="radio-btn" id="r3"/>
        <input type="radio" name="radio-btn" id="r4"/>
        <input type="radio" name="radio-btn" id="r5"/>

        <div className="slide first"><img src={e} alt="Image1"/></div>
        <div className="slide"><img src={b} alt="Image2"/></div>
        <div className="slide"><img src={c} alt="Image3"/></div>
        <div className="slide"><img src={d} alt="Image4"/></div>
        <div className="slide"><img src={a} alt="Image5"/></div>

          <div className="navigation-auto">
            <div className="auto-btn-1"></div>
            <div className="auto-btn-2"></div>
            <div className="auto-btn-3"></div>
            <div className="auto-btn-4"></div>
            <div className="auto-btn-5"></div>            
          </div>
      </div>  

        <div className="navigation-manual">
          <label htmlFor="r1" className="manual-btn"></label>
          <label htmlFor="r2" className="manual-btn"></label>
          <label htmlFor="r3" className="manual-btn"></label>
          <label htmlFor="r4" className="manual-btn"></label>
          <label htmlFor="r5" className="manual-btn"></label>        
        </div>
    </div>
  </div>
      )
}
export default Bootstrap 