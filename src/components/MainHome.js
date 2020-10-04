import React, {useState} from 'react';

import Presentation from './Presentation'
import Temoignage from './Temoignage'
function MainHome(){
    return(
      <main className="container-fluid main">
        <Presentation />
        <div className="container-tems">
          <Temoignage src="assets/images/photo2.jpg" personne="Adrian 44 ans" job="porteur de projet" role="mentorer" videoId="QApa8yxjZqQ"/>
          <Temoignage src="/assets/images/photo3.jpg" personne="Astride 29 ans" job="Developpeuse web" role="mentor" videoId="eqMj9DTQcAQ" />
          <Temoignage src="/assets/images/photo4.jpg" personne="Mathieu 33 ans" job="cuisinier" role="mentorer" videoId="uLHqpjW3aDs" />
          <Temoignage src="/assets/images/photo3.jpg" personne="Astride 29 ans"  job="Developpeuse web" role="mentor" videoId="d-JBBNg8YKs" />
          <Temoignage src="/assets/images/photo4.jpg" personne="Mathieu 33 ans"  job="cuisinier" role="mentorer" videoId="n_2tZN09iJQ" />
        </div>
      </main>
    )
}

export default MainHome;