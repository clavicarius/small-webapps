# simpleTSClient

Minimaler TypeScript-Client zum Testen der UC-Server-REST-API (`createsession` / `destroysession`).

## Voraussetzungen

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

## Installation

```bash
pnpm install
```

## Build

```bash
pnpm build
```

## Start

```bash
pnpm start
```

## Konfiguration

Verbindungsparameter in `index.ts` anpassen:

| Variable      | Standard              | Beschreibung              |
|---------------|-----------------------|---------------------------|
| `ucWebUrl`    | `http://localhost:7224` | Basis-URL des UC-Servers |
| `usrName`     | `usr1`                | Benutzername              |
| `usrPwd`      | `pwd1`                | Passwort                  |
| `clientAppId` | `15`                  | Client-App-ID             |

Nach dem Start wird eine Session erstellt; das Ergebnis wird in der Konsole ausgegeben. `destroySession` kann in `index.ts` bei Bedarf aktiviert werden.

## Hinweise

- Nur zur internen Verwendung.
- Der UC-Server muss unter der konfigurierten URL erreichbar sein.
