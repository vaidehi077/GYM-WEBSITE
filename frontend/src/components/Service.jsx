import React from 'react'

function Service() {
  return (
    <div>
        <h1 className='text-light text-center text-decoration-underline'>Our Services</h1>
      <div className="d-flex mt-5">
        {
          CARD.map((cardObj) => {

            const { s, title } = cardObj;
            console.log(cardObj);
            return <Cards s={s} title={title}
            />
          })
        }</div>
        <div className="d-flex mt-5">
        {
          CARD2.map((cardObj) => {
            const { s, title } = cardObj;
            return <Cards s={s} title={title}
            />
          })
        }
      </div>
      <h1 className='text-light text-center text-decoration-underline mt-5'>REVIEWS AND FEEDBACKS</h1>
      <div className='container d-flex mt-5 bg-light'style={{height:'300px',width:'200%'}}>
 
      </div>
    </div>
  )
}

export default Service;