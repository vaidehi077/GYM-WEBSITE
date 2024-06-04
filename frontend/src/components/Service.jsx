import { useState } from "react";
import { FaStar } from 'react-icons/fa';
import { CARD } from "./config";
import Cards from "./Cards"

function Service() {
    const[rating,setRating]=useState(null);
    const[hover,setHover]=useState(null);

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
                    }</div><br /><br /><br />
            </div>
            <div className='bg-dark bg-gradient'>
                <h1 className='text-light text-center mt-5'>REVIEWS AND FEEDBACKS</h1>
                <div className='container d-flex mt-5 bg-light' style={{ height: '300px' }}>
                <p>Your Rating is {rating}</p>
                </div>
                <div className='container d-flex mt-5 bg-primary bg-gradient'>
                    <img src="review.jpg" alt="loading" className="w-50" />
                    <div className='mt-5'>
                        <label className="fs-4 text-light mx-3 ">Name</label><br />
                        <input
                            type="text"
                            className="fs-4 border-bottom  border-3 mx-3 px-5 text-light"
                            style={{ background: "transparent", border: "none" }}
                            required
                        /><br /><br />
                        <label className="fs-4 text-light mx-3" >Review</label><br />
                        <input
                            type="text"
                            className="px-5 mx-3 py-3"
                            required
                        /><br />   
                        <div className="mx-3 mt-3 mb-5">
                        <label  className="fs-4 text-light mx-1" >Rating  </label><br/>
                            {[...Array(5)].map((star,index) =>{
                                const currentRating = index + 1;
                                return (
                                   <label>
                                        <input 
                                        type="radio"
                                        name="rating"
                                        value={currentRating}
                                        onClick={()=> setRating(currentRating)}
                                        style={{display:"none"}}/>
                                        <FaStar style={{cursor:"pointer"}}size={30}
                                        color={currentRating <=(hover || rating)?"#ffc107":"#e4e5e9"}
                                        onMouseEnter={()=> setHover(currentRating)}
                                        onMouseLeave={()=> setHover(null)}/>
                                  </label>
                                )
                            })}
                           
                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default Service;