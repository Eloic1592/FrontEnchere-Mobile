import React, { } from "react";
import './assets/images/favicon.ico';
import './assets/css/graindashboard.css';
import Header from "./Header";
import Footer from "./Footer";
import Champ from "./Champ";
import useData from "../route/useData";
import Link from "../route/route";

const Historique = () => {

    const link = Link.getUseLink();
    const idutilisateur = JSON.stringify(localStorage.getItem('idutilisateur'));
    const historique = useData(link + "encheres/" + idutilisateur);
    const listecategorie = useData(link + "categorieproduit");

    if (localStorage.getItem("token") == null || localStorage.getItem("idutilisateur") == null) {
        alert("vous devez vous connecter!");
        window.location.replace("/formulaire");

    } else if (localStorage.getItem("token") != null && localStorage.getItem("idutilisateur") != null) {
        return <div>
            <Header></Header>
            <div class="content">
                <div class="py-4 px-3 px-md-4">
                    <div class="card mb-3 mb-md-4">

                        <div class="card-body">
                            <nav class="d-none d-md-block" aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="historique">Historique des encheres</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">Historique</li>
                                </ol>
                            </nav>

                            <div class="mb-3 mb-md-4 d-flex justify-content-between">
                                <div class="h3 mb-0">Encheres</div>
                            </div>
                            <div>
                                <form>
                                    <div class="form-row">
                                        <div class="form-row">
                                            <div class="form-group col-2 col-md-2">
                                                <Champ label="Nom du produit" type="text" name="nom" placeholder="Nom du produit"></Champ>

                                            </div>
                                            <div class="form-group col-3 col-md-2">
                                                <label for="email">Categorie</label>
                                                <select class="form-control" name="categorie">
                                                    {listecategorie.map(item => (
                                                        <option value={item.idcategorieproduit}>{item.categorie}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div class="form-group col-2 col-md-2">
                                                <Champ label="Date" type="date" name="date" placeholder="date"></Champ>
                                            </div>
                                            <div class="form-group col-3 col-md-2">

                                                <Champ label="Prix de vente" type="number" name="prix" placeholder="prix"></Champ>
                                            </div>
                                            <div class="form-group col-2 col-md-2">
                                                <label for="email">Statut</label>
                                                <select class="form-control" name="statut">
                                                    <option value="0">En cours</option>
                                                    <option value="1">Fini</option>
                                                </select>
                                            </div>

                                            <input type="submit" class="btn btn-primary " value="Rechercher" />
                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div class="table-responsive-xl">
                                <table class="table text-nowrap mb-0">
                                    <thead>
                                        <tr>
                                            <th class="font-weight-semi-bold border-top-0 py-2">Identifiant</th>
                                            <th class="font-weight-semi-bold border-top-0 py-2">Nom du produit</th>
                                            <th class="font-weight-semi-bold border-top-0 py-2">Prix de vente</th>
                                            <th class="font-weight-semi-bold border-top-0 py-2">Date de mise en vente</th>
                                            <th class="font-weight-semi-bold border-top-0 py-2">fin de la mise en vente</th>
                                            <th class="font-weight-semi-bold border-top-0 py-2">Status</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {historique.map(item => (
                                            <tr>
                                                <td class="py-3">
                                                    <span class="avatar-placeholder mr-md-2">{item.idutilisateur}</span></td>
                                                <td class="align-middle py-3">
                                                    <div class="d-flex align-items-center">
                                                        <div class="position-relative mr-2">

                                                        </div>

                                                        <a href={`/ficheenchere/${item.idenchere}`}>{item.description}</a>
                                                    </div>
                                                </td>
                                                <td class="py-3">{item.prixminimumvente} Ariary</td>
                                                <td class="py-3">{item.dateheureenchere}</td>
                                                <td class="py-3">{item.datefin}</td>
                                                <td class="py-3">
                                                    <span class="badge badge-pill badge-success">{item.etatenchere}</span>
                                                </td>

                                            </tr >
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div ></div >
    }
}

export default Historique;