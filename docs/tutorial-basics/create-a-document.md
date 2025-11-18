---
sidebar_position: 1
---

# Ein Dokument erstellen

Dokumente sind **Gruppen von Seiten**, die verbunden sind durch:

- eine **Seitenleiste**
- **Vorherige/Nächste Navigation**

## Erstellen von Dokumenten

Die Seiten in dieser Dokumentation wurden alle aus einem Ordner (`tutorial`) mit Unterordnern und Markdown Dateien generiert. Den Ordner `tutorial` findet man **[hier](https://swietelskylnz.sharepoint.com/:f:/r/teams/DigitalisationConstructionServices/Freigegebene%20Dokumente/BIM%20Design%20and%20Engineering/Swietoolsky/documentation)**.

Legt man beispielsweise im obersten Ordner eine Datei `hallo.md` an, dann erscheint diese in der Doku.

```md title="tutorial/hallo.md"
# Hallo

Das ist mein **erstes SwieDocs Dokument**!
SwieDocsky?
```

Das Dokument ist erst nach einem erneuten build Prozess verfügbar unter [http://localhost:Portnummer/hallo](http://atsrvbtk001:5499/hallo).


## Die Seitenleiste konfigurieren

Docusaurus erstellt automatisch **eine Seitenleiste** aus dem `tutorial` Ordner. Über Ordner erreicht man eine hierarchische Gruppierung der Dokumentation.

### Automatische Seitenleisten-Generierung

Die Seitenleiste wird basierend auf der Struktur der Ordner und Dateien erstellt:
- **Dateien** werden als einzelne Seitenleisten-Einträge angezeigt
- **Ordner** werden als zusammenklappbare Kategorien dargestellt
- Die **Reihenfolge** folgt standardmäßig der alphabetischen Sortierung

### Dokument-Metadaten (Frontmatter)

**Füge Metadaten hinzu** um die Seitenleisten-Bezeichnung und Position einzelner Dokumente anzupassen:

```md title="docs\Beton- und Stahlbetonarbeiten\Brüstungswand Attika.md"
---
sidebar_label: 'Brüstungswand (Attika)'
sidebar_position: 2
description: 'Das ist die Beschreibung für die Übersichtsseite'
slug: '/beton-stahlbeton/attika'
---

# Brüstungswand Attika

...
```

#### Wichtige Frontmatter-Eigenschaften:

**`sidebar_label`**: 
- Überschreibt den Titel für die Seitenleisten-Anzeige
- Nützlich für kürzere oder benutzerfreundlichere Namen
- Falls nicht angegeben, wird der Dokumententitel (# Überschrift) verwendet

**`sidebar_position`**: 
- Numerischer Wert zur Sortierung (1, 2, 3, ...)
- Niedrigere Zahlen erscheinen weiter oben
- Dokumente ohne Position werden alphabetisch nach den nummerierten einsortiert

**`slug`**
- Überschreibt die standardmäßige **ordnerbasierte URL-Struktur** (=> besser ordnerbasiert)
- Format: `/pfad/zur/seite` (beginnt immer mit `/`)

**`description`**:
- Kurze Beschreibung des Dokuments für die Übersichtsseite


#### Weitere nützliche Eigenschaften:

```md title="docs/beispiel.md"
---
sidebar_class_name: 'sidebar-important'
hide_title: false
pagination_prev: null
pagination_next: docs/next-doc
---
```

**`sidebar_class_name`**: CSS-Klasse für individuelle Styling-Anpassungen

**`hide_title`**: Versteckt den Titel auf der Seite selbst

**`pagination_prev/next`**: Steuert die Vor/Zurück-Navigation zwischen Dokumenten

**Metadaten für Ordner** können mit der `_category_.json` festgelegt werden.

## Die `_category_.json` Datei

Die `_category_.json` Datei ist eine spezielle Konfigurationsdatei, die verwendet wird, um **Metadaten für Ordner** in der Dokumentationsstruktur festzulegen. Sie steuert, wie Ordner in der Seitenleiste angezeigt werden.

### Zweck und Funktionsweise

Für die Ordner im `tutorial` Verzeichnis, erstellt Docusaurus automatisch eine zusammenklappbare Kategorie in der Seitenleiste. Mit `_category_.json` können Sie das Verhalten und die Darstellung dieser Kategorie anpassen.

### Haupteigenschaften

#### 1. **`label`** (Pflichtfeld)
```json
"label": "Meine Kategorie"
```
- Bestimmt den angezeigten Namen der Kategorie in der Seitenleiste
- Kann sich vom Ordnernamen unterscheiden

#### 2. **`position`** (Optional)
```json
"position": 2
```
- Bestimmt die Reihenfolge der Kategorien in der Seitenleiste
- Niedrigere Zahlen erscheinen weiter oben
- Wenn nicht angegeben, wird alphabetisch sortiert

#### 3. **`link`** (Optional)
```json
"link": {
  "type": "generated-index",
  "description": "Beschreibung für die Übersichtsseite",
  "slug": "/meine-kategorie"
}
```

**Link-Typen:**
- `"generated-index"`: Erstellt automatisch eine Übersichtsseite für die Kategorie
- `"doc"`: Verlinkt zu einem spezifischen Dokument

**Zusätzliche Link-Eigenschaften:**
- `description`: Beschreibung für die generierte Indexseite
- `slug`: Benutzerdefinierte URL für die Kategorie (optional)

### Praktisches Beispiel

```json title="docs/mein-ordner/_category_.json"
{
  "label": "Beton- und Stahlbetonarbeiten",
  "position": 2,
  "link": {
    "type": "generated-index",
    "description": "LG 07 Beton- und Stahlbetonarbeiten: Grundlagen, Planung und Ausführung von Beton- und Stahlbetonarbeiten im Bauwesen.",
    "slug": "/Beton-und-Stahlbetonarbeiten"
  }
}
```

:::tip Tipp
Die `_category_.json` Datei muss im jeweiligen Ordner platziert werden und wirkt nur auf diesen Ordner und seine direkten Unterordner.
:::


