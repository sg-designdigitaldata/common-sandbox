
const Footer = () => {
    return (
    <footer className="ds_site-footer">
        <div className="ds_wrapper">
            <div className="ds_site-footer__content">
                <ul className="ds_site-footer__site-items">
                    <li className="ds_site-items__item">
                        <a href="#">Privacy</a>
                    </li>
                    <li className="ds_site-items__item">
                        <a href="#">Cookies</a>
                    </li>
                    <li className="ds_site-items__item">
                        <a href="#">Accessibility</a>
                    </li>
                </ul>

                <div className="ds_site-footer__copyright">
                    <a className="ds_site-footer__copyright-logo" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">
                        <img src="/assets/images/ogl.svg" alt="Open Government License" />
                    </a>
                    <p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open Government Licence v3.0</a>, except for graphic assets and where otherwise stated</p>
                    <p>&copy; Crown Copyright</p>
                </div>

                <div className="ds_site-footer__org">
                    <a className="ds_site-footer__org-link" title="The Scottish Government" href="https://www.gov.scot/">
                        <img className="ds_site-footer__org-logo" src="/assets/images/scottish-government--min.svg" alt="gov.scot" loading="lazy" width="300" height="55" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
    )}

export default Footer;