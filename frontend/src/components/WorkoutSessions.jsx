import React from 'react'

function WorkoutSessions() {
  return (
   <section className='workout_session'> 
     <div className="wrapper">
        <h1 className='WorkOut-Session-heading'>TOP WORKOUT SESSION</h1>
        <p><ul>
         <li> <b>Personalized Attention:</b> Our trainers provide personalized modifications and attention to ensure you get the most out of every workout.</li><br />
         <li><b>Progress Tracking:</b> Track your progress with regular assessments to see how far you've come and set new goals.</li><br />
         <li><b>Nutritional Guidance:</b> Receive expert advice on nutrition to complement your workout regime and accelerate your results.</li><br />
        </ul></p>
        <img src="/img5.jpg" alt="workout" className='WorkoutSessionImg'/>
     </div>
     <div className="wrapper">
        <h1>FEATURED BOOTCAMP</h1>
     <div className="bootcamps">
        <div> <h4>High-Intensity Training:</h4>
        <p>Engage in high-energy workouts that burn calories and build strength.</p>
        </div>
        <div> <h4>Expert Trainers: </h4>
        <p>Benefit from the guidance of certified trainers who tailor the workouts to your fitness level and goals.</p>
        </div>
        <div> <h4>Dynamic Routines:</h4>
        <p>Experience a variety of exercises that keep your workouts fresh and exciting, from strength training to cardio bursts.</p>
        </div>
        <div> <h4>Community Support: </h4>
        <p>Join a supportive group of fitness enthusiasts who motivate and inspire each other.</p>
        </div>
        <div> <h4>State-of-the-Art Equipment:</h4>
        <p>Utilize the latest fitness equipment designed to maximize your workout efficiency.</p>
        </div>
     </div>
     </div>
   </section>
  )
}

export default WorkoutSessions
