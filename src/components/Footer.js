import React from 'react';

const Footer = () => {
    return (
        <footer class="small p-3 px-md-4 mt-auto">
            <div class="row justify-content-between">
                <div class="col-lg text-center text-lg-left mb-3 mb-lg-0">
                    <ul class="list-dot list-inline mb-0">
                        <li class="list-dot-item list-dot-item-not list-inline-item mr-lg-2">Questions</li>
                        <li class="list-dot-item list-inline-item mr-lg-2">Support</li>
                        <li class="list-dot-item list-inline-item mr-lg-2">Contacter-nous</li>
                    </ul>
                </div>

                <div class="col-lg text-center mb-3 mb-lg-0">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item mx-2"><i class="gd-twitter-alt"></i></li>
                        <li class="list-inline-item mx-2"><i class="gd-facebook"></i></li>
                        <li class="list-inline-item mx-2"><i class="gd-github"></i></li>
                    </ul>
                </div>

                <div class="col-lg text-center text-lg-right">
                    &copy; Project Enchere
                </div>
            </div>
        </footer>
    );
};

export default Footer;