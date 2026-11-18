# FUSED contentbeheer

De Sanity Studio beheert de realisaties, diensten en algemene homepage- en contactinstellingen van FUSED. De Over Fused-pagina is bewust statisch opgebouwd in de Astro-website en wordt niet via Sanity beheerd.

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
- Voeg indien gewenst extra foto's toe. Je kunt er zoveel toevoegen als het project nodig heeft.
- De hoofdfoto wordt altijd als eerste getoond en dient ook als cover op de overzichts- en homepagekaarten.
- De fotopresentatie past zich automatisch aan: één foto krijgt een rustige, gecentreerde presentatie; twee foto's staan naast elkaar; bij drie foto's krijgt de hoofdfoto extra ruimte met twee kleinere foto's eronder; vanaf vier foto's wordt de uitgebreide galerij gebruikt.
- De volgorde van de extra foto's in Sanity bepaalt de volgorde op de website.
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

Maak één document aan bij **Website-instellingen**. Beheer daar de homepagekoppen, intro's, call-to-action-teksten, slogan en telefoonnummer. Niet ingevulde velden gebruiken de bestaande standaardteksten. De Over Fused-tekst en het publieke e-mailadres worden niet via deze instellingen beheerd.

## Publicatie en deployment

De publieke Astro-site leest gepubliceerde documenten uit de publieke dataset tijdens de statische build. De Sanity-client gebruikt momenteel de API zonder CDN-cache. Een wijziging in Sanity is zichtbaar op de website na de eerstvolgende geslaagde websitebuild/deployment. De Cloudflare Worker bouwt automatisch bij commits op `main`.

## Toegangsbeheer

Beheer gebruikers via Sanity met persoonlijke accounts. Deel nooit eigenaar-logins of API-tokens.
