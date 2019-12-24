<link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
const Nav = () => (
  <div className="nav-container">
    <a href="mailto:sayheytomartin@gmail.com">
      <p>email</p>
    </a>
    <a href="https://github.com/martincartledge">
      <p>github</p>
    </a>
    <a href="https://drive.google.com/file/d/1SK35-Pk7pL_pYM6JfmDSU1zQtS9c64Di/view?usp=sharing">
      <p>resume</p>
    </a>
    <style jsx>{`
        body {
          height: 100%;
          background-color: #fc4349;
          color: #000;
          font-family: 'Open Sans', sans-serif;
        }
      .nav-container {
        display: flex;
        height: -webkit-fill-available;
        justify-content: space-evenly;
        align-items: center;
      }

      a {
        text-decoration: none;
        color: #fff;
        font-size: 2rem;
        font-family: 'Open Sans', sans-serif;
      }

      a:hover {
        text-decoration: underline;
      }

      a:visited {
        color: #fff;
      }
      `}</style>
  </div>
);
  
export default Nav;