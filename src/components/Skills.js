import React from 'react'
import { skillItem } from '../data/skillsItem'

const Skills = () => {
  return (
    <section id="skills">
      <h2>Mes compétences à votre services</h2>
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
