var SponseredPost = React.createClass({

  render: function () {
    return (
      <div className="sponsed-post">
        <div>
          <a href="http://rainwav.herokuapp.com/">
             <img className="rainwav-logo" src="rainwav-logo.png"/>
         </a>
       </div>
       <h3><a href="http://rainwav.herokuapp.com/">RainWav: Get your ears wet</a></h3>
       <p><a href="http://rainwav.herokuapp.com/">rainwav.herokuapp.com</a></p>

        <div>
          <a href="http://fight-club-app.herokuapp.com">
             <img className="fight-club-logo" src="fightclub-logo.png"/>
         </a>
       </div>
       <h3><a href="http://fight-club-app.herokuapp.com">Fight Club</a></h3>
       <p><a href="http://fight-club-app.herokuapp.com">fight-club-app.herokuapp.com</a></p>

        <div>
          <a href="http://serene-hamlet-4726.herokuapp.com">
             <img className="spamless-logo" src="spamless-logo.png"/>
         </a>
       </div>
       <h3><a href="http://serene-hamlet-4726.herokuapp.com/">Spamless</a></h3>
       <p><a href="http://serene-hamlet-4726.herokuapp.com/">Spamless.com</a></p>



        <div className="fight-club-ad">
           <img src="aa_advertisment.jpg"/>
           <h3>Yap Academy</h3>
           <p>www.yapacademy.io</p>
       </div>
      </div>
    );
  }

});
