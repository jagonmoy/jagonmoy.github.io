import * as React from 'react';

import SocialLinks from './components/SocialLinks';
import TabNavigation from './components/TabNavigation';

const NavBar = () => {
  return (
    <div className="pb-12">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="flex justify-between">
          <TabNavigation />
          <div className="lg:hidden">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
