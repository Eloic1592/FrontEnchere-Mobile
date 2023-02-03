import React, { useState } from "react";
import './assets/images/favicon.ico';
import './assets/css/graindashboard.css';
import Header from "./Header";
import Footer from "./Footer";
import Champ from "./Champ";
import { useParams } from 'react-router-dom';
import useData from "../route/useData";
import Link from "../route/route";

const Ficheenchere = () => {
    // Recupere l'id dans l'URL
    const { idenchere } = useParams();

    // Constante localhost
    const link = Link.getUseLink();

    const ficheenchere = useData(link + "fichesenchere/" + idenchere);

    // Valeur du formulaire
    const [montant_offre, setMontant_offre] = useState("");
    const [iden] = useState(idenchere);
    const [errorMessage, setErrorMessage] = useState("");

    const rencherir = (event) => {
        event.preventDefault();
        if (localStorage.getItem("token") == null || localStorage.getItem("idutilisateur") == null) {
            alert("vous devez vous connecter!");
            window.location.replace("/formulaire");
        }
        else if (localStorage.getItem("token") != null && localStorage.getItem("idutilisateur") != null) {
            const surenchere = {
                "idenchere": iden,
                "idutilisateur": localStorage.getItem("idutilisateur"),
                "montantOffre": montant_offre
            }
            fetch(link + 'surenchere', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(surenchere)
            })
                .then(response => {
                    if (!response.ok) {
                        setErrorMessage('Votre mise n\'a pas ete valide');
                        throw Error(response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    if (data == null) {
                        setErrorMessage('Votre mise n\'a pas ete valide');
                        alert(errorMessage);
                    } else {
                        alert("Votre mise a bien ete enregistree!");
                        window.location.replace('/listeenchere');
                    }
                })

        }
    };

    return <div>
        <Header></Header>
        <div class="content">
            <div class="py-4 px-3 px-md-4">
                <div class="card mb-3 mb-md-4">

                    <div class="card-body">
                        <nav class="d-none d-md-block" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Produit</li>
                            </ol>
                        </nav>

                        <div class="mb-3 mb-md-4 d-flex justify-content-between">
                            <h1 class="h3 mb-3 mb-md-4">Fiche de l'encheres</h1>
                        </div>
                        <div>

                        </div>
                        <div class="table-responsive-xl">
                            {ficheenchere && (
                                <form onSubmit={rencherir}>
                                    <div class="form-group">
                                        <Champ label="" type="hidden" name="idenchere" value={iden}></Champ>
                                        <Champ label="Nom du produit" type="text" name="produit" placeholder="Nom du produit" value={ficheenchere.nomproduit} readonly></Champ>
                                    </div>



                                    <div id="lipsum">
                                        <p>
                                            Description de l'objet a
                                            vendre: {ficheenchere.description}
                                        </p>
                                        <p>
                                            Description de l'enchere: {ficheenchere.descriptionenchere}
                                        </p>
                                        <p>
                                            Duree: {ficheenchere.duree} heures
                                        </p>
                                        <p>
                                            Debut: {ficheenchere.dateheureenchere}
                                        </p>
                                        <p>
                                            Fin: {ficheenchere.datefin}
                                        </p>
                                    </div>
                                    <div class="form-group">
                                        <Champ label="Prix actuel" type="number" name="prixactuel" placeholder="Prix actuel" value={ficheenchere.prixminimumvente}></Champ>
                                    </div>

                                    <div class="form-group">
                                        <Champ label="Prix mise" type="number" name="prixmise" placeholder="Votre nouvelle mise" min={ficheenchere.prixminimumvente + 1} value={montant_offre} onchange={(event) => setMontant_offre(event.target.value)}></Champ>
                                    </div>

                                    < div class="form-group no-margin" >
                                        <button type="submit" class="btn btn-primary btn-block">Rencherir sur cet objet</button>
                                    </div>

                                </form>
                            )}
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div ></div >
}
export default Ficheenchere;