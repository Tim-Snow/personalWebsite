import React from 'react'

function AboutMe() {
  return (
    <div style={styles.container}>
      <h2>About me</h2>
      <h4>
        React Native developer for a greenfield corporate mobile banking
        application at Santander, mostly working with Typescript on the front
        end however I can also be found working with Spring boot/Express REST
        APIs and configuring pipelines.
      </h4>
      <p>
        In my free time I am usually working on personal projects, playing with
        new technologies, creating little games for fun, gaming, discovering new
        music, playing guitar and racing quadcopters! (I use Arch BTW)
      </p>
      <p>
        Some other development languages, libraries, frameworks, and
        technologies I have experience with in no particular order:
      </p>

      <div style={styles.skillsContainer}>
        <ul>
          <li>Native Android</li>
          <li>Java</li>
          <li>Kotlin</li>
          <li>ReactJS</li>
          <li>Redux</li>
          <li>Angular</li>
          <li>Node</li>
          <li>Hadoop, HiveQL, Impala, UDFs</li>
          <li>Spark, Scala</li>
        </ul>
        <ul>
          <li>Linux, MacOS, Windows</li>
          <li>Encryption</li>
          <li>Git</li>
          <li>Bash</li>
          <li>Fastlane</li>
          <li>TDD, BDD</li>
          <li>Continuous Integration</li>
          <li>Scrum, Agile, Waterfall</li>
          <li>C++</li>
        </ul>
      </div>
    </div>
  )
}

const styles = {
  container: {
    borderRadius: 4,
    padding: 15,
    background: '#DFDFDF',
    color: '#333',
    maxWidth: 900,
    minHeight: 600,
    textAlign: 'justify',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'start',
    margin: 10,
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'row wrap',
    textAlign: 'left',
  },
}

export default AboutMe
