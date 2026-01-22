import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Filter, ChevronLeft, ChevronRight, Check, ChevronDown, BookOpen, LayoutDashboard, PlusCircle, Send, Menu, X } from 'lucide-react';
import DAppCard from './components/DAppCard';
import ScoreGuide from './components/ScoreGuide';
import { MOCK_DAPPS } from './constants';
import { calculateRiskScore } from './utils';

import {
  getObjectData, get_object_holder, Recursively_query_the_parent_object_ID_of_the_DF
  , query_object_wraps_object_ID
} from './components/GetQueryData';
// @ts-ignore
import logo from './public/logo.png'; // 没有红线
type ViewType = 'dashboard' | 'rules';
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function findKeyWithFields(sourceObject: any) {
  const requiredFields = ['id', 'package', 'policy', 'version'];

  // 1. 基础检查：如果当前节点不是对象或是 null，直接停止
  if (!sourceObject || typeof sourceObject !== 'object') {
    return undefined;
  }

  // 2. 检查当前对象“本身”是否就是我们要找的目标
  // (检查当前 sourceObject 是否同时拥有所有 requiredFields)
  const isMatch = requiredFields.every(field => field in sourceObject);
  if (isMatch) {
    return sourceObject; // 找到了！直接返回这个对象
  }

  // 3. 如果当前对象不是目标，则“递归”遍历它的每一个子属性
  for (const key of Object.keys(sourceObject)) {
    const childValue = sourceObject[key];

    // 递归调用自己，去更深一层寻找
    const found = findKeyWithFields(childValue);

    // 如果在深层找到了，就把它层层传递出来
    if (found) {
      return found;
    }
  }

  // 遍历完所有分支都没找到
  return undefined;
}
async function getdata(data: any) {
  console.log(data.name)
  const updata_ = await getObjectData(data.upgradecap)
  const updata = updata_.asMoveObject.contents.json
  if (updata.package != data.contract) {
    console.log(data.name, ":Please update the data.--package")
  }
  if (updata.version != data.version) {
    console.log(data.name, ":Please update the data.--version")
  }
  const adder = await get_object_holder(data.upgradecap);
  if (adder.address != data.upgradecapAddress) {
    console.log(data.name, ":Please update the data.--upgradecapAddress")
  }
  if (updata.policy != data.policy) {
    console.log(data.name, ":Please update the data.--policy")
  }
}

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = 10;
  const categories = ['All', 'Defi|Lending', 'Defi|DEX', 'Defi|Yield', 'NFT', 'Game', 'Staked', "Coin"];

  // Close filter dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Stats Calculation
  const stats = useMemo(() => {
    const initial = { total: 0, low: 0, mediumLow: 0, medium: 0, high: 0 };
    return MOCK_DAPPS.reduce((acc, dapp) => {
      acc.total++;
      const { riskLevel } = calculateRiskScore(dapp);

      switch (riskLevel) {
        case 'Low':
          acc.low++;
          break;
        case 'Medium-Low':
          acc.mediumLow++;
          break;
        case 'Medium':
          acc.medium++;
          break;
        case 'High':
        default:
          acc.high++;
          break;
      }
      return acc;
    }, initial);
  }, []);
  //......
  useEffect(() => {  //0x1f9310238ee9298fb703c3419030b35b22bb1cc37113e3bb5007c99aec79e5b8 DF demo
    const tick = async () => {
      try {
        for (const data of MOCK_DAPPS) {
          if (data.policy < 500) {
            if (data.customPolicyAddress) {
              console.log(data.name)
              let bool = false
              const policyOB = await getObjectData(
                data.timelockAddressANFdfParentObject
              );
              const policyOBdata_ = policyOB.asMoveObject.contents.json
              const policyOBdata = findKeyWithFields(policyOBdata_)
              if (policyOBdata.version != data.version) {
                console.log(data.name, ":Please update the data.--version")
              }
              if (policyOBdata.package != data.contract) {
                console.log(data.name, ":Please update the data.--package")
              }
              const adder = await get_object_holder(data.timelockAddressANFdfParentObject);

              if (!data.whetherShared) {
                if (adder.address != data.upgradecapAddress) {
                  console.log(data.name, ":Please update the data.--upgradecapAddress")
                }
              } else {

                if (adder.type != "Shared") {
                  console.log(data.name, ":Please update the data.--upgradecapAddress")
                }
              }
              if (policyOBdata.policy != data.policy) {
                console.log(data.name, ":Please update the data.--policy")
              }
              bool = await query_object_wraps_object_ID(policyOB, data.upgradecap)
              if (!bool) {
                bool = await Recursively_query_the_parent_object_ID_of_the_DF(data.upgradecap, data.timelockAddressANFdfParentObject)
              }
              if (!bool) {
                console.log(data.name, ":Please update the data.---Strategy changes")
              }
              if (data.whetherDF) {
                await getdata(data)
              }
              //await getdata(data)
            } else {
              await getdata(data)
            }
          }
        };
      } catch (error) {
        console.error("net err:", error);
        return null;
      }
    }
    const init = async () => {
      await sleep(5000)
      await tick();
    };
    init();
  }, []);


  // Filter Logic
  const filteredDapps = useMemo(() => {
    const filtered = MOCK_DAPPS.filter(dapp => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        dapp.name.toLowerCase().includes(searchLower) ||
        dapp.contract.toLowerCase().includes(searchLower);

      const matchesCategory = selectedCategory === 'All' || dapp.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // 2. 再进行排序 (Sort)
    // 我们在这里调用 calculateRiskScore 来获取分数，并按 total 降序排列
    return filtered.sort((a, b) => {
      const scoreA = calculateRiskScore(a).total;
      const scoreB = calculateRiskScore(b).total;

      // b - a 表示降序 (由高到低)
      // a - b 表示升序 (由低到高)
      return scoreB - scoreA;
    });

  }, [searchQuery, selectedCategory]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredDapps.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDapps = filteredDapps.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(p => p - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(p => p + 1);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto' // 如果手机端依然卡顿，可以尝试改为 'auto'
    });
  }, [currentPage]); // 依赖项是 currentPage
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsFilterOpen(false);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 pb-20 font-sans selection:bg-sui-blue/30">

      {/* Global Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">

            {/* Logo Area */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => { setCurrentView('dashboard'); setIsMobileMenuOpen(false); }}
            >
              {/* === 修改开始：替换原来的图标代码 === */}
              <img
                src={logo}  // 请确保这里是您保存图片的实际路径
                alt="Sui UpgradeCap Radar"
                className="w-10 h-10 rounded-full shadow-lg shadow-sui-blue/20 group-hover:scale-105 transition-transform duration-200"
              />
              {/* === 修改结束 === */}

              <h1 className="text-lg md:text-xl font-bold tracking-tight text-white">
                Sui UpgradeCap Risk Radar
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-950/50 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${currentView === 'dashboard'
                  ? 'bg-slate-800 text-white shadow-sm ring-1 ring-slate-700'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </button>

              <button
                onClick={() => setCurrentView('rules')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${currentView === 'rules'
                  ? 'bg-slate-800 text-white shadow-sm ring-1 ring-slate-700'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
              >
                <BookOpen className="w-4 h-4" />
                Scoring Rules
              </button>

              <div className="w-px h-4 bg-slate-800 mx-1"></div>

              <a
                href="https://t.me/Sui_UpgradeCap_Radar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors whitespace-nowrap"
              >
                <Send className="w-4 h-4" />
                TG
              </a>

            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800 space-y-2 animate-in slide-in-from-top-2 fade-in duration-200">
              <button
                onClick={() => { setCurrentView('dashboard'); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${currentView === 'dashboard'
                  ? 'bg-slate-800 text-white shadow-sm ring-1 ring-slate-700'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
              >
                <LayoutDashboard className="w-5 h-5" />
                Dashboard
              </button>

              <button
                onClick={() => { setCurrentView('rules'); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${currentView === 'rules'
                  ? 'bg-slate-800 text-white shadow-sm ring-1 ring-slate-700'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
              >
                <BookOpen className="w-5 h-5" />
                Scoring Rules
              </button>

              <div className="h-px bg-slate-800 my-2 mx-4"></div>

              <a
                href="https://t.me/SuiUpgradeCapRadar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
              >
                <Send className="w-5 h-5" />
                TG Community
              </a>

              <a
                href="https://typeform.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-sui-blue hover:bg-sui-blue/10 transition-colors"
              >
                <PlusCircle className="w-5 h-5" />
                Submit Project
              </a>
            </div>
          )}

          {/* Conditional Header Content: Stats Bar (Only on Dashboard) */}
          {currentView === 'dashboard' && (
            <div className="pb-6 pt-2">
              <p className="text-slate-400 text-sm mb-4">
                Sui Move contracts are upgradeable by default. If upgrade authority is centralized and immediate, a safe protocol today could become malicious code tomorrow. We track the UpgradeCap so you don't have to.
              </p>
              <div className="grid grid-cols-5 gap-1 md:gap-4 border-t border-slate-800 pt-4">

                {/* 1. Protocols */}
                <div className="flex flex-col items-center">
                  <div className="text-sm sm:text-xl font-bold text-white">{stats.total}</div>
                  <div className="text-[8px] sm:text-[10px] text-slate-500 uppercase font-semibold leading-tight">Protocols</div>
                </div>

                {/* 2. Low Risk */}
                <div className="flex flex-col items-center">
                  <div className="text-sm sm:text-xl font-bold text-emerald-400">{stats.low}</div>
                  <div className="text-[8px] sm:text-[10px] text-slate-500 uppercase font-semibold leading-tight">Low</div>
                </div>

                {/* 3. Med-Low */}
                <div className="flex flex-col items-center">
                  <div className="text-sm sm:text-xl font-bold text-blue-400">{stats.mediumLow}</div>
                  <div className="text-[8px] sm:text-[10px] text-slate-500 uppercase font-semibold leading-tight whitespace-nowrap">Med-Low</div>
                </div>

                {/* 4. Medium */}
                <div className="flex flex-col items-center">
                  <div className="text-sm sm:text-xl font-bold text-amber-400">{stats.medium}</div>
                  <div className="text-[8px] sm:text-[10px] text-slate-500 uppercase font-semibold leading-tight">Medium</div>
                </div>

                {/* 5. High Risk */}
                <div className="flex flex-col items-center">
                  <div className="text-sm sm:text-xl font-bold text-rose-400">{stats.high}</div>
                  <div className="text-[8px] sm:text-[10px] text-slate-500 uppercase font-semibold leading-tight">High</div>
                </div>

              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 mt-6">

        {currentView === 'dashboard' ? (
          <>
            {/* Dashboard Controls */}
            <div className="bg-slate-900 p-4 rounded-xl shadow-lg border border-slate-800 mb-3 flex flex-col sm:flex-row gap-4 justify-between items-center z-20 relative">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search protocol by name..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sui-blue/50 focus:border-transparent transition-all"
                />
              </div>
              <div className="flex gap-2 w-full sm:w-auto justify-end relative" ref={filterRef}>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${selectedCategory !== 'All'
                    ? 'bg-slate-800 border-sui-blue/50 text-sui-blue hover:bg-slate-700'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                    }`}
                >
                  <Filter className="w-4 h-4" />
                  <span>{selectedCategory === 'All' ? 'Filter' : selectedCategory}</span>
                  <ChevronDown className={`w-3 h-3 ml-1 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Filter Dropdown */}
                {isFilterOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-slate-900 border border-slate-700 rounded-lg shadow-xl overflow-hidden z-30 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="py-1">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => handleCategorySelect(cat)}
                          className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${selectedCategory === cat
                            ? 'bg-slate-800 text-sui-blue font-medium'
                            : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                            }`}
                        >
                          {cat}
                          {selectedCategory === cat && <Check className="w-3.5 h-3.5" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* DApp List */}
            <div className="space-y-2">
              {currentDapps.length > 0 ? (
                currentDapps.map((dapp) => (
                  <DAppCard key={dapp.contract} dapp={dapp} />
                ))
              ) : (
                <div className="text-center py-12 text-slate-500 bg-slate-900/50 rounded-xl border border-slate-800 border-dashed">
                  <p>No protocols found matching "{searchQuery}" {selectedCategory !== 'All' ? `in ${selectedCategory}` : ''}</p>
                  <button
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                    className="mt-4 text-sm text-sui-blue hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6 bg-slate-900 border border-slate-800 rounded-lg p-3">
                <span className="text-sm text-slate-400">
                  Showing <span className="font-medium text-white">{startIndex + 1}</span> to <span className="font-medium text-white">{Math.min(startIndex + itemsPerPage, filteredDapps.length)}</span> of <span className="font-medium text-white">{filteredDapps.length}</span> results
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="p-2 rounded-md bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-medium text-slate-300 px-2">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-md bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Footer disclaimer */}
            <div className="mt-8 text-center text-slate-500 text-xs">
              <p>Scores are calculated based on on-chain data including Move package definitions and object ownership.</p>
              <p className="mt-2">Disclaimer: High scores do not guarantee safety from bugs, only protection against arbitrary upgrades.</p>
            </div>
          </>
        ) : (
          <ScoreGuide />
        )}
      </main>
    </div>
  );
}

export default App;