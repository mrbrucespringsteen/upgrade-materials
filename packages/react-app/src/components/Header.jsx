import React from "react";
// import { PageHeader } from "antd";

// import PageLayout from '../utils/PageLayout'

// // displays a page header

// export default function Header() {
//   return (
//     <PageHeader
//       title="Amulet Garden"
//       subTitle="Find and mint Amulets"
//     />
//   );
// }

const Header = () => {

  // console.log(window.location.pathname.split('/')[1])

  let currentPage = window.location.pathname.split('/')[1]

  return (
    <React.Fragment>
        <nav className="header">
          <div>
            <a href="/scratchpad" className={currentPage === 'scratchpad' ? 'active' : 'nav-item'}>scratchpad</a>
          </div>
          <div>
            <a href="/collection" className={currentPage === 'collection' ? 'active' : 'nav-item'}>collection</a>
          </div>
          <div>
            <a href="/material-list" className={currentPage === 'material-list' ? 'active' : 'nav-item'}>material list</a>
          </div>
          <div>
            <a href="faq" className={currentPage === 'faq' ? 'active' : 'nav-item'}>faq</a>
          </div>
        </nav>
        <div className="title" >
        <a href="/">
          <div style={{"text-align": "center"}}>
            <h1
              className="upgrade-title"
              style={{"paddingTop":"30px", "paddingBottom": "30px"}}
            >Upgrade Materials</h1>
          </div>
          </a>
          <div className="site-description">
            Upgrade Materials are NFTs that can upgrade your loot and mloot.
          </div>
        </div>
    </React.Fragment>
  )
}

export default Header