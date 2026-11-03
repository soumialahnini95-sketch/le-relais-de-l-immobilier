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
