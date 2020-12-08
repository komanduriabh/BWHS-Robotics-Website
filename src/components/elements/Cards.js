import React from 'react'
import '../../assets/css/Cards.css'
import GD from '../../assets/images/gd.png'
import ND from '../../assets/images/nd.png'
import NN from '../../assets/images/nn.png'
import WOW from '../../assets/images/wow.png'
import $ from 'jquery'
import { isMobile } from 'react-device-detect';

function addition(team){
  if(isMobile){
    return (
      ""
    )
  }
  else {
    if(team === 1){
    return (
      "They have made it to State twice, and qualified for Worlds with a Design award during the 2018-2019 VEX Robotics season. They've received a second Design award, and one Excellence award. Gold Dusk has exponentially improved since their inception, and have become another pillar of the club."
    )
    }
    else if(team === 2){
      return (
        "Blue Dawn hopes to inspire and ignite the wonder of Robotics through all members who join the club, and leave a legacy for them to reach for."
      )
    }
    else if (team === 3){
      return (
        "The team welcomes, with open arms, any girl with an interest in Robotics, and is eager to expand their membership as more girls find a foothold and place in STEM clubs and courses."
        )
    }
    else if(team === 4){
      return (
        "They have since accrued seven permanent members on their team, with more to come from each passing school year."
      )
    }
  }
}
class Cards extends React.Component {

  constructor(props) {
    super(props);
  }


  componentDidMount() {
    $(document).ready(function () {
      $(".md-content").append("<div></div>");
      var mailAddress = new Array("Gold Dusk", "New Dawn", "Women of West", "Navy Knights");
      var phoneNumber = new Array("Ani T.", "Tristan H. ", "Nicole C.", "Caleb C.");
      var webSite = new Array("Ra", "Odin", "Ela", "Arthur");
      var des = new Array("Gold Dusk was one of the first two teams created when the Bentonville West High School Robotics team was formed. They have five permanent members of their team, with hopes of increasing those numbers as more people show interest in the field of Robotics. " + addition(1),
       "Blue Dawn was one of the first two teams created upon the induction of the Bentonville West High School Robotics Club. They are considered the veteran team, as they hold the most experience among the four teams. They have seven permanent members in their roster." + addition(2),
        "Women of West was formed during the 2017-2018 VEX Robotics season. They have seven permanent members of the team, all of whom are women. The team made it to State their first year, as Tournament Champion, and earned a Judges award in the 2018-2019 season." + addition(3),
         "Navy Knights, formerly known as B-WEST, is the fourth team in the Bentonville West High School Robotics Club program. This is their second operating year in the club, having been formed earlier in 2018." + addition(4))
      var currentPerson, personAddress, personPhoneNumber, personWebSite, description;
      $('#amazingTeam  .ch-info-back a').on("click", function () {
        $('.md-overlay').addClass('md-overlay-show');
        $('.md-modal').addClass('md-show');
        $('md-content', '.md-modal').addClass('md-show.md-effect-9 .md-content');
        var $h3SelectName = $(this).closest('.section4_article').find(this + " > h3").html();
        var $selectParentContent = $(this).closest('.article_center4').find(".md-content div");
        $('#appendDiv').remove();
        currentPerson = $(this).attr('id');
        switch (currentPerson) {
          case "idPerson1":
            personAddress = mailAddress[0];
            personPhoneNumber = phoneNumber[0];
            personWebSite = webSite[0];
            description = des[0]
            break;
          case "idPerson2":
            personAddress = mailAddress[1];
            personPhoneNumber = phoneNumber[1];
            personWebSite = webSite[1];
            description = des[1]
            break;
          case "idPerson3":
            personAddress = mailAddress[2];
            personPhoneNumber = phoneNumber[2];
            personWebSite = webSite[2];
            description = des[2]
            break;
          case "idPerson4":
            personAddress = mailAddress[3];
            personPhoneNumber = phoneNumber[3];
            personWebSite = webSite[3];
            description = des[3]
        }
        var textToInsert = [];
        var i = 0;
        textToInsert[i++] = '<div id="appendDiv">';
        textToInsert[i++] = '<p></p>';
        textToInsert[i++] = '<ul><li><strong>Team Name:</strong>';
        textToInsert[i++] = personAddress + '</li><li><strong>Team Captain:</strong>';
        textToInsert[i++] = personPhoneNumber + '</li><li><strong>Robot Name:</strong>';
        textToInsert[i++] = personWebSite + '</li><strong></strong><li>';
        textToInsert[i++] = description + '</li></ul><button class=".md-close">Close me</button><div>';
        $($selectParentContent).append(textToInsert.join(''));
        $(".md-content > div p").text($h3SelectName);
        return false;
      });

      $('div', '.md-content').on("click", "button", function () {
        removeModalViewClass();
        return false;
      });

      $('.md-overlay').on("click", function () {
        removeModalViewClass();
        return false;
      });

      function removeModalViewClass() {
        $('.md-overlay').removeClass('md-overlay-show');
        $('.md-modal').removeClass('md-show');
        $('.md-modal md-content').removeClass('md-show.md-effect-9 .md-content');
      }

      /*****************************************************************/


      /* AUTHOR LINK */
      $('.about-me-img').hover(function () {
        $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
      }, function () {
        $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
      });

    });

  }
  detectMob() {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    return ((window.innerWidth >= 800) && (window.innerHeight >= 600));
  }

