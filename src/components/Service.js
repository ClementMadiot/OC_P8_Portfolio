import React from 'react';
import Frontend from "../assets/images/front-end.jpg";
import Backend from "../assets/images/back-end.jpg";
import Optimiser from "../assets/images/optimiser.jpg";

const Service = () => {
  return (
    <section id="services">
			<h2>Services</h2>

			<section class="services-card">
			<article class="services-article">
				<div class="article-wrapper">
					<figure>
						<img src={Frontend} alt="front-end" />
					</figure>
					<div class="services-description">
						<h3>Front-end</h3>
						<p>
							Intégration des éléments visuels d'un site ; création d'une interface lisible et facilement navigable.
						</p>
					</div>
				</div>
			</article>

			<article class="services-article">
				<div class="article-wrapper">
					<figure>
						<img src={Backend} alt="back-end" />
					</figure>
					<div class="services-description">
						<h3>Back-end</h3>
							<p>Conception d'API RESTful à l'aide de Node.js, de son framework Express, et de la base de données MongoDB.</p>
					</div>
				</div>
			</article>

			<article class="services-article">
				<div class="article-wrapper">
					<figure>
						<img src={Optimiser} alt="optimiser" />
					</figure>
					<div class="services-description">
						<h3>Débuggez et optimisez</h3>
							<p>Optimisez la performance, le SEO de votre site web et éliminez les problèmes gênants.</p>
					</div>
				</div>
			</article>
		</section>
		</section>
  );
};

export default Service;