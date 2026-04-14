# Prototype Figma — ResaBus Colis Core
> Produit : ResaBus Colis Core — Gestion des expéditions colis pour agences de bus (Côte d'Ivoire)
> Éditeur : Transport Facile
> Objectif : montrer comment le service colis devient une source de revenus maîtrisée et traçable
> Format : prototype cliquable Figma, frames iPhone 14 Pro (390 × 844px)
> Prérequis : montrer ce prototype APRÈS ResaBus Core, ou en complément (plan Pro)

---

## Contexte métier — pourquoi ce produit existe

Aujourd'hui dans une agence de bus en Côte d'Ivoire :
- Les clients amènent leurs colis sans rendez-vous → files d'attente, désorganisation
- Les agents jonglent entre vente de billets et gestion des colis → erreurs, stress
- Aucun suivi : l'expéditeur appelle pour savoir où est son colis → charge téléphonique
- Les recettes colis sont notées à la main → zones d'ombre en fin de journée

ResaBus Colis Core résout chacun de ces problèmes.

---

## Données fictives — à utiliser partout

| Donnée | Valeur |
|---|---|
| Nom de l'agence | UTB — Union Transport Bouaké |
| Couleur agence | Vert foncé #1a5c2a |
| Agent colis | Brice Akpo |
| Expéditeur | Aya Traoré · Adjamé, Abidjan · +225 05 87 65 43 21 |
| Destinataire | Paul Bamba · Bouaké · +225 07 45 23 11 98 |
| Description colis | 2 cartons de vêtements |
| Poids | 15 kg |
| Tarif | 2 500 FCFA |
| Référence colis | UTB-COL-2025-04-00089 |
| Statut | En transit (Abidjan → Bouaké · départ 10h00) |
| Recettes colis du jour | 87 500 FCFA |
| Colis enregistrés aujourd'hui | 34 |
| Colis livrés | 21 |
| Colis en transit | 13 |

---

## Structure du prototype — 7 pages

---

### Page 0 — Login agent colis

**Même structure que ResaBus Core mais accent sur "espace colis"**

- Logo UTB (vert)
- Texte : "Espace colis · UTB Transport"
- Champ email : `brice@utb-transport.ci`
- Champ mot de passe : `••••••••`
- Bouton vert : "Se connecter"

**Lien :** → Page 1 (Dashboard colis)

---

### Page 1 — Dashboard colis (vue direction)

**Contexte :** le directeur suit les expéditions comme il suit ses billets.

**En-tête :**
- Logo UTB + "UTB Transport — Colis"
- "Bonjour, M. Kouamé 👋" · Lundi 14 avril 2025

**Bloc principal — Recettes colis du jour (fond vert) :**
- Grand chiffre : **87 500 FCFA**
- Label : "Recettes colis aujourd'hui"
- 3 badges :
  - 📦 34 colis enregistrés
  - ✅ 21 livrés
  - 🚌 13 en transit

**Carte statut en temps réel :**
| Colis | Expéditeur | Destination | Statut |
|---|---|---|---|
| UTB-COL-00089 | Aya Traoré | Bouaké | 🔵 En transit |
| UTB-COL-00088 | Koné Fatou | Yamoussoukro | ✅ Livré |
| UTB-COL-00087 | Diallo M. | Man | 🔵 En transit |
| UTB-COL-00086 | Soro A. | San-Pédro | ✅ Livré |

**Graphique barres :** recettes colis cette semaine vs semaine passée

**Bouton flottant :** "+ Enregistrer un colis" (vert) → Page 2

**Menu bas :**
- Dashboard · Colis · Historique · Paramètres

**Message clé à dire :**
> "Vos recettes colis sont aussi visibles que vos recettes billets. En fin de journée, vous savez exactement ce que vous avez encaissé, sans compter à la main."

---

### Page 2 — Enregistrement d'un colis (agent)

**Contexte :** un client arrive à l'agence avec son colis.

#### Sous-page 2a — Informations expéditeur & destinataire

- Titre : "Nouveau colis"
- Section **Expéditeur** :
  - Nom : "Aya Traoré"
  - Téléphone WhatsApp : "+225 05 87 65 43 21"
  - Ville de départ : "Adjamé, Abidjan" (auto-rempli)
- Section **Destinataire** :
  - Nom : "Paul Bamba"
  - Téléphone WhatsApp : "+225 07 45 23 11 98"
  - Ville d'arrivée : sélecteur → "Bouaké"
- Bouton : "Continuer" → Sous-page 2b

#### Sous-page 2b — Description & tarification

- Titre : "Description du colis"
- Champ Description : "2 cartons de vêtements"
- Sélecteur Poids :
  - 0-5 kg → 1 000 FCFA
  - 5-10 kg → 1 500 FCFA
  - 10-20 kg → **2 500 FCFA** (sélectionné · 15 kg)
  - +20 kg → Sur devis
- Mentions spéciales (optionnel) : Fragile / Urgent / Froid
- **Résumé bas :**
  - Abidjan → Bouaké · 15 kg · **2 500 FCFA**
- Bouton : "Choisir le départ" → Sous-page 2c

#### Sous-page 2c — Sélection du bus de départ

- Titre : "Sur quel départ part ce colis ?"
- 2 créneaux disponibles :
  - 10h00 Abidjan → Bouaké · Espace colis : **OK** (badge vert)
  - 14h00 Abidjan → Bouaké · Espace colis : **Presque plein** (badge orange)
- Bouton : "Valider" → Page 3

**Message clé à dire :**
> "L'agent sélectionne le bon départ. Fini les confusions, fini les colis mis dans le mauvais bus."

---

### Page 3 — Bon de prise en charge & QR code

**Contexte :** confirmation de l'enregistrement du colis.

**En-tête vert :**
- ✅ "Colis enregistré avec succès"
- "Bon de prise en charge généré"

**Bon de prise en charge affiché :**
```
UTB Transport — Service Colis
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Réf : UTB-COL-2025-04-00089
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXPÉDITEUR
Aya Traoré · Adjamé, Abidjan
+225 05 87 65 43 21

DESTINATAIRE
Paul Bamba · Bouaké
+225 07 45 23 11 98
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2 cartons de vêtements · 15 kg
Départ : 10h00 · Lundi 14 avril 2025
Tarif encaissé : 2 500 FCFA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[QR CODE PLACEHOLDER]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Note bas :** "L'expéditeur et le destinataire ont été notifiés par WhatsApp"

**2 boutons :**
- "🖨 Imprimer le bon" (outline)
- "+ Enregistrer un autre colis" (vert) → Page 2a

---

### Page 4 — Vue expéditeur (WhatsApp — Aya Traoré)

**Contexte :** Aya reçoit 2 messages WhatsApp automatiques.

**Message 1 — Prise en charge :**
```
Bonjour Aya Traoré,

Votre colis a bien été pris en charge par UTB Transport ✅

📦 Réf : UTB-COL-2025-04-00089
🚌 Départ : Abidjan → Bouaké · 10h00
👤 Destinataire : Paul Bamba
⚖️ 15 kg · 2 500 FCFA encaissés

Vous serez notifiée à chaque étape.
— UTB Transport
```

**Message 2 — Colis en transit (envoi automatique à 10h05 au départ du bus) :**
```
Votre colis est en route ✅

🚌 UTB-COL-00089 · Bouaké
🕙 Départ confirmé à 10h05
📍 Arrivée estimée : 15h30

— UTB Transport
```

**Message 3 — Livré (automatique à l'arrivée) :**
```
Votre colis a été livré ✅

📦 UTB-COL-00089
✅ Réceptionné par Paul Bamba à 15h42
📍 Bouaké · Agence UTB

Merci pour votre confiance.
— UTB Transport
```

**Bouton :** "Voir la vue destinataire →" → Page 5

**Message clé à dire :**
> "Votre client n'a plus besoin d'appeler pour savoir où est son colis. Il reçoit tout automatiquement sur WhatsApp."

---

### Page 5 — Vue destinataire (WhatsApp — Paul Bamba)

**Paul reçoit un message à l'arrivée de son colis :**
```
Bonjour Paul Bamba,

Un colis vous est destiné 📦

🚌 UTB Transport — Bouaké
📦 Réf : UTB-COL-2025-04-00089
👤 Expéditeur : Aya Traoré (Abidjan)
⚖️ 2 cartons de vêtements · 15 kg

✅ Votre colis est arrivé à l'agence UTB Bouaké.
Vous pouvez venir le récupérer muni de ce message.

📍 Agence UTB · Gare de Bouaké
📞 +225 XX XX XX XX

— UTB Transport
```

**Bouton :** "Voir le dashboard final →" → Page 6

---

### Page 6 — Dashboard colis mis à jour (fin de démo)

**Même que Page 1, avec ce colis ajouté :**
- Recettes colis : **90 000 FCFA** (+2 500 FCFA)
- Colis enregistrés : **35** (au lieu de 34)
- Le colis UTB-COL-00089 apparaît en première ligne du tableau, statut "🔵 En transit"

**Message clé à dire :**
> "Ce colis vient d'apparaître ici. Vous savez en temps réel ce que votre équipe colis a encaissé. Et si un colis est perdu ou oublié, vous l'identifiez immédiatement."

---

## Navigation entre les pages

```
Page 0 (Login)
  └── "Se connecter" → Page 1 (Dashboard)

Page 1 (Dashboard)
  └── "+ Enregistrer un colis" → Page 2a

Page 2a → 2b → 2c (flux enregistrement en 3 étapes)
  └── "Valider" → Page 3 (Bon de prise en charge)

Page 3
  └── Mention WhatsApp → Page 4 (Vue expéditeur)

Page 4
  └── "Vue destinataire" → Page 5

Page 5
  └── "Dashboard final" → Page 6
```

---

## Palette & style

Identique à ResaBus Core — utiliser les mêmes couleurs et composants UTB.

| Élément spécifique Colis | Valeur |
|---|---|
| Icône colis | 📦 ou SVG carton |
| Badge "En transit" | Fond bleu clair `#dbeafe` · texte bleu `#1d4ed8` |
| Badge "Livré" | Fond vert clair `#dcfce7` · texte vert `#16a34a` |
| Badge "En attente" | Fond orange clair `#ffedd5` · texte orange `#ea580c` |

---

## Fonctionnalités à mettre en avant pendant la démo

| Fonctionnalité | Ce que ça résout concrètement |
|---|---|
| Bon de prise en charge QR | Fin des carnets papier, chaque colis est traçable |
| Notifications WhatsApp auto | Fin des appels "où est mon colis ?" |
| Tarification par poids | Fini les estimations à l'œil, le prix est calculé automatiquement |
| Sélection du départ | Fini les colis mis dans le mauvais bus |
| Dashboard recettes colis | Le directeur voit en temps réel, sans attendre la caisse du soir |
| Historique client | Fidélisation : "Aya Traoré a envoyé 12 colis ce mois" |

---

## Objections spécifiques au service colis

| Objection | Réponse |
|---|---|
| "Mes clients colis n'ont pas WhatsApp" | "Ils reçoivent aussi un SMS classique en secours." |
| "Mes agents ne savent pas peser les colis précisément" | "La grille tarifaire par tranche de poids simplifie tout. Pas besoin d'une balance au gramme." |
| "Et si le destinataire ne vient pas chercher son colis ?" | "Il reçoit une relance automatique. Et vous voyez dans le dashboard quels colis ne sont pas encore récupérés." |
| "J'ai peur de perdre des recettes colis" | "Au contraire : chaque colis est enregistré, donc chaque encaissement est tracé." |

---

## Checklist avant la démo Colis

- [ ] 6 pages créées dans Figma
- [ ] Navigation complète fonctionnelle en mode Preview
- [ ] Données fictives cohérentes (même agence UTB que ResaBus Core)
- [ ] Messages WhatsApp réalistes (Aya, Paul, UTB branding)
- [ ] Testé sur mobile (lien de partage Figma)
- [ ] Démo à blanc < 8 minutes

---

## Mise à jour après les rendez-vous terrain

> Compléter après chaque démo.

| Date | Agence | Ce qui a convaincu | Ce qui a bloqué | Fonctions demandées |
|---|---|---|---|---|
| | | | | |
