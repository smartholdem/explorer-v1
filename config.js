'use strict';

var config = require('./config.global');

// CONFIGURATION
// =======================================================================================

config.host = '0.0.0.0'; // Interface to listen on, 0.0.0.0 to listen on all available
config.port = 6042;      // Port to listen on

// SmartHoldem node
config.sth.host = '95.183.9.207';
config.sth.port = 6100;

// FreeGeoIP server
config.freegeoip.host = '127.0.0.1';
config.freegeoip.port = 8080;

// Redis server
config.redis.host     = '127.0.0.1';
config.redis.port     = 6379;
config.redis.password = '';

config.cacheTTL = 20; // Time in seconds to store cache in Redis

// Header price tickers, Currency switcher
config.exchangeRates.enabled = false;         // Exchange rates support (true - enabled, false - disabled)
config.exchangeRates.updateInterval = 60000; // Interval in ms for checking exchange rates (default: 30 seconds)
// Configuration for different currency pairs, set false to disable pair
config.exchangeRates.exchanges.STH.BTC = 'poloniex';  // STH/BTC pair, supported: poloniex
config.exchangeRates.exchanges.STH.CNY = 'jubi';      // STH/CNY pair, supported: jubi, bitbays
config.exchangeRates.exchanges.BTC.USD = 'bitfinex';  // STH/USD pair, supported: bitfinex, bitstamp, btce
config.exchangeRates.exchanges.BTC.EUR = 'bitstamp';  // STH/EUR pair, supported: bitstamp, bitmarket
config.exchangeRates.exchanges.BTC.PLN = 'bitmarket'; // STH/PLN pair, supported: bitmarket

// Market watcher
config.marketWatcher.enabled = false; // Market watcher support (true - enabled, false - disabled)
config.marketWatcher.exchanges.poloniex = false; // Poloniex exchange support (true - enabled, false - disabled)
config.marketWatcher.exchanges.bittrex  = false; // Bittrex exchange support (true - enabled, false - disabled)
config.marketWatcher.candles.updateInterval = 60000; // Interval in ms for updating candlestick data (default: 30 seconds)
config.marketWatcher.orders.updateInterval  = 45000;  // Interval in ms for updating order book data (default: 15 seconds)

// Delegate Proposals
config.proposals.enabled = false; // Delegate proposals support (true - enabled, false - disabled)
config.proposals.updateInterval = 600000; // Interval in ms for updating delegate proposals (default: 10 minutes)

// =======================================================================================

module.exports = config;
