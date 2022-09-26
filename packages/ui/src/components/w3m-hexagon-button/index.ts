import { html, LitElement, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { global } from '../../utils/Theme'
import '../w3m-text'
import styles, { dynamicStyles } from './styles'

@customElement('w3m-hexagon-button')
export class W3mHexagonButton extends LitElement {
  public static styles = [global, styles]

  // -- state & properties ------------------------------------------- //
  @property() public icon: TemplateResult<2> = undefined
  @property() public text = ''
  @property() public onClick: () => void = () => null

  // -- render ------------------------------------------------------- //
  protected render() {
    return html`
      ${dynamicStyles()}

      <button class="w3m-footer-actions" @click=${this.onClick}>
        <div class="w3m-hex">${this.icon}</div>
        <w3m-text variant="small-normal" color="secondary">${this.text}</w3m-text>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-hexagon-button': W3mHexagonButton
  }
}