import React from 'react';
import './login.scss';

import { Link }  from 'react-router-dom';


const Login =() => {
  
  return (
    <div className="container">
         <div className="login">
         <Link to="/select">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#101326"/>
                    <path d="M12.3418 16.8485L17.0085 21.6484C17.2364 21.8828 17.5348 22 17.8333 22C18.1319 22 18.4303 21.8828 18.6582 21.6484C19.1139 21.18 19.1139 20.4199 18.6582 19.9515L14.8165 16.0001L18.6582 12.0485C19.1139 11.5801 19.1139 10.82 18.6582 10.3516C18.2024 9.8828 17.4642 9.8828 17.0084 10.3516L12.3417 15.1515C11.8861 15.6199 11.8861 16.3802 12.3418 16.8485Z" fill="white"/>
                </svg>
          </Link>

          <figure>
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="66" height="66" rx="24" fill="#D94F00" stroke="white" stroke-width="3"/>
              <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="-4" y="-4" width="78" height="78">
              <rect opacity="0.5" x="2" y="2" width="66" height="66" rx="24" fill="white" stroke="white" stroke-width="10"/>
              </mask>
              <g mask="url(#mask0)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 12H58V58H12V12Z" fill="#D94F00"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M38.1716 20.9199H49.9638V32.5952H38.1716V20.9199ZM23.9156 38.5008V39.643H25.948V45.6856H27.3494V39.5968H29.2417V38.4547L23.9156 38.5016V38.5008ZM22.8691 39.9169V38.7747C21.7448 38.2725 20.4519 38.1207 19.1281 38.7747C16.9572 39.7338 16.8796 44.4832 19.0513 45.4118C20.2983 46.0361 22.8992 45.7467 23.1612 45.1983V41.4385H20.5754V42.4281H21.7139V44.4073C17.973 46.2035 17.2802 37.5723 22.8691 39.9169ZM31.5209 42.3669H32.8597C33.9682 42.4131 34.2611 44.4831 32.8138 44.4674H31.5209V42.3669ZM31.5209 39.4599H32.8597C33.9682 39.6578 33.5684 41.2866 32.8138 41.3319H31.5209V39.4599ZM30.1355 38.3491V45.6246H33.8147C35.6927 44.9549 35.7703 42.0783 33.8147 41.7732C35.6159 41.5761 35.7086 38.3029 32.5986 38.3029L30.1355 38.3491ZM36.6316 40.3885V41.4689C37.6166 41.1951 39.7566 40.4339 39.5563 42.0478C37.6783 41.9258 36.4005 42.2606 36.1851 43.4169C35.8312 45.914 38.5405 46.1573 39.6798 44.9244V45.5182H40.9728V41.1341C40.6497 39.7181 38.5104 39.5358 36.6316 40.3885ZM37.7244 43.2049C38.0174 42.8239 38.9564 42.8388 39.5874 43.0218V43.9809C38.5565 45.0762 36.8939 44.5747 37.7252 43.2041L37.7244 43.2049ZM43.6521 41.6824C43.991 41.3171 45.7922 40.6317 46.0693 41.6824V45.5486H47.5158V41.454C47.2078 39.7485 45.5602 39.4442 43.5595 40.6012V39.9621H42.1898V45.5791H43.6363L43.6521 41.6824ZM52.0571 39.9012L50.1641 42.4124L52.1656 45.5025L53.905 45.4572L51.704 42.4891L53.6897 39.9465L52.0579 39.9012H52.0571ZM48.594 38.0588H50.0255V45.5025H48.5933V38.0596L48.594 38.0588Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M38.1716 20.9199H49.9638V32.5952H38.1716V20.9199Z" fill="white"/>
              </g>
            </svg>

          </figure>

          <h1>GTBank Internet Banking</h1>

          <form action="#" method="POST">
            <div className="form__group">
                <label for="user" id="user">GTBank User ID:</label>
                <input name="user" type="text" placeholder="User ID" />
            </div>
            <div className="form__group">
                <label for="password" id="password">Password</label>
                <input name="password" type="password" placeholder="Password" />
            </div>
          </form>

            <Link className="login" to="/grant">
                Link Account
            </Link>
         </div>
    </div>
  );
}

export default Login;
