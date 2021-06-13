import './App.css';
import dashe from "./dashe.png"

function Content() {
    return <div className="content">
        <div className="first">
            <h1>EXPÉRIENCES PROFESSIONNELLES</h1>
            <img src={dashe} alt="the dashe" className="dashes" />
            <h3>Pilote dans la Nomenclature Etude</h3>
            <p className="para">MG2 Engineering / Data Management</p>
            <p>02/2019 - Present,</p>
            <ul>
                <li>
                    Rattaché opérationnellement au responsable planning
                    projet et le soutient dans la mise en place et le pilotage
                    de la configuration sur le projet chaine de traction.
                </li>
                <li>
                    Construire les nomenclatures de conception, pour les
                    différents stades du développement de projets.
                </li>
            </ul>
            <h3>
                Projet d’étude-Développement d'une
                application de gestion à l'aide de Visual
                Basic for Application, sous Excel
            </h3>
            <p className="para">MG2 Engineering / Data Management</p>
            <p>01/2020 - 06/2020,</p>
            <ul>
                <li>
                    Le suivi opérationnel à l'aide d'un tableau de bord
                    permettant de comparer l'avancement réel du projet par
                    rapport aux prévisions.
                </li>
                <li>
                    L'automatisation des reporting, disponibles en temps
                    réel.
                </li>
                <li>
                    Le partage de l'information entre les collaborateurs,
                    permettant une meilleure synchronisation des acteurs.
                </li>
            </ul>
        </div>
        <img src={dashe} alt="the dashe" className="dashe" />
        <div className="second">
            <h1>PROJETS PERSONNELS</h1>
            <img src={dashe} alt="the dashe" className="dashes" />
            <h3>Développement d'une Todo list en JavaScript</h3>
            <p>01/2021 - 02/2021</p>
            <ul>
                <li>Gérer et afficher différents elements en fonction de leur état.</li>
                <li>Créer, récupérer, modifier et supprimer des objets en JavaScript.</li>
                <li>
                    Mise en place de la permanence de data localement en
                    explorant localStorage.
                </li>
            </ul>
            <h3>Développement d'une Calculatrice en JavaScript</h3>
            <p>01/2021 - 02/2021</p>
            <ul>
                <li>Mise en place de la CSS avec Grid.</li>
                <li>Récupérer le DOM, utilisation de la fonction map().</li>
                <li>
                    Evaluer du code JavaScript représenté sous forme d'une chaîne
                    de caractères avec la fonction eval().
                </li>
            </ul>
            <h3>Création d'un Tic Tac Toe en JavaScript</h3>
            <p>01/2021 - 02/2021</p>
            <ul>
                <li>Ecouter récupérer des données utilisateurs avec les événements.</li>
                <li>Outil de base pour parcourir et manipuler les tableaux.</li>
            </ul>
        </div>
    </div>
}

export default Content;

