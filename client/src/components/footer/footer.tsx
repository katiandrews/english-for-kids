import './Footer.scss';

export function Footer() {
  return (
    <footer className='main-footer'>
      <div className="footer-githubLink">
        <a href="https://github.com/katiandrews" target='_blank' rel="noreferrer">@katiandrews</a>
      </div>
      <span>Made in 2021</span>
      <a href="https://rs.school/js/">
        <img src="https://rs.school/images/rs_school_js.svg" alt="RSSchool" className="rs-logo" />
      </a>
    </footer>
  );
}
