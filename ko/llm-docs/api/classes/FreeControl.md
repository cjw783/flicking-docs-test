# FreeControl

> A [Control](https://cjw783.github.io/flicking-docs-test/docs/api/Control) that can be scrolled freely without alignment

## Constructor

```typescript
constructor(options?: Partial<FreeControlOptions>);
```

Constructs a new instance of the `FreeControl` class

## Properties

### stopAtEdge

**Type:** `boolean`

Make scroll animation to stop at the start/end of the scroll area, not going out the bounce area

**Default:** `true`

## Methods

### moveToPosition

```typescript
moveToPosition(position: number, duration: number, axesEvent?: OnRelease): Promise<void>
```

Move [Camera](https://cjw783.github.io/flicking-docs-test/docs/api/Camera) to the given position

**Parameters:**

- `position` (`number`) - The target position to move

- `duration` (`number`) - Duration of the panel movement animation (unit: ms)

- `axesEvent` (`OnRelease`) - [release](https://naver.github.io/egjs-axes/docs/api/Axes#event-release) event of [Axes](https://naver.github.io/egjs-axes/)

**Returns:** A Promise which will be resolved after reaching the target position

**Remarks:** Unlike SnapControl, FreeControl moves to the exact position without snapping to panel boundaries.

**Throws:**

- [MovementErrors](https://cjw783.github.io/flicking-docs-test/docs/api/types/MovementErrors)

**Fires:**

- [MovementEvents](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/MovementEvents)

### updatePosition

```typescript
updatePosition(progressInPanel: number): void
```

Update position after resizing

**Parameters:**

- `progressInPanel` (`number`) - Previous camera's progress in active panel before resize

**Remarks:** Unlike the base Control, FreeControl preserves the progress within the panel instead of snapping to the panel position.

**Throws:**

- [InitializationErrors](https://cjw783.github.io/flicking-docs-test/docs/api/types/InitializationErrors)
