# @aivue/360-spin - Angular & React Migration Guide

> Complete guide to recreating the 360-spin package for Angular and React frameworks

## 📋 Table of Contents

1. [Package Overview](#package-overview)
2. [Architecture & Design](#architecture--design)
3. [Core Features](#core-features)
4. [Angular Implementation](#angular-implementation)
5. [React Implementation](#react-implementation)
6. [AI Generation Logic](#ai-generation-logic)
7. [Styling Guide](#styling-guide)
8. [Testing & Deployment](#testing--deployment)

---

## 📦 Package Overview

### What is @aivue/360-spin?

An interactive 360-degree product image viewer that creates the illusion of a product rotating on its vertical axis. The component displays a static product image by default, and when triggered (hover/click), it animates through a sequence of product photos taken from different angles, creating a smooth 360° rotation effect.

**How It Works:**
1. **Static State**: Shows a single product image (e.g., front view at 0°)
2. **Animated State**: Rapidly cycles through 12-72 frames showing the product at different rotation angles
3. **Frame Sequence**: Each frame is a photo of the product rotated by a specific angle (e.g., 0°, 10°, 20°, 30°... 350°)
4. **Smooth Rotation**: Playing frames at 24-30 FPS creates the illusion of the product spinning on a turntable

**Real-World Example:**
```
Static: product-front.jpg (0° view)

Hover Animation (36 frames):
Frame 1:  product at 0°   (front)
Frame 2:  product at 10°  (slightly rotated)
Frame 3:  product at 20°
...
Frame 18: product at 170° (back view)
...
Frame 36: product at 350° (almost back to front)
→ Loop back to Frame 1 for continuous rotation
```

**Key Capabilities:**
- **360° Rotation Animation**: Product appears to spin on hover/click through frame sequences
- **Two Animation Modes**: GIF mode (single animated GIF) or Frames mode (image sequence)
- **Interactive Triggers**: Hover (start on mouse enter), Click (toggle), or Auto (auto-play)
- **Drag-to-Spin**: Touch/mouse drag to manually control rotation angle on mobile and desktop
- **AI Frame Generation**: Upload 1 product photo → AI generates 36 frames from all angles
- **E-commerce Ready**: Perfect for product cards, listings, and detail pages

### Package Structure

```
@aivue/360-spin/
├── src/
│   ├── components/
│   │   ├── Ai360Spin.vue          # Main viewer component
│   │   └── Ai360Generator.vue     # AI generation component
│   ├── composables/
│   │   └── use360Spin.ts          # Core logic (Vue composable)
│   ├── utils/
│   │   └── ai-generator.ts        # AI generation utility class
│   ├── types/
│   │   └── index.ts               # TypeScript interfaces
│   ├── styles/
│   │   └── 360-spin.css           # Global styles
│   └── index.ts                   # Package entry point
├── package.json
├── vite.config.ts
└── README.md
```

### Dependencies

**Production:**
- Vue 3.x (peer dependency)
- No external runtime dependencies

**Development:**
- TypeScript 5.x
- Vite 6.x
- @vitejs/plugin-vue

**API Requirements:**
- OpenAI API (for DALL-E 3 and GPT-4 Vision)
- Stability AI API (optional alternative)

---

## 🎯 How It Works - Detailed Explanation

### The Core Concept: Product Rotation Through Frame Sequences

The 360-spin component creates the illusion of a product rotating on a turntable by rapidly displaying a sequence of product photographs taken from different angles.

**Think of it like a flipbook animation:**
- Each page (frame) shows the product from a slightly different angle
- Flipping through pages quickly creates the illusion of rotation
- The product itself doesn't move - we're just showing different photos in sequence

### Visual Example

```
User's View:
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│  [Static State]              [Hover/Animated State]          │
│                                                               │
│   ┌─────────┐                ┌─────────┐                     │
│   │         │                │    ↻    │  ← Product appears  │
│   │  Shoe   │   Hover →      │  Shoe   │    to be spinning   │
│   │  Front  │                │ Rotating│                     │
│   │         │                │         │                     │
│   └─────────┘                └─────────┘                     │
│                                                               │
└─────────────────────────────────────────────────────────────┘

Behind the Scenes (Frame Sequence):
┌──────┬──────┬──────┬──────┬──────┬──────┬─────┬──────┐
│Frame1│Frame2│Frame3│Frame4│ ...  │Frame │ ... │Frame │
│ 0°   │ 10°  │ 20°  │ 30°  │      │ 180° │     │ 350° │
│Front │      │      │      │      │ Back │     │      │
└──────┴──────┴──────┴──────┴──────┴──────┴─────┴──────┘
   ↑                                                  ↑
   └──────────── Cycles through at 30 FPS ───────────┘
```

### Step-by-Step Process

**1. Preparation (Before Component Loads)**
```javascript
// You need to provide:
const staticImage = '/shoe-front.jpg';  // Single image for static display

const frameSequence = [
  '/shoe-0deg.jpg',    // Frame 0: Front view (0°)
  '/shoe-10deg.jpg',   // Frame 1: Rotated 10°
  '/shoe-20deg.jpg',   // Frame 2: Rotated 20°
  '/shoe-30deg.jpg',   // Frame 3: Rotated 30°
  // ... 32 more frames ...
  '/shoe-350deg.jpg'   // Frame 35: Rotated 350°
];
// Total: 36 frames covering 360° (10° per frame)
```

**2. Component Initialization**
```javascript
// Component state
currentFrameIndex = 0;           // Start at frame 0
isAnimating = false;             // Not animating yet
isLoading = true;                // Preloading images

// Preload all frames for smooth playback
await preloadImages(frameSequence);
isLoading = false;               // Ready to animate
```

**3. User Interaction - Hover Trigger**
```javascript
// User hovers over the image
onMouseEnter() {
  isAnimating = true;            // Start animation
  startFrameAnimation();         // Begin cycling through frames
}

// Animation loop (runs at 30 FPS)
function startFrameAnimation() {
  const frameDelay = 1000 / 30;  // 33.33ms per frame

  function animate() {
    // Move to next frame
    currentFrameIndex = (currentFrameIndex + 1) % 36;
    // 0 → 1 → 2 → 3 ... → 35 → 0 (loop)

    // Display the frame
    displayFrame(frameSequence[currentFrameIndex]);

    // Continue animation
    if (isAnimating) {
      setTimeout(animate, frameDelay);
    }
  }

  animate();
}

// User moves mouse away
onMouseLeave() {
  isAnimating = false;           // Stop animation
  currentFrameIndex = 0;         // Reset to first frame
}
```

**4. Drag-to-Spin Interaction**
```javascript
// User drags horizontally on the image
onDragMove(event) {
  const dragDistance = event.clientX - dragStartX;  // e.g., 100px
  const sensitivity = 10;                            // 10px per frame

  const frameDelta = Math.floor(dragDistance / sensitivity);
  // 100px / 10 = 10 frames

  currentFrameIndex = (startFrame + frameDelta) % 36;
  // If started at frame 5 and dragged 100px right:
  // (5 + 10) % 36 = 15 (now showing frame 15 - product rotated 150°)

  displayFrame(frameSequence[currentFrameIndex]);
}
```

### Real-World Usage Example

**E-commerce Product Card:**
```vue
<template>
  <div class="product-card">
    <!-- 360° Spin Component -->
    <Ai360Spin
      static-image="/products/nike-shoe-front.jpg"
      :animated-image="nikeShoeFrames"
      mode="frames"
      trigger="hover"
      :frame-rate="30"
      alt="Nike Running Shoe 360 view"
    />

    <div class="product-info">
      <h3>Nike Air Max</h3>
      <p class="price">$189.99</p>
    </div>
  </div>
</template>

<script>
// 36 frames of Nike shoe from different angles
const nikeShoeFrames = [
  'https://cdn.example.com/nike-shoe-0.jpg',   // 0° - front
  'https://cdn.example.com/nike-shoe-10.jpg',  // 10°
  'https://cdn.example.com/nike-shoe-20.jpg',  // 20°
  // ... 33 more frames ...
  'https://cdn.example.com/nike-shoe-350.jpg'  // 350°
];
</script>
```

**What the User Experiences:**
1. Sees static front view of Nike shoe
2. Hovers mouse over the shoe
3. Shoe appears to rotate smoothly on a turntable
4. Can drag to manually rotate to any angle
5. Mouse leaves → shoe returns to front view

---

## 🏗️ Architecture & Design

### Component Architecture

```
┌─────────────────────────────────────────┐
│         Ai360Spin Component             │
│  (Main 360° Viewer)                     │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │   use360Spin Composable           │ │
│  │   (Core Animation Logic)          │ │
│  │                                   │ │
│  │   - Frame management              │ │
│  │   - Animation control             │ │
│  │   - Drag/touch handling           │ │
│  │   - Image preloading              │ │
│  └───────────────────────────────────┘ │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│      Ai360Generator Component           │
│  (AI Frame Generation)                  │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │   AI360Generator Class            │ │
│  │   (AI API Integration)            │ │
│  │                                   │ │
│  │   - GPT-4 Vision analysis         │ │
│  │   - DALL-E 3 generation           │ │
│  │   - Progress tracking             │ │
│  │   - Frame management              │ │
│  └───────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### State Management

**Ai360Spin State:**
- `isAnimating`: boolean - Animation active state
- `isLoading`: boolean - Loading state
- `currentFrameIndex`: number - Current frame in sequence
- `isDragging`: boolean - Drag interaction state
- `preloadedImages`: HTMLImageElement[] - Cached images

**Ai360Generator State:**
- `uploadedImage`: string | null - Base64 uploaded image
- `isGenerating`: boolean - Generation in progress
- `generatedFrames`: string[] - Generated frame URLs
- `progress`: AI360GenerationProgress - Generation progress
- `error`: string | null - Error message

### Data Flow

```
User Upload Image
      ↓
GPT-4 Vision Analysis (Product Description)
      ↓
DALL-E 3 Generation Loop (36 frames at different angles)
      ↓
Progress Updates (Real-time)
      ↓
Generated Frames Array
      ↓
Ai360Spin Viewer (Interactive Display)
```

---

## 🎯 Core Features

### 1. 360° Viewer Features

**How the Rotation Works:**

The component creates a 360° rotation effect by displaying different product images in sequence, similar to a flipbook animation. Here's the detailed mechanism:

1. **Frame Sequence Preparation**:
   - You provide 12-72 product photos taken at evenly spaced angles around the product
   - Example with 36 frames: photos at 0°, 10°, 20°, 30°... 350° (360°/36 = 10° per frame)
   - Each photo shows the product from a different viewpoint as if on a rotating turntable

2. **Static Display**:
   - Component shows the first frame (0° - front view) as a static image
   - User sees a normal product photo

3. **Animation Trigger**:
   - **Hover**: When mouse enters the image area, animation starts
   - **Click**: User clicks to toggle animation on/off
   - **Auto**: Animation starts automatically when component loads

4. **Frame-by-Frame Animation**:
   - Component cycles through frames at configured FPS (default: 30 frames per second)
   - Frame index increments: 0 → 1 → 2 → 3 ... → 35 → 0 (loops back)
   - Each frame displays for ~33ms (at 30 FPS), creating smooth motion
   - Direction can be clockwise (0→35) or counterclockwise (35→0)

5. **Drag-to-Spin** (Manual Control):
   - User drags horizontally on the image
   - Drag distance is converted to frame index change
   - Example: Drag 100px right with sensitivity=10 → advance 10 frames
   - Allows user to manually rotate product to any angle

**Animation Modes:**
- **Frames Mode**: Cycles through array of image URLs (recommended for smooth control)
  - Example: `['frame-0.jpg', 'frame-1.jpg', ..., 'frame-35.jpg']`
  - Allows drag-to-spin and precise frame control
- **GIF Mode**: Displays a pre-made animated GIF on trigger
  - Example: `'product-360.gif'` (all frames baked into one GIF)
  - Simpler but less control over playback
- **Auto Mode**: Automatically detects mode based on input type

**Triggers:**
- **Hover**: Start animation on `mouseenter`, stop on `mouseleave`
- **Click**: Toggle animation on/off with each click
- **Auto**: Start animation immediately on component mount

**Interaction:**
- **Drag-to-Spin**: Touch/mouse drag horizontally to manually control rotation angle
  - Drag right → rotate clockwise
  - Drag left → rotate counterclockwise
  - Drag sensitivity: pixels of drag per frame change (default: 10px/frame)
- **Frame Rate Control**: Configurable FPS (default: 30 FPS for smooth animation)
- **Direction Control**: Clockwise (0→35) or counterclockwise (35→0)
- **Loop Control**: Continuous loop or single-pass animation

**Performance:**
- **Image Preloading**: Preload all frames before animation for smooth playback
- **RequestAnimationFrame**: Uses browser's animation API for optimal performance
- **Mobile Optimization**: Touch events and responsive design

### 2. AI Generation Features

The AI generation feature allows you to create a complete 360° view from a single product photo. Here's how it works:

**Step 1: Image Analysis (GPT-4 Vision)**
- User uploads a single product photo (e.g., front view of a shoe)
- GPT-4 Vision API analyzes the image and extracts:
  - Product type (e.g., "Nike running shoe")
  - Visual features (color: white/blue, material: mesh/rubber)
  - Design details (swoosh logo, lace pattern, sole design)
- Creates a detailed text description for consistent generation

**Step 2: Frame Generation (DALL-E 3)**
- System calculates angle step: 360° / frame_count
  - 36 frames → 10° per frame (0°, 10°, 20°... 350°)
  - 24 frames → 15° per frame
  - 12 frames → 30° per frame
- For each angle, DALL-E 3 generates a product photo:
  - Prompt: "Create a high-quality product photograph of: [description] at [angle]° rotation"
  - Example: "Nike running shoe, white/blue mesh, at 90° rotation (side view)"
- Maintains consistent lighting, scale, and product appearance across all angles

**Step 3: Result**
- Returns array of 12-72 base64-encoded images
- Each image shows the product from a different angle
- Can be used directly in the Ai360Spin component for interactive rotation

**Customization:**
- **Frame Count**: 12 (fast), 24 (balanced), 36 (smooth), or 72 (ultra-smooth)
- **Background**: white, black, transparent, or custom color
- **Image Quality**: standard or HD
- **Image Size**: 1024x1024 (square), 1024x1792 (portrait), or 1792x1024 (landscape)

**Progress Tracking:**
- Real-time progress updates during generation
- Shows current frame being generated (e.g., "Frame 15/36 at 140°")
- Percentage complete (0-100%)
- Status messages ("Analyzing product...", "Generating frames...", "Complete!")

**Example Workflow:**
```
1. User uploads: shoe-front.jpg
2. GPT-4 Vision analyzes → "White Nike running shoe with blue accents"
3. DALL-E 3 generates:
   - Frame 1: shoe at 0° (front)
   - Frame 2: shoe at 10° (slightly rotated)
   - Frame 3: shoe at 20°
   ...
   - Frame 36: shoe at 350°
4. Result: 36 images ready for 360° viewer
```

---

## 🅰️ Angular Implementation

### Project Setup

```bash
# Create Angular workspace
ng new angular360spin --routing=false --style=css
cd angular360spin

# Create library
ng generate library ng360-spin

# Install dependencies
npm install --save-dev @types/node
```

### Package Structure

```
projects/ng360-spin/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── ng360-spin/
│   │   │   │   ├── ng360-spin.component.ts
│   │   │   │   ├── ng360-spin.component.html
│   │   │   │   └── ng360-spin.component.css
│   │   │   └── ng360-generator/
│   │   │       ├── ng360-generator.component.ts
│   │   │       ├── ng360-generator.component.html
│   │   │       └── ng360-generator.component.css
│   │   ├── services/
│   │   │   ├── spin360.service.ts
│   │   │   └── ai-generator.service.ts
│   │   ├── models/
│   │   │   └── spin360.models.ts
│   │   └── ng360-spin.module.ts
│   └── public-api.ts
├── package.json
└── README.md
```

### TypeScript Interfaces (models/spin360.models.ts)

```typescript
export type SpinMode = 'gif' | 'frames' | 'auto';
export type SpinTrigger = 'hover' | 'click' | 'auto';
export type SpinDirection = 'clockwise' | 'counterclockwise';
export type AIProvider = 'openai' | 'stability';
export type BackgroundColor = 'white' | 'transparent' | 'black' | 'custom';

export interface Spin360Config {
  staticImage: string;
  animatedImage: string | string[];
  mode?: SpinMode;
  trigger?: SpinTrigger;
  width?: string | number;
  height?: string | number;
  alt?: string;
  frameRate?: number;
  loop?: boolean;
  reverseOnSecondHover?: boolean;
  direction?: SpinDirection;
  preload?: boolean;
  showLoading?: boolean;
  loadingText?: string;
  enableDragSpin?: boolean;
  dragSensitivity?: number;
}

export interface AI360GeneratorConfig {
  provider?: AIProvider;
  apiKey: string;
  frameCount?: number;
  backgroundColor?: BackgroundColor;
  customBackgroundColor?: string;
  quality?: number;
  imageSize?: '1024x1024' | '1024x1792' | '1792x1024';
  model?: string;
  useVisionAnalysis?: boolean;
  promptTemplate?: string;
}

export interface AI360GenerationProgress {
  currentFrame: number;
  totalFrames: number;
  percentage: number;
  status: string;
  generatedFrames: string[];
}

export interface AI360GenerationResult {
  frames: string[];
  productDescription?: string;
  metadata: {
    provider: AIProvider;
    frameCount: number;
    generationTime: number;
    model: string;
  };
}
```

### Angular Service (services/spin360.service.ts)

```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Spin360Config, SpinMode } from '../models/spin360.models';

@Injectable({
  providedIn: 'root'
})
export class Spin360Service {
  private isAnimatingSubject = new BehaviorSubject<boolean>(false);
  private isLoadingSubject = new BehaviorSubject<boolean>(true);
  private currentFrameIndexSubject = new BehaviorSubject<number>(0);

  isAnimating$ = this.isAnimatingSubject.asObservable();
  isLoading$ = this.isLoadingSubject.asObservable();
  currentFrameIndex$ = this.currentFrameIndexSubject.asObservable();

  private animationFrameId: number | null = null;
  private preloadedImages: HTMLImageElement[] = [];
  private isDragging = false;
  private dragStartX = 0;
  private dragStartFrame = 0;

  constructor() {}

  getCurrentMode(config: Spin360Config): SpinMode {
    if (config.mode && config.mode !== 'auto') {
      return config.mode;
    }
    return Array.isArray(config.animatedImage) ? 'frames' : 'gif';
  }

  async preloadImages(config: Spin360Config): Promise<void> {
    this.isLoadingSubject.next(true);

    try {
      const mode = this.getCurrentMode(config);

      if (mode === 'gif' && typeof config.animatedImage === 'string') {
        await this.loadImage(config.animatedImage);
      } else if (mode === 'frames' && Array.isArray(config.animatedImage)) {
        const loadPromises = config.animatedImage.map(url => this.loadImage(url));
        this.preloadedImages = await Promise.all(loadPromises);
      }

      await this.loadImage(config.staticImage);
      this.isLoadingSubject.next(false);
    } catch (error) {
      console.error('Preload error:', error);
      this.isLoadingSubject.next(false);
      throw error;
    }
  }

  private loadImage(url: string, timeout = 5000): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const timeoutId = setTimeout(() => {
        reject(new Error(`Image load timeout: ${url}`));
      }, timeout);

      img.onload = () => {
        clearTimeout(timeoutId);
        resolve(img);
      };

      img.onerror = () => {
        clearTimeout(timeoutId);
        reject(new Error(`Failed to load image: ${url}`));
      };

      img.src = url;
    });
  }

  startAnimation(config: Spin360Config): void {
    if (this.isAnimatingSubject.value || this.isLoadingSubject.value) return;

    this.isAnimatingSubject.next(true);

    const mode = this.getCurrentMode(config);
    if (mode === 'frames') {
      this.startFrameAnimation(config);
    }
  }

  stopAnimation(): void {
    if (!this.isAnimatingSubject.value) return;

    this.isAnimatingSubject.next(false);

    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    this.currentFrameIndexSubject.next(0);
  }

  private startFrameAnimation(config: Spin360Config): void {
    if (!Array.isArray(config.animatedImage)) return;

    const totalFrames = config.animatedImage.length;
    if (totalFrames === 0) return;

    const frameDelay = 1000 / (config.frameRate || 30);
    let lastFrameTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - lastFrameTime;

      if (elapsed >= frameDelay) {
        const currentFrame = this.currentFrameIndexSubject.value;

        if (config.direction === 'clockwise') {
          this.currentFrameIndexSubject.next((currentFrame + 1) % totalFrames);
        } else {
          this.currentFrameIndexSubject.next(
            currentFrame === 0 ? totalFrames - 1 : currentFrame - 1
          );
        }

        lastFrameTime = now;

        if (!config.loop && this.currentFrameIndexSubject.value === 0) {
          this.stopAnimation();
          return;
        }
      }

      if (this.isAnimatingSubject.value) {
        this.animationFrameId = requestAnimationFrame(animate);
      }
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  handleDragStart(event: TouchEvent | MouseEvent, config: Spin360Config): void {
    const mode = this.getCurrentMode(config);
    if (mode !== 'frames' || !Array.isArray(config.animatedImage)) return;

    this.isDragging = true;
    this.dragStartFrame = this.currentFrameIndexSubject.value;

    if (event instanceof TouchEvent) {
      this.dragStartX = event.touches[0].clientX;
    } else {
      this.dragStartX = event.clientX;
    }

    if (this.isAnimatingSubject.value) {
      this.stopAnimation();
    }
  }

  handleDragMove(event: TouchEvent | MouseEvent, config: Spin360Config): void {
    if (!this.isDragging) return;

    event.preventDefault();

    let currentX: number;
    if (event instanceof TouchEvent) {
      currentX = event.touches[0].clientX;
    } else {
      currentX = event.clientX;
    }

    const deltaX = currentX - this.dragStartX;
    const sensitivity = config.dragSensitivity || 10;
    const frameDelta = Math.floor(deltaX / sensitivity);

    if (!Array.isArray(config.animatedImage)) return;
    const totalFrames = config.animatedImage.length;

    let newFrame = this.dragStartFrame + frameDelta;

    while (newFrame < 0) newFrame += totalFrames;
    while (newFrame >= totalFrames) newFrame -= totalFrames;

    if (newFrame !== this.currentFrameIndexSubject.value) {
      this.currentFrameIndexSubject.next(newFrame);
    }
  }

  handleDragEnd(): void {
    this.isDragging = false;
  }

  cleanup(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
```

### Angular Component (components/ng360-spin/ng360-spin.component.ts)

```typescript
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Spin360Service } from '../../services/spin360.service';
import { Spin360Config } from '../../models/spin360.models';

@Component({
  selector: 'ng360-spin',
  templateUrl: './ng360-spin.component.html',
  styleUrls: ['./ng360-spin.component.css']
})
export class Ng360SpinComponent implements OnInit, OnDestroy {
  @Input() staticImage!: string;
  @Input() animatedImage!: string | string[];
  @Input() mode: 'gif' | 'frames' | 'auto' = 'auto';
  @Input() trigger: 'hover' | 'click' | 'auto' = 'hover';
  @Input() width: string | number = '100%';
  @Input() height: string | number = 'auto';
  @Input() alt: string = 'Product 360 view';
  @Input() frameRate: number = 30;
  @Input() loop: boolean = true;
  @Input() direction: 'clockwise' | 'counterclockwise' = 'clockwise';
  @Input() preload: boolean = true;
  @Input() showLoading: boolean = true;
  @Input() loadingText: string = 'Loading...';
  @Input() enableDragSpin: boolean = true;
  @Input() dragSensitivity: number = 10;
  @Input() containerClass: string = '';
  @Input() imageClass: string = '';

  @Output() animationStart = new EventEmitter<void>();
  @Output() animationEnd = new EventEmitter<void>();
  @Output() loaded = new EventEmitter<void>();
  @Output() error = new EventEmitter<Error>();
  @Output() frameChange = new EventEmitter<number>();

  isAnimating = false;
  isLoading = true;
  currentFrameIndex = 0;
  currentMode: 'gif' | 'frames' = 'gif';
  animatedImageUrl = '';
  currentFrameUrl = '';

  constructor(private spin360Service: Spin360Service) {}

  ngOnInit(): void {
    const config = this.getConfig();
    this.currentMode = this.spin360Service.getCurrentMode(config);

    // Subscribe to service observables
    this.spin360Service.isAnimating$.subscribe(value => {
      this.isAnimating = value;
      if (value) {
        this.animationStart.emit();
      } else {
        this.animationEnd.emit();
      }
    });

    this.spin360Service.isLoading$.subscribe(value => {
      this.isLoading = value;
    });

    this.spin360Service.currentFrameIndex$.subscribe(value => {
      this.currentFrameIndex = value;
      this.updateCurrentFrameUrl();
      this.frameChange.emit(value);
    });

    // Set animated image URL for GIF mode
    if (this.currentMode === 'gif' && typeof this.animatedImage === 'string') {
      this.animatedImageUrl = this.animatedImage;
    }

    // Preload images
    if (this.preload) {
      this.spin360Service.preloadImages(config)
        .then(() => this.loaded.emit())
        .catch(err => this.error.emit(err));
    } else {
      this.isLoading = false;
    }

    // Auto-start if trigger is auto
    if (this.trigger === 'auto') {
      this.startAnimation();
    }
  }

  ngOnDestroy(): void {
    this.spin360Service.cleanup();
  }

  private getConfig(): Spin360Config {
    return {
      staticImage: this.staticImage,
      animatedImage: this.animatedImage,
      mode: this.mode,
      trigger: this.trigger,
      width: this.width,
      height: this.height,
      alt: this.alt,
      frameRate: this.frameRate,
      loop: this.loop,
      direction: this.direction,
      preload: this.preload,
      showLoading: this.showLoading,
      loadingText: this.loadingText,
      enableDragSpin: this.enableDragSpin,
      dragSensitivity: this.dragSensitivity
    };
  }

  private updateCurrentFrameUrl(): void {
    if (this.currentMode === 'frames' && Array.isArray(this.animatedImage)) {
      const index = this.currentFrameIndex % this.animatedImage.length;
      this.currentFrameUrl = this.animatedImage[index];
    }
  }

  get containerStyle(): any {
    return {
      width: typeof this.width === 'number' ? `${this.width}px` : this.width,
      height: typeof this.height === 'number' ? `${this.height}px` : this.height
    };
  }

  get showHint(): boolean {
    return this.trigger === 'hover' && !this.isAnimating;
  }

  handleMouseEnter(): void {
    if (this.trigger === 'hover') {
      this.startAnimation();
    }
  }

  handleMouseLeave(): void {
    if (this.trigger === 'hover') {
      this.stopAnimation();
    }
  }

  handleClick(): void {
    if (this.trigger === 'click') {
      if (this.isAnimating) {
        this.stopAnimation();
      } else {
        this.startAnimation();
      }
    }
  }

  handleTouchStart(event: TouchEvent): void {
    if (this.enableDragSpin && this.currentMode === 'frames') {
      this.spin360Service.handleDragStart(event, this.getConfig());
    } else if (this.trigger === 'click') {
      this.handleClick();
    }
  }

  handleTouchMove(event: TouchEvent): void {
    if (this.enableDragSpin && this.currentMode === 'frames') {
      this.spin360Service.handleDragMove(event, this.getConfig());
    }
  }

  handleTouchEnd(): void {
    if (this.enableDragSpin && this.currentMode === 'frames') {
      this.spin360Service.handleDragEnd();
    }
  }

  startAnimation(): void {
    this.spin360Service.startAnimation(this.getConfig());
  }

  stopAnimation(): void {
    this.spin360Service.stopAnimation();
  }
}
```

### Angular Template (components/ng360-spin/ng360-spin.component.html)

```html
<div
  [class]="'ai-360-spin ' + containerClass"
  [class.ai-360-spin--animating]="isAnimating"
  [class.ai-360-spin--loading]="isLoading"
  [ngStyle]="containerStyle"
  (mouseenter)="handleMouseEnter()"
  (mouseleave)="handleMouseLeave()"
  (click)="handleClick()"
  (touchstart)="handleTouchStart($event)"
  (touchmove)="handleTouchMove($event)"
  (touchend)="handleTouchEnd()"
>
  <!-- Loading State -->
  <div *ngIf="isLoading && showLoading" class="ai-360-spin__loading">
    <div class="ai-360-spin__spinner"></div>
    <p class="ai-360-spin__loading-text">{{ loadingText }}</p>
  </div>

  <!-- Static Image -->
  <img
    *ngIf="!isAnimating && !isLoading"
    [src]="staticImage"
    [alt]="alt"
    [class]="'ai-360-spin__image ai-360-spin__image--static ' + imageClass"
  />

  <!-- Animated Image (GIF mode) -->
  <img
    *ngIf="currentMode === 'gif' && !isLoading && isAnimating"
    [src]="animatedImageUrl"
    [alt]="alt"
    [class]="'ai-360-spin__image ai-360-spin__image--animated ' + imageClass"
  />

  <!-- Frame Sequence Mode -->
  <img
    *ngIf="currentMode === 'frames' && !isLoading && isAnimating"
    [src]="currentFrameUrl"
    [alt]="alt"
    [class]="'ai-360-spin__image ai-360-spin__image--frame ' + imageClass"
  />

  <!-- Hover Hint -->
  <div *ngIf="showHint" class="ai-360-spin__hint">
    <svg class="ai-360-spin__hint-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
    <span>Hover to spin</span>
  </div>
</div>
```

### Angular Module (ng360-spin.module.ts)

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng360SpinComponent } from './components/ng360-spin/ng360-spin.component';
import { Ng360GeneratorComponent } from './components/ng360-generator/ng360-generator.component';

@NgModule({
  declarations: [
    Ng360SpinComponent,
    Ng360GeneratorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Ng360SpinComponent,
    Ng360GeneratorComponent
  ]
})
export class Ng360SpinModule { }
```

### Package Configuration (package.json)

```json
{
  "name": "@ng360/spin",
  "version": "1.0.0",
  "description": "Interactive 360-degree product viewer for Angular with AI generation",
  "peerDependencies": {
    "@angular/common": "^17.0.0 || ^18.0.0",
    "@angular/core": "^17.0.0 || ^18.0.0"
  },
  "dependencies": {
    "tslib": "^2.3.0"
  },
  "keywords": [
    "angular",
    "360",
    "spin",
    "product",
    "viewer",
    "ai",
    "dall-e"
  ]
}
```

---

## ⚛️ React Implementation

### Project Setup

```bash
# Create React project with Vite
npm create vite@latest react360spin -- --template react-ts
cd react360spin

# Create package structure
mkdir -p packages/react360-spin/src/{components,hooks,utils,types,styles}

# Install dependencies
npm install
```

### Package Structure

```
packages/react360-spin/
├── src/
│   ├── components/
│   │   ├── React360Spin.tsx
│   │   └── React360Generator.tsx
│   ├── hooks/
│   │   └── use360Spin.ts
│   ├── utils/
│   │   └── ai-generator.ts
│   ├── types/
│   │   └── index.ts
│   ├── styles/
│   │   └── 360-spin.css
│   └── index.ts
├── package.json
├── vite.config.ts
└── README.md
```

### TypeScript Interfaces (types/index.ts)

```typescript
// Same as Angular - copy from above
export type SpinMode = 'gif' | 'frames' | 'auto';
export type SpinTrigger = 'hover' | 'click' | 'auto';
// ... (same interfaces as Angular)
```

### React Hook (hooks/use360Spin.ts)

```typescript
import { useState, useRef, useCallback, useEffect } from 'react';
import { Spin360Config, SpinMode } from '../types';

export function use360Spin(config: Spin360Config) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  const animationFrameIdRef = useRef<number | null>(null);
  const preloadedImagesRef = useRef<HTMLImageElement[]>([]);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartFrameRef = useRef(0);

  // Determine animation mode
  const currentMode: SpinMode = config.mode && config.mode !== 'auto'
    ? config.mode
    : Array.isArray(config.animatedImage) ? 'frames' : 'gif';

  // Get animated image URL (for GIF mode)
  const animatedImageUrl = currentMode === 'gif' && typeof config.animatedImage === 'string'
    ? config.animatedImage
    : '';

  // Get current frame URL (for frames mode)
  const currentFrameUrl = currentMode === 'frames' && Array.isArray(config.animatedImage)
    ? config.animatedImage[currentFrameIndex % config.animatedImage.length]
    : '';

  // Frame array
  const frameArray = Array.isArray(config.animatedImage) ? config.animatedImage : [];
  const totalFrames = frameArray.length;

  // Load a single image
  const loadImage = useCallback((url: string, timeout = 5000): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const timeoutId = setTimeout(() => {
        reject(new Error(`Image load timeout: ${url}`));
      }, timeout);

      img.onload = () => {
        clearTimeout(timeoutId);
        resolve(img);
      };

      img.onerror = () => {
        clearTimeout(timeoutId);
        reject(new Error(`Failed to load image: ${url}`));
      };

      img.src = url;
    });
  }, []);

  // Preload all images
  const preloadImages = useCallback(async () => {
    setIsLoading(true);

    try {
      if (currentMode === 'gif') {
        await loadImage(animatedImageUrl);
      } else if (currentMode === 'frames') {
        const loadPromises = frameArray.map(url => loadImage(url));
        preloadedImagesRef.current = await Promise.all(loadPromises);
      }

      await loadImage(config.staticImage);
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error('Preload error:', error);
      setIsLoading(false);
      throw error;
    }
  }, [currentMode, animatedImageUrl, frameArray, config.staticImage, loadImage]);

  // Start animation
  const startAnimation = useCallback(() => {
    if (isAnimating || isLoading) return;

    setIsAnimating(true);

    if (currentMode === 'frames' && totalFrames > 0) {
      const frameDelay = 1000 / (config.frameRate || 30);
      let lastFrameTime = Date.now();

      const animate = () => {
        const now = Date.now();
        const elapsed = now - lastFrameTime;

        if (elapsed >= frameDelay) {
          setCurrentFrameIndex(prev => {
            if (config.direction === 'clockwise') {
              return (prev + 1) % totalFrames;
            } else {
              return prev === 0 ? totalFrames - 1 : prev - 1;
            }
          });

          lastFrameTime = now;

          if (!config.loop && currentFrameIndex === 0) {
            stopAnimation();
            return;
          }
        }

        animationFrameIdRef.current = requestAnimationFrame(animate);
      };

      animationFrameIdRef.current = requestAnimationFrame(animate);
    }
  }, [isAnimating, isLoading, currentMode, totalFrames, config.frameRate, config.direction, config.loop, currentFrameIndex]);

  // Stop animation
  const stopAnimation = useCallback(() => {
    if (!isAnimating) return;

    setIsAnimating(false);

    if (animationFrameIdRef.current !== null) {
      cancelAnimationFrame(animationFrameIdRef.current);
      animationFrameIdRef.current = null;
    }

    setCurrentFrameIndex(0);
  }, [isAnimating]);

  // Handle drag start
  const handleDragStart = useCallback((event: TouchEvent | MouseEvent) => {
    if (currentMode !== 'frames' || totalFrames === 0) return;

    isDraggingRef.current = true;
    dragStartFrameRef.current = currentFrameIndex;

    if (event instanceof TouchEvent) {
      dragStartXRef.current = event.touches[0].clientX;
    } else {
      dragStartXRef.current = event.clientX;
    }

    if (isAnimating) {
      stopAnimation();
    }
  }, [currentMode, totalFrames, currentFrameIndex, isAnimating, stopAnimation]);

  // Handle drag move
  const handleDragMove = useCallback((event: TouchEvent | MouseEvent) => {
    if (!isDraggingRef.current || currentMode !== 'frames') return;

    event.preventDefault();

    let currentX: number;
    if (event instanceof TouchEvent) {
      currentX = event.touches[0].clientX;
    } else {
      currentX = event.clientX;
    }

    const deltaX = currentX - dragStartXRef.current;
    const sensitivity = config.dragSensitivity || 10;
    const frameDelta = Math.floor(deltaX / sensitivity);

    let newFrame = dragStartFrameRef.current + frameDelta;

    while (newFrame < 0) newFrame += totalFrames;
    while (newFrame >= totalFrames) newFrame -= totalFrames;

    if (newFrame !== currentFrameIndex) {
      setCurrentFrameIndex(newFrame);
    }
  }, [currentMode, config.dragSensitivity, totalFrames, currentFrameIndex]);

  // Handle drag end
  const handleDragEnd = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return {
    isAnimating,
    isLoading,
    currentFrameIndex,
    currentMode,
    animatedImageUrl,
    currentFrameUrl,
    totalFrames,
    startAnimation,
    stopAnimation,
    preloadImages,
    handleDragStart,
    handleDragMove,
    handleDragEnd
  };
}
```

### React Component (components/React360Spin.tsx)

```typescript
import React, { useEffect, CSSProperties } from 'react';
import { use360Spin } from '../hooks/use360Spin';
import { Spin360Config } from '../types';
import '../styles/360-spin.css';

export interface React360SpinProps extends Spin360Config {
  containerClass?: string;
  imageClass?: string;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  onLoaded?: () => void;
  onError?: (error: Error) => void;
  onFrameChange?: (frame: number) => void;
}

export const React360Spin: React.FC<React360SpinProps> = ({
  staticImage,
  animatedImage,
  mode = 'auto',
  trigger = 'hover',
  width = '100%',
  height = 'auto',
  alt = 'Product 360 view',
  frameRate = 30,
  loop = true,
  direction = 'clockwise',
  preload = true,
  showLoading = true,
  loadingText = 'Loading...',
  enableDragSpin = true,
  dragSensitivity = 10,
  containerClass = '',
  imageClass = '',
  onAnimationStart,
  onAnimationEnd,
  onLoaded,
  onError,
  onFrameChange
}) => {
  const config: Spin360Config = {
    staticImage,
    animatedImage,
    mode,
    trigger,
    width,
    height,
    alt,
    frameRate,
    loop,
    direction,
    preload,
    showLoading,
    loadingText,
    enableDragSpin,
    dragSensitivity
  };

  const {
    isAnimating,
    isLoading,
    currentFrameIndex,
    currentMode,
    animatedImageUrl,
    currentFrameUrl,
    startAnimation,
    stopAnimation,
    preloadImages,
    handleDragStart,
    handleDragMove,
    handleDragEnd
  } = use360Spin(config);

  // Preload images on mount
  useEffect(() => {
    if (preload) {
      preloadImages()
        .then(() => onLoaded?.())
        .catch(err => onError?.(err));
    }
  }, [preload, preloadImages, onLoaded, onError]);

  // Auto-start animation
  useEffect(() => {
    if (trigger === 'auto' && !isLoading) {
      startAnimation();
    }
  }, [trigger, isLoading, startAnimation]);

  // Emit animation events
  useEffect(() => {
    if (isAnimating) {
      onAnimationStart?.();
    } else {
      onAnimationEnd?.();
    }
  }, [isAnimating, onAnimationStart, onAnimationEnd]);

  // Emit frame change events
  useEffect(() => {
    onFrameChange?.(currentFrameIndex);
  }, [currentFrameIndex, onFrameChange]);

  const containerStyle: CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height
  };

  const showHint = trigger === 'hover' && !isAnimating;

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      startAnimation();
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      stopAnimation();
    }
  };

  const handleClick = () => {
    if (trigger === 'click') {
      if (isAnimating) {
        stopAnimation();
      } else {
        startAnimation();
      }
    }
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    if (enableDragSpin && currentMode === 'frames') {
      handleDragStart(event.nativeEvent);
    } else if (trigger === 'click') {
      handleClick();
    }
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (enableDragSpin && currentMode === 'frames') {
      handleDragMove(event.nativeEvent);
    }
  };

  const handleTouchEnd = () => {
    if (enableDragSpin && currentMode === 'frames') {
      handleDragEnd();
    }
  };

  return (
    <div
      className={`ai-360-spin ${containerClass} ${isAnimating ? 'ai-360-spin--animating' : ''} ${isLoading ? 'ai-360-spin--loading' : ''}`}
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Loading State */}
      {isLoading && showLoading && (
        <div className="ai-360-spin__loading">
          <div className="ai-360-spin__spinner"></div>
          <p className="ai-360-spin__loading-text">{loadingText}</p>
        </div>
      )}

      {/* Static Image */}
      {!isAnimating && !isLoading && (
        <img
          src={staticImage}
          alt={alt}
          className={`ai-360-spin__image ai-360-spin__image--static ${imageClass}`}
        />
      )}

      {/* Animated Image (GIF mode) */}
      {currentMode === 'gif' && !isLoading && isAnimating && (
        <img
          src={animatedImageUrl}
          alt={alt}
          className={`ai-360-spin__image ai-360-spin__image--animated ${imageClass}`}
        />
      )}

      {/* Frame Sequence Mode */}
      {currentMode === 'frames' && !isLoading && isAnimating && (
        <img
          src={currentFrameUrl}
          alt={alt}
          className={`ai-360-spin__image ai-360-spin__image--frame ${imageClass}`}
        />
      )}

      {/* Hover Hint */}
      {showHint && (
        <div className="ai-360-spin__hint">
          <svg className="ai-360-spin__hint-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
          <span>Hover to spin</span>
        </div>
      )}
    </div>
  );
};
```

### Package Configuration (package.json)

```json
{
  "name": "@react360/spin",
  "version": "1.0.0",
  "description": "Interactive 360-degree product viewer for React with AI generation",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "files": ["dist"],
  "scripts": {
    "build": "vite build",
    "dev": "vite build --watch"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "vite": "^6.0.0",
    "vite-plugin-dts": "^4.0.0"
  }
}
```

---

## 🤖 AI Generation Logic

### AI Generator Class (utils/ai-generator.ts)

This class is **framework-agnostic** and can be used in both Angular and React:

```typescript
import { AI360GeneratorConfig, AI360GenerationProgress, AI360GenerationResult } from '../types';

export class AI360Generator {
  private config: Required<AI360GeneratorConfig>;
  private onProgress?: (progress: AI360GenerationProgress) => void;

  constructor(
    config: AI360GeneratorConfig,
    onProgress?: (progress: AI360GenerationProgress) => void
  ) {
    this.config = {
      provider: config.provider || 'openai',
      apiKey: config.apiKey,
      frameCount: config.frameCount || 36,
      backgroundColor: config.backgroundColor || 'white',
      customBackgroundColor: config.customBackgroundColor || '#ffffff',
      quality: config.quality || 80,
      imageSize: config.imageSize || '1024x1024',
      model: config.model || (config.provider === 'openai' ? 'dall-e-3' : 'stable-diffusion-xl-1024-v1-0'),
      useVisionAnalysis: config.useVisionAnalysis !== false,
      promptTemplate: config.promptTemplate || ''
    };
    this.onProgress = onProgress;
  }

  async generate(imageFile: File | string): Promise<AI360GenerationResult> {
    const startTime = Date.now();
    const frames: string[] = [];

    try {
      // Step 1: Convert image to base64
      const imageBase64 = typeof imageFile === 'string'
        ? imageFile
        : await this.fileToBase64(imageFile);

      this.updateProgress(0, 'Analyzing product image...');

      // Step 2: Analyze product with GPT-4 Vision
      let productDescription = '';
      if (this.config.useVisionAnalysis && this.config.provider === 'openai') {
        productDescription = await this.analyzeProduct(imageBase64);
      } else {
        productDescription = 'Product image';
      }

      this.updateProgress(10, 'Product analyzed. Generating frames...');

      // Step 3: Generate frames at different angles
      const angleStep = 360 / this.config.frameCount;

      for (let i = 0; i < this.config.frameCount; i++) {
        const angle = Math.round(i * angleStep);
        const progress = 10 + Math.round((i / this.config.frameCount) * 85);

        this.updateProgress(
          progress,
          `Generating frame ${i + 1}/${this.config.frameCount} (${angle}°)...`,
          frames
        );

        const frameUrl = await this.generateFrame(productDescription, angle, i);
        frames.push(frameUrl);
      }

      this.updateProgress(100, 'Generation complete!', frames);

      return {
        frames,
        productDescription,
        metadata: {
          provider: this.config.provider,
          frameCount: this.config.frameCount,
          generationTime: Date.now() - startTime,
          model: this.config.model
        }
      };
    } catch (error) {
      console.error('AI 360 Generation error:', error);
      throw error;
    }
  }

  private async analyzeProduct(imageBase64: string): Promise<string> {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [{
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Analyze this product image and provide a detailed description including: product type, color, material, key features, and style. Be concise but specific.'
            },
            {
              type: 'image_url',
              image_url: { url: imageBase64 }
            }
          ]
        }],
        max_tokens: 300
      })
    });

    if (!response.ok) {
      throw new Error(`Vision API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'Product';
  }

  private async generateFrame(
    productDescription: string,
    angle: number,
    _frameIndex: number
  ): Promise<string> {
    if (this.config.provider === 'openai') {
      return this.generateFrameOpenAI(productDescription, angle);
    } else {
      return this.generateFrameStability(productDescription, angle);
    }
  }

  private async generateFrameOpenAI(
    productDescription: string,
    angle: number
  ): Promise<string> {
    const backgroundColor = this.getBackgroundColorValue();

    const prompt = this.config.promptTemplate ||
      `Create a high-quality product photograph of: ${productDescription}
View angle: ${angle} degrees rotation (0° is front view, rotating clockwise)
Background: ${backgroundColor}
Style: Professional product photography, studio lighting, high detail, sharp focus`;

    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.apiKey}`
      },
      body: JSON.stringify({
        model: this.config.model,
        prompt: prompt.substring(0, 4000),
        n: 1,
        size: this.config.imageSize,
        quality: 'hd',
        style: 'natural'
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    const imageUrl = data.data[0]?.url;

    if (!imageUrl) {
      throw new Error('No image URL returned from OpenAI');
    }

    return this.urlToBase64(imageUrl);
  }

  private async generateFrameStability(
    productDescription: string,
    angle: number
  ): Promise<string> {
    // Similar implementation for Stability AI
    // ... (see Vue implementation for full code)
    throw new Error('Stability AI not implemented in this example');
  }

  private getBackgroundColorValue(): string {
    switch (this.config.backgroundColor) {
      case 'white': return 'pure white';
      case 'transparent': return 'transparent/alpha channel';
      case 'black': return 'pure black';
      case 'custom': return this.config.customBackgroundColor;
      default: return 'white';
    }
  }

  private fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  private async urlToBase64(url: string): Promise<string> {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Error converting URL to base64:', error);
      return url;
    }
  }

  private updateProgress(
    percentage: number,
    status: string,
    generatedFrames: string[] = []
  ): void {
    if (this.onProgress) {
      this.onProgress({
        currentFrame: generatedFrames.length,
        totalFrames: this.config.frameCount,
        percentage,
        status,
        generatedFrames
      });
    }
  }
}
```

---

## 🎨 Styling Guide

### Global CSS (styles/360-spin.css)

This CSS file is **framework-agnostic** and works for Vue, Angular, and React:

```css
/* AI 360 Spin - Global Styles */

.ai-360-spin {
  position: relative;
  display: inline-block;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  background: #f5f5f5;
}

.ai-360-spin__image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  transition: opacity 0.3s ease;
}

.ai-360-spin__image--static {
  opacity: 1;
}

.ai-360-spin__image--animated,
.ai-360-spin__image--frame {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
}

.ai-360-spin--animating .ai-360-spin__image--static {
  opacity: 0;
}

.ai-360-spin__loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  z-index: 10;
}

.ai-360-spin__spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: ai-360-spin-rotate 1s linear infinite;
}

@keyframes ai-360-spin-rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.ai-360-spin__loading-text {
  margin-top: 12px;
  font-size: 14px;
  color: #666;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.ai-360-spin__hint {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 20px;
  font-size: 12px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 5;
}

.ai-360-spin:hover .ai-360-spin__hint {
  opacity: 1;
}

.ai-360-spin__hint-icon {
  width: 16px;
  height: 16px;
  stroke-width: 2;
}

/* Pre-built utility classes */
.ai-360-spin--card {
  width: 100%;
  aspect-ratio: 1 / 1;
}

.ai-360-spin--carousel {
  width: 100%;
  height: 100%;
}

.ai-360-spin--grid {
  width: 100%;
  aspect-ratio: 4 / 3;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .ai-360-spin {
    touch-action: none;
  }

  .ai-360-spin__hint {
    font-size: 11px;
    padding: 6px 12px;
  }

  .ai-360-spin__spinner {
    width: 32px;
    height: 32px;
    border-width: 3px;
  }
}

/* Accessibility */
.ai-360-spin:focus {
  outline: 2px solid #3498db;
  outline-offset: 2px;
}

.ai-360-spin:focus:not(:focus-visible) {
  outline: none;
}
```

### Framework-Specific Styling

**Angular:**
- Import CSS in `angular.json` styles array
- Or import in component: `styleUrls: ['./360-spin.css']`

**React:**
- Import CSS in component: `import './styles/360-spin.css'`
- Or use CSS modules for scoped styles

**Vue:**
- Import in component: `import './styles/360-spin.css'`
- Or use `<style src="./styles/360-spin.css"></style>`

---

## 🧪 Testing & Deployment

### Unit Testing

**Angular (Jasmine/Karma):**

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ng360SpinComponent } from './ng360-spin.component';

describe('Ng360SpinComponent', () => {
  let component: Ng360SpinComponent;
  let fixture: ComponentFixture<Ng360SpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng360SpinComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(Ng360SpinComponent);
    component = fixture.componentInstance;
    component.staticImage = '/test.jpg';
    component.animatedImage = '/test.gif';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start animation on hover when trigger is hover', () => {
    component.trigger = 'hover';
    component.handleMouseEnter();
    expect(component.isAnimating).toBe(true);
  });

  it('should stop animation on mouse leave', () => {
    component.trigger = 'hover';
    component.handleMouseEnter();
    component.handleMouseLeave();
    expect(component.isAnimating).toBe(false);
  });
});
```

**React (Jest/React Testing Library):**

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { React360Spin } from './React360Spin';

describe('React360Spin', () => {
  it('renders static image', () => {
    render(
      <React360Spin
        staticImage="/test.jpg"
        animatedImage="/test.gif"
        alt="Test product"
      />
    );

    const img = screen.getByAlt('Test product');
    expect(img).toBeInTheDocument();
  });

  it('starts animation on hover', () => {
    const onAnimationStart = jest.fn();
    const { container } = render(
      <React360Spin
        staticImage="/test.jpg"
        animatedImage="/test.gif"
        trigger="hover"
        onAnimationStart={onAnimationStart}
      />
    );

    const spinContainer = container.querySelector('.ai-360-spin');
    fireEvent.mouseEnter(spinContainer!);

    expect(onAnimationStart).toHaveBeenCalled();
  });
});
```

### Build Configuration

**Angular (ng-packagr):**

```json
{
  "$schema": "../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../dist/ng360-spin",
  "lib": {
    "entryFile": "src/public-api.ts"
  }
}
```

**React/Vue (Vite):**

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'React360Spin',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  plugins: [dts()]
});
```

### Publishing to NPM

```bash
# Build the package
npm run build

