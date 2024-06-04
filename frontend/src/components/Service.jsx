import React from 'react'
import { CARD } from "./config";
import Cards from "./Cards"
function Service() {
    return (
        <div>
            <div className='bg-black bg-gradient'>
                <h1 className='text-light text-center mt-5'>OUR SERVICES</h1>
                <div className="d-flex flex-wrap ms-5">
                    {
                        CARD.map((cardObj) => {

                            const { s, title } = cardObj;
                            console.log(cardObj);
                            return <Cards s={s} title={title} />
                        })
                    }</div><br/><br/><br/>
            </div>
            <div className='bg-primary bg-gradient'>
                <h1 className='text-light text-center mt-5'>REVIEWS AND FEEDBACKS</h1>
                <div className='container d-flex mt-5 bg-light' style={{ height: '300px'}}></div>
            </div>
        </div>

    )
}

export default Service;