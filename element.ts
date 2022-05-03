import { LitElement, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';

@customElement('pfe-avatar')
export class PfeAvatar extends LitElement {
  @query('canvas') private canvas?: HTMLCanvasElement;

  render() {
    return html`
      <canvas part="canvas"></canvas>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pfe-avatar': PfeAvatar;
  }
}
