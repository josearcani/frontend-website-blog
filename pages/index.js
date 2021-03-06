import { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import HeadMetadata from '../components/headMetadata';
import GoogleAnalytics from '../components/googleAnalytics';

// pull data into the page
import getFiveNewestPosts from '../api/getFiveNewestPosts';

export default class extends Component {

  static async getInitialProps () {
    const apiResult = await getFiveNewestPosts();
  
    return {
      posts: apiResult && apiResult.posts,
      getDataError: apiResult && apiResult.getDataError
    }
  }
  
  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
          title="Coding Blog"
          metaDescription="JARH is a web, developer that also writes modern NodeJS and Electronics"
        />
        <GoogleAnalytics />
        <Header />
        <div className="homepage-container">
          Homepage content goes here.
          {/* =====o==== */}
          <div className="homepage-introduction">
            <h1>Hi, I'm Nick Major. I help people learn software development.</h1>
            <p>I'm a full stack software developer that writes about modern Node.js, JavaScript, and development.</p>
          </div>
          <div className="homepage-latest-blog-posts">
            <h2>
              Latest Blog Posts
              <a className="homepage-latest-blog-posts-view-all" href="/blog">View all</a>
            </h2>
            <div className="homepage-latest-blog-posts-list">
              {
                this.props.posts ?
                this.props.posts.map((post, index) => {
                  return (
                    <a key={index} href={`/blog/${post.urlTitle}`}>
                      <div className="homepage-latest-blog-post">
                        <div className="homepage-latest-thumbnail">
                          <img src={post.thumbnailImageUrl} />
                        </div>
                        <div className="homepage-latest-blog-post-title">
                          <h3>{post.title}</h3>
                        </div>
                      </div>
                    </a>
                  )
                }) : null
              }
            </div>
          </div>
          <div className="homepage-projects">
            <h2>My Projects</h2>
            <div className="homepage-projects-list">
              <div className="homepage-project">
                <h3>
                  <a href="https://github.com/discourse/discourse">
                    <div className="homepage-project-icon">????</div>
                    <div className="homepage-project-title">Discourse</div>
                  </a>
                </h3>
                <p>A platform for community discussion. Free, open, simple.</p>
                <div className="homepage-project-btns">
                  <a className="homepage-project-view-btn" href="https://github.com/discourse/discourse">View</a>
                </div>
              </div>
              <div className="homepage-project">
                <h3>
                  <a href="https://github.com/nmajor25/seconds-converter">
                    <div className="homepage-project-icon">???</div>
                    <div className="homepage-project-title">Seconds Converter</div>
                  </a>
                </h3>
                <p>Convert milliseconds or seconds to days, hours, minutes, and seconds in node.js.</p>
                <div className="homepage-project-btns">
                  <a className="homepage-project-view-btn" href="https://github.com/nmajor25/seconds-converter">View</a>
                </div>
              </div>
              <div className="homepage-project">
                <h3>
                  <a href="https://github.com/showdownjs/showdown">
                    <div className="homepage-project-icon">???</div>
                    <div className="homepage-project-title">Showdown</div>
                  </a>
                </h3>
                <p>A bidirectional Markdown to HTML to Markdown converter written in Javascript.</p>
                <div className="homepage-project-btns">
                  <a className="homepage-project-view-btn" href="https://github.com/showdownjs/showdown">View</a>
                </div>
              </div>
            </div>
          </div>
        {/* =====o==== */}
        </div>
        <Footer />
      </div>
    )
  }
}
