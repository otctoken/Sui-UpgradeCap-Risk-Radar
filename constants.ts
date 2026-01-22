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
    name: 'WAL Token',
    logoUrl: "Walrus_coin.jpg",
    contract: '0x356a26eb9e012a68958082340d4c4116e7f55615cf27affcff209cf0ae544f59',
    upgradecap: "0xf45cd2f31729cc7044f0ed77fecef4a2e55b05e3b33de774119368767fb5a113",
    lastUpgradeDate: '2024-10-13',
    version: 1,
    policy: UpgradePolicy.Immutable,
    upgradecapAddress: '0x0',//多签地址或单签地址
    ownershipType: OwnershipType.Immutable, // DAO
    //customPolicyAddress: '0xdef...policy', // Has custom policy
    timelockAddressANFdfParentObject: "0",
    timelockDurationSeconds: 0, // 48 Hours
    category: 'Coin',
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
    ownershipType: OwnershipType.Immutable, // DAO
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
  {
    name: 'Ember Protocol',
    logoUrl: 'Ember_Protocol.jpg',
    contract: '0x4e1634d0001f22e24ca9fe2127aa49461ea3c320d4456c005b2ad86038b3f863',
    upgradecap: '0x298c2d3e0449655cb48b3d5599ea124bf47690e8eab175a7458c3d2ce3bdcefb',
    lastUpgradeDate: '2026-01-01',
    version: 5,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0xe5e507ee4a78f51704ad6cce4f549c4878f0a73d8392d47ad87135bf11ff5af2',
    ownershipType: OwnershipType.Single,
    timelockAddressANFdfParentObject: '0',
    timelockDurationSeconds: 0,
    isVerified: true,
    category: 'Defi|Yield',
  },
  {
    name: 'Magma Finance',
    logoUrl: 'Magma_Finance.jpg',
    contract: '0x0aa212abff1ea21273912720f3031634ec1d65065a1d52eb3140b9d41b45a0cb',
    upgradecap: '0x1aca184feba173eada24021d97111bf462deb2f195d18a86b9a381712eabaf2d',
    lastUpgradeDate: '2026-01-01',
    version: 4,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0x8d1c424a29f5080bb7623406801536c18f0abde456cebfb207b902ac2d417f6e',
    ownershipType: OwnershipType.MultiSig,
    timelockAddressANFdfParentObject: '0',
    timelockDurationSeconds: 0,
    isVerified: true,
    category: 'Defi|DEX',
  },
  {
    name: 'Kai Finance',
    logoUrl: 'Kai_Finance.jpg',
    contract: '0x909ad5f8badc34b49507dbd0cb9fb88cc816b531323659e3aefb992d4ab58474',
    upgradecap: '0x816949d764f3285c0420e9375c2594ca01355d1e05670b242ff5bfcf4c5fc958',
    lastUpgradeDate: '2026-01-01',
    version: 15,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0x5f2855bf926f3f9f73d3846a528d95c50eb28ec61a53aa5c92e5eb8a22ad1735',
    ownershipType: OwnershipType.MultiSig,
    timelockAddressANFdfParentObject: '0',
    timelockDurationSeconds: 0,
    isVerified: true,
    category: 'Defi|Yield',
  },
  {
    name: 'Deep Book',
    logoUrl: 'Deep_Book.jpg',
    contract: '0x337f4f4f6567fcd778d5454f27c16c70e2f274cc6377ea6249ddf491482ef497',
    upgradecap: '0xdadf253cea3b91010e64651b03da6d56166a4f44b43bdd4e185c277658634483',
    lastUpgradeDate: '2026-01-01',
    version: 6,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0x37f187e1e54e9c9b8c78b6c46a7281f644ebc62e75493623edcaa6d1dfcf64d2',
    ownershipType: OwnershipType.MultiSig,
    timelockAddressANFdfParentObject: '0',
    timelockDurationSeconds: 0,
    isVerified: true,
    category: 'Defi|DEX',
  },
  {
    name: 'Aftermath Finance',
    logoUrl: 'Aftermath_Finance.jpg',
    contract: '0xf948935b111990c2b604900c9b2eeb8f24dcf9868a45d1ea1653a5f282c10e29',
    upgradecap: '0xf214cfff9629bf22b4981b8fcec8fdc3a66e7d116cd5202f51563ebf8659d884',
    lastUpgradeDate: '2026-01-01',
    version: 3,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0x4b02b9b45f2a9597363fbaacb2fd6e7fb8ed9329bb6f716631b5717048908ace',
    ownershipType: OwnershipType.Single,
    timelockAddressANFdfParentObject: '0',
    timelockDurationSeconds: 0,
    isVerified: true,
    category: 'Defi|DEX',
  },
  {
    name: 'st SUI',
    logoUrl: 'st_SUI.jpg',
    contract: '0xd1b72982e40348d069bb1ff701e634c117bb5f741f44dff91e472d3b01461e55',
    upgradecap: '0xd9a0d8c61166f80aa86d0ea798f55e6c45cbcff9d1e23869864a8259f141a00a',
    lastUpgradeDate: '2026-01-01',
    version: 1,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0xe25b5d16ca31ddfdc31a7219c90f88bdfc56b606c13df6619aef22515580e293',
    ownershipType: OwnershipType.Single,
    timelockAddressANFdfParentObject: '0',
    timelockDurationSeconds: 0,
    isVerified: true,
    category: 'Staked',
  },
  {
    name: 'XAUM',
    logoUrl: 'XAUM.jpg',
    contract: '0x9d297676e7a4b771ab023291377b2adfaa4938fb9080b8d12430e4b108b836a9',
    upgradecap: '0xe6944b5bfef099563cd6785347ce97e0078ff518806f582b3c251c8209b569a0',
    lastUpgradeDate: '2026-01-01',
    version: 1,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0x567d08ac6939ad0fbe0bdf60a3cbe97568b4becf2ca225fd665b9ad3bf0b6fb8',
    ownershipType: OwnershipType.Single,
    timelockAddressANFdfParentObject: '0',
    timelockDurationSeconds: 0,
    isVerified: true,
    category: 'Coin',
  },
  {
    name: 'Mole',
    logoUrl: 'Mole.jpg',
    contract: '0xd79f275b0641176450380d18bcfc243ac0447ff6352a719f677f857bf678f98a',
    upgradecap: '0x59be9be45dd5c033360f102f695ee4ba1f2275eff7c014c893a89a48bca4cebf',
    lastUpgradeDate: '2026-01-01',
    version: 20,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0x79d0b16ddeea60be054d1610f8566a2cdd5af103204f70826eb85d57f0b373a4',
    ownershipType: OwnershipType.Single,
    timelockAddressANFdfParentObject: '0',
    timelockDurationSeconds: 0,
    isVerified: true,
    category: 'Defi|Yield',
  },
  {
    name: 'METASTABLE',
    logoUrl: 'METASTABLE.jpg',
    contract: '0xa17a98f8e62262cbe4b02933f9b362f6f05e97f79ae88d774e7ca89ac3abe498',
    upgradecap: '0x9c0af68a0eb39bb2a36b52f9eee9b8702d41949a7df59ebab9424d49b91518ac',
    lastUpgradeDate: '2026-01-01',
    version: 5,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0x692cc49cde1d2b37c5005603285fa06920e7fe025ce88005cfc692cec3ce4269',
    ownershipType: OwnershipType.Single,
    timelockAddressANFdfParentObject: '0',
    timelockDurationSeconds: 0,
    isVerified: true,
    category: 'Defi|Yield',
  },
  {
    name: 'Turbos Finance',
    logoUrl: 'Turbos_Finance.jpg',
    contract: '0xa5a0c25c79e428eba04fb98b3fb2a34db45ab26d4c8faf0d7e39d66a63891e64',
    upgradecap: '0x00a8e96385ed222c04fab9a95c9e12307e2a7b4375551338289101e78d193eee',
    lastUpgradeDate: '2026-01-01',
    version: 22,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0xc132dba47a890245c93c7b2b7ee3a13238079e032ddd7840e1c497671dd4abbe',
    ownershipType: OwnershipType.MultiSig,
    timelockAddressANFdfParentObject: '0',
    timelockDurationSeconds: 0,
    isVerified: true,
    category: 'Defi|DEX',
  },
  {
    name: 'STEAMM',
    logoUrl: 'STEAMM.jpg',
    contract: '0x3cda100fd04db883a9f8cd3976d94b9f8eca3843614fdd45e7492037938e7850',
    upgradecap: '0xf31a11a7514c9ce5976caab57270548e12792c9328b06f6db3f7668daef10543',
    lastUpgradeDate: '2026-01-01',
    version: 16,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0xb1ffbc2e1915f44b8f271a703becc1bf8aa79bc22431a58900a102892b783c25',
    ownershipType: OwnershipType.Single,
    timelockAddressANFdfParentObject: '0',
    timelockDurationSeconds: 0,
    isVerified: true,
    category: 'Defi|DEX',
  },
  {
    name: 'Typus Finance',
    logoUrl: 'Typus_Finance.jpg',
    contract: '0xff833c8378057598cb2a397a08ca22606a1aa5a46b76eb4aee0e657142baa45e',
    upgradecap: '0xb05e11dfdc0f44e29ed1d49090fdf90e3d0b3d1123974c31d9da174a007c6642',
    lastUpgradeDate: '2026-01-01',
    version: 41,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0xb9a09efd534d29cc9f990db26b2dab00289f32de0cdcefa68c6808de208bc9cb',
    ownershipType: OwnershipType.MultiSig,
    timelockAddressANFdfParentObject: '0',
    timelockDurationSeconds: 0,
    isVerified: true,
    category: 'Defi|Yield',
  },
  {
    name: 'Dip Coin',
    logoUrl: 'DipCoin.jpg',
    contract: '0xdae28ab9ab072c647c4e8f2057a8f17dcc4847e42d6a8258df4b376ae183c872',
    upgradecap: '0xfca22d43c55ba4935eac8a24675c62a31b4d1deb4ece10bb62648dd374df16d3',
    lastUpgradeDate: '2026-01-01',
    version: 1,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0x6a93e639f0cd8930642ea4a9072265064d232b3a2773423392874793aaa00a8f',
    ownershipType: OwnershipType.Single,
    timelockAddressANFdfParentObject: '0',
    timelockDurationSeconds: 0,
    isVerified: true,
    category: 'Defi|DEX',
  },
  {
    name: 'Double Up',
    logoUrl: 'Double_Up.jpg',
    contract: '0x39b389ebfc91fc0a6be7cff84dae9cca67c4074820429e5cf00e6ed6b35aef41',
    upgradecap: '0xa9ac5f642be8fe712969a583f5e9ecda9e6210095d61a58019f033135e598cbb',
    lastUpgradeDate: '2026-01-01',
    version: 20,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0xfd0978a0c4098174ce48b92f5f9411a7826d1d9b3a04e6734e1a34fad7fb6f1b',
    ownershipType: OwnershipType.Single,
    timelockAddressANFdfParentObject: '0',
    timelockDurationSeconds: 0,
    isVerified: true,
    category: 'Defi|Yield',
  },
  {
    name: 'FlowX Finance',
    logoUrl: 'FlowX_Finance.jpg',
    contract: '0xde2c47eb0da8c74e4d0f6a220c41619681221b9c2590518095f0f0c2d3f3c772',
    upgradecap: '0x44532a88e716645f4de626b50d0108133725c01844776837fc846fb71a04e1f0',
    lastUpgradeDate: '2026-01-01',
    version: 7,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0xb461cdf52450304f090a7868b33f82828502ec7026d3b2013ed942dd1373b074',
    ownershipType: OwnershipType.MultiSig,
    timelockAddressANFdfParentObject: '0',
    timelockDurationSeconds: 0,
    isVerified: true,
    category: 'Defi|DEX',
  },
  {
    name: 'Full Sail',
    logoUrl: 'Full_Sail.jpg',
    contract: '0xf7ca99f9fd82da76083a52ab56d88aff15d039b76499b85db8b8bc4d4804584a',
    upgradecap: '0x1e6089d13ca73185413e0f21020b9de06dbd2f6acc533c1b19061167ef6f70c2',
    lastUpgradeDate: '2026-01-01',
    version: 3,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0xfed1c619fc8dd98367a0422ca9ef53c9825e2893d78dda822106d12687888fb3',
    ownershipType: OwnershipType.MultiSig,
    timelockAddressANFdfParentObject: '0',
    timelockDurationSeconds: 0,
    isVerified: true,
    category: 'Defi|DEX',
  },
  {
    name: 'Kriya',
    logoUrl: 'Kriya.jpg',
    contract: '0xe10f85f47c6d11f63e650aa7daf168c55ead9abb6da4227eba5dd5e4f8d890b1',
    upgradecap: '0x2df6897c4ac7cf59acf07e88051af921d78eeae84aed1131f3378f03580c02fa',
    lastUpgradeDate: '2026-01-01',
    version: 2,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0x0655e3b8399ef6053105d371555b23aef35e8340871c0d1f5f4e14985bfa4cd8',
    ownershipType: OwnershipType.Single,
    timelockAddressANFdfParentObject: '0',
    timelockDurationSeconds: 0,
    isVerified: true,
    category: 'Defi|DEX',
  },
  {
    name: 'Ferra',
    logoUrl: "Ferra.jpg",
    contract: '0x01aca2702b2402f13eacdf9f3e49f5d1bdd3ec5cc7d11847cf8acbaef1cb6d5c',
    upgradecap: "0x13bd64310147dcaa5687af515de25c71fea048233a228ce63fcfcc64ca587585",
    lastUpgradeDate: '2025-12-29',
    version: 2,
    policy: UpgradePolicy.Compatible,
    upgradecapAddress: '0x5c9dacf5a678ea15b8569d65960330307e23d429289ca380e665b1aa175ebeca',//多签地址或单签地址，如果Dao则是规则对象地址 == timelockAddressANFdfParentObject
    ownershipType: OwnershipType.Dao, // DAO
    whetherShared: true,
    customPolicyAddress: '0x01aca2702b2402f13eacdf9f3e49f5d1bdd3ec5cc7d11847cf8acbaef1cb6d5c', // 策略合约地址
    timelockAddressANFdfParentObject: '0x5c9dacf5a678ea15b8569d65960330307e23d429289ca380e665b1aa175ebeca', //也就是PolicyOBJid
    whetherDF: false,
    timelockDurationSeconds: 0, // 48 Hours
    category: 'Defi|DEX',
    isVerified: true,
    // No controller address because it's immutable/burned
  },
];