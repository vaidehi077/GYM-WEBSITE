import React from 'react'

function Cards() {
    return (
        <div>
            <div>
                <div className="bg-light bg-gradient rounded form-control text-center" style={{ height: '500px', width: '400px', boxShadow: "0px 0px 10px rgb(180,180,180)", marginLeft: "125px" }}>
                    <img src={s} className="img mt-3 p-5" style={{ heigth: '50px' }} alt="loading" />
                    <h1 className="fs-2 text-body-white text-center">{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default Cards