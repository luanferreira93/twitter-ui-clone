import React from 'react';
import ReactDOM from 'react-dom/client';
import {Bell, BookBookmark, DotsThreeCircle, Envelope, FileText, Hash, House, Sparkle, User} from 'phosphor-react';
import twitterlogo from './assets/logo-twitter.svg';
import './global.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={twitterlogo} alt="logo do twitter" />
        <nav className="main-navigation">
            <a href="">
              <House weight='fill' />
              Home
              </a>
            <a href="">
              <Hash/>
              Explore
              </a>
            <a href="">
              <Bell/>
              Notifications
              </a>
            <a href="">
              <Envelope/>
              Messages
              </a>
            <a href="">
              <BookBookmark/>
              Bookmarks
              </a>
            <a href="">
              <FileText/>
              Lists
              </a>
            <a href="">
              <User/>
              Profile
              </a>
            <a href="">
              <DotsThreeCircle/>
              More
              </a>
        </nav>
        <button className="new-tweet" type="button">Tweet</button>
      </aside>
      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle/>
          </div>
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://avatars.githubusercontent.com/u/65790853?v=4" alt="imagem do perfil" />
              <textarea name="tweet" placeholder="What's happening?"/>
            </label>
            <button type="submit">Tweet</button>
          </form>
        </main>
      </div>
    </div>
  </React.StrictMode>,
);
