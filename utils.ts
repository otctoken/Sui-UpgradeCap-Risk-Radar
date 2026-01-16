import { DAppRiskProfile, UpgradePolicy, OwnershipType, RiskScoreBreakdown, RiskLevel } from './types';

export const calculateRiskScore = (dapp: DAppRiskProfile): RiskScoreBreakdown => {
  let upgradeCapScore = 0; //max20
  let controllerScore = 0; // max 10
  let policyScore = 0;  // max 10
  let delayedUpgradeScore = 0; //max 55
  let stabilityScore = 0; //max 5
  let sourceCodeScore = 0;

  // 1. UpgradeCap (Max 30)
  // Immutable ownership effectively means the cap is burned/unusable.
  // Rule: Immutable/DepOnly = 30, Additive = 15, Compatible = 0
  if (dapp.ownershipType === OwnershipType.Immutable || dapp.policy == UpgradePolicy.Immutable) {
    upgradeCapScore = 1000;
  } else {
    switch (dapp.policy) {
      case UpgradePolicy.DepOnly: upgradeCapScore = 20; break;
      case UpgradePolicy.Additive: upgradeCapScore = 10; break;
      case UpgradePolicy.Compatible: default: upgradeCapScore = 0; break;
    }
  }

  // 2. Controller (Max 30)
  // Rule: Immutable/DAO = 30, Multisig = 20, Single = 0
  switch (dapp.ownershipType) {
    //case OwnershipType.Immutable: controllerScore = 30; break;
    case OwnershipType.MultiSig: controllerScore = 10; break;
    case OwnershipType.Single: default: controllerScore = 0; break;
  }

  // 3. Upgrade Policy (Max 10)
  // Rule: Yes (has policy) = 10, No = 0. Immutable gets full points default.
  if (dapp.ownershipType === OwnershipType.Immutable || dapp.customPolicyAddress) {
    policyScore = 10;
  } else {
    policyScore = 0;
  }

  // 4. Delayed Upgrade (Max 20)
  // Rule: >48h = 20, >24h = 10, >0h = 5, No = 0. Immutable gets full points default.
  if (dapp.ownershipType === OwnershipType.Immutable) {
    delayedUpgradeScore = 20;
  } else {
    const hours = dapp.timelockDurationSeconds / 3600;
    if (hours >= 24) delayedUpgradeScore = 55;
    else if (hours > 12) delayedUpgradeScore = 20;
    else if (hours > 0) delayedUpgradeScore = 5;
    else delayedUpgradeScore = 0;
  }

  // 5. Stability (Max 5)
  // Rule: Version <= 50 = 5, >50 = 0
  if (dapp.version <= 50) {
    stabilityScore = 5;
  } else {
    stabilityScore = 0;
  }

  // 6. Source Code (Max 5)
  // Rule: Verified = 5, Unverified = 0
  if (dapp.isVerified) {
    sourceCodeScore = 5;
  } else {
    sourceCodeScore = 0;
  }

  let total = upgradeCapScore + controllerScore + policyScore + delayedUpgradeScore + stabilityScore;
  if (upgradeCapScore > 900) {
    total = 100
    upgradeCapScore = 100
    controllerScore = 0
    policyScore = 0
    delayedUpgradeScore = 0
    stabilityScore = 0
  }
  if (sourceCodeScore == 0) {
    total = 0
    upgradeCapScore = 0
    controllerScore = 0
    policyScore = 0
    delayedUpgradeScore = 0
    stabilityScore = 0
  }

  let riskLevel: RiskLevel = 'High';
  if (total >= 70) riskLevel = 'Low';
  else if (total >= 40) riskLevel = 'Medium-Low';
  else if (total >= 15) riskLevel = 'Medium';

  return {
    total,
    upgradeCapScore,
    controllerScore,
    policyScore,
    delayedUpgradeScore,
    stabilityScore,
    sourceCodeScore,
    riskLevel
  };
};

export const formatDuration = (seconds: number): string => {
  if (seconds === 0) return "No Timelock";
  const hours = Math.floor(seconds / 3600);
  const days = Math.floor(hours / 24);
  if (days > 0) return `${days} Days`;
  return `${hours} Hours`;
};

export const getPolicyLabel = (policy: UpgradePolicy): string => {
  switch (policy) {
    case UpgradePolicy.Compatible: return "Compatible";
    case UpgradePolicy.Additive: return "Additive";
    case UpgradePolicy.DepOnly: return "Dependency-only";
    case UpgradePolicy.Immutable: return "Immutable";
    default: return "Unknown";
  }
};