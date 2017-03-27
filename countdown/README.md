# countdown

Statische Countdown-Seite (HTML/CSS/JS), die die verbleibende Zeit bis zu einem festen Zieldatum anzeigt.

## Starten

`index.html` im Browser öffnen oder über einen statischen Webserver bereitstellen.

## Konfiguration

Das Zieldatum wird in `main.js` gesetzt:

```javascript
const countDownDate = new Date('2024/01/23 08:00:00').getTime();
```

## Dateien

```
countdown/
├── index.html
├── main.js
├── style.css
└── countdown.code-workspace
```

## Hinweise

- Nur zur internen Verwendung.
- Hintergrundbild (`bg.jpg`) und rechtliche Texte (Datenschutz, Impressum) sind in der HTML-Seite verlinkt.
