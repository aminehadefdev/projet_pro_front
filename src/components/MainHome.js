import React, {useState} from 'react';
//style={{backgroundImage: `url(/assets/images/BP.png)`}}
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
            <div>
              <img className="img-btn" src="/assets/images/BP.png" />
              <img className="img" src="/assets/images/photo2.jpg" />
            </div>
            <div>
              <p>Astride 29 ans</p>
              <p>Developpeuse web</p>
              <p>Inscrite en tant que mentor</p>
            </div>
          </div>
          <div className="item"> 
            <img className="img-btn" src="/assets/images/BP.png" />
            <img className="img" src="/assets/images/photo3.jpg" />
            <div>
              <p>Mathieu 45 ans</p>
              <p>Porteur de projet</p>
              <p>Inscrit en tant que mentorer</p>
            </div>
          </div>
          <div className="item"> 
            <img className="img-btn" src="/assets/images/BP.png" />
            <img className="img" src="/assets/images/photo4.jpg" />
            <div>
              <p>Adrian 33 ans</p>
              <p>Cuisinier</p>
              <p>Inscrit en tant que mentor</p>
            </div>
          </div>
          <div className="item">
            <img className="img-btn" src="/assets/images/BP.png" />
            <img className="img" src="/assets/images/photo3.jpg" />
            <div>
              <p>Mathieu 45 ans</p>
              <p>Porteur de projet</p>
              <p>Inscrit en tant que mentorer</p>
            </div>
          </div>
          <div className="item"> 
            <img className="img-btn" src="/assets/images/BP.png" />
            <img className="img" src="/assets/images/photo4.jpg" />
            <div>
              <p>Adrian 33 ans</p>
              <p>Cuisinier</p>
              <p>Inscrit en tant que mentor</p>
            </div>
          </div>
        </div>
      </main>
    )
}

export default MainHome;