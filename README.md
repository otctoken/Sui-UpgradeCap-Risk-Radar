# Sui UpgradeCap Risk Radar - Development Guide

Here is the step-by-step guide to running this project, as requested.

## Step 1: Project Initialization
Run the following commands in your terminal to set up the project:

```bash
# 1. Create the project using Vite
npm create vite@latest sui-risk-radar -- --template react-ts

# 2. Navigate into the directory
cd sui-risk-radar

# 3. Install dependencies (Lucide React for icons, clsx/tailwind-merge for dynamic classes)
npm install lucide-react clsx tailwind-merge
```

## Step 2: Configure Tailwind CSS
This prototype uses the Tailwind CSS CDN for instant prototyping as per the generated code structure.
- Open `index.html` and ensure the script `<script src="https://cdn.tailwindcss.com"></script>` is present.
- In a production environment, you would run `npx tailwindcss init -p` and configure `content` paths.

## Step 3 & 4: Data & Logic
The logic for calculating risk scores (Dimensions 1-4) is located in `utils.ts`. The mock data covering different scenarios (Perfect, Risky, DeFi) is in `constants.ts`.

## Step 5: Components
- `RiskBadge.tsx`: Displays status labels.
- `DAppCard.tsx`: The main visualization of the risk profile.
- `App.tsx`: The dashboard layout.

## Step 6: Run and Push
```bash
# Run the development server
npm run dev

# Initialize Git and Push
git init
git add .
git commit -m "Initial commit of Sui Risk Radar"
git branch -M main
# git remote add origin <your-repo-url>
# git push -u origin main
```
