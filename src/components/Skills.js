import React from 'react'
import { skillItem } from '../data/skillsItem'

const Skills = () => {
  return (
    <section id="skills">
      <div className="title-span">
        <h2>Mes compétences</h2>
        <span className='back-span'>skills</span>
      </div>
      <div className="skills-list">
        {skillItem.map(({ id, cover, title }) => (
          <div key={id} className="skills-item">
            <div className="skills-round">
              <img src={cover} alt={`logo ${title}`} />
            </div>
            <p>{title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
