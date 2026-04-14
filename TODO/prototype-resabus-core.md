# Prototype Figma — ResaBus Core
> Produit : ResaBus Core — Billetterie en ligne pour agences de bus (Côte d'Ivoire)
> Éditeur : Transport Facile
> Objectif du prototype : convaincre un directeur d'agence en 10 minutes max
> Format : prototype cliquable Figma, frames iPhone 14 Pro (390 × 844px)
> Important : le prototype montre la plateforme AUX COULEURS DE L'AGENCE, pas de Transport Facile

---

## Données fictives — à utiliser partout pour la cohérence

| Donnée | Valeur |
|---|---|
| Nom de l'agence pilote | UTB — Union Transport Bouaké |
| Couleur principale agence | Vert foncé #1a5c2a (au lieu du bleu TF) |
| Logo agence | Initiales "UTB" blanc sur fond vert |
| Directeur | M. Kouamé Yao |
| Agent de guichet | Mariam Coulibaly |
| Ligne 1 | Abidjan (Adjamé) → Bouaké · 4 500 FCFA |
| Ligne 2 | Abidjan (Adjamé) → Yamoussoukro · 3 000 FCFA |
| Ligne 3 | Abidjan (Adjamé) → Man · 6 000 FCFA |
| Départs jour | 07h00 · 10h00 · 14h00 |
| Passager fictif | Jean-Baptiste Koffi · +225 07 12 34 56 78 |
| Passager 2 | Aya Traoré · +225 05 87 65 43 21 |
| Recettes du jour | 312 500 FCFA |
| Billets vendus aujourd'hui | 47 billets |
| Taux de remplissage | 84% |
| Numéro de billet | UTB-2025-04-00234 |
| Mode de paiement | Wave |

> Règle d'or : le client voit "UTB Transport" partout, jamais "Transport Facile".
> Transport Facile est invisible. C'est le pitch central du white-label.

---

## Structure du prototype — 8 pages

---

### Page 0 — Écran d'accueil / Login agent

**Contexte :** l'agent arrive le matin, il se connecte à la plateforme de son agence.

**Contenu :**
- Fond vert foncé (couleur de l'agence UTB)
- Logo UTB en haut au centre (grand)
- Texte sous le logo : "Espace agent · UTB Transport"
- Champ email : `mariam@utb-transport.ci`
- Champ mot de passe : `••••••••`
- Bouton vert : "Se connecter"
- Petit texte bas de page : "Propulsé par ResaBus Core" (discret, petite police grise)

**Lien :** bouton "Se connecter" → Page 1

**Message clé à dire pendant la démo :**
> "Vos agents voient votre agence, votre logo, vos couleurs. Transport Facile n'apparaît nulle part."

---

### Page 1 — Dashboard direction (vue recettes temps réel)

**Contexte :** le directeur ouvre l'app depuis son téléphone n'importe où.

**En-tête :**
- Logo UTB petit + "UTB Transport" en haut à gauche
- "Bonjour, M. Kouamé 👋" à droite
- Date : Lundi 14 avril 2025 · 08h12

**Bloc principal — Recettes du jour (fond vert agence) :**
- Grand chiffre : **312 500 FCFA**
- Label : "Recettes encaissées aujourd'hui"
- 3 badges dessous :
  - 🎫 47 billets vendus
  - ⬆️ +18% vs lundi dernier
  - 🕐 Dernière vente : il y a 4 min

**Indicateurs secondaires (3 cartes) :**
| KPI | Valeur |
|---|---|
| Taux de remplissage | 84% |
| Billets vendus en ligne | 31 / 47 (66%) |
| Commission Transport Facile | 7 812 FCFA |

**Graphique barres — "Ventes cette semaine" :**
- 5 barres (Lun → Ven), barres vert agence
- Lundi en cours visible et plus haute
- Ligne fine grise = semaine passée en comparaison

**Tableau départs du jour :**
| Ligne | Départ | Places restantes | Billets vendus | Recettes |
|---|---|---|---|---|
| Abidjan → Bouaké | 07h00 | 2 restantes | 28/30 | 126 000 FCFA |
| Abidjan → Bouaké | 10h00 | 14 restantes | 16/30 | 72 000 FCFA |
| Abidjan → Yamoussoukro | 10h00 | 8 restantes | 22/30 | 66 000 FCFA |

**Bouton flottant bas :** "+ Vendre un billet" (vert vif) → Page 2

**Menu bas :**
- Dashboard · Ventes · Lignes · Paramètres

**Message clé à dire :**
> "Là, vous êtes dans votre voiture, ou chez vous. Vous voyez en temps réel ce que votre agence encaisse. Personne ne peut vous cacher quoi que ce soit."

---

### Page 2 — Vente de billet (flux agent guichet)

**Contexte :** un client se présente au guichet ou appelle.

#### Sous-page 2a — Sélection de la ligne

- Titre : "Nouvelle vente"
- 3 cartes cliquables verticales :
  - **Abidjan → Bouaké** · 4 500 FCFA · 3 départs disponibles
  - **Abidjan → Yamoussoukro** · 3 000 FCFA · 2 départs disponibles
  - **Abidjan → Man** · 6 000 FCFA · 1 départ disponible
- Lien : cliquer "Abidjan → Bouaké" → Sous-page 2b

#### Sous-page 2b — Sélection du départ

- Titre : "Abidjan → Bouaké · Choisir le départ"
- 3 créneaux :
  - 07h00 · **2 places restantes** (badge rouge "Presque complet")
  - 10h00 · 14 places restantes
  - 14h00 · 18 places restantes
- Lien : cliquer "10h00" → Sous-page 2c

#### Sous-page 2c — Informations passager

- Titre : "Informations du voyageur"
- Champ Nom complet : "Jean-Baptiste Koffi"
- Champ WhatsApp : "+225 07 12 34 56 78"
- Sélecteur nombre de places : **1**
- Barre de résumé fixée en bas :
  - "Abidjan → Bouaké · 10h00 · 1 place · **4 500 FCFA**"
- Bouton : "Choisir le paiement" → Sous-page 2d

#### Sous-page 2d — Mode de paiement

- Titre : "Comment paie le client ?"
- Montant bien visible en haut : **4 500 FCFA**
- 4 boutons larges :
  - 🔵 **Wave** (sélectionné — bord vert)
  - 🟠 Orange Money
  - 💵 Cash (espèces)
  - 💳 Carte bancaire
- Note sous Wave : "Le client reçoit un SMS de confirmation Wave automatiquement"
- Bouton principal vert : "Valider la vente" → Page 3

---

### Page 3 — Confirmation & billet généré

**En-tête vert :**
- Icône ✅ grand
- "**Vente enregistrée !**"
- "Billet envoyé sur WhatsApp au +225 07 12 34 56 78"

**Carte billet numérique :**
```
UTB Transport
━━━━━━━━━━━━━━━━━━━━━━━━
ABIDJAN (ADJAMÉ)  →  BOUAKÉ
Départ : Lundi 14 avril 2025 · 10h00
Arrivée estimée : 15h30
━━━━━━━━━━━━━━━━━━━━━━━━
Passager : Jean-Baptiste Koffi
Siège n° : 12     Réf : UTB-2025-04-00234
Paiement : Wave · 4 500 FCFA
━━━━━━━━━━━━━━━━━━━━━━━━
[QR CODE — image placeholder]
```

**2 boutons :**
- "🖨 Imprimer le reçu" (outline gris)
- "+ Nouvelle vente" (vert) → Page 2a

**Message clé à dire :**
> "En 30 secondes, le billet est créé et le client le reçoit sur WhatsApp. Votre agent n'a plus besoin d'écrire quoi que ce soit."

---

### Page 4 — Le billet reçu côté passager (WhatsApp)

**Contexte :** simuler l'écran WhatsApp du passager Jean-Baptiste.

**Interface WhatsApp simulée :**
- Contact : "UTB Transport 🚌" (avec logo vert UTB)
- Heure : 08h14
- Message :
```
Bonjour Jean-Baptiste Koffi,

Votre billet est confirmé ✅

🚌 UTB Transport
🛣 Abidjan (Adjamé) → Bouaké
📅 Lundi 14 avril 2025 · 10h00
💺 Siège n°12
💳 Payé via Wave · 4 500 FCFA
🎫 Réf : UTB-2025-04-00234

Présentez ce QR code à l'embarquement.
Bonne route ! 🙏
```
- Image QR Code dessous (placeholder carré blanc sur fond gris)

**Bouton en bas (hors WhatsApp) :** "Voir comment le billet est validé →" → Page 5

**Message clé à dire :**
> "Votre client reçoit le billet de votre agence, avec votre nom. Pas de Transport Facile. C'est vous."

---

### Page 5 — Scan & embarquement (agent à la porte)

**Contexte :** le bus part à 10h00. L'agent scanne chaque passager.

**Cas 1 — Billet valide (écran principal) :**
- Grand rond vert centré avec ✅
- **"BILLET VALIDE"** — vert, gras, taille 28px
- Nom : Jean-Baptiste Koffi
- Ligne : Abidjan → Bouaké · 10h00
- Siège : 12
- Statut : ✅ Embarqué
- Bouton : "Scanner le billet suivant" (vert) → retour scan

**Cas 2 — Billet déjà utilisé :**
- Grand rond orange ⚠️
- **"BILLET DÉJÀ UTILISÉ"** — orange
- "Ce billet a été scanné à 09h58 par Mariam C."
- Bouton : "Contacter le responsable"

**Cas 3 — Billet invalide / inconnu :**
- Grand rond rouge ❌
- **"BILLET INVALIDE"** — rouge
- "Ce billet n'existe pas dans notre système."
- Bouton : "Refuser l'embarquement"

**Message clé à dire :**
> "Fini les billets copiés, les doublons, les discussions à la porte. Le scan dit oui ou non en 2 secondes."

---

### Page 6 — Dashboard recettes (fin de démo — boucle)

**Même que Page 1 mais mis à jour après la vente :**
- Recettes : **317 000 FCFA** (+4 500 FCFA)
- Billets vendus : **48** (au lieu de 47)
- "Dernière vente : il y a 1 min" (la nôtre !)
- Le départ 10h00 Bouaké passe de 14 places → 13 places restantes

**Message clé à dire :**
> "La vente qu'on vient de faire vient d'apparaître ici. Vous voyez tout, en temps réel, de n'importe où."

---

## Navigation entre les pages

```
Page 0 (Login)
  └── "Se connecter" → Page 1 (Dashboard)

Page 1 (Dashboard)
  └── "+ Vendre un billet" → Page 2a (Sélection ligne)

Page 2a → 2b → 2c → 2d (flux vente en 4 étapes)
  └── "Valider la vente" → Page 3 (Confirmation)

Page 3 (Confirmation)
  └── Mention "WhatsApp" → Page 4 (Vue passager)
  └── "+ Nouvelle vente" → Page 2a

Page 4 (WhatsApp passager)
  └── "Voir l'embarquement" → Page 5 (Scan)

Page 5 (Scan)
  └── "Scanner suivant" → retour Page 5 (cas 1)

Page 1 (Dashboard) — accessible depuis le menu bas
  └── Fin de démo → Page 6 (Dashboard mis à jour)
```

---

## Palette & style

| Élément | Valeur |
|---|---|
| Couleur agence (UTB) | `#1a5c2a` (vert foncé) |
| Couleur agence clair | `#e8f5e9` |
| CTA / boutons | `#2e7d32` (vert moyen) |
| Succès | `#16a34a` |
| Erreur | `#dc2626` |
| Avertissement | `#d97706` |
| Fond gris clair | `#f8fafc` |
| Texte principal | `#111827` |
| Texte secondaire | `#6b7280` |
| Police | Inter (gratuite dans Figma) |
| Arrondi cartes | 16px |
| Arrondi boutons | 12px |
| Frame | iPhone 14 Pro — 390 × 844px |

---

## Composants à créer une seule fois

- **NavBar bas** : Dashboard / Ventes / Lignes / Paramètres
- **En-tête agence** : logo UTB + nom + date
- **Carte-ligne** : nom ligne + prix + places restantes
- **Badge statut** : Confirmé (vert) / En attente (orange) / Annulé (rouge)
- **Bouton primaire** vert (plein)
- **Bouton secondaire** outline gris

---

## Objections à préparer pour la démo

| Objection | Réponse |
|---|---|
| "C'est compliqué pour mes agents ?" | "1h de formation incluse. Si tu sais utiliser WhatsApp, tu sais utiliser ça." |
| "Ça coûte combien ?" | "0 FCFA d'avance. 2,5% ou 3% seulement sur ce qui est vendu en ligne." |
| "Et si internet tombe ?" | "Mode hors-ligne disponible pendant la période sans connexion, synchro automatique." |
| "Mes clients savent pas utiliser ça ?" | "Ils ont juste besoin de recevoir un WhatsApp. Même un téléphone basique suffit." |
| "C'est quoi Transport Facile ?" | "C'est nous, l'éditeur. Mais vos clients voient UTB, pas Transport Facile." |

---

## Checklist avant la première démo

- [ ] 6 pages créées dans Figma (+ sous-pages 2a/2b/2c/2d)
- [ ] Tous les liens de navigation fonctionnent en mode Preview
- [ ] Le logo et les couleurs sont ceux de l'agence (vert UTB), pas du bleu Transport Facile
- [ ] Les données fictives (UTB, Kouamé, Koffi) sont cohérentes sur tous les écrans
- [ ] Le prototype tourne bien sur mobile (tester le lien de partage Figma sur ton téléphone)
- [ ] Démo à blanc de 10 minutes chronométrée faite au moins 1 fois
- [ ] Réponses aux 5 objections mémorisées

---

## Mise à jour après les rendez-vous terrain

> Après chaque démo, noter ici ce que le directeur a demandé / ce qui l'a bloqué.
> Ces notes serviront à prioriser les fonctions du MVP réel.

| Date | Agence | Ce qui a convaincu | Ce qui a bloqué | Fonctions demandées |
|---|---|---|---|---|
| | | | | |
