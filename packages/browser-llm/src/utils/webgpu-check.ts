import type { WebGPUInfo } from '../types';

/**
 * Check if WebGPU is supported in the current browser
 */
export async function checkWebGPUSupport(): Promise<WebGPUInfo> {
  if (typeof navigator === 'undefined' || !navigator.gpu) {
    return {
      supported: false,
    };
  }

  try {
    const adapter = await navigator.gpu.requestAdapter();
    
    if (!adapter) {
      return {
        supported: false,
      };
    }

    const features = Array.from(adapter.features);
    const limits: Record<string, number> = {};
    
    // Get some key limits
    const limitKeys = [
      'maxTextureDimension1D',
      'maxTextureDimension2D',
      'maxTextureDimension3D',
      'maxBindGroups',
      'maxDynamicUniformBuffersPerPipelineLayout',
      'maxDynamicStorageBuffersPerPipelineLayout',
      'maxSampledTexturesPerShaderStage',
      'maxStorageBuffersPerShaderStage',
      'maxStorageTexturePerShaderStage',
      'maxUniformBuffersPerShaderStage',
      'maxUniformBufferBindingSize',
      'maxStorageBufferBindingSize',
      'maxBufferSize',
      'maxComputeWorkgroupStorageSize',
      'maxComputeInvocationsPerWorkgroup',
      'maxComputeWorkgroupSizeX',
      'maxComputeWorkgroupSizeY',
      'maxComputeWorkgroupSizeZ',
    ];

    for (const key of limitKeys) {
      const value = (adapter.limits as any)[key];
      if (value !== undefined) {
        limits[key] = value;
      }
    }

    return {
      supported: true,
      adapter: adapter.name || 'Unknown',
      features,
      limits,
    };
  } catch (error) {
    console.error('WebGPU check failed:', error);
    return {
      supported: false,
    };
  }
}

/**
 * Get a user-friendly error message for WebGPU not being supported
 */
export function getWebGPUErrorMessage(): string {
  if (typeof navigator === 'undefined') {
    return 'WebGPU is not available in this environment.';
  }

  if (!navigator.gpu) {
    return 'WebGPU is not supported in your browser. Please use Chrome 113+, Edge 113+, or a WebGPU-enabled browser.';
  }

  return 'WebGPU is not available. Please check your browser settings and GPU drivers.';
}

/**
 * Estimate if the device has enough resources to run a model
 */
export function estimateDeviceCapability(webgpuInfo: WebGPUInfo): {
  canRunSmallModels: boolean;
  canRunMediumModels: boolean;
  canRunLargeModels: boolean;
  recommendedModelSize: 'small' | 'medium' | 'large' | 'none';
} {
  if (!webgpuInfo.supported) {
    return {
      canRunSmallModels: false,
      canRunMediumModels: false,
      canRunLargeModels: false,
      recommendedModelSize: 'none',
    };
  }

  // Estimate based on buffer size limits (rough heuristic)
  const maxBufferSize = webgpuInfo.limits?.maxBufferSize || 0;
  const maxStorageBufferBindingSize = webgpuInfo.limits?.maxStorageBufferBindingSize || 0;

  // These are rough estimates
  const canRunSmallModels = maxBufferSize >= 256 * 1024 * 1024; // 256MB
  const canRunMediumModels = maxBufferSize >= 1024 * 1024 * 1024; // 1GB
  const canRunLargeModels = maxBufferSize >= 4 * 1024 * 1024 * 1024; // 4GB

  let recommendedModelSize: 'small' | 'medium' | 'large' | 'none' = 'none';
  if (canRunLargeModels) {
    recommendedModelSize = 'large';
  } else if (canRunMediumModels) {
    recommendedModelSize = 'medium';
  } else if (canRunSmallModels) {
    recommendedModelSize = 'small';
  }

  return {
    canRunSmallModels,
    canRunMediumModels,
    canRunLargeModels,
    recommendedModelSize,
  };
}

