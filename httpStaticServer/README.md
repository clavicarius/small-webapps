# Static Web Server Startup Script

Dieses Projekt stellt einfache Startup-Skripte bereit, um schnell einen lokalen Webserver für statische Inhalte zu starten.  
Die Skripte basieren auf dem in Python integrierten HTTP-Server und funktionieren ohne zusätzliche Abhängigkeiten außer einer vorhandenen Python-Installation.

Unterstützt werden:

- Windows (PowerShell)
- Linux / macOS (Bash)

Der Server ist ausschließlich für statische Inhalte gedacht (HTML, CSS, JavaScript, Bilder usw.) und eignet sich z. B. für:

- lokale Entwicklung
- schnelles Preview von Webprojekten
- Testumgebungen
- Bereitstellung einfacher statischer Inhalte im lokalen Netzwerk


---

# Voraussetzungen

- Python installiert (Python 3 empfohlen)
- Python muss im `PATH` verfügbar sein

Test:

```
python --version
```

oder

```
python3 --version
```


---

# Standardkonfiguration

Der Standard-Port des Servers ist:

```
8088
```

Der Port kann beim Start überschrieben werden.


---

# PowerShell Script (Windows)

Datei:

```
start-static-server.ps1
```

## Verwendung

```
.\start-static-server.ps1 -Directory "<Pfad>" -Port <Port>
```

## Parameter

| Parameter | Beschreibung |
|-----------|-------------|
| Directory | Startverzeichnis des Webservers |
| Port | Port des Webservers (optional, Default: 8088) |

## Beispiele

Server auf Default-Port starten:

```
.\start-static-server.ps1 -Directory "C:\web\site"
```

Server auf eigenem Port starten:

```
.\start-static-server.ps1 -Directory "C:\web\site" -Port 9000
```

Nach dem Start ist der Server erreichbar unter:

```
http://localhost:8088
```

oder dem angegebenen Port.


---

# Bash Script (Linux / macOS)

Datei:

```
start-static-server.sh
```

## Script ausführbar machen

```
chmod +x start-static-server.sh
```

## Verwendung

```
./start-static-server.sh <directory> [port]
```

## Parameter

| Parameter | Beschreibung |
|-----------|-------------|
| directory | Startverzeichnis des Webservers |
| port | Optionaler Port (Default: 8088) |

## Beispiele

Server mit Default-Port starten:

```
./start-static-server.sh ./public
```

Server mit eigenem Port starten:

```
./start-static-server.sh ./public 9000
```

Server ist anschließend erreichbar unter:

```
http://localhost:8088
```


---

# Funktionsweise

Die Skripte starten den in Python integrierten HTTP-Server:

```
python -m http.server
```

Der Server:

- liefert statische Dateien aus dem angegebenen Verzeichnis
- unterstützt HTML, CSS, JavaScript und andere statische Assets
- benötigt keine zusätzliche Konfiguration


---

# Sicherheitshinweis

Der Python-HTTP-Server ist **nicht für produktive Umgebungen gedacht**.

Er bietet:

- keine Authentifizierung
- keine TLS/HTTPS-Unterstützung
- keine erweiterten Sicherheitsmechanismen

Der Einsatz ist daher hauptsächlich vorgesehen für:

- lokale Entwicklung
- Testumgebungen
- interne Nutzung


---

# Server stoppen

Der Server läuft im Vordergrund der Konsole.

Beenden mit:

```
CTRL + C
```

Danach wird der Webserver sofort gestoppt.


---

# Beispielstruktur

```
project/
 ├─ start-static-server.ps1
 ├─ start-static-server.sh
 └─ public/
     ├─ index.html
     ├─ style.css
     └─ script.js
```

Start:

```
./start-static-server.sh ./public
```

Aufruf im Browser:

```
http://localhost:8088
```
