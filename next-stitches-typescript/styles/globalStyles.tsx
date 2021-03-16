import { global } from '../stitches.config'

const globalStyles = global({
  '*, *::before, *::after': { boxSizing: 'border-box' },
  ':root': { MozTabSize: '4', tabSize: 4 },
  html: {
    lineHeight: 1.5,
    WebkitTextSizeAdjust: '100%',
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },
  body: { margin: '0', fontFamily: 'inherit', lineHeight: 'inherit' },
  hr: { height: '0', color: 'inherit', borderTopWidth: '1px' },
  'abbr[title]': { textDecoration: 'underline dotted' },
  'b, strong': { fontWeight: 'bolder' },
  'code, kbd, samp, pre': {
    fontFamily:
      "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
    fontSize: '1em',
  },
  small: { fontSize: '80%' },
  'sub, sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },
  sub: { bottom: '-0.25em' },
  sup: { top: '-0.5em' },
  table: {
    textIndent: '0',
    borderColor: 'inherit',
    borderCollapse: 'collapse',
  },
  'button, input, optgroup, select, textarea': {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: 'inherit',
    margin: '0',
    padding: '0',
    color: 'inherit',
  },
  'button, select': { textTransform: 'none' },
  "button, [type='button'], [type='reset'], [type='submit']": {
    WebkitAppearance: 'button',
  },
  '::-moz-focus-inner': { borderStyle: 'none', padding: '0' },
  ':-moz-focusring': { outline: '1px dotted ButtonText' },
  ':-moz-ui-invalid': { boxShadow: 'none' },
  legend: { padding: '0' },
  progress: { verticalAlign: 'baseline' },
  '::-webkit-inner-spin-button, ::-webkit-outer-spin-button': {
    height: 'auto',
  },
  "[type='search']": { WebkitAppearance: 'textfield', outlineOffset: '-2px' },
  '::-webkit-search-decoration': { WebkitAppearance: 'none' },
  '::-webkit-file-upload-button': {
    WebkitAppearance: 'button',
    font: 'inherit',
  },
  summary: { display: 'list-item' },
  'blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre': {
    margin: '0',
  },
  button: { backgroundColor: 'transparent', backgroundImage: 'none' },
  'button:focus': {
    outline: '1px dotted',
  },
  fieldset: { margin: '0', padding: '0' },
  'ol, ul': { listStyle: 'none', margin: '0', padding: '0' },
  '*, ::before, ::after': {
    boxSizing: 'border-box',
    borderWidth: '0',
    borderStyle: 'solid',
    borderColor: '#e5e7eb',
  },
  img: { borderStyle: 'solid' },
  textarea: { resize: 'vertical' },
  'input::placeholder, textarea::placeholder': { color: '#9ca3af' },
  'button, [role="button"]': { cursor: 'pointer' },
  'h1, h2, h3, h4, h5, h6': {
    fontSize: 'inherit',
    fontWeight: 'inherit',
  },
  a: { color: 'inherit', textDecoration: 'inherit' },
  'pre, code, kbd, samp': {
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  'img, svg, video, canvas, audio, iframe, embed, object': {
    display: 'block',
    verticalAlign: 'middle',
  },
  'img, video': { maxWidth: '100%', height: 'auto' },
  '@keyframes spin': { to: { transform: 'rotate(360deg)' } },
  '@keyframes ping': { '75%, 100%': { transform: 'scale(2)', opacity: 0 } },
  '@keyframes pulse': { '50%': { opacity: 0.5 } },
  '@keyframes bounce': {
    '0%, 100%': {
      transform: 'translateY(-25%)',
      animationtimingfunction: 'cubic-bezier(0.8,0,1,1)',
    },
    '50%': {
      transform: 'none',
      animationtimingfunction: 'cubic-bezier(0,0,0.2,1)',
    },
  },
  '*': {
    '--tw-ring-inset': 'var(--tw-empty, /*!*/ /*!*/)',
    '--tw-ring-offset-width': '0px',
    '--tw-ring-offset-color': '#fff',
    '--tw-ring-color': 'rgba(59, 130, 246, 0.5)',
    '--tw-ring-offset-shadow': '0 0 #0000',
    '--tw-ring-shadow': '0 0 #0000',
    '--tw-shadow': '0 0 #0000',
  },
})

export default globalStyles
