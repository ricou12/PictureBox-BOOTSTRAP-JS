/**
 * Tableau de données
 */

// ****************************************************************************
// Déclaration des tableaux
// ****************************************************************************
// Structure n°1:    var nom_tableau = [valeur1,valeur2,...]; 
// Structure n°2:    var nom_objet = {nom_d'identificateur : sa_valeur , nom_autre_identificateur : sa_valeur , ... };
// fusion des 2 methodes:
// Structure n°3:    var nom_du _tableau = [  {nom_d'identificateur : sa_valeur  , nom_autre_identificateur : sa_valeur , ... } , {nom_d'identificateur : sa_valeur  , nom_autre_identificateur : sa_valeur , ... } ]; 

// ****************************************************************************
// Acces aux données des tableaux et objet
// ****************************************************************************
// Acceder aux valeurs contenues dans les tableaux.
// Structure n°1:
//          Methode n°1
//               nom_tableau[0]  renvoi valeur1 
//               nom_tableau[1]  renvoi valeur2  etc...
//          Methode n°2  éffectuer une boucle par incrémentation:
//               for( i=0 ; i < nom_tableau.lenght ; i++){ nom_tableau[i] }
// ****************************************************************************
// ****************************************************************************

// mini base de donnée sous forme d'un tableau à 2 dimensions.
var myDataBase = [{
        'identifiant': 'paris',
        'titre': 'Paris',
        'commentaires': "<blockquote>Paris, capitale de la France, est une grande ville européenne et un centre mondial de l'art, de la mode, de la gastronomie et de la culture. Son paysage urbain du XIXe siècle est traversé par de larges boulevards et la Seine. Outre les monuments comme la tour Eiffel et la cathédrale gothique Notre-Dame du XIIe siècle, la ville est réputée pour ses cafés et ses boutiques de luxe bordant la rue du Faubourg-Saint-Honoré.</blockquote>",
        'dossier_photo': 'img/paris/',
        'files': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg'],
    },
    {
        'identifiant': 'venise',
        'titre': 'Venise la « Cité des Eaux »',
        'commentaires': "<blockquote>Venise (italien : Venezia /veˈnɛtʦja/, vénitien : Venexia /veˈnɛˑsja/) est une ville portuaire du nord-est de l'Italie, sur les rives de la mer Adriatique. Elle s'étend sur un ensemble de 121 petites îles séparées par un réseau de canaux et reliées par 435 ponts. Située au large de la lagune vénète, entre les estuaires du Pô et du Piave, Venise est renommée pour cette particularité, ainsi que pour son architecture et son patrimoine culturel — elle et sa lagune sont inscrites au patrimoine mondial de l'UNESCO.<br><br>Venise est la capitale de la région de la Vénétie. En 2012, la commune compte 269 810 habitants, dont 58 666 intra-muros (Centro storico). 176 000 résident sur les rives (Terraferma), pour la plupart dans les frazioni de Mestre et Marghera, et les 31 000 habitants restants résident dans d'autres îles de la lagune. Avec Padoue et Trévise, Venise constitue l'aire métropolitaine Padoue-Trévise-Venise (PATREVE), une entité statistique de 1 600 000 habitants.<br><br>Fondée peu après 528, elle fut la capitale pendant onze siècles (697-1797) de la République de Venise. Durant le Moyen Âge et la Renaissance, la ville fut une grande puissance maritime, à l'origine de la Quatrième croisade et victorieuse lors de la bataille de Lépante en 1571 contre l'Empire ottoman. Grâce à ses liens avec l'Asie et le Proche-Orient, dont le marchand et explorateur Marco Polo fut l'initiateur, elle devint également l'une des principales places commerciales d'Europe, notamment de la soie, des céréales et des épices. Enfin, elle est un centre culturel majeur, du XIIIe à la fin du XVIIe siècle, dont les peintres de l’École vénitienne (dont Titien, Véronèse et le Tintoret), Carlo Goldoni et Antonio Vivaldi sont les principaux représentants.</blockquote>",
        'dossier_photo': 'img/venise/',
        'files': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg'],
    },
    {
        'identifiant': 'montreal',
        'titre': 'Montreal',
        'commentaires': "<blockquote>Montréal est la deuxième ville la plus peuplée du Canada. Elle se situe principalement sur l’île fluviale de Montréal, sur le fleuve Saint-Laurent (entre Québec et le lac Ontario) dans le Sud du Québec.<br><br> En 2016, la ville comptait 1 704 694 habitants et son aire urbaine(appelée Région métropolitaine de Montréal) plus de 4 millions, soit environ la moitié de la population du Québec.Montréal est ainsi la 19e agglomération la plus peuplée d'Amérique du Nord et la 122e ville la plus peuplée du monde.<br><br> Ville francophone la plus peuplée d'Amérique, Montréal est considérée comme ayant la deuxième population francophone au monde après Paris. D'après le recensement de 2016, 53, 4 % de la population de Montréal était de langue maternelle française, 15, 1 % était de langue anglaise et 36, 8 % était de langues tierces, ce qui fait d'elle l'une des villes les plus cosmopolites du monde.<br><br> Montréal est le 3e plus grand centre financier d'Amérique du Nord et le 12e au monde. Coeur économique du Québec, Montréal est aussi la seconde place financière du Canada et possède une économie fortement diversifiée par le commerce, l’éducation, les technologies de l'information et les industries aérospatiale, pharmaceutique, du tourisme et du cinéma.La ville est la 3e en importance dans l'industrie mondiale du jeu vidéo. Classée ville mondiale en 2012, Montréal est la deuxième ville consulaire d'Amérique du Nord, abrite le siège de l'Organisation de l'aviation civile internationale et est le siège de plus de 65 organisations internationales gouvernementales et non gouvernementales, ce qui fait d'elle la 3e ville en importance en Amérique du Nord pour ce qui est du nombre de sièges sociaux d'organisations internationales, derrière New York et Washington.De plus, la ville est la première d'Amérique du Nord pour le nombre de congrès internationaux. En 2017, Montréal est consacrée « meilleure ville étudiante » au monde et est considérée comme la « Métropole universitaire du Canada, avec six universités et 450 centres de recherche ».</blockquote>",
        'dossier_photo': 'img/montreal/',
        'files': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg'],
    },
    {
        'identifiant': 'munich',
        'titre': 'Munich',
        'commentaires': "<blockquote>Munich, capitale de la Bavière, abrite des bâtiments plusieurs fois centenaires et de nombreux musées. La ville est connue pour son Oktoberfest, une fête annuelle, et ses brasseries, dont la célèbre Hofbräuhaus, fondée en 1589. Dans l'Altstadt(vieille ville), la place centrale Marienplatz est cernée de monuments tels que le nouvel hôtel de ville, de style néo- gothique, orné d'un glockenspiel, attraction populaire qui sonne et s'anime avec des automates rejouant des scènes du XVIe siècle.</blockquote>",
        'dossier_photo': 'img/munich/',
        'files': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg'],
    },
    {
        'identifiant': 'harrisonSmith',
        'titre': 'Le jardin botanique de Papeari (Tahiti)',
        'commentaires': "<blockquote>Si Papeari est renommé pour ses fleurs et son jardin botanique, c’est en grande partie grâce à un américain, Harrison Willard Smith (1872 1947), passionné par la botanique, que les Tahitiens appelaient « le grand-père des arbres ».<br><br>L’américain Harrison Willard Smith arrive à Tahiti en 1919, à l’âge de 37 ans, où il savait d’une précédente visite, qu’il trouverait à Papeari un sol et un climat idéal pour créer le jardin tropical dont il rêvait. Il acheta, de 1920 à 1925, les propriétés sur lesquelles il devait créer le domaine de Motu-Ovini (l’îlot sauvage) de 137 hectares où il planta petit à petit des centaines de variétés de fleurs et d’arbres exotiques qu’il faisait venir à grands frais et avec bien des difficultés des régions tropicales d’Amérique, d’Asie et d’Afrique. Un grand nombre des arbres et des plantes de ce jardin botanique sont utilitaires et ont été introduits par Harrison Smith.</blockquote>",
        'dossier_photo': 'img/HarrisonSmith/',
        'files': ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG', '6.JPG', '7.JPG', '8.JPG', '9.JPG', '10.JPG', '11.JPG', '12.JPG', '13.JPG', '14.JPG', '15.JPG', '16.JPG', '17.JPG', '18.JPG', '19.JPG'],
    },
    {
        'identifiant': 'moorea',
        'titre': 'Moorea',
        'commentaires': "<blockquote>Située à 17 kilomètres à l'ouest-nord-ouest de Tahiti, Mo'orea en est séparée par un profond chenal dépassant par endroits les 1 500 mètres. De forme triangulaire, « l'île sœur » de Tahiti possède deux baies principales : la baie d'Ōpūnohu (ce nom vient des mots tahitiens 'ōpū : le ventre et nohu : le poisson-pierre) et la baie de Cook (du nom du célèbre navigateur James Cook).<br><br>Elle est entourée par une barrière de corail ouverte sur l'océan Pacifique en 12 passes. Le lagon est classé comme zone humide d'importance internationale au titre de la convention de Ramsar.<br><br>D'une superficie de 133,50 km2, elle compte plus de 16 000 habitants regroupés dans plusieurs villages, principalement sur le littoral : Te'avaro, Maharepa, Paopao, Papeto'ai, Ha'apiti, 'Āfareaitu, Ti'ai'a et Vai'are.<br><br>Elle compte 8 montagnes, en partant du point culminant de l'île : le mont Tohiea (1207 m), le mont Rōtui (899 m), Mou'a roa (880 m), Mou'a puta (830 m), le mont Tearai (770 m), le mont Tautuapae (769 m), le mont Fairurani (741 m) et le mont Matotea (714 m).<br><br>Mou'a puta, comme son nom l'indique (mou'a:montagne, puta: percée) a la curieuse particularité de présenter un large trou en son milieu. La légende raconte que c'est Pai1 qui, avec sa lance, a percé cette montagne. </blockquote>",
        'dossier_photo': 'img/moorea/',
        'files': ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG', '6.JPG', '7.JPG', '8.JPG', '9.JPG', '10.JPG', '11.JPG', '12.JPG', '13.JPG', '14.JPG', '15.JPG', '16.JPG', '17.JPG', '18.JPG', '19.JPG', '20.JPG', '21.JPG', '22.JPG'],
    },
];

