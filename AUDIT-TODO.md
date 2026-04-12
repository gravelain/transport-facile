# Audit Transport Facile — Liste des tâches restantes

> Document de référence. Mis à jour au fur et à mesure des livraisons.
> Priorités : 🔴 Bloquant avant mise en ligne · 🟠 Fortement recommandé · 🟡 Amélioration · 🟢 Optionnel / futur

---

## 1. Formulaire de contact — Fonctionnalité & Sécurité

Le formulaire dans `components/Contact.tsx` affiche un faux "succès" après 1 seconde (`setTimeout`). Il n'envoie **aucun message nulle part**.

### 🔴 Rendre le formulaire fonctionnel

- [ ] Créer la route API `app/api/contact/route.ts`
- [ ] Brancher l'envoi d'email via un service transactionnel : **Resend** (recommandé, gratuit jusqu'à 3 000 emails/mois) ou Nodemailer + SMTP
- [ ] Stocker les variables sensibles dans `.env.local` :
  ```
  RESEND_API_KEY=re_xxxxx
  CONTACT_EMAIL=contact@transport-facile.com
  ```
- [ ] Connecter le `handleSubmit` du formulaire à la route API (remplacer le `setTimeout` par un vrai `fetch("/api/contact", ...)`)
- [ ] Afficher les erreurs réseau à l'utilisateur (état `error` dans le composant)

### 🔴 Validation des champs

Actuellement le formulaire utilise `noValidate` — il n'y a **aucune validation active**. À implémenter :

- [ ] **Nom** : requis, minimum 2 caractères, pas de chiffres
- [ ] **Agence** : requise, minimum 2 caractères
- [ ] **Email** : requis, format valide (regex ou librairie)
- [ ] **Téléphone** : optionnel, mais si renseigné : format `+225 XX XX XX XX XX` ou équivalent
- [ ] **Message** : optionnel, mais longueur max 2 000 caractères pour éviter les abus
- [ ] Afficher les erreurs sous chaque champ en rouge (pas seulement en `alert`)
- [ ] Désactiver le bouton "Envoyer" tant que les champs requis ne sont pas valides

Librairie conseillée : **Zod** (déjà souvent utilisé avec Next.js, validation partagée front/API) ou validation manuelle simple.

### 🔴 Sécurité du formulaire

- [ ] **Honeypot anti-spam** : ajouter un champ invisible (`<input name="_trap" style={{display:'none'}} />`) côté front, le rejeter côté API si renseigné
- [ ] **Rate limiting** côté API : rejeter plus de 5 soumissions par IP par heure. Librairie : `upstash/ratelimit` (si Vercel Edge) ou `express-rate-limit` équivalent
- [ ] **Sanitisation des inputs** côté serveur avant envoi de l'email : échapper le HTML, limiter la longueur, rejeter les URLs suspectes dans le message
- [ ] **Vérification CSRF** : Next.js App Router est protégé par défaut sur les routes API (SameSite cookie), mais vérifier si un token est nécessaire selon le setup d'auth futur
- [ ] **reCAPTCHA v3 ou Cloudflare Turnstile** (optionnel mais recommandé en production) : invisible pour l'utilisateur, bloque les bots automatisés
- [ ] Retourner des messages d'erreur génériques côté API (ne pas exposer les détails techniques dans la réponse HTTP)

### 🟠 Email de confirmation automatique

- [ ] Envoyer un email de confirmation à l'expéditeur dès réception ("Votre message a bien été reçu, nous répondons sous 24h")
- [ ] Template HTML soigné à l'image de l'agence

---

## 2. Contenu à remplacer (placeholders)

### ✅ Numéro WhatsApp

- [x] Numéro `+33 6 52 94 53 83` déjà en place dans `WhatsAppButton.tsx`, `FAQ.tsx`, `Contact.tsx`, `fr.json`, `en.json`

### 🔴 Témoignages

- [ ] Remplacer les 3 témoignages placeholder dans `components/SocialProof.tsx` par de vrais retours clients
- [ ] Idéalement : ajouter une photo de profil réelle (ou initiales + couleur validée par le client)
- [ ] Valider les citations avec les directeurs concernés avant publication

### 🟠 Section "À propos"

- [ ] Vérifier / compléter le texte sur l'histoire de Transport Facile dans `components/About.tsx`
- [ ] Ajouter les noms des fondateurs si souhaité
- [ ] Ajouter une photo d'équipe ou une image illustrative (côté droit actuellement vide ou en cours)

---

## 3. Assets visuels manquants

### 🟠 Image Open Graph

- [ ] Créer `/public/og-image.png` (dimensions : **1200 × 630 px**)
  - Fond bleu avec logo Transport Facile, accroche principale, visuels mobiles
  - Utilisée par Facebook, LinkedIn, WhatsApp, Twitter pour les aperçus de liens
  - Outil gratuit : Figma, Canva, ou générer programmatiquement avec `@vercel/og`
- [ ] Vérifier dans `app/layout.tsx` que le meta tag `openGraph.images` pointe bien vers cette image

### 🟡 Favicon complet

- [ ] Vérifier la présence de `/public/favicon.ico`, `/public/icon.png` (512×512), `/public/apple-icon.png` (180×180)
- [ ] Générer les variantes via [realfavicongenerator.net](https://realfavicongenerator.net)

### 🟡 Image de démonstration AppPreview

- [ ] Remplacer le mockup téléphone dans `components/AppPreview.tsx` par une vraie capture d'écran de ResaBus (interface de réservation)

---

## 4. SEO

### ✅ Implémenté

- [x] **i18n complet** : dictionnaires `fr.json` / `en.json`, routing `/fr` et `/en`, `DictionaryProvider` + `useDictionary()`, tous les composants traduits
- [x] **Langue par défaut en français** : `proxy.ts` redirige toujours vers `/fr` peu importe la langue du navigateur
- [x] **Language switcher** : variant compact mobile (`bar`), desktop pill, switch sans rechargement
- [x] **`generateMetadata` par locale** dans `app/[lang]/page.tsx` : title/description/OG/Twitter par locale (fr_CI / en_US)
- [x] **Balises hreflang** (`x-default`, `fr`, `en`) générées via `alternates.languages` dans `generateMetadata`
- [x] **Sitemap corrigé** : URLs `/fr` et `/en` réelles (plus d'ancres `#fragment` qui ne sont pas indexées)
- [x] **JSON-LD** : `Organization`, `SoftwareApplication` dans le root layout ; `FAQPage` dans le composant FAQ
- [x] **`robots` meta** : `index: true`, `follow: true`, directives Googlebot
- [x] **`metadataBase`** configuré dans le root layout
- [x] **`<html lang>`** dynamique selon la locale courante (via header `x-locale`)

### 🟠 Google Search Console

- [ ] Créer un compte Google Search Console et lier à `transport-facile.com`
- [ ] Décommenter / renseigner le champ `verification` dans `app/layout.tsx` (champ prévu mais commenté)
- [ ] Soumettre le sitemap après déploiement : `https://transport-facile.com/sitemap.xml`

### 🟡 Vérifier le rendu des rich snippets

- [ ] Tester les JSON-LD (`Organization`, `SoftwareApplication`, `FAQPage`) dans le [Rich Results Test de Google](https://search.google.com/test/rich-results)
- [ ] S'assurer que les 8 FAQ apparaissent bien dans les résultats "People Also Ask"

### 🟡 Images avec attributs `alt`

- [ ] Auditer toutes les balises `<img>` et les composants `Image` (Next.js) pour s'assurer que chaque image a un `alt` descriptif

### 🟡 Balises meta `description` par page

- [ ] Si des pages supplémentaires sont créées (CGU, blog…), chacune doit avoir sa propre `description` dans ses métadonnées

---

## 5. Pages légales (obligatoires)

### 🔴 Mentions légales

- [ ] Créer `app/mentions-legales/page.tsx` avec :
  - Nom et forme juridique de la société
  - Adresse du siège social (Abidjan)
  - Numéro RCCM (registre du commerce)
  - Directeur de la publication
  - Hébergeur (Vercel, avec adresse)

### 🔴 Politique de confidentialité

- [ ] Créer `app/politique-de-confidentialite/page.tsx`
  - Données collectées (formulaire contact, cookies analytics)
  - Durée de conservation
  - Droits de l'utilisateur (accès, suppression)
  - Contact DPO si applicable
  - Conformité ARTCI / RGPD (transfert de données hors UE si Vercel US)

### 🟠 Conditions Générales d'Utilisation (CGU)

- [ ] Créer `app/cgu/page.tsx` : conditions de la plateforme ResaBus pour les agences partenaires

### 🟠 Liens dans le footer

- [ ] Ajouter les liens "Mentions légales", "Politique de confidentialité", "CGU" dans `components/Footer.tsx` (section bas de page)

---

## 6. Déploiement & Infrastructure

### 🔴 Configuration du domaine

- [ ] Pointer `transport-facile.com` et `www.transport-facile.com` vers Vercel (ou hébergeur choisi)
- [ ] Vérifier la redirection `www` → sans www (ou l'inverse) de manière cohérente
- [ ] SSL/TLS activé (automatique sur Vercel)

### 🔴 Variables d'environnement en production

- [ ] Renseigner toutes les variables `.env.local` dans le tableau de bord Vercel (Production + Preview)
- [ ] Ne jamais commiter `.env.local` dans Git (vérifier `.gitignore`)

### 🟠 Domaine `resabus.com`

- [ ] Vérifier / configurer le domaine `resabus.com` (utilisé dans `AppPreview.tsx` et plusieurs composants)
- [ ] Rediriger ou faire pointer vers la plateforme SaaS client

### 🟡 Preview deployments

- [ ] Configurer Vercel pour créer un aperçu automatique sur chaque branche / PR

---

## 7. Analytics & Monitoring

### 🟠 Analytics

- [ ] Intégrer **Vercel Analytics** (déjà disponible sur Vercel, sans cookie consent pour les données agrégées) : `@vercel/analytics`
- [ ] Ou **Plausible.io** (privacy-friendly, conforme RGPD, sans cookie banner) : recommandé pour le marché africain
- [ ] Suivre au minimum : pages vues, clics sur les CTAs, taux de conversion formulaire

### 🟡 Suivi des conversions

- [ ] Tracker les événements clés : clic "Je veux démarrer", soumission formulaire, clic WhatsApp flottant
- [ ] Relier à Google Analytics 4 si nécessaire pour les campagnes publicitaires

### 🟡 Monitoring des erreurs

- [ ] Intégrer **Sentry** (plan gratuit) pour capturer les erreurs JavaScript en production
  ```bash
  npm install @sentry/nextjs
  ```

---

## 8. Performance

### 🟠 Core Web Vitals

- [ ] Lancer un audit Lighthouse sur la page de production (objectif : LCP < 2.5s, CLS < 0.1)
- [ ] Vérifier que les images sont servies en WebP/AVIF (déjà configuré dans `next.config.ts`)
- [ ] Vérifier que les polices Inter sont optimisées (déjà via `next/font`)

### 🟡 Lazy loading des sections

- [ ] Vérifier que les sections en bas de page (`SocialProof`, `About`, `FAQ`) n'impactent pas le LCP
- [ ] Utiliser `dynamic(() => import(...), { ssr: false })` pour les composants clients lourds si nécessaire

---

## 9. Accessibilité (a11y)

### 🟡 Audit de base

- [ ] Vérifier le contraste couleur sur tous les textes (minimum WCAG AA : 4.5:1)
- [ ] S'assurer que tous les boutons ont un `aria-label` ou un texte visible
- [ ] Les accordéons FAQ utilisent déjà `aria-expanded` — vérifier `aria-controls`
- [ ] Navigation au clavier fonctionnelle (Tab, Enter, Echap pour fermer les modales)
- [ ] `lang="fr"` déjà présent sur `<html>` ✓

---

## 10. Tests

### 🟡 Tests manuels à effectuer avant la mise en ligne

- [ ] Tester le formulaire de contact de bout en bout (envoi réel d'un email)
- [ ] Tester sur mobile réel : iPhone Safari, Chrome Android (pas seulement le simulateur)
- [ ] Tester en connexion 3G simulée (Chrome DevTools > Network throttling)
- [ ] Tester en mode hors ligne partiel
- [ ] Tester sans extensions de navigateur (mode incognito) pour éviter les faux positifs Bitdefender
- [ ] Vérifier tous les liens internes et `href="#ancre"` (scrollent vers la bonne section ?)
- [ ] Vérifier les liens externes : WhatsApp, email

---

## 11. Contenu commercial à préparer

### 🟠 Préparer pour la mise en ligne

- [ ] Écrire un vrai email de bienvenue partenaire (template HTML)
- [ ] Préparer un deck de présentation court (5 slides) pour les prospects qui demandent plus d'infos
- [ ] Lister les premières agences à démarcher sur Abidjan

### 🟡 Blog / contenu SEO

- [ ] Créer 2-3 articles ciblant des requêtes longue traîne : "comment digitaliser agence de transport Abidjan", "réservation billet bus en ligne Côte d'Ivoire"
- [ ] Chaque article renforce l'autorité du domaine et génère du trafic organique sans payer

---

## Récapitulatif des priorités

| Priorité | Tâche |
|----------|-------|
| ✅ | i18n FR/EN complet (dictionnaires, routing, composants traduits) |
| ✅ | Langue par défaut français + language switcher responsive |
| ✅ | SEO : hreflang, generateMetadata par locale, sitemap, JSON-LD, robots |
| 🔴 | Brancher le formulaire de contact (vrai envoi email) |
| 🔴 | Valider et sécuriser le formulaire (validation + honeypot + rate limit) |
| ✅ | Numéro WhatsApp `+33 6 52 94 53 83` déjà en place |
| 🔴 | Remplacer les témoignages placeholder |
| 🔴 | Créer les pages légales (Mentions légales, Politique de confidentialité) |
| 🔴 | Configurer le domaine et les variables d'environnement en production |
| 🟠 | Créer `/public/og-image.png` (1200×630) |
| 🟠 | Soumettre le sitemap à Google Search Console |
| 🟠 | Intégrer les analytics (Vercel Analytics ou Plausible) |
| 🟠 | Compléter la section "À propos" avec le vrai contenu |
| 🟡 | Audit Lighthouse + Core Web Vitals |
| 🟡 | Accessibilité et tests cross-navigateur |
| 🟡 | Blog SEO |
