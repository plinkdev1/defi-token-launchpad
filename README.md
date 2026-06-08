# Treezures Labs — A Development Lab & Token Launchpad with Staking and On-Chain Governance

A development-lab and launchpad platform with a native token (TRZ), multi-tier staking, optional embedded DeFi cover, and a governance model based on proof-of-humanity.

> **Status:** Concept / whitepaper-stage site. Public site and staking interface are modeled; on-chain contracts and governance are in design.

## Overview

Treezures Labs is the umbrella that incubates and launches protocols, with TRZ as its native token. Holders stake TRZ across flexible and locked tiers, can optionally insure their staked positions through integrated DeFi cover, and participate in a treasury that moves from multisig control toward a DAO.

The governance model ("Decentralized Autonomous Humanity") gates voting power behind proof-of-humanity rather than raw token weight, using zk identity proofs and a Snapshot-style quorum.

## Core Features

- **Launchpad** — incubates and launches protocols built under the lab.
- **Tiered staking** — flexible (unlocked), 30-day, and 180-day TRZ staking with rising rewards by lockup.
- **Embedded cover** — optional DeFi insurance over staked positions (Nexus Mutual / OpenCover), purchased inline in the staking flow.
- **Treasury governance** — multisig today, progressively decentralizing to a DAO.
- **Proof-of-humanity voting** — zk identity (Human Network, zkPass, Galxe) as the basis for one-human-one-vote.

## Architecture

| Layer | Technology |
|-------|------------|
| Frontend | Next.js, React, TypeScript, Tailwind CSS |
| Chain | EVM — staking and treasury |
| Governance | Snapshot-style quorum; zk identity proofs |
| Insurance | Nexus Mutual / OpenCover |

## Screenshots

<p align="center">
  <img src="screenshots/01.png" width="800" /><br/><br/>
  <img src="screenshots/02.png" width="800" /><br/><br/>
  <img src="screenshots/03.png" width="800" /><br/><br/>
  <img src="screenshots/04.png" width="800" /><br/><br/>
</p>

## Getting Started

```bash
npm install --legacy-peer-deps --ignore-scripts
npx next dev
```

## Roadmap

- Staking and treasury contracts
- DAO migration with proof-of-humanity voting
- Embedded-cover integration

## Notes

Shared as a portfolio artifact demonstrating product and system design. Concept-stage; not financial advice and not an offer of any token.

