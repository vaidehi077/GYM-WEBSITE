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
    </div>
  )
}

export default Service;