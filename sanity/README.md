# FUSED projectbeheer

De Sanity Studio beheert de realisaties van FUSED. De Studio staat los van de publieke Astro-website, maar gebruikt dezelfde repository en dezelfde contentmodellen.

## Projectconfiguratie

- Sanity project ID: `ulj7mtyd`
- Dataset: `production`
- Studio titel: FUSED – Projectbeheer
- Dataset visibility: public, zodat de statische website gepubliceerde inhoud kan uitlezen.

De project-ID en dataset zijn publieke configuratiegegevens. Commit nooit API-tokens of andere geheimen.

## Lokaal starten

1. Installeer de dependencies met `npm install`.
2. Kopieer `.env.example` naar `.env` als je de standaardconfiguratie wilt overschrijven.
3. Start de Studio met `npm run studio`.
4. Meld je aan met je Sanity-account.

## Studio publiceren

Voer `npm run studio:deploy` uit en kies een unieke Sanity-hostnaam wanneer de CLI daarom vraagt. Na publicatie kan de Studio-URL bij Sanity onder **Studios** worden geregistreerd.

## Projecten beheren

- Maak een nieuwe realisatie aan via **Realisaties**.
- Vul titel, webadres, categorie, korte omschrijving en projectomschrijving in.
- Voeg een hoofdfoto toe en vul de alternatieve tekst in.
- Voeg indien gewenst extra foto's toe.
- Zet **Uitlichten op de startpagina** aan om het project op de homepage te tonen.
- Gebruik de publicatieknop in Sanity om een project zichtbaar te maken.

Niet-gepubliceerde concepten zijn niet zichtbaar op de publieke website. Publiceer geen vertrouwelijke klantgegevens of adressen.

## Toegangsbeheer

De eigenaar beheert leden via Sanity. Geef Frederik pas toegang wanneer de Studio is getest. Gebruik persoonlijke accounts; deel geen eigenaar-login.

## Websitekoppeling

De publieke Astro-site leest gepubliceerde documenten uit de publieke dataset via de Sanity CDN. Hiervoor is geen schrijftoken nodig. Schrijftoegang blijft uitsluitend in de geauthenticeerde Sanity Studio.

De website gebruikt de bestaande lokale projectdata als tijdelijke terugval zolang de eerste projecten nog niet in Sanity gepubliceerd zijn. Zodra de CMS-projecten gepubliceerd zijn, worden die als bron gebruikt.

## Commando's

- `npm run studio`: lokale beheeromgeving.
- `npm run studio:build`: productiebuild van de Studio.
- `npm run studio:deploy`: publiceer de Studio bij Sanity.