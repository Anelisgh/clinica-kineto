# 📖 Ghid de Administrare și Modificare Site — PhysioBaby

Acest document reprezintă ghidul tehnic de administrare pentru actualizarea conținutului și resurselor media ale site-ului **PhysioBaby** (construite pe arhitectura Eleventy / Nunjucks). 

Toate fișierele sursă de conținut se găsesc în directorul `src/` și au extensia `.njk` (șabloane Nunjucks ce conțin markup HTML și text).

---

## 📋 Cuprins

1. [Fluxul de editare prin GitHub](#1-fluxul-de-editare-prin-github)
2. [Gestionarea imaginilor (.webp)](#2-gestionarea-imaginilor-webp)
3. [Date de Contact — Inventar complet](#3-date-de-contact--inventar-complet)
4. [Elemente Globale (Header, Footer, Floating WhatsApp)](#4-elemente-globale-header-footer-floating-whatsapp)
5. [Pagina Principală (index.njk)](#5-pagina-principală-indexnjk)
6. [Pagina Servicii și paginile dedicate](#6-pagina-servicii-și-paginile-dedicate)
7. [Pagina Afecțiuni (afectiuni.njk)](#7-pagina-afecțiuni-afectiuninjk)
8. [Pagina Prețuri (preturi.njk)](#8-pagina-prețuri-preturinjk)
9. [Pagina Contact (contact.njk)](#9-pagina-contact-contactnjk)
10. [Tabel de Referință Rapidă](#10-tabel-de-referință-rapidă)
11. [SEO & Marketing Digital](#11-seo--marketing-digital)

---

## 1. Fluxul de editare prin GitHub

Editarea site-ului se poate face direct din browser, prin interfața GitHub:

1. Navighează în depozitul proiectului pe GitHub la fișierul pe care dorești să îl modifici (de exemplu: `src/index.njk`).
2. Apasă pe pictograma de editare (**pencil icon** / *Edit this file*).
3. Efectuează modificările pe text direct în editorul web.
4. Salvează modificările apăsând pe butonul **Commit changes...** (păstrând opțiunea *Commit directly to the `main` branch*).

> **Notă sintactică:** La editarea textului din fișierele `.njk`, atenție la marcajele HTML (ex: `<h2>...</h2>`, `<p>...</p>`) și la ghilimelele atributelor (`href="..."`, `src="..."`). Se modifică doar textul util dintre etichete.

> **Notă deploy:** După apăsarea **Commit changes**, modificările nu apar instantaneu pe site-ul live. Netlify procesează și publică automat noua versiune — durează de obicei **1-2 minute**. Dă un refresh pe site după câteva minute pentru a vedea modificarea.

---

## 2. Gestionarea imaginilor (.webp)

Pentru performanță și timp de încărcare optim, toate imaginile de pe site sunt stocate în format **WebP** în directorul:

```
src/assets/img/
```

Înlocuirea unei imagini existente nu necesită modificări de cod, ci doar suprascrierea fișierului de imagine direct pe GitHub sau local:

### Procesul de înlocuire:
1. **Conversie:** Convertește noua imagine (JPG/PNG) în format `.webp` folosind un utilitar sau serviciul gratuit [CloudConvert PNG/JPG to WEBP](https://cloudconvert.com/png-to-webp).
2. **Redenumire:** Redenumește fișierul convertit cu numele **exact** al imaginii vechi pe care dorești să o înlocuiești.
3. **Upload:** Încarcă fișierul în folderul `src/assets/img/` (prin butonul *Add file* -> *Upload files* din GitHub) și confirmă suprascrierea.

### Harta resurselor media de pe site:

| Fișier imagine | Amplasare / Rol |
|---|---|
| `intro-image.webp` | Imaginea de fundal din secțiunea Hero (Pagina Principală) |
| `mihaela-terapeut.webp` | Poza de profil din secțiunea „Cine sunt" |
| `evaluare.webp` | Cardul de Serviciu „Evaluare" (Homepage) |
| `kinetoterapie.webp` | Cardul de Serviciu „Kinetoterapie" (Homepage) |
| `terapie-manuala.webp` | Cardul de Serviciu „Terapie manuală" (Homepage) |
| `evaluare-psihomotorie.webp` | Imaginea din pagina detaliată Evaluare Psihomotorie |
| `evaluare-musculo-scheletala.webp` | Imaginea din pagina detaliată Evaluare Musculo-Scheletată |
| `logo.webp` / `logo_navbar.webp` | Siglele din Footer și Navbar |

---

## 3. Date de Contact — Inventar complet

Datele de contact (telefon, email, adresă, linkuri WhatsApp) sunt **hardcodate** în multiple fișiere. La orice schimbare, toate locurile de mai jos trebuie actualizate simultan.

### Tabel centralizat

| Dată | Fișier | Identificator în cod |
|---|---|---|
| **Telefon** (link apelabil) | `src/_includes/partials/footer.njk` | `href="tel:0726673431"` și textul afișat `0726 673 431` |
| **Telefon** (link apelabil) | `src/contact.njk` | `href="tel:0726673431"` și textul afișat `0726 673 431` |
| **Telefon** (text simplu) | `src/termeni-si-conditii.njk` | `<strong>0726673431</strong>` |
| **Telefon** (text simplu) | `src/politica-confidentialitate.njk` | `<strong>0726673431</strong>` |
| **Telefon** (Schema.org SEO) | `src/_includes/partials/schema.njk` | `"telephone": "0726673431"` |
| **Email** (link mailto) | `src/_includes/partials/footer.njk` | `href="mailto:mihaela.badaluta23@gmail.com"` și textul afișat |
| **Email** (link mailto) | `src/contact.njk` | `href="mailto:mihaela.badaluta23@gmail.com"` și textul afișat |
| **Email** (text simplu) | `src/politica-confidentialitate.njk` | `<strong>mihaela.badaluta23@gmail.com</strong>` (apare de 2 ori) |
| **Email** (text simplu) | `src/termeni-si-conditii.njk` | `<strong>mihaela.badaluta23@gmail.com</strong>` |
| **Adresă** | `src/_includes/partials/footer.njk` | Text în `<span class="footer-info-value">` |
| **Adresă** | `src/contact.njk` | Apare de 2 ori (card + subtitlu hartă) |
| **Adresă** (Schema.org SEO) | `src/_includes/partials/schema.njk` | `"streetAddress"`, `"postalCode"`, `"addressRegion"` |
| **Adresă** (text legal) | `src/politica-confidentialitate.njk` | Apare de 2 ori în secțiunea introductivă |
| **Adresă** (text legal) | `src/termeni-si-conditii.njk` | Apare în secțiunea introductivă |
| **WhatsApp** (buton flotant) | `src/_includes/partials/floating-button.njk` | `phone=40726673431` |
| **WhatsApp** (bara rapidă) | `src/contact.njk` | `phone=40726673431` |
| **WhatsApp** (CTA final) | `src/contact.njk` | `phone=40726673431` |

> **Notă schema.njk:** Acest fișier conține markup JSON-LD (structured data pentru Google). Este inclus automat pe **toate paginile** prin layout-ul `base.njk`. Actualizarea lui este importantă pentru indexarea corectă în motoarele de căutare.

### Cum se actualizează numărul de WhatsApp

Linkurile WhatsApp folosesc formatul internațional **fără `+`** și fără spații:
```
https://api.whatsapp.com/send?phone=40726673431&text=...
```
Pentru un număr nou (ex: `0740 000 111`), valoarea `phone` devine `40740000111`.
Parametrul `&text=...` (mesajul pre-completat) rămâne nemodificat.

---

## 4. Elemente Globale (Header, Footer, Floating WhatsApp)

Elementele comune tuturor paginilor sunt modularizate în folderul `src/_includes/partials/`.

### 📍 Footer (Subsol)
**Fișier:** `src/_includes/partials/footer.njk`

* **Telefon:** Actualizează atât valoarea din atributul `href="tel:0726673431"`, cât și textul afișat `0726 673 431`.
* **Email:** Actualizează linkul `href="mailto:mihaela.badaluta23@gmail.com"` și textul afișat.
* **Adresă:** Modifică textul din blocurile `<span>` aferente adresei fizice.
* **Program:** Modifică orele din blocul `<span class="schedule-hours">` și notița pentru weekend.

### 📍 Butonul Flotant de WhatsApp (Floating Button)
**Fișier:** `src/_includes/partials/floating-button.njk`

Butonul verde fix din colțul ecranului conține linkul direct de WhatsApp:
```html
<a href="https://api.whatsapp.com/send?phone=40726673431&text=..." ...>
```
* Pentru schimbarea numărului, modifică `40726673431` (format internațional fără `+` sau spații) în parametrul `phone=`.

---

## 5. Pagina Principală (index.njk)

**Fișier:** `src/index.njk`

* **Citat Hero:** Caută clasa `intro-quote` și `intro-author` (lângă linia 14) pentru actualizarea citatului și a autorului.
* **Prezentare Terapeut:** 
  * Titlul și descrierea principală se află în div-ul `.hero-text` (sub `<h2>Bună! Sunt Mihaela...</h2>`).
  * Cei 3 piloni de încredere (Experiență internațională, Pregătire, Dedicare) se află în lista `.hero-credentials`. Modifică textele din `<strong class="credential-title">` și `<span class="credential-desc">`.
* **Testimoniale (Părerile părinților):** 
  * Fiecare recenzie este încapsulată într-un bloc `<div class="testimonial-card">`.
  * Modifică textul recenziei (`.testimonial-text`), inițialele (`.testimonial-avatar`), numele părintelui (`.testimonial-name`) și eticheta (`.testimonial-tag`).

---

## 6. Pagina Servicii și paginile dedicate

### 📍 Sumar Servicii
**Fișier:** `src/servicii.njk`
Conține cardurile de prezentare generală pentru cele 4 categorii de servicii. Fiecare card conține titlul (`<h2>`/`<h3>`), subtitlul cu grupa de vârstă și o scurtă descriere.

### 📍 Pagini detaliate per serviciu
Conținutul extins al fiecărui serviciu se editează separat în fișierele dedicate din root-ul `src/`:
* `src/evaluare-psihomotorie.njk` (0–2 ani)
* `src/evaluare-musculo-scheletala.njk` (2–15 ani)
* `src/kinetoterapie.njk`
* `src/terapie-manuala.njk`

---

## 7. Pagina Afecțiuni (afectiuni.njk)

**Fișier:** `src/afectiuni.njk`

Pagina este structurată sub formă de acordeon interactiv pe 3 mari categorii:
1. **Ortopedice și de postură** (Cap/gât, Torace, Coloană, Membre inferioare)
2. **Neurologice**
3. **Musculare și traumatice**

Listele de afecțiuni sunt definite prin elemente standard `<ul>` și `<li>`:
```html
<li>Plagiocefalie</li>
<li>Torticollis muscular congenital</li>
```
Pentru adăugarea unei afecțiuni noi, se inserează un rând `<li>Denumire</li>` în categoria corespunzătoare.

---

## 8. Pagina Prețuri (preturi.njk)

**Fișier:** `src/preturi.njk`

* **Servicii Individuale:** Valorile sunt stocate în elemente `<span class="pricing-value">`:
  ```html
  <span class="pricing-value">250</span>
  ```
  Modifică doar valoarea numerică.
* **Pachete de ședințe:** Grila de pachete conține 3 coloane (Kinetoterapie, Mixt, Terapie manuală). Prețurile sunt stocate în `<span class="package-price-value">` (ex: `750`, `1.500`), iar reducerile în `<span class="package-discount-badge">`.
* **Banner Deplasări Domiciliu:** Se află în div-ul `.home-visit-banner` în partea de jos a paginii (descriere și preț).

---

## 9. Pagina Contact (contact.njk)

**Fișier:** `src/contact.njk`

### 💬 Linkuri directe WhatsApp
În pagina de contact există două butoane mari pentru WhatsApp (Quick Bar sus și Final CTA jos). Ambele folosesc structura:
`https://api.whatsapp.com/send?phone=40726673431&text=...`
Se va actualiza parametrul `phone` cu noul număr în format internațional.

### 🗺️ Google Maps (Embed + Link Direct)
Secțiunea de hartă folosește un sistem de încărcare la cerere (GDPR compliant):

1. **Harta interactivă (Embed):** 
   În div-ul `.map-iframe-container`, identifică atributul `data-src`:
   ```html
   data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!..."
   ```
   Dacă adresa se schimbă, generarea unui nou link se face din Google Maps -> *Share* -> *Embed a map* -> copiere valoare din `src="..."`.
2. **Button "Deschide în Google Maps" (Link direct):**
   Aparține elementului `<a class="map-floating-link" href="...">`. Se înlocuiește URL-ul de tip `https://maps.app.goo.gl/...` cu noul link de partajare din Google Maps.

### ❓ Întrebări Frecvente (FAQ)
Fiecare întrebare este reprezentată de un bloc `.faq-item`:
```html
<div class="faq-item">
    <button class="faq-question">
        <h3>De la ce vârstă poate fi consultat copilul?</h3>
        ...
    </button>
    <div class="faq-answer">
        <div class="faq-answer-inner">
            Text răspuns...
        </div>
    </div>
</div>
```
Modificările de text se fac în `<h3>` (întrebarea) și în `.faq-answer-inner` (răspunsul).

---

## 10. Tabel de Referință Rapidă

| Element de modificat | Cale fișier | Identificator în cod / Căutare |
|---|---|---|
| Date contact footer (tel/mail/adresă) | `src/_includes/partials/footer.njk` | `tel:`, `mailto:`, `footer-info-value` |
| Număr buton WhatsApp flotant | `src/_includes/partials/floating-button.njk` | `phone=40726673431` |
| Text introducere / Citat hero | `src/index.njk` | `intro-quote`, `hero-text` |
| Testimoniale părinți | `src/index.njk` | `section-testimonials`, `testimonial-card` |
| Lista de afecțiuni tratate | `src/afectiuni.njk` | `<li>` în secțiunile ortopedice/neurologice |
| Prețuri individuale & pachete | `src/preturi.njk` | `pricing-value`, `package-price-value` |
| Numere WhatsApp pagină contact | `src/contact.njk` | `api.whatsapp.com/send?phone=` |
| Harta Google Maps (embed & direct link) | `src/contact.njk` | `data-src="https://www.google.com/maps/embed`, `maps.app.goo.gl` |
| Întrebări frecvente (FAQ) | `src/contact.njk` | `faq-section`, `faq-item` |
| Imaginile de pe site | `src/assets/img/` | Suprascriere fișiere `.webp` |

---

## 11. SEO & Marketing Digital

### Fundația tehnică

Site-ul a obținut scor **100/100 la categoria SEO în Lighthouse**. Asta înseamnă că Google îl indexează ușor și tot ce ține de fundația tehnică este rezolvat.

Ce s-a implementat din punct de vedere SEO:
- **Date structurate pentru Google** (Schema.org) — site-ul transmite automat către Google informații despre clinică: nume, adresă, telefon, program. Fișier: `src/_includes/partials/schema.njk`
- **Titlu și descriere unice per pagină** — fiecare pagină are propriul Meta Title și Meta Description (detalii în secțiunea de mai jos)
- **Imagini optimizate** — format WebP cu dimensiuni declarate explicit, astfel încât pagina nu „sare" în timp ce se încarcă
- **Fonturi găzduite local** — fonturile nu se încarcă de pe serverele Google, ci direct de pe site, eliminând o sursă de întârziere și o cerere externă
- **Imaginea principală încărcată prioritar** — imaginea mare de pe homepage se încarcă prima, înainte de orice altceva, pentru o afișare instantă

---

### Meta Title și Meta Description per pagină

Fiecare pagină își definește propriul titlu și descriere în **frontmatter-ul** fișierului (blocul `---` de la început). Exemplu din `src/index.njk`:

```yaml
---
layout: layouts/base.njk
title: "Kinetoterapie pediatrică · București"
description: "Recuperare medicală și kinetoterapie pentru bebeluși și copii în București..."
---
```

Valorile `title` și `description` sunt injectate automat în `<head>` prin `src/_includes/layouts/base.njk` (liniile 6–7):

```html
<title>{{ title }} | PhysioBaby</title>
<meta name="description" content="{{ description }}">
```

Frontmatter-ul fiecărei pagini:

| Fișier | `title` | `description` |
|---|---|---|
| `src/index.njk` | Kinetoterapie pediatrică · București | Recuperare medicală și kinetoterapie pentru bebeluși și copii în București. Ajutăm micii pacienți să își atingă potențialul maxim prin terapie blândă. |
| `src/servicii.njk` | Servicii de kinetoterapie · București | Oferim servicii specializate de evaluare psihomotorie, kinetoterapie pentru copii și terapie manuală blândă în clinica noastră din București. |
| `src/afectiuni.njk` | Afecțiuni tratate la copii · kinetoterapie | Tratăm o gamă largă de afecțiuni la copii: scolioză, cifoză, asimetrii posturale, întârzieri motorii și afecțiuni neurologice în București. |
| `src/preturi.njk` | Tarife & pachete kinetoterapie · București | Consultă prețurile pentru evaluări psihomotorii, ședințe de kinetoterapie și terapie manuală în București. Oferim pachete avantajoase de ședințe. |
| `src/contact.njk` | Contact & programări · București | Contactează clinica PhysioBaby în București pentru programări la kinetoterapie pediatrică și evaluări psihomotorii. Telefon: 0726 673 431. |
| `src/kinetoterapie.njk` | Kinetoterapie pediatrică · recuperare copii | Programe personalizate de kinetoterapie pentru copii și bebeluși în București. Tratăm deficiențe posturale și stimulăm dezvoltarea motorie. |
| `src/terapie-manuala.njk` | Terapie manuală · București | Terapie manuală blândă în București. Corectăm tensiunile musculare și asimetriile posturale apărute la naștere. |
| `src/evaluare-psihomotorie.njk` | Evaluare psihomotorie bebeluși · București | Evaluarea etapelor de dezvoltare psihomotorie și a reflexelor primitive pentru bebeluși (0-2 ani) la clinica PhysioBaby București. |
| `src/evaluare-musculo-scheletala.njk` | Evaluare musculo-scheletală copii (2-15 ani) | Detectarea asimetriilor corporale și dezechilibrelor musculare prin testări amănunțite pentru copii și adolescenți în București. |

*PhysioBaby — Kinetoterapie pediatrică București*
