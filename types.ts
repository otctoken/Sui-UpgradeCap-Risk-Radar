// Upgrade Policies in Sui Move
export enum UpgradePolicy {
  Compatible = 0, // Code can change, existing data compatible
  Additive = 128, // Can only add new functions/structs
  DepOnly = 192,  // Dependency only (effectively immutable logic for existing modules)
  Immutable = 500,
}

// Ownership structures
export enum OwnershipType {
  Single = 'Single Address',
  MultiSig = 'MultiSig',
  Immutable = "500",
  Dao = 'Dao',
}

// Risk Level Definition
export type RiskLevel = 'Low' | 'Medium-Low' | 'Medium' | 'High';

// The core data structure for a DApp
export interface DAppRiskProfile {
  upgradecap: string;
  // id: string;
  name: string;
  contract: string;
  category: 'Defi|Lending' | 'NFT' | 'Game' | 'Defi|DEX' | 'Staked' | "Coin" | 'Defi|Yield';
  logoUrl: string | any;

  // Risk Factors
  policy: UpgradePolicy;
  ownershipType: OwnershipType;

  // Addresses for linking (New)
  upgradecapAddress?: string;     // The address holding the UpgradeCap
  customPolicyAddress?: string;   // The address of the custom policy package/object (if exists)
  timelockAddressANFdfParentObject?: string;       // The address of the timelock object (if exists)
  whetherDF?: boolean;
  whetherShared?: boolean;

  // Metadata for scoring
  multiSigThreshold?: string; // e.g., "3/5"
  timelockDurationSeconds: number; // 0 if no timelock
  lastUpgradeDate: string; // ISO Date
  version: number; // Package version
  isVerified: boolean; // Source code verified on Explorer
}

// For calculating the score breakdown
export interface RiskScoreBreakdown {
  total: number;
  upgradeCapScore: number;
  controllerScore: number;
  policyScore: number;
  delayedUpgradeScore: number;
  stabilityScore: number;
  sourceCodeScore: number;
  riskLevel: RiskLevel;
}