# Developer Compliance Quick Reference

**TL;DR**: Use governance language only. Run `npm run validate:compliance` before committing.

---

## Terminology Quick Swap

| ❌ NEVER Use | ✅ Use Instead |
|-------------|-----------------|
| "yield" | "governance participation" |
| "returns" | "governance weight" |
| "APY / APR" | "governance multiplier" or "tier level" |
| "staking rewards" | "governance participation" |
| "passive income" | "governance coordination" |
| "dividend" | "treasury allocation" |
| "investment" | "governance token" |
| "interest" | "governance participation" |
| "passive income" | "protocol participation" |
| "profit" | "protocol revenue" |
| "financial returns" | "governance decisions" |

---

## PR Pre-Commit Checklist

Before pushing code:

\`\`\`bash
# 1. Run compliance validation
npm run validate:compliance

# 2. If violations found:
#    - Search for prohibited terms
#    - Replace with approved alternatives
#    - Test again

# 3. Build check
npm run build

# 4. Commit with message starting with feature name
git commit -m "feature: [description]"
\`\`\`

---

## Writing Compliant UI Text

### ❌ Wrong Way
\`\`\`tsx
<p>Stake TRZ to earn 35% APY on your investment</p>
<button>Claim Staking Rewards</button>
<span>Your investment generated $500 in returns</span>
\`\`\`

### ✅ Right Way
\`\`\`tsx
<p>Stake TRZ to participate in governance with voting power</p>
<button>Claim Governance Participation</button>
<span>You have accumulated governance weight</span>
\`\`\`

---

## Smart Contract Comments

### ❌ Wrong Way
\`\`\`solidity
/// @notice Earn 12% APY on staked tokens
function stake(uint256 amount) external {
    // Calculate investment returns
    // Distribute dividend payments
}
\`\`\`

### ✅ Right Way
\`\`\`solidity
/// @notice Accumulate governance weight through participation
/// @dev Governance weight = staked amount. No financial returns guaranteed.
function stake(uint256 amount) external {
    // Calculate governance participation weight
    // Discretionary treasury allocations only
}
\`\`\`

---

## Documentation Standards

All `.md` files must:
- [ ] Include safe-harbor declaration if TRZ-related
- [ ] Use "governance" terminology exclusively
- [ ] Avoid investment/financial language
- [ ] Link to compliance docs where appropriate

---

## Compliance Mode Integration

For components affected by Compliance Mode:

\`\`\`tsx
import { useComplianceMode } from '@/components/governance/compliance-mode-toggle'

export function MyComponent() {
  const complianceMode = useComplianceMode()

  return (
    <div>
      {complianceMode ? (
        <p>Governance Participation</p>
      ) : (
        <p>Your Stake Details</p>
      )}
    </div>
  )
}
\`\`\`

---

## API Response Standards

### ❌ Wrong
\`\`\`json
{
  "apy": 0.35,
  "returns": 500,
  "yield_generated": true
}
\`\`\`

### ✅ Right
\`\`\`json
{
  "governance_weight": 1000,
  "participation_level": "active",
  "token_classification": "governance_utility"
}
\`\`\`

---

## Event Naming

### ❌ Wrong
\`\`\`solidity
event YieldGenerated(uint256 amount);
event DividendPaid(address user, uint256 amount);
event StakingRewardsClaimed(address user);
\`\`\`

### ✅ Right
\`\`\`solidity
event GovernanceWeightUpdated(address indexed user, uint256 weight);
event TreasuryAllocationDecided(bytes32 indexed proposal);
event GovernanceParticipationClaimed(address indexed user);
\`\`\`

---

## Testing Compliance

\`\`\`bash
# Validate specific file
grep -r "yield\|return\|APY\|investment" app/my-new-feature

# Run full validation
npm run validate:compliance

# Check TypeScript compliance
npx tsc --noEmit
\`\`\`

---

## File Location Guide

| Need | Location |
|------|----------|
| Governance terminology list | `/docs/REGULATORY_COMPLIANCE.md` |
| API standards | `/docs/API_TOKEN_DESCRIPTORS.md` |
| Smart contract examples | `/docs/SMART_CONTRACT_NATSPEC.md` |
| Validator script | `/scripts/validate-compliance.js` |
| Compliance mode hook | `/hooks/use-compliance-mode.ts` |
| Compliance toggle component | `/components/governance/compliance-mode-toggle.tsx` |
| Legal/audit docs | `/app/legal/page.tsx` |

---

## Common Mistakes

### Mistake 1: Using "yield"
\`\`\`tsx
// ❌ BAD
yield earned: $500

// ✅ GOOD
governance weight: 1000
\`\`\`

### Mistake 2: Mentioning "returns"
\`\`\`tsx
// ❌ BAD
Expected returns: 35% annually

// ✅ GOOD
Governance participation level: Premium Tier
\`\`\`

### Mistake 3: Financial metrics
\`\`\`tsx
// ❌ BAD
APY: 35%
ROI: +250%

// ✅ GOOD
Governance weight: 3x multiplier
Participation level: Premium
\`\`\`

### Mistake 4: Investment language
\`\`\`tsx
// ❌ BAD
Invest now in TRZ
Make passive income

// ✅ GOOD
Participate in governance
Coordinate protocol decisions
\`\`\`

---

## Safe-Harbor Declaration

**Must appear on all user-facing TRZ pages**:

> TRZ is not intended or marketed as a financial instrument. It is a governance utility asset granting access to decentralized protocol operations. It provides no claim on assets, revenue, dividends, or profit. Users participate at their own risk and must comply with local jurisdictions.

---

## Escalation Path

**Unsure about terminology?**

1. Check `/docs/REGULATORY_COMPLIANCE.md` approved terms list
2. Search codebase for similar usage: `grep -r "your-term"`
3. Run validation script to catch issues: `npm run validate:compliance`
4. Ask in #compliance Slack channel (internal)

---

## Automated CI Checks

The validation script runs automatically on:
- [ ] Pre-commit (if husky configured)
- [ ] PR creation
- [ ] Branch push to main

**If validation fails, PR will not merge.**

---

## Quick Links

- 🏛️ Legal Framework: `/legal`
- 📊 Admin Dashboard: `/admin` (password required)
- 📖 Full Compliance Docs: `/docs/COMPLIANCE_EXECUTION_SUMMARY.md`
- 🔍 Validator Script: `/scripts/validate-compliance.js`
- 📋 Terminology Reference: `/docs/REGULATORY_COMPLIANCE.md`

---

**Last Updated**: February 8, 2026
**Version**: 1.0
**Status**: Production-Ready
