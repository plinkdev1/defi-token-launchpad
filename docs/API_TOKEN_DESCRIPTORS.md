# API Token Descriptors & Metadata

## Token Description Standards

All API responses describing TRZ must use the following standardized descriptors:

### Primary Descriptor
\`\`\`
"TRZ is a governance and utility token enabling participation in Treezures protocol operations. It grants voting rights on treasury allocation and protocol parameters. TRZ does not represent equity, ownership, or financial rights."
\`\`\`

### Short Description (Max 50 characters)
\`\`\`
"Governance Utility Token"
\`\`\`

### Category Classification
\`\`\`
{
  "category": "governance",
  "type": "utility_token",
  "classification": "non_security",
  "financial_product": false
}
\`\`\`

---

## Endpoint Specifications

### GET /api/tokens/TRZ
**Response Structure:**
\`\`\`json
{
  "symbol": "TRZ",
  "name": "Treezures",
  "contract": "0x...",
  "decimals": 18,
  "description": "Governance and utility token enabling participation in Treezures DAO operations",
  "long_description": "TRZ is a governance and utility token that grants holders voting rights on treasury allocation, protocol parameter adjustments, and ecosystem initiatives. TRZ does not represent equity, ownership, or financial rights. Participation is at user's own risk.",
  "category": "governance",
  "classification": {
    "is_security": false,
    "is_investment_product": false,
    "is_commodity": false,
    "regulatory_framework": "utility_token"
  },
  "disclaimers": [
    "Not a financial investment or security",
    "No guaranteed returns or dividends",
    "Governance participation only",
    "Do your own research (DYOR)"
  ],
  "regulatory_note": "TRZ is not intended or marketed as a financial instrument. It is a governance utility asset granting access to decentralized protocol operations. It provides no claim on assets, revenue, dividends, or profit.",
  "chains": [
    {
      "name": "Gnosis",
      "address": "0x...",
      "verified": true
    },
    {
      "name": "Polygon",
      "address": "0x...",
      "verified": true
    }
  ]
}
\`\`\`

### GET /api/tokens/TRZ/governance
**Response:**
\`\`\`json
{
  "token": "TRZ",
  "governance_type": "decentralized_autonomous_organization",
  "voting_mechanism": "proposal_based",
  "proposal_types": [
    "treasury_allocation",
    "parameter_adjustment",
    "protocol_upgrade",
    "launchpad_approval"
  ],
  "participation_model": "governance_coordination_tiers",
  "financial_returns": null,
  "risk_factors": [
    "Smart contract risk",
    "Governance decision risk",
    "Market adoption risk",
    "Regulatory risk"
  ],
  "no_financial_promise": true,
  "user_owns_token": true,
  "user_controls_voting": true
}
\`\`\`

### GET /api/tokens/TRZ/vesting
**Response:**
\`\`\`json
{
  "token": "TRZ",
  "vesting_type": "governance_allocation_vesting",
  "note": "beTRZ (escrowed TRZ) vests linearly over governance-determined schedules",
  "schedules": [
    {
      "name": "beTRZ 30-Day",
      "lock_period": "30 days",
      "vesting_period": "90 days",
      "vesting_type": "linear",
      "allocation_discretionary": true
    },
    {
      "name": "beTRZ 90-Day",
      "lock_period": "90 days",
      "vesting_period": "270 days",
      "vesting_type": "linear",
      "allocation_discretionary": true
    }
  ],
  "important_note": "All allocations are discretionary and determined by governance votes. No allocation is guaranteed. This is not a 'staking reward'—it is governance participation."
}
\`\`\`

---

## Wallet Token Registry Integration

### Required Metadata Fields
\`\`\`json
{
  "symbol": "TRZ",
  "name": "Treezures",
  "address": "0x...",
  "decimals": 18,
  "logo": "https://...",
  "description": "Governance and utility token",
  "type": "governance_token",
  "is_verified": true,
  "safety_rating": "medium",
  "market_cap_rank": null,
  "price_data_available": false,
  "price_chart_available": false,
  "investment_warning": true,
  "warning_text": "TRZ is a governance utility token, not an investment product. Do not expect financial returns.",
  "risks": [
    "No guaranteed value or returns",
    "Governance decisions may reduce utility",
    "Smart contract risks exist",
    "Regulatory classification may change"
  ]
}
\`\`\`

### Marketplace Metadata Template
\`\`\`json
{
  "token_id": "trz_governance",
  "collection": "governance_tokens",
  "tags": ["governance", "utility", "dao", "governance_token"],
  "avoid_tags": ["defi", "yield", "staking", "investment", "financial_instrument"],
  "featured_image_alt": "TRZ Governance Token Logo",
  "featured_description": "Community governance token for Treezures protocol operations",
  "extended_details": {
    "use_case": "Decentralized governance and protocol coordination",
    "not_use_case": "Financial investment or speculative asset",
    "regulatory_classification": "Utility token (non-security)",
    "asset_class": "none"
  }
}
\`\`\`

---

## Smart Contract Comment Standards

### Contract Header
\`\`\`solidity
/**
 * @title TRZ
 * @dev TRZ is a governance and utility token enabling participation in
 * Treezures DAO operations. It grants voting rights on treasury allocation
 * and protocol parameters. TRZ does NOT represent equity, ownership, or
 * financial rights. It is a governance utility token only.
 */
contract TRZ is ERC20Upgradeable, AccessControlUpgradeable {
\`\`\`

### Function Comments
\`\`\`solidity
/**
 * @dev Mint tokens via governance allocation. These are governance
 * participation allocations, NOT staking rewards or financial returns.
 * All minting subject to governance votes.
 */
function governanceAllocation(address account, uint256 amount) external onlyGovernance {
    // Implementation
}

/**
 * @dev Lock tokens for governance participation. This is NOT staking
 * for financial returns—it is participation in governance voting and
 * protocol coordination.
 */
function participateInGovernance(uint256 amount) external {
    // Implementation
}
\`\`\`

---

## Testing & Validation

### Metadata Validation Checklist
- [ ] "Investment" never appears in descriptions
- [ ] "Returns" never mentioned
- [ ] "Yield" not used
- [ ] "Staking rewards" not used
- [ ] "Financial" only in negative context
- [ ] "Governance" emphasized
- [ ] Disclaimers present on all responses
- [ ] No price appreciation claims
- [ ] No guaranteed allocation mentions

### Example Validation Test
\`\`\`bash
# Verify no unsafe language in API responses
grep -E "(investment|returns|yield|rewards)" /api/tokens/TRZ

# Should return: NO MATCHES (compliance success)
\`\`\`

---

## Version History
| Date | Version | Changes |
|------|---------|---------|
| 2026-02-08 | 1.0 | Initial governance-compliant API specification |
