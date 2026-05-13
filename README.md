# Tailwind CSS Pad Between

Utilities that add **padding** between child elements, not margin.  
Unlike Tailwind's built-in `space-*` (which uses margin), `pad-between` uses padding to create inner room between items.

Perfect for cases where margin collapsing or parent background/outline must include the gaps.

## Installation

```bash
npm install @nongbit/tailwind-pad-between
```

## Usage

### Tailwind CSS v4

Add to your main CSS file using `@plugin`:

```css
@import "tailwindcss";
@plugin "@nongbit/tailwind-pad-between";
```

### Tailwind CSS v3

Add to `tailwind.config.js`:

```js
module.exports = {
  plugins: [require('@nongbit/tailwind-pad-between')]
};
```

## Utilities

| Class        | Effect                                      |
|--------------|---------------------------------------------|
| `pad-x-{size}` | Horizontal padding between children (left/right) |
| `pad-y-{size}` | Vertical padding between children (top/bottom)   |

`{size}` uses your `theme.spacing` values (e.g., `4`, `8`, `px`, `[1rem]`).

## Example

```html
<div class="flex pad-x-4 bg-gray-100">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### How it works

For three children, the plugin adds:
- `padding-right` to the first child
- `padding-left` and `padding-right` to the middle child
- `padding-left` to the last child

This creates equal visual gaps between items, and the parent background extends into those gaps.

### Comparison with `space-x-*`

| Feature | `space-x-*` (margin) | `pad-x-*` (padding) |
|---------|----------------------|---------------------|
| Parent background covers gaps? | ❌ No | ✅ Yes |
| Margin collapsing issues? | ❌ No (but margin may collapse) | ✅ No |
| Click/tap area includes gaps? | ❌ No | ✅ Yes |

## Responsive

Responsive variants work automatically: `md:pad-x-6 lg:pad-y-8`.

## Migration from `room-between`

If you used the old `@nongbit/tailwind-room-between`:

- Update package: `npm install @nongbit/tailwind-pad-between@latest`
- Rename `room-x-*` → `pad-x-*`
- Rename `room-y-*` → `pad-y-*`
- No other changes needed.

## License

MIT