  check(gridStyle, percent) {
    return (
      <div style={{ position: 'relative', left: percent }}>
        <section id="amazingTeam" className="clear">
          <div class="containerContent">
            <div class="set_size_section1">
              <article class="article_center4">
                <div className="md-modal md-effect-9" id="modal-9">
                  <div className="md-content">
                    <h3>Team Profile</h3>
                  </div>
                </div>
                {/* style={{display: 'grid', gridTemplateColumns: 'auto auto'}}*/}
                <div style={{ display: 'grid', gridTemplateColumns: gridStyle }}>
                  <div >
                    <div className="thumbnail">
                      <article className="section4_article article1">
                        <div className="itemli">
                          <div className="ch-item">
                            {/* <img src="images/ourAmazingTeam_1.png"/>*/}
                            <div className="ch-info">
                              <div className="ch-info-front ch-img-1">
                              </div>
                              <div className="ch-info-back">
                                <h3>33691A</h3>
                                {/*<p>Visit my personal<a class="md-trigger">Website</a></p>*/}
                                <p>CLICK <a className="md-trigger" id="idPerson1">HERE</a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>


                  <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                      <article className="section4_article article1">
                        <div className="itemli">
                          <div className="ch-item">
                            {/* <img src="images/ourAmazingTeam_1.png"/>*/}
                            <div className="ch-info">
                              <div className="ch-info-front ch-img-2">
                              </div>
                              <div className="ch-info-back">
                                <h3>33691B</h3>
                                {/*<p>Visit my personal<a class="md-trigger">Website</a></p>*/}
                                <p>CLICK <a className="md-trigger" id="idPerson2">HERE</a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                      <article className="section4_article article1">
                        <div className="itemli">
                          <div className="ch-item">
                            {/* <img src="images/ourAmazingTeam_1.png"/>*/}
                            <div className="ch-info">
                              <div className="ch-info-front ch-img-3">
                              </div>
                              <div className="ch-info-back">
                                <h3>38972C</h3>
                                {/*<p>Visit my personal<a class="md-trigger">Website</a></p>*/}
                                <p>CLICK <a className="md-trigger" id="idPerson3">HERE</a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                      <article className="section4_article article1">
                        <div className="itemli">
                          <div className="ch-item">
                            {/* <img src="images/ourAmazingTeam_1.png"/>*/}
                            <div className="ch-info">
                              <div className="ch-info-front ch-img-4">
                              </div>
                              <div className="ch-info-back">
                                <h3>38863A</h3>
                                {/*<p>Visit my personal<a class="md-trigger">Website</a></p>*/}
                                <p>CLICK <a className="md-trigger" id="idPerson4">HERE</a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div></section>
      </div>
    )
  }


  render() {
    if (isMobile) {
      return this.check('auto', '0')
    }
    else {
      return this.check('auto auto auto auto', '-10%')
    }
  }
}


export default Cards;