/** ************************************************************************************************************
 *                                               S'EXCUTE AU CHARGEMENT DE LA PAGE
 ************************************************************************************************************ */

/** ***************************************************************************************
 *                            ID DE  BALISE HTML
 **************************************************************************************** */
// Stocke dans des constantes, les ID de balise,
// on pourra modifier, créer, supprimer des balises au niveau du fichier HTML via le DOM.
const $vignettesContainer = document.getElementById("containerImg");
const $boxZoom = document.getElementById("boxZoom");
/** ************************************************************************************* */

// Charge le premier album photo par default.
setAlbum('venise');

/** ***************************************************************************************
 *                            DECLARATION DE NOS PROCEDURES
 **************************************************************************************** */
// Le role de ce script (ensemble de fonction) est:
// De recuperer une valeur d'attribut stocké ds une balise puis de la comparer à celle qui sont stocké dans la base de donnée.
// une fois trouvé on aura acces au autres informations stocke dans la base.


/** ***************************************************************************************
 *                                     CATALOGUE                        
 **************************************************************************************** */
// EVENEMENT CLICK SUR UN BOUTON DU CATALOGUE
function infoCatalogue() {
    // Récupere l'ensemble des attributs de la balise pour les stocker dans une variable objet.
    var ProprietesBalise = event.target;
    // Extrait l'attibut identifiant et donc sa  valeur (bouton catalogue),
    //  pour la comparer à celle de la base de donnée.
    var albumName = ProprietesBalise.getAttribute("identifiant");
    setAlbum(albumName);
}

