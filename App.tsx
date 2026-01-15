import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Filter, ChevronLeft, ChevronRight, Check, ChevronDown, BookOpen, LayoutDashboard, PlusCircle, Send, Menu, X } from 'lucide-react';
import DAppCard from './components/DAppCard';
import ScoreGuide from './components/ScoreGuide';
import { MOCK_DAPPS } from './constants';
import { calculateRiskScore } from './utils';
// @ts-ignore
import logo from './picture/logo.png'; // 没有红线
type ViewType = 'dashboard' | 'rules';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = 10;
  const categories = ['All', 'DeFi', 'NFT', 'GameFi', 'Infrastructure', 'Meme'];

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

  // Filter Logic
  const filteredDapps = useMemo(() => {
    return MOCK_DAPPS.filter(dapp => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        dapp.name.toLowerCase().includes(searchLower) ||
        dapp.description.toLowerCase().includes(searchLower);

      const matchesCategory = selectedCategory === 'All' || dapp.category === selectedCategory;
      return matchesSearch && matchesCategory;
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
                Sui UpgradeCap Radar
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
              <div className="grid grid-cols-2 md:grid-cols-5 gap-y-4 gap-x-4 border-t border-slate-800 pt-4">
                <div className="text-center md:text-left">
                  <div className="text-xl font-bold text-white">{stats.total}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Protocols</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-xl font-bold text-emerald-400">{stats.low}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Low Risk</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-xl font-bold text-blue-400">{stats.mediumLow}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Med-Low</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-xl font-bold text-amber-400">{stats.medium}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Medium</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-xl font-bold text-rose-400">{stats.high}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">High Risk</div>
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
                  <DAppCard key={dapp.id} dapp={dapp} />
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