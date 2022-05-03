```bash
npm ci
npm start
```

output:
```js
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
import { LitElement, html } from "lit";
import { customElement, query } from "lit/decorators.js";
let PfeAvatar = class extends LitElement {
  canvas;
  render() {
    return html`
      <canvas part="canvas"></canvas>
    `;
  }
};
__decorateClass([
  query("canvas")
], PfeAvatar.prototype, "canvas", 2);
PfeAvatar = __decorateClass([
  customElement("pfe-avatar")
], PfeAvatar);
export {
  PfeAvatar
};
```

expected: 
```js
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
import { LitElement, html } from "lit";
import { customElement, query } from "lit/decorators.js";
let PfeAvatar = class extends LitElement {
  render() {
    return html`
      <canvas part="canvas"></canvas>
    `;
  }
};
__decorateClass([
  query("canvas")
], PfeAvatar.prototype, "canvas", 2);
PfeAvatar = __decorateClass([
  customElement("pfe-avatar")
], PfeAvatar);
export {
  PfeAvatar
};

```
