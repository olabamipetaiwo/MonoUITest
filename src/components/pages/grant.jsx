import React from 'react';
import './grant.scss';
import { Link }  from 'react-router-dom';


const Grant =() => {
  
  return (
    <div className="container">
         <div className="grant">
         <Link className="back" to="/select">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#101326"/>
                    <path d="M12.3418 16.8485L17.0085 21.6484C17.2364 21.8828 17.5348 22 17.8333 22C18.1319 22 18.4303 21.8828 18.6582 21.6484C19.1139 21.18 19.1139 20.4199 18.6582 19.9515L14.8165 16.0001L18.6582 12.0485C19.1139 11.5801 19.1139 10.82 18.6582 10.3516C18.2024 9.8828 17.4642 9.8828 17.0084 10.3516L12.3417 15.1515C11.8861 15.6199 11.8861 16.3802 12.3418 16.8485Z" fill="white"/>
                </svg>
          </Link>

           <div className="row">
           <svg className="logo" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.272644" y="30" width="42.0408" height="42.0408" rx="16.3265" transform="rotate(-45 0.272644 30)" fill="#68F3A8"/>
            <path d="M23.5681 17.551C20.009 17.551 17.1429 20.4819 17.1429 24.041V35.4174C17.1429 37.2618 18.638 38.757 20.4824 38.757H30V23.9796C30 22.2741 29.3222 20.6384 28.1159 19.4327C26.9096 18.227 25.2736 17.5501 23.5681 17.551Z" fill="#0E1527"/>
            <path d="M36.4252 17.551C32.8661 17.551 30 20.4819 30 24.041V38.757H39.5176C41.362 38.757 42.8571 37.2618 42.8571 35.4174V23.9796C42.8571 22.2741 42.1794 20.6384 40.9731 19.4327C39.7668 18.227 38.1308 17.5501 36.4252 17.551Z" fill="#0E1527"/>
            <path d="M30.0033 23.9796C28.2978 23.9787 26.6618 24.6556 25.4555 25.8613C24.2492 27.067 23.5714 28.7026 23.5714 30.4082C23.5716 30.6528 23.5855 30.8973 23.6132 31.1403V39.4991C23.6132 41.3434 25.1083 42.8386 26.9527 42.8386H33.089C34.9334 42.8386 36.4286 41.3434 36.4286 39.4991V30.4695C36.4286 26.9104 33.5624 23.9796 30.0033 23.9796Z" fill="#F4DC51"/>
            </svg>

            <svg className="line" width="201" height="10" viewBox="0 0 201 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="4" width="199.5" height="2.8" rx="1.4" fill="#101326"/>
            <rect x="96" width="9.8" height="9.8" rx="3.36" fill="#101326"/>
            <rect x="0.599976" y="1.90002" width="7" height="7" rx="2.36544" fill="#101326"/>
            <rect x="193" y="2" width="7" height="7" rx="2.36544" fill="#101326"/>
            </svg>

            <svg class="gt" width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.299988" width="46.2" height="46.2" rx="16.8" fill="#D94F00"/>
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="47" height="47">
            <rect y="0.299988" width="46.2" height="46.2" rx="16.8" fill="white"/>
            </mask>
            <g mask="url(#mask0)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.90002 5.19998H41.3737V42.1131H4.90002V5.19998Z" fill="#D94F00"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6518 12.3578H35.0018V21.7268H25.6518V12.3578ZM14.3481 26.4658V27.3824H15.9596V32.2313H17.0707V27.3453H18.5711V26.4288L14.3481 26.4664V26.4658ZM13.5181 27.6021V26.6855C12.6267 26.2825 11.6015 26.1607 10.5519 26.6855C8.83055 27.4552 8.76903 31.2664 10.491 32.0116C11.4798 32.5125 13.542 32.2803 13.7498 31.8402V28.8231H11.6995V29.6172H12.6022V31.2055C9.63598 32.6469 9.08668 25.7207 13.5181 27.6021ZM20.3785 29.5683H21.44C22.3189 29.6053 22.5512 31.2664 21.4036 31.2539H20.3785V29.5683ZM20.3785 27.2355H21.44C22.3189 27.3943 22.0019 28.7013 21.4036 28.7377H20.3785V27.2355ZM19.2799 26.344V32.1823H22.1971C23.6862 31.645 23.7477 29.3366 22.1971 29.0918C23.6253 28.9336 23.6988 26.307 21.2329 26.307L19.2799 26.344ZM24.4307 27.9806V28.8476C25.2117 28.6279 26.9086 28.0171 26.7497 29.3121C25.2607 29.2142 24.2474 29.4829 24.0767 30.4108C23.7961 32.4146 25.9443 32.6098 26.8477 31.6205V32.097H27.8728V28.5789C27.6167 27.4426 25.9204 27.2964 24.4307 27.9806ZM25.2971 30.2406C25.5293 29.9349 26.2739 29.9468 26.7742 30.0937V30.8634C25.9569 31.7423 24.6385 31.3399 25.2977 30.24L25.2971 30.2406ZM29.9972 29.019C30.2659 28.7258 31.6941 28.1759 31.9138 29.019V32.1214H33.0608V28.8357C32.8165 27.4671 31.5102 27.2229 29.9238 28.1514V27.6385H28.8377V32.1459H29.9847L29.9972 29.019ZM36.6617 27.5895L35.1607 29.6047L36.7477 32.0844L38.1269 32.048L36.3817 29.6662L37.9561 27.6259L36.6623 27.5895H36.6617ZM33.9158 26.1111H35.0508V32.0844H33.9152V26.1118L33.9158 26.1111Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6517 12.3578H35.0018V21.7268H25.6517V12.3578Z" fill="white"/>
            </g>
            </svg>
           </div>

           <h1>Muney would like to</h1>

          <form action="#" method="POST">
            <div className="row form__group">
                <label for="v1">View your bank account balance</label>
                <input type="checkbox" name="v1" id="v1" value="acc" />
                <span className="checkmark"></span>
            </div>
            <div className="row form__group">
                <label for="v2">View your transactions</label>
                <input type="checkbox" name="v2" id="v2"value="tran" checked /> 
                <span className="checkmark"></span>
            </div>
          </form>

            <p>
              By clicking Allow, you grant <Link to="/">Muney</Link> and <Link to="/">Mono</Link> to use your information in 
              accordance with their respective <Link to="/">Terms of service</Link> and <Link to="/">Privacy Policies</Link>.
            </p>

            <div className="row">
              <Link className="deny" to="/login">Deny</Link>
              <Link className="success" to="/success">Allow</Link>
            </div>

            <div className="footer">
                <figure>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="20" rx="8" fill="#101326"/>
                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                        <rect width="20" height="20" rx="8" fill="white"/>
                        </mask>
                        <g mask="url(#mask0)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C11.1046 8 12 7.10457 12 6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6C8 7.10457 8.89543 8 10 8Z" fill="#F3DF67"/>
                        <rect x="8" y="10" width="4" height="6" rx="1" fill="#F3DF67"/>
                        </g>
                    </svg>
                </figure>
                <p>
                      We don’t have access to your money 
                      and we can’t make changes to your account.
                    </p>
            </div>
         </div>

    </div>
  );
}

export default Grant;
