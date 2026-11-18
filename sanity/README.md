# FUSED contentbeheer

De Sanity Studio beheert de realisaties, diensten en algemene website-instellingen van FUSED.

## Studio

- URL: https://fused-projectbeheer.sanity.studio
- Sanity project ID: `ulj7mtyd`
- Dataset: `production`
- Dataset visibility: public, zodat de statische website gepubliceerde inhoud kan uitlezen.

Project-ID en dataset zijn publieke configuratiegegevens. Commit nooit API-tokens of andere geheimen.

## Realisaties beheren

- Maak een document aan bij **Realisaties**.
- Vul titel, webadres, categorie en korte omschrijving in.
- Voeg een hoofdfoto toe en vul de alternatieve tekst in.
- Voeg indien gewenst extra foto's toe.
- Zet **Uitlichten op de startpagina** aan om het project op de homepage te tonen.
- Publiceer het document om het zichtbaar te maken.

## Diensten beheren

- Maak een document aan bij **Diensten** voor elke dienst.
- Vul naam, URL-slug en korte omschrijving in.
- Voeg optioneel een titel en opsomming van werkzaamheden toe.
- Stel de volgorde in; een lager getal verschijnt eerder.
- Zet **Tonen op website** uit om een dienst te verbergen.
- Publiceer het document.

De vier bestaande diensten blijven zichtbaar via lokale standaardinhoud totdat de eerste dienstendocumenten gepubliceerd zijn. Daarna gebruikt de website de gepubliceerde Sanity-diensten.

## Website-instellingen

Maak één document aan bij **Website-instellingen**. Beheer daar de homepagekoppen, intro's, call-to-action-teksten, slogan en publieke contactgegevens. Niet ingevulde velden gebruiken de bestaande standaardteksten.

## Publicatie en deployment

De publieke Astro-site leest gepubliceerde documenten uit de publieke dataset via de Sanity CDN. De inhoud wordt tijdens de statische build opgehaald. Een wijziging in Sanity is dus zichtbaar op de website na de eerstvolgende geslaagde websitebuild/deployment. De Cloudflare Worker bouwt automatisch bij commits op `main`.

## Toegangsbeheer

Beheer gebruikers via Sanity met persoonlijke accounts. Deel nooit eigenaar-logins of API-tokens.
