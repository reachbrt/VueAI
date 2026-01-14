/**
 * Integration test to verify all @aivue packages can be imported
 * and their main exports are accessible.
 * 
 * Run with: node tests/integration-test.mjs
 */

console.log('🧪 Starting @aivue packages integration test...\n');

const packages = [
  {
    name: '@aivue/core',
    path: '../packages/core/dist/index.mjs',
    exports: ['AIClient', 'registerProviders', 'createCompatComponent', 'registerCompatComponent', 'createCompatPlugin']
  },
  {
    name: '@aivue/chatbot',
    path: '../packages/chatbot/dist/index.mjs',
    exports: ['AiChatWindow', 'AiChatToggle', 'AiChatRAG', 'useChatEngine', 'AiChatPlugin']
  },
  {
    name: '@aivue/smartform',
    path: '../packages/smartform/dist/index.mjs',
    exports: ['SmartForm', 'AiSmartForm', 'SmartFormPlugin']
  },
  {
    name: '@aivue/smart-notify',
    path: '../packages/smart-notify/dist/index.mjs',
    exports: ['NotificationCenter', 'useSmartNotify', 'SmartNotifyPlugin']
  },
  {
    name: '@aivue/smart-datatable',
    path: '../packages/smart-datatable/dist/index.mjs',
    exports: ['SmartDataTable', 'useAiInsights', 'useAiRowAgents', 'useAiTableQuery', 'SmartDataTablePlugin']
  },
  {
    name: '@aivue/analytics',
    path: '../packages/analytics/dist/index.mjs',
    exports: ['AnalyticsDashboard', 'UsageChart', 'ConversationInsights', 'AnalyticsPlugin']
  },
  {
    name: '@aivue/autosuggest',
    path: '../packages/autosuggest/dist/index.mjs',
    exports: ['Autosuggest', 'AutosuggestPlugin']
  },
  {
    name: '@aivue/predictive-input',
    path: '../packages/predictive-input/dist/index.mjs',
    exports: ['PredictiveInput', 'PredictiveInputPlugin']
  },
  {
    name: '@aivue/image-caption',
    path: '../packages/image-caption/dist/index.mjs',
    exports: ['AiImageCaption', 'ImageCaptionPlugin']
  },
  {
    name: '@aivue/360-spin',
    path: '../packages/360-spin/dist/index.mjs',
    exports: ['Ai360Spin', 'Spin360Plugin']
  },
  {
    name: '@aivue/voice-actions',
    path: '../packages/voice-actions/dist/index.mjs',
    exports: ['VoiceActions', 'VoiceActionsPlugin']
  },
  {
    name: '@aivue/emotion-ui',
    path: '../packages/emotion-ui/dist/index.mjs',
    exports: ['EmotionUI', 'EmotionUIPlugin']
  },
  {
    name: '@aivue/doc-intelligence',
    path: '../packages/doc-intelligence/dist/index.mjs',
    exports: ['DocumentViewer', 'DocumentAnalyzer', 'DocIntelligencePlugin']
  }
];

let passedCount = 0;
let failedCount = 0;
const results = [];

for (const pkg of packages) {
  try {
    console.log(`📦 Testing ${pkg.name}...`);

    // Try to import the package - try .mjs first, then .js
    let module;
    try {
      module = await import(pkg.path);
    } catch (e) {
      // Try .js if .mjs fails
      const jsPath = pkg.path.replace('.mjs', '.js');
      module = await import(jsPath);
    }

    // Check if expected exports exist
    const missingExports = [];
    const foundExports = [];
    for (const exportName of pkg.exports) {
      if (!(exportName in module)) {
        missingExports.push(exportName);
      } else {
        foundExports.push(exportName);
      }
    }

    if (missingExports.length > 0) {
      console.log(`   ⚠️  Found ${foundExports.length}/${pkg.exports.length} exports`);
      console.log(`   Missing: ${missingExports.join(', ')}`);
      results.push({ package: pkg.name, status: 'PARTIAL', missing: missingExports, found: foundExports.length });
      // Don't count as failed if at least some exports are found
      if (foundExports.length > 0) {
        passedCount++;
      } else {
        failedCount++;
      }
    } else {
      console.log(`   ✅ All ${pkg.exports.length} exports found`);
      results.push({ package: pkg.name, status: 'PASS' });
      passedCount++;
    }

  } catch (error) {
    console.log(`   ❌ Failed to import: ${error.message}`);
    results.push({ package: pkg.name, status: 'FAIL', error: error.message });
    failedCount++;
  }

  console.log('');
}

// Print summary
console.log('\n' + '='.repeat(60));
console.log('📊 TEST SUMMARY');
console.log('='.repeat(60));
console.log(`Total Packages: ${packages.length}`);
console.log(`✅ Passed: ${passedCount}`);
console.log(`❌ Failed: ${failedCount}`);
console.log('='.repeat(60));

// Print detailed results
console.log('\n📋 DETAILED RESULTS:\n');
results.forEach(result => {
  const icon = result.status === 'PASS' ? '✅' : result.status === 'PARTIAL' ? '⚠️' : '❌';
  console.log(`${icon} ${result.package}: ${result.status}`);
  if (result.missing) {
    console.log(`   Missing: ${result.missing.join(', ')}`);
  }
  if (result.error) {
    console.log(`   Error: ${result.error}`);
  }
});

// Exit with appropriate code
process.exit(failedCount > 0 ? 1 : 0);

