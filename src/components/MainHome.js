import React, {useState} from 'react';

function MainHome(){
    return(
        <main className="container-fluid main">
        <div className="container">
          <div>
            <h2>QUI EST TORUS?</h2>
            <p>
              Nous Sommes une plateform qui met en relation des entrepreneurs sociaux qui ont un projet impactant et qui on besoins de conseilles dans un domain.
            </p>
          </div>
          <div>
            <h2>COMMENT ÇA MARCHE?</h2>
            <p>Vous pouvez vous inscrire en tant que mentor ou mentorer puis vous aller etre contacter pasr un de nos administrateur pour passer un entretien afin de connaitre vos motivations puis vous allez pouvoir accer a votre compte.</p>
          </div>
        </div>
        <div className="container-tems">
          <div className="item"> 
            <img src="/assets/images/photo2.jpg" />
            <div>
              <p>Nous Sommes une plateform qui met en relation des entrepreneurs sociaux qui ont un projet impactant et qui on besoins de conseilles dans un domain.</p>
            </div>
          </div>
          <div className="item"> 
            <img src="/assets/images/photo3.jpg" />
            <div>
              <p>Nous Sommes une plateform qui met en relation des entrepreneurs sociaux qui ont un projet impactant et qui on besoins de conseilles dans un domain.</p>
            </div>
          </div>
          <div className="item"> 
            <img src="/assets/images/photo4.jpg" />
            <div>
              <p>Nous Sommes une plateform qui met en relation des entrepreneurs sociaux qui ont un projet impactant et qui on besoins de conseilles dans un domain.</p>
            </div>
          </div>
          <div className="item"> 
            <img src="/assets/images/photo2.jpg" />
            <div>
              <p>Nous Sommes une plateform qui met en relation des entrepreneurs sociaux qui ont un projet impactant et qui on besoins de conseilles dans un domain.</p>
            </div>
          </div>
          <div className="item"> 
            <img src="/assets/images/photo3.jpg" />
            <div>
              <p>Nous Sommes une plateform qui met en relation des entrepreneurs sociaux qui ont un projet impactant et qui on besoins de conseilles dans un domain.</p>
            </div>
          </div>
        </div>
      </main>
    )
}

export default MainHome;