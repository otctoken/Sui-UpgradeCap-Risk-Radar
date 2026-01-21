import React, { useMemo, useState } from 'react';
import {
    ShieldCheck,
    Clock,
    ChevronDown,
    ChevronUp,
    AlertTriangle,
    CheckCircle2,
    ExternalLink,
    FileText,
    XCircle,
} from 'lucide-react';
import { DAppRiskProfile, OwnershipType, UpgradePolicy } from '../types';
import { calculateRiskScore, formatDuration, getPolicyLabel } from '../utils';
import RiskBadge from './RiskBadge';
import { clsx } from 'clsx';

interface DAppCardProps {
    dapp: DAppRiskProfile;
}

const DAppCard: React.FC<DAppCardProps> = ({ dapp }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const scores = useMemo(() => calculateRiskScore(dapp), [dapp]);

    // Styling maps based on RiskLevel
    const colors = {
        'Low': { text: 'text-emerald-400', bg: 'bg-emerald-500', ring: 'ring-emerald-500/30', variant: 'success' as const },
        'Medium-Low': { text: 'text-blue-400', bg: 'bg-blue-500', ring: 'ring-blue-500/30', variant: 'info' as const },
        'Medium': { text: 'text-amber-400', bg: 'bg-amber-500', ring: 'ring-amber-500/30', variant: 'warning' as const },
        'High': { text: 'text-rose-400', bg: 'bg-rose-500', ring: 'ring-rose-500/30', variant: 'error' as const },
    };

    const style = colors[scores.riskLevel];

    // Helper to get formatted UpgradeCap label
    const getUpgradeCapLabel = () => {
        if (dapp.ownershipType === OwnershipType.Immutable) return "Immutable";
        return getPolicyLabel(dapp.policy);
    }

    // Helper to determine UpgradeCap color
    const getUpgradeCapColor = () => {
        if (dapp.ownershipType === OwnershipType.Immutable) return "text-emerald-400";
        if (dapp.policy === UpgradePolicy.Immutable) return "text-emerald-400";
        if (dapp.policy === UpgradePolicy.DepOnly) return "text-emerald-400";
        if (dapp.policy === UpgradePolicy.Additive) return "text-amber-400";
        return "text-rose-400";
    };

    // Helper for Controller Label & Color
    const getControllerInfo = () => {
        if (dapp.ownershipType === OwnershipType.Immutable) return { label: 'Burned', color: 'text-emerald-400' };
        if (dapp.ownershipType === OwnershipType.MultiSig) return { label: 'Multisig', color: 'text-amber-400' };
        return { label: 'Single Address', color: 'text-rose-400' };
    };

    const controllerInfo = getControllerInfo();

    // Determine badge config
    const getHeaderBadgeConfig = () => {
        if (dapp.ownershipType === OwnershipType.Immutable) {
            return { label: 'Immutable', variant: style.variant };
        }
        return { label: getUpgradeCapLabel(), variant: style.variant };
    };

    const badgeConfig = getHeaderBadgeConfig();

    // Reusable component for the 6-grid items
    const AnalysisItem = ({ title, children }: { title: string, children?: React.ReactNode }) => (
        <div className="flex flex-col gap-0.5">
            <span className="text-slate-500 font-bold uppercase text-xs tracking-wider">{title}</span>
            <div className="text-base font-medium">{children}</div>
        </div>
    );

    // Address Link Component
    const AddressLink = ({ address, className }: { address?: string, className?: string }) => {
        if (!address) return null;
        return (
            <a
                href={`https://suiscan.xyz/mainnet/account/${address}`}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx("inline-flex items-center gap-1 hover:underline decoration-dashed underline-offset-4", className)}
                onClick={(e) => e.stopPropagation()}
            >
                <ExternalLink className="w-3 h-3" />
            </a>
        );
    };
    const AddressLink_c = ({ address, className }: { address?: string, className?: string }) => {
        if (!address) return null;
        return (
            <a
                href={`https://suiscan.xyz/mainnet/object/${address}/contracts`}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx("inline-flex items-center gap-1 hover:underline decoration-dashed underline-offset-4", className)}
                onClick={(e) => e.stopPropagation()}
            >
                <ExternalLink className="w-3 h-3" />
            </a>
        );
    };
    const AddressLinkOB_fields = ({ address, className }: { address?: string, className?: string }) => {
        if (!address) return null;
        return (
            <a
                href={`https://suiscan.xyz/mainnet/object/${address}/fields`}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx("inline-flex items-center gap-1 hover:underline decoration-dashed underline-offset-4", className)}
                onClick={(e) => e.stopPropagation()}
            >
                <ExternalLink className="w-3 h-3" />
            </a>
        );
    };
    // Score Row Component for Breakdown
    const ScoreRow = ({ label, score, max }: { label: string, score: number, max: number }) => (
        <div className="flex items-baseline justify-between border-b border-slate-800/50 pb-1 border-dashed">
            <span className="text-slate-400 text-sm md:text-base">{label}:</span>
            <span className="font-mono font-bold text-sm md:text-base">
                <span className="text-slate-200">{score}</span>
                <span className="text-slate-600">/{max}</span>
            </span>
        </div>
    );

    return (
        <div className={`bg-slate-900 rounded-xl shadow-lg border border-slate-800 overflow-hidden hover:border-slate-700 transition-colors duration-200 ${isExpanded ? 'ring-2 ' + style.ring : ''}`}>
            {/* Main Header Row */}
            <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>

                {/* Identity Section */}
                <div className="flex items-center gap-4 flex-1 w-full md:w-auto">
                    <div className="relative shrink-0">
                        <img src={dapp.logoUrl} alt={dapp.name} className="w-14 h-14 rounded-xl object-cover border border-slate-700" />
                        <div className="absolute -bottom-1 -right-1 bg-slate-800 rounded-full p-0.5">
                            {dapp.isVerified ? (
                                <CheckCircle2 className="w-5 h-5 text-blue-500 fill-slate-900" />
                            ) : (
                                <AlertTriangle className="w-5 h-5 text-rose-500 fill-slate-900" />
                            )}
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="font-bold text-xl text-slate-100">{dapp.name}</h3>
                            <span className="text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">{dapp.category}</span>
                        </div>
                        <p className="text-slate-400 text-xs mt-0.5 break-all text-balance">Contract:{dapp.contract}</p>
                    </div>
                </div>

                {/* Key Indicators (Desktop Only) - 保持不变 */}
                <div className="hidden md:flex items-center gap-3">
                    <div className="flex flex-col items-end gap-1">
                        <RiskBadge
                            label={badgeConfig.label}
                            variant={badgeConfig.variant}
                            className="text-sm py-1 px-3"
                        />
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                            <Clock className="w-3 h-3" />
                            {formatDuration(dapp.timelockDurationSeconds)}
                        </div>
                    </div>
                </div>

                {/* Score Circle & Mobile Indicators */}
                {/* 修改：在手机端 w-full justify-between 实现底部横排布局 */}
                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end mt-2 md:mt-0">

                    {/* Desktop Score (Hidden on mobile) */}
                    <div className="text-right hidden md:block">
                        <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Risk Score</div>
                        <div className={`text-2xl font-black ${style.text}`}>{scores.total}</div>
                    </div>

                    {/* Mobile: Score + Badge + Timer Row */}
                    {/* 新增：手机端专属的横向信息栏 */}
                    <div className="md:hidden flex items-center gap-3">
                        {/* Score */}
                        <div className={`flex items-center gap-1.5 ${style.text} font-bold shrink-0`}>
                            <ShieldCheck className="w-4 h-4" />
                            <span>{scores.total}/100</span>
                        </div>

                        {/* Divider */}
                        <div className="w-px h-3 bg-slate-700 shrink-0"></div>

                        {/* Badge & Timer */}
                        <div className="flex items-center gap-2 shrink-0">
                            <RiskBadge
                                label={badgeConfig.label}
                                variant={badgeConfig.variant}
                                className="text-[10px] py-0.5 px-2"
                            />
                            <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium">
                                <Clock className="w-3 h-3" />
                                <span className="whitespace-nowrap">{formatDuration(dapp.timelockDurationSeconds)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Chevron Button */}
                    <button className="text-slate-500 hover:text-slate-300 transition-colors shrink-0">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Expanded Details Panel - The 6 Point Risk Analysis */}
            {isExpanded && (
                <div className="bg-slate-950/50 border-t border-slate-800 p-5 animate-in fade-in slide-in-from-top-2 duration-200">

                    <div className="flex items-center gap-2 mb-4">
                        <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Detailed Risk Analysis</h4>
                        <div className="h-px flex-1 bg-slate-800"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-8">
                        {/* 1. UpgradeCap */}
                        <AnalysisItem title="1. UpgradeCap">
                            <span className={clsx("font-mono text-base", getUpgradeCapColor())}>
                                {getUpgradeCapLabel()}
                            </span>
                        </AnalysisItem>

                        {/* 2. Controller */}
                        <AnalysisItem title="2. Controller">
                            <div className="flex items-center gap-2">
                                <span className={clsx("font-medium", controllerInfo.color)}>
                                    {controllerInfo.label}
                                </span>
                                {dapp.upgradecapAddress && <AddressLink address={dapp.upgradecapAddress} className={controllerInfo.color} />}
                            </div>
                        </AnalysisItem>

                        {/* 3. Upgrade Policy */}
                        <AnalysisItem title="3. Upgrade Policy">
                            <div className="flex items-center gap-2">
                                {dapp.customPolicyAddress ? (
                                    <>
                                        <span className="text-sui-blue font-bold">Yes</span>
                                        <AddressLink_c address={dapp.customPolicyAddress} className="text-sui-blue" />
                                    </>
                                ) : (
                                    <span className="text-slate-400">No</span>
                                )}
                            </div>
                        </AnalysisItem>

                        {/* 4. Delayed Upgrade */}
                        <AnalysisItem title="4. Delayed Upgrade">
                            <div className="flex items-center gap-2">
                                {dapp.timelockDurationSeconds > 0 ? (
                                    <>
                                        <span className="text-emerald-400">{formatDuration(dapp.timelockDurationSeconds)}</span>
                                        <AddressLinkOB_fields address={dapp.timelockAddressANFdfParentObject} className="text-emerald-400" />
                                    </>
                                ) : (
                                    <span className={dapp.ownershipType === OwnershipType.Immutable ? "text-emerald-400" : "text-rose-400"}>
                                        No
                                    </span>
                                )}
                            </div>
                        </AnalysisItem>

                        {/* 5. Stability */}
                        <AnalysisItem title="5. Stability">
                            <span className="text-slate-300 font-mono bg-slate-800 px-2 py-0.5 rounded text-xs">
                                V{dapp.version}
                            </span>
                        </AnalysisItem>

                        {/* 6. Source Code */}
                        <AnalysisItem title="6. Source Code">
                            <div className="flex items-center gap-3">
                                {dapp.isVerified ? (
                                    <div className="flex items-center gap-1.5 text-emerald-400" title="Verified">
                                        <CheckCircle2 className="w-5 h-5" />
                                        <span className="text-xs">Verified</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-1.5 text-rose-500" title="Unverified">
                                        <XCircle className="w-5 h-5" />
                                        <span className="text-xs">Unverified</span>
                                    </div>
                                )}

                                {dapp.contract && (
                                    <a
                                        href={`https://suiscan.xyz/mainnet/object/${dapp.contract}/contracts`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-white transition-colors"
                                        title="View Source"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <FileText className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </AnalysisItem>

                    </div>

                    {/* Progress Bar & Footer */}
                    <div className="mt-6 pt-4 border-t border-slate-800/50">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-xs text-slate-500 font-medium">Total Safety Score</span>
                            <span className={clsx("text-lg font-bold", style.text)}>{scores.total}/100</span>
                        </div>
                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden mb-4">
                            <div
                                className={`h-full ${style.bg} transition-all duration-500 shadow-[0_0_10px_rgba(0,0,0,0.3)]`}
                                style={{ width: `${scores.total}%` }}
                            />
                        </div>

                        {/* Detailed Score Breakdown */}
                        <div className="bg-slate-900 rounded p-4 text-sm text-slate-400 border border-slate-800/50">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-1.5">
                                <ScoreRow label="UpgradeCap" score={scores.upgradeCapScore} max={20} />
                                <ScoreRow label="Controller" score={scores.controllerScore} max={10} />
                                <ScoreRow label="Upgrade Policy" score={scores.policyScore} max={10} />
                                <ScoreRow label="Delayed Upgrade" score={scores.delayedUpgradeScore} max={55} />
                                <ScoreRow label="Stability" score={scores.stabilityScore} max={5} />
                                <div className="flex justify-between items-center py-2">
                                    <span>Source Code</span>
                                    {scores.sourceCodeScore === 0 ? (
                                        <span className="text-rose-400">False</span>
                                    ) : (
                                        <span className="text-emerald-400">True</span>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-end items-baseline gap-2 mt-3 pt-2 border-t border-slate-800">
                                <span className="font-bold text-slate-400 text-sm">Total:</span>
                                <span className="font-mono font-bold text-base">
                                    <span className={style.text}>{scores.total}</span>
                                    <span className="text-slate-600 text-xs">/100</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DAppCard;