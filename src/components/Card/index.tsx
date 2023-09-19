import img from "../../img/images.png";

import { useState } from "react";

const Hero = () => {
    const [value , setValue] = useState('')
    const [value1 , setValue1] = useState('')
    const [value2 , setValue2] = useState('')
    const [propusk , setPropusk] = useState(false)
    function getValue(){
        setValue('')
        setValue1('')
        setValue2('')
    }
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero--text">
            <h1 style={{ paddingTop: "80px" }}>Checkout</h1>
            <h2>€ 300,00</h2>
            <div className="hero--text__df">
              <p>Saved Cards</p>
              <h3>
                <span>+</span> Add New
              </h3>
            </div>
            <div className="hero--text__block">
              <img src={img} alt="" />
              <h1>5142 - 8164 - 6526 - 2563</h1>
              <div>
                <p>Name</p>
                <p>Valid Till</p>
              </div>
              <div>
                <h4>{"jenner anne".toUpperCase()}</h4>
                <h4>05/34</h4>
              </div>
            </div>
            <div className="hero--text__block1">
              <img src={img} alt="" />
              <h1>{propusk ? value1.split(' ').join(' - ') : ''}</h1>
              <div>
                <p>{propusk ? value.length !== 0 ? 'Name': '' : ''}</p>
                <p>{propusk ? value2.length !== 0 ? 'Valid Till': '' : ''}</p>
              </div>
              <div>
                <h4>{propusk ? value : ''}</h4>
                <h4>{propusk ? value2 : ''}</h4>
              </div>
            </div>
            <button>{"Proceed".toUpperCase()}</button>
          </div>
          <div className="hero--text1">
            <h1 style={{ paddingTop: "80px" }}>Add new card</h1>
            <div className="hero--text1__block">
              <h3 style={{marginTop:'35px'}}>Enter details</h3>
              <div style={{margin:'0 0 0 15px'}}>
              <div>
                <p>Name</p>
                <input value={value} onChange={(e) => setValue(e.target.value)} type="text" />
              </div>
              <div>
                <p>Card number</p>
                <input value={value1} onChange={(e) => setValue1(e.target.value)} type="text" />
              </div>
              <div>
                <p>Expiry date</p>
                <input value={value2} onChange={(e) => setValue2(e.target.value)} type="text" />
              </div>
              <div>
                <p>Cvv</p>
                <input type="text" />
              </div>
              </div>
              <h3 style={{}}>Enter details</h3>
            </div>
            <button onClick={() => {
                setPropusk(true)
                // getValue()
            }}>{"Proceed".toUpperCase()}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


{/* <div>
  <p>Name</p>
  <input
    value={value}
    onChange={(e) => setValue(e.target.value)}
    type="text"
    maxLength={30} 
  />
</div>
<div>
  <p>Card number</p>
  <input
    value={value1}
    onChange={(e) => setValue1(e.target.value)}
    type="text"
    maxLength={16} 
  />
</div>
<div>
  <p>Expiry date</p>
  <input
    value={value2}
    onChange={(e) => setValue2(e.target.value)}
    type="text"
    maxLength={5} 
  />
</div> */}
