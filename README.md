# Club Tasks (projet de départ)

Projet de la formation « Développer des apps mobiles avec React Native (Expo) » : une petite application de tâches construite en deux séances (séance 1 : composants, props, état, liste, effet ; séance 2 : navigation, Context, API, sauvegarde).

Ce dépôt contient une étape par commit. Chaque étape porte une étiquette (tag) : si vous êtes en retard ou absent, récupérez l'étape précédente et continuez à partir de là.

**Expo Go doit afficher SDK 58.** Le projet utilise Expo SDK 58 (`expo ~58`).

## Récupérer le projet

Bash et PowerShell (identique) :

```
git clone https://github.com/waelbouazizii/club-tasks-starter.git
cd club-tasks-starter
git checkout s1-etape-7
npm install
npx expo start
```

Pour partir d'une autre étape, remplacez `s1-etape-7` par le nom d'une étiquette de la liste ci-dessous. Après chaque `git checkout`, relancez `npm install` : les dépendances changent entre certaines étapes. Git indique « detached HEAD » : c'est normal, il signale que vous êtes sur une étape et non sur une branche. Pour revenir à la dernière étape : `git checkout main`.

Si le QR code ne se connecte pas :

```
npx expo start --tunnel
```

## Les étiquettes

| Étiquette | Contenu |
|---|---|
| `s1-etape-1` | Modèle Expo SDK 58 tel que créé par `create-expo-app`, avant `reset-project` (aucun code du club à cette étape). |
| `s1-etape-2` | Après `npm run reset-project` : `src/app/index.tsx` (écran vide) et `src/app/_layout.tsx`. |
| `s1-etape-3` | Premier composant : écran « Club Tasks » avec `View`, `Text` et `StyleSheet`. |
| `s1-etape-4` | Composant réutilisable `src/components/TaskItem.tsx` et ses props. |
| `s1-etape-5` | État avec `useState` : compteur et tâche qu'on peut barrer. |
| `s1-etape-6` | Liste de tâches avec `FlatList`, champ de saisie et ajout de tâches. |
| `s1-etape-7` | `useEffect` : horloge `src/components/Clock.tsx`. C'est la fin de la séance 1. |
| `s2-etape-1` | Écran de détail `src/app/task/[id].tsx` et lien « Détails ». |
| `s2-etape-2` | Les tâches dans un Context : `src/context/TasksContext.tsx`. |
| `s2-etape-3` | Onglets « Tâches » et « Importer » dans `src/app/(tabs)`, avec `@expo/vector-icons`. |
| `s2-etape-4` | Import de 5 tâches depuis une API, avec les états de chargement et d'erreur. |
| `s2-etape-5` | Sauvegarde sur le téléphone avec `@react-native-async-storage/async-storage`. Fin de la séance 2. |

## Mettre le projet à jour vers le SDK 58

Seulement si Expo Go refuse le projet (par exemple un projet créé en SDK 57). Une seule fois.

PowerShell (terminal de VS Code) :

```
npx expo install expo@^58.0.0 --fix '--' --legacy-peer-deps
npx expo start --clear
```

Les guillemets autour de `--` sont nécessaires dans PowerShell et acceptés par Bash. L'option `--legacy-peer-deps` évite un conflit de dépendances npm pendant la mise à jour.

Seulement si vous utilisez cmd.exe :

```
npx expo install expo@^58.0.0 --fix -- --legacy-peer-deps
npx expo start --clear
```

Dans cmd.exe, la ligne PowerShell ne fonctionne pas : utilisez celle-ci.
