import React from 'react'

export const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="box">
             <ul className='flex'>
          <li>Conditions d'utilisation</li>
          <li>Politique de confidentialité</li>
          <li>Blog</li>
          <li>FAQ</li>
          <li>Liste de surveillance</li>
          </ul>
          <p>© 2023 STREAMIT. Tous droits réservés.
          Toutes les vidéos et émissions diffusées sur cette plateforme sont des marques déposées de Streamit Inc. et toutes les images et contenus associés sont la propriété de Streamit Inc.
          La duplication et la copie de ce contenu sont strictement interdites.
          Tous les droits sont réservés. 
          </p>
            </div>
            
            <div className="box">
               <h3>Nous suivre</h3>
               <i className='fab fa-facebook-f'></i>
               <i className='fab fa-twitter'></i>
               <i className='fab f-youtube'></i>
               <i className='fab fa-instagram'></i>

               <div className="box">
               <h3>Application Streamit</h3> 

               </div>
            </div>
        </div>
    </footer>
    
    </>
  )
}
