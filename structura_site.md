# Structura Site-ului: PhysioBaby (Clinica Kineto)

Aceasta este o prezentare detaliată a structurii site-ului tău (dezvoltat cu Eleventy/Nunjucks), incluzând paginile principale, secțiunile componente ale fiecărei pagini și elementele globale.

## 1. Elemente Globale (vizibile pe absolut toate paginile)
- **Bara de Navigare (Header / Navbar):**
  - Logo (stânga)
  - Linkuri principale: `Servicii`, `Afecțiuni`, `Prețuri`
  - Buton Call to Action (CTA): `Contact`
  - Meniu "burger" pentru varianta de mobil.
- **Subsol (Footer):**
  - Secțiunea Brand (Logo, text scurt "Kinetoterapie pediatrică București")
  - Program de funcționare (Luni – Vineri 08:00 – 17:00, Sâmbătă doar cu programare)
  - Date de Contact (Telefon, Email, Adresă completă)
  - Link-uri utile inferioare: Politică de confidențialitate, Termeni și condiții, ANPC
  - Copyright 2026.
- **Componente ascunse / Funcționalități adiționale:**
  - Buton flotant rapid ("Floating Button") pentru contact facil.
  - Fereastră modală GDPR pentru acord preluare date înainte de deschiderea WhatsApp.

---

## 2. Paginile Principale

### 🏠 Acasă (`index.njk`)
Pagina de landing (de aterizare), menită să atragă vizitatorii și să ofere cele mai importante informații pe scurt.
- **Hero Section:** Imagine principală de impact ("Kinetoterapie pediatrică București") + Citat inspirațional (Jana Kingsford).
- **Prezentare Terapeut (Cine sunt):** 
  - Scurtă introducere (Mihaela, kinetoterapeut pediatric).
  - 3 Piloni de încredere (Experiență internațională, Pregătire de specialitate, Dedicare totală) cu iconițe.
- **Serviciile Noastre (Sumar):** 
  - Prezentare tip grilă 3 carduri: Evaluare, Kinetoterapie, Terapie manuală (fiecare cu buton către detaliile serviciului respectiv).
- **Testimoniale (Părerile părinților):** 3 review-uri de la părinți pentru a adăuga social-proof și încredere (Maria D., Alexandru P., Elena M.).
- **Secțiune CTA (Bannere jos):** Îndemn final pentru programare, care trimite vizitatorul către contact.

### 💼 Servicii (`servicii.njk`)
O pagină care listează serviciile clinicii, categorisite pe vârstă și specific.
- **Header Pagină:** Titlu și subtitlu (fiecare copil este unic).
- **Lista detaliată a serviciilor (Grilă 4 carduri):**
  1. *Evaluarea psihomotorie și a reflexelor* (pentru 0-2 ani)
  2. *Evaluare musculo-scheletală și senzorială* (pentru 2-15 ani)
  3. *Kinetoterapie* (recuperare funcțională)
  4. *Terapia manuală* (tratament bazat pe atingere blândă)
  - *Notă: Fiecare card are butonul "Citește mai mult" care duce la paginile individuale dedicate fiecărui serviciu.*
- **Secțiune CTA (Bottom).**

### 🩺 Afecțiuni (`afectiuni.njk`)
Pagina exhaustivă unde părinții pot vedea ce tip de probleme pot fi tratate. Funcționează tip "Acordeon" (click pentru a citi explicația).
- **Header Pagină & Filozofia de lucru:** Importanța intervenției timpurii și abordarea holistică.
- **3 Categorii Mari de Afecțiuni:**
  1. **Ortopedice și de postură (Cele mai frecvente):**
     - *Cap și gât:* Plagiocefalie, Torticollis muscular congenital, Asimetrii.
     - *Torace:* Piept excavat.
     - *Coloană vertebrală:* Scolioză, Cifoză, Boala Scheuermann, Lordoză.
     - *Membre inferioare:* Displazie de șold, Genu varum, Genu valgum, Genu recurvatum, Talus valgus/varus, Var equin, Metatarsus adductus.
  2. **Neurologice:** Întârzieri motorii, Paralizie Cerebrală Infantilă, Sindrom Down, Distrofii musculare.
  3. **Musculare și traumatice:** Recuperare post-operatorie sau post-traumatică.
- **Secțiune CTA (Bottom).**

### 💳 Prețuri / Tarife (`preturi.njk`)
Informații financiare prezentate clar și transparent.
- **Servicii individuale:** 
  - Evaluare: 200 RON / 40 min
  - Kinetoterapie: 180 RON / 50 min
  - Terapie manuală: 250 RON / 50 min
- **Pachete de ședințe (cu reducere evidențiată):**
  - *Kinetoterapie pură:* 4 ședințe (680 RON), 8 ședințe (1300 RON), 12 ședințe (1900 RON).
  - *Kinetoterapie + Terapie manuală:* 4 ședințe mixte (750 RON), 8 ședințe mixte (1500 RON), 12 ședințe mixte (2200 RON).
  - *Terapie manuală pură:* 4 ședințe (900 RON), 8 ședințe (1800 RON), 12 ședințe (2600 RON).
- **Banner Deplasări la domiciliu:** Serviciu special vizibil dedesubt (pentru bebeluși 0-1 an, preț 300 RON/ședință).

### 📞 Contact (`contact.njk`)
Punctul de conversie al site-ului (unde vizitatorii se programează).
- **Banda Rapidă WhatsApp:** Cel mai proeminent element pentru contact imediat.
- **Grilă cu 4 informații esențiale:** Telefon, Email, Adresa Fizică, Programul.
- **Secțiune Hartă Interactivă:** Embed din Google Maps cu opțiune GDPR de încărcare + Link direct "Deschide în Google Maps".
- **Întrebări Frecvente (FAQ):** 
  - "De la ce vârstă?"
  - "Cum mă programez?"
  - "Cât durează?"
  - "Se fac deplasări la domiciliu?"
- **Bottom Call to Action final:** "Ești gata să faci primul pas?".

---

## 3. Pagini Specializate (Detalii Servicii)
(Acestea sunt destinațiile finale când utilizatorul dă click pe "Citește mai mult" din pagina de *Servicii*).
- `evaluare-psihomotorie.njk`: Detalii despre evaluarea specifică sugarilor/copiilor 0-2 ani.
- `evaluare-musculo-scheletala.njk`: Detalii despre evaluarea pentru copii și adolescenți (2-15 ani).
- `kinetoterapie.njk`: Explicarea programului de kinetoterapie, tehnici, exerciții.
- `terapie-manuala.njk`: Prezentarea manevrelor blânde de relaxare miofascială și detensionare articulară.

---

## 4. Pagini Legale
Aceste pagini se regăsesc în footer pentru a fi conforme cu legislația curentă de web.
- **Politica de confidențialitate** (`politica-confidentialitate.njk`)
- **Termeni și condiții** (`termeni-si-conditii.njk`)
