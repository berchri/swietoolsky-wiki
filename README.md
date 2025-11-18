# Swietoolsky Dokumentations-Template

Ein Projekt welches demonstriert, wie man aus Ordnern mit Markdown-Dateien mittels [Docusaurus](https://docusaurus.io/) professionelle Dokumentations-Websites generiert. 

## 📖 Über das Projekt

Dieses Projekt dient als **Vorlage und Tutorial** für die Erstellung von Dokumentations-Websites mit Docusaurus. Es zeigt:

- **Tutorial-Grundlagen** - Detaillierte Anleitungen zur Erstellung von Markdown-Dateien und Strukturierung der Dokumentation
- **Beton- und Stahlbetonarbeiten** - *Beispieldaten* zur Demonstration technischer Dokumentation
- **Wärmedämmverbundsysteme** - *Beispieldaten* für Installations- und Verfahrensanleitungen

> 💡 **Hinweis**: Die Inhalte zu Beton-/Stahlbetonarbeiten und Wärmedämmverbundsystemen sind Beispieldaten und dienen nur zur Demonstration der Dokumentationsstruktur.

## 🚀 Schnellstart

### Voraussetzungen

- Node.js (Version ≥ 20.0)
- npm oder yarn

### Installation

1. Repository klonen:
```bash
git clone https://github.com/swietoolsky/swietoolsky-docu.git
cd swietoolsky-docu
```

2. Abhängigkeiten installieren:
```bash
npm install
```

3. Entwicklungsserver starten:
```bash
npm start
```

Die Website ist dann unter `http://localhost:3000` verfügbar.

## 🛠 Verfügbare Befehle

| Befehl | Beschreibung |
|--------|--------------|
| `npm start` | Startet den Entwicklungsserver |
| `npm run build` | Erstellt die produktionsreife Website |
| `npm run serve` | Serviert die gebaute Website lokal |
| `npm run clear` | Löscht den Docusaurus-Cache |
| `npm run deploy` | Deployt die Website |

## 📁 Projektstruktur

```
├── docs/                          # Hauptdokumentation (Tutorial + Beispieldaten)
│   ├── intro.md                   # Einführungsseite
│   ├── Beton- und Stahlbetonarbeiten/  # Beispieldaten
│   ├── Wärmedämmverbundsysteme/        # Beispieldaten
│   └── tutorial-basics/                # Tutorial-Anleitungen
├── src/
│   ├── components/                # React-Komponenten
│   ├── css/                       # Globale Styles
│   └── pages/                     # Statische Seiten
├── static/                        # Statische Assets (Bilder, etc.)
├── docusaurus.config.js          # Docusaurus-Konfiguration
├── sidebars.js                   # Sidebar-Konfiguration
└── package.json
```

### Produktionseinsatz

Für den **produktiven Einsatz** werden die Markdown-Dateien aus **SharePoint-Ordnern** bezogen:

```
SharePoint-Ordner → Pipeline → docs/ → Build → Server-Deployment
```

## 🎯 Template verwenden

### Als Basis für eigene Dokumentation

1. **Template kopieren**: Klone oder forke dieses Repository
2. **Beispieldaten ersetzen**: Lösche die Beispiel-Ordner und ersetze sie durch deine eigenen Inhalte
3. **Konfiguration anpassen**: Bearbeite `docusaurus.config.js` mit deinen Projektdaten
4. **Tutorial nutzen**: Folge den Anleitungen in `docs/tutorial-basics/` für detaillierte Erklärungen

### Produktiver Einsatz mit SharePoint

Für den **produktiven Einsatz** mit SharePoint-Integration:

1. **SharePoint-Ordner einrichten**: Erstelle Ordnerstruktur für Markdown-Dateien
2. **Pipeline konfigurieren**: Richte Build- und Release-Pipeline ein
3. **Synchronisation**: Pipeline kopiert automatisch SharePoint-Inhalte nach `docs/`
4. **Automatisches Deployment**: Bei Änderungen in SharePoint wird Website automatisch aktualisiert

## ✍️ Dokumentation erstellen

> 📚 **Vollständige Anleitung**: Besuche die `Tutorial-Grundlagen` in der generierten Website für detaillierte Schritt-für-Schritt-Anleitungen!

### Neue Seite hinzufügen

1. Erstelle eine neue `.md` oder `.mdx` Datei im `docs/` Ordner
2. Füge den Front Matter hinzu:
```markdown
---
id: meine-seite
title: Mein Seitentitel
sidebar_label: Kurzer Titel
---

# Inhalt der Seite
```

### Bilder hinzufügen

Bilder werden im `static/img/` Ordner gespeichert und können so referenziert werden:
```markdown
![Alt-Text](/img/mein-bild.jpg)
```

### Kategorien erstellen

Für Ordner-Kategorien erstelle eine `_category_.json` Datei:
```json
{
  "label": "Kategorie-Name",
  "position": 2,
  "link": {
    "type": "generated-index"
  }
}
```

## 🎨 Anpassungen

### Styling

- Globale Styles: `src/css/custom.css`
- Komponenten-Styles: `src/components/*/styles.module.css`

### Konfiguration

Die Haupt-Konfiguration befindet sich in `docusaurus.config.js`:
- Website-Titel und -Beschreibung
- Navigation und Footer
- Plugins und Themes

## 🚀 Deployment

### Entwicklung & Template-Test

Für das Testen des Templates:

```bash
npm run build
```

Die fertigen Dateien befinden sich im `build/` Ordner.

### Produktions-Deployment mit Pipeline

Für den **produktiven Einsatz** läuft ein automatisierter Pipeline-Prozess:

#### 1. Build Pipeline
1. **SharePoint-Sync**: Kopiert aktuelle Markdown-Dateien aus SharePoint-Ordnern
2. **Template-Merge**: Ersetzt `docs/` Inhalte mit SharePoint-Daten
3. **Build-Prozess**: Führt `npm run build` aus
4. **Artefakt-Erstellung**: Erstellt deploymentfähiges Package

#### 2. Release Pipeline
1. **Artefakt-Download**: Lädt Build-Ergebnis herunter
2. **Server-Deployment**: Kopiert Dateien auf den Produktionsserver
3. **Website-Aktivierung**: Macht neue Version verfügbar

### Manuelle Deployment-Optionen

Für Tests und alternative Deployments:
- **GitHub Pages**: Nutze `npm run deploy`
- **Netlify/Vercel**: Verbinde das Repository direkt
- **Eigener Server**: Lade den `build/` Ordner hoch

## 🔧 Entwicklung

### Live-Reload (Entwicklung)

Der Entwicklungsserver unterstützt Live-Reload. Änderungen an Markdown-Dateien werden automatisch im Browser aktualisiert.

### Pipeline-Entwicklung

#### Build Pipeline Setup
```yaml
# Beispiel für Azure DevOps Pipeline
steps:
- task: SharePointSync
  displayName: 'Sync SharePoint Docs'
  inputs:
    sourceFolder: '$(SharePoint.DocsPath)'
    targetFolder: '$(Build.SourcesDirectory)/docs'

- task: Npm@1
  displayName: 'npm install'
  inputs:
    command: 'install'

- task: Npm@1
  displayName: 'npm run build'
  inputs:
    command: 'custom'
    customCommand: 'run build'
```

### Debugging

- **Template-Entwicklung**: Nutze `npm run clear` bei Cache-Problemen
- **Pipeline-Issues**: Überprüfe SharePoint-Synchronisation und Build-Logs
- **Markdown-Probleme**: Validiere Syntax bei Rendering-Problemen

## 🎓 Lernen & Verstehen

### Tutorial-Inhalte

Dieses Template enthält umfassende Tutorials, die folgende Themen abdecken:

- **Grundlagen**: Wie Docusaurus funktioniert
- **Markdown-Syntax**: Alle wichtigen Formatierungsoptionen
- **Seitenstruktur**: Organisation und Navigation
- **Erweiterte Features**: MDX, React-Komponenten, und mehr

### Live-Beispiele

Die Beispieldaten demonstrieren:
- ✅ **Korrekte Ordnerstruktur** für verschiedene Dokumentationstypen
- ✅ **Front Matter Verwendung** für Metadaten
- ✅ **Bild-Integration** und Asset-Management
- ✅ **Kategorisierung** und Sidebar-Navigation

## 📚 Weiterführende Ressourcen

- [Docusaurus Dokumentation](https://docusaurus.io/docs)
- [Markdown Guide](https://www.markdownguide.org/)
- [MDX Dokumentation](https://mdxjs.com/)

## 📄 Lizenz

Dieses Template ist unter der MIT-Lizenz lizenziert und kann frei für eigene Projekte verwendet werden.

## 🤝 Template verbessern

Verbesserungsvorschläge für dieses Template sind willkommen:

1. Fork das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feature/template-verbesserung`)
3. Committe deine Änderungen (`git commit -am 'Template-Verbesserung hinzufügen'`)
4. Push zum Branch (`git push origin feature/template-verbesserung`)
5. Erstelle einen Pull Request