// Récupère l'appel et extrait la valeur de l'attribut "identifiant" (définit dans la balise ayant reçu le focus).
// Puis transmet la valeur extraite à la fonction getAlbum().
function setAlbum(albumName) {
    var album = getAlbum(albumName);

    if (album != null) {
        // CREER LES VIGNETTES
        const newHTML = createVignettesNewHTML(album);
        updateVignettesContainerHTML(newHTML);

        // CREER LES BALISES DANS LE CONTENEUR (BOX TITRE, PHOTO, COMMENTAIRES)
        setImgInternal(album.dossier_photo + album.files[0], album.titre, album.commentaires);
    }
}

// Récupère la valeur pour la comparer a celle du tableau definit en haut de script.
function getAlbum(attributBalise) {
    // Parcours le tableau.
    for (var i = 0; i < myDataBase.length; i++) {
        // compare l'identifiant balise avec l'identifiant base de donnée.
        if (myDataBase[i].identifiant == attributBalise) {
            // Bingo l'identifiant balise est = à l'identifiant base de donnée.
            return myDataBase[i];
        }
    }
    return null;
}

/** ********************************************************************************
 *                        CREER LES VIGNETTES
 ********************************************************************************* */
function createVignettesNewHTML(album) {
    // Initialise une nouvelle variable.
    let newHTML = "";
    // Parcours le sous-tableau contenant les noms de fichiers.
    for (const fileName of album.files) {
        const idx = myDataBase.indexOf(album);
        // Appel la fonction qui genere chaque balise html.
        newHTML += createVignetteHTML(album.dossier_photo, fileName, idx);
    }
    return newHTML;
}

