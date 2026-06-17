#!/usr/bin/env node

import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const [, , inputFile = '.pure-vibe-coding.json'] = process.argv;
const filePath = resolve(process.cwd(), inputFile);
const rootDir = dirname(filePath);
const errors = [];

function fail(message) {
  errors.push(message);
}

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function requireString(value, path) {
  if (typeof value !== 'string' || value.trim() === '') {
    fail(`${path} must be a non-empty string`);
  }
}

function requireBooleanTrue(value, path) {
  if (value !== true) {
    fail(`${path} must be true`);
  }
}

function isHttpsUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

if (!existsSync(filePath)) {
  console.error(`Missing attestation file: ${filePath}`);
  process.exit(1);
}

let attestation;

try {
  attestation = JSON.parse(readFileSync(filePath, 'utf8'));
} catch (error) {
  console.error(`Could not parse ${filePath}: ${error.message}`);
  process.exit(1);
}

if (!isObject(attestation)) {
  fail('root must be an object');
}

if (attestation.version !== 1) {
  fail('version must be 1');
}

if (!isObject(attestation.claim)) {
  fail('claim must be an object');
} else {
  requireString(attestation.claim.repository, 'claim.repository');
  requireString(attestation.claim.commit, 'claim.commit');
  requireString(attestation.claim.scope, 'claim.scope');

  if (
    'publication_status' in attestation.claim &&
    !['published', 'unpublished'].includes(attestation.claim.publication_status)
  ) {
    fail('claim.publication_status must be published or unpublished');
  }

  if (attestation.claim.repository === 'unpublished') {
    if (attestation.claim.publication_status !== 'unpublished') {
      fail('claim.publication_status must be unpublished when claim.repository is unpublished');
    }
  } else if (
    typeof attestation.claim.repository === 'string' &&
    !/^https:\/\/github\.com\/[^/]+\/[^/]+\/?$/.test(attestation.claim.repository)
  ) {
    fail('claim.repository must be a GitHub repository URL or unpublished');
  }
}

if (!isObject(attestation.attestation)) {
  fail('attestation must be an object');
} else {
  requireBooleanTrue(attestation.attestation.no_manual_coding, 'attestation.no_manual_coding');
  requireBooleanTrue(
    attestation.attestation.all_agent_conversations_public,
    'attestation.all_agent_conversations_public',
  );

  if (
    'redactions' in attestation.attestation &&
    !Array.isArray(attestation.attestation.redactions)
  ) {
    fail('attestation.redactions must be an array when present');
  }
}

if (!Array.isArray(attestation.agent_conversations) || attestation.agent_conversations.length === 0) {
  fail('agent_conversations must be a non-empty array');
} else {
  attestation.agent_conversations.forEach((conversation, index) => {
    const path = `agent_conversations[${index}]`;

    if (!isObject(conversation)) {
      fail(`${path} must be an object`);
      return;
    }

    requireString(conversation.title, `${path}.title`);

    const hasPath = typeof conversation.path === 'string' && conversation.path.trim() !== '';
    const hasUrl = typeof conversation.url === 'string' && conversation.url.trim() !== '';

    if (!hasPath && !hasUrl) {
      fail(`${path} must include path or url`);
    }

    if (hasPath) {
      const conversationPath = resolve(rootDir, conversation.path);
      if (!existsSync(conversationPath)) {
        fail(`${path}.path does not exist: ${conversation.path}`);
      }
    }

    if (hasUrl && !isHttpsUrl(conversation.url)) {
      fail(`${path}.url must be an http(s) URL`);
    }
  });
}

if (!Array.isArray(attestation.maintainers) || attestation.maintainers.length === 0) {
  fail('maintainers must be a non-empty array');
} else {
  attestation.maintainers.forEach((maintainer, index) => {
    if (!isObject(maintainer)) {
      fail(`maintainers[${index}] must be an object`);
      return;
    }

    requireString(maintainer.name, `maintainers[${index}].name`);
  });
}

if (errors.length > 0) {
  console.error('Pure Vibe Coding attestation failed:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

const scriptPath = fileURLToPath(import.meta.url);
const relativeScript = scriptPath.includes(process.cwd()) ? scriptPath.slice(process.cwd().length + 1) : scriptPath;

console.log('Pure Vibe Coding attestation passed');
console.log(`file: ${filePath}`);
console.log(`scope: ${attestation.claim.scope}`);
console.log(`conversations: ${attestation.agent_conversations.length}`);
console.log(`validator: ${relativeScript}`);
