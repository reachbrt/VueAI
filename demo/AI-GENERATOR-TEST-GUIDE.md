# AI 360° Generator Testing Guide

## 🎯 Purpose
This guide helps you test the AI 360° generation feature to ensure it correctly generates frames from uploaded images.

---

## 📋 Test Methods

### Method 1: Automated Test Page (Recommended)
**URL**: http://localhost:8080/test-ai-generator.html

This standalone test page directly tests the AI generation API without Vue components.

#### Steps:
1. **Open the test page** in your browser
2. **Enter your OpenAI API key** (it will be saved in localStorage)
3. **Upload a product image** (JPG, PNG, etc.)
4. **Select frame count** (start with 4 for quick testing)
5. **Choose background color** (white, transparent, or black)
6. **Click "Start Generation"**
7. **Watch the progress** as AI generates each frame
8. **Verify results** - you should see all generated frames in a grid

#### Expected Results:
- ✅ Progress bar shows 0-100%
- ✅ Status updates for each frame
- ✅ All frames are generated and displayed
- ✅ Frames show the product from different angles
- ✅ No errors in console

---

### Method 2: Demo Application Test
**URL**: http://localhost:8080

Test the AI generator within the full demo application.

#### Steps:
1. **Navigate to "360° Spin" tab**
2. **Scroll to "🤖 AI 360° Generator" section**
3. **Enter OpenAI API key** (if not already saved)
4. **Upload a product image** via drag-and-drop or file picker
5. **Configure options**:
   - Frame count: 12, 24, or 36
   - Background: white, transparent, or black
6. **Click "Generate 360° View"**
7. **Monitor progress** in real-time
8. **View interactive 360° result** with the Ai360Spin component
9. **Test download** functionality

#### Expected Results:
- ✅ Upload area accepts drag-and-drop
- ✅ Image preview shows uploaded file
- ✅ Generation progress updates in real-time
- ✅ Generated frames display in interactive 360° viewer
- ✅ Can drag to spin the generated 360° view
- ✅ Download button exports all frames
- ✅ "Use These Frames" button works

---

## 🧪 Test Cases

### Test Case 1: Quick Generation (4 frames)
**Purpose**: Verify basic functionality quickly

- Frame count: 4
- Expected time: ~2-3 minutes
- Expected result: 4 frames at 0°, 90°, 180°, 270°

### Test Case 2: Standard Generation (12 frames)
**Purpose**: Test typical use case

- Frame count: 12
- Expected time: ~6-8 minutes
- Expected result: 12 frames at 30° intervals

### Test Case 3: High Quality (36 frames)
**Purpose**: Test full 360° generation

- Frame count: 36
- Expected time: ~20-25 minutes
- Expected result: 36 frames at 10° intervals

### Test Case 4: Different Backgrounds
**Purpose**: Verify background options work

- Test with: white, transparent, black
- Expected result: Frames have correct background color

### Test Case 5: Error Handling
**Purpose**: Verify error handling

- Test without API key → Should show error
- Test without image → Should show error
- Test with invalid API key → Should show API error

---

## 🔍 What to Verify

### 1. Image Upload
- [ ] File picker works
- [ ] Drag-and-drop works
- [ ] Image preview displays correctly
- [ ] Can clear/change uploaded image

### 2. API Key Management
- [ ] API key input accepts text
- [ ] API key is saved to localStorage
- [ ] Saved API key persists on page reload
- [ ] API key is used in API calls

### 3. Generation Process
- [ ] GPT-4 Vision analyzes the product
- [ ] Product description is generated
- [ ] DALL-E 3 generates each frame
- [ ] Progress updates for each frame
- [ ] Percentage increases correctly (0% → 100%)

### 4. Generated Frames
- [ ] All requested frames are generated
- [ ] Frames show product from different angles
- [ ] Product features remain consistent
- [ ] Background color matches selection
- [ ] Image quality is good (1024x1024)

### 5. Results Display
- [ ] Frames display in grid/viewer
- [ ] Interactive 360° viewer works
- [ ] Can drag to spin
- [ ] Download functionality works
- [ ] Frame count matches request

### 6. Error Handling
- [ ] Missing API key shows error
- [ ] Missing image shows error
- [ ] API errors are caught and displayed
- [ ] Failed frames don't stop generation
- [ ] Error messages are clear

---

## 📊 Performance Benchmarks

| Frame Count | Expected Time | API Calls |
|-------------|---------------|-----------|
| 4 frames    | 2-3 minutes   | 5 (1 analysis + 4 images) |
| 12 frames   | 6-8 minutes   | 13 (1 analysis + 12 images) |
| 24 frames   | 12-15 minutes | 25 (1 analysis + 24 images) |
| 36 frames   | 20-25 minutes | 37 (1 analysis + 36 images) |

**Note**: DALL-E 3 has rate limits. If you hit rate limits, generation will slow down or fail.

---

## 🐛 Common Issues & Solutions

### Issue: "API error: 401 Unauthorized"
**Solution**: Check your OpenAI API key is correct and has credits

### Issue: "API error: 429 Too Many Requests"
**Solution**: You've hit rate limits. Wait a few minutes and try with fewer frames

### Issue: Frames look different from original
**Solution**: This is expected - AI generates new views based on description, not actual 3D rotation

### Issue: Generation is slow
**Solution**: Normal - DALL-E 3 takes ~30-60 seconds per frame

### Issue: Some frames fail
**Solution**: Check console for errors. Generation continues with remaining frames

---

## ✅ Success Criteria

The AI 360° generator is working correctly if:

1. ✅ **Upload works**: Can upload and preview images
2. ✅ **Analysis works**: GPT-4 Vision generates product description
3. ✅ **Generation works**: DALL-E 3 creates frames at different angles
4. ✅ **Progress works**: Real-time updates show generation status
5. ✅ **Results work**: Generated frames display correctly
6. ✅ **Viewer works**: Can interact with 360° view
7. ✅ **Download works**: Can export all frames
8. ✅ **Errors handled**: Clear error messages for issues

---

## 📝 Test Report Template

```
Test Date: ___________
Tester: ___________

Test Case: ___________
Frame Count: ___________
Background: ___________

Results:
- Upload: ✅ / ❌
- Analysis: ✅ / ❌
- Generation: ✅ / ❌
- Display: ✅ / ❌
- Errors: ___________

Notes:
___________
```

