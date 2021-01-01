import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    margin-top: 5%;
`

function Footer() {
    return (
        <Main>
            <footer class="page-footer">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">Contact Us</h5>
                            <p class="grey-text text-lighten-4">H-56, Phase-III, Ashok Vihar, Delhi-11035</p>
                            <p class="grey-text text-lighten-4"> admin_shopping.contact@gmail.com </p>
                            <p class="grey-text text-lighten-4"> 98XX789X56 </p>

                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text">Links</h5>
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="/">Instagram</a></li>
                                <li><a class="grey-text text-lighten-3" href="/">Facebook</a></li>
                                <li><a class="grey-text text-lighten-3" href="/">Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © 2020 Copyright Shopping & Co.
            {/* <a class="grey-text text-lighten-4 right" href="#!">More Links</a> */}
                    </div>
                </div>
            </footer>
        </Main>
    )
}

export default Footer;