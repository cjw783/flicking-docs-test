# Panel

> A slide data component that holds information of a single HTMLElement

## Constructor

```typescript
constructor(panelOptions: PanelOptions);
```

Creates a new Panel instance

### Parameters

**`panelOptions`** (`PanelOptions`) - Options for creating the panel

## Properties

### _align

**Type:** `PanelOptions["align"]`

### _alignPos

**Type:** `number`

### _elProvider

**Type:** `ElementProvider`

### _flicking

**Type:** `Flicking`

### _height

**Type:** `number`

### _index

**Type:** `number`

### _loading

**Type:** `boolean`

### _margin

**Type:** `PanelMarginInfo`

### _pos

**Type:** `number`

### _removed

**Type:** `boolean`

### _rendered

**Type:** `boolean`

### _size

**Type:** `number`

### _toggled

**Type:** `boolean`

### _toggleDirection

**Type:** `ValueOf<typeof DIRECTION>`

### _togglePosition

**Type:** `number`

### align

**Type:** `PanelOptions["align"]`

A value indicating where the [alignPosition](https://cjw783.github.io/flicking-docs-test/docs/api/Panel#alignposition) should be located at inside the panel element

### alignPosition

**Type:** `number`

Align position inside the panel where [Camera](https://cjw783.github.io/flicking-docs-test/docs/api/Camera)'s [alignPosition](https://cjw783.github.io/flicking-docs-test/docs/api/Camera#alignposition) inside viewport should be located at

*This property is read-only.*

### element

**Type:** `HTMLElement`

`HTMLElement` that panel's referencing

*This property is read-only.*

### height

**Type:** `number`

Height of the panel element

*This property is read-only.*

### index

**Type:** `number`

Index of the panel

*This property is read-only.*

### loading

**Type:** `boolean`

A value indicating whether the panel's image/video is not loaded and waiting for resize

*This property is read-only.*

### margin

**Type:** `PanelMarginInfo`

Cached CSS `margin` value of the panel element

*This property is read-only.*

### offset

**Type:** `number`

Actual position offset determined by `order`

*This property is read-only.*

### outsetProgress

**Type:** `number`

Progress of movement between points that panel is completely invisible outside of viewport(prev direction: -1, selected point: 0, next direction: 1)

*This property is read-only.*

### position

**Type:** `number`

Position of the panel, including [alignPosition](https://cjw783.github.io/flicking-docs-test/docs/api/Panel#alignposition)

*This property is read-only.*

### progress

**Type:** `number`

Progress of movement between previous or next panel relative to current panel

*This property is read-only.*

### range

**Type:** `PanelBoundingBoxRange`

Panel element's range of the bounding box

*This property is read-only.*

### removed

**Type:** `boolean`

A value indicating whether the panel's [remove](https://cjw783.github.io/flicking-docs-test/docs/api/Flicking#remove)d

*This property is read-only.*

### rendered

**Type:** `boolean`

A value indicating whether the panel's element is being rendered on the screen

*This property is read-only.*

### size

**Type:** `number`

Cached size of the panel element

**Remarks:** This is equal to [element](https://cjw783.github.io/flicking-docs-test/docs/api/Panel#element)'s `offsetWidth` if [horizontal](https://cjw783.github.io/flicking-docs-test/docs/api/Flicking#horizontal) is `true`, and `offsetHeight` else

*This property is read-only.*

### sizeIncludingMargin

**Type:** `number`

Panel's size including CSS `margin`

**Remarks:** This value includes [element](https://cjw783.github.io/flicking-docs-test/docs/api/Panel#element)'s margin left/right if [horizontal](https://cjw783.github.io/flicking-docs-test/docs/api/Flicking#horizontal) is `true`, and margin top/bottom else

*This property is read-only.*

### toggled

**Type:** `boolean`

A value indicating whether the panel's position is toggled by circular behavior

*This property is read-only.*

### toggleDirection

**Type:** `ValueOf<typeof DIRECTION>`

A direction where the panel's position is toggled

*This property is read-only.*

### visibleRatio

**Type:** `number`

Percentage of area where panel is visible in the viewport

*This property is read-only.*

## Methods

### contains

```typescript
contains(element: HTMLElement): boolean
```

Check whether the given [element](https://cjw783.github.io/flicking-docs-test/docs/api/Panel#element) is inside of this panel's element

**Parameters:**

- `element` (`HTMLElement`) - The HTMLElement to check

**Returns:** A Boolean value indicating the element is inside of this panel element

**Remarks:** This is useful for determining which panel contains a clicked element.

### destroy

```typescript
destroy(): void
```

Reset internal state and set [removed](https://cjw783.github.io/flicking-docs-test/docs/api/Panel#removed) to `true`

**Remarks:** After calling this method, the panel should no longer be used.

### focus

```typescript
focus(duration?: number): Promise<void>
```

Move [Camera](https://cjw783.github.io/flicking-docs-test/docs/api/Camera) to this panel

**Parameters:**

- `duration` (`number`) - Duration of the animation (unit: ms). Defaults to [duration](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#duration)

**Returns:** A Promise which will be resolved after reaching the panel

**Remarks:** This is equivalent to calling `Flicking.moveTo(panel.index, duration)`.

**Throws:**

- [MovementErrors](https://cjw783.github.io/flicking-docs-test/docs/api/types/MovementErrors)

**Fires:**

- [MovementEvents](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/MovementEvents)

### includePosition

```typescript
includePosition(pos: number, includeMargin?: boolean): boolean
```

Check whether the given position is inside of this panel's [range](https://cjw783.github.io/flicking-docs-test/docs/api/Panel#range)

**Parameters:**

- `pos` (`number`) - A position to check

- `includeMargin` (`boolean`) - Include [margin](https://cjw783.github.io/flicking-docs-test/docs/api/Panel#margin) to the range

**Returns:** A Boolean value indicating whether the given position is included in the panel range

### includeRange

```typescript
includeRange(min: number, max: number, includeMargin?: boolean): boolean
```

Check whether the given range is fully included in this panel's area (inclusive)

**Parameters:**

- `min` (`number`) - Minimum value of the range to check

- `max` (`number`) - Maximum value of the range to check

- `includeMargin` (`boolean`) - Include [margin](https://cjw783.github.io/flicking-docs-test/docs/api/Panel#margin) to the range

**Returns:** A Boolean value indicating whether the given range is fully included in the panel range

### isVisibleOnRange

```typescript
isVisibleOnRange(min: number, max: number): boolean
```

Check whether the panel is visble in the given range (exclusive)

**Parameters:**

- `min` (`number`) - Minimum value of the range to check

- `max` (`number`) - Maximum value of the range to check

**Returns:** A Boolean value indicating whether the panel is visible

### next

```typescript
next(): Panel | null
```

Get next(`index + 1`) panel.

**Returns:** The next panel

**Remarks:** When the next panel does not exist, this will return `null` instead If the [circular](https://cjw783.github.io/flicking-docs-test/docs/api/Flicking#circularenabled) is enabled, this will return the first panel if called from the last panel

### prev

```typescript
prev(): Panel | null
```

Get previous(`index - 1`) panel.

**Returns:** The previous panel

**Remarks:** When the previous panel does not exist, this will return `null` instead If the [circular](https://cjw783.github.io/flicking-docs-test/docs/api/Flicking#circularenabled) is enabled, this will return the last panel if called from the first panel

### resize

```typescript
resize(cached?: {
        size: number;
        height?: number;
        margin: {
            prev: number;
            next: number;
        };
    }): this
```

Update size of the panel

**Parameters:**

- `cached` (`{
        size: number;
        height?: number;
        margin: {
            prev: number;
            next: number;
        };
    }`) - Predefined cached size of the panel

**Returns:** The current instance for method chaining

**Remarks:** This method recalculates the panel's size, margin, and position based on the current DOM state.

### setSize

```typescript
setSize(size: SetSizeParams): this
```

Change panel's size

**Parameters:**

- `size` (`SetSizeParams`) - `SetSizeParams`

**Returns:** The current instance for method chaining

**Remarks:** This will change the actual size of the panel element by changing its CSS width/height property.
