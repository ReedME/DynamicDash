/**
 * Agency Menu
 */
import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import $ from 'jquery';
import Drawer from '@material-ui/core/Drawer';
import { withRouter } from 'react-router-dom';

//Intl Meassages
import IntlMessages from 'Util/IntlMessages';

import navLinks from './NavLinks';
import NavMenuItem from './NavMenuItem';
import Sidebar from 'Components/Sidebar';

//Component
import SearchForm from 'Components/Header/SearchForm';
import MobileSearchForm from 'Components/Header/MobileSearchForm';

class AgencyMenu extends Component {

   state = {
      isMobileSearchFormVisible: false,
      mobileMenu: false
   }

   componentDidMount() {
      $('.agency-menu .nav > .nav-item').children().click(function (e) {
         $(this).parent().addClass('nav-item-active');
         if ($('.agency-menu .nav > .nav-item').hasClass('nav-item-active')) {
            $('.agency-menu .nav > .nav-item').removeClass('nav-item-active');
            $(this).parent().addClass('nav-item-active');
         }
      });
      $('.agency-menu .nav .nav-item .active').parents('.agency-menu .nav > .nav-item').addClass('nav-item-active');
   }

   // mobile search form
   openMobileSearchForm() {
      this.setState({ isMobileSearchFormVisible: true });
   }

   render() {
      const { isMobileSearchFormVisible, mobileMenu } = this.state;
      return (
         <div className="horizontal-menu agency-menu justify-content-between align-items-center">
            <ul className="list-unstyled nav">
               <li className="nav-item">
                  <a href="javascript:void(0);" className="nav-link">
                     <i className="ti-home"></i>
                     <span className="menu-title"><IntlMessages id="sidebar.general" /></span>
                     <span className="arrow-icon"></span>
                  </a>
                  <ul className="list-unstyled sub-menu">
                     {navLinks.category1.map((menu, key) => (
                        <NavMenuItem
                           menu={menu}
                           key={key}
                        />
                     ))}
                  </ul>
               </li>
               <li className="nav-item">
                  <a href="javascript:void(0);" className="nav-link">
                     <i className="ti-package"></i>
                     <span className="menu-title"><IntlMessages id="sidebar.modules" /></span>
                  </a>
                  <ul className="list-unstyled sub-menu">
                     {navLinks.category2.map((menu, key) => (
                        <NavMenuItem
                           menu={menu}
                           key={key}
                        />
                     ))}
                  </ul>
               </li>
               <li className="nav-item">
                  <a href="javascript:void(0);" className="nav-link">
                     <i className="ti-panel"></i>
                     <span className="menu-title"><IntlMessages id="sidebar.component" /></span>
                  </a>
                  <ul className="list-unstyled sub-menu">
                     {navLinks.category3.map((menu, key) => (
                        <NavMenuItem
                           menu={menu}
                           key={key}
                        />
                     ))}
                  </ul>
               </li>
               <li className="nav-item">
                  <a href="javascript:void(0);" className="nav-link">
                     <i className="ti-world"></i>
                     <span className="menu-title"><IntlMessages id="sidebar.features" /></span>
                  </a>
                  <ul className="list-unstyled sub-menu">
                     {navLinks.category4.map((menu, key) => (
                        <NavMenuItem
                           menu={menu}
                           key={key}
                        />
                     ))}
                  </ul>
               </li>
               <li className="nav-item">
                  <a href="javascript:void(0);" className="nav-link">
                     <i className="ti-agenda"></i>
                     <span className="menu-title"><IntlMessages id="sidebar.applications" /></span>
                  </a>
                  <ul className="list-unstyled sub-menu">
                     {navLinks.category5.map((menu, key) => (
                        <NavMenuItem
                           menu={menu}
                           key={key}
                        />
                     ))}
                  </ul>
               </li>
            </ul>
            <IconButton className="hamburger-icon" color="inherit" aria-label="Menu" onClick={() => this.setState({ mobileMenu: true })}>
               <MenuIcon />
            </IconButton>
            <div className="search-icon">
               <SearchForm />
               <IconButton mini="true" className="search-icon-btn" onClick={() => this.openMobileSearchForm()}>
                  <i className="zmdi zmdi-search"></i>
               </IconButton>
               <MobileSearchForm
                  isOpen={isMobileSearchFormVisible}
                  onClose={() => this.setState({ isMobileSearchFormVisible: false })}
               />
               <Drawer open={mobileMenu} onClose={() => this.setState({ mobileMenu: false })}>
                  <Sidebar agencySidebar />
               </Drawer>
            </div>
         </div>
      );
   }
}
export default withRouter(AgencyMenu);