import React, { useState } from "react";
import './assets/images/favicon.ico';
import './assets/css/graindashboard.css';
import Link from "../route/route";


const Formulaire = () => {
    // Email et mot de passe +link
    const [email, setEmail] = useState('Poseidon');
    const [password, setPassword] = useState('Poseidon');
    const [errorMessage, setErrorMessage] = useState("");

    const link = Link.getUseLink();

    const login = (event) => {
        event.preventDefault();
        console.log('boss');
        const utilisateur = {
            "email": email,
            "mdp": password
        }
        fetch(link + 'users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // body: utilisateur
            body: JSON.stringify(utilisateur)
        })
            .then(response => {
                if (!response.ok) {
                    setErrorMessage('Email ou mot de passe incorrect');
                    alert(errorMessage);
                    throw Error(response.statusText);

                }
                return response.json();
            })
            .then(data => {
                if (data == null) {
                    setErrorMessage('Email ou mot de passe incorrect');
                    alert(errorMessage);
                } else {
                    // alert(data.idutilisateur.nom);
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("idutilisateur", data.idutilisateur.id);
                    window.location.replace('/listeenchere');
                }
            })
            .catch(errorMessage => console.log(errorMessage));
    };

    return (
        <div class="content">
            <div class="container-fluid pb-5">
                <div class="row justify-content-md-center">
                    <div class="card-wrapper col-12 col-md-4 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Connexion</h4>
                                <form onSubmit={login}>
                                    <div class="form-group">
                                        <input id="email" type="mail" name="email" class="form-control" value={email} placeholder="Votre email" onChange={(event) => setEmail(event.target.value)} ></input>
                                    </div>
                                    <div class="form-group">
                                        <input id="mdp" type="password" name="mdp" class="form-control" value={password} placeholder="Votre mot de passe" onChange={(event) => setPassword(event.target.value)} ></input>
                                    </div>
                                    <div class="form-group">

                                    </div>
                                    <div class="form-group no-margin">
                                        <button type="submit" class="btn btn-primary btn-block">Se connecter</button>
                                    </div>


                                </form>
                            </div>
                        </div>
                        <footer class="footer mt-3">
                            <div class="container-fluid">
                                <div class="footer-content text-center small">
                                    <span class="text-muted"><a className="nav-link" href="listeenchere">Liste des encheres</a></span>
                                    <span class="text-muted">Projet enchere</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Formulaire;