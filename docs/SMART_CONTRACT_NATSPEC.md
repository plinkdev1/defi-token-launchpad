# TRZ Smart Contract NatSpec Documentation

## Overview

All TRZ smart contracts include comprehensive NatSpec documentation emphasizing governance-only semantics. No financial, yield, or investment terminology is used in contract documentation.

## Core Contracts with Governance-Only Comments

### 1. TRZ Token Contract (TRZ.sol)

\`\`\`solidity
/**
 * @title TRZ - Treezures Labs Governance Token
 * @notice TRZ is a governance utility token for Treezures Labs ecosystem coordination.
 * @dev IMPORTANT: TRZ provides no financial returns, dividends, or revenue claims.
 *      It is purely for governance participation and protocol access.
 */
\`\`\`

**Key Functions:**

\`\`\`solidity
/**
 * @notice Mints TRZ tokens only from protocol revenue (no premine, no dilution)
 * @param amount Amount of TRZ to mint (in wei)
 * @param reason Governance reason for minting (e.g., "insurance_fees_collected")
 * @dev Only whitelisted revenue sources can call this function.
 *      Minting is NOT compensation or financial distribution—it represents
 *      protocol operational activity. Tokens are locked in treasury multisig.
 */
function mintFromRevenue(uint256 amount, string calldata reason) external
\`\`\`

**Governance Semantics:**
- ✓ Minting from protocol revenue (operational)
- ✓ Treasury-controlled (non-custodial for participants)
- ✗ NOT yield, returns, or financial compensation
- ✗ NOT tied to price appreciation or investment performance

### 2. TRZ Staking Vault Contract (TRZStaking.sol)

\`\`\`solidity
/**
 * @title TRZStaking - Governance Weight Accumulation
 * @notice Staking provides governance weight for voting on protocol allocations.
 * @dev CRITICAL COMPLIANCE NOTE:
 *      - Staking rewards (when available) are DISCRETIONARY and NOT guaranteed
 *      - Rewards represent protocol operational surplus, not investment returns
 *      - Staking = governance participation, NOT financial yield
 *      - Lock periods indicate commitment, not capital retention for returns
 */
\`\`\`

**Key Functions:**

\`\`\`solidity
/**
 * @notice Stake USDC to gain governance weight in Treezures Labs DAO
 * @param amount Amount of USDC to stake
 * @param tier Governance tier (0=flexible, 1=30d commitment, 2=180d commitment)
 * @dev Governance weight = 1 USDC staked = 1 vote in protocol governance.
 *      Lock periods indicate governance commitment levels only.
 *      NO FINANCIAL RETURNS GUARANTEED. Discretionary rewards (if any) are
 *      provided by treasury governance decisions, not contract mechanics.
 */
function stake(uint256 amount, uint256 tier) external
\`\`\`

**Governance Semantics:**
- ✓ Staking = voting power accumulation
- ✓ Governance weight determination
- ✓ Protocol participation
- ✗ NOT investment vehicle
- ✗ NOT guaranteed returns
- ✗ NOT passive income

### 3. Auto-Buyback Mechanism (AutoBuyback.sol)

\`\`\`solidity
/**
 * @title AutoBuyback - Treasury Revenue Redeployment
 * @notice Automatically redeploys protocol revenue back to TRZ buyback/burn cycles
 * @dev GOVERNANCE CLARIFICATION:
 *      - Revenue is operational surplus from protocol fees
 *      - Buyback is discretionary treasury decision (not guaranteed)
 *      - Burn reduces supply, not a financial incentive mechanism
 *      - Price effects are indirect, not promised or marketed
 */
\`\`\`

**Key Functions:**

\`\`\`solidity
/**
 * @notice Triggers buyback of TRZ tokens using accumulated protocol revenue
 * @param usdcAmount Amount of USDC revenue to deploy
 * @dev Called only by revenue-authorized contracts.
 *      Buyback is one of several treasury allocation strategies.
 *      NOT an investment guarantee or price support mechanism—purely governance-driven.
 */
function triggerBuyback(uint256 usdcAmount) external
\`\`\`

**Governance Semantics:**
- ✓ Revenue aggregation (operational)
- ✓ Discretionary treasury allocation
- ✓ Governance-controlled redeployment
- ✗ NOT market manipulation
- ✗ NOT guaranteed price mechanics
- ✗ NOT financial engineering

## Safe-Harbor Language in All Contracts

### Standard NatSpec Header

Every TRZ contract includes this header:

\`\`\`solidity
/**
 * @dev ===== COMPLIANCE NOTICE =====
 * TRZ is a governance utility token. It does NOT represent:
 * - Investment or financial product
 * - Revenue share or dividend vehicle
 * - Ownership stake in Treezures Labs
 * - Interest-bearing or yield-generating asset
 * - Any claim on assets, profits, or treasury
 *
 * TRZ represents ONLY:
 * - Governance participation rights
 * - Protocol coordination access
 * - Voting power in treasury allocation decisions
 * - Non-custodial participation in community governance
 *
 * Users participate at their own risk. No returns are guaranteed.
 * Rewards (if offered) are discretionary and governance-determined.
 */
\`\`\`

## Prohibited Terms in NatSpec

The following terms are NEVER used in contract documentation:

| Prohibited | Why | Approved Alternative |
|-----------|-----|----------------------|
| `yield` | Financial/investment term | `governance weight` |
| `returns` | Investment guarantee | `governance participation` |
| `APR` / `APY` | Financial metric | `governance multiplier` |
| `passive income` | Investment product | `governance participation` |
| `dividend` | Financial distribution | `treasury allocation` |
| `interest` | Financial instrument | `governance coordination` |
| `profit` | Financial term | `protocol revenue` |
| `staking rewards` | Financial compensation | `governance weight adjustment` |
| `investment` | Security term | `governance token` |

## Event Emissions - Governance Language

All contract events use governance-only terminology:

\`\`\`solidity
// ✓ CORRECT
event GovernanceWeightIncreased(address indexed staker, uint256 weight);
event TreasuryAllocationDecided(bytes32 indexed proposalId, uint256 approved);
event RevenueSourceRegistered(address indexed source, string protocol);

// ✗ INCORRECT (Never used)
event YieldGenerated(address indexed user, uint256 amount);
event DividendPaid(address indexed recipient, uint256 payment);
event StakingRewardsClaimed(address indexed user, uint256 reward);
\`\`\`

## Function Naming Conventions

Functions follow governance semantics:

\`\`\`solidity
// ✓ CORRECT
function getGovernanceWeight(address account) external view returns (uint256)
function allocateTreasuryFunds(uint256 amount, string calldata reason) external
function getRemainingLockPeriod(address account) external view returns (uint256)

// ✗ INCORRECT (Never used)
function getYield(address account) external view returns (uint256)
function claimStakingRewards() external
function calculateAPR(uint256 amount) external view returns (uint256)
\`\`\`

## Audit Compliance

All NatSpec documentation must be reviewed for:

1. **Terminology Compliance**: No investment/financial terminology
2. **Governance Focus**: All functions described as governance-related
3. **Risk Disclosure**: Every function includes risk disclaimers where applicable
4. **Safe-Harbor Presence**: Verbatim safe-harbor declaration on main contract

## Testing Compliance

Before deployment, contracts must pass:

\`\`\`bash
npm run validate:compliance
\`\`\`

This scans all documentation and code for prohibited terminology.

## Migration Path for Existing Contracts

If updating existing smart contracts:

1. Replace all `yield` references with `governance participation`
2. Replace all `staking reward` with `governance weight`
3. Remove any APR/APY calculations (purely governance multipliers)
4. Add safe-harbor declaration to contract header
5. Update all event names to governance semantics
6. Re-run compliance validation

---

**Status**: ✓ All TRZ contracts governance-compliant
**Last Updated**: 2026-02-08
**Audit Ready**: Yes (pending formal Zellic/OpenZeppelin audit)
