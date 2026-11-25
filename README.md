# Apple Shortcuts Response Custom Module (WebSocket Server)

A Chataigne community custom module based on `WebSocket Server` that receives and parses Apple Shortcuts JSON results sent by the companion [Shortcuts-Chataigne-Module](https://github.com/UUoocl/Shortcuts-Chataigne-Module).

## Architecture

```
Chataigne (Apple Shortcuts / OS Module)
  └──▶ WebSocket client (JSON text frame)
        ▼
Chataigne (Apple Shortcuts Response / WebSocket Server, Protocol: JSON)
  ├──▶ Auto-parses JSON into pre-declared & dynamic Chataigne Values
  └──▶ shortcutsResponse.js
        ├── fires responseReceived trigger
        └── logs Apple Shortcuts errors via script.logWarning
```

## Features

- Pre-configured `WebSocket Server` in `JSON` mode on port `8080` (`ws://127.0.0.1:8080`).
- Pre-declared read-only Chataigne Values for immediate Mapping and State binding:
  - `ok`, `action`, `shortcut`, `output`, `count`, `error`
- Convenience Trigger:
  - `responseReceived` — fires on every incoming WebSocket message.
- Automatic dynamic Values for `outputJson` fields and `shortcuts` list items (via Chataigne's `Auto Add` JSON parser).

## Installation

Copy or symlink this folder into Chataigne's custom modules directory:

```bash
ln -s "$(pwd)" ~/Documents/Chataigne/modules/"Apple Shortcuts Response"
```

(Or place it in a `modules/Apple Shortcuts Response` folder next to your `.noisette` project file.)

## Setup in Chataigne

1. Add **System → Apple Shortcuts Response**:
   - Default **Local Port** is `8080` (adjust if needed to match your Apple Shortcuts module).
2. Add **System → Apple Shortcuts**:
   - Ensure **WebSocket URL** matches (default `ws://127.0.0.1:8080`).
