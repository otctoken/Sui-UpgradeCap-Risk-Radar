//import { Flag } from 'lucide-react';
import { DAppRiskProfile, UpgradePolicy, OwnershipType } from './types';
// @ts-ignore
import navi from './picture/navi.png'; // 
// @ts-ignore
import suilend from './picture/suilend.svg'; // 
export const MOCK_DAPPS: DAppRiskProfile[] = [
  {
    id: '1',
    name: 'NaviProtocol',
    description: '0xee0041239b89564ce870a7dec5ddc5d114367ab94a1137e90aa0633cb76518e0',
    category: 'Defi|Lending',
    logoUrl: navi,
    policy: UpgradePolicy.Compatible,
    ownershipType: OwnershipType.MultiSig, // DAO
    timelockDurationSeconds: 0, // 48 Hours
    lastUpgradeDate: '2025-11-18',
    version: 23,
    isVerified: true,
    controllerAddress: '0x25549f15b144032b4a61921552f6ecbfea13556615f7b45576b12f10d67955e7',//多签地址或单签地址
    //customPolicyAddress: '0xdef...policy', // Has custom policy
    timelockAddress: '0xghi...timelock',
    sourceCodeUrl: 'https://suiscan.xyz/mainnet/object/0xee0041239b89564ce870a7dec5ddc5d114367ab94a1137e90aa0633cb76518e0/contracts',
    // No controller address because it's immutable/burned
  },
  {
    id: '2',
    name: 'SuiLend',
    description: '0x2d2a5129b8f07061d697c1b1729a06e696bf3b19c865a869055efba83759b04b',
    category: 'Defi|Lending',
    logoUrl: suilend,
    policy: UpgradePolicy.Compatible,
    ownershipType: OwnershipType.Single, // DAO
    timelockDurationSeconds: 0, // 48 Hours
    lastUpgradeDate: '2026-01-06',
    version: 17,
    isVerified: true,
    controllerAddress: '0xb1ffbc2e1915f44b8f271a703becc1bf8aa79bc22431a58900a102892b783c25',//多签地址或单签地址
    //customPolicyAddress: '0xdef...policy', // Has custom policy
    timelockAddress: '0xghi...timelock',
    sourceCodeUrl: 'https://suiscan.xyz/mainnet/object/0x2d2a5129b8f07061d697c1b1729a06e696bf3b19c865a869055efba83759b04b/contracts',
    // No controller address because it's immutable/burned
  },
  // {
  //   id: '2',
  //   name: 'DeepBook Plus',
  //   description: 'Central limit order book with DAO governance.',
  //   category: 'DeFi',
  //   logoUrl: 'https://picsum.photos/64/64?random=2',
  //   policy: UpgradePolicy.Compatible,
  //   ownershipType: OwnershipType.SharedTimelock, // DAO
  //   timelockDurationSeconds: 172800, // 48 Hours
  //   lastUpgradeDate: '2024-01-15',
  //   version: 12,
  //   isVerified: true,
  //   controllerAddress: '0xabc...dao',
  //   customPolicyAddress: '0xdef...policy', // Has custom policy
  //   timelockAddress: '0xghi...timelock',
  //   sourceCodeUrl: 'https://github.com/deepbook',
  // },
  // {
  //   id: '3',
  //   name: 'Degen Farm v50',
  //   description: 'High yield farming protocol.',
  //   category: 'DeFi',
  //   logoUrl: 'https://picsum.photos/64/64?random=3',
  //   policy: UpgradePolicy.Compatible,
  //   ownershipType: OwnershipType.Single,
  //   timelockDurationSeconds: 0,
  //   lastUpgradeDate: '2024-03-10',
  //   version: 52,
  //   isVerified: false, // Unverified
  //   controllerAddress: '0xbad...actor',
  //   // No policy, no timelock, no source link
  // },
  // {
  //   id: '4',
  //   name: 'SuiLend Protocol',
  //   description: 'Lending and borrowing platform.',
  //   category: 'DeFi',
  //   logoUrl: 'https://picsum.photos/64/64?random=4',
  //   policy: UpgradePolicy.Additive,
  //   ownershipType: OwnershipType.MultiSig,
  //   multiSigThreshold: '3/5',
  //   timelockDurationSeconds: 0,
  //   lastUpgradeDate: '2023-12-01',
  //   version: 8,
  //   isVerified: true,
  //   controllerAddress: '0xmul...tisig',
  //   customPolicyAddress: '0xpol...icy', // Has policy but no timelock
  //   sourceCodeUrl: 'https://suiexplorer.com/package/0x...',
  // },
  // {
  //   id: '5',
  //   name: 'Meme King',
  //   description: 'Community token launcher.',
  //   category: 'Meme',
  //   logoUrl: 'https://picsum.photos/64/64?random=5',
  //   policy: UpgradePolicy.Compatible,
  //   ownershipType: OwnershipType.Single,
  //   timelockDurationSeconds: 0,
  //   lastUpgradeDate: '2024-03-11',
  //   version: 2,
  //   isVerified: true,
  //   controllerAddress: '0xdev...addr',
  //   sourceCodeUrl: 'https://suiexplorer.com/package/0x...',
  // },
  // {
  //   id: '6',
  //   name: 'GameFi Nexus',
  //   description: 'On-chain gaming infrastructure.',
  //   category: 'GameFi',
  //   logoUrl: 'https://picsum.photos/64/64?random=6',
  //   policy: UpgradePolicy.DepOnly,
  //   ownershipType: OwnershipType.SharedTimelock,
  //   timelockDurationSeconds: 86400, // 24 Hours
  //   lastUpgradeDate: '2024-02-20',
  //   version: 5,
  //   isVerified: true,
  //   controllerAddress: '0xgam...gov',
  //   timelockAddress: '0xtime...obj',
  //   sourceCodeUrl: 'https://github.com/gamefi',
  // },
  // {
  //   id: '7',
  //   name: 'SuiSwap Pro',
  //   description: 'Leading AMM with strictly burned permissions.',
  //   category: 'DeFi',
  //   logoUrl: 'https://picsum.photos/64/64?random=1',
  //   policy: UpgradePolicy.DepOnly,
  //   ownershipType: OwnershipType.Immutable,
  //   timelockDurationSeconds: 0,
  //   lastUpgradeDate: '2023-05-20',
  //   version: 4,
  //   isVerified: true,
  //   sourceCodeUrl: 'https://suiexplorer.com/object/0x123',
  //   // No controller address because it's immutable/burned
  // },
  // {
  //   id: '8',
  //   name: 'DeepBook Plus',
  //   description: 'Central limit order book with DAO governance.',
  //   category: 'DeFi',
  //   logoUrl: 'https://picsum.photos/64/64?random=2',
  //   policy: UpgradePolicy.Compatible,
  //   ownershipType: OwnershipType.SharedTimelock, // DAO
  //   timelockDurationSeconds: 172800, // 48 Hours
  //   lastUpgradeDate: '2024-01-15',
  //   version: 12,
  //   isVerified: true,
  //   controllerAddress: '0xabc...dao',
  //   customPolicyAddress: '0xdef...policy', // Has custom policy
  //   timelockAddress: '0xghi...timelock',
  //   sourceCodeUrl: 'https://github.com/deepbook',
  // },
  // {
  //   id: '9',
  //   name: 'Degen Farm v50',
  //   description: 'High yield farming protocol.',
  //   category: 'DeFi',
  //   logoUrl: 'https://picsum.photos/64/64?random=3',
  //   policy: UpgradePolicy.Compatible,
  //   ownershipType: OwnershipType.Single,
  //   timelockDurationSeconds: 0,
  //   lastUpgradeDate: '2024-03-10',
  //   version: 52,
  //   isVerified: false, // Unverified
  //   controllerAddress: '0xbad...actor',
  //   // No policy, no timelock, no source link
  // },
  // {
  //   id: '10',
  //   name: 'SuiLend Protocol',
  //   description: 'Lending and borrowing platform.',
  //   category: 'DeFi',
  //   logoUrl: 'https://picsum.photos/64/64?random=4',
  //   policy: UpgradePolicy.Additive,
  //   ownershipType: OwnershipType.MultiSig,
  //   multiSigThreshold: '3/5',
  //   timelockDurationSeconds: 0,
  //   lastUpgradeDate: '2023-12-01',
  //   version: 8,
  //   isVerified: true,
  //   controllerAddress: '0xmul...tisig',
  //   customPolicyAddress: '0xpol...icy', // Has policy but no timelock
  //   sourceCodeUrl: 'https://suiexplorer.com/package/0x...',
  // },
  // {
  //   id: '11',
  //   name: 'Meme King',
  //   description: 'Community token launcher.',
  //   category: 'Meme',
  //   logoUrl: 'https://picsum.photos/64/64?random=5',
  //   policy: UpgradePolicy.Compatible,
  //   ownershipType: OwnershipType.Single,
  //   timelockDurationSeconds: 0,
  //   lastUpgradeDate: '2024-03-11',
  //   version: 2,
  //   isVerified: true,
  //   controllerAddress: '0xdev...addr',
  //   sourceCodeUrl: 'https://suiexplorer.com/package/0x...',
  // },
  // {
  //   id: '12',
  //   name: 'GameFi Nexus',
  //   description: 'On-chain gaming infrastructure.',
  //   category: 'GameFi',
  //   logoUrl: 'https://picsum.photos/64/64?random=6',
  //   policy: UpgradePolicy.DepOnly,
  //   ownershipType: OwnershipType.SharedTimelock,
  //   timelockDurationSeconds: 86400, // 24 Hours
  //   lastUpgradeDate: '2024-02-20',
  //   version: 5,
  //   isVerified: true,
  //   controllerAddress: '0xgam...gov',
  //   timelockAddress: '0xtime...obj',
  //   sourceCodeUrl: 'https://github.com/gamefi',
  // }
];