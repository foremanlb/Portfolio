import React from 'react'
import './Work.css'

export default function Work() {
  return (
    <div id='work-container'>
      <div className='work-desc'>
        <h3>Pokemon Card Database</h3>
        <p>"Pokemon Card Database" is an app that utilizes information from the Pokemon TCG Database to render information regarding pokemon cards.  This information includes the stats of the cards as well as links for purchasing and pricing.</p>
      </div>
      <a href='https://pages.git.generalassemb.ly/craignavarro/PokeCard-Info/' target='_blank' rel='noreferrer noopener' className='work-link'>
        <img className='work-img' src='https://github.com/foremanlb/Portfolio/blob/main/src/assets/Screen%20Shot%202021-05-20%20at%2012.40.09%20PM.png?raw=true' alt='Pokemon cards' />
      </a>
      <a href='https://pages.git.generalassemb.ly/craignavarro/PokeCard-Info/' target='_blank' rel='noreferrer noopener' className='work-link'>
        <img className='work-img' src='https://github.com/foremanlb/Portfolio/blob/main/src/assets/Screen%20Shot%202021-05-20%20at%2012.40.38%20PM.png?raw=true' alt='comic release' />
      </a>
      <div className='work-desc'>
        <h3>Release the Comics!</h3>
        <p>"Release the Comics!" was a proof of concept in creating an Airtable api, and utilizing React to render different information from release date, to links to different publishers.</p>
      </div>
      <div className='work-desc'>
        <h3>Dev it Forward</h3>
        <p>"Dev it Forward" is a concept site to bring together users and tutors from the development world.  Users can view different tutors to find someone with the skills they are looking to learn.  Tutors can create their profile to display their expertises to those looking to learn.</p>
      </div>
      <a href='https://pages.git.generalassemb.ly/craignavarro/PokeCard-Info/' target='_blank' rel='noreferrer noopener' className='work-link'>
        <img className='work-img' src='https://github.com/foremanlb/Portfolio/blob/main/src/assets/Screen%20Shot%202021-05-20%20at%2012.41.24%20PM.png?raw=true' alt='dev it forward' />
      </a>
      <a href='https://pages.git.generalassemb.ly/craignavarro/PokeCard-Info/' target='_blank' rel='noreferrer noopener' className='work-link'>
        <img className='work-img' src='https://github.com/foremanlb/Portfolio/blob/main/src/assets/Screen%20Shot%202021-05-20%20at%2012.42.35%20PM.png?raw=true' alt='camping companions' />
      </a>
      <div className='work-desc'>
        <h3>Camping Companions</h3>
        <p>"Camping Companions" is designed to allow people to interact with each other in order to plan camping trips with new friends.</p>
      </div>
    </div>
  )
}
