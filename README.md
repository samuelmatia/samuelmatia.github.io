# Samuel Matia — Personal Website

Site académique pour GitHub Pages.

## Fichiers à ajouter

| Fichier | Description |
|---|---|
| `assets/photo.jpg` | Ta photo (portrait, ~400×500 px recommandé) |
| `assets/cv.pdf` | Ton CV complet en PDF |

## Déploiement GitHub Pages

```bash
git init
git add .
git commit -m "Personal website"
git branch -M main
git remote add origin https://github.com/samuelmatia/samuelmatia.github.io.git
git push -u origin main
```

Settings → Pages → branche `main`, dossier `/ (root)`.

## Prévisualisation locale

```bash
python3 -m http.server 8080 --directory "/home/sam/Desktop/Personal WebPage"
```
