# Schéma Figma — Écosystème Transport Facile
> Type : diagramme explicatif (pas un prototype cliquable)
> Objectif : expliquer en 30 secondes le lien entre Transport Facile, ResaBus Core, ResaBus Colis Core et l'agence
> Usage : slide de présentation, intro avant la démo, envoi par WhatsApp après un RDV
> Format recommandé : frame Figma 1440 × 900px (format présentation desktop) + export PNG

---

## Ce que ce schéma doit communiquer

**Un seul message à faire passer :**
> Transport Facile est l'éditeur invisible. L'agence est la marque. Le client final ne voit que l'agence.

---

## Structure visuelle du schéma

Le schéma est organisé en **3 niveaux verticaux** reliés par des flèches.

```
╔══════════════════════════════════════════════════════════════╗
║                    NIVEAU 1 — L'ÉDITEUR                      ║
║                                                              ║
║              [ TRANSPORT FACILE ]                            ║
║          "La technologie derrière votre succès"              ║
║                                                              ║
║     ┌─────────────────┐    ┌─────────────────────────┐       ║
║     │  ResaBus Core   │    │  ResaBus Colis Core      │       ║
║     │  Billetterie    │    │  Expéditions & Colis     │       ║
║     └────────┬────────┘    └───────────┬─────────────┘       ║
╚══════════════╪═════════════════════════╪════════════════════╝
               │    déploiement          │    déploiement
               │    white-label          │    white-label
               ▼                         ▼
╔══════════════════════════════════════════════════════════════╗
║                  NIVEAU 2 — L'AGENCE PARTENAIRE              ║
║                                                              ║
║   ┌──────────────────────────────────────────────────────┐   ║
║   │             UTB — Union Transport Bouaké              │   ║
║   │     (logo, couleurs, nom propre de l'agence)         │   ║
║   │                                                       │   ║
║   │  ┌──────────────┐   ┌──────────────┐                 │   ║
║   │  │ Guichet      │   │ Espace Colis │                 │   ║
║   │  │ numérique    │   │ numérique    │                 │   ║
║   │  └──────────────┘   └──────────────┘                 │   ║
║   │                                                       │   ║
║   │  🖥 Dashboard direction (recettes temps réel)         │   ║
║   └──────────────────────────────────────────────────────┘   ║
╚══════════════╪═════════════════════════╪════════════════════╝
               │                         │
      réserve un billet         envoie un colis
               ▼                         ▼
╔══════════════════════════════════════════════════════════════╗
║                NIVEAU 3 — LE CLIENT FINAL                    ║
║                                                              ║
║   ┌──────────────┐               ┌──────────────────────┐   ║
║   │  Voyageur    │               │ Expéditeur / Receveur │   ║
║   │              │               │                       │   ║
║   │ 📱 Billet    │               │ 📱 Suivi colis        │   ║
║   │ WhatsApp     │               │ WhatsApp / SMS        │   ║
║   │ + QR Code    │               │ automatique           │   ║
║   └──────────────┘               └──────────────────────┘   ║
╚══════════════════════════════════════════════════════════════╝
```

---

## Instructions détaillées pour Figma

### Zone 1 — Transport Facile (en haut)

**Fond :** bleu foncé `#1e3a5f`
**Forme :** rectangle arrondi (radius 20px), pleine largeur, hauteur ~180px

**Contenu :**
- Logo Transport Facile (blanc) centré en haut
- Texte sous logo : "La technologie qui propulse vos agences" (blanc, taille 16px, italic)
- 2 cartes côte à côte (fond blanc semi-transparent) :

  **Carte ResaBus Core** (à gauche) :
  - Icône : 🎫 ou SVG billet
  - Titre : "ResaBus Core"
  - Sous-titre : "Billetterie en ligne · QR Code · Dashboard recettes"
  - Badge : "Plan Essentiel 3% · Plan Pro 2,5%"

  **Carte ResaBus Colis Core** (à droite) :
  - Icône : 📦 ou SVG carton
  - Titre : "ResaBus Colis Core"
  - Sous-titre : "Suivi colis · Bon de prise en charge · Alertes WhatsApp"
  - Badge : "Inclus dans le plan Pro"

**Flèche entre les 2 cartes :** petite flèche bidirectionnelle `↔` avec label "Fonctionne ensemble"

---

### Flèches Niveau 1 → Niveau 2

**2 flèches épaisses descendantes** (une par produit)
- Couleur : bleu `#3b82f6`
- Style : trait plein, pointe de flèche pleine
- Label sur la flèche : "Déploiement white-label · 48h"

**Bulle sur la flèche :**
> "Votre agence = votre logo, vos couleurs, votre nom. Transport Facile est invisible."