# Test locally
npm pack

# Publish to NPM
npm login
npm publish --access public

# For scoped packages
npm publish --access public --scope=@yourorg
```

### Environment Variables

Create `.env` file for API keys:

```bash
# .env
VITE_OPENAI_API_KEY=your_openai_key_here
VITE_STABILITY_API_KEY=your_stability_key_here
```

**Usage in code:**

```typescript
// Angular
const apiKey = environment.openaiApiKey;

// React/Vue
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
```

---

## 📚 Key Implementation Differences

### Vue vs Angular vs React

| Feature | Vue | Angular | React |
|---------|-----|---------|-------|
| **State Management** | `ref()`, `reactive()` | `BehaviorSubject`, RxJS | `useState()`, `useRef()` |
| **Lifecycle** | `onMounted()`, `onUnmounted()` | `ngOnInit()`, `ngOnDestroy()` | `useEffect()` |
| **Computed Values** | `computed()` | Observables with `pipe()` | `useMemo()`, `useCallback()` |
| **Event Handling** | `@click`, `@hover` | `(click)`, `(mouseenter)` | `onClick`, `onMouseEnter` |
| **Two-way Binding** | `v-model` | `[(ngModel)]` | Controlled components |
| **Conditional Rendering** | `v-if`, `v-show` | `*ngIf`, `[hidden]` | `{condition && <Component />}` |
| **List Rendering** | `v-for` | `*ngFor` | `.map()` |
| **Styling** | Scoped `<style>` | Component styles | CSS Modules / styled-components |

### Code Reusability

**Shared Code (100% reusable):**
- ✅ TypeScript interfaces (`types/index.ts`)
- ✅ AI Generator class (`utils/ai-generator.ts`)
- ✅ CSS styles (`styles/360-spin.css`)
- ✅ API integration logic

**Framework-Specific:**
- ❌ Components (Vue/Angular/React syntax)
- ❌ State management (composables/services/hooks)
- ❌ Lifecycle methods

---

## 🚀 Quick Start Checklist

### For Angular:

- [ ] Create Angular workspace and library
- [ ] Copy TypeScript interfaces
- [ ] Create Angular service (convert Vue composable)
- [ ] Create Angular component (convert Vue component)
- [ ] Copy AI generator class
- [ ] Copy and import CSS
- [ ] Create module and export components
- [ ] Build and test
- [ ] Publish to NPM

### For React:

- [ ] Create React project with Vite
- [ ] Copy TypeScript interfaces
- [ ] Create React hook (convert Vue composable)
- [ ] Create React component (convert Vue component)
- [ ] Copy AI generator class
- [ ] Copy and import CSS
- [ ] Configure Vite build
- [ ] Build and test
- [ ] Publish to NPM

---

## 💡 Best Practices

1. **Type Safety**: Use TypeScript for all code
2. **Error Handling**: Wrap API calls in try-catch blocks
3. **Loading States**: Always show loading indicators
4. **Accessibility**: Include ARIA labels and keyboard navigation
5. **Performance**: Preload images, use requestAnimationFrame
6. **Mobile**: Test touch events and drag interactions
7. **API Keys**: Never commit API keys, use environment variables
8. **Testing**: Write unit tests for core functionality
9. **Documentation**: Maintain comprehensive README files
10. **Versioning**: Follow semantic versioning (semver)

---

## 📖 Additional Resources

- **OpenAI API**: https://platform.openai.com/docs/api-reference
- **DALL-E 3 Guide**: https://platform.openai.com/docs/guides/images
- **GPT-4 Vision**: https://platform.openai.com/docs/guides/vision
- **Stability AI**: https://platform.stability.ai/docs
- **Angular Libraries**: https://angular.io/guide/creating-libraries
- **React Libraries**: https://vitejs.dev/guide/build.html#library-mode
- **TypeScript**: https://www.typescriptlang.org/docs/

---

## 🤝 Support

For questions or issues:
- GitHub: https://github.com/reachbrt/vueai
- NPM: https://www.npmjs.com/package/@aivue/360-spin
- Demo: https://aivue.netlify.app

---

**Created by**: [reachbrt](https://github.com/reachbrt)
**License**: MIT
**Version**: 2.0.0


