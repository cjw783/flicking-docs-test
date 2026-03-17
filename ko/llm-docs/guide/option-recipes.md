# Common Option Recipes

Ready-to-use option combinations for common carousel use cases and how to avoid frequent mistakes.

---

## Recommended Patterns

Here are battle-tested configurations for common use cases:

### Infinite Loop Carousel

Perfect for continuous browsing experiences like product showcases or image galleries.

  
**JavaScript:**

```javascript
new Flicking("#carousel", {
  circular: true,
  circularFallback: "linear",
  align: "center",
  moveType: "snap"
});
```

  
  
**React:**

```jsx
<Flicking
  circular={true}
  circularFallback="linear"
  align="center"
  moveType="snap">
  {/* panels */}
</Flicking>
```

  
  
**Vue3:**

```vue
<Flicking :options="{
  circular: true,
  circularFallback: 'linear',
  align: 'center',
  moveType: 'snap'
}">
  <!-- panels -->
</Flicking>
```

  

**Why this works**:
- `circular`: Enables infinite loop
- `circularFallback: "linear"`: Smooth degradation if not enough panels
- `align: "center"`: Centers the active panel for better focus
- `moveType: "snap"`: Snaps to panels for clear navigation

**Use cases**: Product carousels, hero sliders, testimonials

---

### Bounded Gallery with Bounce

Great for photo galleries where users should know when they've reached the end.

  
**JavaScript:**

```javascript
new Flicking("#carousel", {
  bound: true,
  bounce: "20%",
  align: "prev",
  moveType: "snap"
});
```

  
  
**React:**

```jsx
<Flicking
  bound={true}
  bounce="20%"
  align="prev"
  moveType="snap">
  {/* panels */}
</Flicking>
```

  
  
**Vue3:**

```vue
<Flicking :options="{
  bound: true,
  bounce: '20%',
  align: 'prev',
  moveType: 'snap'
}">
  <!-- panels -->
</Flicking>
```

  

**Why this works**:
- `bound`: Stops at first/last panel
- `bounce: "20%"`: Provides visual feedback at boundaries
- `align: "prev"`: Left-aligns panels for better space utilization
- `moveType: "snap"`: Ensures panels snap to position

**Use cases**: Photo galleries, file browsers, article lists

---

### Free Scroll with Pagination

Perfect for content-heavy horizontal layouts like timelines or catalogs.

  
**JavaScript:**

```javascript
new Flicking("#carousel", {
  moveType: "freeScroll",
  bound: true,
  panelsPerView: -1,
  align: "prev"
});
```

  
  
**React:**

```jsx
<Flicking
  moveType="freeScroll"
  bound={true}
  panelsPerView={-1}
  align="prev">
  {/* panels */}
</Flicking>
```

  
  
**Vue3:**

```vue
<Flicking :options="{
  moveType: 'freeScroll',
  bound: true,
  panelsPerView: -1,
  align: 'prev'
}">
  <!-- panels -->
</Flicking>
```

  

**Why this works**:
- `moveType: "freeScroll"`: Smooth scrolling without snapping
- `bound`: Prevents over-scrolling
- `panelsPerView: -1`: Automatically calculates visible panels
- `align: "prev"`: Natural left-to-right flow

**Use cases**: Horizontal timelines, product catalogs, thumbnail strips

---

### Snap Scrolling with Count

Ideal for controlled navigation where you want to move specific numbers of panels.

  
**JavaScript:**

```javascript
new Flicking("#carousel", {
  moveType: { type: "snap", count: 2 },
  align: "prev",
  bound: true
});
```

  
  
**React:**

```jsx
<Flicking
  moveType={{ type: "snap", count: 2 }}
  align="prev"
  bound={true}>
  {/* panels */}
</Flicking>
```

  
  
**Vue3:**

```vue
<Flicking :options="{
  moveType: { type: 'snap', count: 2 },
  align: 'prev',
  bound: true
}">
  <!-- panels -->
</Flicking>
```

  

**Why this works**:
- `moveType: { type: "snap", count: 2 }`: Moves 2 panels at a time
- `align: "prev"`: Left-aligns for clear panel boundaries
- `bound: true`: Stops at edges

**Use cases**: Grid-style carousels, multi-item navigation, category browsers

---

### Adaptive Height Carousel

Best for content with varying heights like cards or testimonials.

  
**JavaScript:**

```javascript
new Flicking("#carousel", {
  adaptive: true,
  bound: true,
  align: "center",
  moveType: "snap"
});
```

  
  
**React:**

```jsx
<Flicking
  adaptive={true}
  bound={true}
  align="center"
  moveType="snap">
  {/* panels with different heights */}
</Flicking>
```

  
  
**Vue3:**

```vue
<Flicking :options="{
  adaptive: true,
  bound: true,
  align: 'center',
  moveType: 'snap'
}">
  <!-- panels with different heights -->
</Flicking>
```

  

**Why this works**:
- `adaptive: true`: Viewport height matches active panel
- `bound: true`: Clear start/end boundaries
- `align: "center"`: Centers varying-height content
- `moveType: "snap"`: Smooth transitions between heights

**Use cases**: Card carousels, testimonials, feature showcases

---

## Common Pitfalls

Avoid these frequent configuration mistakes:

### 1. Using circular + bound Together

```javascript
// ❌ Wrong - bound will be ignored
{ circular: true, bound: true }
```

**Problem**: These options are mutually exclusive. `circular` takes precedence.

**Solution**: Choose one based on your needs:
```javascript
{ circular: true }  // For infinite loop
{ bound: true }     // For bounded navigation
```

---

### 2. circularFallback Without circular

```javascript
// ❌ Wrong - circularFallback has no effect
{ circular: false, circularFallback: "bound" }
```

**Problem**: `circularFallback` only works when `circular` is enabled.

**Solution**:
```javascript
{ circular: true, circularFallback: "bound" }
```

---

### 3. Insufficient Panels for circular

```javascript
// ⚠️ Will fall back automatically
{ circular: true }
// Only 2 small panels, viewport is larger
```

**Problem**: `circular` requires total panel size ≥ viewport size.

**Solution**: Add more panels, increase panel sizes, or set explicit `circularFallback`:
```javascript
{ circular: true, circularFallback: "bound" }
```
