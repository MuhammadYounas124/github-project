import React from 'react';

interface HomeProps {
  setIsLoggedIn: (value: boolean) => void;
}

const Home: React.FC<HomeProps> = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className='logout-box'>
      <div>
        <h1></h1>
      </div>
      <div className='logout-box-inner'>
        The short story is that I was following just another e-commerce tutorial
        and found out that most of them are OUTDATED, so I challenged myself to
        find how to resolve the puzzle with the latest versions of everything. I
        must mention that the tutorial I am using is from 2021 so it seems that
        it is very, very old by today's standards. Those kinds of things are the
        obstacles most web developers face day after day. This will be the first
        of several mini-tutorials. Hopefully, I will share with you my advances
        in the easiest way to follow and someday finish the complete e-commerce
        web application. In this mini-tutorial, we will end with a
        react-router-dom implementation with 3 pages using Vite+React and for
        styling Antd and Bootstrap.
      </div>
      <div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;

