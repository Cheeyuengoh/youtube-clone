import { useState } from 'react';
import './App.css';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  return (
    <div className='h-screen'>
      <div className={`overlay ${showSidebar ? 'visible opacity-80' : 'hidden opacity-0'}`} onClick={() => setShowSidebar(!showSidebar)}></div>

      <div className={`sidebar ${showSidebar ? 'translate-x-full' : 'translate-x-0'}`}>
        <div className='flex flex-col'>
          <div className='sidebar-header'>
            <div className='hamburger' onClick={() => setShowSidebar(!showSidebar)}>
              <svg height="24" width="24" focusable="false"><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg>
            </div>
            <div className='youtube-logo'>
              <svg focusable="false">
                <svg viewBox="0 0 90 20">
                  <g>
                    <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000"></path>
                    <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"></path>
                  </g>
                  <g>
                    <g>
                      <path d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"></path>
                      <path d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"></path>
                      <path d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"></path>
                      <path d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"></path>
                      <path d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"></path>
                      <path d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"></path>
                      <path d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"></path>
                    </g>
                  </g>
                </svg>
              </svg>
              <span className='text-[10px] w-[12.75px]'>SG</span>
            </div>
          </div>
          <div className='p-2'>
            <div className='sidebar-item'>
              <div className='mr-4'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><g><path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path></g></svg>
              </div>
              <div className='grow text-[14px]'><span>Home</span></div>
            </div>
            <div className='sidebar-item'>
              <div className='mr-4'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path></svg>                </div>
              <div className='grow text-[14px]'><span>Shorts</span></div>
            </div>
            <div className='sidebar-item'>
              <div className='mr-4'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path></svg>
              </div>
              <div className='grow text-[14px]'><span>Subscriptions</span></div>
            </div>
          </div>
          <div className='mt-2 pt-2 border-t-[1px] border-slate-300'>
            <div className='sidebar-item'>
              <div className='mr-4'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path></svg>
              </div>
              <div className='grow text-[14px]'><span>Library</span></div>
            </div>
            <div className='sidebar-item'>
              <div className='mr-4'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><g><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path></g></svg>
              </div>
              <div className='grow text-[14px]'><span>History</span></div>
            </div>
            <div className='sidebar-item'>
              <div className='mr-4'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path></svg>
              </div>
              <div className='grow text-[14px]'><span>Your Videos</span></div>
            </div>
            <div className='sidebar-item'>
              <div className='mr-4'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path></svg>
              </div>
              <div className='grow text-[14px]'><span>Watch Later</span></div>
            </div>
            <div className='sidebar-item'>
              <div className='mr-4'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path></svg>
              </div>
              <div className='grow text-[14px]'><span>Liked Videos</span></div>
            </div>
          </div>
          <div className='p-2 border-t-[1px] border-slate-300'>
            <span>Subscriptions</span>
            <div className='sidebar-item'>
              <div className='mr-4'>
                <img className='rounded-full' draggable="false" height="24" width="24" alt="" src="https://yt3.ggpht.com/3xlfTWMuYi3O_BWVgPYK9tZselbFoiVzibyB2aFq_nZe9Fo4P9ziCCHGqnYXZE2KTTMvE-mgzpA=s88-c-k-c0x00ffffff-no-rj"></img>
              </div>
              <div className='grow text-[14px]'><span>Raon</span></div>
            </div>
            <div className='sidebar-item'>
              <div className='mr-4'>
                <img className='rounded-full' draggable="false" height="24" width="24" alt="" src="https://yt3.ggpht.com/3xlfTWMuYi3O_BWVgPYK9tZselbFoiVzibyB2aFq_nZe9Fo4P9ziCCHGqnYXZE2KTTMvE-mgzpA=s88-c-k-c0x00ffffff-no-rj"></img>
              </div>
              <div className='grow text-[14px]'><span>Raon</span></div>
            </div>
            <div className='sidebar-item'>
              <div className='mr-4'>
                <img className='rounded-full' draggable="false" height="24" width="24" alt="" src="https://yt3.ggpht.com/3xlfTWMuYi3O_BWVgPYK9tZselbFoiVzibyB2aFq_nZe9Fo4P9ziCCHGqnYXZE2KTTMvE-mgzpA=s88-c-k-c0x00ffffff-no-rj"></img>
              </div>
              <div className='grow text-[14px]'><span>Raon</span></div>
            </div>
            <div className='sidebar-item'>
              <div className='mr-4'>
                <img className='rounded-full' draggable="false" height="24" width="24" alt="" src="https://yt3.ggpht.com/3xlfTWMuYi3O_BWVgPYK9tZselbFoiVzibyB2aFq_nZe9Fo4P9ziCCHGqnYXZE2KTTMvE-mgzpA=s88-c-k-c0x00ffffff-no-rj"></img>
              </div>
              <div className='grow text-[14px]'><span>Raon</span></div>
            </div>
            <div className='sidebar-item'>
              <div className='mr-4'>
                <img className='rounded-full' draggable="false" height="24" width="24" alt="" src="https://yt3.ggpht.com/3xlfTWMuYi3O_BWVgPYK9tZselbFoiVzibyB2aFq_nZe9Fo4P9ziCCHGqnYXZE2KTTMvE-mgzpA=s88-c-k-c0x00ffffff-no-rj"></img>
              </div>
              <div className='grow text-[14px]'><span>Raon</span></div>
            </div>
          </div>
          <div className='p-2 border-t-[1px] border-slate-300'>
            <span>Explore</span>
            <div className='sidebar-item'>
                <div className='mr-4'>
                  <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09.5-1.19 1.29-2.21 2.27-2.97.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89 14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z"></path></svg>
                </div>
                <div className='grow text-[14px]'><span>Trending</span></div>
            </div>
            <div className='sidebar-item'>
              <div className='mr-4'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z"></path></svg>
              </div>
              <div className='grow text-[14px]'><span>Music</span></div>
            </div>
            <div className='sidebar-item'>
              <div className='mr-4'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="m22.01 4.91-.5-2.96L1.64 5.19 2 8v13h20V8H3.06l18.95-3.09zM5 9l1 3h3L8 9h2l1 3h3l-1-3h2l1 3h3l-1-3h3v11H3V9h2z"></path></svg>
              </div>
              <div className='grow text-[14px]'><span>Movies</span></div>
            </div>
            <div className='sidebar-item'>
              <div className='mr-4'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15 4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z"></path></svg>
              </div>
              <div className='grow text-[14px]'><span>Gaming</span></div>
            </div>
            <div className='sidebar-item'>
              <div className='mr-4'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M11 11v6H7v-6h4m1-1H6v8h6v-8zM3 3.03V21h14l4-4V3.03M20 4v11.99l-.01.01H16v3.99l-.01.01H4V4h16zm-2 4H6V6h12v2zm0 7h-5v-2h5v2zm0-3h-5v-2h5v2z"></path></svg>
              </div>
              <div className='grow text-[14px]'><span>News</span></div>
            </div>
            <div className='sidebar-item'>
              <div className='mr-4'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M18 5V2H6v3H3v6l3.23 1.61c.7 2.5 2.97 4.34 5.69 4.38L8 19v3h8v-3l-3.92-2.01c2.72-.04 4.99-1.88 5.69-4.38L21 11V5h-3zM6 11.38l-2-1V6h2v5.38zM15 21H9v-1.39l3-1.54 3 1.54V21zm2-10c0 2.76-2.24 5-5 5s-5-2.24-5-5V3h10v8zm3-.62-2 1V6h2v4.38z"></path></svg>
              </div>
              <div className='grow text-[14px]'><span>Sports</span></div>
            </div>
            <div className='sidebar-item'>
              <div className='mr-4'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M12.5 6.44v-.5C13.36 5.71 14 4.93 14 4c0-1.1-.9-2-2-2s-2 .9-2 2h1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1h-.5v1.44L4 13h2v6h1v2h1v-2h2v3h1v-3h2v2h1v-2h1v-3h3v-3h2l-7.5-6.56zM6.66 12 12 7.33 17.34 12H6.66zM14 18H7v-5h7v5zm1-3v-2h2v2h-2z"></path></svg>
              </div>
              <div className='grow text-[14px]'><span>Fashion & Beauty</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className='navbar'>
        <div className='navbar-left'>
          <div className='hamburger' onClick={() => setShowSidebar(!showSidebar)}>
            <svg height="24" width="24" focusable="false"><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg>
          </div>
          <div className='youtube-logo'>
            <svg focusable="false">
              <svg viewBox="0 0 90 20">
                <g>
                  <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000"></path>
                  <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"></path>
                </g>
                <g>
                  <g>
                    <path d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"></path>
                    <path d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"></path>
                    <path d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"></path>
                    <path d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"></path>
                    <path d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"></path>
                    <path d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"></path>
                    <path d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"></path>
                  </g>
                </g>
              </svg>
            </svg>
            <span className='text-[10px] w-[12.75px]'>SG</span>
          </div>
        </div>

        <div className='navbar-center'>
          <div className='navbar-input'>
            <input className='w-full focus:outline-none' type='text' placeholder='Search'></input>
          </div>
          <div className='navbar-btn-search'>
            <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg>
            <span className='tooltip'>Search</span>
          </div>
          <div className='navbar-btn'>
            <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"></path></svg>
            <span className='tooltip'>Search with your voice</span>
          </div>
        </div>

        <div className='navbar-right'>
          <div className={`dropdown-menu ${showDropdown ? 'visible': 'invisible'}`}>
            <div className='p-3 flex'>
              <div className='w-5 h-5 mr-3'>
                <img class="rounded-full" draggable="false" alt="Avatar" height="40" width="40" src="https://yt3.ggpht.com/yti/AOXPAcUaQl7zbp40v8tDzI1sjkT6a3AuKjxE69ZbesLUeg=s88-c-k-c0x00ffffff-no-rj"></img>
              </div>
              <div className='flex flex-col'>
                <div><span className='text-3'>Chee Yuen Goh</span></div>
                <div><span className='text-3'>@NanakiMeh</span></div>
                <div><span className='text-[14px]'>Manage your Google Account</span></div>
              </div>
            </div>
            <div className='py-1 border-t-[1px] border-slate-300'>
              <div className='dropdown-menu-item'>
                <div className='mr-3'>
                  <svg viewBox="0 0 24 24" height="24" width-="24" focusable="false"><path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path></svg>
                </div>
                <div className='grow text-[14px]'><span>Your Channel</span></div>
              </div>
              <div className='dropdown-menu-item'>
                <div className='mr-3'>
                  <svg viewBox="0 0 24 24" height="24" width-="24" focusable="false"><path d="M10 9.35 15 12l-5 2.65ZM12 3a.73.73 0 00-.31.06L4.3 7.28a.79.79 0 00-.3.52v8.4a.79.79 0 00.3.52l7.39 4.22a.83.83 0 00.62 0l7.39-4.22a.79.79 0 00.3-.52V7.8a.79.79 0 00-.3-.52l-7.39-4.22A.73.73 0 0012 3m0-1a1.6 1.6 0 01.8.19l7.4 4.22A1.77 1.77 0 0121 7.8v8.4a1.77 1.77 0 01-.8 1.39l-7.4 4.22a1.78 1.78 0 01-1.6 0l-7.4-4.22A1.77 1.77 0 013 16.2V7.8a1.77 1.77 0 01.8-1.39l7.4-4.22A1.6 1.6 0 0112 2Zm0 4a.42.42 0 00-.17 0l-4.7 2.8a.59.59 0 00-.13.39v5.61a.65.65 0 00.13.37l4.7 2.8A.42.42 0 0012 18a.34.34 0 00.17 0l4.7-2.81a.56.56 0 00.13-.39V9.19a.62.62 0 00-.13-.37L12.17 6A.34.34 0 0012 6m0-1a1.44 1.44 0 01.69.17L17.39 8A1.46 1.46 0 0118 9.19v5.61a1.46 1.46 0 01-.61 1.2l-4.7 2.81A1.44 1.44 0 0112 19a1.4 1.4 0 01-.68-.17L6.62 16A1.47 1.47 0 016 14.8V9.19A1.47 1.47 0 016.62 8l4.7-2.8A1.4 1.4 0 0112 5Z"></path></svg>
                </div>
                <div className='grow text-[14px]'><span>Youtube Studio</span></div>
              </div>
              <div className='dropdown-menu-item'>
                <div className='mr-3'>
                  <svg viewBox="0 0 24 24" height="24" width-="24" focusable="false"><path d="M4 20h14v1H3V6h1v14zM6 3v15h15V3H6zm2.02 14c.36-2.13 1.93-4.1 5.48-4.1s5.12 1.97 5.48 4.1H8.02zM11 8.5a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zm3.21 3.43A3.507 3.507 0 0017 8.5C17 6.57 15.43 5 13.5 5S10 6.57 10 8.5c0 1.69 1.2 3.1 2.79 3.43-3.48.26-5.4 2.42-5.78 5.07H7V4h13v13h-.01c-.38-2.65-2.31-4.81-5.78-5.07z"></path></svg>
                </div>
                <div className='grow text-[14px]'><span>Switch Account</span></div>
              </div>
              <div className='dropdown-menu-item'>
                <div className='mr-3'>
                  <svg viewBox="0 0 24 24" height="24" width-="24" focusable="false"><path d="M20 3v18H8v-1h11V4H8V3h12zm-8.9 12.1.7.7 4.4-4.4L11.8 7l-.7.7 3.1 3.1H3v1h11.3l-3.2 3.3z"></path></svg>
                </div>
                <div className='grow text-[14px]'><span>Sign Out</span></div>
              </div>
            </div>
          </div>
          
          <div className='navbar-btn-profile' onClick={() => setShowDropdown(!showDropdown)}>
            <img className='rounded-full' draggable="false" alt="Avatar" height="32" width="32" src="https://yt3.ggpht.com/yti/AOXPAcUaQl7zbp40v8tDzI1sjkT6a3AuKjxE69ZbesLUeg=s88-c-k-c0x00ffffff-no-rj"></img>
          </div>
          <div className='navbar-btn'>
            <svg viewBox="0 0 24 24" height="24"  width="24" focusable="false"><path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path></svg>
            <span className='tooltip'>Notifications</span>
          </div>
          <div className='navbar-btn'>
            <svg viewBox="0 0 24 24" height="24"  width="24" focusable="false"><path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path></svg>
            <span className='tooltip'>Create</span>
          </div>
        </div>
      </div>

      <div className='mini-sidebar'>
        <div className='mini-sidebar-item'>
          <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><g><path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path></g></svg>
          <span className='text-[10px]'>Home</span>
        </div>
        <div className='mini-sidebar-item'>
          <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path></svg>
          <span className='text-[10px]'>Shorts</span>
        </div>
        <div className='mini-sidebar-item'>
          <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path></svg>
          <span className='text-[10px]'>Subscriptions</span>
        </div>
        <div className='mini-sidebar-item'>
          <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path></svg>
          <span className='text-[10px]'>Library</span>
        </div>
      </div>

      <div className='tagbar'>
        <div className='flex overflow-hidden'>
          <div className='tags ml-4'><span>All</span></div>
          <div className='tags'><span>Mixes</span></div>
          <div className='tags'><span>Music</span></div>
          <div className='tags'><span>Gaming</span></div>
          <div className='tags'><span>Theme music</span></div>
        </div>

        <div className='flex'>
          <div className='bg-white'>
            <div className='tag-bar-next'>
              <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path></svg>
            </div>
          </div>
        </div>
      </div>

      <div className='main'>
        <div className='main-row'>
          <div className='main-item'>
            <div className='grow'>
              <img alt="" className="rounded-xl" src="https://i.ytimg.com/vi/Qwb-Za6cBws/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCFG6BEvy0s_usptcD37cmdvxi53A"></img>
            </div>
            <div className='h-[100px] relative flex'>
              <div className='mt-2 mr-2'>
                <img className='rounded-full' draggable="false" alt="" height="36" width="36" src="https://yt3.ggpht.com/ytc/AOPolaS101j27Disa_BYArytv-hXMRl8wNMtqZMTkrfH=s68-c-k-c0x00ffffff-no-rj"></img>
              </div>
              <div className='grow pr-4'>
                <div className='mt-2 mb-[4px] h-[44px] w-full'><span className='capitalize text-3'>How To Maximize Performance In Your React Apps</span></div>
                <div className='flex flex-col'>
                  <div className='h-[20px] flex'>
                    <div>
                      <span className='capitalize text-[14px]'>Web Dev Simplified</span>
                    </div>
                    <div className='flex items-center'>
                      <svg viewBox="0 0 24 24" height="14" width="14" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
                    </div>
                  </div>
                  <div className='h-[20px] flex items-center capitalize text-[14px]'>
                    <div><span>42K views</span></div>
                    <div><span className='before:content-["\B7"] before:mx-[4px] before:text-center'>2 weeks ago</span></div>
                  </div>
                </div>
              </div>
              <div className='w-5 h-5 mt-2 flex justify-center absolute right-0'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
              </div>
            </div>
          </div>

          <div className='main-item hidden md:block'>
            <div className='grow'>
              <img alt="" className="rounded-xl" src="https://i.ytimg.com/vi/Qwb-Za6cBws/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCFG6BEvy0s_usptcD37cmdvxi53A"></img>
            </div>
            <div className='h-[100px] relative flex'>
              <div className='mt-2 mr-2'>
                <img className='rounded-full' draggable="false" alt="" height="36" width="36" src="https://yt3.ggpht.com/ytc/AOPolaS101j27Disa_BYArytv-hXMRl8wNMtqZMTkrfH=s68-c-k-c0x00ffffff-no-rj"></img>
              </div>
              <div className='grow pr-4'>
                <div className='mt-2 mb-[4px] h-[44px] w-full'><span className='capitalize text-3'>How To Maximize Performance In Your React Apps</span></div>
                <div className='flex flex-col'>
                  <div className='h-[20px] flex'>
                    <div>
                      <span className='capitalize text-[14px]'>Web Dev Simplified</span>
                    </div>
                    <div className='flex items-center'>
                      <svg viewBox="0 0 24 24" height="14" width="14" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
                    </div>
                  </div>
                  <div className='h-[20px] flex items-center capitalize text-[14px]'>
                    <div><span>42K views</span></div>
                    <div><span className='before:content-["\B7"] before:mx-[4px] before:text-center'>2 weeks ago</span></div>
                  </div>
                </div>
              </div>
              <div className='w-5 h-5 mt-2 flex justify-center absolute right-0'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
              </div>
            </div>
          </div>

          <div className='main-item hidden lg:block'>
            <div className='grow'>
              <img alt="" className="rounded-xl" src="https://i.ytimg.com/vi/Qwb-Za6cBws/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCFG6BEvy0s_usptcD37cmdvxi53A"></img>
            </div>
            <div className='h-[100px] relative flex'>
              <div className='mt-2 mr-2'>
                <img className='rounded-full' draggable="false" alt="" height="36" width="36" src="https://yt3.ggpht.com/ytc/AOPolaS101j27Disa_BYArytv-hXMRl8wNMtqZMTkrfH=s68-c-k-c0x00ffffff-no-rj"></img>
              </div>
              <div className='grow pr-4'>
                <div className='mt-2 mb-[4px] h-[44px] w-full'><span className='capitalize text-3'>How To Maximize Performance In Your React Apps</span></div>
                <div className='flex flex-col'>
                  <div className='h-[20px] flex'>
                    <div>
                      <span className='capitalize text-[14px]'>Web Dev Simplified</span>
                    </div>
                    <div className='flex items-center'>
                      <svg viewBox="0 0 24 24" height="14" width="14" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
                    </div>
                  </div>
                  <div className='h-[20px] flex items-center capitalize text-[14px]'>
                    <div><span>42K views</span></div>
                    <div><span className='before:content-["\B7"] before:mx-[4px] before:text-center'>2 weeks ago</span></div>
                  </div>
                </div>
              </div>
              <div className='w-5 h-5 mt-2 flex justify-center absolute right-0'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
              </div>
            </div>
          </div>

          <div className='main-item hidden xl:block'>
            <div className='grow'>
              <img alt="" className="rounded-xl" src="https://i.ytimg.com/vi/Qwb-Za6cBws/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCFG6BEvy0s_usptcD37cmdvxi53A"></img>
            </div>
            <div className='h-[100px] relative flex'>
              <div className='mt-2 mr-2'>
                <img className='rounded-full' draggable="false" alt="" height="36" width="36" src="https://yt3.ggpht.com/ytc/AOPolaS101j27Disa_BYArytv-hXMRl8wNMtqZMTkrfH=s68-c-k-c0x00ffffff-no-rj"></img>
              </div>
              <div className='grow pr-4'>
                <div className='mt-2 mb-[4px] h-[44px] w-full'><span className='capitalize text-3'>How To Maximize Performance In Your React Apps</span></div>
                <div className='flex flex-col'>
                  <div className='h-[20px] flex'>
                    <div>
                      <span className='capitalize text-[14px]'>Web Dev Simplified</span>
                    </div>
                    <div className='flex items-center'>
                      <svg viewBox="0 0 24 24" height="14" width="14" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
                    </div>
                  </div>
                  <div className='h-[20px] flex items-center capitalize text-[14px]'>
                    <div><span>42K views</span></div>
                    <div><span className='before:content-["\B7"] before:mx-[4px] before:text-center'>2 weeks ago</span></div>
                  </div>
                </div>
              </div>
              <div className='w-5 h-5 mt-2 flex justify-center absolute right-0'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
              </div>
            </div>
          </div>
        </div>

        <div className='main-row'>
          <div className='main-item'>
            <div className='grow'>
              <img alt="" className="rounded-xl" src="https://i.ytimg.com/vi/Qwb-Za6cBws/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCFG6BEvy0s_usptcD37cmdvxi53A"></img>
            </div>
            <div className='h-[100px] relative flex'>
              <div className='mt-2 mr-2'>
                <img className='rounded-full' draggable="false" alt="" height="36" width="36" src="https://yt3.ggpht.com/ytc/AOPolaS101j27Disa_BYArytv-hXMRl8wNMtqZMTkrfH=s68-c-k-c0x00ffffff-no-rj"></img>
              </div>
              <div className='grow pr-4'>
                <div className='mt-2 mb-[4px] h-[44px] w-full'><span className='capitalize text-3'>How To Maximize Performance In Your React Apps</span></div>
                <div className='flex flex-col'>
                  <div className='h-[20px] flex'>
                    <div>
                      <span className='capitalize text-[14px]'>Web Dev Simplified</span>
                    </div>
                    <div className='flex items-center'>
                      <svg viewBox="0 0 24 24" height="14" width="14" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
                    </div>
                  </div>
                  <div className='h-[20px] flex items-center capitalize text-[14px]'>
                    <div><span>42K views</span></div>
                    <div><span className='before:content-["\B7"] before:mx-[4px] before:text-center'>2 weeks ago</span></div>
                  </div>
                </div>
              </div>
              <div className='w-5 h-5 mt-2 flex justify-center absolute right-0'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
              </div>
            </div>
          </div>

          <div className='main-item hidden md:block'>
            <div className='grow'>
              <img alt="" className="rounded-xl" src="https://i.ytimg.com/vi/Qwb-Za6cBws/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCFG6BEvy0s_usptcD37cmdvxi53A"></img>
            </div>
            <div className='h-[100px] relative flex'>
              <div className='mt-2 mr-2'>
                <img className='rounded-full' draggable="false" alt="" height="36" width="36" src="https://yt3.ggpht.com/ytc/AOPolaS101j27Disa_BYArytv-hXMRl8wNMtqZMTkrfH=s68-c-k-c0x00ffffff-no-rj"></img>
              </div>
              <div className='grow pr-4'>
                <div className='mt-2 mb-[4px] h-[44px] w-full'><span className='capitalize text-3'>How To Maximize Performance In Your React Apps</span></div>
                <div className='flex flex-col'>
                  <div className='h-[20px] flex'>
                    <div>
                      <span className='capitalize text-[14px]'>Web Dev Simplified</span>
                    </div>
                    <div className='flex items-center'>
                      <svg viewBox="0 0 24 24" height="14" width="14" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
                    </div>
                  </div>
                  <div className='h-[20px] flex items-center capitalize text-[14px]'>
                    <div><span>42K views</span></div>
                    <div><span className='before:content-["\B7"] before:mx-[4px] before:text-center'>2 weeks ago</span></div>
                  </div>
                </div>
              </div>
              <div className='w-5 h-5 mt-2 flex justify-center absolute right-0'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
              </div>
            </div>
          </div>

          <div className='main-item hidden lg:block'>
            <div className='grow'>
              <img alt="" className="rounded-xl" src="https://i.ytimg.com/vi/Qwb-Za6cBws/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCFG6BEvy0s_usptcD37cmdvxi53A"></img>
            </div>
            <div className='h-[100px] relative flex'>
              <div className='mt-2 mr-2'>
                <img className='rounded-full' draggable="false" alt="" height="36" width="36" src="https://yt3.ggpht.com/ytc/AOPolaS101j27Disa_BYArytv-hXMRl8wNMtqZMTkrfH=s68-c-k-c0x00ffffff-no-rj"></img>
              </div>
              <div className='grow pr-4'>
                <div className='mt-2 mb-[4px] h-[44px] w-full'><span className='capitalize text-3'>How To Maximize Performance In Your React Apps</span></div>
                <div className='flex flex-col'>
                  <div className='h-[20px] flex'>
                    <div>
                      <span className='capitalize text-[14px]'>Web Dev Simplified</span>
                    </div>
                    <div className='flex items-center'>
                      <svg viewBox="0 0 24 24" height="14" width="14" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
                    </div>
                  </div>
                  <div className='h-[20px] flex items-center capitalize text-[14px]'>
                    <div><span>42K views</span></div>
                    <div><span className='before:content-["\B7"] before:mx-[4px] before:text-center'>2 weeks ago</span></div>
                  </div>
                </div>
              </div>
              <div className='w-5 h-5 mt-2 flex justify-center absolute right-0'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
              </div>
            </div>
          </div>

          <div className='main-item hidden xl:block'>
            <div className='grow'>
              <img alt="" className="rounded-xl" src="https://i.ytimg.com/vi/Qwb-Za6cBws/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCFG6BEvy0s_usptcD37cmdvxi53A"></img>
            </div>
            <div className='h-[100px] relative flex'>
              <div className='mt-2 mr-2'>
                <img className='rounded-full' draggable="false" alt="" height="36" width="36" src="https://yt3.ggpht.com/ytc/AOPolaS101j27Disa_BYArytv-hXMRl8wNMtqZMTkrfH=s68-c-k-c0x00ffffff-no-rj"></img>
              </div>
              <div className='grow pr-4'>
                <div className='mt-2 mb-[4px] h-[44px] w-full'><span className='capitalize text-3'>How To Maximize Performance In Your React Apps</span></div>
                <div className='flex flex-col'>
                  <div className='h-[20px] flex'>
                    <div>
                      <span className='capitalize text-[14px]'>Web Dev Simplified</span>
                    </div>
                    <div className='flex items-center'>
                      <svg viewBox="0 0 24 24" height="14" width="14" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
                    </div>
                  </div>
                  <div className='h-[20px] flex items-center capitalize text-[14px]'>
                    <div><span>42K views</span></div>
                    <div><span className='before:content-["\B7"] before:mx-[4px] before:text-center'>2 weeks ago</span></div>
                  </div>
                </div>
              </div>
              <div className='w-5 h-5 mt-2 flex justify-center absolute right-0'>
                <svg viewBox="0 0 24 24" height="24" width="24" focusable="false"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
