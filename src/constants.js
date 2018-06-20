"use strict";
// Derived from waves-api
//
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// Object.defineProperty(exports, "__esModule", { value: true });
export const INITIAL_SESSION_TIMEOUT = 5*60*1000
export const MAINNET_BYTE = 'W'.charCodeAt(0);
export const TESTNET_BYTE = 'T'.charCodeAt(0);
export const INITIAL_NONCE = 0;
export const ADDRESS_VERSION = 1;
export const ALIAS_VERSION = 2;
export const ISSUE_TX = 3;
export const TRANSFER_TX = 4;
export const REISSUE_TX = 5;
export const BURN_TX = 6;
export const EXCHANGE_TX = 7;
export const LEASE_TX = 8;
export const CANCEL_LEASING_TX = 9;
export const CREATE_ALIAS_TX = 10;
export const MASS_TRANSFER_TX = 11;
export const MASS_TRANSFER_TX_VERSION = 1;
export const ISSUE_TX_NAME = 'issue';
export const TRANSFER_TX_NAME = 'transfer';
export const REISSUE_TX_NAME = 'reissue';
export const BURN_TX_NAME = 'burn';
export const EXCHANGE_TX_NAME = 'exchange';
export const LEASE_TX_NAME = 'lease';
export const CANCEL_LEASING_TX_NAME = 'cancelLeasing';
export const CREATE_ALIAS_TX_NAME = 'createAlias';
export const PRIVATE_KEY_LENGTH = 32;
export const PUBLIC_KEY_LENGTH = 32;
export const MINIMUM_FEE = 100000;
export const TRANSFER_ATTACHMENT_BYTE_LIMIT = 140;
export const DEFAULT_MIN_SEED_LENGTH = 25;
export const DEFAULT_ORDER_EXPIRATION_DAYS = 20;
export const DEFAULT_BASIC_CONFIG = {
    requestOffset: 0,
    requestLimit: 100,
    logLevel: 'warning',
    timeDiff: 0
};

export const ADDRESS_LENGTH = 35;