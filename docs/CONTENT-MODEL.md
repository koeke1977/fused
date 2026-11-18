# FUSED contentmodel

## Realisaties

Projecten worden beheerd als `project`-documenten in de publieke `production`-dataset. De website toont alleen gepubliceerde projecten.

| Veld | Doel |
|---|---|
| Projecttitel en webadres | Naam en unieke URL |
| Categorie en omschrijvingen | Projectkaart en detailpagina |
| Hoofdfoto en alternatieve tekst | Representatieve, toegankelijke projectfoto |
| Extra projectfoto's | Optionele galerij met alt-tekst per foto |
| Uitlichten op de startpagina | Bepaalt of de realisatie op de homepage verschijnt |
| Jaar en publicatiedatum | Projectmetadata en sortering |

Vermeld uitsluitend werken die effectief door FUSED zijn uitgevoerd. Publiceer geen vertrouwelijke klantgegevens of adressen.

## Diensten

Diensten worden beheerd als `service`-documenten. De volgorde wordt bepaald door **Volgorde op website**. Schakel **Tonen op website** uit om een dienst tijdelijk te verbergen. Elke dienst heeft een titel, slug en korte omschrijving; optioneel kunnen een tussentitel en opsomming van werkzaamheden worden toegevoegd.

Zolang er nog geen gepubliceerde dienstendocumenten bestaan, gebruikt de website de bestaande lokale dienstenteksten als tijdelijke terugval. Zodra minstens één dienst gepubliceerd is, komen de diensten uit Sanity. De voorbereidende migratie maakt daarom alle vier de diensten uitsluitend als concept aan; publiceer ze pas samen na controle.

## Website-instellingen

Maak één document aan bij **Website-instellingen**. De voorbereidende migratie maakt dit als concept aan. Daar beheer je:
- De hoofdboodschap, intro en knoppen van de homepage.
- De titels en intro's van de homepage-secties.
- De slogan en publieke contactgegevens die in de footer worden getoond.

Niet ingevulde velden behouden de standaardteksten van de website. Wijzig juridische bedrijfsgegevens niet via dit document; die blijven in de juridische configuratie.

## Publicatie en website

Sanity beheert concepten en publicatiestatus. De statische Astro-website leest gepubliceerde documenten uit de publieke `production`-dataset tijdens de build. Een publicatie in Sanity verschijnt dus op de website na de eerstvolgende succesvolle websitebuild/deployment. De Cloudflare-build wordt automatisch gestart bij een wijziging op `main`.
