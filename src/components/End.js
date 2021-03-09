import React, { Component, useState } from 'react';

class End extends Component {
  constructor(props) {
    super(props);
    this.state = {
      automationForm: null,
      submitUrl: null,
    };
  }

  componentDidMount() {
    // Test urls
    // fetch('http://ftm.local/app_dev.php/automation/aanmelden/33437')
    // fetch('https://staging.followthemoney.nl/automation/aanmelden/32039')
    fetch('https://wwww.ftm.nl/automation_campaign/aanmelden/33641')
      .then(
        (result) => {
          return result.text();
        },
        (error) => {
          console.log('error getting automation campaign form');
        }
      )
      .then((html) => {
        if (html == null) {
          this.setState({
            automationForm:
              '<em class="error">Helaas ging er iets mis bij het ophalen van de gids, probeer het opnieuw door de pagina te vernieuwen</em>',
          });
          return;
        }
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        this.setState({
          automationForm: doc.querySelector('form').outerHTML,
          submitUrl: doc.querySelector('form').getAttribute('action'),
        });

        // Handle form submission via FTM script
        if (
          typeof window.FTM === 'object' &&
          typeof window.FTM.automationCampaignPagePart === 'object'
        ) {
          window.FTM.automationCampaignPagePart.init();
        }
      });
  }

  render(countCorrect, setCountCorrect) {
    const getAns = JSON.parse(localStorage.getItem('antwoorden'));
    let correctCount = 0;

    getAns.map(function (d) {
      if (d.check === true) {
        correctCount = correctCount + 1;
        console.log('plus');
      } else {
        return correctCount;
      }
    });

    return (
      <div className='End'>
        <div className='endSection'>
          <h2>
            Van de {this.props.quiz.length} vragen had je er {correctCount}{' '}
            goed!
          </h2>
          <p>Deel je score:</p>
          <div className='share'>
            <a
              className='facebook'
              href='https://www.facebook.com/dialog/share?app_id=1641639456124709&amp;display=popup&amp;href=https%3A%2F%2Fwww.ftm.nl%2Fpartijfinanciering-quiz%26utm_medium%3Dsocial%26utm_campaign%3Dsharebuttonleden%26utm_source%3Dfacebook&amp;redirect_uri=https%3A%2F%2Fftm.local%2Fapp_dev.php%2Fartikelen%2Frabobank-investeert-miljarden-in-amerikaanse-vleesgigant-tyson%3Futm_medium%3Dsocial%26utm_campaign%3Dsharebuttonleden%26utm_source%3Dfacebook'
              onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
            >
              <i className='fa fa-facebook'></i>
            </a>
            <a
              className='twitter'
              href='https://twitter.com/intent/tweet?text=Rabobank%20investeert%20miljarden%20in%20%E2%80%98America%E2%80%99s%20worst%20company%E2%80%99&amp;url=https%3A%2F%2Fwww.ftm.nl%2Fpartijfinanciering-quiz%26utm_medium%3Dsocial%26utm_campaign%3Dsharebuttonleden%26utm_source%3Dtwitter&amp;via=ftm_nl'
              onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
            >
              <i className='fa fa-twitter'></i>
            </a>
            <a
              className='linkedin'
              href='https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fwww.ftm.nl%2Fpartijfinanciering-quiz%26utm_medium%3Dsocial%26utm_campaign%3Dsharebuttonleden%26utm_source%3Dlinkedin&amp;title=Rabobank%20investeert%20miljarden%20in%20%E2%80%98America%E2%80%99s%20worst%20company%E2%80%99&amp;summary=Vleesgigant%20Tyson%20Foods%20wil%20de%20Europese%20markt%20verder%20veroveren%20en%20zijn%20vestiging%20in%20Nederland%20uitbreiden.%20In%20de%20Verenigde%20Staten%20is%20het%20al%20een%20van%20de%20grootste%20vleesproducenten.%20Maar%20de%20gigant%20kwam%20meerdere%20malen%20in%20opspraak%20wegens%20dierenmishandeling%20en%20mensenuitbuiting.%20%E2%80%98Tyson%20behandelt%20zijn%20werknemers%20als%20machines.%E2%80%99%20Wat%20voor%20bedrijf%20is%20dit%2C%20waar%20de%20Rabobank%20miljarden%20in%20steekt%3F&amp;source=Follow%20The%20Money'
              onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
            >
              <i className='fa fa-linkedin'></i>
            </a>
            <a
              className='mail'
              href='mailto:?to=&amp;body=Ik%20kwam%20het%20volgende%20bericht%20tegen%20op%20Follow%20the%20Money%20en%20denk%20dat%20dit%20voor%20jou%20interessant%20is%3A https%3A%2F%2Fwww.ftm.nl%2Fpartijfinanciering-quiz%26utm_medium%3Dsocial%26utm_campaign%3Dsharebuttonleden%26utm_source%3Dmail %0A%0A%28Met%20deze%20link%20kun%20je%20het%20artikel%20binnen%2024%20uur%20gratis%20lezen%29.%0AWil%20je%20op%20een%20later%20moment%20verder%20lezen%20of%20het%20hele%20FTM-archief%20ontdekken%3F%0AProbeer%20FTM%20dan%20nu%20een%20maand%20gratis%20uit.%20De%20proefmaand%20verloopt%20automatisch%2C%20je%20hoeft%20hier%20dus%20niets%20voor%20te%20doen.&amp;subject=Rabobank%20investeert%20miljarden%20in%20%E2%80%98America%E2%80%99s%20worst%20company%E2%80%99'
              target='_blank'
            >
              <i className='fa fa-envelope'></i>
            </a>
            <a
              className='whatsapp'
              href='whatsapp://send?text=Rabobank%20investeert%20miljarden%20in%20%E2%80%98America%E2%80%99s%20worst%20company%E2%80%99%20https%3A%2F%2Fwww.ftm.nl%2Fpartijfinanciering-quiz%26utm_medium%3Dsocial%26utm_campaign%3Dsharebuttonleden%26utm_source%3Dwhatsapp'
              target='_blank'
            >
              <i className='fa fa-whatsapp'></i>
            </a>
            <a
              className='link'
              href='https://www.ftm.nl/partijfinanciering-quiz%26utm_medium=social&amp;utm_campaign=sharebuttonleden&amp;utm_source=linkbutton'
              onclick='javascript:return false;'
            >
              <i className='fa fa-link'></i>
            </a>
          </div>

          <hr />

          <h2>Wil je meer lezen over partijfinanciering?</h2>
          <p>Abonneer je op onze gids, je krijgt dan 6 stukken in je mail</p>
          <div
            id='form'
            class='automation-campaign-pp'
            dangerouslySetInnerHTML={{ __html: this.state.automationForm }}
          ></div>
        </div>
      </div>
    );
  }
}

export default End;
