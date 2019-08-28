import React from 'react';

export class Footer extends React.Component {

    render() {
        return (
            <div style={{position:'fixed',left:'0',bottom:'0',width:'100%'}}>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                    <footer class="footer text-light">&copy; Copyright RBS</footer>     
                    {/* <marquee class="text-light">This project is made and maintained by Royal Bank of Scotland Pvt. Ltd.</marquee>    */}
                </nav>            

            </div>
        );
    }
}


export default Footer;