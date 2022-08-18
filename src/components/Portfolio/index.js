import React from 'react';
import Quiz from '../../assets/photo/codeQuiz.png'
import Schedule from '../../assets/photo/work-schedule.png'
import Weather from '../../assets/photo/weather.png'
import Appt from '../../assets/photo/appt-booker.png'
import Team from '../../assets/photo/team.png'
import '../../index.css'
import Trim from '../../assets/photo/trim.png'

function Portfolio() {
  const QuizLive = <a href="https://vhivestate.github.io/Code-Quiz/"> JavaScript Timed Quiz </a>;
  const ScheduleLive = <a href="https://vhivestate.github.io/Work-Scheduler/"> Work Day Scheduler </a>;
  const WeatherLive = <a href="https://vhivestate.github.io/Weather-Dashboard/"> Weather App </a>;
  const ApptLive = <a href="https://vhivestate.github.io/Appt-Booker/"> Tattoo Appointment Booker </a>;
  const TeamLive = <a href="https://vhivestate.github.io/team-pro-generator/"> Team Profile Generator </a>;
  const TrimLive = <a href="https://trim-down.herokuapp.com//"> Expense Tracker </a>;



  const QuizRepo = <a href="https://github.com/vhivestate/Code-Quiz"> Repository Link </a>;
  const ScheduleRepo = <a href="https://github.com/vhivestate/Work-Scheduler">Repository Link</a>;
  const WeatherRepo = <a href="https://github.com/vhivestate/Weather-Dashboard"> Repository Link </a>;
  const AttpRepo = <a href="https://github.com/vhivestate/Appt-Booker"> Repository Link </a>;
  const TeamRepo = <a href="https://github.com/vhivestate/team-pro-generator"> Repository Link </a>;
  const TrimRepo = <a href="https://vhivestate.github.io/Code-Quiz/"> Repo link </a>;




  return (
    <section>
       <h1 className='proHeader'>Projects:</h1>

      <div id='portfolio'>
        <div>
        <h3>{QuizLive}</h3>
          <img src={Quiz} alt='Quiz screenshot'></img>
          <h5>{QuizRepo}</h5>
      </div>

      <div>
      <h3>{ScheduleLive}</h3>
      <img src={Schedule} alt=''></img>
      <h5>{ScheduleRepo}</h5>

      </div>

      <div>
      <h3>{WeatherLive}</h3>
      <img src={Weather} alt=''></img>
      <h5>{WeatherRepo}</h5>

      </div>

      <div>
      <h3>{ApptLive}</h3>
      <img src={Appt} alt=''></img>
      <h5>{AttpRepo}</h5>

      </div>

      <div>
      <h3>{TeamLive}</h3>
      <img src={Team} alt=''></img>
      <h5>{TeamRepo}</h5>

      </div>

      <div>
      <h3>{TrimLive}</h3>
      <img src={Trim} alt=''></img>
      <h5>{TrimRepo}</h5>

      </div>
      </div>
    </section>
  );
}
export default Portfolio;
