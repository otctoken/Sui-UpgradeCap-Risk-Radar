//import { Flag } from 'lucide-react';
import { DAppRiskProfile, UpgradePolicy, OwnershipType } from './types';




export const MOCK_DAPPS: DAppRiskProfile[] = [
  {
    name: 'NaviProtocol',
    logoUrl: 'navi.png',
    contract: '0xee0041239b89564ce870a7dec5ddc5d114367ab94a1137e90aa0633cb76518e0',
    upgradecap: "0xdba1b40f3537441b51d2848fc0a149610e48e67c1cc48c6ad641767622000623",
    lastUpgradeDate: '2025-11-18',
    version: 23,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0x25549f15b144032b4a61921552f6ecbfea13556615f7b45576b12f10d67955e7',//多签地址或单签地址
    ownershipType: OwnershipType.MultiSig, // DAO
    //customPolicyAddress: '0xdef...policy', // Has custom policy
    timelockAddressANFdfParentObject: "0",
    timelockDurationSeconds: 0, // 48 Hours
    category: 'Defi|Lending',
    isVerified: true,
    // No controller address because it's immutable/burned
  },
  {
    name: 'SuiLend',
    logoUrl: "suilend.svg",
    contract: '0x2d2a5129b8f07061d697c1b1729a06e696bf3b19c865a869055efba83759b04b',
    upgradecap: "0x3d4ef1859c3ee9fc72858f588b56a09da5466e64f8cc4e90a7b3b909fba8a7ae",
    lastUpgradeDate: '2026-01-06',
    version: 17,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0xb1ffbc2e1915f44b8f271a703becc1bf8aa79bc22431a58900a102892b783c25',//多签地址或单签地址
    ownershipType: OwnershipType.Single, // DAO
    //customPolicyAddress: '0xdef...policy', // Has custom policy
    timelockAddressANFdfParentObject: "0",
    timelockDurationSeconds: 0, // 48 Hours
    category: 'Defi|Lending',
    isVerified: true,
    // No controller address because it's immutable/burned
  },
  {
    name: 'Bluefin',
    logoUrl: "bluefin.jpg",
    contract: '0xd075338d105482f1527cbfd363d6413558f184dec36d9138a70261e87f486e9c',
    upgradecap: "0xd5b2d2159a78030e6f07e028eb75236693ed7f2f32fecbdc1edb32d3a2079c0d",
    lastUpgradeDate: '2025-12-10',
    version: 17,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0x69242cf0fa3b1c73adaf3450bcb510ba5f3a60ec5d9ad648b2676582b43f7e4a',//多签地址或单签地址
    ownershipType: OwnershipType.Single, // DAO
    //customPolicyAddress: '0xdef...policy', // Has custom policy
    timelockAddressANFdfParentObject: "0",
    timelockDurationSeconds: 0, // 48 Hours
    category: 'Defi|DEX',
    isVerified: true,
    // No controller address because it's immutable/burned
  },
  {
    name: 'Cetus',
    logoUrl: "Cetus.png",
    contract: '0x25ebb9a7c50eb17b3fa9c5a30fb8b5ad8f97caaf4928943acbcff7153dfee5e3',
    upgradecap: "0x4462a572640227717cb8c60b6dd337f022743de6bc13f1fe0b7adb182d1fa274",
    lastUpgradeDate: '2025-10-14',
    version: 14,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0xdbfd0b17fa804c98f51d552b050fb7f850b85db96fa2a0d79e50119525814a47',//多签地址或单签地址
    ownershipType: OwnershipType.MultiSig, // DAO
    //customPolicyAddress: '0xdef...policy', // Has custom policy
    timelockAddressANFdfParentObject: "0",
    timelockDurationSeconds: 0, // 48 Hours
    category: 'Defi|DEX',
    isVerified: true,
    // No controller address because it's immutable/burned
  },
  {
    name: 'Momentum',
    logoUrl: "Momentum.jpg",
    contract: '0xcf60a40f45d46fc1e828871a647c1e25a0915dec860d2662eb10fdb382c3c1d1',
    upgradecap: "0x59d16188948e7b89791271c7af78cb877092b8858db44c9166b8af9dee55dcb4",
    lastUpgradeDate: '2026-01-14',
    version: 5,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0x396a933434a340a8932f5a644b2d3a3d8a50f9297f2165eb9127219a06a741f6',//多签地址或单签地址
    ownershipType: OwnershipType.MultiSig, // DAO
    //customPolicyAddress: '0xdef...policy', // Has custom policy
    timelockAddressANFdfParentObject: "0",
    timelockDurationSeconds: 0, // 48 Hours
    category: 'Defi|DEX',
    isVerified: true,
    // No controller address because it's immutable/burned
  },
  {
    name: 'AlphaLend',
    logoUrl: "Alphafil.jpg",
    contract: '0x5209a18e1ae6ac994dd5a188a2d8deb17b2bbab29f63a7b5457bdfe040f69f61',
    upgradecap: "0x208ee19bd0523bd1f3ea740a8057e82ba62ac544f70bcb008b0893660265355c",
    lastUpgradeDate: '2025-09-23',
    version: 10,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0xa1eb94d1700652aa85b417b46fa6775575b8b98d3352d864fb5146eb45d335fb',//多签地址或单签地址
    ownershipType: OwnershipType.MultiSig, // DAO
    //customPolicyAddress: '0xdef...policy', // Has custom policy
    timelockAddressANFdfParentObject: "0",
    timelockDurationSeconds: 0, // 48 Hours
    category: 'Defi|Lending',
    isVerified: true,
    // No controller address because it's immutable/burned
  },
  {
    name: 'SpringSui',
    logoUrl: "Spring.png",
    contract: '0xc89f4edb8f4dafb97934dbfce11ac132c07759c3bdda6f31d09c7fdca3b80b76',
    upgradecap: "0x4dc657b6c0fe896f4b94fee1ceac96312dde0a36b94e799caaec30deb53dcd67",
    lastUpgradeDate: '2025-12-10',
    version: 7,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0xb1ffbc2e1915f44b8f271a703becc1bf8aa79bc22431a58900a102892b783c25',//多签地址或单签地址
    ownershipType: OwnershipType.Single, // DAO
    //customPolicyAddress: '0xdef...policy', // Has custom policy
    timelockAddressANFdfParentObject: "0",
    timelockDurationSeconds: 0, // 48 Hours
    category: 'Staked',
    isVerified: true,
    // No controller address because it's immutable/burned
  },
  {
    name: 'Haedal',
    logoUrl: "Haedal.jpg",
    contract: '0x19e6ea7f5ced4f090e20da794cc80349a03e638940ddb95155a4e301f5f4967c',
    upgradecap: "0xc1c6690f21937f90e6b42f7c916d8e8c942926e3fb9e5c3c5584ae1e91502f25",
    lastUpgradeDate: '2025-10-13',
    version: 7,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0x24ce5d3bf7adc559befdf0e9a3f58e68853e5a4e4901f0f9a1bc336f75db8bb9',//多签地址或单签地址
    ownershipType: OwnershipType.MultiSig, // DAO
    //customPolicyAddress: '0xdef...policy', // Has custom policy
    timelockAddressANFdfParentObject: "0",
    timelockDurationSeconds: 0, // 48 Hours
    category: 'Staked',
    isVerified: true,
    // No controller address because it's immutable/burned
  },
  {
    name: 'Brag',
    logoUrl: "brag.jpg",
    contract: '0x93a36744eff6ee002ef32948866098eae032f277e7e702133dd35dc7cbfe1681',
    upgradecap: "0x00fd4132743d99f6a444765b17d27bd5d13dde84a36f2f7f940057f2d2a315a9",
    lastUpgradeDate: '2024-10-13',
    version: 1,
    policy: UpgradePolicy.Immutable,
    upgradecapAddress: '0x0',//多签地址或单签地址
    ownershipType: OwnershipType.Single, // DAO
    //customPolicyAddress: '0xdef...policy', // Has custom policy
    timelockAddressANFdfParentObject: "0",
    timelockDurationSeconds: 0, // 48 Hours
    category: 'Game',
    isVerified: true,
    // No controller address because it's immutable/burned
  },
  {
    name: 'SavingsGame',
    logoUrl: "savingsgame.png",
    contract: '0xb95a8704a4e56f7b461c521dd785f11a597e50736fbfb810d000586d77f259fe',
    upgradecap: "0x84d368e8587160c443680e792e8b5b337b5a78e756fbe6885ce4df9a4f682f10",
    lastUpgradeDate: '2025-12-29',
    version: 1,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0x82242fabebc3e6e331c3d5c6de3d34ff965671b75154ec1cb9e00aa437bbfa44',//多签地址或单签地址
    ownershipType: OwnershipType.Single, // DAO
    customPolicyAddress: '0x3513dd3a697b217997e6681a2ecee0ed25f7ec3e033a06ca63df1b78d79d920e', // 策略合约地址
    timelockAddressANFdfParentObject: '0x1a3294d785ae4c158426c5eb3a24ac993fe440152ca4bc7865fe8dd27569a023', //也就是PolicyOBJid
    whetherDF: false,
    timelockDurationSeconds: 172800, // 48 Hours
    category: 'Game',
    isVerified: true,
    // No controller address because it's immutable/burned
  },
  {
    name: 'Bucket',
    logoUrl: "Bucket.jpg",
    contract: '0x524a37ec411ba112f284508d9cd98265b796bea85db9450c84a42c8b5268885d',
    upgradecap: "0x4035e8134f67518779278b3f3fcf9212249bde705a5f2e04005c686d7cf2f357",
    lastUpgradeDate: '2025-10-21',
    version: 2,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0x19f528cf4b5d0d8bcbc33c66405d149ea726a4dc1bc773537dc65364d4e58be4',//多签地址或单签地址
    ownershipType: OwnershipType.MultiSig, // DAO
    //customPolicyAddress: '0x3513dd3a697b217997e6681a2ecee0ed25f7ec3e033a06ca63df1b78d79d920e', // 策略合约地址
    timelockAddressANFdfParentObject: "0",
    timelockDurationSeconds: 0, // 48 Hours
    category: 'Defi|Lending',
    isVerified: true,
    // No controller address because it's immutable/burned
  },
  {
    name: 'Scallop',
    logoUrl: "Scallop.jpg",
    contract: '0xd384ded6b9e7f4d2c4c9007b0291ef88fbfed8e709bce83d2da69de2d79d013d',
    upgradecap: "0x38527d154618d1fd5a644b90717fe07cf0e9f26b46b63e9568e611a3f86d5c1a",
    lastUpgradeDate: '2026-01-08',
    version: 17,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0x1226a80ef40bd2e70c6a285b045b9b5d29915a2c5a2d57a2d3032cbdd89a8d5c',//多签地址或单签地址
    ownershipType: OwnershipType.MultiSig, // DAO
    //customPolicyAddress: '0x3513dd3a697b217997e6681a2ecee0ed25f7ec3e033a06ca63df1b78d79d920e', // 策略合约地址
    timelockAddressANFdfParentObject: "0",
    timelockDurationSeconds: 0, // 48 Hours
    category: 'Defi|Lending',
    isVerified: true,
    // No controller address because it's immutable/burned
  },
  {
    name: 'Pawtato Land',
    logoUrl: "Pawtato_Land.png",
    contract: '0x1dfeb9525015105f40f530593e3b81652d35f2c66f98f33c223aaef0b1d47594',
    upgradecap: "0x3ab44acd8cf9bb4bab22b3f77974043c281ed7bbc9151a90475345bea7015600",
    lastUpgradeDate: '2026-01-08',
    version: 98,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0x89d3a9c91cbfeb9b59335c526b0726262a51f2e0ef97775397feb83d194f4e2c',//多签地址或单签地址
    ownershipType: OwnershipType.Single, // DAO
    //customPolicyAddress: '0x3513dd3a697b217997e6681a2ecee0ed25f7ec3e033a06ca63df1b78d79d920e', // 策略合约地址
    timelockAddressANFdfParentObject: "0",
    timelockDurationSeconds: 0, // 48 Hours
    category: 'NFT',
    isVerified: true,
    // No controller address because it's immutable/burned
  },
  {
    name: 'Sui Name Service',
    logoUrl: "Sui_Name_Service.png",
    contract: '0x71af035413ed499710980ed8adb010bbf2cc5cacf4ab37c7710a4bb87eb58ba5',
    upgradecap: "0x9cda28244a0d0de294d2b271e772a9c33eb47d316c59913d7369b545b4af098c",
    lastUpgradeDate: '2026-01-16',
    version: 4,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0x9b388a6da9dd4f73e0b13abc6100f1141782ef105f6f5e9d986fb6e00f0b2591',//多签地址或单签地址
    ownershipType: OwnershipType.MultiSig, // DAO
    //customPolicyAddress: '0x3513dd3a697b217997e6681a2ecee0ed25f7ec3e033a06ca63df1b78d79d920e', // 策略合约地址
    timelockAddressANFdfParentObject: "0",
    timelockDurationSeconds: 0, // 48 Hours
    category: 'NFT',
    isVerified: true,
    // No controller address because it's immutable/burned
  },

];