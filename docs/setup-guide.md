# ABC LED Setup Guide for Another System

This guide explains how to set up the project on a different machine without copying the `node_modules` folder.

## 1. Requirements

Install the following first:

- Node.js LTS
- npm (usually included with Node.js)

Verify installation:

```powershell
node -v
npm -v
```

## 2. Copy the project without `node_modules`

Do not copy the `node_modules` folder. It should be recreated on the target machine.

```powershell
Copy-Item "C:\path\to\abc-led\*" "D:\new-location\abc-led" -Recurse -Exclude node_modules,.git,dist,coverage
```

If you are using PowerShell and want to exclude additional generated files, this is a safe pattern:

```powershell
Get-ChildItem "C:\path\to\abc-led" | Copy-Item -Destination "D:\new-location\abc-led" -Recurse -Force
```

> Keep the project source files and package manifests, but skip generated folders such as `node_modules`, `dist`, and `coverage`.

## 3. Open a terminal in the project root

```powershell
cd D:\new-location\abc-led
```

## 4. Install dependencies

```powershell
npm install
```

This will download all dependencies and create a fresh `node_modules` folder on the new machine.

## 5. Start the backend

From the project root:

```powershell
npm --prefix backend run dev
```

This starts the Express API on port 5000.

## 6. Start the frontend

Open another terminal and run:

```powershell
npm --prefix frontend run start
```

This starts Angular on the default local dev server, usually:

- http://localhost:4200

## 7. Check the app

Visit:

- Frontend: http://localhost:4200
- Product page: http://localhost:4200/products
- Backend health: http://localhost:5000/health
- Swagger UI: http://localhost:5000/docs

## 8. Install the backend environment file

If there is a template file, copy it:

```powershell
Copy-Item .\backend\.env.example .\backend\.env
```

Edit the values in `.env` before production use.

## 9. Build the project

```powershell
npm --prefix backend run build
npm --prefix frontend run build
```

## 10. Run backend tests

```powershell
npm --prefix backend test -- --runInBand
```

## 11. Typical folder structure to copy

Copy these folders and files:

- `backend/`
- `frontend/`
- `database/`
- `docs/`
- `package.json`
- `package-lock.json`
- `README.md`

Skip these:

- `node_modules/`
- `dist/`
- `.git/`
- `coverage/`

## Quick summary

```powershell
cd D:\new-location\abc-led
npm install
npm --prefix backend run dev
npm --prefix frontend run start
```

Then open:

```text
http://localhost:4200/products
```
