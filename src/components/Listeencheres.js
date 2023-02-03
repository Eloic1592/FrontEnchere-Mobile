import React, { useState } from "react";
import './assets/images/favicon.ico';
import './assets/css/graindashboard.css';
import Header from "./Header";
import Footer from "./Footer";
import Champ from "./Champ";
import useData from "../route/useData";
import Link from "../route/route";

const Listeencheres = () => {

    const [nomproduit, setNomproduit] = useState("");
    const [idcategorie, setIdcategorie] = useState("");
    const [date, setDate] = useState("");
    const [prixvente, setPrixvente] = useState("");
    const [statut, setStatut] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const rechercher = () => {
        const detailsenchere = {
            "nomproduit": nomproduit,
            "idcategorieproduit": idcategorie,
            "dateheureenchere": date,
            "prixminimumvente": prixvente
        }


    }
    const link = Link.getUseLink();
    const listeencheres = useData(link + "encheres");

    const listecategorie = useData(link + "categorieproduit");

    return (<div>
        <Header></Header>
        <div class="content">
            <div class="py-4 px-3 px-md-4">
                <div class="card mb-3 mb-md-4">

                    <div class="card-body">
                        <nav class="d-none d-md-block" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="listeenchere">Liste des encheres</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Encheres</li>
                            </ol>
                        </nav>

                        <div class="mb-3 mb-md-4 d-flex justify-content-between">
                            <div class="h3 mb-0">Encheres</div>
                        </div>
                        <div>
                            <form onSubmit={rechercher}>
                                <div class="form-row">
                                    <div class="form-row">
                                        <div class="form-group col-2 col-md-2">
                                            <Champ label="Nom du produit" type="text" name="nom" placeholder="Nom du produit" value={nomproduit} onchange={(event) => setNomproduit(event.target.value)}></Champ>
                                        </div>
                                        <div class="form-group col-3 col-md-2">
                                            <label for="email">Categorie</label>
                                            <select class="form-control" name="categorie" value={idcategorie} onchange={(event) => setIdcategorie(event.target.value)}>
                                                {listecategorie.map(item => (
                                                    <option value={item.idcategorieproduit}>{item.categorie}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div class="form-group col-2 col-md-2">
                                            <Champ label="Date" type="date" name="date" placeholder="date" value={date} onchange={(event) => setDate(event.target.value)}></Champ>
                                        </div>
                                        <div class="form-group col-3 col-md-2">
                                            <Champ label="Prix de vente" type="number" name="prix" placeholder="prix" value={prixvente} onchange={(event) => setPrixvente(event.target.value)}></Champ>
                                        </div>
                                        <div class="form-group col-2 col-md-2">
                                            <label for="email">Statut</label>
                                            <select class="form-control" name="statut" value={statut} onchange={(event) => setStatut(event.target.value)}>
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
                                        <th class="font-weight-semi-bold border-top-0 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listeencheres.map(item => (
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
                                            {item.etatenchere != 'fini' ?
                                                < td class="py-3">
                                                    <div class="position-relative">
                                                        <a class="link-dark d-inline-block" href={`/ficheenchere/${item.idenchere}`}>
                                                            <i class="gd-money icon-text"></i>
                                                            Surencherir
                                                        </a>
                                                    </div>
                                                </td> : ''
                                            }
                                        </tr >
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div >
        </div ></div >
    );
}
export default Listeencheres;