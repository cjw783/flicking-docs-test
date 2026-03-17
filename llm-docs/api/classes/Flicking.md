# Flicking

## Constructor

```typescript
constructor(root: HTMLElement | string, options?: Partial<FlickingOptions>);
```

Creates a new Flicking instance

### Parameters

**`root`** (`HTMLElement | string`) - A root HTMLElement to initialize Flicking on it. When it's a typeof `string`, it should be a css selector string

**`options`** (`Partial<FlickingOptions>`) - A [FlickingOptions](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions) object

**Throws:**

- [InitializationErrors](https://cjw783.github.io/flicking-docs-test/docs/api/types/InitializationErrors)

### Examples

```typescript
import Flicking from "@egjs/flicking";

// Creating new instance of Flicking with HTMLElement
const flicking = new Flicking(document.querySelector(".flicking-viewport"), { circular: true });

// Creating new instance of Flicking with CSS selector
const flicking2 = new Flicking(".flicking-viewport", { circular: true });
```

## Properties

### activePlugins

**Type:** `Plugin[]`

Array of currently activated plugins.

**Remarks:** Plugins are added via [addPlugins](https://cjw783.github.io/flicking-docs-test/docs/api/Flicking#addplugins) and removed via [removePlugins](https://cjw783.github.io/flicking-docs-test/docs/api/Flicking#removeplugins).

*This property is read-only.*

### adaptive

**Type:** `FlickingOptions["adaptive"]`

Current value of the [adaptive](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#adaptive) option.

### align

**Type:** `FlickingOptions["align"]`

Current value of the [align](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#align) option.

### animating

**Type:** `boolean`

Whether Flicking is currently animating.

**Remarks:** This is a shorthand for `Flicking.control.animating`.

*This property is read-only.*

### animationThreshold

since v4.15.0

**Type:** `FlickingOptions["animationThreshold"]`

Current value of the [animationThreshold](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#animationthreshold) option.

### autoInit

**Type:** `FlickingOptions["autoInit"]`

Current value of the [autoInit](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#autoinit) option.

*This property is read-only.*

### autoResize

**Type:** `FlickingOptions["autoResize"]`

Current value of the [autoResize](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#autoresize) option.

### autoResizer

**Type:** `AutoResizer`

`AutoResizer` instance that detects size changes and triggers resize when [autoResize](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#autoresize) option is enabled

*This property is read-only.*

### bounce

**Type:** `FlickingOptions["bounce"]`

Current value of the [bounce](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#bounce) option.

### bound

**Type:** `FlickingOptions["bound"]`

Current value of the [bound](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#bound) option.

### camera

**Type:** `Camera`

[Camera](https://cjw783.github.io/flicking-docs-test/docs/api/Camera) instance that manages actual movement and positioning inside the viewport

**Remarks:** The concrete Camera implementation is selected based on [circular](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#circular) and [bound](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#bound) options.

*This property is read-only.*

### changeOnHold

since v4.8.0

**Type:** `FlickingOptions["changeOnHold"]`

Current value of the [changeOnHold](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#changeonhold) option.

### circular

**Type:** `FlickingOptions["circular"]`

Current value of the [circular](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#circular) option.

### circularEnabled

**Type:** `boolean`

Whether the circular mode is actually enabled.

**Remarks:** The [circular](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#circular) option may not be enabled when the sum of panel sizes is too small. This property reflects the actual enabled state, which may differ from the [circular](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#circular) option value.

**Default:** `false`

*This property is read-only.*

### circularFallback

since v4.5.0

**Type:** `FlickingOptions["circularFallback"]`

Current value of the [circularFallback](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#circularfallback) option.

*This property is read-only.*

### control

**Type:** `Control`

[Control](https://cjw783.github.io/flicking-docs-test/docs/api/Control) instance that manages user input and panel movement animations

**Remarks:** The concrete Control implementation is selected based on [moveType](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#movetype) option.

*This property is read-only.*

### currentPanel

**Type:** `Panel | null`

The currently active panel.

**Remarks:** Returns `null` when there is no active panel. This is a shorthand for `Flicking.control.activePanel`.

*This property is read-only.*

### deceleration

**Type:** `FlickingOptions["deceleration"]`

Current value of the [deceleration](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#deceleration) option.

### defaultIndex

**Type:** `FlickingOptions["defaultIndex"]`

Current value of the [defaultIndex](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#defaultindex) option.

### disableOnInit

**Type:** `FlickingOptions["disableOnInit"]`

Current value of the [disableOnInit](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#disableoninit) option.

### dragThreshold

**Type:** `FlickingOptions["dragThreshold"]`

Current value of the [dragThreshold](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#dragthreshold) option.

### duration

**Type:** `FlickingOptions["duration"]`

Current value of the [duration](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#duration) option.

### easing

**Type:** `FlickingOptions["easing"]`

Current value of the [easing](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#easing) option.

### element

**Type:** `HTMLElement`

The root viewport element (`.flicking-viewport`).

**Remarks:** This is the element passed to the Flicking constructor. It is a shorthand for `Flicking.viewport.element`.

*This property is read-only.*

### externalRenderer

**Type:** `FlickingOptions["externalRenderer"]`

Current value of the [externalRenderer](https://cjw783.github.io/flicking-docs-test/docs/api/Flicking#externalrenderer) option.

*This property is read-only.*

### holding

**Type:** `boolean`

Whether the user is currently clicking or touching the viewport.

**Remarks:** This is a shorthand for `Flicking.control.holding`.

*This property is read-only.*

### horizontal

**Type:** `FlickingOptions["horizontal"]`

Current value of the [horizontal](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#horizontal) option.

### index

**Type:** `number`

Index of the currently active panel.

**Remarks:** Returns -1 when there is no active panel. This is a shorthand for `Flicking.currentPanel.index`.

*This property is read-only.*

### initialized

**Type:** `boolean`

Whether Flicking's [init](https://cjw783.github.io/flicking-docs-test/docs/api/Flicking#init) is called.

**Remarks:** This is `true` when [init](https://cjw783.github.io/flicking-docs-test/docs/api/Flicking#init) is called, and is `false` after calling [destroy](https://cjw783.github.io/flicking-docs-test/docs/api/Flicking#destroy). Use this to check if Flicking is ready before calling certain methods that require initialization.

**Default:** `false`

*This property is read-only.*

### inputType

**Type:** `FlickingOptions["inputType"]`

Current value of the [inputType](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#inputtype) option.

### interruptable

**Type:** `FlickingOptions["interruptable"]`

Current value of the [interruptable](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#interruptable) option.

### iOSEdgeSwipeThreshold

**Type:** `FlickingOptions["iOSEdgeSwipeThreshold"]`

Current value of the [iOSEdgeSwipeThreshold](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#iosedgeswipethreshold) option.

### maxResizeDebounce

since v4.6.0

**Type:** `FlickingOptions["maxResizeDebounce"]`

Current value of the [maxResizeDebounce](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#maxresizedebounce) option.

*This property is read-only.*

### moveType

**Type:** `FlickingOptions["moveType"]`

Current value of the [moveType](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#movetype) option.

### needPanelThreshold

**Type:** `FlickingOptions["needPanelThreshold"]`

Current value of the [needPanelThreshold](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#needpanelthreshold) option.

### nested

since v4.7.0

**Type:** `FlickingOptions["nested"]`

Current value of the [nested](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#nested) option.

### noPanelStyleOverride

**Type:** `FlickingOptions["noPanelStyleOverride"]`

Current value of the [noPanelStyleOverride](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#nopanelstyleoverride) option.

### observePanelResize

since v4.13.1

**Type:** `FlickingOptions["observePanelResize"]`

Current value of the [observePanelResize](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#observepanelresize) option.

### optimizeSizeUpdate

since v4.14.0

**Type:** `FlickingOptions["optimizeSizeUpdate"]`

Current value of the [optimizeSizeUpdate](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#optimizesizeupdate) option.

### panelCount

**Type:** `number`

Total number of panels.

**Remarks:** This is a shorthand for `Flicking.renderer.panelCount`.

*This property is read-only.*

### panels

**Type:** `Panel[]`

Array of all panels.

**Remarks:** This is a shorthand for `Flicking.renderer.panels`.

*This property is read-only.*

### panelsPerView

since v4.2.0

**Type:** `FlickingOptions["panelsPerView"]`

Current value of the [panelsPerView](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#panelsperview) option.

### preventClickOnDrag

**Type:** `FlickingOptions["preventClickOnDrag"]`

Current value of the [preventClickOnDrag](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#preventclickondrag) option.

### preventDefaultOnDrag

since v4.11.0

**Type:** `FlickingOptions["preventDefaultOnDrag"]`

Current value of the [preventDefaultOnDrag](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#preventdefaultondrag) option.

### preventEventsBeforeInit

since v4.2.0

**Type:** `FlickingOptions["preventEventsBeforeInit"]`

Current value of the [preventEventsBeforeInit](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#preventeventsbeforeinit) option.

### renderer

**Type:** `Renderer`

[Renderer](https://cjw783.github.io/flicking-docs-test/docs/api/Renderer) instance that manages panels and their elements

**Remarks:** The concrete Renderer implementation is selected based on [externalRenderer](https://cjw783.github.io/flicking-docs-test/docs/api/Flicking#externalrenderer) and [virtual](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#virtual) options.

*This property is read-only.*

### renderExternal

**Type:** `FlickingOptions["renderExternal"]`

**⚠️ Deprecated:** Use externalRenderer instead. Current value of the renderExternal option.

*This property is read-only.*

### renderOnlyVisible

**Type:** `FlickingOptions["renderOnlyVisible"]`

Current value of the [renderOnlyVisible](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#renderonlyvisible) option.

### resizeDebounce

since v4.6.0

**Type:** `FlickingOptions["resizeDebounce"]`

Current value of the [resizeDebounce](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#resizedebounce) option.

*This property is read-only.*

### resizeOnContentsReady

since v4.3.0

**Type:** `FlickingOptions["resizeOnContentsReady"]`

Current value of the [resizeOnContentsReady](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#resizeoncontentsready) option.

### threshold

**Type:** `FlickingOptions["threshold"]`

Current value of the [threshold](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#threshold) option.

### useCSSOrder

since v4.15.0

**Type:** `FlickingOptions["useCSSOrder"]`

Current value of the [useCSSOrder](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#usecssorder) option.

### useFractionalSize

since v4.9.0

**Type:** `FlickingOptions["useFractionalSize"]`

Current value of the [useFractionalSize](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#usefractionalsize) option.

*This property is read-only.*

### useResizeObserver

since v4.4.0

**Type:** `FlickingOptions["useResizeObserver"]`

Current value of the [useResizeObserver](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#useresizeobserver) option.

### VERSION

**Type:** `string`

Version info string

*This property is read-only.*

### viewport

**Type:** `Viewport`

[Viewport](https://cjw783.github.io/flicking-docs-test/docs/api/Viewport) instance that manages viewport size and element

*This property is read-only.*

### virtual

**Type:** `VirtualManager`

[VirtualManager](https://cjw783.github.io/flicking-docs-test/docs/api/VirtualManager) instance that manages virtual panels

*This property is read-only.*

### virtualEnabled

**Type:** `boolean`

Whether the virtual mode is actually enabled.

**Remarks:** The [virtual](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#virtual) option may not be enabled when [panelsPerView](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#panelsperview) is less than or equal to zero. This property reflects the actual enabled state, which may differ from the [virtual](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#virtual) option value.

**Default:** `false`

*This property is read-only.*

### visiblePanels

**Type:** `Panel[]`

Array of panels that are currently visible in the viewport.

**Remarks:** This is a shorthand for `Flicking.camera.visiblePanels`.

*This property is read-only.*

## Methods

### addPlugins

```typescript
addPlugins(...plugins: Plugin[]): this
```

Add plugins to Flicking.

**Parameters:**

- `plugins` (`Plugin[]`) - `Plugin`

**Returns:** The current instance for method chaining

**Remarks:** Plugins are automatically initialized if Flicking is already initialized.

### append

```typescript
append(element: ElementLike | ElementLike[]): Panel[]
```

Add new panels after the last panel.

**Parameters:**

- `element` (`ElementLike | ElementLike[]`) - A new HTMLElement, outerHTML string, or an array of both

**Returns:** Array of appended panels

**Throws:**

- [DOMManipulationErrors](https://cjw783.github.io/flicking-docs-test/docs/api/types/DOMManipulationErrors)

### destroy

```typescript
destroy(): void
```

Destroy Flicking and remove all event handlers.

**Remarks:** This method cleans up all resources including event handlers, components, and plugins. After calling this method, [initialized](https://cjw783.github.io/flicking-docs-test/docs/api/Flicking#initialized) will be `false` and the instance should not be used.

### disableInput

```typescript
disableInput(): this
```

Disable user input (mouse/touch).

**Returns:** The current instance for method chaining

**Remarks:** This is a shorthand for `Flicking.control.disable`.

### enableInput

```typescript
enableInput(): this
```

Enable user input (mouse/touch).

**Returns:** The current instance for method chaining

**Remarks:** This is a shorthand for `Flicking.control.enable`.

### getPanel

```typescript
getPanel(index: number): Panel | null
```

Get the panel at the given index.

**Parameters:**

- `index` (`number`) - The index of the panel to get

**Returns:** The panel at the given index, or `null` if it doesn't exist. This is a shorthand for `Flicking.renderer.getPanel(index)`.

### getStatus

```typescript
getStatus(options?: GetStatusParams): Status
```

Get the current Flicking status.

**Parameters:**

- `options` (`GetStatusParams`) - [GetStatusParams](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/GetStatusParams)

**Returns:** Status object that can be used with setStatus to restore the state

### init

```typescript
init(): Promise<void>
```

Initialize Flicking and move to the default index.

**Returns:** Promise that resolves when initialization is complete

**Remarks:** This method is automatically called in the constructor when [autoInit](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#autoinit) is `true` (default). If Flicking is already initialized, this method returns immediately without doing anything.

**Fires:**

- [ReadyEvent](https://cjw783.github.io/flicking-docs-test/docs/api/types/ReadyEvent)

### insert

```typescript
insert(index: number, element: ElementLike | ElementLike[]): Panel[]
```

Insert new panels at the given index.

**Parameters:**

- `index` (`number`) - Index to insert new panels at

- `element` (`ElementLike | ElementLike[]`) - A new HTMLElement, outerHTML string, or an array of both

**Returns:** Array of inserted panels

**Remarks:** This will increase the index of panels at or after the given index by the number of panels added.

**Throws:**

- [DOMManipulationErrors](https://cjw783.github.io/flicking-docs-test/docs/api/types/DOMManipulationErrors)

### moveTo

```typescript
moveTo(index: number, duration?: number, direction?: ValueOf<typeof DIRECTION>): Promise<void>
```

Move to the panel with the given index.

**Parameters:**

- `index` (`number`) - The index of the panel to move to

- `duration` (`number`) - Duration of the animation (unit: ms). Defaults to [duration](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#duration)

- `direction` (`ValueOf<typeof DIRECTION>`) - Direction to move (circular mode only). Defaults to `NONE`

**Returns:** Promise that resolves after reaching the target panel

**Throws:**

- [MovementErrors](https://cjw783.github.io/flicking-docs-test/docs/api/types/MovementErrors)

**Fires:**

- [MovementEvents](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/MovementEvents)

### next

```typescript
next(duration?: number): Promise<void>
```

Move to the next panel (current index + 1).

**Parameters:**

- `duration` (`number`) - Duration of the panel movement animation (unit: ms). Defaults to [duration](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#duration)

**Returns:** Promise that resolves after reaching the next panel

**Throws:**

- [MovementErrors](https://cjw783.github.io/flicking-docs-test/docs/api/types/MovementErrors)

**Fires:**

- [MovementEvents](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/MovementEvents)

### prepend

```typescript
prepend(element: ElementLike | ElementLike[]): Panel[]
```

Add new panels before the first panel.

**Parameters:**

- `element` (`ElementLike | ElementLike[]`) - A new HTMLElement, outerHTML string, or an array of both

**Returns:** Array of prepended panels

**Remarks:** This will increase the index of existing panels by the number of panels added.

**Throws:**

- [DOMManipulationErrors](https://cjw783.github.io/flicking-docs-test/docs/api/types/DOMManipulationErrors)

### prev

```typescript
prev(duration?: number): Promise<void>
```

Move to the previous panel (current index - 1).

**Parameters:**

- `duration` (`number`) - Duration of the panel movement animation (unit: ms). Defaults to [duration](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#duration)

**Returns:** Promise that resolves after reaching the previous panel

**Throws:**

- [MovementErrors](https://cjw783.github.io/flicking-docs-test/docs/api/types/MovementErrors)

**Fires:**

- [MovementEvents](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/MovementEvents)

### remove

```typescript
remove(index: number, deleteCount?: number): Panel[]
```

Remove panels starting from the given index.

**Parameters:**

- `index` (`number`) - Index of the first panel to remove

- `deleteCount` (`number`) - Number of panels to remove. Defaults to `1`

**Returns:** Array of removed panels

**Remarks:** This will decrease the index of panels after the removed ones by the number of panels removed.

**Throws:**

- [DOMManipulationErrors](https://cjw783.github.io/flicking-docs-test/docs/api/types/DOMManipulationErrors)

### removePlugins

```typescript
removePlugins(...plugins: Plugin[]): this
```

Remove plugins from Flicking.

**Parameters:**

- `plugins` (`Plugin[]`) - `Plugin`

**Returns:** The current instance for method chaining

### resize

```typescript
resize(): Promise<void>
```

Update viewport and panel sizes.

**Returns:** Promise that resolves when resize is complete

**Remarks:** This method does nothing if a resize is already in progress.

**Fires:**

- [ResizeEvents](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/ResizeEvents)

### setStatus

```typescript
setStatus(status: Status): void
```

Restore Flicking to the state of the given [Status](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/Status).

**Parameters:**

- `status` (`Status`) - [Status](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/Status)

**Throws:**

- [StatusRestoreErrors](https://cjw783.github.io/flicking-docs-test/docs/api/types/StatusRestoreErrors)

### stopAnimation

since v4.10.0

```typescript
stopAnimation(): void
```

Stop the animation currently playing.

**Remarks:** This method does nothing if no animation is currently playing.

**Fires:**

- [MoveEndEvent](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/MoveEndEvent)

### updateAnimation

since v4.10.0

```typescript
updateAnimation(index: number, duration?: number, direction?: ValueOf<typeof DIRECTION>): void
```

Change the destination and duration of the animation currently playing.

**Parameters:**

- `index` (`number`) - The index of the panel to move to

- `duration` (`number`) - Duration of the animation (unit: ms)

- `direction` (`ValueOf<typeof DIRECTION>`) - Direction to move. Only available when [circular](https://cjw783.github.io/flicking-docs-test/docs/api/interfaces/FlickingOptions#circular) is enabled

**Remarks:** This method does nothing if no animation is currently playing.

**Throws:**

- [AnimationUpdateErrors](https://cjw783.github.io/flicking-docs-test/docs/api/types/AnimationUpdateErrors)
