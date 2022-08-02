import React from 'react';
import Quiz from '../../assets/photo/codeQuiz.png'
import Schedule from '../../assets/photo/work-schedule.png'
import Weather from '../../assets/photo/weather.png'
import Appt from '../../assets/photo/appt-booker.png'
import Team from '../../assets/photo/team.png'
import '../../index.css'


function Portfolio() {

  const QuizLink = <a href="https://github.com/vhivestate/Code-Quiz"> link </a>;


  return (
    <section>
      <h1>My Projects:</h1>
      <div>
      <h1>{QuizLink}</h1>
      <img src={Quiz} alt='Quiz screenshot'></img>
      </div>

      <div>
      <h1>{QuizLink}</h1>
      <img src={Schedule} alt=''></img>
      </div>

      <div>
      <h1>{QuizLink}</h1>
      <img src={Weather} alt=''></img>
      </div>

      <div>
      <h1>{QuizLink}</h1>
      <img src={Appt} alt=''></img>
      </div>

      <div>
      <h1>{QuizLink}</h1>
      <img src={Team} alt=''></img>
      </div>

    </section>
  );
}
export default Portfolio;
