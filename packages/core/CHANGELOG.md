# Changelog

All notable changes to the @aivue/core package will be documented in this file.

## [1.3.14] - 2026-10-24

### Added
- Current model defaults: GPT-6.1 Sol, Claude Sonnet 5.5, Gemini 3.8 Flash, DeepSeek Flash, and Llama 3.2
- Live Claude, Gemini, DeepSeek, and Hugging Face calls. Claude and Gemini no longer return the offline fallback when a key is set.
- `defaultModel`, `listModels`, and `MODEL_CATALOG` for the rest of the suite

## [1.3.5] - 2025-01-14

### Added
- Bearer token authentication support for Ollama remote instances
- Authorization header support for secured Ollama deployments
- Enhanced Ollama provider with proper API key handling

### Fixed
- Ollama API calls now properly include Authorization headers when API key is provided
- Improved error handling for remote Ollama instances
- Better fallback behavior when authentication fails

## [1.3.4] - 2025-05-21

### Fixed
- Added proper Ollama API integration
- Fixed JSON parsing for Ollama's streaming response format
- Updated model defaults to work with latest Ollama models (llama3.2)
- Improved error handling for Ollama API calls

## [1.3.2] - 2025-05-15

### Added
- Support for Ollama local models
- Enhanced streaming capabilities
- Improved error handling

## [1.1.2] - 2023-07-25

### Fixed
- Improved package structure and exports
- Enhanced build configuration
- Fixed module resolution issues
- Added better compatibility with different build tools

## [1.1.1] - 2023-07-20

### Fixed
- Fixed the "This is a simulated streaming response from the AI" issue
- Implemented proper API calls to OpenAI and other providers
- Added fallback responses when no API key is provided
- Improved error handling for API calls

## [1.1.0] - 2023-07-15

### Added
- Vue 2 compatibility: The package now works with both Vue 2.6+ and Vue 3.x
- Comprehensive compatibility layer that automatically detects Vue version
- New utility functions for cross-version compatibility:
  - `createNode`: Create VNodes in both Vue 2 and Vue 3
  - `createCompatComponent`: Create components that work in both Vue 2 and Vue 3
  - `registerCompatComponent`: Register components globally in both Vue 2 and Vue 3
  - `createCompatPlugin`: Create plugins that work in both Vue 2 and Vue 3
  - `installCompatPlugin`: Install plugins in both Vue 2 and Vue 3
  - `createReactiveState`: Create reactive state in both Vue 2 and Vue 3
  - `createCompatRef`: Create refs that work in both Vue 2 and Vue 3

### Changed
- Updated peer dependencies to support both Vue 2 and Vue 3
- Improved documentation with examples for both Vue 2 and Vue 3
- Enhanced error handling for better cross-version compatibility

## [1.0.1] - 2023-06-30

### Added
- Initial release with support for Vue 3
- Basic AI client implementation
- Support for multiple AI providers
- Streaming response support
