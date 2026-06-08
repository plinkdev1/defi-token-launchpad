#!/usr/bin/env node

/**
 * Compliance Validation Script
 * Scans codebase for prohibited security-like terminology
 * Enforces governance-only language for TRZ token
 * 
 * Usage: npm run validate:compliance
 */

const fs = require('fs')
const path = require('path')
const glob = require('glob')

// Prohibited terms (security-like language)
const PROHIBITED_TERMS = [
  /\breturn(?:s)?\b/gi,
  /\byield(?:s|ing)?\b/gi,
  /\bfinancial\s+upside\b/gi,
  /\bstaking\s+reward(?:s)?\b/gi,
  /\bpayout(?:s)?\b/gi,
  /\bpassive\s+income\b/gi,
  /\binterest\b/gi,
  /\bprofit\s+sharing\b/gi,
  /\bappreciation\b/gi,
  /\bprice\s+target(?:s)?\b/gi,
  /\binvestment(?:s)?\b/gi,
  /\bdividend(?:s)?\b/gi,
  /\bfinancial\s+instrument\b/gi,
  /\byield\s+farming\b/gi,
  /\bAPY\b/gi,
  /\bAPR\b/gi,
]

// Approved governance terms (whitelist)
const APPROVED_TERMS = [
  'governance',
  'participation',
  'voting',
  'protocol',
  'coordination',
  'treasury',
  'allocation',
  'discretionary',
  'access',
  'utility',
  'token',
  'DAO',
  'non-custodial',
  'community-controlled',
]

// File patterns to scan
const SCAN_PATTERNS = [
  'app/**/*.tsx',
  'components/**/*.tsx',
  'docs/**/*.md',
  'lib/**/*.ts',
  'public/**/*.json',
  '*.md',
]

// Patterns to ignore
const IGNORE_PATTERNS = [
  'node_modules/**',
  '.next/**',
  'dist/**',
  '*.test.*',
  'coverage/**',
]

let violationCount = 0
let filesScanned = 0
const violations = []

console.log('\n🔍 Running Compliance Validation...\n')

function scanFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const lines = content.split('\n')
    let fileViolations = []

    lines.forEach((line, lineNum) => {
      PROHIBITED_TERMS.forEach((pattern) => {
        if (pattern.test(line)) {
          const term = line.match(pattern)?.[0] || 'unknown'
          fileViolations.push({
            file: filePath,
            line: lineNum + 1,
            term,
            content: line.trim(),
          })
        }
      })
    })

    if (fileViolations.length > 0) {
      violations.push(...fileViolations)
      violationCount += fileViolations.length
    }

    filesScanned++
  } catch (error) {
    console.error(`⚠️  Error reading ${filePath}: ${error.message}`)
  }
}

// Scan files
SCAN_PATTERNS.forEach((pattern) => {
  glob.sync(pattern, { ignore: IGNORE_PATTERNS }).forEach(scanFile)
})

// Report results
console.log(`✅ Scanned ${filesScanned} files\n`)

if (violationCount === 0) {
  console.log('✨ No compliance violations detected!')
  console.log('\n✓ All governance terminology is compliance-safe')
  console.log('✓ No security-like language detected')
  console.log('✓ Safe-harbor language enforced\n')
  process.exit(0)
} else {
  console.error(`❌ Found ${violationCount} compliance violation(s):\n`)

  // Group violations by term
  const grouped = {}
  violations.forEach((v) => {
    if (!grouped[v.term]) grouped[v.term] = []
    grouped[v.term].push(v)
  })

  Object.entries(grouped).forEach(([term, items]) => {
    console.error(`\n🚫 Prohibited Term: "${term}" (${items.length} occurrences)`)
    items.slice(0, 3).forEach((item) => {
      console.error(`   📍 ${item.file}:${item.line}`)
      console.error(`      ${item.content.substring(0, 80)}...`)
    })
    if (items.length > 3) {
      console.error(`   ... and ${items.length - 3} more`)
    }
  })

  console.error('\n❌ COMPLIANCE FAILED\n')
  console.error('Approved terms to use instead:')
  console.error(APPROVED_TERMS.join(', '))
  console.error('\nFor exceptions, update docs/COMPLIANCE_AUDIT_REPORT.md\n')

  process.exit(1)
}
