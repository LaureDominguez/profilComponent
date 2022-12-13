# UserAccount

Ce projet est une application angular (version 4.1.1) vierge. Un fichier db.json a été ajouté pour générer une fausse API à l'aide de JSON Server.

## Tâches à effectuer en arrivant

### Installation du poste de travail

* Paramétrer la connexion GitLab avec [SSH](https://docs.gitlab.com/ee/user/ssh.html) pour en faciliter l'utilisation.
* Installer [VSCode](https://code.visualstudio.com/) (il existe une version snap dans le store d'ubuntu)
* Installer [node et npm](https://nodejs.dev/fr/) 
* Installer [Angular CLI](https://github.com/angular/angular-cli) en global
* Installer [JSON server](https://github.com/typicode/json-server#getting-started) en global

### Lancement du projet

* Pull du projet UserAccount avec SSH, puis tester son bon fonctionnement ("npm install; ng serve")
* Tester le bon fonctionnement de la fake API ("json-server --watch db.json" à la racine du projet)
* Créé une nouvelle branche git pour les futures modifications
* Ajouter la librarie [Angular Material](https://material.angular.io/guide/getting-started)
* Ajouter la librairie [Prettier](https://prettier.io/)
* Ajouter la librairie [Eslint](https://eslint.org/)
* Créé un premier composant de test avec des élements material (buttons, cards, etc.) pour vérifier que tout fonctionne bien
* Pousser la nouvelle branche avec les modifications sur gitlab et faire une Merge Request

## Sujet de stage

La refonte du système d'abonnement nous amène à créer de nouvelles pages "User Account" et "Company Account".
Les spécifications de ses nouvelles pages sont dans les deux tickets suivants:
* [New User Account](https://gitlab.adm.wisebim.fr/planstobim/planstobim/-/issues/779)
* [New Company Account](https://gitlab.adm.wisebim.fr/planstobim/planstobim/-/issues/780)  
  
La page User Account doit être créée en première. Le fichier db.json regroupe de fausses données pour le JSON server qui simulera le backend. Les données du fichier db.json pourront être amenées à évoluer en fonction du besoin.
