import React from 'react';

export class Footer extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <footer className="footer text-light">&copy; Copyright RBS</footer>     
                    {/* <marquee className="text-light">This project is made and maintained by Royal Bank of Scotland Pvt. Ltd.</marquee>    */}
                </nav>            

            </div>
        );
    }
}


export default Footer;