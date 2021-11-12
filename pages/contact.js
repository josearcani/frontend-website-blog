import { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import HeadMetadata from '../components/headMetadata';
import GoogleAnalytics from '../components/googleAnalytics';

export default class extends Component {
  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
          title="Contact | Coding Blog"
          metaDescription="If you have any comments, ideas, critiques, or you just want to say hi, you can contact me via email or the links listed below."
        />
        <GoogleAnalytics />
        <Header />
        <div className="contact-container">
          <div className="contact-section">
            <h1>Contact</h1>
            <p>Hi, I’m Nick, a full stack software engineer based out of rural Wisconsin. I write about modern JavaScript and build coding courses that show people how to build real world applications.</p>
            <p>If you have any comments, ideas, critiques, or you just want to say hi, don’t hesitate to send me an email at nick@coderrocketfuel.com!</p>
          </div>
          <div className="contact-section">
            <h2>Around the Web</h2>
            <ul>
              <li><strong>Email</strong>: jarh@gmail.com</li>
              <li><strong>GitHub</strong>: <a href="https://github.com/josearcani">Coder Rocket Fuel</a></li>
              <li><strong>Twitter</strong>: <a href="https://twitter.com/josearcani">Coder Rocket Fuel Twitter Page</a></li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}