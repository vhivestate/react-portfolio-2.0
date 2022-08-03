import React, { useState } from 'react';
import Quiz from '../../assets/photo/codeQuiz.png'
import Schedule from '../../assets/photo/work-schedule.png'
import Weather from '../../assets/photo/weather.png'
import Appt from '../../assets/photo/appt-booker.png'
import Team from '../../assets/photo/team.png'
import '../../index.css'



function Portfolio() {
  const QuizLive = <a href="https://vhivestate.github.io/Code-Quiz/"> Live Link </a>;
  const ScheduleLive = <a href="https://vhivestate.github.io/Work-Scheduler/"> Live Link </a>;
  const WeatherLive = <a href="https://vhivestate.github.io/Weather-Dashboard/"> Live Link </a>;
  const ApptLive = <a href="https://vhivestate.github.io/Appt-Booker/"> Live Link </a>;
  const TeamLive = <a href="https://vhivestate.github.io/team-pro-generator/"> Live Link </a>;

  const QuizRepo = <a href="https://github.com/vhivestate/Code-Quiz"> Repository Link </a>;
  const ScheduleRepo = <a href="https://github.com/vhivestate/Work-Scheduler">Repository Link</a>;
  const WeatherRepo = <a href="https://github.com/vhivestate/Weather-Dashboard"> Repository Link </a>;
  const AttpRepo = <a href="https://github.com/vhivestate/Appt-Booker"> Repository Link </a>;
  const TeamRepo = <a href="https://github.com/vhivestate/team-pro-generator"> Repository Link </a>;



  return (
    <section>
        <h1>My Projects:</h1>

      <div id='portfolio'>
        <div>
        <h3>{QuizLive}</h3>
          <img src={Quiz} alt='Quiz screenshot'></img>
          <h3>{QuizRepo}</h3>
      </div>

      <div>
      <h3>{ScheduleLive}</h3>
      <img src={Schedule} alt=''></img>
      <h3>{ScheduleRepo}</h3>

      </div>

      <div>
      <h3>{WeatherLive}</h3>
      <img src={Weather} alt=''></img>
      <h3>{WeatherRepo}</h3>

      </div>

      <div>
      <h3>{ApptLive}</h3>
      <img src={Appt} alt=''></img>
      <h3>{AttpRepo}</h3>

      </div>

      <div>
      <h3>{TeamLive}</h3>
      <img src={Team} alt=''></img>
      <h3>{TeamRepo}</h3>

      </div>
      </div>
    </section>
  );
}
export default Portfolio;
