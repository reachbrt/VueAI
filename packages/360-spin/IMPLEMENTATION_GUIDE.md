# 360-Spin Implementation Guide

## 🎯 Quick Understanding

### What Does This Component Do?

The 360-spin component makes a product image appear to **rotate on its vertical axis** (like a turntable) when the user hovers over or interacts with it.

**Key Concept**: It's NOT actually rotating a 3D model. Instead, it's rapidly displaying a sequence of 2D product photos taken from different angles, creating the illusion of rotation (like a flipbook animation).

---

## 📸 How It Works

### The Frame Sequence Approach

```
Static Display:
┌─────────────┐
│   Product   │  ← Shows front view (0°)
│   (Front)   │
└─────────────┘

Hover/Animated:
Frame 1 (0°)  → Frame 2 (10°) → Frame 3 (20°) → ... → Frame 36 (350°) → Loop
   Front          Slight         More                      Almost
   View          Rotation       Rotation                   Back to Front
```

### What You Need

**1. Static Image** (1 file):
- Front view of your product
- Example: `product-front.jpg`

**2. Frame Sequence** (12-72 files):
- Photos of product from different angles
- Example with 36 frames:
  - `product-0deg.jpg` (0° - front)
  - `product-10deg.jpg` (10° rotation)
  - `product-20deg.jpg` (20° rotation)
  - ... (30 more frames)
  - `product-350deg.jpg` (350° rotation)

### Animation Mechanism

```javascript
// Component cycles through frames at 30 FPS
currentFrame = 0;  // Start at frame 0 (front view)

// Every 33ms (30 times per second):
currentFrame = (currentFrame + 1) % 36;  // 0→1→2→...→35→0
displayImage(frames[currentFrame]);      // Show that frame
```

---

## 🛠️ Implementation for Angular/React

### Core Logic (Same for Both Frameworks)

**State Variables:**
```typescript
isAnimating: boolean = false;        // Is animation running?
currentFrameIndex: number = 0;       // Which frame to display (0-35)
isLoading: boolean = true;           // Are images still loading?
```

**Animation Function:**
```typescript
function startAnimation() {
  isAnimating = true;
  
  const frameDelay = 1000 / 30;  // 30 FPS = 33.33ms per frame
  
  function animate() {
    // Move to next frame
    currentFrameIndex = (currentFrameIndex + 1) % totalFrames;
    
    // Continue if still animating
    if (isAnimating) {
      requestAnimationFrame(animate);
    }
  }
  
  requestAnimationFrame(animate);
}
```

**Drag-to-Spin:**
```typescript
function handleDrag(dragDistance: number) {
  const sensitivity = 10;  // 10 pixels = 1 frame
  const frameDelta = Math.floor(dragDistance / sensitivity);
  
  currentFrameIndex = (startFrame + frameDelta) % totalFrames;
  // Drag 100px right → advance 10 frames
}
```

---

## 📋 Angular Implementation Checklist

- [ ] Create `Spin360Service` with RxJS BehaviorSubjects for state
- [ ] Create `Ng360SpinComponent` with template
- [ ] Implement `startAnimation()` using `requestAnimationFrame`
- [ ] Implement `handleDragMove()` for touch/mouse drag
- [ ] Add event emitters: `animationStart`, `animationEnd`, `frameChange`
- [ ] Copy CSS styles (framework-agnostic)
- [ ] Copy AI generator class (framework-agnostic)

---

## 📋 React Implementation Checklist

- [ ] Create `use360Spin` custom hook with useState/useRef
- [ ] Create `React360Spin` functional component
- [ ] Implement `startAnimation()` using `requestAnimationFrame`
- [ ] Implement `handleDragMove()` for touch/mouse drag
- [ ] Add callback props: `onAnimationStart`, `onAnimationEnd`, `onFrameChange`
- [ ] Copy CSS styles (framework-agnostic)
- [ ] Copy AI generator class (framework-agnostic)

---

## 🎨 Usage Example

### Vue (Current Implementation)
```vue
<Ai360Spin
  static-image="/shoe-front.jpg"
  :animated-image="shoeFrames"
  mode="frames"
  trigger="hover"
  :frame-rate="30"
/>
```

### Angular (Target)
```html
<ng360-spin
  staticImage="/shoe-front.jpg"
  [animatedImage]="shoeFrames"
  mode="frames"
  trigger="hover"
  [frameRate]="30"
></ng360-spin>
```

### React (Target)
```jsx
<React360Spin
  staticImage="/shoe-front.jpg"
  animatedImage={shoeFrames}
  mode="frames"
  trigger="hover"
  frameRate={30}
/>
```

---

## 🤖 AI Generation Feature

**Purpose**: Create 36 frames from a single product photo

**Process**:
1. User uploads 1 photo (e.g., shoe front view)
2. GPT-4 Vision analyzes: "White Nike running shoe with blue swoosh"
3. DALL-E 3 generates 36 images:
   - Image 1: shoe at 0° (front)
   - Image 2: shoe at 10° (slightly rotated)
   - ... (34 more images)
   - Image 36: shoe at 350°
4. Result: 36 frames ready for 360° viewer

---

## 📚 Full Documentation

See `ANGULAR_REACT_MIGRATION_GUIDE.md` for:
- Complete code examples
- TypeScript interfaces
- Angular service implementation
- React hook implementation
- AI generator class
- Testing strategies
- Deployment guide

---

**Key Takeaway**: The 360-spin component is essentially a **frame-by-frame image player** that creates the illusion of product rotation by cycling through photos taken from different angles.

