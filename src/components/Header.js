import React from 'react';

const Header = () => {
    const deconnecter = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("idutilisateur");
        window.location.replace("/formulaire");
    }

    if (localStorage.getItem("token") == null || localStorage.getItem("idutilisateur") == null) {
        return (
            <header style={{ backgroundColor: 'transparent' }}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="listeencheres">Enchere</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <span><a className="nav-link" href="historique">Historique</a></span>
                            </li>
                            <li className="nav-item">
                                <span><a className="nav-link" href="listeenchere">Liste des encheres</a></span>
                            </li>
                            <li className="nav-item">
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-nav">
                        <a className="nav-link" href='formulaire'> Se connecter</a>
                    </div>
                </nav>
            </header >
        );
    } else if (localStorage.getItem("token") != null && localStorage.getItem("idutilisateur") != null) {
        return (
            <header style={{ backgroundColor: 'transparent' }}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="listeencheres">Enchere</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <span><a className="nav-link" href="historique">Historique</a></span>
                            </li>
                            <li className="nav-item">
                                <span><a className="nav-link" href="listeenchere">Liste des encheres</a></span>
                            </li>
                            <li className="nav-item">
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-nav">
                        <a id="profileMenuInvoker" class="header-complex-invoker" aria-controls="profileMenu" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-target="#profileMenu" data-unfold-type="css-animation" data-unfold-duration="300" data-unfold-animation-in="fadeIn" data-unfold-animation-out="fadeOut">

                            <span class="mr-md-2 avatar-placeholder">U</span>
                            <span class="d-none d-md-block">Utilisateur</span>
                        </a>
                        <a className="nav-link" onClick={deconnecter}> Deconnexion</a>
                    </div>
                </nav>
            </header >
        );
    }
}

export default Header;
