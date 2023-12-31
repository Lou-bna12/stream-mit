import React from 'react'
import "./footer.css"

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
               <i className='fab fa-youtube'></i>
               <i className='fab fa-instagram'></i>

               <div className="box">
               <h3>Application Streamit</h3> 
                <div className="img flexSB"></div>
                <img src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png" alt="" />
                <span>App Store</span>
                <img src="https://img.icons8.com/fluency/48/000000/google-play.png" alt=''/>
                <span>Google Play Store</span>
               </div>
            </div>
        </div>
    </footer>   
 </>
)
}
