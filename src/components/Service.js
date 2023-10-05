import React from 'react'

import { serviceCard } from '../data/serviceCard'

const Service = () => {
  return (
    <section id="services">
      <h2>Services</h2>
      <div className="allServices">
        {serviceCard.map(({ id, logo, title, description }) => (
          <article key={id} className="serviceCard">
            <aside>
              <div className="icon">
                <i className={logo}></i>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </aside>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Service
