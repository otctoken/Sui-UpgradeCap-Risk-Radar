//import { Flag } from 'lucide-react';
import { DAppRiskProfile, UpgradePolicy, OwnershipType } from './types';
// @ts-ignore
import navi from './picture/navi.png'; // 
// @ts-ignore
import suilend from './picture/suilend.svg'; // 
// @ts-ignore
import bluefin from './picture/bluefin.jpg'; // 
// @ts-ignore
import spring from './picture/Spring.png'; // 
// @ts-ignore
import alphafiled from './picture/Alphafil.jpg'; // 
// @ts-ignore
import Haedal from './picture/Haedal.jpg'; // 
// @ts-ignore
import Cetus from './picture/Cetus.png'; // 
// @ts-ignore
import Momentum from './picture/Momentum.jpg'; // 
// @ts-ignore
import brag from './picture/brag.jpg'; // 
// @ts-ignore
import savingsgame from './picture/savingsgame.png'; // 
// @ts-ignore
import Bucket from './picture/Bucket.jpg'; // 

export const MOCK_DAPPS: DAppRiskProfile[] = [
  {
    upgradecap: "0xdba1b40f3537441b51d2848fc0a149610e48e67c1cc48c6ad641767622000623",
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
    upgradecap: "0x3d4ef1859c3ee9fc72858f588b56a09da5466e64f8cc4e90a7b3b909fba8a7ae",
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
  {
    upgradecap: "0xd5b2d2159a78030e6f07e028eb75236693ed7f2f32fecbdc1edb32d3a2079c0d",
    name: 'Bluefin',
    description: '0xd075338d105482f1527cbfd363d6413558f184dec36d9138a70261e87f486e9c',
    category: 'Defi|DEX',
    logoUrl: bluefin,
    policy: UpgradePolicy.Compatible,
    ownershipType: OwnershipType.Single, // DAO
    timelockDurationSeconds: 0, // 48 Hours
    lastUpgradeDate: '2025-12-10',
    version: 17,
    isVerified: true,
    controllerAddress: '0x69242cf0fa3b1c73adaf3450bcb510ba5f3a60ec5d9ad648b2676582b43f7e4a',//多签地址或单签地址
    //customPolicyAddress: '0xdef...policy', // Has custom policy
    timelockAddress: '0xghi...timelock',
    sourceCodeUrl: 'https://suiscan.xyz/mainnet/object/0xd075338d105482f1527cbfd363d6413558f184dec36d9138a70261e87f486e9c/contracts',
    // No controller address because it's immutable/burned
  },
  {
    upgradecap: "0x4462a572640227717cb8c60b6dd337f022743de6bc13f1fe0b7adb182d1fa274",
    name: 'Cetus',
    description: '0x25ebb9a7c50eb17b3fa9c5a30fb8b5ad8f97caaf4928943acbcff7153dfee5e3',
    category: 'Defi|DEX',
    logoUrl: Cetus,
    policy: UpgradePolicy.Compatible,
    ownershipType: OwnershipType.MultiSig, // DAO
    timelockDurationSeconds: 0, // 48 Hours
    lastUpgradeDate: '2025-10-14',
    version: 14,
    isVerified: true,
    controllerAddress: '0xdbfd0b17fa804c98f51d552b050fb7f850b85db96fa2a0d79e50119525814a47',//多签地址或单签地址
    //customPolicyAddress: '0xdef...policy', // Has custom policy
    timelockAddress: '0xghi...timelock',
    sourceCodeUrl: 'https://suiscan.xyz/mainnet/object/0x25ebb9a7c50eb17b3fa9c5a30fb8b5ad8f97caaf4928943acbcff7153dfee5e3/contracts',
    // No controller address because it's immutable/burned
  },
  {
    upgradecap: "0x59d16188948e7b89791271c7af78cb877092b8858db44c9166b8af9dee55dcb4",
    name: 'Momentum',
    description: '0xcf60a40f45d46fc1e828871a647c1e25a0915dec860d2662eb10fdb382c3c1d1',
    category: 'Defi|DEX',
    logoUrl: Momentum,
    policy: UpgradePolicy.Compatible,
    ownershipType: OwnershipType.MultiSig, // DAO
    timelockDurationSeconds: 0, // 48 Hours
    lastUpgradeDate: '2026-01-14',
    version: 5,
    isVerified: true,
    controllerAddress: '0x396a933434a340a8932f5a644b2d3a3d8a50f9297f2165eb9127219a06a741f6',//多签地址或单签地址
    //customPolicyAddress: '0xdef...policy', // Has custom policy
    timelockAddress: '0xghi...timelock',
    sourceCodeUrl: 'https://suiscan.xyz/mainnet/object/0xcf60a40f45d46fc1e828871a647c1e25a0915dec860d2662eb10fdb382c3c1d1/contracts',
    // No controller address because it's immutable/burned
  },
  {
    upgradecap: "0x208ee19bd0523bd1f3ea740a8057e82ba62ac544f70bcb008b0893660265355c",
    name: 'AlphaLend',
    description: '0x5209a18e1ae6ac994dd5a188a2d8deb17b2bbab29f63a7b5457bdfe040f69f61',
    category: 'Defi|Lending',
    logoUrl: alphafiled,
    policy: UpgradePolicy.Compatible,
    ownershipType: OwnershipType.MultiSig, // DAO
    timelockDurationSeconds: 0, // 48 Hours
    lastUpgradeDate: '2025-09-23',
    version: 10,
    isVerified: true,
    controllerAddress: '0xa1eb94d1700652aa85b417b46fa6775575b8b98d3352d864fb5146eb45d335fb',//多签地址或单签地址
    //customPolicyAddress: '0xdef...policy', // Has custom policy
    timelockAddress: '0xghi...timelock',
    sourceCodeUrl: 'https://suiscan.xyz/mainnet/object/0x5209a18e1ae6ac994dd5a188a2d8deb17b2bbab29f63a7b5457bdfe040f69f61/contracts',
    // No controller address because it's immutable/burned
  },
  {
    upgradecap: "0x4dc657b6c0fe896f4b94fee1ceac96312dde0a36b94e799caaec30deb53dcd67",
    name: 'SpringSui',
    description: '0xc89f4edb8f4dafb97934dbfce11ac132c07759c3bdda6f31d09c7fdca3b80b76',
    category: 'Staked',
    logoUrl: spring,
    policy: UpgradePolicy.Compatible,
    ownershipType: OwnershipType.Single, // DAO
    timelockDurationSeconds: 0, // 48 Hours
    lastUpgradeDate: '2025-12-10',
    version: 7,
    isVerified: true,
    controllerAddress: '0xb1ffbc2e1915f44b8f271a703becc1bf8aa79bc22431a58900a102892b783c25',//多签地址或单签地址
    //customPolicyAddress: '0xdef...policy', // Has custom policy
    timelockAddress: '0xghi...timelock',
    sourceCodeUrl: 'https://suiscan.xyz/mainnet/object/0xc89f4edb8f4dafb97934dbfce11ac132c07759c3bdda6f31d09c7fdca3b80b76/contracts',
    // No controller address because it's immutable/burned
  },
  {
    upgradecap: "0xc1c6690f21937f90e6b42f7c916d8e8c942926e3fb9e5c3c5584ae1e91502f25",
    name: 'Haedal',
    description: '0x19e6ea7f5ced4f090e20da794cc80349a03e638940ddb95155a4e301f5f4967c',
    category: 'Staked',
    logoUrl: Haedal,
    policy: UpgradePolicy.Compatible,
    ownershipType: OwnershipType.MultiSig, // DAO
    timelockDurationSeconds: 0, // 48 Hours
    lastUpgradeDate: '2025-10-13',
    version: 7,
    isVerified: true,
    controllerAddress: '0x24ce5d3bf7adc559befdf0e9a3f58e68853e5a4e4901f0f9a1bc336f75db8bb9',//多签地址或单签地址
    //customPolicyAddress: '0xdef...policy', // Has custom policy
    timelockAddress: '0xghi...timelock',
    sourceCodeUrl: 'https://suiscan.xyz/mainnet/object/0x19e6ea7f5ced4f090e20da794cc80349a03e638940ddb95155a4e301f5f4967c/contracts',
    // No controller address because it's immutable/burned
  },
  {
    upgradecap: "0xc1c6690f21937f90e6b42f7c916d8e8c942926e3fb9e5c3c5584ae1e91502f25",
    name: 'Brag',
    description: '0x93a36744eff6ee002ef32948866098eae032f277e7e702133dd35dc7cbfe1681',
    category: 'Game',
    logoUrl: brag,
    policy: UpgradePolicy.Immutable,
    ownershipType: OwnershipType.Single, // DAO
    timelockDurationSeconds: 0, // 48 Hours
    lastUpgradeDate: '2024-10-13',
    version: 1,
    isVerified: true,
    controllerAddress: '0x0',//多签地址或单签地址
    //customPolicyAddress: '0xdef...policy', // Has custom policy
    timelockAddress: '0xghi...timelock',
    sourceCodeUrl: 'https://suiscan.xyz/mainnet/object/0x93a36744eff6ee002ef32948866098eae032f277e7e702133dd35dc7cbfe1681/contracts',
    // No controller address because it's immutable/burned
  },
  {
    upgradecap: "0xc1c6690f21937f90e6b42f7c916d8e8c942926e3fb9e5c3c5584ae1e91502f25",
    name: 'SavingsGame',
    description: '0xb95a8704a4e56f7b461c521dd785f11a597e50736fbfb810d000586d77f259fe',
    category: 'Game',
    logoUrl: savingsgame,
    policy: UpgradePolicy.Compatible,
    ownershipType: OwnershipType.Single, // DAO
    timelockDurationSeconds: 172800, // 48 Hours
    lastUpgradeDate: '2025-12-29',
    version: 1,
    isVerified: true,
    controllerAddress: '0x82242fabebc3e6e331c3d5c6de3d34ff965671b75154ec1cb9e00aa437bbfa44',//多签地址或单签地址
    customPolicyAddress: '0x3513dd3a697b217997e6681a2ecee0ed25f7ec3e033a06ca63df1b78d79d920e', // 策略合约地址
    timelockAddress: '0x1a3294d785ae4c158426c5eb3a24ac993fe440152ca4bc7865fe8dd27569a023',
    sourceCodeUrl: 'https://suiscan.xyz/mainnet/object/0xb95a8704a4e56f7b461c521dd785f11a597e50736fbfb810d000586d77f259fe/contracts',
    // No controller address because it's immutable/burned
  },
  {
    upgradecap: "0x4035e8134f67518779278b3f3fcf9212249bde705a5f2e04005c686d7cf2f357",
    name: 'Bucket',
    description: '0x524a37ec411ba112f284508d9cd98265b796bea85db9450c84a42c8b5268885d',
    category: 'Defi|Lending',
    logoUrl: Bucket,
    policy: UpgradePolicy.Compatible,
    ownershipType: OwnershipType.MultiSig, // DAO
    timelockDurationSeconds: 0, // 48 Hours
    lastUpgradeDate: '2025-10-21',
    version: 2,
    isVerified: true,
    controllerAddress: '0x19f528cf4b5d0d8bcbc33c66405d149ea726a4dc1bc773537dc65364d4e58be4',//多签地址或单签地址
    //customPolicyAddress: '0x3513dd3a697b217997e6681a2ecee0ed25f7ec3e033a06ca63df1b78d79d920e', // 策略合约地址
    timelockAddress: '0xghi...timelock',
    sourceCodeUrl: 'https://suiscan.xyz/mainnet/object/0x524a37ec411ba112f284508d9cd98265b796bea85db9450c84a42c8b5268885d/contracts',
    // No controller address because it's immutable/burned
  },

];