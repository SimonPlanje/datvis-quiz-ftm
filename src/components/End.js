import React, { Component, useState } from 'react';

class End extends Component {
  constructor(props) {
    super(props);
    this.state = {
      automationForm: null,
      submitUrl: null,
      correctCount: 0,
    };
  }

  componentDidMount() {
    // Test urls
    // fetch('http://ftm.local/app_dev.php/automation/aanmelden/33437')
    // fetch('https://staging.followthemoney.nl/automation/aanmelden/32039')
    fetch('https://www.ftm.nl/automation/aanmelden/33641')
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

    if (localStorage.getItem('antwoorden')) {
      const getAns = JSON.parse(localStorage.getItem('antwoorden'));

      let count = 1;
      getAns.forEach((e) => (e.check === true ? count++ : ''));
      this.setState({ correctCount: count });
    }
  }

  windowOpener(e) {
    e.preventDefault();
    const url = e.target.closest('a').getAttribute('href');
    window.open(
      url,
      '',
      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
    );
    return false;
  }

  render(countCorrect, setCountCorrect) {
    return (
      <div className='End'>
        <div className='endSection'>
          <h1>
            Van de {this.props.quiz.length} vragen had je er{' '}
            {this.state.correctCount} goed!
          </h1>
          <div className='share'>
            <p>Deel je score:</p>
            <div className='socialIcons'>
              <a
                className='facebook'
                href='https://www.facebook.com/dialog/share?app_id=1641639456124709&amp;display=popup&amp;href=https%3A%2F%2Fwww.ftm.nl%2Fpartijfinanciering-quiz%3Futm_medium%3Dsocial%26utm_campaign%3Dsharebuttonleden%26utm_source%3Dfacebook&amp;redirect_uri=https%3A%2F%2Fwww.ftm.nl%2Fpartijfinanciering-quiz%3Futm_medium%3Dsocial%26utm_campaign%3Dsharebuttonleden%26utm_source%3Dfacebook'
                onClick={this.windowOpener}
              >
                <i className='fa fa-facebook'></i>
              </a>
              <a
                className='twitter'
                href={
                  'https://twitter.com/intent/tweet?text=Ik%20had%20' +
                  this.state.correctCount +
                  '%20vragen%20goed%20van%20de%20politieke%20advertenties%20quiz.%20Doe%20ook%20mee!&amp;url=https%3A%2F%2Fwww.ftm.nl%2Fpartijfinanciering-quiz%3Futm_medium%3Dsocial%26utm_campaign%3Dsharebuttonleden%26utm_source%3Dtwitter&amp;via=ftm_nl'
                }
                onClick={this.windowOpener}
              >
                <i className='fa fa-twitter'></i>
              </a>
              <a
                className='linkedin'
                href='https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fwww.ftm.nl%2Fpartijfinanciering-quiz%3Futm_medium%3Dsocial%26utm_campaign%3Dsharebuttonleden%26utm_source%3Dlinkedin&amp;source=Follow%20The%20Money'
                onClick={this.windowOpener}
              >
                <i className='fa fa-linkedin'></i>
              </a>
              <a
                className='mail'
                href='mailto:?to=&amp;body=https%3A%2F%2Fwww.ftm.nl%2Fpartijfinanciering-quiz%3Futm_medium%3Dsocial%26utm_campaign%3Dsharebuttonleden%26utm_source%3Dmail &amp;subject='
                target='_blank'
              >
                <i className='fa fa-envelope'></i>
              </a>
              <a
                className='whatsapp'
                href='whatsapp://send?text=%20https%3A%2F%2Fwww.ftm.nl%2Fpartijfinanciering-quiz%3Futm_medium%3Dsocial%26utm_campaign%3Dsharebuttonleden%26utm_source%3Dwhatsapp'
                target='_blank'
              >
                <i className='fa fa-whatsapp'></i>
              </a>
            </div>
          </div>
          <hr />

          <h3>Wil je meer lezen over partijfinanciering?</h3>
          <p>
            Abonneer je op onze gids, we sturen je de komende maand de beste
            artikelen over partijfinanciering.
          </p>
          <div
            id='form'
            className='automation-campaign-pp'
            dangerouslySetInnerHTML={{ __html: this.state.automationForm }}
          ></div>
        </div>
      </div>
    );
  }
}

export default End;
