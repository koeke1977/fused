# FUSED contentmodel

## Realisaties in Sanity

Projecten worden beheerd als `project`-documenten in de publieke `production`-dataset.

| Veld | Doel |
|---|---|
| Projecttitel | Naam op projectkaart en detailpagina |
| Webadres | Unieke URL-slug |
| Categorie | Elektriciteitswerken, Domotica / Smart Home, Verlichting of Industriële installaties |
| Korte omschrijving | Intro op kaart en detailpagina |
| Projectomschrijving | Beschrijving van de effectief door FUSED uitgevoerde werken |
| Hoofdfoto | Verplichte representatieve foto |
| Alternatieve tekst hoofdfoto | Toegankelijke fotobeschrijving |
| Extra projectfoto's | Optionele galerij met alt-tekst per foto |
| Uitlichten op de startpagina | Bepaalt of de realisatie op de homepage verschijnt |
| Jaar van uitvoering | Optioneel jaartal |
| Publicatiedatum | Sorteervolgorde van gepubliceerde realisaties |

Sanity beheert concepten en publicatiestatus zelf. Een concept wordt niet door de publieke website opgehaald.

## Ingevoerde realisaties

De eerste twee portfolio-items zijn gemigreerd en gepubliceerd in Sanity:

### Residentiële nieuwbouw
- Categorie: Elektriciteitswerken
- Scope: volledige elektrische installatie en bekabeling van een nieuwbouwwoning.
- Belangrijke nuance: de zonnepanelen en warmtepomp zijn aanwezig, maar werden niet door FUSED geplaatst.
- Hoofdfoto: bestaande foto van de elektrische verdeelkast.

### Residentiële domotica
- Categorie: Domotica / Smart Home
- Systeem: Niko Home Control.
- Hoofdfoto: bestaande foto van de verdeelkast met Niko Home Control.
- Voeg geen niet-bevestigde projectdetails toe.

Sanity is de enige bron voor portfolio-inhoud. De publieke website leest uitsluitend gepubliceerde projectdocumenten uit de `production`-dataset. Er is geen lokale projectfallback.