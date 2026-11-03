# Le Relais de l’Immobilier — site statique

Ce dossier contient une version autonome du site, sans React ni compilation : `index.html`, `styles.css`, `script.js` et les images locales du dossier `assets/`.

## Ouvrir dans Visual Studio Code

1. Décompressez l’archive et ouvrez le dossier `github-pages` dans VS Code.
2. Pour un aperçu fidèle avec les images et la carte, lancez **Live Server** sur `index.html`, ou démarrez un serveur local depuis ce dossier :

```bash
python -m http.server 8000
```

Puis ouvrez `http://localhost:8000` dans votre navigateur. Le double-clic sur `index.html` fonctionne aussi, mais certains navigateurs restreignent les contenus externes sous `file://`.

## GitHub Pages

Pour publier ce site avec GitHub Pages, placez le contenu de ce dossier à la racine d’un dépôt GitHub, puis dans **Settings → Pages**, choisissez **Deploy from a branch**, la branche `main` et le dossier `/ (root)`. Les images sont incluses localement et les liens du site sont relatifs afin de fonctionner sous un chemin de projet.

Le formulaire prépare un SMS dans l’application de messagerie du visiteur ; celui-ci doit confirmer l’envoi. Le site ne collecte ni n’enregistre les champs.

## Photos des services

Les trois photos affichées dans les cartes sont des photos d’illustration provenant d’Unsplash ; elles ne représentent pas des annonces ou des biens de l’agence. Les fichiers optimisés sont inclus dans `assets/`.

- Terrains : [Fotografías inmobiliarias — vue aérienne d’un terrain](https://unsplash.com/photos/aerial-view-of-a-vacant-lot-with-trees-and-street-Qal7KiJ-ErQ).
- Maisons et appartements : [Wiktor Karkocha — immeuble résidentiel](https://unsplash.com/photos/white-concrete-building-at-daytime-Dt3y3dQR6Qk).
- Gestion locative : [Jakub Żerdzicki — clés d’un logement](https://unsplash.com/photos/hand-holding-keys-with-house-keychain-V7Q94jc04wQ).

Photos utilisées sous la [licence Unsplash](https://unsplash.com/license).
