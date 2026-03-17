# FlickingEvents

> Events of the Flicking component.

## Properties

### afterResize

**Type:** `AfterResizeEvent`

Event that fires when Flicking's [resize](https://cjw783.github.io/flicking-docs-test/docs/api/classes/Flicking#resize) is called, after updating the sizes of panels and viewport.

**Remarks:** See [AfterResizeEvent](https://cjw783.github.io/flicking-docs-test/docs/api/AfterResizeEvent) for more details.

### beforeResize

**Type:** `BeforeResizeEvent`

Event that fires when Flicking's [resize](https://cjw783.github.io/flicking-docs-test/docs/api/classes/Flicking#resize) is called, before updating the sizes of panels and viewport.

**Remarks:** See [BeforeResizeEvent](https://cjw783.github.io/flicking-docs-test/docs/api/BeforeResizeEvent) for more details.

### changed

**Type:** `ChangedEvent`

Event that fires AFTER the active panel change completes.

**Remarks:** See [ChangedEvent](https://cjw783.github.io/flicking-docs-test/docs/api/ChangedEvent) for more details.

### holdEnd

**Type:** `HoldEndEvent`

Event that fires when user stopped dragging.

**Remarks:** See [HoldEndEvent](https://cjw783.github.io/flicking-docs-test/docs/api/HoldEndEvent) for more details.

### holdStart

**Type:** `HoldStartEvent`

Event that fires when user started dragging.

**Remarks:** See [HoldStartEvent](https://cjw783.github.io/flicking-docs-test/docs/api/HoldStartEvent) for more details.

### move

**Type:** `MoveEvent`

Event that fires for every movement.

**Remarks:** See [MoveEvent](https://cjw783.github.io/flicking-docs-test/docs/api/MoveEvent) for more details.

### moveEnd

**Type:** `MoveEndEvent`

Event that fires when the movement is finished by user input release or animation end.

**Remarks:** See [MoveEndEvent](https://cjw783.github.io/flicking-docs-test/docs/api/MoveEndEvent) for more details.

### moveStart

**Type:** `MoveStartEvent`

Event that fires once before first Flicking.event:move | move event.

**Remarks:** See [MoveStartEvent](https://cjw783.github.io/flicking-docs-test/docs/api/MoveStartEvent) for more details.

### needPanel

**Type:** `NeedPanelEvent`

Event that fires when an empty panel area is visible at the edge of viewport.

**Remarks:** See [NeedPanelEvent](https://cjw783.github.io/flicking-docs-test/docs/api/NeedPanelEvent) for more details.

### panelChange

since v4.1.0

**Type:** `PanelChangeEvent`

Event that fires when a panel is added or removed.

**Remarks:** See [PanelChangeEvent](https://cjw783.github.io/flicking-docs-test/docs/api/PanelChangeEvent) for more details.

### reachEdge

**Type:** `ReachEdgeEvent`

Event that fires when camera reaches the maximum/minimum range.

**Remarks:** See [ReachEdgeEvent](https://cjw783.github.io/flicking-docs-test/docs/api/ReachEdgeEvent) for more details.

### ready

**Type:** `ReadyEvent`

Event that fires when Flicking's [init()](https://cjw783.github.io/flicking-docs-test/docs/api/classes/Flicking#init) is called.

**Remarks:** See [ReadyEvent](https://cjw783.github.io/flicking-docs-test/docs/api/types/ReadyEvent) for more details.

### restored

**Type:** `RestoredEvent`

Event that fires AFTER Flicking has returned to [currentPanel](https://cjw783.github.io/flicking-docs-test/docs/api/classes/Flicking#currentpanel).

**Remarks:** See [RestoredEvent](https://cjw783.github.io/flicking-docs-test/docs/api/RestoredEvent) for more details.

### select

**Type:** `SelectEvent`

Event that fires when panel is statically click / touched.

**Remarks:** See [SelectEvent](https://cjw783.github.io/flicking-docs-test/docs/api/SelectEvent) for more details.

### visibleChange

**Type:** `VisibleChangeEvent`

Event that fires when visible panel inside the viewport changes.

**Remarks:** See [VisibleChangeEvent](https://cjw783.github.io/flicking-docs-test/docs/api/VisibleChangeEvent) for more details.

### willChange

**Type:** `WillChangeEvent`

Event that fires BEFORE the active panel changes.

**Remarks:** See [WillChangeEvent](https://cjw783.github.io/flicking-docs-test/docs/api/WillChangeEvent) for more details.

### willRestore

**Type:** `WillRestoreEvent`

Event fires BEFORE returning to the current panel when drag doesn't reach threshold.

**Remarks:** See [WillRestoreEvent](https://cjw783.github.io/flicking-docs-test/docs/api/WillRestoreEvent) for more details.
