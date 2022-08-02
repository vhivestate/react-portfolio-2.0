import React from 'react';
import Quiz from '../../assets/photo/codeQuiz.png'
import Schedule from '../../assets/photo/work-schedule.png'
import Weather from '../../assets/photo/weather.png'
import Appt from '../../assets/photo/appt-booker.png'
import Team from '../../assets/photo/team.png'


function Portfolio() {

  return (
    <section>
      <h1>My Projects:</h1>
      <img src={Quiz} alt=''></img>
      <img src={Schedule} alt=''></img>
      <img src={Weather} alt=''></img>
      <img src={Appt} alt=''></img>
      <img src={Team} alt=''></img>


    </section>
  );
}
export default Portfolio;