// Génére une balise html
function createVignetteHTML(dossierPhoto, fileName,albumIndex = -1) {
    //methode n°2
    return `<img class="vignette flex-md-shrink-0 shadow p-1 mb-1 img-thumbnail" 
                 src="${dossierPhoto}${fileName}" 
                 alt=""
                 data-album-idx="${albumIndex}"
                 onmouseover="setImg();">`;
}

// mise à jour de la balise.
function updateVignettesContainerHTML(html) {
    $vignettesContainer.innerHTML = html;
}

/** ********************************************************************************        
 *            LE TITRE, LA PHOTO GRAND FORMAT, ET LES COMMENTAIRES
 ********************************************************************************* */
// EVENEMENT CLICK SUR UNE DES VIGNETTES
function setImg() {
    var $img = event.target;
    var imagePath = $img.getAttribute("src");
    var titre = $img.getAttribute("data-titre");
    // RECUPERE L' INDEX DU TABLEAU 
    var albumIndex = $img.getAttribute("data-album-idx");

    if (albumIndex && (new Number(albumIndex) > -1)) {
        var titre = myDataBase[albumIndex].titre;
        var commentaires = myDataBase[albumIndex].commentaires;
        // CALL
        setImgInternal(imagePath, titre, commentaires);
    }
}

// GENERE LES BALISES DANS LE CONTENEUR PARENT.
function setImgInternal(imagePath, titre, commentaires) {
    if (imagePath != null) {
        let newHTML = "";
        // AJOUTE LE TITRE
        newHTML = `<h3>${titre}</h3>`;
        // AFFICHE LA PHOTO
        newHTML += `<div class="d-block w-100 d-flex flex-row flex-wrap justify-content-center"><img id="myImg" class="d-block mw-100 shadow p-2 mb-3 bg-white rounded" src="${imagePath}" alt="" onclick="fullSize();"></div>`;
        // AJOUTE LES COMMENTAIRES
        newHTML += `<p>${commentaires}</p>`;
        // Cree les balises
        $boxZoom.innerHTML = newHTML;
    }

}