# NeedPanelEvent

> Event that fires when an empty panel area is visible at the edge of viewport

## Description

You can set its threshold with [needPanelThreshold](https://cjw783.github.io/flicking-docs-test/docs/api/classes/Flicking#needpanelthreshold)

## Properties

### direction

**Type:** `Exclude<ValueOf<typeof DIRECTION>, null>`

Direction where new panel is needed. `DIRECTION.PREV` means panels should be [prepend](https://cjw783.github.io/flicking-docs-test/docs/api/classes/Flicking#prepend)ed and `DIRECTION.NEXT` means panels should be [append](https://cjw783.github.io/flicking-docs-test/docs/api/classes/Flicking#append)ed
