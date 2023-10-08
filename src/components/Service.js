import React from 'react'

import { serviceCard } from '../data/serviceCard'

const Service = () => {
  return (
    <section id="services">
      <div className='title-span'>
        <h2>Mes Services</h2>
        <span className='back-span'>Service</span>
      </div>
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