---

### Zone 2 — L'agence partenaire (milieu)

**Fond :** vert foncé `#1a5c2a` (couleur UTB)
**Forme :** rectangle arrondi, hauteur ~220px

**En-tête de la zone :**
- Logo UTB (initiales "UTB" blanc sur cercle vert)
- Titre : "UTB — Union Transport Bouaké"
- Sous-titre gris clair : "Vue de votre agence par vos équipes et vos clients"

**3 blocs internes (côte à côte) :**

  **Bloc 1 — Guichet numérique :**
  - Icône : 💻
  - Titre : "Vos agents"
  - Points : Vente de billets · Enregistrement colis · Scan embarquement

  **Bloc 2 — Dashboard direction :**
  - Icône : 📊
  - Titre : "Vous, le directeur"
  - Points : Recettes en temps réel · Statistiques · Contrôle total

  **Bloc 3 — Plateforme client :**
  - Icône : 🌐
  - Titre : "Vos clients"
  - Points : Réservation 24h/24 · Paiement Wave / Orange Money · Billet WhatsApp

---

### Flèches Niveau 2 → Niveau 3

**2 flèches** (une pour les voyageurs, une pour les colis)

Flèche gauche (voyageur) :
- Label : "Réserve · Paie · Reçoit son billet"

Flèche droite (colis) :
- Label : "Envoie · Suit · Reçoit une alerte à l'arrivée"

---

### Zone 3 — Le client final (bas)

**Fond :** gris très clair `#f8fafc`
**2 blocs côte à côte :**

  **Bloc Voyageur :**
  - Icône : 👤🚌
  - Titre : "Le voyageur"
  - Bulle simulant un téléphone :
    - "Billet UTB · Abidjan → Bouaké"
    - "Siège 12 · 10h00"
    - [QR code placeholder]
    - "Reçu via WhatsApp · Paiement Wave ✅"

  **Bloc Expéditeur / Destinataire :**
  - Icône : 📦👥
  - Titre : "L'expéditeur & le destinataire"
  - Bulle simulant un téléphone :
    - "Votre colis UTB-COL-00089"
    - "🔵 En transit · Arrivée 15h30"
    - "Notification WhatsApp automatique"

---

### Bandeau final (tout en bas du schéma)

**Fond orange `#f97316`**

3 stats centrées en blanc :
- **0 FCFA** de frais fixes
- **48h** pour démarrer
- **100%** à votre image

---

## Version alternative — Schéma simplifié pour WhatsApp

> À exporter en PNG 800×600px pour envoyer rapidement par WhatsApp après un RDV.

**Version ultra-épurée, 3 lignes seulement :**

```
[TRANSPORT FACILE]
    ↓ technologie + déploiement
[VOTRE AGENCE — votre logo, vos couleurs]
    ↓ service
[VOS CLIENTS — billets & colis sur WhatsApp]
```

Avec en dessous :
- ResaBus Core : billets · QR code · dashboard
- ResaBus Colis Core : expéditions · suivi · alertes
- 0 FCFA de frais fixes · Opérationnel en 48h

---

## Ce que ce schéma prouve au directeur

| Question implicite du directeur | Ce que le schéma montre |
|---|---|
| "Qui contrôle ma plateforme ?" | Transport Facile est l'éditeur, mais l'agence garde sa marque |
| "Mes clients verront quoi ?" | Ils verront le nom de l'agence, pas Transport Facile |
| "Les 2 produits sont liés ?" | Oui, ResaBus Core + Colis Core fonctionnent ensemble |
| "C'est compliqué à mettre en place ?" | Le schéma montre 3 niveaux clairs, 48h de déploiement |
| "Je reste indépendant ?" | Oui — votre logo, vos couleurs, votre nom, vos règles |

---

## Checklist de création

- [ ] Frame Figma 1440 × 900px créée
- [ ] Zone 1 (Transport Facile) avec les 2 cartes produits
- [ ] Flèches avec labels "white-label · 48h"
- [ ] Zone 2 (agence) avec les 3 blocs internes
- [ ] Zone 3 (client final) avec les 2 bulles téléphone
- [ ] Bandeau orange bas avec les 3 stats
- [ ] Version simplifiée exportée en PNG (800×600px) pour WhatsApp
- [ ] Exporté en PNG HD (2x) pour les slides de présentation

---

## Mise à jour de ce schéma

> Si de nouveaux modules arrivent (gestion chauffeurs, multi-agences, tableau de bord comptable...), les ajouter dans la Zone 1 comme nouvelles cartes produits.
> Ce schéma est aussi utile pour les futures levées de fonds ou présentations à des investisseurs.
