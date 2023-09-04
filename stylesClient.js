const style = document.createElement('style')
style.textContent = `
:root {
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-black: #000;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-gray-100: #f8f9fa;
    --bs-gray-200: #e9ecef;
    --bs-gray-300: #dee2e6;
    --bs-gray-400: #ced4da;
    --bs-gray-500: #adb5bd;
    --bs-gray-600: #6c757d;
    --bs-gray-700: #495057;
    --bs-gray-800: #343a40;
    --bs-gray-900: #212529;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-info: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #212529;
    --bs-primary-rgb: 13,110,253;
    --bs-secondary-rgb: 108,117,125;
    --bs-success-rgb: 25,135,84;
    --bs-info-rgb: 13,202,240;
    --bs-warning-rgb: 255,193,7;
    --bs-danger-rgb: 220,53,69;
    --bs-light-rgb: 248,249,250;
    --bs-dark-rgb: 33,37,41;
    --bs-white-rgb: 255,255,255;
    --bs-black-rgb: 0,0,0;
    --bs-body-color-rgb: 33,37,41;
    --bs-body-bg-rgb: 255,255,255;
    --bs-font-sans-serif: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --bs-font-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --bs-gradient: linear-gradient(180deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0));
    --bs-body-font-family: var(--bs-font-sans-serif);
    --bs-body-font-size: 1rem;
    --bs-body-font-weight: 400;
    --bs-body-line-height: 1.5;
    --bs-body-color: #212529;
    --bs-body-bg: #fff;
    --bs-border-width: 1px;
    --bs-border-style: solid;
    --bs-border-color: #dee2e6;
    --bs-border-color-translucent: rgba(0,0,0,.175);
    --bs-border-radius: 0.375rem;
    --bs-border-radius-sm: 0.25rem;
    --bs-border-radius-lg: 0.5rem;
    --bs-border-radius-xl: 1rem;
    --bs-border-radius-2xl: 2rem;
    --bs-border-radius-pill: 50rem;
    --bs-link-color: #0d6efd;
    --bs-link-hover-color: #0a58ca;
    --bs-code-color: #d63384;
    --bs-highlight-bg: #fff3cd
}

*,:after,:before {
    box-sizing: border-box;
}

@media(prefers-reduced-motion:no-preference) {
    :root {
        scroll-behavior: smooth
    }
}

body {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    background-color: var(--bs-body-bg);
    color: var(--bs-body-color);
    font-family: var(--bs-body-font-family);
    font-size: var(--bs-body-font-size);
    font-weight: var(--bs-body-font-weight);
    line-height: var(--bs-body-line-height);
    margin: 0;
    text-align: var(--bs-body-text-align)
}

hr {
    border: 0;
    border-top: 1px solid;
    color: inherit;
    margin: 1rem 0;
    opacity: .25
}

.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6 {
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: .5rem
}

.h1,h1 {
    font-size: calc(1.375rem + 1.5vw)
}

@media(min-width: 1200px) {
    .h1,h1 {
        font-size:2.5rem
    }
}

.h2,h2 {
    font-size: calc(1.325rem + .9vw)
}

@media(min-width: 1200px) {
    .h2,h2 {
        font-size:2rem
    }
}

.h3,h3 {
    font-size: calc(1.3rem + .6vw)
}

@media(min-width: 1200px) {
    .h3,h3 {
        font-size:1.75rem
    }
}

.h4,h4 {
    font-size: calc(1.275rem + .3vw)
}

@media(min-width: 1200px) {
    .h4,h4 {
        font-size:1.5rem
    }
}

.h5,h5 {
    font-size: 1.25rem
}

.h6,h6 {
    font-size: 1rem
}

p {
    margin-bottom: 1rem;
    margin-top: 0
}

abbr[title] {
    cursor: help;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none
}

address {
    font-style: normal;
    line-height: inherit;
    margin-bottom: 1rem
}

ol,ul {
    padding-left: 2rem
}

dl,ol,ul {
    margin-bottom: 1rem;
    margin-top: 0
}

ol ol,ol ul,ul ol,ul ul {
    margin-bottom: 0
}

dt {
    font-weight: 700
}

dd {
    margin-bottom: .5rem;
    margin-left: 0
}

blockquote {
    margin: 0 0 1rem
}

b,strong {
    font-weight: bolder
}

.small,small {
    font-size: .875em
}

.mark,mark {
    background-color: var(--bs-highlight-bg);
    padding: .1875em
}

sub,sup {
    font-size: .75em;
    line-height: 0;
    position: relative;
    vertical-align: baseline
}

sub {
    bottom: -.25em
}

sup {
    top: -.5em
}

a {
    color: var(--bs-link-color);
    text-decoration: underline
}

a:hover {
    color: var(--bs-link-hover-color)
}

a:not([href]):not([class]),a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none
}

code,kbd,pre,samp {
    font-family: var(--bs-font-monospace);
    font-size: 1em
}

pre {
    display: block;
    font-size: .875em;
    margin-bottom: 1rem;
    margin-top: 0;
    overflow: auto
}

pre code {
    color: inherit;
    font-size: inherit;
    word-break: normal
}

code {
    word-wrap: break-word;
    color: var(--bs-code-color);
    font-size: .875em
}

a>code {
    color: inherit
}

kbd {
    background-color: var(--bs-body-color);
    border-radius: .25rem;
    color: var(--bs-body-bg);
    font-size: .875em;
    padding: .1875rem .375rem
}

kbd kbd {
    font-size: 1em;
    padding: 0
}

figure {
    margin: 0 0 1rem
}

img,svg {
    vertical-align: middle
}

table {
    border-collapse: collapse;
    caption-side: bottom
}

caption {
    color: #6c757d;
    padding-bottom: .5rem;
    padding-top: .5rem;
    text-align: left
}

th {
    text-align: inherit;
    text-align: -webkit-match-parent
}

tbody,td,tfoot,th,thead,tr {
    border: 0 solid;
    border-color: inherit
}

label {
    display: inline-block
}

button {
    border-radius: 0
}

button:focus:not(:focus-visible) {
    outline: 0
}

button,input,optgroup,select,textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    margin: 0
}

button,select {
    text-transform: none
}

[role=button] {
    cursor: pointer
}

select {
    word-wrap: normal
}

select:disabled {
    opacity: 1
}

[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator {
    display: none!important
}

[type=button],[type=reset],[type=submit],button {
    -webkit-appearance: button
}

[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled) {
    cursor: pointer
}

::-moz-focus-inner {
    border-style: none;
    padding: 0
}

textarea {
    resize: vertical
}

fieldset {
    border: 0;
    margin: 0;
    min-width: 0;
    padding: 0
}

legend {
    float: left;
    font-size: calc(1.275rem + .3vw);
    line-height: inherit;
    margin-bottom: .5rem;
    padding: 0;
    width: 100%
}

@media(min-width: 1200px) {
    legend {
        font-size:1.5rem
    }
}

legend+* {
    clear: left
}

::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field {
    padding: 0
}

::-webkit-inner-spin-button {
    height: auto
}

[type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px
}

::-webkit-search-decoration {
    -webkit-appearance: none
}

::-webkit-color-swatch-wrapper {
    padding: 0
}

::file-selector-button {
    -webkit-appearance: button;
    font: inherit
}

output {
    display: inline-block
}

iframe {
    border: 0
}

summary {
    cursor: pointer;
    display: list-item
}

progress {
    vertical-align: baseline
}

[hidden] {
    display: none!important
}

.lead {
    font-size: 1.25rem;
    font-weight: 300
}

.display-1 {
    font-size: calc(1.625rem + 4.5vw);
    font-weight: 300;
    line-height: 1.2
}

@media(min-width: 1200px) {
    .display-1 {
        font-size:5rem
    }
}

.display-2 {
    font-size: calc(1.575rem + 3.9vw);
    font-weight: 300;
    line-height: 1.2
}

@media(min-width: 1200px) {
    .display-2 {
        font-size:4.5rem
    }
}

.display-3 {
    font-size: calc(1.525rem + 3.3vw);
    font-weight: 300;
    line-height: 1.2
}

@media(min-width: 1200px) {
    .display-3 {
        font-size:4rem
    }
}

.display-4 {
    font-size: calc(1.475rem + 2.7vw);
    font-weight: 300;
    line-height: 1.2
}

@media(min-width: 1200px) {
    .display-4 {
        font-size:3.5rem
    }
}

.display-5 {
    font-size: calc(1.425rem + 2.1vw);
    font-weight: 300;
    line-height: 1.2
}

@media(min-width: 1200px) {
    .display-5 {
        font-size:3rem
    }
}

.display-6 {
    font-size: calc(1.375rem + 1.5vw);
    font-weight: 300;
    line-height: 1.2
}

@media(min-width: 1200px) {
    .display-6 {
        font-size:2.5rem
    }
}

.list-inline,.list-unstyled {
    list-style: none;
    padding-left: 0
}

.list-inline-item {
    display: inline-block
}

.list-inline-item:not(:last-child) {
    margin-right: .5rem
}

.initialism {
    font-size: .875em;
    text-transform: uppercase
}

.blockquote {
    font-size: 1.25rem;
    margin-bottom: 1rem
}

.blockquote>:last-child {
    margin-bottom: 0
}

.blockquote-footer {
    color: #6c757d;
    font-size: .875em;
    margin-bottom: 1rem;
    margin-top: -1rem
}

.blockquote-footer:before {
    content: "— "
}

.img-fluid,.img-thumbnail {
    height: auto;
    max-width: 100%
}

.img-thumbnail {
    background-color: #fff;
    border: 1px solid var(--bs-border-color);
    border-radius: .375rem;
    padding: .25rem
}

.figure {
    display: inline-block
}

.figure-img {
    line-height: 1;
    margin-bottom: .5rem
}

.figure-caption {
    color: #6c757d;
    font-size: .875em
}

.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(var(--bs-gutter-x)*.5);
    padding-right: calc(var(--bs-gutter-x)*.5);
    width: 100%
}

@media(min-width: 576px) {
    .container,.container-sm {
        max-width:540px
    }
}

@media(min-width: 768px) {
    .container,.container-md,.container-sm {
        max-width:720px
    }
}

@media(min-width: 992px) {
    .container,.container-lg,.container-md,.container-sm {
        max-width:960px
    }
}

@media(min-width: 1280px) {
    .container,.container-lg,.container-md,.container-sm,.container-xl {
        max-width:1280px
    }
}

.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(var(--bs-gutter-x)*-.5);
    margin-right: calc(var(--bs-gutter-x)*-.5);
    margin-top: calc(var(--bs-gutter-y)*-1)
}

.row>* {
    flex-shrink: 0;
    margin-top: var(--bs-gutter-y);
    max-width: 100%;
    padding-left: calc(var(--bs-gutter-x)*.5);
    padding-right: calc(var(--bs-gutter-x)*.5);
    width: 100%
}

.grid {
    display: grid;
    gap: var(--bs-gap,1.5rem);
    grid-template-columns: repeat(var(--bs-columns,12),1fr);
    grid-template-rows: repeat(var(--bs-rows,1),1fr)
}

.grid .g-col-1 {
    grid-column: auto/span 1
}

.grid .g-col-2 {
    grid-column: auto/span 2
}

.grid .g-col-3 {
    grid-column: auto/span 3
}

.grid .g-col-4 {
    grid-column: auto/span 4
}

.grid .g-col-5 {
    grid-column: auto/span 5
}

.grid .g-col-6 {
    grid-column: auto/span 6
}

.grid .g-col-7 {
    grid-column: auto/span 7
}

.grid .g-col-8 {
    grid-column: auto/span 8
}

.grid .g-col-9 {
    grid-column: auto/span 9
}

.grid .g-col-10 {
    grid-column: auto/span 10
}

.grid .g-col-11 {
    grid-column: auto/span 11
}

.grid .g-col-12 {
    grid-column: auto/span 12
}

.grid .g-start-1 {
    grid-column-start: 1
}

.grid .g-start-2 {
    grid-column-start: 2
}

.grid .g-start-3 {
    grid-column-start: 3
}

.grid .g-start-4 {
    grid-column-start: 4
}

.grid .g-start-5 {
    grid-column-start: 5
}

.grid .g-start-6 {
    grid-column-start: 6
}

.grid .g-start-7 {
    grid-column-start: 7
}

.grid .g-start-8 {
    grid-column-start: 8
}

.grid .g-start-9 {
    grid-column-start: 9
}

.grid .g-start-10 {
    grid-column-start: 10
}

.grid .g-start-11 {
    grid-column-start: 11
}

@media(min-width: 576px) {
    .grid .g-col-sm-1 {
        grid-column:auto/span 1
    }

    .grid .g-col-sm-2 {
        grid-column: auto/span 2
    }

    .grid .g-col-sm-3 {
        grid-column: auto/span 3
    }

    .grid .g-col-sm-4 {
        grid-column: auto/span 4
    }

    .grid .g-col-sm-5 {
        grid-column: auto/span 5
    }

    .grid .g-col-sm-6 {
        grid-column: auto/span 6
    }

    .grid .g-col-sm-7 {
        grid-column: auto/span 7
    }

    .grid .g-col-sm-8 {
        grid-column: auto/span 8
    }

    .grid .g-col-sm-9 {
        grid-column: auto/span 9
    }

    .grid .g-col-sm-10 {
        grid-column: auto/span 10
    }

    .grid .g-col-sm-11 {
        grid-column: auto/span 11
    }

    .grid .g-col-sm-12 {
        grid-column: auto/span 12
    }

    .grid .g-start-sm-1 {
        grid-column-start: 1
    }

    .grid .g-start-sm-2 {
        grid-column-start: 2
    }

    .grid .g-start-sm-3 {
        grid-column-start: 3
    }

    .grid .g-start-sm-4 {
        grid-column-start: 4
    }

    .grid .g-start-sm-5 {
        grid-column-start: 5
    }

    .grid .g-start-sm-6 {
        grid-column-start: 6
    }

    .grid .g-start-sm-7 {
        grid-column-start: 7
    }

    .grid .g-start-sm-8 {
        grid-column-start: 8
    }

    .grid .g-start-sm-9 {
        grid-column-start: 9
    }

    .grid .g-start-sm-10 {
        grid-column-start: 10
    }

    .grid .g-start-sm-11 {
        grid-column-start: 11
    }
}

@media(min-width: 768px) {
    .grid .g-col-md-1 {
        grid-column:auto/span 1
    }

    .grid .g-col-md-2 {
        grid-column: auto/span 2
    }

    .grid .g-col-md-3 {
        grid-column: auto/span 3
    }

    .grid .g-col-md-4 {
        grid-column: auto/span 4
    }

    .grid .g-col-md-5 {
        grid-column: auto/span 5
    }

    .grid .g-col-md-6 {
        grid-column: auto/span 6
    }

    .grid .g-col-md-7 {
        grid-column: auto/span 7
    }

    .grid .g-col-md-8 {
        grid-column: auto/span 8
    }

    .grid .g-col-md-9 {
        grid-column: auto/span 9
    }

    .grid .g-col-md-10 {
        grid-column: auto/span 10
    }

    .grid .g-col-md-11 {
        grid-column: auto/span 11
    }

    .grid .g-col-md-12 {
        grid-column: auto/span 12
    }

    .grid .g-start-md-1 {
        grid-column-start: 1
    }

    .grid .g-start-md-2 {
        grid-column-start: 2
    }

    .grid .g-start-md-3 {
        grid-column-start: 3
    }

    .grid .g-start-md-4 {
        grid-column-start: 4
    }

    .grid .g-start-md-5 {
        grid-column-start: 5
    }

    .grid .g-start-md-6 {
        grid-column-start: 6
    }

    .grid .g-start-md-7 {
        grid-column-start: 7
    }

    .grid .g-start-md-8 {
        grid-column-start: 8
    }

    .grid .g-start-md-9 {
        grid-column-start: 9
    }

    .grid .g-start-md-10 {
        grid-column-start: 10
    }

    .grid .g-start-md-11 {
        grid-column-start: 11
    }
}

@media(min-width: 992px) {
    .grid .g-col-lg-1 {
        grid-column:auto/span 1
    }

    .grid .g-col-lg-2 {
        grid-column: auto/span 2
    }

    .grid .g-col-lg-3 {
        grid-column: auto/span 3
    }

    .grid .g-col-lg-4 {
        grid-column: auto/span 4
    }

    .grid .g-col-lg-5 {
        grid-column: auto/span 5
    }

    .grid .g-col-lg-6 {
        grid-column: auto/span 6
    }

    .grid .g-col-lg-7 {
        grid-column: auto/span 7
    }

    .grid .g-col-lg-8 {
        grid-column: auto/span 8
    }

    .grid .g-col-lg-9 {
        grid-column: auto/span 9
    }

    .grid .g-col-lg-10 {
        grid-column: auto/span 10
    }

    .grid .g-col-lg-11 {
        grid-column: auto/span 11
    }

    .grid .g-col-lg-12 {
        grid-column: auto/span 12
    }

    .grid .g-start-lg-1 {
        grid-column-start: 1
    }

    .grid .g-start-lg-2 {
        grid-column-start: 2
    }

    .grid .g-start-lg-3 {
        grid-column-start: 3
    }

    .grid .g-start-lg-4 {
        grid-column-start: 4
    }

    .grid .g-start-lg-5 {
        grid-column-start: 5
    }

    .grid .g-start-lg-6 {
        grid-column-start: 6
    }

    .grid .g-start-lg-7 {
        grid-column-start: 7
    }

    .grid .g-start-lg-8 {
        grid-column-start: 8
    }

    .grid .g-start-lg-9 {
        grid-column-start: 9
    }

    .grid .g-start-lg-10 {
        grid-column-start: 10
    }

    .grid .g-start-lg-11 {
        grid-column-start: 11
    }
}

@media(min-width: 1280px) {
    .grid .g-col-xl-1 {
        grid-column:auto/span 1
    }

    .grid .g-col-xl-2 {
        grid-column: auto/span 2
    }

    .grid .g-col-xl-3 {
        grid-column: auto/span 3
    }

    .grid .g-col-xl-4 {
        grid-column: auto/span 4
    }

    .grid .g-col-xl-5 {
        grid-column: auto/span 5
    }

    .grid .g-col-xl-6 {
        grid-column: auto/span 6
    }

    .grid .g-col-xl-7 {
        grid-column: auto/span 7
    }

    .grid .g-col-xl-8 {
        grid-column: auto/span 8
    }

    .grid .g-col-xl-9 {
        grid-column: auto/span 9
    }

    .grid .g-col-xl-10 {
        grid-column: auto/span 10
    }

    .grid .g-col-xl-11 {
        grid-column: auto/span 11
    }

    .grid .g-col-xl-12 {
        grid-column: auto/span 12
    }

    .grid .g-start-xl-1 {
        grid-column-start: 1
    }

    .grid .g-start-xl-2 {
        grid-column-start: 2
    }

    .grid .g-start-xl-3 {
        grid-column-start: 3
    }

    .grid .g-start-xl-4 {
        grid-column-start: 4
    }

    .grid .g-start-xl-5 {
        grid-column-start: 5
    }

    .grid .g-start-xl-6 {
        grid-column-start: 6
    }

    .grid .g-start-xl-7 {
        grid-column-start: 7
    }

    .grid .g-start-xl-8 {
        grid-column-start: 8
    }

    .grid .g-start-xl-9 {
        grid-column-start: 9
    }

    .grid .g-start-xl-10 {
        grid-column-start: 10
    }

    .grid .g-start-xl-11 {
        grid-column-start: 11
    }
}

.col {
    flex: 1 0 0%
}

.row-cols-auto>* {
    flex: 0 0 auto;
    width: auto
}

.row-cols-1>* {
    flex: 0 0 auto;
    width: 100%
}

.row-cols-2>* {
    flex: 0 0 auto;
    width: 50%
}

.row-cols-3>* {
    flex: 0 0 auto;
    width: 33.3333333333%
}

.row-cols-4>* {
    flex: 0 0 auto;
    width: 25%
}

.row-cols-5>* {
    flex: 0 0 auto;
    width: 20%
}

.row-cols-6>* {
    flex: 0 0 auto;
    width: 16.6666666667%
}

.col-auto {
    flex: 0 0 auto;
    width: auto
}

.col-1 {
    flex: 0 0 auto;
    width: 8.33333333%
}

.col-2 {
    flex: 0 0 auto;
    width: 16.66666667%
}

.col-3 {
    flex: 0 0 auto;
    width: 25%
}

.col-4 {
    flex: 0 0 auto;
    width: 33.33333333%
}

.col-5 {
    flex: 0 0 auto;
    width: 41.66666667%
}

.col-6 {
    flex: 0 0 auto;
    width: 50%
}

.col-7 {
    flex: 0 0 auto;
    width: 58.33333333%
}

.col-8 {
    flex: 0 0 auto;
    width: 66.66666667%
}

.col-9 {
    flex: 0 0 auto;
    width: 75%
}

.col-10 {
    flex: 0 0 auto;
    width: 83.33333333%
}

.col-11 {
    flex: 0 0 auto;
    width: 91.66666667%
}

.col-12 {
    flex: 0 0 auto;
    width: 100%
}

.offset-1 {
    margin-left: 8.33333333%
}

.offset-2 {
    margin-left: 16.66666667%
}

.offset-3 {
    margin-left: 25%
}

.offset-4 {
    margin-left: 33.33333333%
}

.offset-5 {
    margin-left: 41.66666667%
}

.offset-6 {
    margin-left: 50%
}

.offset-7 {
    margin-left: 58.33333333%
}

.offset-8 {
    margin-left: 66.66666667%
}

.offset-9 {
    margin-left: 75%
}

.offset-10 {
    margin-left: 83.33333333%
}

.offset-11 {
    margin-left: 91.66666667%
}

.g-0,.gx-0 {
    --bs-gutter-x: 0
}

.g-0,.gy-0 {
    --bs-gutter-y: 0
}

.g-1,.gx-1 {
    --bs-gutter-x: 0.25rem
}

.g-1,.gy-1 {
    --bs-gutter-y: 0.25rem
}

.g-2,.gx-2 {
    --bs-gutter-x: 0.5rem
}

.g-2,.gy-2 {
    --bs-gutter-y: 0.5rem
}

.g-3,.gx-3 {
    --bs-gutter-x: 1rem
}

.g-3,.gy-3 {
    --bs-gutter-y: 1rem
}

.g-4,.gx-4 {
    --bs-gutter-x: 2rem
}

.g-4,.gy-4 {
    --bs-gutter-y: 2rem
}

.g-5,.gx-5 {
    --bs-gutter-x: 4rem
}

.g-5,.gy-5 {
    --bs-gutter-y: 4rem
}

.g-6,.gx-6 {
    --bs-gutter-x: 8rem
}

.g-6,.gy-6 {
    --bs-gutter-y: 8rem
}

.g-7,.gx-7 {
    --bs-gutter-x: 16rem
}

.g-7,.gy-7 {
    --bs-gutter-y: 16rem
}

@media(min-width: 576px) {
    .col-sm {
        flex:1 0 0%
    }

    .row-cols-sm-auto>* {
        flex: 0 0 auto;
        width: auto
    }

    .row-cols-sm-1>* {
        flex: 0 0 auto;
        width: 100%
    }

    .row-cols-sm-2>* {
        flex: 0 0 auto;
        width: 50%
    }

    .row-cols-sm-3>* {
        flex: 0 0 auto;
        width: 33.3333333333%
    }

    .row-cols-sm-4>* {
        flex: 0 0 auto;
        width: 25%
    }

    .row-cols-sm-5>* {
        flex: 0 0 auto;
        width: 20%
    }

    .row-cols-sm-6>* {
        flex: 0 0 auto;
        width: 16.6666666667%
    }

    .col-sm-auto {
        flex: 0 0 auto;
        width: auto
    }

    .col-sm-1 {
        flex: 0 0 auto;
        width: 8.33333333%
    }

    .col-sm-2 {
        flex: 0 0 auto;
        width: 16.66666667%
    }

    .col-sm-3 {
        flex: 0 0 auto;
        width: 25%
    }

    .col-sm-4 {
        flex: 0 0 auto;
        width: 33.33333333%
    }

    .col-sm-5 {
        flex: 0 0 auto;
        width: 41.66666667%
    }

    .col-sm-6 {
        flex: 0 0 auto;
        width: 50%
    }

    .col-sm-7 {
        flex: 0 0 auto;
        width: 58.33333333%
    }

    .col-sm-8 {
        flex: 0 0 auto;
        width: 66.66666667%
    }

    .col-sm-9 {
        flex: 0 0 auto;
        width: 75%
    }

    .col-sm-10 {
        flex: 0 0 auto;
        width: 83.33333333%
    }

    .col-sm-11 {
        flex: 0 0 auto;
        width: 91.66666667%
    }

    .col-sm-12 {
        flex: 0 0 auto;
        width: 100%
    }

    .offset-sm-0 {
        margin-left: 0
    }

    .offset-sm-1 {
        margin-left: 8.33333333%
    }

    .offset-sm-2 {
        margin-left: 16.66666667%
    }

    .offset-sm-3 {
        margin-left: 25%
    }

    .offset-sm-4 {
        margin-left: 33.33333333%
    }

    .offset-sm-5 {
        margin-left: 41.66666667%
    }

    .offset-sm-6 {
        margin-left: 50%
    }

    .offset-sm-7 {
        margin-left: 58.33333333%
    }

    .offset-sm-8 {
        margin-left: 66.66666667%
    }

    .offset-sm-9 {
        margin-left: 75%
    }

    .offset-sm-10 {
        margin-left: 83.33333333%
    }

    .offset-sm-11 {
        margin-left: 91.66666667%
    }

    .g-sm-0,.gx-sm-0 {
        --bs-gutter-x: 0
    }

    .g-sm-0,.gy-sm-0 {
        --bs-gutter-y: 0
    }

    .g-sm-1,.gx-sm-1 {
        --bs-gutter-x: 0.25rem
    }

    .g-sm-1,.gy-sm-1 {
        --bs-gutter-y: 0.25rem
    }

    .g-sm-2,.gx-sm-2 {
        --bs-gutter-x: 0.5rem
    }

    .g-sm-2,.gy-sm-2 {
        --bs-gutter-y: 0.5rem
    }

    .g-sm-3,.gx-sm-3 {
        --bs-gutter-x: 1rem
    }

    .g-sm-3,.gy-sm-3 {
        --bs-gutter-y: 1rem
    }

    .g-sm-4,.gx-sm-4 {
        --bs-gutter-x: 2rem
    }

    .g-sm-4,.gy-sm-4 {
        --bs-gutter-y: 2rem
    }

    .g-sm-5,.gx-sm-5 {
        --bs-gutter-x: 4rem
    }

    .g-sm-5,.gy-sm-5 {
        --bs-gutter-y: 4rem
    }

    .g-sm-6,.gx-sm-6 {
        --bs-gutter-x: 8rem
    }

    .g-sm-6,.gy-sm-6 {
        --bs-gutter-y: 8rem
    }

    .g-sm-7,.gx-sm-7 {
        --bs-gutter-x: 16rem
    }

    .g-sm-7,.gy-sm-7 {
        --bs-gutter-y: 16rem
    }
}

@media(min-width: 768px) {
    .col-md {
        flex:1 0 0%
    }

    .row-cols-md-auto>* {
        flex: 0 0 auto;
        width: auto
    }

    .row-cols-md-1>* {
        flex: 0 0 auto;
        width: 100%
    }

    .row-cols-md-2>* {
        flex: 0 0 auto;
        width: 50%
    }

    .row-cols-md-3>* {
        flex: 0 0 auto;
        width: 33.3333333333%
    }

    .row-cols-md-4>* {
        flex: 0 0 auto;
        width: 25%
    }

    .row-cols-md-5>* {
        flex: 0 0 auto;
        width: 20%
    }

    .row-cols-md-6>* {
        flex: 0 0 auto;
        width: 16.6666666667%
    }

    .col-md-auto {
        flex: 0 0 auto;
        width: auto
    }

    .col-md-1 {
        flex: 0 0 auto;
        width: 8.33333333%
    }

    .col-md-2 {
        flex: 0 0 auto;
        width: 16.66666667%
    }

    .col-md-3 {
        flex: 0 0 auto;
        width: 25%
    }

    .col-md-4 {
        flex: 0 0 auto;
        width: 33.33333333%
    }

    .col-md-5 {
        flex: 0 0 auto;
        width: 41.66666667%
    }

    .col-md-6 {
        flex: 0 0 auto;
        width: 50%
    }

    .col-md-7 {
        flex: 0 0 auto;
        width: 58.33333333%
    }

    .col-md-8 {
        flex: 0 0 auto;
        width: 66.66666667%
    }

    .col-md-9 {
        flex: 0 0 auto;
        width: 75%
    }

    .col-md-10 {
        flex: 0 0 auto;
        width: 83.33333333%
    }

    .col-md-11 {
        flex: 0 0 auto;
        width: 91.66666667%
    }

    .col-md-12 {
        flex: 0 0 auto;
        width: 100%
    }

    .offset-md-0 {
        margin-left: 0
    }

    .offset-md-1 {
        margin-left: 8.33333333%
    }

    .offset-md-2 {
        margin-left: 16.66666667%
    }

    .offset-md-3 {
        margin-left: 25%
    }

    .offset-md-4 {
        margin-left: 33.33333333%
    }

    .offset-md-5 {
        margin-left: 41.66666667%
    }

    .offset-md-6 {
        margin-left: 50%
    }

    .offset-md-7 {
        margin-left: 58.33333333%
    }

    .offset-md-8 {
        margin-left: 66.66666667%
    }

    .offset-md-9 {
        margin-left: 75%
    }

    .offset-md-10 {
        margin-left: 83.33333333%
    }

    .offset-md-11 {
        margin-left: 91.66666667%
    }

    .g-md-0,.gx-md-0 {
        --bs-gutter-x: 0
    }

    .g-md-0,.gy-md-0 {
        --bs-gutter-y: 0
    }

    .g-md-1,.gx-md-1 {
        --bs-gutter-x: 0.25rem
    }

    .g-md-1,.gy-md-1 {
        --bs-gutter-y: 0.25rem
    }

    .g-md-2,.gx-md-2 {
        --bs-gutter-x: 0.5rem
    }

    .g-md-2,.gy-md-2 {
        --bs-gutter-y: 0.5rem
    }

    .g-md-3,.gx-md-3 {
        --bs-gutter-x: 1rem
    }

    .g-md-3,.gy-md-3 {
        --bs-gutter-y: 1rem
    }

    .g-md-4,.gx-md-4 {
        --bs-gutter-x: 2rem
    }

    .g-md-4,.gy-md-4 {
        --bs-gutter-y: 2rem
    }

    .g-md-5,.gx-md-5 {
        --bs-gutter-x: 4rem
    }

    .g-md-5,.gy-md-5 {
        --bs-gutter-y: 4rem
    }

    .g-md-6,.gx-md-6 {
        --bs-gutter-x: 8rem
    }

    .g-md-6,.gy-md-6 {
        --bs-gutter-y: 8rem
    }

    .g-md-7,.gx-md-7 {
        --bs-gutter-x: 16rem
    }

    .g-md-7,.gy-md-7 {
        --bs-gutter-y: 16rem
    }
}

@media(min-width: 992px) {
    .col-lg {
        flex:1 0 0%
    }

    .row-cols-lg-auto>* {
        flex: 0 0 auto;
        width: auto
    }

    .row-cols-lg-1>* {
        flex: 0 0 auto;
        width: 100%
    }

    .row-cols-lg-2>* {
        flex: 0 0 auto;
        width: 50%
    }

    .row-cols-lg-3>* {
        flex: 0 0 auto;
        width: 33.3333333333%
    }

    .row-cols-lg-4>* {
        flex: 0 0 auto;
        width: 25%
    }

    .row-cols-lg-5>* {
        flex: 0 0 auto;
        width: 20%
    }

    .row-cols-lg-6>* {
        flex: 0 0 auto;
        width: 16.6666666667%
    }

    .col-lg-auto {
        flex: 0 0 auto;
        width: auto
    }

    .col-lg-1 {
        flex: 0 0 auto;
        width: 8.33333333%
    }

    .col-lg-2 {
        flex: 0 0 auto;
        width: 16.66666667%
    }

    .col-lg-3 {
        flex: 0 0 auto;
        width: 25%
    }

    .col-lg-4 {
        flex: 0 0 auto;
        width: 33.33333333%
    }

    .col-lg-5 {
        flex: 0 0 auto;
        width: 41.66666667%
    }

    .col-lg-6 {
        flex: 0 0 auto;
        width: 50%
    }

    .col-lg-7 {
        flex: 0 0 auto;
        width: 58.33333333%
    }

    .col-lg-8 {
        flex: 0 0 auto;
        width: 66.66666667%
    }

    .col-lg-9 {
        flex: 0 0 auto;
        width: 75%
    }

    .col-lg-10 {
        flex: 0 0 auto;
        width: 83.33333333%
    }

    .col-lg-11 {
        flex: 0 0 auto;
        width: 91.66666667%
    }

    .col-lg-12 {
        flex: 0 0 auto;
        width: 100%
    }

    .offset-lg-0 {
        margin-left: 0
    }

    .offset-lg-1 {
        margin-left: 8.33333333%
    }

    .offset-lg-2 {
        margin-left: 16.66666667%
    }

    .offset-lg-3 {
        margin-left: 25%
    }

    .offset-lg-4 {
        margin-left: 33.33333333%
    }

    .offset-lg-5 {
        margin-left: 41.66666667%
    }

    .offset-lg-6 {
        margin-left: 50%
    }

    .offset-lg-7 {
        margin-left: 58.33333333%
    }

    .offset-lg-8 {
        margin-left: 66.66666667%
    }

    .offset-lg-9 {
        margin-left: 75%
    }

    .offset-lg-10 {
        margin-left: 83.33333333%
    }

    .offset-lg-11 {
        margin-left: 91.66666667%
    }

    .g-lg-0,.gx-lg-0 {
        --bs-gutter-x: 0
    }

    .g-lg-0,.gy-lg-0 {
        --bs-gutter-y: 0
    }

    .g-lg-1,.gx-lg-1 {
        --bs-gutter-x: 0.25rem
    }

    .g-lg-1,.gy-lg-1 {
        --bs-gutter-y: 0.25rem
    }

    .g-lg-2,.gx-lg-2 {
        --bs-gutter-x: 0.5rem
    }

    .g-lg-2,.gy-lg-2 {
        --bs-gutter-y: 0.5rem
    }

    .g-lg-3,.gx-lg-3 {
        --bs-gutter-x: 1rem
    }

    .g-lg-3,.gy-lg-3 {
        --bs-gutter-y: 1rem
    }

    .g-lg-4,.gx-lg-4 {
        --bs-gutter-x: 2rem
    }

    .g-lg-4,.gy-lg-4 {
        --bs-gutter-y: 2rem
    }

    .g-lg-5,.gx-lg-5 {
        --bs-gutter-x: 4rem
    }

    .g-lg-5,.gy-lg-5 {
        --bs-gutter-y: 4rem
    }

    .g-lg-6,.gx-lg-6 {
        --bs-gutter-x: 8rem
    }

    .g-lg-6,.gy-lg-6 {
        --bs-gutter-y: 8rem
    }

    .g-lg-7,.gx-lg-7 {
        --bs-gutter-x: 16rem
    }

    .g-lg-7,.gy-lg-7 {
        --bs-gutter-y: 16rem
    }
}

@media(min-width: 1280px) {
    .col-xl {
        flex:1 0 0%
    }

    .row-cols-xl-auto>* {
        flex: 0 0 auto;
        width: auto
    }

    .row-cols-xl-1>* {
        flex: 0 0 auto;
        width: 100%
    }

    .row-cols-xl-2>* {
        flex: 0 0 auto;
        width: 50%
    }

    .row-cols-xl-3>* {
        flex: 0 0 auto;
        width: 33.3333333333%
    }

    .row-cols-xl-4>* {
        flex: 0 0 auto;
        width: 25%
    }

    .row-cols-xl-5>* {
        flex: 0 0 auto;
        width: 20%
    }

    .row-cols-xl-6>* {
        flex: 0 0 auto;
        width: 16.6666666667%
    }

    .col-xl-auto {
        flex: 0 0 auto;
        width: auto
    }

    .col-xl-1 {
        flex: 0 0 auto;
        width: 8.33333333%
    }

    .col-xl-2 {
        flex: 0 0 auto;
        width: 16.66666667%
    }

    .col-xl-3 {
        flex: 0 0 auto;
        width: 25%
    }

    .col-xl-4 {
        flex: 0 0 auto;
        width: 33.33333333%
    }

    .col-xl-5 {
        flex: 0 0 auto;
        width: 41.66666667%
    }

    .col-xl-6 {
        flex: 0 0 auto;
        width: 50%
    }

    .col-xl-7 {
        flex: 0 0 auto;
        width: 58.33333333%
    }

    .col-xl-8 {
        flex: 0 0 auto;
        width: 66.66666667%
    }

    .col-xl-9 {
        flex: 0 0 auto;
        width: 75%
    }

    .col-xl-10 {
        flex: 0 0 auto;
        width: 83.33333333%
    }

    .col-xl-11 {
        flex: 0 0 auto;
        width: 91.66666667%
    }

    .col-xl-12 {
        flex: 0 0 auto;
        width: 100%
    }

    .offset-xl-0 {
        margin-left: 0
    }

    .offset-xl-1 {
        margin-left: 8.33333333%
    }

    .offset-xl-2 {
        margin-left: 16.66666667%
    }

    .offset-xl-3 {
        margin-left: 25%
    }

    .offset-xl-4 {
        margin-left: 33.33333333%
    }

    .offset-xl-5 {
        margin-left: 41.66666667%
    }

    .offset-xl-6 {
        margin-left: 50%
    }

    .offset-xl-7 {
        margin-left: 58.33333333%
    }

    .offset-xl-8 {
        margin-left: 66.66666667%
    }

    .offset-xl-9 {
        margin-left: 75%
    }

    .offset-xl-10 {
        margin-left: 83.33333333%
    }

    .offset-xl-11 {
        margin-left: 91.66666667%
    }

    .g-xl-0,.gx-xl-0 {
        --bs-gutter-x: 0
    }

    .g-xl-0,.gy-xl-0 {
        --bs-gutter-y: 0
    }

    .g-xl-1,.gx-xl-1 {
        --bs-gutter-x: 0.25rem
    }

    .g-xl-1,.gy-xl-1 {
        --bs-gutter-y: 0.25rem
    }

    .g-xl-2,.gx-xl-2 {
        --bs-gutter-x: 0.5rem
    }

    .g-xl-2,.gy-xl-2 {
        --bs-gutter-y: 0.5rem
    }

    .g-xl-3,.gx-xl-3 {
        --bs-gutter-x: 1rem
    }

    .g-xl-3,.gy-xl-3 {
        --bs-gutter-y: 1rem
    }

    .g-xl-4,.gx-xl-4 {
        --bs-gutter-x: 2rem
    }

    .g-xl-4,.gy-xl-4 {
        --bs-gutter-y: 2rem
    }

    .g-xl-5,.gx-xl-5 {
        --bs-gutter-x: 4rem
    }

    .g-xl-5,.gy-xl-5 {
        --bs-gutter-y: 4rem
    }

    .g-xl-6,.gx-xl-6 {
        --bs-gutter-x: 8rem
    }

    .g-xl-6,.gy-xl-6 {
        --bs-gutter-y: 8rem
    }

    .g-xl-7,.gx-xl-7 {
        --bs-gutter-x: 16rem
    }

    .g-xl-7,.gy-xl-7 {
        --bs-gutter-y: 16rem
    }
}

.table {
    --bs-table-color: var(--bs-body-color);
    --bs-table-bg: transparent;
    --bs-table-border-color: var(--bs-border-color);
    --bs-table-accent-bg: transparent;
    --bs-table-striped-color: var(--bs-body-color);
    --bs-table-striped-bg: rgba(0,0,0,.05);
    --bs-table-active-color: var(--bs-body-color);
    --bs-table-active-bg: rgba(0,0,0,.1);
    --bs-table-hover-color: var(--bs-body-color);
    --bs-table-hover-bg: rgba(0,0,0,.075);
    border-color: var(--bs-table-border-color);
    color: var(--bs-table-color);
    margin-bottom: 1rem;
    vertical-align: top;
    width: 100%
}

.table>:not(caption)>*>* {
    background-color: var(--bs-table-bg);
    border-bottom-width: 1px;
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
    padding: .5rem
}

.table>tbody {
    vertical-align: inherit
}

.table>thead {
    vertical-align: bottom
}

.table-group-divider {
    border-top: 2px solid
}

.caption-top {
    caption-side: top
}

.table-sm>:not(caption)>*>* {
    padding: .25rem
}

.table-bordered>:not(caption)>* {
    border-width: 1px 0
}

.table-bordered>:not(caption)>*>* {
    border-width: 0 1px
}

.table-borderless>:not(caption)>*>* {
    border-bottom-width: 0
}

.table-borderless>:not(:first-child) {
    border-top-width: 0
}

.table-striped-columns>:not(caption)>tr>:nth-child(2n),.table-striped>tbody>tr:nth-of-type(odd)>* {
    --bs-table-accent-bg: var(--bs-table-striped-bg);
    color: var(--bs-table-striped-color)
}

.table-active {
    --bs-table-accent-bg: var(--bs-table-active-bg);
    color: var(--bs-table-active-color)
}

.table-hover>tbody>tr:hover>* {
    --bs-table-accent-bg: var(--bs-table-hover-bg);
    color: var(--bs-table-hover-color)
}

.table-primary {
    --bs-table-color: #000;
    --bs-table-bg: #cfe2ff;
    --bs-table-border-color: #bacbe6;
    --bs-table-striped-bg: #c5d7f2;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #bacbe6;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #bfd1ec;
    --bs-table-hover-color: #000
}

.table-primary,.table-secondary {
    border-color: var(--bs-table-border-color);
    color: var(--bs-table-color)
}

.table-secondary {
    --bs-table-color: #000;
    --bs-table-bg: #e2e3e5;
    --bs-table-border-color: #cbccce;
    --bs-table-striped-bg: #d7d8da;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #cbccce;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #d1d2d4;
    --bs-table-hover-color: #000
}

.table-success {
    --bs-table-color: #000;
    --bs-table-bg: #d1e7dd;
    --bs-table-border-color: #bcd0c7;
    --bs-table-striped-bg: #c7dbd2;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #bcd0c7;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #c1d6cc;
    --bs-table-hover-color: #000
}

.table-info,.table-success {
    border-color: var(--bs-table-border-color);
    color: var(--bs-table-color)
}

.table-info {
    --bs-table-color: #000;
    --bs-table-bg: #cff4fc;
    --bs-table-border-color: #badce3;
    --bs-table-striped-bg: #c5e8ef;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #badce3;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #bfe2e9;
    --bs-table-hover-color: #000
}

.table-warning {
    --bs-table-color: #000;
    --bs-table-bg: #fff3cd;
    --bs-table-border-color: #e6dbb9;
    --bs-table-striped-bg: #f2e7c3;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #e6dbb9;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #ece1be;
    --bs-table-hover-color: #000
}

.table-danger,.table-warning {
    border-color: var(--bs-table-border-color);
    color: var(--bs-table-color)
}

.table-danger {
    --bs-table-color: #000;
    --bs-table-bg: #f8d7da;
    --bs-table-border-color: #dfc2c4;
    --bs-table-striped-bg: #eccccf;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #dfc2c4;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #e5c7ca;
    --bs-table-hover-color: #000
}

.table-light {
    --bs-table-color: #000;
    --bs-table-bg: #f8f9fa;
    --bs-table-border-color: #dfe0e1;
    --bs-table-striped-bg: #ecedee;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #dfe0e1;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #e5e6e7;
    --bs-table-hover-color: #000
}

.table-dark,.table-light {
    border-color: var(--bs-table-border-color);
    color: var(--bs-table-color)
}

.table-dark {
    --bs-table-color: #fff;
    --bs-table-bg: #212529;
    --bs-table-border-color: #373b3e;
    --bs-table-striped-bg: #2c3034;
    --bs-table-striped-color: #fff;
    --bs-table-active-bg: #373b3e;
    --bs-table-active-color: #fff;
    --bs-table-hover-bg: #323539;
    --bs-table-hover-color: #fff
}

.table-responsive {
    -webkit-overflow-scrolling: touch;
    overflow-x: auto
}

@media(max-width: 575.98px) {
    .table-responsive-sm {
        -webkit-overflow-scrolling:touch;
        overflow-x: auto
    }
}

@media(max-width: 767.98px) {
    .table-responsive-md {
        -webkit-overflow-scrolling:touch;
        overflow-x: auto
    }
}

@media(max-width: 991.98px) {
    .table-responsive-lg {
        -webkit-overflow-scrolling:touch;
        overflow-x: auto
    }
}

@media(max-width: 1279.98px) {
    .table-responsive-xl {
        -webkit-overflow-scrolling:touch;
        overflow-x: auto
    }
}

.form-label {
    margin-bottom: .5rem
}

.col-form-label {
    font-size: inherit;
    line-height: 1.5;
    margin-bottom: 0;
    padding-bottom: calc(.375rem + 1px);
    padding-top: calc(.375rem + 1px)
}

.col-form-label-lg {
    font-size: 1.25rem;
    padding-bottom: calc(.5rem + 1px);
    padding-top: calc(.5rem + 1px)
}

.col-form-label-sm {
    font-size: .875rem;
    padding-bottom: calc(.25rem + 1px);
    padding-top: calc(.25rem + 1px)
}

.form-text {
    color: #6c757d;
    font-size: .875em;
    margin-top: .25rem
}

.form-control {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-clip: padding-box;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: .375rem;
    color: #212529;
    display: block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: .375rem .75rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    width: 100%
}

@media(prefers-reduced-motion:reduce) {
    .form-control {
        transition: none
    }
}

.form-control[type=file] {
    overflow: hidden
}

.form-control[type=file]:not(:disabled):not([readonly]) {
    cursor: pointer
}

.form-control:focus {
    background-color: #fff;
    border-color: #86b7fe;
    box-shadow: 0 0 0 .25rem rgba(13,110,253,.25);
    color: #212529;
    outline: 0
}

.form-control::-webkit-date-and-time-value {
    height: 1.5em
}

.form-control::-moz-placeholder {
    color: #6c757d;
    opacity: 1
}

.form-control::placeholder {
    color: #6c757d;
    opacity: 1
}

.form-control:disabled {
    background-color: #e9ecef;
    opacity: 1
}

.form-control::file-selector-button {
    -webkit-margin-end: .75rem;
    background-color: #e9ecef;
    border: 0 solid;
    border-color: inherit;
    border-inline-end-width:1px;border-radius: 0;
    color: #212529;
    margin: -.375rem -.75rem;
    margin-inline-end:.75rem;padding: .375rem .75rem;
    pointer-events: none;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out
}

@media(prefers-reduced-motion:reduce) {
    .form-control::file-selector-button {
        transition: none
    }
}

.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
    background-color: #dde0e3
}

.form-control-plaintext {
    background-color: transparent;
    border: solid transparent;
    border-width: 1px 0;
    color: #212529;
    display: block;
    line-height: 1.5;
    margin-bottom: 0;
    padding: .375rem 0;
    width: 100%
}

.form-control-plaintext:focus {
    outline: 0
}

.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm {
    padding-left: 0;
    padding-right: 0
}

.form-control-sm {
    border-radius: .25rem;
    font-size: .875rem;
    min-height: calc(1.5em + .5rem + 2px);
    padding: .25rem .5rem
}

.form-control-sm::file-selector-button {
    -webkit-margin-end: .5rem;
    margin: -.25rem -.5rem;
    margin-inline-end:.5rem;padding: .25rem .5rem
}

.form-control-lg {
    border-radius: .5rem;
    font-size: 1.25rem;
    min-height: calc(1.5em + 1rem + 2px);
    padding: .5rem 1rem
}

.form-control-lg::file-selector-button {
    -webkit-margin-end: 1rem;
    margin: -.5rem -1rem;
    margin-inline-end:1rem;padding: .5rem 1rem
}

textarea.form-control {
    min-height: calc(1.5em + .75rem + 2px)
}

textarea.form-control-sm {
    min-height: calc(1.5em + .5rem + 2px)
}

textarea.form-control-lg {
    min-height: calc(1.5em + 1rem + 2px)
}

.form-control-color {
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem;
    width: 3rem
}

.form-control-color:not(:disabled):not([readonly]) {
    cursor: pointer
}

.form-control-color::-moz-color-swatch {
    border: 0!important;
    border-radius: .375rem
}

.form-control-color::-webkit-color-swatch {
    border-radius: .375rem
}

.form-control-color.form-control-sm {
    height: calc(1.5em + .5rem + 2px)
}

.form-control-color.form-control-lg {
    height: calc(1.5em + 1rem + 2px)
}

.form-select {
    -moz-padding-start: calc(.75rem - 3px);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNic+PHBhdGggZmlsbD0nbm9uZScgc3Ryb2tlPScjMzQzYTQwJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMicgZD0nbTIgNSA2IDYgNi02Jy8+PC9zdmc+);
    background-position: right .75rem center;
    background-repeat: no-repeat;
    background-size: 16px 12px;
    border: 1px solid #ced4da;
    border-radius: .375rem;
    color: #212529;
    display: block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: .375rem 2.25rem .375rem .75rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    width: 100%
}

@media(prefers-reduced-motion:reduce) {
    .form-select {
        transition: none
    }
}

.form-select:focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 .25rem rgba(13,110,253,.25);
    outline: 0
}

.form-select[multiple],.form-select[size]:not([size="1"]) {
    background-image: none;
    padding-right: .75rem
}

.form-select:disabled {
    background-color: #e9ecef
}

.form-select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #212529
}

.form-select-sm {
    border-radius: .25rem;
    font-size: .875rem;
    padding-bottom: .25rem;
    padding-left: .5rem;
    padding-top: .25rem
}

.form-select-lg {
    border-radius: .5rem;
    font-size: 1.25rem;
    padding-bottom: .5rem;
    padding-left: 1rem;
    padding-top: .5rem
}

.form-check {
    display: block;
    margin-bottom: .125rem;
    min-height: 1.5rem;
    padding-left: 1.5em
}

.form-check .form-check-input {
    float: left;
    margin-left: -1.5em
}

.form-check-reverse {
    padding-left: 0;
    padding-right: 1.5em;
    text-align: right
}

.form-check-reverse .form-check-input {
    float: right;
    margin-left: 0;
    margin-right: -1.5em
}

.form-check-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    border: 1px solid rgba(0,0,0,.25);
    height: 1em;
    margin-top: .25em;
    print-color-adjust: exact;
    vertical-align: top;
    width: 1em
}

.form-check-input[type=checkbox] {
    border-radius: .25em
}

.form-check-input[type=radio] {
    border-radius: 50%
}

.form-check-input:active {
    filter: brightness(90%)
}

.form-check-input:focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 .25rem rgba(13,110,253,.25);
    outline: 0
}

.form-check-input:checked {
    background-color: #0d6efd;
    border-color: #0d6efd
}

.form-check-input:checked[type=checkbox] {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCc+PHBhdGggZmlsbD0nbm9uZScgc3Ryb2tlPScjZmZmJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMycgZD0nbTYgMTAgMyAzIDYtNicvPjwvc3ZnPg==)
}

.form-check-input:checked[type=radio] {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPScyJyBmaWxsPScjZmZmJy8+PC9zdmc+)
}

.form-check-input[type=checkbox]:indeterminate {
    background-color: #0d6efd;
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCc+PHBhdGggZmlsbD0nbm9uZScgc3Ryb2tlPScjZmZmJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMycgZD0nTTYgMTBoOCcvPjwvc3ZnPg==);
    border-color: #0d6efd
}

.form-check-input:disabled {
    filter: none;
    opacity: .5;
    pointer-events: none
}

.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label {
    cursor: default;
    opacity: .5
}

.form-switch {
    padding-left: 2.5em
}

.form-switch .form-check-input {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPSczJyBmaWxsPSdyZ2JhKDAsIDAsIDAsIDAuMjUpJy8+PC9zdmc+);
    background-position: 0;
    border-radius: 2em;
    margin-left: -2.5em;
    transition: background-position .15s ease-in-out;
    width: 2em
}

@media(prefers-reduced-motion:reduce) {
    .form-switch .form-check-input {
        transition: none
    }
}

.form-switch .form-check-input:focus {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPSczJyBmaWxsPScjODZiN2ZlJy8+PC9zdmc+)
}

.form-switch .form-check-input:checked {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPSczJyBmaWxsPScjZmZmJy8+PC9zdmc+);
    background-position: 100%
}

.form-switch.form-check-reverse {
    padding-left: 0;
    padding-right: 2.5em
}

.form-switch.form-check-reverse .form-check-input {
    margin-left: 0;
    margin-right: -2.5em
}

.form-check-inline {
    display: inline-block;
    margin-right: 1rem
}

.btn-check {
    clip: rect(0,0,0,0);
    pointer-events: none;
    position: absolute
}

.btn-check:disabled+.btn,.btn-check[disabled]+.btn {
    filter: none;
    opacity: .65;
    pointer-events: none
}

.form-range {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    height: 1.5rem;
    padding: 0;
    width: 100%
}

.form-range:focus {
    outline: 0
}

.form-range:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)
}

.form-range:focus::-moz-range-thumb {
    box-shadow: 0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)
}

.form-range::-moz-focus-outer {
    border: 0
}

.form-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: #0d6efd;
    border: 0;
    border-radius: 1rem;
    height: 1rem;
    margin-top: -.25rem;
    -webkit-transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    width: 1rem
}

@media(prefers-reduced-motion:reduce) {
    .form-range::-webkit-slider-thumb {
        -webkit-transition: none;
        transition: none
    }
}

.form-range::-webkit-slider-thumb:active {
    background-color: #b6d4fe
}

.form-range::-webkit-slider-runnable-track {
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem;
    color: transparent;
    cursor: pointer;
    height: .5rem;
    width: 100%
}

.form-range::-moz-range-thumb {
    -moz-appearance: none;
    appearance: none;
    background-color: #0d6efd;
    border: 0;
    border-radius: 1rem;
    height: 1rem;
    -moz-transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    width: 1rem
}

@media(prefers-reduced-motion:reduce) {
    .form-range::-moz-range-thumb {
        -moz-transition: none;
        transition: none
    }
}

.form-range::-moz-range-thumb:active {
    background-color: #b6d4fe
}

.form-range::-moz-range-track {
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem;
    color: transparent;
    cursor: pointer;
    height: .5rem;
    width: 100%
}

.form-range:disabled {
    pointer-events: none
}

.form-range:disabled::-webkit-slider-thumb {
    background-color: #adb5bd
}

.form-range:disabled::-moz-range-thumb {
    background-color: #adb5bd
}

.form-floating {
    position: relative
}

.form-floating>.form-control,.form-floating>.form-control-plaintext,.form-floating>.form-select {
    height: calc(3.5rem + 2px);
    line-height: 1.25
}

.form-floating>label {
    border: 1px solid transparent;
    height: 100%;
    left: 0;
    overflow: hidden;
    padding: 1rem .75rem;
    pointer-events: none;
    position: absolute;
    text-overflow: ellipsis;
    top: 0;
    transform-origin: 0 0;
    transition: opacity .1s ease-in-out,transform .1s ease-in-out;
    white-space: nowrap;
    width: 100%
}

@media(prefers-reduced-motion:reduce) {
    .form-floating>label {
        transition: none
    }
}

.form-floating>.form-control,.form-floating>.form-control-plaintext {
    padding: 1rem .75rem
}

.form-floating>.form-control-plaintext::-moz-placeholder,.form-floating>.form-control::-moz-placeholder {
    color: transparent
}

.form-floating>.form-control-plaintext::placeholder,.form-floating>.form-control::placeholder {
    color: transparent
}

.form-floating>.form-control-plaintext:not(:-moz-placeholder-shown),.form-floating>.form-control:not(:-moz-placeholder-shown) {
    padding-bottom: .625rem;
    padding-top: 1.625rem
}

.form-floating>.form-control-plaintext:focus,.form-floating>.form-control-plaintext:not(:placeholder-shown),.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown) {
    padding-bottom: .625rem;
    padding-top: 1.625rem
}

.form-floating>.form-control-plaintext:-webkit-autofill,.form-floating>.form-control:-webkit-autofill {
    padding-bottom: .625rem;
    padding-top: 1.625rem
}

.form-floating>.form-select {
    padding-bottom: .625rem;
    padding-top: 1.625rem
}

.form-floating>.form-control:not(:-moz-placeholder-shown)~label {
    opacity: .65;
    transform: scale(.85) translateY(-.5rem) translateX(.15rem)
}

.form-floating>.form-control-plaintext~label,.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label {
    opacity: .65;
    transform: scale(.85) translateY(-.5rem) translateX(.15rem)
}

.form-floating>.form-control:-webkit-autofill~label {
    opacity: .65;
    transform: scale(.85) translateY(-.5rem) translateX(.15rem)
}

.form-floating>.form-control-plaintext~label {
    border-width: 1px 0
}

.input-group {
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 100%
}

.input-group>.form-control,.input-group>.form-floating,.input-group>.form-select {
    flex: 1 1 auto;
    min-width: 0;
    position: relative;
    width: 1%
}

.input-group>.form-control:focus,.input-group>.form-floating:focus-within,.input-group>.form-select:focus {
    z-index: 3
}

.input-group .btn {
    position: relative;
    z-index: 2
}

.input-group .btn:focus {
    z-index: 3
}

.input-group-text {
    align-items: center;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: .375rem;
    color: #212529;
    display: flex;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: .375rem .75rem;
    text-align: center;
    white-space: nowrap
}

.input-group-lg>.btn,.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text {
    border-radius: .5rem;
    font-size: 1.25rem;
    padding: .5rem 1rem
}

.input-group-sm>.btn,.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text {
    border-radius: .25rem;
    font-size: .875rem;
    padding: .25rem .5rem
}

.input-group-lg>.form-select,.input-group-sm>.form-select {
    padding-right: 3rem
}

.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-control,.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-select,.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control,.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select,.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0
}

.input-group>.form-floating:not(:first-child)>.form-control,.input-group>.form-floating:not(:first-child)>.form-select,.input-group>:not(:first-child):not(.dropdown-menu):not(.form-floating):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    margin-left: -1px
}

.valid-feedback {
    color: #198754;
    display: none;
    font-size: .875em;
    margin-top: .25rem;
    width: 100%
}

.valid-tooltip {
    background-color: rgba(25,135,84,.9);
    border-radius: .375rem;
    color: #fff;
    display: none;
    font-size: .875rem;
    margin-top: .1rem;
    max-width: 100%;
    padding: .25rem .5rem;
    position: absolute;
    top: 100%;
    z-index: 5
}

.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip {
    display: block
}

.form-control.is-valid,.was-validated .form-control:valid {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyMxOTg3NTQnIGQ9J00yLjMgNi43My42IDQuNTNjLS40LTEuMDQuNDYtMS40IDEuMS0uOGwxLjEgMS40IDMuNC0zLjhjLjYtLjYzIDEuNi0uMjcgMS4yLjdsLTQgNC42Yy0uNDMuNS0uOC40LTEuMS4xeicvPjwvc3ZnPg==);
    background-position: right calc(.375em + .1875rem) center;
    background-repeat: no-repeat;
    background-size: calc(.75em + .375rem) calc(.75em + .375rem);
    border-color: #198754;
    padding-right: calc(1.5em + .75rem)
}

.form-control.is-valid:focus,.was-validated .form-control:valid:focus {
    border-color: #198754;
    box-shadow: 0 0 0 .25rem rgba(25,135,84,.25)
}

.was-validated textarea.form-control:valid,textarea.form-control.is-valid {
    background-position: top calc(.375em + .1875rem) right calc(.375em + .1875rem);
    padding-right: calc(1.5em + .75rem)
}

.form-select.is-valid,.was-validated .form-select:valid {
    border-color: #198754
}

.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size="1"],.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size="1"] {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNic+PHBhdGggZmlsbD0nbm9uZScgc3Ryb2tlPScjMzQzYTQwJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMicgZD0nbTIgNSA2IDYgNi02Jy8+PC9zdmc+),url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyMxOTg3NTQnIGQ9J00yLjMgNi43My42IDQuNTNjLS40LTEuMDQuNDYtMS40IDEuMS0uOGwxLjEgMS40IDMuNC0zLjhjLjYtLjYzIDEuNi0uMjcgMS4yLjdsLTQgNC42Yy0uNDMuNS0uOC40LTEuMS4xeicvPjwvc3ZnPg==);
    background-position: right .75rem center,center right 2.25rem;
    background-size: 16px 12px,calc(.75em + .375rem) calc(.75em + .375rem);
    padding-right: 4.125rem
}

.form-select.is-valid:focus,.was-validated .form-select:valid:focus {
    border-color: #198754;
    box-shadow: 0 0 0 .25rem rgba(25,135,84,.25)
}

.form-control-color.is-valid,.was-validated .form-control-color:valid {
    width: calc(3.75rem + 1.5em)
}

.form-check-input.is-valid,.was-validated .form-check-input:valid {
    border-color: #198754
}

.form-check-input.is-valid:checked,.was-validated .form-check-input:valid:checked {
    background-color: #198754
}

.form-check-input.is-valid:focus,.was-validated .form-check-input:valid:focus {
    box-shadow: 0 0 0 .25rem rgba(25,135,84,.25)
}

.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label {
    color: #198754
}

.form-check-inline .form-check-input~.valid-feedback {
    margin-left: .5em
}

.input-group .form-control.is-valid,.input-group .form-select.is-valid,.was-validated .input-group .form-control:valid,.was-validated .input-group .form-select:valid {
    z-index: 1
}

.input-group .form-control.is-valid:focus,.input-group .form-select.is-valid:focus,.was-validated .input-group .form-control:valid:focus,.was-validated .input-group .form-select:valid:focus {
    z-index: 3
}

.invalid-feedback {
    color: #dc3545;
    display: none;
    font-size: .875em;
    margin-top: .25rem;
    width: 100%
}

.invalid-tooltip {
    background-color: rgba(220,53,69,.9);
    border-radius: .375rem;
    color: #fff;
    display: none;
    font-size: .875rem;
    margin-top: .1rem;
    max-width: 100%;
    padding: .25rem .5rem;
    position: absolute;
    top: 100%;
    z-index: 5
}

.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip {
    display: block
}

.form-control.is-invalid,.was-validated .form-control:invalid {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nbm9uZScgc3Ryb2tlPScjZGMzNTQ1Jz48Y2lyY2xlIGN4PSc2JyBjeT0nNicgcj0nNC41Jy8+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgZD0nTTUuOCAzLjZoLjRMNiA2LjV6Jy8+PGNpcmNsZSBjeD0nNicgY3k9JzguMicgcj0nLjYnIGZpbGw9JyNkYzM1NDUnIHN0cm9rZT0nbm9uZScvPjwvc3ZnPg==);
    background-position: right calc(.375em + .1875rem) center;
    background-repeat: no-repeat;
    background-size: calc(.75em + .375rem) calc(.75em + .375rem);
    border-color: #dc3545;
    padding-right: calc(1.5em + .75rem)
}

.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus {
    border-color: #dc3545;
    box-shadow: 0 0 0 .25rem rgba(220,53,69,.25)
}

.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid {
    background-position: top calc(.375em + .1875rem) right calc(.375em + .1875rem);
    padding-right: calc(1.5em + .75rem)
}

.form-select.is-invalid,.was-validated .form-select:invalid {
    border-color: #dc3545
}

.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size="1"],.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size="1"] {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNic+PHBhdGggZmlsbD0nbm9uZScgc3Ryb2tlPScjMzQzYTQwJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMicgZD0nbTIgNSA2IDYgNi02Jy8+PC9zdmc+),url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nbm9uZScgc3Ryb2tlPScjZGMzNTQ1Jz48Y2lyY2xlIGN4PSc2JyBjeT0nNicgcj0nNC41Jy8+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgZD0nTTUuOCAzLjZoLjRMNiA2LjV6Jy8+PGNpcmNsZSBjeD0nNicgY3k9JzguMicgcj0nLjYnIGZpbGw9JyNkYzM1NDUnIHN0cm9rZT0nbm9uZScvPjwvc3ZnPg==);
    background-position: right .75rem center,center right 2.25rem;
    background-size: 16px 12px,calc(.75em + .375rem) calc(.75em + .375rem);
    padding-right: 4.125rem
}

.form-select.is-invalid:focus,.was-validated .form-select:invalid:focus {
    border-color: #dc3545;
    box-shadow: 0 0 0 .25rem rgba(220,53,69,.25)
}

.form-control-color.is-invalid,.was-validated .form-control-color:invalid {
    width: calc(3.75rem + 1.5em)
}

.form-check-input.is-invalid,.was-validated .form-check-input:invalid {
    border-color: #dc3545
}

.form-check-input.is-invalid:checked,.was-validated .form-check-input:invalid:checked {
    background-color: #dc3545
}

.form-check-input.is-invalid:focus,.was-validated .form-check-input:invalid:focus {
    box-shadow: 0 0 0 .25rem rgba(220,53,69,.25)
}

.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label {
    color: #dc3545
}

.form-check-inline .form-check-input~.invalid-feedback {
    margin-left: .5em
}

.input-group .form-control.is-invalid,.input-group .form-select.is-invalid,.was-validated .input-group .form-control:invalid,.was-validated .input-group .form-select:invalid {
    z-index: 2
}

.input-group .form-control.is-invalid:focus,.input-group .form-select.is-invalid:focus,.was-validated .input-group .form-control:invalid:focus,.was-validated .input-group .form-select:invalid:focus {
    z-index: 3
}

.btn {
    --bs-btn-padding-x: 0.75rem;
    --bs-btn-padding-y: 0.375rem;
    --bs-btn-font-family: ;
    --bs-btn-font-size: 1rem;
    --bs-btn-font-weight: 400;
    --bs-btn-line-height: 1.5;
    --bs-btn-color: #212529;
    --bs-btn-bg: transparent;
    --bs-btn-border-width: 1px;
    --bs-btn-border-color: transparent;
    --bs-btn-border-radius: 0.375rem;
    --bs-btn-box-shadow: inset 0 1px 0 hsla(0,0%,100%,.15),0 1px 1px rgba(0,0,0,.075);
    --bs-btn-disabled-opacity: 0.65;
    --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb),.5);
    background-color: var(--bs-btn-bg);
    border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
    border-radius: var(--bs-btn-border-radius);
    color: var(--bs-btn-color);
    cursor: pointer;
    display: inline-block;
    font-family: var(--bs-btn-font-family);
    font-size: var(--bs-btn-font-size);
    font-weight: var(--bs-btn-font-weight);
    line-height: var(--bs-btn-line-height);
    padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
    text-align: center;
    text-decoration: none;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    vertical-align: middle
}

@media(prefers-reduced-motion:reduce) {
    .btn {
        transition: none
    }
}

.btn-check:focus+.btn,.btn:focus,.btn:hover {
    background-color: var(--bs-btn-hover-bg);
    border-color: var(--bs-btn-hover-border-color);
    color: var(--bs-btn-hover-color)
}

.btn-check:focus+.btn,.btn:focus {
    box-shadow: var(--bs-btn-focus-box-shadow);
    outline: 0
}

.btn-check:active+.btn,.btn-check:checked+.btn,.btn.active,.btn.show,.btn:active {
    background-color: var(--bs-btn-active-bg);
    border-color: var(--bs-btn-active-border-color);
    color: var(--bs-btn-active-color)
}

.btn-check:active+.btn:focus,.btn-check:checked+.btn:focus,.btn.active:focus,.btn.show:focus,.btn:active:focus {
    box-shadow: var(--bs-btn-focus-box-shadow)
}

.btn.disabled,.btn:disabled,fieldset:disabled .btn {
    background-color: var(--bs-btn-disabled-bg);
    border-color: var(--bs-btn-disabled-border-color);
    color: var(--bs-btn-disabled-color);
    opacity: var(--bs-btn-disabled-opacity);
    pointer-events: none
}

.btn-primary {
    --bs-btn-color: #fff;
    --bs-btn-bg: #0d6efd;
    --bs-btn-border-color: #0d6efd;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #0b5ed7;
    --bs-btn-hover-border-color: #0a58ca;
    --bs-btn-focus-shadow-rgb: 49,132,253;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #0a58ca;
    --bs-btn-active-border-color: #0a53be;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #0d6efd;
    --bs-btn-disabled-border-color: #0d6efd
}

.btn-secondary {
    --bs-btn-color: #fff;
    --bs-btn-bg: #6c757d;
    --bs-btn-border-color: #6c757d;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #5c636a;
    --bs-btn-hover-border-color: #565e64;
    --bs-btn-focus-shadow-rgb: 130,138,145;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #565e64;
    --bs-btn-active-border-color: #51585e;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #6c757d;
    --bs-btn-disabled-border-color: #6c757d
}

.btn-success {
    --bs-btn-color: #fff;
    --bs-btn-bg: #198754;
    --bs-btn-border-color: #198754;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #157347;
    --bs-btn-hover-border-color: #146c43;
    --bs-btn-focus-shadow-rgb: 60,153,110;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #146c43;
    --bs-btn-active-border-color: #13653f;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #198754;
    --bs-btn-disabled-border-color: #198754
}

.btn-info {
    --bs-btn-color: #000;
    --bs-btn-bg: #0dcaf0;
    --bs-btn-border-color: #0dcaf0;
    --bs-btn-hover-color: #000;
    --bs-btn-hover-bg: #31d2f2;
    --bs-btn-hover-border-color: #25cff2;
    --bs-btn-focus-shadow-rgb: 11,172,204;
    --bs-btn-active-color: #000;
    --bs-btn-active-bg: #3dd5f3;
    --bs-btn-active-border-color: #25cff2;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    --bs-btn-disabled-color: #000;
    --bs-btn-disabled-bg: #0dcaf0;
    --bs-btn-disabled-border-color: #0dcaf0
}

.btn-warning {
    --bs-btn-color: #000;
    --bs-btn-bg: #ffc107;
    --bs-btn-border-color: #ffc107;
    --bs-btn-hover-color: #000;
    --bs-btn-hover-bg: #ffca2c;
    --bs-btn-hover-border-color: #ffc720;
    --bs-btn-focus-shadow-rgb: 217,164,6;
    --bs-btn-active-color: #000;
    --bs-btn-active-bg: #ffcd39;
    --bs-btn-active-border-color: #ffc720;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    --bs-btn-disabled-color: #000;
    --bs-btn-disabled-bg: #ffc107;
    --bs-btn-disabled-border-color: #ffc107
}

.btn-danger {
    --bs-btn-color: #fff;
    --bs-btn-bg: #dc3545;
    --bs-btn-border-color: #dc3545;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #bb2d3b;
    --bs-btn-hover-border-color: #b02a37;
    --bs-btn-focus-shadow-rgb: 225,83,97;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #b02a37;
    --bs-btn-active-border-color: #a52834;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #dc3545;
    --bs-btn-disabled-border-color: #dc3545
}

.btn-light {
    --bs-btn-color: #000;
    --bs-btn-bg: #f8f9fa;
    --bs-btn-border-color: #f8f9fa;
    --bs-btn-hover-color: #000;
    --bs-btn-hover-bg: #d3d4d5;
    --bs-btn-hover-border-color: #c6c7c8;
    --bs-btn-focus-shadow-rgb: 211,212,213;
    --bs-btn-active-color: #000;
    --bs-btn-active-bg: #c6c7c8;
    --bs-btn-active-border-color: #babbbc;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    --bs-btn-disabled-color: #000;
    --bs-btn-disabled-bg: #f8f9fa;
    --bs-btn-disabled-border-color: #f8f9fa
}

.btn-dark {
    --bs-btn-color: #fff;
    --bs-btn-bg: #212529;
    --bs-btn-border-color: #212529;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #424649;
    --bs-btn-hover-border-color: #373b3e;
    --bs-btn-focus-shadow-rgb: 66,70,73;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #4d5154;
    --bs-btn-active-border-color: #373b3e;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #212529;
    --bs-btn-disabled-border-color: #212529
}

.btn-outline-primary {
    --bs-btn-color: #0d6efd;
    --bs-btn-border-color: #0d6efd;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #0d6efd;
    --bs-btn-hover-border-color: #0d6efd;
    --bs-btn-focus-shadow-rgb: 13,110,253;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #0d6efd;
    --bs-btn-active-border-color: #0d6efd;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    --bs-btn-disabled-color: #0d6efd;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #0d6efd;
    --bs-gradient: none
}

.btn-outline-secondary {
    --bs-btn-color: #6c757d;
    --bs-btn-border-color: #6c757d;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #6c757d;
    --bs-btn-hover-border-color: #6c757d;
    --bs-btn-focus-shadow-rgb: 108,117,125;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #6c757d;
    --bs-btn-active-border-color: #6c757d;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    --bs-btn-disabled-color: #6c757d;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #6c757d;
    --bs-gradient: none
}

.btn-outline-success {
    --bs-btn-color: #198754;
    --bs-btn-border-color: #198754;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #198754;
    --bs-btn-hover-border-color: #198754;
    --bs-btn-focus-shadow-rgb: 25,135,84;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #198754;
    --bs-btn-active-border-color: #198754;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    --bs-btn-disabled-color: #198754;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #198754;
    --bs-gradient: none
}

.btn-outline-info {
    --bs-btn-color: #0dcaf0;
    --bs-btn-border-color: #0dcaf0;
    --bs-btn-hover-color: #000;
    --bs-btn-hover-bg: #0dcaf0;
    --bs-btn-hover-border-color: #0dcaf0;
    --bs-btn-focus-shadow-rgb: 13,202,240;
    --bs-btn-active-color: #000;
    --bs-btn-active-bg: #0dcaf0;
    --bs-btn-active-border-color: #0dcaf0;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    --bs-btn-disabled-color: #0dcaf0;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #0dcaf0;
    --bs-gradient: none
}

.btn-outline-warning {
    --bs-btn-color: #ffc107;
    --bs-btn-border-color: #ffc107;
    --bs-btn-hover-color: #000;
    --bs-btn-hover-bg: #ffc107;
    --bs-btn-hover-border-color: #ffc107;
    --bs-btn-focus-shadow-rgb: 255,193,7;
    --bs-btn-active-color: #000;
    --bs-btn-active-bg: #ffc107;
    --bs-btn-active-border-color: #ffc107;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    --bs-btn-disabled-color: #ffc107;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #ffc107;
    --bs-gradient: none
}

.btn-outline-danger {
    --bs-btn-color: #dc3545;
    --bs-btn-border-color: #dc3545;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #dc3545;
    --bs-btn-hover-border-color: #dc3545;
    --bs-btn-focus-shadow-rgb: 220,53,69;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #dc3545;
    --bs-btn-active-border-color: #dc3545;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    --bs-btn-disabled-color: #dc3545;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #dc3545;
    --bs-gradient: none
}

.btn-outline-light {
    --bs-btn-color: #f8f9fa;
    --bs-btn-border-color: #f8f9fa;
    --bs-btn-hover-color: #000;
    --bs-btn-hover-bg: #f8f9fa;
    --bs-btn-hover-border-color: #f8f9fa;
    --bs-btn-focus-shadow-rgb: 248,249,250;
    --bs-btn-active-color: #000;
    --bs-btn-active-bg: #f8f9fa;
    --bs-btn-active-border-color: #f8f9fa;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    --bs-btn-disabled-color: #f8f9fa;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #f8f9fa;
    --bs-gradient: none
}

.btn-outline-dark {
    --bs-btn-color: #212529;
    --bs-btn-border-color: #212529;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #212529;
    --bs-btn-hover-border-color: #212529;
    --bs-btn-focus-shadow-rgb: 33,37,41;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #212529;
    --bs-btn-active-border-color: #212529;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    --bs-btn-disabled-color: #212529;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #212529;
    --bs-gradient: none
}

.btn-link {
    --bs-btn-font-weight: 400;
    --bs-btn-color: var(--bs-link-color);
    --bs-btn-bg: transparent;
    --bs-btn-border-color: transparent;
    --bs-btn-hover-color: var(--bs-link-hover-color);
    --bs-btn-hover-border-color: transparent;
    --bs-btn-active-color: var(--bs-link-hover-color);
    --bs-btn-active-border-color: transparent;
    --bs-btn-disabled-color: #6c757d;
    --bs-btn-disabled-border-color: transparent;
    --bs-btn-box-shadow: none;
    --bs-btn-focus-shadow-rgb: 49,132,253;
    text-decoration: underline
}

.btn-link:focus {
    color: var(--bs-btn-color)
}

.btn-link:hover {
    color: var(--bs-btn-hover-color)
}

.btn-group-lg>.btn,.btn-lg {
    --bs-btn-padding-y: 0.5rem;
    --bs-btn-padding-x: 1rem;
    --bs-btn-font-size: 1.25rem;
    --bs-btn-border-radius: 0.5rem
}

.btn-group-sm>.btn,.btn-sm {
    --bs-btn-padding-y: 0.25rem;
    --bs-btn-padding-x: 0.5rem;
    --bs-btn-font-size: 0.875rem;
    --bs-btn-border-radius: 0.25rem
}

.fade {
    transition: opacity .15s linear
}

@media(prefers-reduced-motion:reduce) {
    .fade {
        transition: none
    }
}

.fade:not(.show) {
    opacity: 0
}

.collapse:not(.show) {
    display: none
}

.collapsing {
    height: 0;
    overflow: hidden;
    transition: height .35s ease
}

@media(prefers-reduced-motion:reduce) {
    .collapsing {
        transition: none
    }
}

.collapsing.collapse-horizontal {
    height: auto;
    transition: width .35s ease;
    width: 0
}

@media(prefers-reduced-motion:reduce) {
    .collapsing.collapse-horizontal {
        transition: none
    }
}

.dropdown,.dropdown-center,.dropend,.dropstart,.dropup,.dropup-center {
    position: relative
}

.dropdown-toggle {
    white-space: nowrap
}

.dropdown-toggle:after {
    border-bottom: 0;
    border-left: .3em solid transparent;
    border-right: .3em solid transparent;
    border-top: .3em solid;
    content: "";
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em
}

.dropdown-toggle:empty:after {
    margin-left: 0
}

.dropdown-menu {
    --bs-dropdown-min-width: 10rem;
    --bs-dropdown-padding-x: 0;
    --bs-dropdown-padding-y: 0.5rem;
    --bs-dropdown-spacer: 0.125rem;
    --bs-dropdown-font-size: 1rem;
    --bs-dropdown-color: #212529;
    --bs-dropdown-bg: #fff;
    --bs-dropdown-border-color: var(--bs-border-color-translucent);
    --bs-dropdown-border-radius: 0.375rem;
    --bs-dropdown-border-width: 1px;
    --bs-dropdown-inner-border-radius: calc(0.375rem - 1px);
    --bs-dropdown-divider-bg: var(--bs-border-color-translucent);
    --bs-dropdown-divider-margin-y: 0.5rem;
    --bs-dropdown-box-shadow: 0 0.5rem 1rem rgba(0,0,0,.15);
    --bs-dropdown-link-color: #212529;
    --bs-dropdown-link-hover-color: #1e2125;
    --bs-dropdown-link-hover-bg: #e9ecef;
    --bs-dropdown-link-active-color: #fff;
    --bs-dropdown-link-active-bg: #0d6efd;
    --bs-dropdown-link-disabled-color: #adb5bd;
    --bs-dropdown-item-padding-x: 1rem;
    --bs-dropdown-item-padding-y: 0.25rem;
    --bs-dropdown-header-color: #6c757d;
    --bs-dropdown-header-padding-x: 1rem;
    --bs-dropdown-header-padding-y: 0.5rem;
    background-clip: padding-box;
    background-color: var(--bs-dropdown-bg);
    border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);
    border-radius: var(--bs-dropdown-border-radius);
    color: var(--bs-dropdown-color);
    display: none;
    font-size: var(--bs-dropdown-font-size);
    list-style: none;
    margin: 0;
    min-width: var(--bs-dropdown-min-width);
    padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);
    position: absolute;
    text-align: left;
    z-index: 1000
}

.dropdown-menu[data-bs-popper] {
    left: 0;
    margin-top: var(--bs-dropdown-spacer);
    top: 100%
}

.dropdown-menu-start {
    --bs-position: start
}

.dropdown-menu-start[data-bs-popper] {
    left: 0;
    right: auto
}

.dropdown-menu-end {
    --bs-position: end
}

.dropdown-menu-end[data-bs-popper] {
    left: auto;
    right: 0
}

@media(min-width: 576px) {
    .dropdown-menu-sm-start {
        --bs-position:start
    }

    .dropdown-menu-sm-start[data-bs-popper] {
        left: 0;
        right: auto
    }

    .dropdown-menu-sm-end {
        --bs-position: end
    }

    .dropdown-menu-sm-end[data-bs-popper] {
        left: auto;
        right: 0
    }
}

@media(min-width: 768px) {
    .dropdown-menu-md-start {
        --bs-position:start
    }

    .dropdown-menu-md-start[data-bs-popper] {
        left: 0;
        right: auto
    }

    .dropdown-menu-md-end {
        --bs-position: end
    }

    .dropdown-menu-md-end[data-bs-popper] {
        left: auto;
        right: 0
    }
}

@media(min-width: 992px) {
    .dropdown-menu-lg-start {
        --bs-position:start
    }

    .dropdown-menu-lg-start[data-bs-popper] {
        left: 0;
        right: auto
    }

    .dropdown-menu-lg-end {
        --bs-position: end
    }

    .dropdown-menu-lg-end[data-bs-popper] {
        left: auto;
        right: 0
    }
}

@media(min-width: 1280px) {
    .dropdown-menu-xl-start {
        --bs-position:start
    }

    .dropdown-menu-xl-start[data-bs-popper] {
        left: 0;
        right: auto
    }

    .dropdown-menu-xl-end {
        --bs-position: end
    }

    .dropdown-menu-xl-end[data-bs-popper] {
        left: auto;
        right: 0
    }
}

.dropup .dropdown-menu[data-bs-popper] {
    bottom: 100%;
    margin-bottom: var(--bs-dropdown-spacer);
    margin-top: 0;
    top: auto
}

.dropup .dropdown-toggle:after {
    border-bottom: .3em solid;
    border-left: .3em solid transparent;
    border-right: .3em solid transparent;
    border-top: 0;
    content: "";
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em
}

.dropup .dropdown-toggle:empty:after {
    margin-left: 0
}

.dropend .dropdown-menu[data-bs-popper] {
    left: 100%;
    margin-left: var(--bs-dropdown-spacer);
    margin-top: 0;
    right: auto;
    top: 0
}

.dropend .dropdown-toggle:after {
    border-bottom: .3em solid transparent;
    border-left: .3em solid;
    border-right: 0;
    border-top: .3em solid transparent;
    content: "";
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em
}

.dropend .dropdown-toggle:empty:after {
    margin-left: 0
}

.dropend .dropdown-toggle:after {
    vertical-align: 0
}

.dropstart .dropdown-menu[data-bs-popper] {
    left: auto;
    margin-right: var(--bs-dropdown-spacer);
    margin-top: 0;
    right: 100%;
    top: 0
}

.dropstart .dropdown-toggle:after {
    content: "";
    display: inline-block;
    display: none;
    margin-left: .255em;
    vertical-align: .255em
}

.dropstart .dropdown-toggle:before {
    border-bottom: .3em solid transparent;
    border-right: .3em solid;
    border-top: .3em solid transparent;
    content: "";
    display: inline-block;
    margin-right: .255em;
    vertical-align: .255em
}

.dropstart .dropdown-toggle:empty:after {
    margin-left: 0
}

.dropstart .dropdown-toggle:before {
    vertical-align: 0
}

.dropdown-divider {
    border-top: 1px solid var(--bs-dropdown-divider-bg);
    height: 0;
    margin: var(--bs-dropdown-divider-margin-y) 0;
    opacity: 1;
    overflow: hidden
}

.dropdown-item {
    background-color: transparent;
    border: 0;
    clear: both;
    color: var(--bs-dropdown-link-color);
    display: block;
    font-weight: 400;
    padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
    text-align: inherit;
    text-decoration: none;
    white-space: nowrap;
    width: 100%
}

.dropdown-item:focus,.dropdown-item:hover {
    background-color: var(--bs-dropdown-link-hover-bg);
    color: var(--bs-dropdown-link-hover-color)
}

.dropdown-item.active,.dropdown-item:active {
    background-color: var(--bs-dropdown-link-active-bg);
    color: var(--bs-dropdown-link-active-color);
    text-decoration: none
}

.dropdown-item.disabled,.dropdown-item:disabled {
    background-color: transparent;
    color: var(--bs-dropdown-link-disabled-color);
    pointer-events: none
}

.dropdown-menu.show {
    display: block
}

.dropdown-header {
    color: var(--bs-dropdown-header-color);
    display: block;
    font-size: .875rem;
    margin-bottom: 0;
    padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);
    white-space: nowrap
}

.dropdown-item-text {
    color: var(--bs-dropdown-link-color);
    display: block;
    padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x)
}

.dropdown-menu-dark {
    --bs-dropdown-color: #dee2e6;
    --bs-dropdown-bg: #343a40;
    --bs-dropdown-border-color: var(--bs-border-color-translucent);
    --bs-dropdown-box-shadow: ;
    --bs-dropdown-link-color: #dee2e6;
    --bs-dropdown-link-hover-color: #fff;
    --bs-dropdown-divider-bg: var(--bs-border-color-translucent);
    --bs-dropdown-link-hover-bg: hsla(0,0%,100%,.15);
    --bs-dropdown-link-active-color: #fff;
    --bs-dropdown-link-active-bg: #0d6efd;
    --bs-dropdown-link-disabled-color: #adb5bd;
    --bs-dropdown-header-color: #adb5bd
}

.btn-group,.btn-group-vertical {
    display: inline-flex;
    position: relative;
    vertical-align: middle
}

.btn-group-vertical>.btn,.btn-group>.btn {
    flex: 1 1 auto;
    position: relative
}

.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover {
    z-index: 1
}

.btn-toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start
}

.btn-toolbar .input-group {
    width: auto
}

.btn-group {
    border-radius: .375rem
}

.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child) {
    margin-left: -1px
}

.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn.dropdown-toggle-split:first-child,.btn-group>.btn:not(:last-child):not(.dropdown-toggle) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0
}

.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0
}

.dropdown-toggle-split {
    padding-left: .5625rem;
    padding-right: .5625rem
}

.dropdown-toggle-split:after,.dropend .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after {
    margin-left: 0
}

.dropstart .dropdown-toggle-split:before {
    margin-right: 0
}

.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split {
    padding-left: .375rem;
    padding-right: .375rem
}

.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split {
    padding-left: .75rem;
    padding-right: .75rem
}

.btn-group-vertical {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center
}

.btn-group-vertical>.btn,.btn-group-vertical>.btn-group {
    width: 100%
}

.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child) {
    margin-top: -1px
}

.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0
}

.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn~.btn {
    border-top-left-radius: 0;
    border-top-right-radius: 0
}

.nav {
    --bs-nav-link-padding-x: 1rem;
    --bs-nav-link-padding-y: 0.5rem;
    --bs-nav-link-font-weight: ;
    --bs-nav-link-color: var(--bs-link-color);
    --bs-nav-link-hover-color: var(--bs-link-hover-color);
    --bs-nav-link-disabled-color: #6c757d;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 0;
    padding-left: 0
}

.nav-link {
    color: var(--bs-nav-link-color);
    display: block;
    font-size: var(--bs-nav-link-font-size);
    font-weight: var(--bs-nav-link-font-weight);
    padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
    text-decoration: none;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out
}

@media(prefers-reduced-motion:reduce) {
    .nav-link {
        transition: none
    }
}

.nav-link:focus,.nav-link:hover {
    color: var(--bs-nav-link-hover-color)
}

.nav-link.disabled {
    color: var(--bs-nav-link-disabled-color);
    cursor: default;
    pointer-events: none
}

.nav-tabs {
    --bs-nav-tabs-border-width: 1px;
    --bs-nav-tabs-border-color: #dee2e6;
    --bs-nav-tabs-border-radius: 0.375rem;
    --bs-nav-tabs-link-hover-border-color: #e9ecef #e9ecef #dee2e6;
    --bs-nav-tabs-link-active-color: #495057;
    --bs-nav-tabs-link-active-bg: #fff;
    --bs-nav-tabs-link-active-border-color: #dee2e6 #dee2e6 #fff;
    border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color)
}

.nav-tabs .nav-link {
    background: 0 0;
    border: var(--bs-nav-tabs-border-width) solid transparent;
    border-top-left-radius: var(--bs-nav-tabs-border-radius);
    border-top-right-radius: var(--bs-nav-tabs-border-radius);
    margin-bottom: calc(var(--bs-nav-tabs-border-width)*-1)
}

.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover {
    border-color: var(--bs-nav-tabs-link-hover-border-color);
    isolation: isolate
}

.nav-tabs .nav-link.disabled,.nav-tabs .nav-link:disabled {
    background-color: transparent;
    border-color: transparent;
    color: var(--bs-nav-link-disabled-color)
}

.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active {
    background-color: var(--bs-nav-tabs-link-active-bg);
    border-color: var(--bs-nav-tabs-link-active-border-color);
    color: var(--bs-nav-tabs-link-active-color)
}

.nav-tabs .dropdown-menu {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin-top: calc(var(--bs-nav-tabs-border-width)*-1)
}

.nav-pills {
    --bs-nav-pills-border-radius: 0.375rem;
    --bs-nav-pills-link-active-color: #fff;
    --bs-nav-pills-link-active-bg: #0d6efd
}

.nav-pills .nav-link {
    background: 0 0;
    border: 0;
    border-radius: var(--bs-nav-pills-border-radius)
}

.nav-pills .nav-link:disabled {
    background-color: transparent;
    border-color: transparent;
    color: var(--bs-nav-link-disabled-color)
}

.nav-pills .nav-link.active,.nav-pills .show>.nav-link {
    background-color: var(--bs-nav-pills-link-active-bg);
    color: var(--bs-nav-pills-link-active-color)
}

.nav-fill .nav-item,.nav-fill>.nav-link {
    flex: 1 1 auto;
    text-align: center
}

.nav-justified .nav-item,.nav-justified>.nav-link {
    flex-basis: 0;
    flex-grow: 1;
    text-align: center
}

.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link {
    width: 100%
}

.tab-content>.tab-pane {
    display: none
}

.tab-content>.active {
    display: block
}

.navbar {
    --bs-navbar-padding-x: 0;
    --bs-navbar-padding-y: 0.5rem;
    --bs-navbar-color: rgba(0,0,0,.55);
    --bs-navbar-hover-color: rgba(0,0,0,.7);
    --bs-navbar-disabled-color: rgba(0,0,0,.3);
    --bs-navbar-active-color: rgba(0,0,0,.9);
    --bs-navbar-brand-padding-y: 0.3125rem;
    --bs-navbar-brand-margin-end: 1rem;
    --bs-navbar-brand-font-size: 1.25rem;
    --bs-navbar-brand-color: rgba(0,0,0,.9);
    --bs-navbar-brand-hover-color: rgba(0,0,0,.9);
    --bs-navbar-nav-link-padding-x: 0.5rem;
    --bs-navbar-toggler-padding-y: 0.25rem;
    --bs-navbar-toggler-padding-x: 0.75rem;
    --bs-navbar-toggler-font-size: 1.25rem;
    --bs-navbar-toggler-icon-bg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(0, 0, 0, 0.55)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
    --bs-navbar-toggler-border-color: rgba(0,0,0,.1);
    --bs-navbar-toggler-border-radius: 0.375rem;
    --bs-navbar-toggler-focus-width: 0.25rem;
    --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);
    position: relative
}

.navbar>.container,.navbar>.container-fluid,.navbar>.container-lg,.navbar>.container-md,.navbar>.container-sm,.navbar>.container-xl {
    align-items: center;
    display: flex;
    flex-wrap: inherit;
    justify-content: space-between
}

.navbar-brand {
    color: var(--bs-navbar-brand-color);
    font-size: var(--bs-navbar-brand-font-size);
    margin-right: var(--bs-navbar-brand-margin-end);
    padding-bottom: var(--bs-navbar-brand-padding-y);
    padding-top: var(--bs-navbar-brand-padding-y);
    text-decoration: none;
    white-space: nowrap
}

.navbar-brand:focus,.navbar-brand:hover {
    color: var(--bs-navbar-brand-hover-color)
}

.navbar-nav {
    --bs-nav-link-padding-x: 0;
    --bs-nav-link-padding-y: 0.5rem;
    --bs-nav-link-font-weight: ;
    --bs-nav-link-color: var(--bs-navbar-color);
    --bs-nav-link-hover-color: var(--bs-navbar-hover-color);
    --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-bottom: 0;
    padding-left: 0
}

.navbar-nav .nav-link.active,.navbar-nav .show>.nav-link {
    color: var(--bs-navbar-active-color)
}

.navbar-nav .dropdown-menu {
    position: static
}

.navbar-text {
    color: var(--bs-navbar-color);
    padding-bottom: .5rem;
    padding-top: .5rem
}

.navbar-text a,.navbar-text a:focus,.navbar-text a:hover {
    color: var(--bs-navbar-active-color)
}

.navbar-collapse {
    align-items: center;
    flex-basis: 100%;
    flex-grow: 1
}

.navbar-toggler {
    background-color: transparent;
    border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
    border-radius: var(--bs-navbar-toggler-border-radius);
    color: var(--bs-navbar-color);
    font-size: var(--bs-navbar-toggler-font-size);
    line-height: 1;
    padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
    transition: var(--bs-navbar-toggler-transition)
}

@media(prefers-reduced-motion:reduce) {
    .navbar-toggler {
        transition: none
    }
}

.navbar-toggler:hover {
    text-decoration: none
}

.navbar-toggler:focus {
    box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width);
    outline: 0;
    text-decoration: none
}

.navbar-toggler-icon {
    background-image: var(--bs-navbar-toggler-icon-bg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
    display: inline-block;
    height: 1.5em;
    vertical-align: middle;
    width: 1.5em
}

.navbar-nav-scroll {
    max-height: var(--bs-scroll-height,75vh);
    overflow-y: auto
}

@media(min-width: 576px) {
    .navbar-expand-sm {
        flex-wrap:nowrap;
        justify-content: flex-start
    }

    .navbar-expand-sm .navbar-nav {
        flex-direction: row
    }

    .navbar-expand-sm .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-sm .navbar-nav .nav-link {
        padding-left: var(--bs-navbar-nav-link-padding-x);
        padding-right: var(--bs-navbar-nav-link-padding-x)
    }

    .navbar-expand-sm .navbar-nav-scroll {
        overflow: visible
    }

    .navbar-expand-sm .navbar-collapse {
        display: flex!important;
        flex-basis: auto
    }

    .navbar-expand-sm .navbar-toggler {
        display: none
    }

    .navbar-expand-sm .offcanvas {
        background-color: transparent!important;
        border: 0!important;
        flex-grow: 1;
        height: auto!important;
        position: static;
        transform: none!important;
        transition: none;
        visibility: visible!important;
        width: auto!important;
        z-index: auto
    }

    .navbar-expand-sm .offcanvas .offcanvas-header {
        display: none
    }

    .navbar-expand-sm .offcanvas .offcanvas-body {
        display: flex;
        flex-grow: 0;
        overflow-y: visible;
        padding: 0
    }
}

@media(min-width: 768px) {
    .navbar-expand-md {
        flex-wrap:nowrap;
        justify-content: flex-start
    }

    .navbar-expand-md .navbar-nav {
        flex-direction: row
    }

    .navbar-expand-md .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-md .navbar-nav .nav-link {
        padding-left: var(--bs-navbar-nav-link-padding-x);
        padding-right: var(--bs-navbar-nav-link-padding-x)
    }

    .navbar-expand-md .navbar-nav-scroll {
        overflow: visible
    }

    .navbar-expand-md .navbar-collapse {
        display: flex!important;
        flex-basis: auto
    }

    .navbar-expand-md .navbar-toggler {
        display: none
    }

    .navbar-expand-md .offcanvas {
        background-color: transparent!important;
        border: 0!important;
        flex-grow: 1;
        height: auto!important;
        position: static;
        transform: none!important;
        transition: none;
        visibility: visible!important;
        width: auto!important;
        z-index: auto
    }

    .navbar-expand-md .offcanvas .offcanvas-header {
        display: none
    }

    .navbar-expand-md .offcanvas .offcanvas-body {
        display: flex;
        flex-grow: 0;
        overflow-y: visible;
        padding: 0
    }
}

@media(min-width: 992px) {
    .navbar-expand-lg {
        flex-wrap:nowrap;
        justify-content: flex-start
    }

    .navbar-expand-lg .navbar-nav {
        flex-direction: row
    }

    .navbar-expand-lg .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-lg .navbar-nav .nav-link {
        padding-left: var(--bs-navbar-nav-link-padding-x);
        padding-right: var(--bs-navbar-nav-link-padding-x)
    }

    .navbar-expand-lg .navbar-nav-scroll {
        overflow: visible
    }

    .navbar-expand-lg .navbar-collapse {
        display: flex!important;
        flex-basis: auto
    }

    .navbar-expand-lg .navbar-toggler {
        display: none
    }

    .navbar-expand-lg .offcanvas {
        background-color: transparent!important;
        border: 0!important;
        flex-grow: 1;
        height: auto!important;
        position: static;
        transform: none!important;
        transition: none;
        visibility: visible!important;
        width: auto!important;
        z-index: auto
    }

    .navbar-expand-lg .offcanvas .offcanvas-header {
        display: none
    }

    .navbar-expand-lg .offcanvas .offcanvas-body {
        display: flex;
        flex-grow: 0;
        overflow-y: visible;
        padding: 0
    }
}

@media(min-width: 1280px) {
    .navbar-expand-xl {
        flex-wrap:nowrap;
        justify-content: flex-start
    }

    .navbar-expand-xl .navbar-nav {
        flex-direction: row
    }

    .navbar-expand-xl .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-xl .navbar-nav .nav-link {
        padding-left: var(--bs-navbar-nav-link-padding-x);
        padding-right: var(--bs-navbar-nav-link-padding-x)
    }

    .navbar-expand-xl .navbar-nav-scroll {
        overflow: visible
    }

    .navbar-expand-xl .navbar-collapse {
        display: flex!important;
        flex-basis: auto
    }

    .navbar-expand-xl .navbar-toggler {
        display: none
    }

    .navbar-expand-xl .offcanvas {
        background-color: transparent!important;
        border: 0!important;
        flex-grow: 1;
        height: auto!important;
        position: static;
        transform: none!important;
        transition: none;
        visibility: visible!important;
        width: auto!important;
        z-index: auto
    }

    .navbar-expand-xl .offcanvas .offcanvas-header {
        display: none
    }

    .navbar-expand-xl .offcanvas .offcanvas-body {
        display: flex;
        flex-grow: 0;
        overflow-y: visible;
        padding: 0
    }
}

.navbar-expand {
    flex-wrap: nowrap;
    justify-content: flex-start
}

.navbar-expand .navbar-nav {
    flex-direction: row
}

.navbar-expand .navbar-nav .dropdown-menu {
    position: absolute
}

.navbar-expand .navbar-nav .nav-link {
    padding-left: var(--bs-navbar-nav-link-padding-x);
    padding-right: var(--bs-navbar-nav-link-padding-x)
}

.navbar-expand .navbar-nav-scroll {
    overflow: visible
}

.navbar-expand .navbar-collapse {
    display: flex!important;
    flex-basis: auto
}

.navbar-expand .navbar-toggler {
    display: none
}

.navbar-expand .offcanvas {
    background-color: transparent!important;
    border: 0!important;
    flex-grow: 1;
    height: auto!important;
    position: static;
    transform: none!important;
    transition: none;
    visibility: visible!important;
    width: auto!important;
    z-index: auto
}

.navbar-expand .offcanvas .offcanvas-header {
    display: none
}

.navbar-expand .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    overflow-y: visible;
    padding: 0
}

.navbar-dark {
    --bs-navbar-color: hsla(0,0%,100%,.55);
    --bs-navbar-hover-color: hsla(0,0%,100%,.75);
    --bs-navbar-disabled-color: hsla(0,0%,100%,.25);
    --bs-navbar-active-color: #fff;
    --bs-navbar-brand-color: #fff;
    --bs-navbar-brand-hover-color: #fff;
    --bs-navbar-toggler-border-color: hsla(0,0%,100%,.1);
    --bs-navbar-toggler-icon-bg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.55)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")
}

.card {
    --bs-card-spacer-y: 1rem;
    --bs-card-spacer-x: 1rem;
    --bs-card-title-spacer-y: 0.5rem;
    --bs-card-border-width: 1px;
    --bs-card-border-color: var(--bs-border-color-translucent);
    --bs-card-border-radius: 0.375rem;
    --bs-card-box-shadow: ;
    --bs-card-inner-border-radius: calc(0.375rem - 1px);
    --bs-card-cap-padding-y: 0.5rem;
    --bs-card-cap-padding-x: 1rem;
    --bs-card-cap-bg: rgba(0,0,0,.03);
    --bs-card-cap-color: ;
    --bs-card-height: ;
    --bs-card-color: ;
    --bs-card-bg: #fff;
    --bs-card-img-overlay-padding: 1rem;
    --bs-card-group-margin: 0.75rem;
    word-wrap: break-word;
    background-clip: border-box;
    background-color: var(--bs-card-bg);
    border: var(--bs-card-border-width) solid var(--bs-card-border-color);
    border-radius: var(--bs-card-border-radius);
    display: flex;
    flex-direction: column;
    height: var(--bs-card-height);
    min-width: 0;
    position: relative
}

.card>hr {
    margin-left: 0;
    margin-right: 0
}

.card>.list-group {
    border-bottom: inherit;
    border-top: inherit
}

.card>.list-group:first-child {
    border-top-left-radius: var(--bs-card-inner-border-radius);
    border-top-right-radius: var(--bs-card-inner-border-radius);
    border-top-width: 0
}

.card>.list-group:last-child {
    border-bottom-left-radius: var(--bs-card-inner-border-radius);
    border-bottom-right-radius: var(--bs-card-inner-border-radius);
    border-bottom-width: 0
}

.card>.card-header+.list-group,.card>.list-group+.card-footer {
    border-top: 0
}

.card-body {
    color: var(--bs-card-color);
    flex: 1 1 auto;
    padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x)
}

.card-title {
    margin-bottom: var(--bs-card-title-spacer-y)
}

.card-subtitle {
    margin-top: calc(var(--bs-card-title-spacer-y)*-.5)
}

.card-subtitle,.card-text:last-child {
    margin-bottom: 0
}

.card-link+.card-link {
    margin-left: var(--bs-card-spacer-x)
}

.card-header {
    background-color: var(--bs-card-cap-bg);
    border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color);
    color: var(--bs-card-cap-color);
    margin-bottom: 0;
    padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x)
}

.card-header:first-child {
    border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0
}

.card-footer {
    background-color: var(--bs-card-cap-bg);
    border-top: var(--bs-card-border-width) solid var(--bs-card-border-color);
    color: var(--bs-card-cap-color);
    padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x)
}

.card-footer:last-child {
    border-radius: 0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius)
}

.card-header-tabs {
    border-bottom: 0;
    margin-bottom: calc(var(--bs-card-cap-padding-y)*-1);
    margin-left: calc(var(--bs-card-cap-padding-x)*-.5);
    margin-right: calc(var(--bs-card-cap-padding-x)*-.5)
}

.card-header-tabs .nav-link.active {
    background-color: var(--bs-card-bg);
    border-bottom-color: var(--bs-card-bg)
}

.card-header-pills {
    margin-left: calc(var(--bs-card-cap-padding-x)*-.5);
    margin-right: calc(var(--bs-card-cap-padding-x)*-.5)
}

.card-img-overlay {
    border-radius: var(--bs-card-inner-border-radius);
    bottom: 0;
    left: 0;
    padding: var(--bs-card-img-overlay-padding);
    position: absolute;
    right: 0;
    top: 0
}

.card-img,.card-img-bottom,.card-img-top {
    width: 100%
}

.card-img,.card-img-top {
    border-top-left-radius: var(--bs-card-inner-border-radius);
    border-top-right-radius: var(--bs-card-inner-border-radius)
}

.card-img,.card-img-bottom {
    border-bottom-left-radius: var(--bs-card-inner-border-radius);
    border-bottom-right-radius: var(--bs-card-inner-border-radius)
}

.card-group>.card {
    margin-bottom: var(--bs-card-group-margin)
}

@media(min-width: 576px) {
    .card-group {
        display:flex;
        flex-flow: row wrap
    }

    .card-group>.card {
        flex: 1 0 0%;
        margin-bottom: 0
    }

    .card-group>.card+.card {
        border-left: 0;
        margin-left: 0
    }

    .card-group>.card:not(:last-child) {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0
    }

    .card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top {
        border-top-right-radius: 0
    }

    .card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom {
        border-bottom-right-radius: 0
    }

    .card-group>.card:not(:first-child) {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0
    }

    .card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top {
        border-top-left-radius: 0
    }

    .card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom {
        border-bottom-left-radius: 0
    }
}

.accordion {
    --bs-accordion-color: #000;
    --bs-accordion-bg: #fff;
    --bs-accordion-transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,border-radius 0.15s ease;
    --bs-accordion-border-color: var(--bs-border-color);
    --bs-accordion-border-width: 1px;
    --bs-accordion-border-radius: 0.375rem;
    --bs-accordion-inner-border-radius: calc(0.375rem - 1px);
    --bs-accordion-btn-padding-x: 1.25rem;
    --bs-accordion-btn-padding-y: 1rem;
    --bs-accordion-btn-color: var(--bs-body-color);
    --bs-accordion-btn-bg: var(--bs-accordion-bg);
    --bs-accordion-btn-icon: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='var(--bs-body-color)'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
    --bs-accordion-btn-icon-width: 1.25rem;
    --bs-accordion-btn-icon-transform: rotate(-180deg);
    --bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;
    --bs-accordion-btn-active-icon: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
    --bs-accordion-btn-focus-border-color: #86b7fe;
    --bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(13,110,253,.25);
    --bs-accordion-body-padding-x: 1.25rem;
    --bs-accordion-body-padding-y: 1rem;
    --bs-accordion-active-color: #0c63e4;
    --bs-accordion-active-bg: #e7f1ff
}

.accordion-button {
    align-items: center;
    background-color: var(--bs-accordion-btn-bg);
    border: 0;
    border-radius: 0;
    color: var(--bs-accordion-btn-color);
    display: flex;
    font-size: 1rem;
    overflow-anchor: none;
    padding: var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);
    position: relative;
    text-align: left;
    transition: var(--bs-accordion-transition);
    width: 100%
}

@media(prefers-reduced-motion:reduce) {
    .accordion-button {
        transition: none
    }
}

.accordion-button:not(.collapsed) {
    background-color: var(--bs-accordion-active-bg);
    box-shadow: inset 0 calc(var(--bs-accordion-border-width)*-1) 0 var(--bs-accordion-border-color);
    color: var(--bs-accordion-active-color)
}

.accordion-button:not(.collapsed):after {
    background-image: var(--bs-accordion-btn-active-icon);
    transform: var(--bs-accordion-btn-icon-transform)
}

.accordion-button:after {
    background-image: var(--bs-accordion-btn-icon);
    background-repeat: no-repeat;
    background-size: var(--bs-accordion-btn-icon-width);
    content: "";
    flex-shrink: 0;
    height: var(--bs-accordion-btn-icon-width);
    margin-left: auto;
    transition: var(--bs-accordion-btn-icon-transition);
    width: var(--bs-accordion-btn-icon-width)
}

@media(prefers-reduced-motion:reduce) {
    .accordion-button:after {
        transition: none
    }
}

.accordion-button:hover {
    z-index: 2
}

.accordion-button:focus {
    border-color: var(--bs-accordion-btn-focus-border-color);
    box-shadow: var(--bs-accordion-btn-focus-box-shadow);
    outline: 0;
    z-index: 3
}

.accordion-header {
    margin-bottom: 0
}

.accordion-item {
    background-color: var(--bs-accordion-bg);
    border: var(--bs-accordion-border-width) solid var(--bs-accordion-border-color);
    color: var(--bs-accordion-color)
}

.accordion-item:first-of-type {
    border-top-left-radius: var(--bs-accordion-border-radius);
    border-top-right-radius: var(--bs-accordion-border-radius)
}

.accordion-item:first-of-type .accordion-button {
    border-top-left-radius: var(--bs-accordion-inner-border-radius);
    border-top-right-radius: var(--bs-accordion-inner-border-radius)
}

.accordion-item:not(:first-of-type) {
    border-top: 0
}

.accordion-item:last-of-type {
    border-bottom-left-radius: var(--bs-accordion-border-radius);
    border-bottom-right-radius: var(--bs-accordion-border-radius)
}

.accordion-item:last-of-type .accordion-button.collapsed {
    border-bottom-left-radius: var(--bs-accordion-inner-border-radius);
    border-bottom-right-radius: var(--bs-accordion-inner-border-radius)
}

.accordion-item:last-of-type .accordion-collapse {
    border-bottom-left-radius: var(--bs-accordion-border-radius);
    border-bottom-right-radius: var(--bs-accordion-border-radius)
}

.accordion-body {
    padding: var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x)
}

.accordion-flush .accordion-collapse {
    border-width: 0
}

.accordion-flush .accordion-item {
    border-left: 0;
    border-radius: 0;
    border-right: 0
}

.accordion-flush .accordion-item:first-child {
    border-top: 0
}

.accordion-flush .accordion-item:last-child {
    border-bottom: 0
}

.accordion-flush .accordion-item .accordion-button {
    border-radius: 0
}

.breadcrumb {
    --bs-breadcrumb-padding-x: 0;
    --bs-breadcrumb-padding-y: 0;
    --bs-breadcrumb-margin-bottom: 1rem;
    --bs-breadcrumb-bg: ;
    --bs-breadcrumb-border-radius: ;
    --bs-breadcrumb-divider-color: #6c757d;
    --bs-breadcrumb-item-padding-x: 0.5rem;
    --bs-breadcrumb-item-active-color: #6c757d;
    background-color: var(--bs-breadcrumb-bg);
    border-radius: var(--bs-breadcrumb-border-radius);
    display: flex;
    flex-wrap: wrap;
    font-size: var(--bs-breadcrumb-font-size);
    list-style: none;
    margin-bottom: var(--bs-breadcrumb-margin-bottom);
    padding: var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x)
}

.breadcrumb-item+.breadcrumb-item {
    padding-left: var(--bs-breadcrumb-item-padding-x)
}

.breadcrumb-item+.breadcrumb-item:before {
    color: var(--bs-breadcrumb-divider-color);
    content: var(--bs-breadcrumb-divider,"/");
    float: left;
    padding-right: var(--bs-breadcrumb-item-padding-x)
}

.breadcrumb-item.active {
    color: var(--bs-breadcrumb-item-active-color)
}

.pagination {
    --bs-pagination-padding-x: 0.75rem;
    --bs-pagination-padding-y: 0.375rem;
    --bs-pagination-font-size: 1rem;
    --bs-pagination-color: var(--bs-link-color);
    --bs-pagination-bg: #fff;
    --bs-pagination-border-width: 1px;
    --bs-pagination-border-color: #dee2e6;
    --bs-pagination-border-radius: 0.375rem;
    --bs-pagination-hover-color: var(--bs-link-hover-color);
    --bs-pagination-hover-bg: #e9ecef;
    --bs-pagination-hover-border-color: #dee2e6;
    --bs-pagination-focus-color: var(--bs-link-hover-color);
    --bs-pagination-focus-bg: #e9ecef;
    --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(13,110,253,.25);
    --bs-pagination-active-color: #fff;
    --bs-pagination-active-bg: #0d6efd;
    --bs-pagination-active-border-color: #0d6efd;
    --bs-pagination-disabled-color: #6c757d;
    --bs-pagination-disabled-bg: #fff;
    --bs-pagination-disabled-border-color: #dee2e6;
    display: flex;
    list-style: none;
    padding-left: 0
}

.page-link {
    background-color: var(--bs-pagination-bg);
    border: var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);
    color: var(--bs-pagination-color);
    display: block;
    font-size: var(--bs-pagination-font-size);
    padding: var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);
    position: relative;
    text-decoration: none;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out
}

@media(prefers-reduced-motion:reduce) {
    .page-link {
        transition: none
    }
}

.page-link:hover {
    background-color: var(--bs-pagination-hover-bg);
    border-color: var(--bs-pagination-hover-border-color);
    color: var(--bs-pagination-hover-color);
    z-index: 2
}

.page-link:focus {
    background-color: var(--bs-pagination-focus-bg);
    box-shadow: var(--bs-pagination-focus-box-shadow);
    color: var(--bs-pagination-focus-color);
    outline: 0;
    z-index: 3
}

.active>.page-link,.page-link.active {
    background-color: var(--bs-pagination-active-bg);
    border-color: var(--bs-pagination-active-border-color);
    color: var(--bs-pagination-active-color);
    z-index: 3
}

.disabled>.page-link,.page-link.disabled {
    background-color: var(--bs-pagination-disabled-bg);
    border-color: var(--bs-pagination-disabled-border-color);
    color: var(--bs-pagination-disabled-color);
    pointer-events: none
}

.page-item:not(:first-child) .page-link {
    margin-left: -1px
}

.page-item:first-child .page-link {
    border-bottom-left-radius: var(--bs-pagination-border-radius);
    border-top-left-radius: var(--bs-pagination-border-radius)
}

.page-item:last-child .page-link {
    border-bottom-right-radius: var(--bs-pagination-border-radius);
    border-top-right-radius: var(--bs-pagination-border-radius)
}

.pagination-lg {
    --bs-pagination-padding-x: 1.5rem;
    --bs-pagination-padding-y: 0.75rem;
    --bs-pagination-font-size: 1.25rem;
    --bs-pagination-border-radius: 0.5rem
}

.pagination-sm {
    --bs-pagination-padding-x: 0.5rem;
    --bs-pagination-padding-y: 0.25rem;
    --bs-pagination-font-size: 0.875rem;
    --bs-pagination-border-radius: 0.25rem
}

.badge {
    --bs-badge-padding-x: 0.65em;
    --bs-badge-padding-y: 0.35em;
    --bs-badge-font-size: 0.75em;
    --bs-badge-font-weight: 700;
    --bs-badge-color: #fff;
    --bs-badge-border-radius: 0.375rem;
    border-radius: var(--bs-badge-border-radius);
    color: var(--bs-badge-color);
    display: inline-block;
    font-size: var(--bs-badge-font-size);
    font-weight: var(--bs-badge-font-weight);
    line-height: 1;
    padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);
    text-align: center;
    vertical-align: baseline;
    white-space: nowrap
}

.badge:empty {
    display: none
}

.btn .badge {
    position: relative;
    top: -1px
}

.alert {
    --bs-alert-bg: transparent;
    --bs-alert-padding-x: 1rem;
    --bs-alert-padding-y: 1rem;
    --bs-alert-margin-bottom: 1rem;
    --bs-alert-color: inherit;
    --bs-alert-border-color: transparent;
    --bs-alert-border: 1px solid var(--bs-alert-border-color);
    --bs-alert-border-radius: 0.375rem;
    background-color: var(--bs-alert-bg);
    border: var(--bs-alert-border);
    border-radius: var(--bs-alert-border-radius);
    color: var(--bs-alert-color);
    margin-bottom: var(--bs-alert-margin-bottom);
    padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x);
    position: relative
}

.alert-heading {
    color: inherit
}

.alert-link {
    font-weight: 700
}

.alert-dismissible {
    padding-right: 3rem
}

.alert-dismissible .btn-close {
    padding: 1.25rem 1rem;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2
}

.alert-primary {
    --bs-alert-color: #084298;
    --bs-alert-bg: #cfe2ff;
    --bs-alert-border-color: #b6d4fe
}

.alert-primary .alert-link {
    color: #06357a
}

.alert-secondary {
    --bs-alert-color: #41464b;
    --bs-alert-bg: #e2e3e5;
    --bs-alert-border-color: #d3d6d8
}

.alert-secondary .alert-link {
    color: #34383c
}

.alert-success {
    --bs-alert-color: #0f5132;
    --bs-alert-bg: #d1e7dd;
    --bs-alert-border-color: #badbcc
}

.alert-success .alert-link {
    color: #0c4128
}

.alert-info {
    --bs-alert-color: #055160;
    --bs-alert-bg: #cff4fc;
    --bs-alert-border-color: #b6effb
}

.alert-info .alert-link {
    color: #04414d
}

.alert-warning {
    --bs-alert-color: #664d03;
    --bs-alert-bg: #fff3cd;
    --bs-alert-border-color: #ffecb5
}

.alert-warning .alert-link {
    color: #523e02
}

.alert-danger {
    --bs-alert-color: #842029;
    --bs-alert-bg: #f8d7da;
    --bs-alert-border-color: #f5c2c7
}

.alert-danger .alert-link {
    color: #6a1a21
}

.alert-light {
    --bs-alert-color: #636464;
    --bs-alert-bg: #fefefe;
    --bs-alert-border-color: #fdfdfe
}

.alert-light .alert-link {
    color: #4f5050
}

.alert-dark {
    --bs-alert-color: #141619;
    --bs-alert-bg: #d3d3d4;
    --bs-alert-border-color: #bcbebf
}

.alert-dark .alert-link {
    color: #101214
}

@keyframes progress-bar-stripes {
    0% {
        background-position-x: 1rem
    }
}

.progress {
    --bs-progress-height: 1rem;
    --bs-progress-font-size: 0.75rem;
    --bs-progress-bg: #e9ecef;
    --bs-progress-border-radius: 0.375rem;
    --bs-progress-box-shadow: inset 0 1px 2px rgba(0,0,0,.075);
    --bs-progress-bar-color: #fff;
    --bs-progress-bar-bg: #0d6efd;
    --bs-progress-bar-transition: width 0.6s ease;
    background-color: var(--bs-progress-bg);
    border-radius: var(--bs-progress-border-radius);
    font-size: var(--bs-progress-font-size);
    height: var(--bs-progress-height)
}

.progress,.progress-bar {
    display: flex;
    overflow: hidden
}

.progress-bar {
    background-color: var(--bs-progress-bar-bg);
    color: var(--bs-progress-bar-color);
    flex-direction: column;
    justify-content: center;
    text-align: center;
    transition: var(--bs-progress-bar-transition);
    white-space: nowrap
}

@media(prefers-reduced-motion:reduce) {
    .progress-bar {
        transition: none
    }
}

.progress-bar-striped {
    background-image: linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);
    background-size: var(--bs-progress-height) var(--bs-progress-height)
}

.progress-bar-animated {
    animation: progress-bar-stripes 1s linear infinite
}

@media(prefers-reduced-motion:reduce) {
    .progress-bar-animated {
        animation: none
    }
}

.list-group {
    --bs-list-group-color: #212529;
    --bs-list-group-bg: #fff;
    --bs-list-group-border-color: rgba(0,0,0,.125);
    --bs-list-group-border-width: 1px;
    --bs-list-group-border-radius: 0.375rem;
    --bs-list-group-item-padding-x: 1rem;
    --bs-list-group-item-padding-y: 0.5rem;
    --bs-list-group-action-color: #495057;
    --bs-list-group-action-hover-color: #495057;
    --bs-list-group-action-hover-bg: #f8f9fa;
    --bs-list-group-action-active-color: #212529;
    --bs-list-group-action-active-bg: #e9ecef;
    --bs-list-group-disabled-color: #6c757d;
    --bs-list-group-disabled-bg: #fff;
    --bs-list-group-active-color: #fff;
    --bs-list-group-active-bg: #0d6efd;
    --bs-list-group-active-border-color: #0d6efd;
    border-radius: var(--bs-list-group-border-radius);
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    padding-left: 0
}

.list-group-numbered {
    counter-reset: section;
    list-style-type: none
}

.list-group-numbered>.list-group-item:before {
    content: counters(section,".") ". ";
    counter-increment: section
}

.list-group-item-action {
    color: var(--bs-list-group-action-color);
    text-align: inherit;
    width: 100%
}

.list-group-item-action:focus,.list-group-item-action:hover {
    background-color: var(--bs-list-group-action-hover-bg);
    color: var(--bs-list-group-action-hover-color);
    text-decoration: none;
    z-index: 1
}

.list-group-item-action:active {
    background-color: var(--bs-list-group-action-active-bg);
    color: var(--bs-list-group-action-active-color)
}

.list-group-item {
    background-color: var(--bs-list-group-bg);
    border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);
    color: var(--bs-list-group-color);
    display: block;
    padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);
    position: relative;
    text-decoration: none
}

.list-group-item:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit
}

.list-group-item:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit
}

.list-group-item.disabled,.list-group-item:disabled {
    background-color: var(--bs-list-group-disabled-bg);
    color: var(--bs-list-group-disabled-color);
    pointer-events: none
}

.list-group-item.active {
    background-color: var(--bs-list-group-active-bg);
    border-color: var(--bs-list-group-active-border-color);
    color: var(--bs-list-group-active-color);
    z-index: 2
}

.list-group-item+.list-group-item {
    border-top-width: 0
}

.list-group-item+.list-group-item.active {
    border-top-width: var(--bs-list-group-border-width);
    margin-top: calc(var(--bs-list-group-border-width)*-1)
}

.list-group-horizontal {
    flex-direction: row
}

.list-group-horizontal>.list-group-item:first-child {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0
}

.list-group-horizontal>.list-group-item:last-child {
    border-bottom-left-radius: 0;
    border-top-right-radius: var(--bs-list-group-border-radius)
}

.list-group-horizontal>.list-group-item.active {
    margin-top: 0
}

.list-group-horizontal>.list-group-item+.list-group-item {
    border-left-width: 0;
    border-top-width: var(--bs-list-group-border-width)
}

.list-group-horizontal>.list-group-item+.list-group-item.active {
    border-left-width: var(--bs-list-group-border-width);
    margin-left: calc(var(--bs-list-group-border-width)*-1)
}

@media(min-width: 576px) {
    .list-group-horizontal-sm {
        flex-direction:row
    }

    .list-group-horizontal-sm>.list-group-item:first-child {
        border-bottom-left-radius: var(--bs-list-group-border-radius);
        border-top-right-radius: 0
    }

    .list-group-horizontal-sm>.list-group-item:last-child {
        border-bottom-left-radius: 0;
        border-top-right-radius: var(--bs-list-group-border-radius)
    }

    .list-group-horizontal-sm>.list-group-item.active {
        margin-top: 0
    }

    .list-group-horizontal-sm>.list-group-item+.list-group-item {
        border-left-width: 0;
        border-top-width: var(--bs-list-group-border-width)
    }

    .list-group-horizontal-sm>.list-group-item+.list-group-item.active {
        border-left-width: var(--bs-list-group-border-width);
        margin-left: calc(var(--bs-list-group-border-width)*-1)
    }
}

@media(min-width: 768px) {
    .list-group-horizontal-md {
        flex-direction:row
    }

    .list-group-horizontal-md>.list-group-item:first-child {
        border-bottom-left-radius: var(--bs-list-group-border-radius);
        border-top-right-radius: 0
    }

    .list-group-horizontal-md>.list-group-item:last-child {
        border-bottom-left-radius: 0;
        border-top-right-radius: var(--bs-list-group-border-radius)
    }

    .list-group-horizontal-md>.list-group-item.active {
        margin-top: 0
    }

    .list-group-horizontal-md>.list-group-item+.list-group-item {
        border-left-width: 0;
        border-top-width: var(--bs-list-group-border-width)
    }

    .list-group-horizontal-md>.list-group-item+.list-group-item.active {
        border-left-width: var(--bs-list-group-border-width);
        margin-left: calc(var(--bs-list-group-border-width)*-1)
    }
}

@media(min-width: 992px) {
    .list-group-horizontal-lg {
        flex-direction:row
    }

    .list-group-horizontal-lg>.list-group-item:first-child {
        border-bottom-left-radius: var(--bs-list-group-border-radius);
        border-top-right-radius: 0
    }

    .list-group-horizontal-lg>.list-group-item:last-child {
        border-bottom-left-radius: 0;
        border-top-right-radius: var(--bs-list-group-border-radius)
    }

    .list-group-horizontal-lg>.list-group-item.active {
        margin-top: 0
    }

    .list-group-horizontal-lg>.list-group-item+.list-group-item {
        border-left-width: 0;
        border-top-width: var(--bs-list-group-border-width)
    }

    .list-group-horizontal-lg>.list-group-item+.list-group-item.active {
        border-left-width: var(--bs-list-group-border-width);
        margin-left: calc(var(--bs-list-group-border-width)*-1)
    }
}

@media(min-width: 1280px) {
    .list-group-horizontal-xl {
        flex-direction:row
    }

    .list-group-horizontal-xl>.list-group-item:first-child {
        border-bottom-left-radius: var(--bs-list-group-border-radius);
        border-top-right-radius: 0
    }

    .list-group-horizontal-xl>.list-group-item:last-child {
        border-bottom-left-radius: 0;
        border-top-right-radius: var(--bs-list-group-border-radius)
    }

    .list-group-horizontal-xl>.list-group-item.active {
        margin-top: 0
    }

    .list-group-horizontal-xl>.list-group-item+.list-group-item {
        border-left-width: 0;
        border-top-width: var(--bs-list-group-border-width)
    }

    .list-group-horizontal-xl>.list-group-item+.list-group-item.active {
        border-left-width: var(--bs-list-group-border-width);
        margin-left: calc(var(--bs-list-group-border-width)*-1)
    }
}

.list-group-flush {
    border-radius: 0
}

.list-group-flush>.list-group-item {
    border-width: 0 0 var(--bs-list-group-border-width)
}

.list-group-flush>.list-group-item:last-child {
    border-bottom-width: 0
}

.list-group-item-primary {
    background-color: #cfe2ff;
    color: #084298
}

.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover {
    background-color: #bacbe6;
    color: #084298
}

.list-group-item-primary.list-group-item-action.active {
    background-color: #084298;
    border-color: #084298;
    color: #fff
}

.list-group-item-secondary {
    background-color: #e2e3e5;
    color: #41464b
}

.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover {
    background-color: #cbccce;
    color: #41464b
}

.list-group-item-secondary.list-group-item-action.active {
    background-color: #41464b;
    border-color: #41464b;
    color: #fff
}

.list-group-item-success {
    background-color: #d1e7dd;
    color: #0f5132
}

.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover {
    background-color: #bcd0c7;
    color: #0f5132
}

.list-group-item-success.list-group-item-action.active {
    background-color: #0f5132;
    border-color: #0f5132;
    color: #fff
}

.list-group-item-info {
    background-color: #cff4fc;
    color: #055160
}

.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover {
    background-color: #badce3;
    color: #055160
}

.list-group-item-info.list-group-item-action.active {
    background-color: #055160;
    border-color: #055160;
    color: #fff
}

.list-group-item-warning {
    background-color: #fff3cd;
    color: #664d03
}

.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover {
    background-color: #e6dbb9;
    color: #664d03
}

.list-group-item-warning.list-group-item-action.active {
    background-color: #664d03;
    border-color: #664d03;
    color: #fff
}

.list-group-item-danger {
    background-color: #f8d7da;
    color: #842029
}

.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover {
    background-color: #dfc2c4;
    color: #842029
}

.list-group-item-danger.list-group-item-action.active {
    background-color: #842029;
    border-color: #842029;
    color: #fff
}

.list-group-item-light {
    background-color: #fefefe;
    color: #636464
}

.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover {
    background-color: #e5e5e5;
    color: #636464
}

.list-group-item-light.list-group-item-action.active {
    background-color: #636464;
    border-color: #636464;
    color: #fff
}

.list-group-item-dark {
    background-color: #d3d3d4;
    color: #141619
}

.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover {
    background-color: #bebebf;
    color: #141619
}

.list-group-item-dark.list-group-item-action.active {
    background-color: #141619;
    border-color: #141619;
    color: #fff
}

.btn-close {
    background: transparent url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3E%3C/svg%3E") 50%/1em auto no-repeat;
    border: 0;
    border-radius: .375rem;
    box-sizing: content-box;
    color: #000;
    height: 1em;
    opacity: .5;
    padding: .25em;
    width: 1em
}

.btn-close:hover {
    color: #000;
    opacity: .75;
    text-decoration: none
}

.btn-close:focus {
    box-shadow: 0 0 0 .25rem rgba(13,110,253,.25);
    opacity: 1;
    outline: 0
}

.btn-close.disabled,.btn-close:disabled {
    opacity: .25;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.btn-close-white {
    filter: invert(1) grayscale(100%) brightness(200%)
}

.toast {
    --bs-toast-padding-x: 0.75rem;
    --bs-toast-padding-y: 0.5rem;
    --bs-toast-spacing: 1.5rem;
    --bs-toast-max-width: 350px;
    --bs-toast-font-size: 0.875rem;
    --bs-toast-color: ;
    --bs-toast-bg: hsla(0,0%,100%,.85);
    --bs-toast-border-width: 1px;
    --bs-toast-border-color: var(--bs-border-color-translucent);
    --bs-toast-border-radius: 0.375rem;
    --bs-toast-box-shadow: 0 0.5rem 1rem rgba(0,0,0,.15);
    --bs-toast-header-color: #6c757d;
    --bs-toast-header-bg: hsla(0,0%,100%,.85);
    --bs-toast-header-border-color: rgba(0,0,0,.05);
    background-clip: padding-box;
    background-color: var(--bs-toast-bg);
    border: var(--bs-toast-border-width) solid var(--bs-toast-border-color);
    border-radius: var(--bs-toast-border-radius);
    box-shadow: var(--bs-toast-box-shadow);
    color: var(--bs-toast-color);
    font-size: var(--bs-toast-font-size);
    max-width: 100%;
    pointer-events: auto;
    width: var(--bs-toast-max-width)
}

.toast.showing {
    opacity: 0
}

.toast:not(.show) {
    display: none
}

.toast-container {
    max-width: 100%;
    pointer-events: none;
    position: absolute;
    width: -moz-max-content;
    width: max-content;
    z-index: 1090
}

.toast-container>:not(:last-child) {
    margin-bottom: var(--bs-toast-spacing)
}

.toast-header {
    align-items: center;
    background-clip: padding-box;
    background-color: var(--bs-toast-header-bg);
    border-bottom: var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);
    border-top-left-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));
    border-top-right-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));
    color: var(--bs-toast-header-color);
    display: flex;
    padding: var(--bs-toast-padding-y) var(--bs-toast-padding-x)
}

.toast-header .btn-close {
    margin-left: var(--bs-toast-padding-x);
    margin-right: calc(var(--bs-toast-padding-x)*-.5)
}

.toast-body {
    word-wrap: break-word;
    padding: var(--bs-toast-padding-x)
}

.modal {
    --bs-modal-zindex: 1055;
    --bs-modal-width: 500px;
    --bs-modal-padding: 1rem;
    --bs-modal-margin: 0.5rem;
    --bs-modal-color: ;
    --bs-modal-bg: #fff;
    --bs-modal-border-color: var(--bs-border-color-translucent);
    --bs-modal-border-width: 1px;
    --bs-modal-border-radius: 0.5rem;
    --bs-modal-box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,.075);
    --bs-modal-inner-border-radius: calc(0.5rem - 1px);
    --bs-modal-header-padding-x: 1rem;
    --bs-modal-header-padding-y: 1rem;
    --bs-modal-header-padding: 1rem 1rem;
    --bs-modal-header-border-color: var(--bs-border-color);
    --bs-modal-header-border-width: 1px;
    --bs-modal-title-line-height: 1.5;
    --bs-modal-footer-gap: 0.5rem;
    --bs-modal-footer-bg: ;
    --bs-modal-footer-border-color: var(--bs-border-color);
    --bs-modal-footer-border-width: 1px;
    display: none;
    height: 100%;
    left: 0;
    outline: 0;
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: var(--bs-modal-zindex)
}

.modal-dialog {
    margin: var(--bs-modal-margin);
    pointer-events: none;
    position: relative;
    width: auto
}

.modal.fade .modal-dialog {
    transform: translateY(-50px);
    transition: transform .3s ease-out
}

@media(prefers-reduced-motion:reduce) {
    .modal.fade .modal-dialog {
        transition: none
    }
}

.modal.show .modal-dialog {
    transform: none
}

.modal.modal-static .modal-dialog {
    transform: scale(1.02)
}

.modal-dialog-scrollable {
    height: calc(100% - var(--bs-modal-margin)*2)
}

.modal-dialog-scrollable .modal-content {
    max-height: 100%;
    overflow: hidden
}

.modal-dialog-scrollable .modal-body {
    overflow-y: auto
}

.modal-dialog-centered {
    align-items: center;
    display: flex;
    min-height: calc(100% - var(--bs-modal-margin)*2)
}

.modal-content {
    background-clip: padding-box;
    background-color: var(--bs-modal-bg);
    border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);
    border-radius: var(--bs-modal-border-radius);
    color: var(--bs-modal-color);
    display: flex;
    flex-direction: column;
    outline: 0;
    pointer-events: auto;
    position: relative;
    width: 100%
}

.modal-backdrop {
    --bs-backdrop-zindex: 1050;
    --bs-backdrop-bg: #000;
    --bs-backdrop-opacity: 0.5;
    background-color: var(--bs-backdrop-bg);
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: var(--bs-backdrop-zindex)
}

.modal-backdrop.fade {
    opacity: 0
}

.modal-backdrop.show {
    opacity: var(--bs-backdrop-opacity)
}

.modal-header {
    align-items: center;
    border-bottom: var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);
    border-top-left-radius: var(--bs-modal-inner-border-radius);
    border-top-right-radius: var(--bs-modal-inner-border-radius);
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    padding: var(--bs-modal-header-padding)
}

.modal-header .btn-close {
    margin: calc(var(--bs-modal-header-padding-y)*-.5) calc(var(--bs-modal-header-padding-x)*-.5) calc(var(--bs-modal-header-padding-y)*-.5) auto;
    padding: calc(var(--bs-modal-header-padding-y)*.5) calc(var(--bs-modal-header-padding-x)*.5)
}

.modal-title {
    line-height: var(--bs-modal-title-line-height);
    margin-bottom: 0
}

.modal-body {
    flex: 1 1 auto;
    padding: var(--bs-modal-padding);
    position: relative
}

.modal-footer {
    align-items: center;
    background-color: var(--bs-modal-footer-bg);
    border-bottom-left-radius: var(--bs-modal-inner-border-radius);
    border-bottom-right-radius: var(--bs-modal-inner-border-radius);
    border-top: var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap)*.5)
}

.modal-footer>* {
    margin: calc(var(--bs-modal-footer-gap)*.5)
}

@media(min-width: 576px) {
    .modal {
        --bs-modal-margin:1.75rem;
        --bs-modal-box-shadow: 0 0.5rem 1rem rgba(0,0,0,.15)
    }

    .modal-dialog {
        margin-left: auto;
        margin-right: auto;
        max-width: var(--bs-modal-width)
    }

    .modal-sm {
        --bs-modal-width: 300px
    }
}

@media(min-width: 992px) {
    .modal-lg,.modal-xl {
        --bs-modal-width:800px
    }
}

@media(min-width: 1280px) {
    .modal-xl {
        --bs-modal-width:1140px
    }
}

.modal-fullscreen {
    height: 100%;
    margin: 0;
    max-width: none;
    width: 100vw
}

.modal-fullscreen .modal-content {
    border: 0;
    border-radius: 0;
    height: 100%
}

.modal-fullscreen .modal-footer,.modal-fullscreen .modal-header {
    border-radius: 0
}

.modal-fullscreen .modal-body {
    overflow-y: auto
}

@media(max-width: 575.98px) {
    .modal-fullscreen-sm-down {
        height:100%;
        margin: 0;
        max-width: none;
        width: 100vw
    }

    .modal-fullscreen-sm-down .modal-content {
        border: 0;
        border-radius: 0;
        height: 100%
    }

    .modal-fullscreen-sm-down .modal-footer,.modal-fullscreen-sm-down .modal-header {
        border-radius: 0
    }

    .modal-fullscreen-sm-down .modal-body {
        overflow-y: auto
    }
}

@media(max-width: 767.98px) {
    .modal-fullscreen-md-down {
        height:100%;
        margin: 0;
        max-width: none;
        width: 100vw
    }

    .modal-fullscreen-md-down .modal-content {
        border: 0;
        border-radius: 0;
        height: 100%
    }

    .modal-fullscreen-md-down .modal-footer,.modal-fullscreen-md-down .modal-header {
        border-radius: 0
    }

    .modal-fullscreen-md-down .modal-body {
        overflow-y: auto
    }
}

@media(max-width: 991.98px) {
    .modal-fullscreen-lg-down {
        height:100%;
        margin: 0;
        max-width: none;
        width: 100vw
    }

    .modal-fullscreen-lg-down .modal-content {
        border: 0;
        border-radius: 0;
        height: 100%
    }

    .modal-fullscreen-lg-down .modal-footer,.modal-fullscreen-lg-down .modal-header {
        border-radius: 0
    }

    .modal-fullscreen-lg-down .modal-body {
        overflow-y: auto
    }
}

@media(max-width: 1279.98px) {
    .modal-fullscreen-xl-down {
        height:100%;
        margin: 0;
        max-width: none;
        width: 100vw
    }

    .modal-fullscreen-xl-down .modal-content {
        border: 0;
        border-radius: 0;
        height: 100%
    }

    .modal-fullscreen-xl-down .modal-footer,.modal-fullscreen-xl-down .modal-header {
        border-radius: 0
    }

    .modal-fullscreen-xl-down .modal-body {
        overflow-y: auto
    }
}

.tooltip {
    --bs-tooltip-zindex: 1080;
    --bs-tooltip-max-width: 200px;
    --bs-tooltip-padding-x: 0.5rem;
    --bs-tooltip-padding-y: 0.25rem;
    --bs-tooltip-margin: ;
    --bs-tooltip-font-size: 0.875rem;
    --bs-tooltip-color: #fff;
    --bs-tooltip-bg: #000;
    --bs-tooltip-border-radius: 0.375rem;
    --bs-tooltip-opacity: 0.9;
    --bs-tooltip-arrow-width: 0.8rem;
    --bs-tooltip-arrow-height: 0.4rem;
    word-wrap: break-word;
    display: block;
    font-family: var(--bs-font-sans-serif);
    font-size: var(--bs-tooltip-font-size);
    font-style: normal;
    font-weight: 400;
    letter-spacing: normal;
    line-break: auto;
    line-height: 1.5;
    margin: var(--bs-tooltip-margin);
    opacity: 0;
    padding: var(--bs-tooltip-arrow-height);
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    white-space: normal;
    word-break: normal;
    word-spacing: normal;
    z-index: var(--bs-tooltip-zindex)
}

.tooltip.show {
    opacity: var(--bs-tooltip-opacity)
}

.tooltip .tooltip-arrow {
    display: block;
    height: var(--bs-tooltip-arrow-height);
    width: var(--bs-tooltip-arrow-width)
}

.tooltip .tooltip-arrow:before {
    border-color: transparent;
    border-style: solid;
    content: "";
    position: absolute
}

.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow,.bs-tooltip-top .tooltip-arrow {
    bottom: 0
}

.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow:before,.bs-tooltip-top .tooltip-arrow:before {
    border-top-color: var(--bs-tooltip-bg);
    border-width: var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width)*.5) 0;
    top: -1px
}

.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow,.bs-tooltip-end .tooltip-arrow {
    height: var(--bs-tooltip-arrow-width);
    left: 0;
    width: var(--bs-tooltip-arrow-height)
}

.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow:before,.bs-tooltip-end .tooltip-arrow:before {
    border-right-color: var(--bs-tooltip-bg);
    border-width: calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width)*.5) 0;
    right: -1px
}

.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow,.bs-tooltip-bottom .tooltip-arrow {
    top: 0
}

.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow:before,.bs-tooltip-bottom .tooltip-arrow:before {
    border-bottom-color: var(--bs-tooltip-bg);
    border-width: 0 calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height);
    bottom: -1px
}

.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow,.bs-tooltip-start .tooltip-arrow {
    height: var(--bs-tooltip-arrow-width);
    right: 0;
    width: var(--bs-tooltip-arrow-height)
}

.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow:before,.bs-tooltip-start .tooltip-arrow:before {
    border-left-color: var(--bs-tooltip-bg);
    border-width: calc(var(--bs-tooltip-arrow-width)*.5) 0 calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height);
    left: -1px
}

.tooltip-inner {
    background-color: var(--bs-tooltip-bg);
    border-radius: var(--bs-tooltip-border-radius);
    color: var(--bs-tooltip-color);
    max-width: var(--bs-tooltip-max-width);
    padding: var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);
    text-align: center
}

.popover {
    --bs-popover-zindex: 1070;
    --bs-popover-max-width: 276px;
    --bs-popover-font-size: 0.875rem;
    --bs-popover-bg: #fff;
    --bs-popover-border-width: 1px;
    --bs-popover-border-color: var(--bs-border-color-translucent);
    --bs-popover-border-radius: 0.5rem;
    --bs-popover-inner-border-radius: calc(0.5rem - 1px);
    --bs-popover-box-shadow: 0 0.5rem 1rem rgba(0,0,0,.15);
    --bs-popover-header-padding-x: 1rem;
    --bs-popover-header-padding-y: 0.5rem;
    --bs-popover-header-font-size: 1rem;
    --bs-popover-header-color: var(--bs-heading-color);
    --bs-popover-header-bg: #f0f0f0;
    --bs-popover-body-padding-x: 1rem;
    --bs-popover-body-padding-y: 1rem;
    --bs-popover-body-color: #212529;
    --bs-popover-arrow-width: 1rem;
    --bs-popover-arrow-height: 0.5rem;
    --bs-popover-arrow-border: var(--bs-popover-border-color);
    word-wrap: break-word;
    background-clip: padding-box;
    background-color: var(--bs-popover-bg);
    border: var(--bs-popover-border-width) solid var(--bs-popover-border-color);
    border-radius: var(--bs-popover-border-radius);
    display: block;
    font-family: var(--bs-font-sans-serif);
    font-size: var(--bs-popover-font-size);
    font-style: normal;
    font-weight: 400;
    letter-spacing: normal;
    line-break: auto;
    line-height: 1.5;
    max-width: var(--bs-popover-max-width);
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    white-space: normal;
    word-break: normal;
    word-spacing: normal;
    z-index: var(--bs-popover-zindex)
}

.popover .popover-arrow {
    display: block;
    height: var(--bs-popover-arrow-height);
    width: var(--bs-popover-arrow-width)
}

.popover .popover-arrow:after,.popover .popover-arrow:before {
    border: 0 solid transparent;
    content: "";
    display: block;
    position: absolute
}

.bs-popover-auto[data-popper-placement^=top]>.popover-arrow,.bs-popover-top>.popover-arrow {
    bottom: calc(var(--bs-popover-arrow-height)*-1 - var(--bs-popover-border-width))
}

.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:before,.bs-popover-top>.popover-arrow:after,.bs-popover-top>.popover-arrow:before {
    border-width: var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width)*.5) 0
}

.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:before,.bs-popover-top>.popover-arrow:before {
    border-top-color: var(--bs-popover-arrow-border);
    bottom: 0
}

.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:after,.bs-popover-top>.popover-arrow:after {
    border-top-color: var(--bs-popover-bg);
    bottom: var(--bs-popover-border-width)
}

.bs-popover-auto[data-popper-placement^=right]>.popover-arrow,.bs-popover-end>.popover-arrow {
    height: var(--bs-popover-arrow-width);
    left: calc(var(--bs-popover-arrow-height)*-1 - var(--bs-popover-border-width));
    width: var(--bs-popover-arrow-height)
}

.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:before,.bs-popover-end>.popover-arrow:after,.bs-popover-end>.popover-arrow:before {
    border-width: calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width)*.5) 0
}

.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:before,.bs-popover-end>.popover-arrow:before {
    border-right-color: var(--bs-popover-arrow-border);
    left: 0
}

.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:after,.bs-popover-end>.popover-arrow:after {
    border-right-color: var(--bs-popover-bg);
    left: var(--bs-popover-border-width)
}

.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow,.bs-popover-bottom>.popover-arrow {
    top: calc(var(--bs-popover-arrow-height)*-1 - var(--bs-popover-border-width))
}

.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:before,.bs-popover-bottom>.popover-arrow:after,.bs-popover-bottom>.popover-arrow:before {
    border-width: 0 calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height)
}

.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:before,.bs-popover-bottom>.popover-arrow:before {
    border-bottom-color: var(--bs-popover-arrow-border);
    top: 0
}

.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:after,.bs-popover-bottom>.popover-arrow:after {
    border-bottom-color: var(--bs-popover-bg);
    top: var(--bs-popover-border-width)
}

.bs-popover-auto[data-popper-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before {
    border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-header-bg);
    content: "";
    display: block;
    left: 50%;
    margin-left: calc(var(--bs-popover-arrow-width)*-.5);
    position: absolute;
    top: 0;
    width: var(--bs-popover-arrow-width)
}

.bs-popover-auto[data-popper-placement^=left]>.popover-arrow,.bs-popover-start>.popover-arrow {
    height: var(--bs-popover-arrow-width);
    right: calc(var(--bs-popover-arrow-height)*-1 - var(--bs-popover-border-width));
    width: var(--bs-popover-arrow-height)
}

.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:before,.bs-popover-start>.popover-arrow:after,.bs-popover-start>.popover-arrow:before {
    border-width: calc(var(--bs-popover-arrow-width)*.5) 0 calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height)
}

.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:before,.bs-popover-start>.popover-arrow:before {
    border-left-color: var(--bs-popover-arrow-border);
    right: 0
}

.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:after,.bs-popover-start>.popover-arrow:after {
    border-left-color: var(--bs-popover-bg);
    right: var(--bs-popover-border-width)
}

.popover-header {
    background-color: var(--bs-popover-header-bg);
    border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-border-color);
    border-top-left-radius: var(--bs-popover-inner-border-radius);
    border-top-right-radius: var(--bs-popover-inner-border-radius);
    color: var(--bs-popover-header-color);
    font-size: var(--bs-popover-header-font-size);
    margin-bottom: 0;
    padding: var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x)
}

.popover-header:empty {
    display: none
}

.popover-body {
    color: var(--bs-popover-body-color);
    padding: var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x)
}

.carousel {
    position: relative
}

.carousel.pointer-event {
    touch-action: pan-y
}

.carousel-inner {
    overflow: hidden;
    position: relative;
    width: 100%
}

.carousel-inner:after {
    clear: both;
    content: "";
    display: block
}

.carousel-item {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: none;
    float: left;
    margin-right: -100%;
    position: relative;
    transition: transform .6s ease-in-out;
    width: 100%
}

@media(prefers-reduced-motion:reduce) {
    .carousel-item {
        transition: none
    }
}

.carousel-item-next,.carousel-item-prev,.carousel-item.active {
    display: block
}

.active.carousel-item-end,.carousel-item-next:not(.carousel-item-start) {
    transform: translateX(100%)
}

.active.carousel-item-start,.carousel-item-prev:not(.carousel-item-end) {
    transform: translateX(-100%)
}

.carousel-fade .carousel-item {
    opacity: 0;
    transform: none;
    transition-property: opacity
}

.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end,.carousel-fade .carousel-item.active {
    opacity: 1;
    z-index: 1
}

.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start {
    opacity: 0;
    transition: opacity 0s .6s;
    z-index: 0
}

@media(prefers-reduced-motion:reduce) {
    .carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start {
        transition: none
    }
}

.carousel-control-next,.carousel-control-prev {
    align-items: center;
    background: 0 0;
    border: 0;
    bottom: 0;
    color: #fff;
    display: flex;
    justify-content: center;
    opacity: .5;
    padding: 0;
    position: absolute;
    text-align: center;
    top: 0;
    transition: opacity .15s ease;
    width: 15%;
    z-index: 1
}

@media(prefers-reduced-motion:reduce) {
    .carousel-control-next,.carousel-control-prev {
        transition: none
    }
}

.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover {
    color: #fff;
    opacity: .9;
    outline: 0;
    text-decoration: none
}

.carousel-control-prev {
    left: 0
}

.carousel-control-next {
    right: 0
}

.carousel-control-next-icon,.carousel-control-prev-icon {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: inline-block;
    height: 2rem;
    width: 2rem
}

.carousel-control-prev-icon {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nI2ZmZic+PHBhdGggZD0nTTExLjM1NCAxLjY0NmEuNS41IDAgMCAxIDAgLjcwOEw1LjcwNyA4bDUuNjQ3IDUuNjQ2YS41LjUgMCAwIDEtLjcwOC43MDhsLTYtNmEuNS41IDAgMCAxIDAtLjcwOGw2LTZhLjUuNSAwIDAgMSAuNzA4IDB6Jy8+PC9zdmc+)
}

.carousel-control-next-icon {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nI2ZmZic+PHBhdGggZD0nTTQuNjQ2IDEuNjQ2YS41LjUgMCAwIDEgLjcwOCAwbDYgNmEuNS41IDAgMCAxIDAgLjcwOGwtNiA2YS41LjUgMCAwIDEtLjcwOC0uNzA4TDEwLjI5MyA4IDQuNjQ2IDIuMzU0YS41LjUgMCAwIDEgMC0uNzA4eicvPjwvc3ZnPg==)
}

.carousel-indicators {
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    list-style: none;
    margin-bottom: 1rem;
    margin-left: 15%;
    margin-right: 15%;
    padding: 0;
    position: absolute;
    right: 0;
    z-index: 2
}

.carousel-indicators [data-bs-target] {
    background-clip: padding-box;
    background-color: #fff;
    border: 0;
    border-bottom: 10px solid transparent;
    border-top: 10px solid transparent;
    box-sizing: content-box;
    cursor: pointer;
    flex: 0 1 auto;
    height: 3px;
    margin-left: 3px;
    margin-right: 3px;
    opacity: .5;
    padding: 0;
    text-indent: -999px;
    transition: opacity .6s ease;
    width: 30px
}

@media(prefers-reduced-motion:reduce) {
    .carousel-indicators [data-bs-target] {
        transition: none
    }
}

.carousel-indicators .active {
    opacity: 1
}

.carousel-caption {
    bottom: 1.25rem;
    color: #fff;
    left: 15%;
    padding-bottom: 1.25rem;
    padding-top: 1.25rem;
    position: absolute;
    right: 15%;
    text-align: center
}

.carousel-dark .carousel-control-next-icon,.carousel-dark .carousel-control-prev-icon {
    filter: invert(1) grayscale(100)
}

.carousel-dark .carousel-indicators [data-bs-target] {
    background-color: #000
}

.carousel-dark .carousel-caption {
    color: #000
}

.spinner-border,.spinner-grow {
    animation: var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);
    border-radius: 50%;
    display: inline-block;
    height: var(--bs-spinner-height);
    vertical-align: var(--bs-spinner-vertical-align);
    width: var(--bs-spinner-width)
}

@keyframes spinner-border {
    to {
        transform: rotate(1turn)
    }
}

.spinner-border {
    --bs-spinner-width: 2rem;
    --bs-spinner-height: 2rem;
    --bs-spinner-vertical-align: -0.125em;
    --bs-spinner-border-width: 0.25em;
    --bs-spinner-animation-speed: 0.75s;
    --bs-spinner-animation-name: spinner-border;
    border-right-color: currentcolor;
    border: var(--bs-spinner-border-width) solid;
    border-right: var(--bs-spinner-border-width) solid transparent
}

.spinner-border-sm {
    --bs-spinner-width: 1rem;
    --bs-spinner-height: 1rem;
    --bs-spinner-border-width: 0.2em
}

@keyframes spinner-grow {
    0% {
        transform: scale(0)
    }

    50% {
        opacity: 1;
        transform: none
    }
}

.spinner-grow {
    --bs-spinner-width: 2rem;
    --bs-spinner-height: 2rem;
    --bs-spinner-vertical-align: -0.125em;
    --bs-spinner-animation-speed: 0.75s;
    --bs-spinner-animation-name: spinner-grow;
    background-color: currentcolor;
    opacity: 0
}

.spinner-grow-sm {
    --bs-spinner-width: 1rem;
    --bs-spinner-height: 1rem
}

@media(prefers-reduced-motion:reduce) {
    .spinner-border,.spinner-grow {
        --bs-spinner-animation-speed: 1.5s
    }
}

.offcanvas,.offcanvas-lg,.offcanvas-md,.offcanvas-sm,.offcanvas-xl {
    --bs-offcanvas-width: 400px;
    --bs-offcanvas-height: 30vh;
    --bs-offcanvas-padding-x: 1rem;
    --bs-offcanvas-padding-y: 1rem;
    --bs-offcanvas-color: ;
    --bs-offcanvas-bg: #fff;
    --bs-offcanvas-border-width: 1px;
    --bs-offcanvas-border-color: var(--bs-border-color-translucent);
    --bs-offcanvas-box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,.075)
}

@media(max-width: 575.98px) {
    .offcanvas-sm {
        background-clip:padding-box;
        background-color: var(--bs-offcanvas-bg);
        bottom: 0;
        color: var(--bs-offcanvas-color);
        display: flex;
        flex-direction: column;
        max-width: 100%;
        outline: 0;
        position: fixed;
        transition: transform .3s ease-in-out;
        visibility: hidden;
        z-index: 1045
    }
}

@media(max-width: 575.98px) and (prefers-reduced-motion:reduce) {
    .offcanvas-sm {
        transition:none
    }
}

@media(max-width: 575.98px) {
    .offcanvas-sm.offcanvas-start {
        border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
        left: 0;
        top: 0;
        transform: translateX(-100%);
        width: var(--bs-offcanvas-width)
    }

    .offcanvas-sm.offcanvas-end {
        border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
        right: 0;
        top: 0;
        transform: translateX(100%);
        width: var(--bs-offcanvas-width)
    }

    .offcanvas-sm.offcanvas-top {
        border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
        top: 0;
        transform: translateY(-100%)
    }

    .offcanvas-sm.offcanvas-bottom,.offcanvas-sm.offcanvas-top {
        height: var(--bs-offcanvas-height);
        left: 0;
        max-height: 100%;
        right: 0
    }

    .offcanvas-sm.offcanvas-bottom {
        border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
        transform: translateY(100%)
    }

    .offcanvas-sm.show:not(.hiding),.offcanvas-sm.showing {
        transform: none
    }

    .offcanvas-sm.hiding,.offcanvas-sm.show,.offcanvas-sm.showing {
        visibility: visible
    }
}

@media(min-width: 576px) {
    .offcanvas-sm {
        --bs-offcanvas-height:auto;
        --bs-offcanvas-border-width: 0;
        background-color: transparent!important
    }

    .offcanvas-sm .offcanvas-header {
        display: none
    }

    .offcanvas-sm .offcanvas-body {
        background-color: transparent!important;
        display: flex;
        flex-grow: 0;
        overflow-y: visible;
        padding: 0
    }
}

@media(max-width: 767.98px) {
    .offcanvas-md {
        background-clip:padding-box;
        background-color: var(--bs-offcanvas-bg);
        bottom: 0;
        color: var(--bs-offcanvas-color);
        display: flex;
        flex-direction: column;
        max-width: 100%;
        outline: 0;
        position: fixed;
        transition: transform .3s ease-in-out;
        visibility: hidden;
        z-index: 1045
    }
}

@media(max-width: 767.98px) and (prefers-reduced-motion:reduce) {
    .offcanvas-md {
        transition:none
    }
}

@media(max-width: 767.98px) {
    .offcanvas-md.offcanvas-start {
        border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
        left: 0;
        top: 0;
        transform: translateX(-100%);
        width: var(--bs-offcanvas-width)
    }

    .offcanvas-md.offcanvas-end {
        border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
        right: 0;
        top: 0;
        transform: translateX(100%);
        width: var(--bs-offcanvas-width)
    }

    .offcanvas-md.offcanvas-top {
        border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
        top: 0;
        transform: translateY(-100%)
    }

    .offcanvas-md.offcanvas-bottom,.offcanvas-md.offcanvas-top {
        height: var(--bs-offcanvas-height);
        left: 0;
        max-height: 100%;
        right: 0
    }

    .offcanvas-md.offcanvas-bottom {
        border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
        transform: translateY(100%)
    }

    .offcanvas-md.show:not(.hiding),.offcanvas-md.showing {
        transform: none
    }

    .offcanvas-md.hiding,.offcanvas-md.show,.offcanvas-md.showing {
        visibility: visible
    }
}

@media(min-width: 768px) {
    .offcanvas-md {
        --bs-offcanvas-height:auto;
        --bs-offcanvas-border-width: 0;
        background-color: transparent!important
    }

    .offcanvas-md .offcanvas-header {
        display: none
    }

    .offcanvas-md .offcanvas-body {
        background-color: transparent!important;
        display: flex;
        flex-grow: 0;
        overflow-y: visible;
        padding: 0
    }
}

@media(max-width: 991.98px) {
    .offcanvas-lg {
        background-clip:padding-box;
        background-color: var(--bs-offcanvas-bg);
        bottom: 0;
        color: var(--bs-offcanvas-color);
        display: flex;
        flex-direction: column;
        max-width: 100%;
        outline: 0;
        position: fixed;
        transition: transform .3s ease-in-out;
        visibility: hidden;
        z-index: 1045
    }
}

@media(max-width: 991.98px) and (prefers-reduced-motion:reduce) {
    .offcanvas-lg {
        transition:none
    }
}

@media(max-width: 991.98px) {
    .offcanvas-lg.offcanvas-start {
        border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
        left: 0;
        top: 0;
        transform: translateX(-100%);
        width: var(--bs-offcanvas-width)
    }

    .offcanvas-lg.offcanvas-end {
        border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
        right: 0;
        top: 0;
        transform: translateX(100%);
        width: var(--bs-offcanvas-width)
    }

    .offcanvas-lg.offcanvas-top {
        border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
        top: 0;
        transform: translateY(-100%)
    }

    .offcanvas-lg.offcanvas-bottom,.offcanvas-lg.offcanvas-top {
        height: var(--bs-offcanvas-height);
        left: 0;
        max-height: 100%;
        right: 0
    }

    .offcanvas-lg.offcanvas-bottom {
        border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
        transform: translateY(100%)
    }

    .offcanvas-lg.show:not(.hiding),.offcanvas-lg.showing {
        transform: none
    }

    .offcanvas-lg.hiding,.offcanvas-lg.show,.offcanvas-lg.showing {
        visibility: visible
    }
}

@media(min-width: 992px) {
    .offcanvas-lg {
        --bs-offcanvas-height:auto;
        --bs-offcanvas-border-width: 0;
        background-color: transparent!important
    }

    .offcanvas-lg .offcanvas-header {
        display: none
    }

    .offcanvas-lg .offcanvas-body {
        background-color: transparent!important;
        display: flex;
        flex-grow: 0;
        overflow-y: visible;
        padding: 0
    }
}

@media(max-width: 1279.98px) {
    .offcanvas-xl {
        background-clip:padding-box;
        background-color: var(--bs-offcanvas-bg);
        bottom: 0;
        color: var(--bs-offcanvas-color);
        display: flex;
        flex-direction: column;
        max-width: 100%;
        outline: 0;
        position: fixed;
        transition: transform .3s ease-in-out;
        visibility: hidden;
        z-index: 1045
    }
}

@media(max-width: 1279.98px) and (prefers-reduced-motion:reduce) {
    .offcanvas-xl {
        transition:none
    }
}

@media(max-width: 1279.98px) {
    .offcanvas-xl.offcanvas-start {
        border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
        left: 0;
        top: 0;
        transform: translateX(-100%);
        width: var(--bs-offcanvas-width)
    }

    .offcanvas-xl.offcanvas-end {
        border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
        right: 0;
        top: 0;
        transform: translateX(100%);
        width: var(--bs-offcanvas-width)
    }

    .offcanvas-xl.offcanvas-top {
        border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
        top: 0;
        transform: translateY(-100%)
    }

    .offcanvas-xl.offcanvas-bottom,.offcanvas-xl.offcanvas-top {
        height: var(--bs-offcanvas-height);
        left: 0;
        max-height: 100%;
        right: 0
    }

    .offcanvas-xl.offcanvas-bottom {
        border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
        transform: translateY(100%)
    }

    .offcanvas-xl.show:not(.hiding),.offcanvas-xl.showing {
        transform: none
    }

    .offcanvas-xl.hiding,.offcanvas-xl.show,.offcanvas-xl.showing {
        visibility: visible
    }
}

@media(min-width: 1280px) {
    .offcanvas-xl {
        --bs-offcanvas-height:auto;
        --bs-offcanvas-border-width: 0;
        background-color: transparent!important
    }

    .offcanvas-xl .offcanvas-header {
        display: none
    }

    .offcanvas-xl .offcanvas-body {
        background-color: transparent!important;
        display: flex;
        flex-grow: 0;
        overflow-y: visible;
        padding: 0
    }
}

.offcanvas {
    background-clip: padding-box;
    background-color: var(--bs-offcanvas-bg);
    bottom: 0;
    color: var(--bs-offcanvas-color);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    outline: 0;
    position: fixed;
    transition: transform .3s ease-in-out;
    visibility: hidden;
    z-index: 1045
}

@media(prefers-reduced-motion:reduce) {
    .offcanvas {
        transition: none
    }
}

.offcanvas.offcanvas-start {
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    left: 0;
    top: 0;
    transform: translateX(-100%);
    width: var(--bs-offcanvas-width)
}

.offcanvas.offcanvas-end {
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    right: 0;
    top: 0;
    transform: translateX(100%);
    width: var(--bs-offcanvas-width)
}

.offcanvas.offcanvas-top {
    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    top: 0;
    transform: translateY(-100%)
}

.offcanvas.offcanvas-bottom,.offcanvas.offcanvas-top {
    height: var(--bs-offcanvas-height);
    left: 0;
    max-height: 100%;
    right: 0
}

.offcanvas.offcanvas-bottom {
    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(100%)
}

.offcanvas.show:not(.hiding),.offcanvas.showing {
    transform: none
}

.offcanvas.hiding,.offcanvas.show,.offcanvas.showing {
    visibility: visible
}

.offcanvas-backdrop {
    background-color: #000;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1040
}

.offcanvas-backdrop.fade {
    opacity: 0
}

.offcanvas-backdrop.show {
    opacity: .5
}

.offcanvas-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x)
}

.offcanvas-header .btn-close {
    margin-bottom: calc(var(--bs-offcanvas-padding-y)*-.5);
    margin-right: calc(var(--bs-offcanvas-padding-x)*-.5);
    margin-top: calc(var(--bs-offcanvas-padding-y)*-.5);
    padding: calc(var(--bs-offcanvas-padding-y)*.5) calc(var(--bs-offcanvas-padding-x)*.5)
}

.offcanvas-title {
    line-height: 1.5;
    margin-bottom: 0
}

.offcanvas-body {
    flex-grow: 1;
    overflow-y: auto;
    padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x)
}

.placeholder {
    background-color: currentcolor;
    cursor: wait;
    display: inline-block;
    min-height: 1em;
    opacity: .5;
    vertical-align: middle
}

.placeholder.btn:before {
    content: "";
    display: inline-block
}

.placeholder-xs {
    min-height: .6em
}

.placeholder-sm {
    min-height: .8em
}

.placeholder-lg {
    min-height: 1.2em
}

.placeholder-glow .placeholder {
    animation: placeholder-glow 2s ease-in-out infinite
}

@keyframes placeholder-glow {
    50% {
        opacity: .2
    }
}

.placeholder-wave {
    animation: placeholder-wave 2s linear infinite;
    -webkit-mask-image: linear-gradient(130deg,#000 55%,rgba(0,0,0,.8) 75%,#000 95%);
    mask-image: linear-gradient(130deg,#000 55%,rgba(0,0,0,.8) 75%,#000 95%);
    -webkit-mask-size: 200% 100%;
    mask-size: 200% 100%
}

@keyframes placeholder-wave {
    to {
        -webkit-mask-position: -200% 0;
        mask-position: -200% 0
    }
}

.clearfix:after {
    clear: both;
    content: "";
    display: block
}

.text-bg-primary {
    background-color: RGBA(13,110,253,var(--bs-bg-opacity,1))!important;
    color: #fff!important
}

.text-bg-secondary {
    background-color: RGBA(108,117,125,var(--bs-bg-opacity,1))!important;
    color: #fff!important
}

.text-bg-success {
    background-color: RGBA(25,135,84,var(--bs-bg-opacity,1))!important;
    color: #fff!important
}

.text-bg-info {
    background-color: RGBA(13,202,240,var(--bs-bg-opacity,1))!important;
    color: #000!important
}

.text-bg-warning {
    background-color: RGBA(255,193,7,var(--bs-bg-opacity,1))!important;
    color: #000!important
}

.text-bg-danger {
    background-color: RGBA(220,53,69,var(--bs-bg-opacity,1))!important;
    color: #fff!important
}

.text-bg-light {
    background-color: RGBA(248,249,250,var(--bs-bg-opacity,1))!important;
    color: #000!important
}

.text-bg-dark {
    background-color: RGBA(33,37,41,var(--bs-bg-opacity,1))!important;
    color: #fff!important
}

.link-primary {
    color: #0d6efd!important
}

.link-primary:focus,.link-primary:hover {
    color: #0a58ca!important
}

.link-secondary {
    color: #6c757d!important
}

.link-secondary:focus,.link-secondary:hover {
    color: #565e64!important
}

.link-success {
    color: #198754!important
}

.link-success:focus,.link-success:hover {
    color: #146c43!important
}

.link-info {
    color: #0dcaf0!important
}

.link-info:focus,.link-info:hover {
    color: #3dd5f3!important
}

.link-warning {
    color: #ffc107!important
}

.link-warning:focus,.link-warning:hover {
    color: #ffcd39!important
}

.link-danger {
    color: #dc3545!important
}

.link-danger:focus,.link-danger:hover {
    color: #b02a37!important
}

.link-light {
    color: #f8f9fa!important
}

.link-light:focus,.link-light:hover {
    color: #f9fafb!important
}

.link-dark {
    color: #212529!important
}

.link-dark:focus,.link-dark:hover {
    color: #1a1e21!important
}

.ratio {
    position: relative;
    width: 100%
}

.ratio:before {
    content: "";
    display: block;
    padding-top: var(--bs-aspect-ratio)
}

.ratio>* {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%
}

.ratio-1x1 {
    --bs-aspect-ratio: 100%
}

.ratio-4x3 {
    --bs-aspect-ratio: 75%
}

.ratio-16x9 {
    --bs-aspect-ratio: 56.25%
}

.ratio-21x9 {
    --bs-aspect-ratio: 42.8571428571%
}

.fixed-top {
    top: 0
}

.fixed-bottom,.fixed-top {
    left: 0;
    position: fixed;
    right: 0;
    z-index: 1030
}

.fixed-bottom {
    bottom: 0
}

.sticky-top {
    top: 0
}

.sticky-bottom,.sticky-top {
    position: sticky;
    z-index: 1020
}

.sticky-bottom {
    bottom: 0
}

@media(min-width: 576px) {
    .sticky-sm-top {
        position:sticky;
        top: 0;
        z-index: 1020
    }

    .sticky-sm-bottom {
        bottom: 0;
        position: sticky;
        z-index: 1020
    }
}

@media(min-width: 768px) {
    .sticky-md-top {
        position:sticky;
        top: 0;
        z-index: 1020
    }

    .sticky-md-bottom {
        bottom: 0;
        position: sticky;
        z-index: 1020
    }
}

@media(min-width: 992px) {
    .sticky-lg-top {
        position:sticky;
        top: 0;
        z-index: 1020
    }

    .sticky-lg-bottom {
        bottom: 0;
        position: sticky;
        z-index: 1020
    }
}

@media(min-width: 1280px) {
    .sticky-xl-top {
        position:sticky;
        top: 0;
        z-index: 1020
    }

    .sticky-xl-bottom {
        bottom: 0;
        position: sticky;
        z-index: 1020
    }
}

.hstack {
    align-items: center;
    flex-direction: row
}

.hstack,.vstack {
    align-self: stretch;
    display: flex
}

.vstack {
    flex: 1 1 auto;
    flex-direction: column
}

.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within) {
    clip: rect(0,0,0,0)!important;
    border: 0!important;
    height: 1px!important;
    margin: -1px!important;
    overflow: hidden!important;
    padding: 0!important;
    position: absolute!important;
    white-space: nowrap!important;
    width: 1px!important
}

.stretched-link:after {
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1
}

.text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.vr {
    align-self: stretch;
    background-color: currentcolor;
    display: inline-block;
    min-height: 1em;
    opacity: .25;
    width: 1px
}

.align-baseline {
    vertical-align: baseline!important
}

.align-top {
    vertical-align: top!important
}

.align-middle {
    vertical-align: middle!important
}

.align-bottom {
    vertical-align: bottom!important
}

.align-text-bottom {
    vertical-align: text-bottom!important
}

.align-text-top {
    vertical-align: text-top!important
}

.float-start {
    float: left!important
}

.float-end {
    float: right!important
}

.float-none {
    float: none!important
}

.opacity-0 {
    opacity: 0!important
}

.opacity-25 {
    opacity: .25!important
}

.opacity-50 {
    opacity: .5!important
}

.opacity-75 {
    opacity: .75!important
}

.opacity-100 {
    opacity: 1!important
}

.overflow-auto {
    overflow: auto!important
}

.overflow-hidden {
    overflow: hidden!important
}

.overflow-visible {
    overflow: visible!important
}

.overflow-scroll {
    overflow: scroll!important
}

.d-inline {
    display: inline!important
}

.d-grid {
    display: grid!important
}

.d-table {
    display: table!important
}

.d-table-row {
    display: table-row!important
}

.d-table-cell {
    display: table-cell!important
}

.d-flex {
    display: flex!important
}

.d-inline-flex {
    display: inline-flex!important
}

.d-none {
    display: none!important
}

.shadow {
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important
}

.shadow-sm {
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important
}

.shadow-lg {
    box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important
}

.shadow-none {
    box-shadow: none!important
}

.position-static {
    position: static!important
}

.position-relative {
    position: relative!important
}

.position-absolute {
    position: absolute!important
}

.position-fixed {
    position: fixed!important
}

.position-sticky {
    position: sticky!important
}

.top-0 {
    top: 0!important
}

.top-50 {
    top: 50%!important
}

.top-100 {
    top: 100%!important
}

.bottom-0 {
    bottom: 0!important
}

.bottom-50 {
    bottom: 50%!important
}

.bottom-100 {
    bottom: 100%!important
}

.start-0 {
    left: 0!important
}

.start-50 {
    left: 50%!important
}

.start-100 {
    left: 100%!important
}

.end-0 {
    right: 0!important
}

.end-50 {
    right: 50%!important
}

.end-100 {
    right: 100%!important
}

.translate-middle {
    transform: translate(-50%,-50%)!important
}

.translate-middle-x {
    transform: translateX(-50%)!important
}

.translate-middle-y {
    transform: translateY(-50%)!important
}

.border {
    border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important
}

.border-0 {
    border: 0!important
}

.border-top {
    border-top: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important
}

.border-top-0 {
    border-top: 0!important
}

.border-end {
    border-right: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important
}

.border-end-0 {
    border-right: 0!important
}

.border-bottom {
    border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important
}

.border-bottom-0 {
    border-bottom: 0!important
}

.border-start {
    border-left: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important
}

.border-start-0 {
    border-left: 0!important
}

.border-primary {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-primary-rgb),var(--bs-border-opacity))!important
}

.border-secondary {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-secondary-rgb),var(--bs-border-opacity))!important
}

.border-success {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-success-rgb),var(--bs-border-opacity))!important
}

.border-info {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-info-rgb),var(--bs-border-opacity))!important
}

.border-warning {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-warning-rgb),var(--bs-border-opacity))!important
}

.border-danger {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-danger-rgb),var(--bs-border-opacity))!important
}

.border-light {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-light-rgb),var(--bs-border-opacity))!important
}

.border-dark {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-dark-rgb),var(--bs-border-opacity))!important
}

.border-white {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-white-rgb),var(--bs-border-opacity))!important
}

.border-1 {
    --bs-border-width: 1px
}

.border-2 {
    --bs-border-width: 2px
}

.border-3 {
    --bs-border-width: 3px
}

.border-4 {
    --bs-border-width: 4px
}

.border-5 {
    --bs-border-width: 5px
}

.border-opacity-10 {
    --bs-border-opacity: 0.1
}

.border-opacity-25 {
    --bs-border-opacity: 0.25
}

.border-opacity-50 {
    --bs-border-opacity: 0.5
}

.border-opacity-75 {
    --bs-border-opacity: 0.75
}

.border-opacity-100 {
    --bs-border-opacity: 1
}

.w-25 {
    width: 25%!important
}

.w-50 {
    width: 50%!important
}

.w-75 {
    width: 75%!important
}

.w-100 {
    width: 100%!important
}

.w-auto {
    width: auto!important
}

.mw-100 {
    max-width: 100%!important
}

.vw-100 {
    width: 100vw!important
}

.min-vw-100 {
    min-width: 100vw!important
}

.h-25 {
    height: 25%!important
}

.h-50 {
    height: 50%!important
}

.h-75 {
    height: 75%!important
}

.h-100 {
    height: 100%!important
}

.h-auto {
    height: auto!important
}

.mh-100 {
    max-height: 100%!important
}

.vh-100 {
    height: 100vh!important
}

.min-vh-100 {
    min-height: 100vh!important
}

.flex-fill {
    flex: 1 1 auto!important
}

.flex-row {
    flex-direction: row!important
}

.flex-column {
    flex-direction: column!important
}

.flex-row-reverse {
    flex-direction: row-reverse!important
}

.flex-column-reverse {
    flex-direction: column-reverse!important
}

.flex-grow-0 {
    flex-grow: 0!important
}

.flex-grow-1 {
    flex-grow: 1!important
}

.flex-shrink-0 {
    flex-shrink: 0!important
}

.flex-shrink-1 {
    flex-shrink: 1!important
}

.flex-wrap {
    flex-wrap: wrap!important
}

.flex-nowrap {
    flex-wrap: nowrap!important
}

.flex-wrap-reverse {
    flex-wrap: wrap-reverse!important
}

.justify-content-start {
    justify-content: flex-start!important
}

.justify-content-end {
    justify-content: flex-end!important
}

.justify-content-center {
    justify-content: center!important
}

.justify-content-between {
    justify-content: space-between!important
}

.justify-content-around {
    justify-content: space-around!important
}

.justify-content-evenly {
    justify-content: space-evenly!important
}

.align-items-start {
    align-items: flex-start!important
}

.align-items-end {
    align-items: flex-end!important
}

.align-items-center {
    align-items: center!important
}

.align-items-baseline {
    align-items: baseline!important
}

.align-items-stretch {
    align-items: stretch!important
}

.align-content-start {
    align-content: flex-start!important
}

.align-content-end {
    align-content: flex-end!important
}

.align-content-center {
    align-content: center!important
}

.align-content-between {
    align-content: space-between!important
}

.align-content-around {
    align-content: space-around!important
}

.align-content-stretch {
    align-content: stretch!important
}

.align-self-auto {
    align-self: auto!important
}

.align-self-start {
    align-self: flex-start!important
}

.align-self-end {
    align-self: flex-end!important
}

.align-self-center {
    align-self: center!important
}

.align-self-baseline {
    align-self: baseline!important
}

.align-self-stretch {
    align-self: stretch!important
}

.order-first {
    order: -1!important
}

.order-0 {
    order: 0!important
}

.order-1 {
    order: 1!important
}

.order-2 {
    order: 2!important
}

.order-3 {
    order: 3!important
}

.order-4 {
    order: 4!important
}

.order-5 {
    order: 5!important
}

.order-last {
    order: 6!important
}

.m-0 {
    margin: 0!important
}

.m-1 {
    margin: .25rem!important
}

.m-2 {
    margin: .5rem!important
}

.m-3 {
    margin: 1rem!important
}

.m-4 {
    margin: 2rem!important
}

.m-5 {
    margin: 4rem!important
}

.m-6 {
    margin: 8rem!important
}

.m-7 {
    margin: 16rem!important
}

.m-auto {
    margin: auto!important
}

.mx-0 {
    margin-left: 0!important;
    margin-right: 0!important
}

.mx-1 {
    margin-left: .25rem!important;
    margin-right: .25rem!important
}

.mx-2 {
    margin-left: .5rem!important;
    margin-right: .5rem!important
}

.mx-3 {
    margin-left: 1rem!important;
    margin-right: 1rem!important
}

.mx-4 {
    margin-left: 2rem!important;
    margin-right: 2rem!important
}

.mx-5 {
    margin-left: 4rem!important;
    margin-right: 4rem!important
}

.mx-6 {
    margin-left: 8rem!important;
    margin-right: 8rem!important
}

.mx-7 {
    margin-left: 16rem!important;
    margin-right: 16rem!important
}

.mx-auto {
    margin-left: auto!important;
    margin-right: auto!important
}

.my-0 {
    margin-bottom: 0!important;
    margin-top: 0!important
}

.my-1 {
    margin-bottom: .25rem!important;
    margin-top: .25rem!important
}

.my-2 {
    margin-bottom: .5rem!important;
    margin-top: .5rem!important
}

.my-3 {
    margin-bottom: 1rem!important;
    margin-top: 1rem!important
}

.my-4 {
    margin-bottom: 2rem!important;
    margin-top: 2rem!important
}

.my-5 {
    margin-bottom: 4rem!important;
    margin-top: 4rem!important
}

.my-6 {
    margin-bottom: 8rem!important;
    margin-top: 8rem!important
}

.my-7 {
    margin-bottom: 16rem!important;
    margin-top: 16rem!important
}

.my-auto {
    margin-bottom: auto!important;
    margin-top: auto!important
}

.mt-0 {
    margin-top: 0!important
}

.mt-1 {
    margin-top: .25rem!important
}

.mt-2 {
    margin-top: .5rem!important
}

.mt-3 {
    margin-top: 1rem!important
}

.mt-4 {
    margin-top: 2rem!important
}

.mt-5 {
    margin-top: 4rem!important
}

.mt-6 {
    margin-top: 8rem!important
}

.mt-7 {
    margin-top: 16rem!important
}

.mt-auto {
    margin-top: auto!important
}

.me-0 {
    margin-right: 0!important
}

.me-1 {
    margin-right: .25rem!important
}

.me-2 {
    margin-right: .5rem!important
}

.me-3 {
    margin-right: 1rem!important
}

.me-4 {
    margin-right: 2rem!important
}

.me-5 {
    margin-right: 4rem!important
}

.me-6 {
    margin-right: 8rem!important
}

.me-7 {
    margin-right: 16rem!important
}

.me-auto {
    margin-right: auto!important
}

.mb-0 {
    margin-bottom: 0!important
}

.mb-1 {
    margin-bottom: .25rem!important
}

.mb-2 {
    margin-bottom: .5rem!important
}

.mb-3 {
    margin-bottom: 1rem!important
}

.mb-4 {
    margin-bottom: 2rem!important
}

.mb-5 {
    margin-bottom: 4rem!important
}

.mb-6 {
    margin-bottom: 8rem!important
}

.mb-7 {
    margin-bottom: 16rem!important
}

.mb-auto {
    margin-bottom: auto!important
}

.ms-0 {
    margin-left: 0!important
}

.ms-1 {
    margin-left: .25rem!important
}

.ms-2 {
    margin-left: .5rem!important
}

.ms-3 {
    margin-left: 1rem!important
}

.ms-4 {
    margin-left: 2rem!important
}

.ms-5 {
    margin-left: 4rem!important
}

.ms-6 {
    margin-left: 8rem!important
}

.ms-7 {
    margin-left: 16rem!important
}

.ms-auto {
    margin-left: auto!important
}

.m-n1 {
    margin: -.25rem!important
}

.m-n2 {
    margin: -.5rem!important
}

.m-n3 {
    margin: -1rem!important
}

.m-n4 {
    margin: -2rem!important
}

.m-n5 {
    margin: -4rem!important
}

.m-n6 {
    margin: -8rem!important
}

.m-n7 {
    margin: -16rem!important
}

.mx-n1 {
    margin-left: -.25rem!important;
    margin-right: -.25rem!important
}

.mx-n2 {
    margin-left: -.5rem!important;
    margin-right: -.5rem!important
}

.mx-n3 {
    margin-left: -1rem!important;
    margin-right: -1rem!important
}

.mx-n4 {
    margin-left: -2rem!important;
    margin-right: -2rem!important
}

.mx-n5 {
    margin-left: -4rem!important;
    margin-right: -4rem!important
}

.mx-n6 {
    margin-left: -8rem!important;
    margin-right: -8rem!important
}

.mx-n7 {
    margin-left: -16rem!important;
    margin-right: -16rem!important
}

.my-n1 {
    margin-bottom: -.25rem!important;
    margin-top: -.25rem!important
}

.my-n2 {
    margin-bottom: -.5rem!important;
    margin-top: -.5rem!important
}

.my-n3 {
    margin-bottom: -1rem!important;
    margin-top: -1rem!important
}

.my-n4 {
    margin-bottom: -2rem!important;
    margin-top: -2rem!important
}

.my-n5 {
    margin-bottom: -4rem!important;
    margin-top: -4rem!important
}

.my-n6 {
    margin-bottom: -8rem!important;
    margin-top: -8rem!important
}

.my-n7 {
    margin-bottom: -16rem!important;
    margin-top: -16rem!important
}

.mt-n1 {
    margin-top: -.25rem!important
}

.mt-n2 {
    margin-top: -.5rem!important
}

.mt-n3 {
    margin-top: -1rem!important
}

.mt-n4 {
    margin-top: -2rem!important
}

.mt-n5 {
    margin-top: -4rem!important
}

.mt-n6 {
    margin-top: -8rem!important
}

.mt-n7 {
    margin-top: -16rem!important
}

.me-n1 {
    margin-right: -.25rem!important
}

.me-n2 {
    margin-right: -.5rem!important
}

.me-n3 {
    margin-right: -1rem!important
}

.me-n4 {
    margin-right: -2rem!important
}

.me-n5 {
    margin-right: -4rem!important
}

.me-n6 {
    margin-right: -8rem!important
}

.me-n7 {
    margin-right: -16rem!important
}

.mb-n1 {
    margin-bottom: -.25rem!important
}

.mb-n2 {
    margin-bottom: -.5rem!important
}

.mb-n3 {
    margin-bottom: -1rem!important
}

.mb-n4 {
    margin-bottom: -2rem!important
}

.mb-n5 {
    margin-bottom: -4rem!important
}

.mb-n6 {
    margin-bottom: -8rem!important
}

.mb-n7 {
    margin-bottom: -16rem!important
}

.ms-n1 {
    margin-left: -.25rem!important
}

.ms-n2 {
    margin-left: -.5rem!important
}

.ms-n3 {
    margin-left: -1rem!important
}

.ms-n4 {
    margin-left: -2rem!important
}

.ms-n5 {
    margin-left: -4rem!important
}

.ms-n6 {
    margin-left: -8rem!important
}

.ms-n7 {
    margin-left: -16rem!important
}

.p-0 {
    padding: 0!important
}

.p-1 {
    padding: .25rem!important
}

.p-2 {
    padding: .5rem!important
}

.p-3 {
    padding: 1rem!important
}

.p-4 {
    padding: 2rem!important
}

.p-5 {
    padding: 4rem!important
}

.p-6 {
    padding: 8rem!important
}

.p-7 {
    padding: 16rem!important
}

.px-0 {
    padding-left: 0!important;
    padding-right: 0!important
}

.px-1 {
    padding-left: .25rem!important;
    padding-right: .25rem!important
}

.px-2 {
    padding-left: .5rem!important;
    padding-right: .5rem!important
}

.px-3 {
    padding-left: 1rem!important;
    padding-right: 1rem!important
}

.px-4 {
    padding-left: 2rem!important;
    padding-right: 2rem!important
}

.px-5 {
    padding-left: 4rem!important;
    padding-right: 4rem!important
}

.px-6 {
    padding-left: 8rem!important;
    padding-right: 8rem!important
}

.px-7 {
    padding-left: 16rem!important;
    padding-right: 16rem!important
}

.py-0 {
    padding-bottom: 0!important;
    padding-top: 0!important
}

.py-1 {
    padding-bottom: .25rem!important;
    padding-top: .25rem!important
}

.py-2 {
    padding-bottom: .5rem!important;
    padding-top: .5rem!important
}

.py-3 {
    padding-bottom: 1rem!important;
    padding-top: 1rem!important
}

.py-4 {
    padding-bottom: 2rem!important;
    padding-top: 2rem!important
}

.py-5 {
    padding-bottom: 4rem!important;
    padding-top: 4rem!important
}

.py-6 {
    padding-bottom: 8rem!important;
    padding-top: 8rem!important
}

.py-7 {
    padding-bottom: 16rem!important;
    padding-top: 16rem!important
}

.pt-0 {
    padding-top: 0!important
}

.pt-1 {
    padding-top: .25rem!important
}

.pt-2 {
    padding-top: .5rem!important
}

.pt-3 {
    padding-top: 1rem!important
}

.pt-4 {
    padding-top: 2rem!important
}

.pt-5 {
    padding-top: 4rem!important
}

.pt-6 {
    padding-top: 8rem!important
}

.pt-7 {
    padding-top: 16rem!important
}

.pe-0 {
    padding-right: 0!important
}

.pe-1 {
    padding-right: .25rem!important
}

.pe-2 {
    padding-right: .5rem!important
}

.pe-3 {
    padding-right: 1rem!important
}

.pe-4 {
    padding-right: 2rem!important
}

.pe-5 {
    padding-right: 4rem!important
}

.pe-6 {
    padding-right: 8rem!important
}

.pe-7 {
    padding-right: 16rem!important
}

.pb-0 {
    padding-bottom: 0!important
}

.pb-1 {
    padding-bottom: .25rem!important
}

.pb-2 {
    padding-bottom: .5rem!important
}

.pb-3 {
    padding-bottom: 1rem!important
}

.pb-4 {
    padding-bottom: 2rem!important
}

.pb-5 {
    padding-bottom: 4rem!important
}

.pb-6 {
    padding-bottom: 8rem!important
}

.pb-7 {
    padding-bottom: 16rem!important
}

.ps-0 {
    padding-left: 0!important
}

.ps-1 {
    padding-left: .25rem!important
}

.ps-2 {
    padding-left: .5rem!important
}

.ps-3 {
    padding-left: 1rem!important
}

.ps-4 {
    padding-left: 2rem!important
}

.ps-5 {
    padding-left: 4rem!important
}

.ps-6 {
    padding-left: 8rem!important
}

.ps-7 {
    padding-left: 16rem!important
}

.gap-0 {
    gap: 0!important
}

.gap-1 {
    gap: .25rem!important
}

.gap-2 {
    gap: .5rem!important
}

.gap-3 {
    gap: 1rem!important
}

.gap-4 {
    gap: 2rem!important
}

.gap-5 {
    gap: 4rem!important
}

.gap-6 {
    gap: 8rem!important
}

.gap-7 {
    gap: 16rem!important
}

.font-monospace {
    font-family: var(--bs-font-monospace)!important
}

.fs-1 {
    font-size: calc(1.375rem + 1.5vw)!important
}

.fs-2 {
    font-size: calc(1.325rem + .9vw)!important
}

.fs-3 {
    font-size: calc(1.3rem + .6vw)!important
}

.fs-4 {
    font-size: calc(1.275rem + .3vw)!important
}

.fs-5 {
    font-size: 1.25rem!important
}

.fs-6 {
    font-size: 1rem!important
}

.fst-italic {
    font-style: italic!important
}

.fst-normal {
    font-style: normal!important
}

.fw-light {
    font-weight: 300!important
}

.fw-lighter {
    font-weight: lighter!important
}

.fw-normal {
    font-weight: 400!important
}

.fw-bold {
    font-weight: 700!important
}

.fw-semibold {
    font-weight: 600!important
}

.fw-bolder {
    font-weight: bolder!important
}

.lh-1 {
    line-height: 1!important
}

.lh-sm {
    line-height: 1.25!important
}

.lh-base {
    line-height: 1.5!important
}

.lh-lg {
    line-height: 2!important
}

.text-start {
    text-align: left!important
}

.text-end {
    text-align: right!important
}

.text-center {
    text-align: center!important
}

.text-decoration-none {
    text-decoration: none!important
}

.text-decoration-underline {
    text-decoration: underline!important
}

.text-decoration-line-through {
    text-decoration: line-through!important
}

.text-lowercase {
    text-transform: lowercase!important
}

.text-uppercase {
    text-transform: uppercase!important
}

.text-capitalize {
    text-transform: capitalize!important
}

.text-wrap {
    white-space: normal!important
}

.text-nowrap {
    white-space: nowrap!important
}

.text-break {
    word-wrap: break-word!important;
    word-break: break-word!important
}

.text-primary {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-primary-rgb),var(--bs-text-opacity))!important
}

.text-secondary {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-secondary-rgb),var(--bs-text-opacity))!important
}

.text-success {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-success-rgb),var(--bs-text-opacity))!important
}

.text-info {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-info-rgb),var(--bs-text-opacity))!important
}

.text-warning {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-warning-rgb),var(--bs-text-opacity))!important
}

.text-danger {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-danger-rgb),var(--bs-text-opacity))!important
}

.text-light {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-light-rgb),var(--bs-text-opacity))!important
}

.text-dark {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-dark-rgb),var(--bs-text-opacity))!important
}

.text-black {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-black-rgb),var(--bs-text-opacity))!important
}

.text-white {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-white-rgb),var(--bs-text-opacity))!important
}

.text-body {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-body-color-rgb),var(--bs-text-opacity))!important
}

.text-muted {
    --bs-text-opacity: 1;
    color: #6c757d!important
}

.text-black-50 {
    --bs-text-opacity: 1;
    color: rgba(0,0,0,.5)!important
}

.text-white-50 {
    --bs-text-opacity: 1;
    color: hsla(0,0%,100%,.5)!important
}

.text-reset {
    --bs-text-opacity: 1;
    color: inherit!important
}

.text-opacity-25 {
    --bs-text-opacity: 0.25
}

.text-opacity-50 {
    --bs-text-opacity: 0.5
}

.text-opacity-75 {
    --bs-text-opacity: 0.75
}

.text-opacity-100 {
    --bs-text-opacity: 1
}

.bg-primary {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-primary-rgb),var(--bs-bg-opacity))!important
}

.bg-secondary {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-secondary-rgb),var(--bs-bg-opacity))!important
}

.bg-success {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-success-rgb),var(--bs-bg-opacity))!important
}

.bg-info {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important
}

.bg-warning {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-warning-rgb),var(--bs-bg-opacity))!important
}

.bg-danger {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-danger-rgb),var(--bs-bg-opacity))!important
}

.bg-light {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-light-rgb),var(--bs-bg-opacity))!important
}

.bg-dark {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important
}

.bg-black {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-black-rgb),var(--bs-bg-opacity))!important
}

.bg-white {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-white-rgb),var(--bs-bg-opacity))!important
}

.bg-body {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-body-bg-rgb),var(--bs-bg-opacity))!important
}

.bg-transparent {
    --bs-bg-opacity: 1;
    background-color: transparent!important
}

.bg-opacity-10 {
    --bs-bg-opacity: 0.1
}

.bg-opacity-25 {
    --bs-bg-opacity: 0.25
}

.bg-opacity-50 {
    --bs-bg-opacity: 0.5
}

.bg-opacity-75 {
    --bs-bg-opacity: 0.75
}

.bg-opacity-100 {
    --bs-bg-opacity: 1
}

.bg-gradient {
    background-image: var(--bs-gradient)!important
}

.user-select-all {
    -webkit-user-select: all!important;
    -moz-user-select: all!important;
    user-select: all!important
}

.user-select-auto {
    -webkit-user-select: auto!important;
    -moz-user-select: auto!important;
    user-select: auto!important
}

.user-select-none {
    -webkit-user-select: none!important;
    -moz-user-select: none!important;
    user-select: none!important
}

.pe-none {
    pointer-events: none!important
}

.pe-auto {
    pointer-events: auto!important
}

.rounded {
    border-radius: var(--bs-border-radius)!important
}

.rounded-0 {
    border-radius: 0!important
}

.rounded-1 {
    border-radius: var(--bs-border-radius-sm)!important
}

.rounded-2 {
    border-radius: var(--bs-border-radius)!important
}

.rounded-3 {
    border-radius: var(--bs-border-radius-lg)!important
}

.rounded-4 {
    border-radius: var(--bs-border-radius-xl)!important
}

.rounded-5 {
    border-radius: var(--bs-border-radius-2xl)!important
}

.rounded-circle {
    border-radius: 50%!important
}

.rounded-pill {
    border-radius: var(--bs-border-radius-pill)!important
}

.rounded-top {
    border-top-left-radius: var(--bs-border-radius)!important
}

.rounded-end,.rounded-top {
    border-top-right-radius: var(--bs-border-radius)!important
}

.rounded-bottom,.rounded-end {
    border-bottom-right-radius: var(--bs-border-radius)!important
}

.rounded-bottom,.rounded-start {
    border-bottom-left-radius: var(--bs-border-radius)!important
}

.rounded-start {
    border-top-left-radius: var(--bs-border-radius)!important
}

.visible {
    visibility: visible!important
}

.invisible {
    visibility: hidden!important
}

@media(min-width: 576px) {
    .float-sm-start {
        float:left!important
    }

    .float-sm-end {
        float: right!important
    }

    .float-sm-none {
        float: none!important
    }

    .d-sm-inline {
        display: inline!important
    }

    .d-sm-inline-block {
        display: inline-block!important
    }

    .d-sm-block {
        display: block!important
    }

    .d-sm-grid {
        display: grid!important
    }

    .d-sm-table {
        display: table!important
    }

    .d-sm-table-row {
        display: table-row!important
    }

    .d-sm-table-cell {
        display: table-cell!important
    }

    .d-sm-flex {
        display: flex!important
    }

    .d-sm-inline-flex {
        display: inline-flex!important
    }

    .d-sm-none {
        display: none!important
    }

    .flex-sm-fill {
        flex: 1 1 auto!important
    }

    .flex-sm-row {
        flex-direction: row!important
    }

    .flex-sm-column {
        flex-direction: column!important
    }

    .flex-sm-row-reverse {
        flex-direction: row-reverse!important
    }

    .flex-sm-column-reverse {
        flex-direction: column-reverse!important
    }

    .flex-sm-grow-0 {
        flex-grow: 0!important
    }

    .flex-sm-grow-1 {
        flex-grow: 1!important
    }

    .flex-sm-shrink-0 {
        flex-shrink: 0!important
    }

    .flex-sm-shrink-1 {
        flex-shrink: 1!important
    }

    .flex-sm-wrap {
        flex-wrap: wrap!important
    }

    .flex-sm-nowrap {
        flex-wrap: nowrap!important
    }

    .flex-sm-wrap-reverse {
        flex-wrap: wrap-reverse!important
    }

    .justify-content-sm-start {
        justify-content: flex-start!important
    }

    .justify-content-sm-end {
        justify-content: flex-end!important
    }

    .justify-content-sm-center {
        justify-content: center!important
    }

    .justify-content-sm-between {
        justify-content: space-between!important
    }

    .justify-content-sm-around {
        justify-content: space-around!important
    }

    .justify-content-sm-evenly {
        justify-content: space-evenly!important
    }

    .align-items-sm-start {
        align-items: flex-start!important
    }

    .align-items-sm-end {
        align-items: flex-end!important
    }

    .align-items-sm-center {
        align-items: center!important
    }

    .align-items-sm-baseline {
        align-items: baseline!important
    }

    .align-items-sm-stretch {
        align-items: stretch!important
    }

    .align-content-sm-start {
        align-content: flex-start!important
    }

    .align-content-sm-end {
        align-content: flex-end!important
    }

    .align-content-sm-center {
        align-content: center!important
    }

    .align-content-sm-between {
        align-content: space-between!important
    }

    .align-content-sm-around {
        align-content: space-around!important
    }

    .align-content-sm-stretch {
        align-content: stretch!important
    }

    .align-self-sm-auto {
        align-self: auto!important
    }

    .align-self-sm-start {
        align-self: flex-start!important
    }

    .align-self-sm-end {
        align-self: flex-end!important
    }

    .align-self-sm-center {
        align-self: center!important
    }

    .align-self-sm-baseline {
        align-self: baseline!important
    }

    .align-self-sm-stretch {
        align-self: stretch!important
    }

    .order-sm-first {
        order: -1!important
    }

    .order-sm-0 {
        order: 0!important
    }

    .order-sm-1 {
        order: 1!important
    }

    .order-sm-2 {
        order: 2!important
    }

    .order-sm-3 {
        order: 3!important
    }

    .order-sm-4 {
        order: 4!important
    }

    .order-sm-5 {
        order: 5!important
    }

    .order-sm-last {
        order: 6!important
    }

    .m-sm-0 {
        margin: 0!important
    }

    .m-sm-1 {
        margin: .25rem!important
    }

    .m-sm-2 {
        margin: .5rem!important
    }

    .m-sm-3 {
        margin: 1rem!important
    }

    .m-sm-4 {
        margin: 2rem!important
    }

    .m-sm-5 {
        margin: 4rem!important
    }

    .m-sm-6 {
        margin: 8rem!important
    }

    .m-sm-7 {
        margin: 16rem!important
    }

    .m-sm-auto {
        margin: auto!important
    }

    .mx-sm-0 {
        margin-left: 0!important;
        margin-right: 0!important
    }

    .mx-sm-1 {
        margin-left: .25rem!important;
        margin-right: .25rem!important
    }

    .mx-sm-2 {
        margin-left: .5rem!important;
        margin-right: .5rem!important
    }

    .mx-sm-3 {
        margin-left: 1rem!important;
        margin-right: 1rem!important
    }

    .mx-sm-4 {
        margin-left: 2rem!important;
        margin-right: 2rem!important
    }

    .mx-sm-5 {
        margin-left: 4rem!important;
        margin-right: 4rem!important
    }

    .mx-sm-6 {
        margin-left: 8rem!important;
        margin-right: 8rem!important
    }

    .mx-sm-7 {
        margin-left: 16rem!important;
        margin-right: 16rem!important
    }

    .mx-sm-auto {
        margin-left: auto!important;
        margin-right: auto!important
    }

    .my-sm-0 {
        margin-bottom: 0!important;
        margin-top: 0!important
    }

    .my-sm-1 {
        margin-bottom: .25rem!important;
        margin-top: .25rem!important
    }

    .my-sm-2 {
        margin-bottom: .5rem!important;
        margin-top: .5rem!important
    }

    .my-sm-3 {
        margin-bottom: 1rem!important;
        margin-top: 1rem!important
    }

    .my-sm-4 {
        margin-bottom: 2rem!important;
        margin-top: 2rem!important
    }

    .my-sm-5 {
        margin-bottom: 4rem!important;
        margin-top: 4rem!important
    }

    .my-sm-6 {
        margin-bottom: 8rem!important;
        margin-top: 8rem!important
    }

    .my-sm-7 {
        margin-bottom: 16rem!important;
        margin-top: 16rem!important
    }

    .my-sm-auto {
        margin-bottom: auto!important;
        margin-top: auto!important
    }

    .mt-sm-0 {
        margin-top: 0!important
    }

    .mt-sm-1 {
        margin-top: .25rem!important
    }

    .mt-sm-2 {
        margin-top: .5rem!important
    }

    .mt-sm-3 {
        margin-top: 1rem!important
    }

    .mt-sm-4 {
        margin-top: 2rem!important
    }

    .mt-sm-5 {
        margin-top: 4rem!important
    }

    .mt-sm-6 {
        margin-top: 8rem!important
    }

    .mt-sm-7 {
        margin-top: 16rem!important
    }

    .mt-sm-auto {
        margin-top: auto!important
    }

    .me-sm-0 {
        margin-right: 0!important
    }

    .me-sm-1 {
        margin-right: .25rem!important
    }

    .me-sm-2 {
        margin-right: .5rem!important
    }

    .me-sm-3 {
        margin-right: 1rem!important
    }

    .me-sm-4 {
        margin-right: 2rem!important
    }

    .me-sm-5 {
        margin-right: 4rem!important
    }

    .me-sm-6 {
        margin-right: 8rem!important
    }

    .me-sm-7 {
        margin-right: 16rem!important
    }

    .me-sm-auto {
        margin-right: auto!important
    }

    .mb-sm-0 {
        margin-bottom: 0!important
    }

    .mb-sm-1 {
        margin-bottom: .25rem!important
    }

    .mb-sm-2 {
        margin-bottom: .5rem!important
    }

    .mb-sm-3 {
        margin-bottom: 1rem!important
    }

    .mb-sm-4 {
        margin-bottom: 2rem!important
    }

    .mb-sm-5 {
        margin-bottom: 4rem!important
    }

    .mb-sm-6 {
        margin-bottom: 8rem!important
    }

    .mb-sm-7 {
        margin-bottom: 16rem!important
    }

    .mb-sm-auto {
        margin-bottom: auto!important
    }

    .ms-sm-0 {
        margin-left: 0!important
    }

    .ms-sm-1 {
        margin-left: .25rem!important
    }

    .ms-sm-2 {
        margin-left: .5rem!important
    }

    .ms-sm-3 {
        margin-left: 1rem!important
    }

    .ms-sm-4 {
        margin-left: 2rem!important
    }

    .ms-sm-5 {
        margin-left: 4rem!important
    }

    .ms-sm-6 {
        margin-left: 8rem!important
    }

    .ms-sm-7 {
        margin-left: 16rem!important
    }

    .ms-sm-auto {
        margin-left: auto!important
    }

    .m-sm-n1 {
        margin: -.25rem!important
    }

    .m-sm-n2 {
        margin: -.5rem!important
    }

    .m-sm-n3 {
        margin: -1rem!important
    }

    .m-sm-n4 {
        margin: -2rem!important
    }

    .m-sm-n5 {
        margin: -4rem!important
    }

    .m-sm-n6 {
        margin: -8rem!important
    }

    .m-sm-n7 {
        margin: -16rem!important
    }

    .mx-sm-n1 {
        margin-left: -.25rem!important;
        margin-right: -.25rem!important
    }

    .mx-sm-n2 {
        margin-left: -.5rem!important;
        margin-right: -.5rem!important
    }

    .mx-sm-n3 {
        margin-left: -1rem!important;
        margin-right: -1rem!important
    }

    .mx-sm-n4 {
        margin-left: -2rem!important;
        margin-right: -2rem!important
    }

    .mx-sm-n5 {
        margin-left: -4rem!important;
        margin-right: -4rem!important
    }

    .mx-sm-n6 {
        margin-left: -8rem!important;
        margin-right: -8rem!important
    }

    .mx-sm-n7 {
        margin-left: -16rem!important;
        margin-right: -16rem!important
    }

    .my-sm-n1 {
        margin-bottom: -.25rem!important;
        margin-top: -.25rem!important
    }

    .my-sm-n2 {
        margin-bottom: -.5rem!important;
        margin-top: -.5rem!important
    }

    .my-sm-n3 {
        margin-bottom: -1rem!important;
        margin-top: -1rem!important
    }

    .my-sm-n4 {
        margin-bottom: -2rem!important;
        margin-top: -2rem!important
    }

    .my-sm-n5 {
        margin-bottom: -4rem!important;
        margin-top: -4rem!important
    }

    .my-sm-n6 {
        margin-bottom: -8rem!important;
        margin-top: -8rem!important
    }

    .my-sm-n7 {
        margin-bottom: -16rem!important;
        margin-top: -16rem!important
    }

    .mt-sm-n1 {
        margin-top: -.25rem!important
    }

    .mt-sm-n2 {
        margin-top: -.5rem!important
    }

    .mt-sm-n3 {
        margin-top: -1rem!important
    }

    .mt-sm-n4 {
        margin-top: -2rem!important
    }

    .mt-sm-n5 {
        margin-top: -4rem!important
    }

    .mt-sm-n6 {
        margin-top: -8rem!important
    }

    .mt-sm-n7 {
        margin-top: -16rem!important
    }

    .me-sm-n1 {
        margin-right: -.25rem!important
    }

    .me-sm-n2 {
        margin-right: -.5rem!important
    }

    .me-sm-n3 {
        margin-right: -1rem!important
    }

    .me-sm-n4 {
        margin-right: -2rem!important
    }

    .me-sm-n5 {
        margin-right: -4rem!important
    }

    .me-sm-n6 {
        margin-right: -8rem!important
    }

    .me-sm-n7 {
        margin-right: -16rem!important
    }

    .mb-sm-n1 {
        margin-bottom: -.25rem!important
    }

    .mb-sm-n2 {
        margin-bottom: -.5rem!important
    }

    .mb-sm-n3 {
        margin-bottom: -1rem!important
    }

    .mb-sm-n4 {
        margin-bottom: -2rem!important
    }

    .mb-sm-n5 {
        margin-bottom: -4rem!important
    }

    .mb-sm-n6 {
        margin-bottom: -8rem!important
    }

    .mb-sm-n7 {
        margin-bottom: -16rem!important
    }

    .ms-sm-n1 {
        margin-left: -.25rem!important
    }

    .ms-sm-n2 {
        margin-left: -.5rem!important
    }

    .ms-sm-n3 {
        margin-left: -1rem!important
    }

    .ms-sm-n4 {
        margin-left: -2rem!important
    }

    .ms-sm-n5 {
        margin-left: -4rem!important
    }

    .ms-sm-n6 {
        margin-left: -8rem!important
    }

    .ms-sm-n7 {
        margin-left: -16rem!important
    }

    .p-sm-0 {
        padding: 0!important
    }

    .p-sm-1 {
        padding: .25rem!important
    }

    .p-sm-2 {
        padding: .5rem!important
    }

    .p-sm-3 {
        padding: 1rem!important
    }

    .p-sm-4 {
        padding: 2rem!important
    }

    .p-sm-5 {
        padding: 4rem!important
    }

    .p-sm-6 {
        padding: 8rem!important
    }

    .p-sm-7 {
        padding: 16rem!important
    }

    .px-sm-0 {
        padding-left: 0!important;
        padding-right: 0!important
    }

    .px-sm-1 {
        padding-left: .25rem!important;
        padding-right: .25rem!important
    }

    .px-sm-2 {
        padding-left: .5rem!important;
        padding-right: .5rem!important
    }

    .px-sm-3 {
        padding-left: 1rem!important;
        padding-right: 1rem!important
    }

    .px-sm-4 {
        padding-left: 2rem!important;
        padding-right: 2rem!important
    }

    .px-sm-5 {
        padding-left: 4rem!important;
        padding-right: 4rem!important
    }

    .px-sm-6 {
        padding-left: 8rem!important;
        padding-right: 8rem!important
    }

    .px-sm-7 {
        padding-left: 16rem!important;
        padding-right: 16rem!important
    }

    .py-sm-0 {
        padding-bottom: 0!important;
        padding-top: 0!important
    }

    .py-sm-1 {
        padding-bottom: .25rem!important;
        padding-top: .25rem!important
    }

    .py-sm-2 {
        padding-bottom: .5rem!important;
        padding-top: .5rem!important
    }

    .py-sm-3 {
        padding-bottom: 1rem!important;
        padding-top: 1rem!important
    }

    .py-sm-4 {
        padding-bottom: 2rem!important;
        padding-top: 2rem!important
    }

    .py-sm-5 {
        padding-bottom: 4rem!important;
        padding-top: 4rem!important
    }

    .py-sm-6 {
        padding-bottom: 8rem!important;
        padding-top: 8rem!important
    }

    .py-sm-7 {
        padding-bottom: 16rem!important;
        padding-top: 16rem!important
    }

    .pt-sm-0 {
        padding-top: 0!important
    }

    .pt-sm-1 {
        padding-top: .25rem!important
    }

    .pt-sm-2 {
        padding-top: .5rem!important
    }

    .pt-sm-3 {
        padding-top: 1rem!important
    }

    .pt-sm-4 {
        padding-top: 2rem!important
    }

    .pt-sm-5 {
        padding-top: 4rem!important
    }

    .pt-sm-6 {
        padding-top: 8rem!important
    }

    .pt-sm-7 {
        padding-top: 16rem!important
    }

    .pe-sm-0 {
        padding-right: 0!important
    }

    .pe-sm-1 {
        padding-right: .25rem!important
    }

    .pe-sm-2 {
        padding-right: .5rem!important
    }

    .pe-sm-3 {
        padding-right: 1rem!important
    }

    .pe-sm-4 {
        padding-right: 2rem!important
    }

    .pe-sm-5 {
        padding-right: 4rem!important
    }

    .pe-sm-6 {
        padding-right: 8rem!important
    }

    .pe-sm-7 {
        padding-right: 16rem!important
    }

    .pb-sm-0 {
        padding-bottom: 0!important
    }

    .pb-sm-1 {
        padding-bottom: .25rem!important
    }

    .pb-sm-2 {
        padding-bottom: .5rem!important
    }

    .pb-sm-3 {
        padding-bottom: 1rem!important
    }

    .pb-sm-4 {
        padding-bottom: 2rem!important
    }

    .pb-sm-5 {
        padding-bottom: 4rem!important
    }

    .pb-sm-6 {
        padding-bottom: 8rem!important
    }

    .pb-sm-7 {
        padding-bottom: 16rem!important
    }

    .ps-sm-0 {
        padding-left: 0!important
    }

    .ps-sm-1 {
        padding-left: .25rem!important
    }

    .ps-sm-2 {
        padding-left: .5rem!important
    }

    .ps-sm-3 {
        padding-left: 1rem!important
    }

    .ps-sm-4 {
        padding-left: 2rem!important
    }

    .ps-sm-5 {
        padding-left: 4rem!important
    }

    .ps-sm-6 {
        padding-left: 8rem!important
    }

    .ps-sm-7 {
        padding-left: 16rem!important
    }

    .gap-sm-0 {
        gap: 0!important
    }

    .gap-sm-1 {
        gap: .25rem!important
    }

    .gap-sm-2 {
        gap: .5rem!important
    }

    .gap-sm-3 {
        gap: 1rem!important
    }

    .gap-sm-4 {
        gap: 2rem!important
    }

    .gap-sm-5 {
        gap: 4rem!important
    }

    .gap-sm-6 {
        gap: 8rem!important
    }

    .gap-sm-7 {
        gap: 16rem!important
    }

    .text-sm-start {
        text-align: left!important
    }

    .text-sm-end {
        text-align: right!important
    }

    .text-sm-center {
        text-align: center!important
    }
}

@media(min-width: 768px) {
    .float-md-start {
        float:left!important
    }

    .float-md-end {
        float: right!important
    }

    .float-md-none {
        float: none!important
    }

    .d-md-inline {
        display: inline!important
    }

    .d-md-inline-block {
        display: inline-block!important
    }

    .d-md-block {
        display: block!important
    }

    .d-md-grid {
        display: grid!important
    }

    .d-md-table {
        display: table!important
    }

    .d-md-table-row {
        display: table-row!important
    }

    .d-md-table-cell {
        display: table-cell!important
    }

    .d-md-flex {
        display: flex!important
    }

    .d-md-inline-flex {
        display: inline-flex!important
    }

    .d-md-none {
        display: none!important
    }

    .flex-md-fill {
        flex: 1 1 auto!important
    }

    .flex-md-row {
        flex-direction: row!important
    }

    .flex-md-column {
        flex-direction: column!important
    }

    .flex-md-row-reverse {
        flex-direction: row-reverse!important
    }

    .flex-md-column-reverse {
        flex-direction: column-reverse!important
    }

    .flex-md-grow-0 {
        flex-grow: 0!important
    }

    .flex-md-grow-1 {
        flex-grow: 1!important
    }

    .flex-md-shrink-0 {
        flex-shrink: 0!important
    }

    .flex-md-shrink-1 {
        flex-shrink: 1!important
    }

    .flex-md-wrap {
        flex-wrap: wrap!important
    }

    .flex-md-nowrap {
        flex-wrap: nowrap!important
    }

    .flex-md-wrap-reverse {
        flex-wrap: wrap-reverse!important
    }

    .justify-content-md-start {
        justify-content: flex-start!important
    }

    .justify-content-md-end {
        justify-content: flex-end!important
    }

    .justify-content-md-center {
        justify-content: center!important
    }

    .justify-content-md-between {
        justify-content: space-between!important
    }

    .justify-content-md-around {
        justify-content: space-around!important
    }

    .justify-content-md-evenly {
        justify-content: space-evenly!important
    }

    .align-items-md-start {
        align-items: flex-start!important
    }

    .align-items-md-end {
        align-items: flex-end!important
    }

    .align-items-md-center {
        align-items: center!important
    }

    .align-items-md-baseline {
        align-items: baseline!important
    }

    .align-items-md-stretch {
        align-items: stretch!important
    }

    .align-content-md-start {
        align-content: flex-start!important
    }

    .align-content-md-end {
        align-content: flex-end!important
    }

    .align-content-md-center {
        align-content: center!important
    }

    .align-content-md-between {
        align-content: space-between!important
    }

    .align-content-md-around {
        align-content: space-around!important
    }

    .align-content-md-stretch {
        align-content: stretch!important
    }

    .align-self-md-auto {
        align-self: auto!important
    }

    .align-self-md-start {
        align-self: flex-start!important
    }

    .align-self-md-end {
        align-self: flex-end!important
    }

    .align-self-md-center {
        align-self: center!important
    }

    .align-self-md-baseline {
        align-self: baseline!important
    }

    .align-self-md-stretch {
        align-self: stretch!important
    }

    .order-md-first {
        order: -1!important
    }

    .order-md-0 {
        order: 0!important
    }

    .order-md-1 {
        order: 1!important
    }

    .order-md-2 {
        order: 2!important
    }

    .order-md-3 {
        order: 3!important
    }

    .order-md-4 {
        order: 4!important
    }

    .order-md-5 {
        order: 5!important
    }

    .order-md-last {
        order: 6!important
    }

    .m-md-0 {
        margin: 0!important
    }

    .m-md-1 {
        margin: .25rem!important
    }

    .m-md-2 {
        margin: .5rem!important
    }

    .m-md-3 {
        margin: 1rem!important
    }

    .m-md-4 {
        margin: 2rem!important
    }

    .m-md-5 {
        margin: 4rem!important
    }

    .m-md-6 {
        margin: 8rem!important
    }

    .m-md-7 {
        margin: 16rem!important
    }

    .m-md-auto {
        margin: auto!important
    }

    .mx-md-0 {
        margin-left: 0!important;
        margin-right: 0!important
    }

    .mx-md-1 {
        margin-left: .25rem!important;
        margin-right: .25rem!important
    }

    .mx-md-2 {
        margin-left: .5rem!important;
        margin-right: .5rem!important
    }

    .mx-md-3 {
        margin-left: 1rem!important;
        margin-right: 1rem!important
    }

    .mx-md-4 {
        margin-left: 2rem!important;
        margin-right: 2rem!important
    }

    .mx-md-5 {
        margin-left: 4rem!important;
        margin-right: 4rem!important
    }

    .mx-md-6 {
        margin-left: 8rem!important;
        margin-right: 8rem!important
    }

    .mx-md-7 {
        margin-left: 16rem!important;
        margin-right: 16rem!important
    }

    .mx-md-auto {
        margin-left: auto!important;
        margin-right: auto!important
    }

    .my-md-0 {
        margin-bottom: 0!important;
        margin-top: 0!important
    }

    .my-md-1 {
        margin-bottom: .25rem!important;
        margin-top: .25rem!important
    }

    .my-md-2 {
        margin-bottom: .5rem!important;
        margin-top: .5rem!important
    }

    .my-md-3 {
        margin-bottom: 1rem!important;
        margin-top: 1rem!important
    }

    .my-md-4 {
        margin-bottom: 2rem!important;
        margin-top: 2rem!important
    }

    .my-md-5 {
        margin-bottom: 4rem!important;
        margin-top: 4rem!important
    }

    .my-md-6 {
        margin-bottom: 8rem!important;
        margin-top: 8rem!important
    }

    .my-md-7 {
        margin-bottom: 16rem!important;
        margin-top: 16rem!important
    }

    .my-md-auto {
        margin-bottom: auto!important;
        margin-top: auto!important
    }

    .mt-md-0 {
        margin-top: 0!important
    }

    .mt-md-1 {
        margin-top: .25rem!important
    }

    .mt-md-2 {
        margin-top: .5rem!important
    }

    .mt-md-3 {
        margin-top: 1rem!important
    }

    .mt-md-4 {
        margin-top: 2rem!important
    }

    .mt-md-5 {
        margin-top: 4rem!important
    }

    .mt-md-6 {
        margin-top: 8rem!important
    }

    .mt-md-7 {
        margin-top: 16rem!important
    }

    .mt-md-auto {
        margin-top: auto!important
    }

    .me-md-0 {
        margin-right: 0!important
    }

    .me-md-1 {
        margin-right: .25rem!important
    }

    .me-md-2 {
        margin-right: .5rem!important
    }

    .me-md-3 {
        margin-right: 1rem!important
    }

    .me-md-4 {
        margin-right: 2rem!important
    }

    .me-md-5 {
        margin-right: 4rem!important
    }

    .me-md-6 {
        margin-right: 8rem!important
    }

    .me-md-7 {
        margin-right: 16rem!important
    }

    .me-md-auto {
        margin-right: auto!important
    }

    .mb-md-0 {
        margin-bottom: 0!important
    }

    .mb-md-1 {
        margin-bottom: .25rem!important
    }

    .mb-md-2 {
        margin-bottom: .5rem!important
    }

    .mb-md-3 {
        margin-bottom: 1rem!important
    }

    .mb-md-4 {
        margin-bottom: 2rem!important
    }

    .mb-md-5 {
        margin-bottom: 4rem!important
    }

    .mb-md-6 {
        margin-bottom: 8rem!important
    }

    .mb-md-7 {
        margin-bottom: 16rem!important
    }

    .mb-md-auto {
        margin-bottom: auto!important
    }

    .ms-md-0 {
        margin-left: 0!important
    }

    .ms-md-1 {
        margin-left: .25rem!important
    }

    .ms-md-2 {
        margin-left: .5rem!important
    }

    .ms-md-3 {
        margin-left: 1rem!important
    }

    .ms-md-4 {
        margin-left: 2rem!important
    }

    .ms-md-5 {
        margin-left: 4rem!important
    }

    .ms-md-6 {
        margin-left: 8rem!important
    }

    .ms-md-7 {
        margin-left: 16rem!important
    }

    .ms-md-auto {
        margin-left: auto!important
    }

    .m-md-n1 {
        margin: -.25rem!important
    }

    .m-md-n2 {
        margin: -.5rem!important
    }

    .m-md-n3 {
        margin: -1rem!important
    }

    .m-md-n4 {
        margin: -2rem!important
    }

    .m-md-n5 {
        margin: -4rem!important
    }

    .m-md-n6 {
        margin: -8rem!important
    }

    .m-md-n7 {
        margin: -16rem!important
    }

    .mx-md-n1 {
        margin-left: -.25rem!important;
        margin-right: -.25rem!important
    }

    .mx-md-n2 {
        margin-left: -.5rem!important;
        margin-right: -.5rem!important
    }

    .mx-md-n3 {
        margin-left: -1rem!important;
        margin-right: -1rem!important
    }

    .mx-md-n4 {
        margin-left: -2rem!important;
        margin-right: -2rem!important
    }

    .mx-md-n5 {
        margin-left: -4rem!important;
        margin-right: -4rem!important
    }

    .mx-md-n6 {
        margin-left: -8rem!important;
        margin-right: -8rem!important
    }

    .mx-md-n7 {
        margin-left: -16rem!important;
        margin-right: -16rem!important
    }

    .my-md-n1 {
        margin-bottom: -.25rem!important;
        margin-top: -.25rem!important
    }

    .my-md-n2 {
        margin-bottom: -.5rem!important;
        margin-top: -.5rem!important
    }

    .my-md-n3 {
        margin-bottom: -1rem!important;
        margin-top: -1rem!important
    }

    .my-md-n4 {
        margin-bottom: -2rem!important;
        margin-top: -2rem!important
    }

    .my-md-n5 {
        margin-bottom: -4rem!important;
        margin-top: -4rem!important
    }

    .my-md-n6 {
        margin-bottom: -8rem!important;
        margin-top: -8rem!important
    }

    .my-md-n7 {
        margin-bottom: -16rem!important;
        margin-top: -16rem!important
    }

    .mt-md-n1 {
        margin-top: -.25rem!important
    }

    .mt-md-n2 {
        margin-top: -.5rem!important
    }

    .mt-md-n3 {
        margin-top: -1rem!important
    }

    .mt-md-n4 {
        margin-top: -2rem!important
    }

    .mt-md-n5 {
        margin-top: -4rem!important
    }

    .mt-md-n6 {
        margin-top: -8rem!important
    }

    .mt-md-n7 {
        margin-top: -16rem!important
    }

    .me-md-n1 {
        margin-right: -.25rem!important
    }

    .me-md-n2 {
        margin-right: -.5rem!important
    }

    .me-md-n3 {
        margin-right: -1rem!important
    }

    .me-md-n4 {
        margin-right: -2rem!important
    }

    .me-md-n5 {
        margin-right: -4rem!important
    }

    .me-md-n6 {
        margin-right: -8rem!important
    }

    .me-md-n7 {
        margin-right: -16rem!important
    }

    .mb-md-n1 {
        margin-bottom: -.25rem!important
    }

    .mb-md-n2 {
        margin-bottom: -.5rem!important
    }

    .mb-md-n3 {
        margin-bottom: -1rem!important
    }

    .mb-md-n4 {
        margin-bottom: -2rem!important
    }

    .mb-md-n5 {
        margin-bottom: -4rem!important
    }

    .mb-md-n6 {
        margin-bottom: -8rem!important
    }

    .mb-md-n7 {
        margin-bottom: -16rem!important
    }

    .ms-md-n1 {
        margin-left: -.25rem!important
    }

    .ms-md-n2 {
        margin-left: -.5rem!important
    }

    .ms-md-n3 {
        margin-left: -1rem!important
    }

    .ms-md-n4 {
        margin-left: -2rem!important
    }

    .ms-md-n5 {
        margin-left: -4rem!important
    }

    .ms-md-n6 {
        margin-left: -8rem!important
    }

    .ms-md-n7 {
        margin-left: -16rem!important
    }

    .p-md-0 {
        padding: 0!important
    }

    .p-md-1 {
        padding: .25rem!important
    }

    .p-md-2 {
        padding: .5rem!important
    }

    .p-md-3 {
        padding: 1rem!important
    }

    .p-md-4 {
        padding: 2rem!important
    }

    .p-md-5 {
        padding: 4rem!important
    }

    .p-md-6 {
        padding: 8rem!important
    }

    .p-md-7 {
        padding: 16rem!important
    }

    .px-md-0 {
        padding-left: 0!important;
        padding-right: 0!important
    }

    .px-md-1 {
        padding-left: .25rem!important;
        padding-right: .25rem!important
    }

    .px-md-2 {
        padding-left: .5rem!important;
        padding-right: .5rem!important
    }

    .px-md-3 {
        padding-left: 1rem!important;
        padding-right: 1rem!important
    }

    .px-md-4 {
        padding-left: 2rem!important;
        padding-right: 2rem!important
    }

    .px-md-5 {
        padding-left: 4rem!important;
        padding-right: 4rem!important
    }

    .px-md-6 {
        padding-left: 8rem!important;
        padding-right: 8rem!important
    }

    .px-md-7 {
        padding-left: 16rem!important;
        padding-right: 16rem!important
    }

    .py-md-0 {
        padding-bottom: 0!important;
        padding-top: 0!important
    }

    .py-md-1 {
        padding-bottom: .25rem!important;
        padding-top: .25rem!important
    }

    .py-md-2 {
        padding-bottom: .5rem!important;
        padding-top: .5rem!important
    }

    .py-md-3 {
        padding-bottom: 1rem!important;
        padding-top: 1rem!important
    }

    .py-md-4 {
        padding-bottom: 2rem!important;
        padding-top: 2rem!important
    }

    .py-md-5 {
        padding-bottom: 4rem!important;
        padding-top: 4rem!important
    }

    .py-md-6 {
        padding-bottom: 8rem!important;
        padding-top: 8rem!important
    }

    .py-md-7 {
        padding-bottom: 16rem!important;
        padding-top: 16rem!important
    }

    .pt-md-0 {
        padding-top: 0!important
    }

    .pt-md-1 {
        padding-top: .25rem!important
    }

    .pt-md-2 {
        padding-top: .5rem!important
    }

    .pt-md-3 {
        padding-top: 1rem!important
    }

    .pt-md-4 {
        padding-top: 2rem!important
    }

    .pt-md-5 {
        padding-top: 4rem!important
    }

    .pt-md-6 {
        padding-top: 8rem!important
    }

    .pt-md-7 {
        padding-top: 16rem!important
    }

    .pe-md-0 {
        padding-right: 0!important
    }

    .pe-md-1 {
        padding-right: .25rem!important
    }

    .pe-md-2 {
        padding-right: .5rem!important
    }

    .pe-md-3 {
        padding-right: 1rem!important
    }

    .pe-md-4 {
        padding-right: 2rem!important
    }

    .pe-md-5 {
        padding-right: 4rem!important
    }

    .pe-md-6 {
        padding-right: 8rem!important
    }

    .pe-md-7 {
        padding-right: 16rem!important
    }

    .pb-md-0 {
        padding-bottom: 0!important
    }

    .pb-md-1 {
        padding-bottom: .25rem!important
    }

    .pb-md-2 {
        padding-bottom: .5rem!important
    }

    .pb-md-3 {
        padding-bottom: 1rem!important
    }

    .pb-md-4 {
        padding-bottom: 2rem!important
    }

    .pb-md-5 {
        padding-bottom: 4rem!important
    }

    .pb-md-6 {
        padding-bottom: 8rem!important
    }

    .pb-md-7 {
        padding-bottom: 16rem!important
    }

    .ps-md-0 {
        padding-left: 0!important
    }

    .ps-md-1 {
        padding-left: .25rem!important
    }

    .ps-md-2 {
        padding-left: .5rem!important
    }

    .ps-md-3 {
        padding-left: 1rem!important
    }

    .ps-md-4 {
        padding-left: 2rem!important
    }

    .ps-md-5 {
        padding-left: 4rem!important
    }

    .ps-md-6 {
        padding-left: 8rem!important
    }

    .ps-md-7 {
        padding-left: 16rem!important
    }

    .gap-md-0 {
        gap: 0!important
    }

    .gap-md-1 {
        gap: .25rem!important
    }

    .gap-md-2 {
        gap: .5rem!important
    }

    .gap-md-3 {
        gap: 1rem!important
    }

    .gap-md-4 {
        gap: 2rem!important
    }

    .gap-md-5 {
        gap: 4rem!important
    }

    .gap-md-6 {
        gap: 8rem!important
    }

    .gap-md-7 {
        gap: 16rem!important
    }

    .text-md-start {
        text-align: left!important
    }

    .text-md-end {
        text-align: right!important
    }

    .text-md-center {
        text-align: center!important
    }
}

@media(min-width: 992px) {
    .float-lg-start {
        float:left!important
    }

    .float-lg-end {
        float: right!important
    }

    .float-lg-none {
        float: none!important
    }

    .d-lg-inline {
        display: inline!important
    }

    .d-lg-inline-block {
        display: inline-block!important
    }

    .d-lg-block {
        display: block!important
    }

    .d-lg-grid {
        display: grid!important
    }

    .d-lg-table {
        display: table!important
    }

    .d-lg-table-row {
        display: table-row!important
    }

    .d-lg-table-cell {
        display: table-cell!important
    }

    .d-lg-flex {
        display: flex!important
    }

    .d-lg-inline-flex {
        display: inline-flex!important
    }

    .d-lg-none {
        display: none!important
    }

    .flex-lg-fill {
        flex: 1 1 auto!important
    }

    .flex-lg-row {
        flex-direction: row!important
    }

    .flex-lg-column {
        flex-direction: column!important
    }

    .flex-lg-row-reverse {
        flex-direction: row-reverse!important
    }

    .flex-lg-column-reverse {
        flex-direction: column-reverse!important
    }

    .flex-lg-grow-0 {
        flex-grow: 0!important
    }

    .flex-lg-grow-1 {
        flex-grow: 1!important
    }

    .flex-lg-shrink-0 {
        flex-shrink: 0!important
    }

    .flex-lg-shrink-1 {
        flex-shrink: 1!important
    }

    .flex-lg-wrap {
        flex-wrap: wrap!important
    }

    .flex-lg-nowrap {
        flex-wrap: nowrap!important
    }

    .flex-lg-wrap-reverse {
        flex-wrap: wrap-reverse!important
    }

    .justify-content-lg-start {
        justify-content: flex-start!important
    }

    .justify-content-lg-end {
        justify-content: flex-end!important
    }

    .justify-content-lg-center {
        justify-content: center!important
    }

    .justify-content-lg-between {
        justify-content: space-between!important
    }

    .justify-content-lg-around {
        justify-content: space-around!important
    }

    .justify-content-lg-evenly {
        justify-content: space-evenly!important
    }

    .align-items-lg-start {
        align-items: flex-start!important
    }

    .align-items-lg-end {
        align-items: flex-end!important
    }

    .align-items-lg-center {
        align-items: center!important
    }

    .align-items-lg-baseline {
        align-items: baseline!important
    }

    .align-items-lg-stretch {
        align-items: stretch!important
    }

    .align-content-lg-start {
        align-content: flex-start!important
    }

    .align-content-lg-end {
        align-content: flex-end!important
    }

    .align-content-lg-center {
        align-content: center!important
    }

    .align-content-lg-between {
        align-content: space-between!important
    }

    .align-content-lg-around {
        align-content: space-around!important
    }

    .align-content-lg-stretch {
        align-content: stretch!important
    }

    .align-self-lg-auto {
        align-self: auto!important
    }

    .align-self-lg-start {
        align-self: flex-start!important
    }

    .align-self-lg-end {
        align-self: flex-end!important
    }

    .align-self-lg-center {
        align-self: center!important
    }

    .align-self-lg-baseline {
        align-self: baseline!important
    }

    .align-self-lg-stretch {
        align-self: stretch!important
    }

    .order-lg-first {
        order: -1!important
    }

    .order-lg-0 {
        order: 0!important
    }

    .order-lg-1 {
        order: 1!important
    }

    .order-lg-2 {
        order: 2!important
    }

    .order-lg-3 {
        order: 3!important
    }

    .order-lg-4 {
        order: 4!important
    }

    .order-lg-5 {
        order: 5!important
    }

    .order-lg-last {
        order: 6!important
    }

    .m-lg-0 {
        margin: 0!important
    }

    .m-lg-1 {
        margin: .25rem!important
    }

    .m-lg-2 {
        margin: .5rem!important
    }

    .m-lg-3 {
        margin: 1rem!important
    }

    .m-lg-4 {
        margin: 2rem!important
    }

    .m-lg-5 {
        margin: 4rem!important
    }

    .m-lg-6 {
        margin: 8rem!important
    }

    .m-lg-7 {
        margin: 16rem!important
    }

    .m-lg-auto {
        margin: auto!important
    }

    .mx-lg-0 {
        margin-left: 0!important;
        margin-right: 0!important
    }

    .mx-lg-1 {
        margin-left: .25rem!important;
        margin-right: .25rem!important
    }

    .mx-lg-2 {
        margin-left: .5rem!important;
        margin-right: .5rem!important
    }

    .mx-lg-3 {
        margin-left: 1rem!important;
        margin-right: 1rem!important
    }

    .mx-lg-4 {
        margin-left: 2rem!important;
        margin-right: 2rem!important
    }

    .mx-lg-5 {
        margin-left: 4rem!important;
        margin-right: 4rem!important
    }

    .mx-lg-6 {
        margin-left: 8rem!important;
        margin-right: 8rem!important
    }

    .mx-lg-7 {
        margin-left: 16rem!important;
        margin-right: 16rem!important
    }

    .mx-lg-auto {
        margin-left: auto!important;
        margin-right: auto!important
    }

    .my-lg-0 {
        margin-bottom: 0!important;
        margin-top: 0!important
    }

    .my-lg-1 {
        margin-bottom: .25rem!important;
        margin-top: .25rem!important
    }

    .my-lg-2 {
        margin-bottom: .5rem!important;
        margin-top: .5rem!important
    }

    .my-lg-3 {
        margin-bottom: 1rem!important;
        margin-top: 1rem!important
    }

    .my-lg-4 {
        margin-bottom: 2rem!important;
        margin-top: 2rem!important
    }

    .my-lg-5 {
        margin-bottom: 4rem!important;
        margin-top: 4rem!important
    }

    .my-lg-6 {
        margin-bottom: 8rem!important;
        margin-top: 8rem!important
    }

    .my-lg-7 {
        margin-bottom: 16rem!important;
        margin-top: 16rem!important
    }

    .my-lg-auto {
        margin-bottom: auto!important;
        margin-top: auto!important
    }

    .mt-lg-0 {
        margin-top: 0!important
    }

    .mt-lg-1 {
        margin-top: .25rem!important
    }

    .mt-lg-2 {
        margin-top: .5rem!important
    }

    .mt-lg-3 {
        margin-top: 1rem!important
    }

    .mt-lg-4 {
        margin-top: 2rem!important
    }

    .mt-lg-5 {
        margin-top: 4rem!important
    }

    .mt-lg-6 {
        margin-top: 8rem!important
    }

    .mt-lg-7 {
        margin-top: 16rem!important
    }

    .mt-lg-auto {
        margin-top: auto!important
    }

    .me-lg-0 {
        margin-right: 0!important
    }

    .me-lg-1 {
        margin-right: .25rem!important
    }

    .me-lg-2 {
        margin-right: .5rem!important
    }

    .me-lg-3 {
        margin-right: 1rem!important
    }

    .me-lg-4 {
        margin-right: 2rem!important
    }

    .me-lg-5 {
        margin-right: 4rem!important
    }

    .me-lg-6 {
        margin-right: 8rem!important
    }

    .me-lg-7 {
        margin-right: 16rem!important
    }

    .me-lg-auto {
        margin-right: auto!important
    }

    .mb-lg-0 {
        margin-bottom: 0!important
    }

    .mb-lg-1 {
        margin-bottom: .25rem!important
    }

    .mb-lg-2 {
        margin-bottom: .5rem!important
    }

    .mb-lg-3 {
        margin-bottom: 1rem!important
    }

    .mb-lg-4 {
        margin-bottom: 2rem!important
    }

    .mb-lg-5 {
        margin-bottom: 4rem!important
    }

    .mb-lg-6 {
        margin-bottom: 8rem!important
    }

    .mb-lg-7 {
        margin-bottom: 16rem!important
    }

    .mb-lg-auto {
        margin-bottom: auto!important
    }

    .ms-lg-0 {
        margin-left: 0!important
    }

    .ms-lg-1 {
        margin-left: .25rem!important
    }

    .ms-lg-2 {
        margin-left: .5rem!important
    }

    .ms-lg-3 {
        margin-left: 1rem!important
    }

    .ms-lg-4 {
        margin-left: 2rem!important
    }

    .ms-lg-5 {
        margin-left: 4rem!important
    }

    .ms-lg-6 {
        margin-left: 8rem!important
    }

    .ms-lg-7 {
        margin-left: 16rem!important
    }

    .ms-lg-auto {
        margin-left: auto!important
    }

    .m-lg-n1 {
        margin: -.25rem!important
    }

    .m-lg-n2 {
        margin: -.5rem!important
    }

    .m-lg-n3 {
        margin: -1rem!important
    }

    .m-lg-n4 {
        margin: -2rem!important
    }

    .m-lg-n5 {
        margin: -4rem!important
    }

    .m-lg-n6 {
        margin: -8rem!important
    }

    .m-lg-n7 {
        margin: -16rem!important
    }

    .mx-lg-n1 {
        margin-left: -.25rem!important;
        margin-right: -.25rem!important
    }

    .mx-lg-n2 {
        margin-left: -.5rem!important;
        margin-right: -.5rem!important
    }

    .mx-lg-n3 {
        margin-left: -1rem!important;
        margin-right: -1rem!important
    }

    .mx-lg-n4 {
        margin-left: -2rem!important;
        margin-right: -2rem!important
    }

    .mx-lg-n5 {
        margin-left: -4rem!important;
        margin-right: -4rem!important
    }

    .mx-lg-n6 {
        margin-left: -8rem!important;
        margin-right: -8rem!important
    }

    .mx-lg-n7 {
        margin-left: -16rem!important;
        margin-right: -16rem!important
    }

    .my-lg-n1 {
        margin-bottom: -.25rem!important;
        margin-top: -.25rem!important
    }

    .my-lg-n2 {
        margin-bottom: -.5rem!important;
        margin-top: -.5rem!important
    }

    .my-lg-n3 {
        margin-bottom: -1rem!important;
        margin-top: -1rem!important
    }

    .my-lg-n4 {
        margin-bottom: -2rem!important;
        margin-top: -2rem!important
    }

    .my-lg-n5 {
        margin-bottom: -4rem!important;
        margin-top: -4rem!important
    }

    .my-lg-n6 {
        margin-bottom: -8rem!important;
        margin-top: -8rem!important
    }

    .my-lg-n7 {
        margin-bottom: -16rem!important;
        margin-top: -16rem!important
    }

    .mt-lg-n1 {
        margin-top: -.25rem!important
    }

    .mt-lg-n2 {
        margin-top: -.5rem!important
    }

    .mt-lg-n3 {
        margin-top: -1rem!important
    }

    .mt-lg-n4 {
        margin-top: -2rem!important
    }

    .mt-lg-n5 {
        margin-top: -4rem!important
    }

    .mt-lg-n6 {
        margin-top: -8rem!important
    }

    .mt-lg-n7 {
        margin-top: -16rem!important
    }

    .me-lg-n1 {
        margin-right: -.25rem!important
    }

    .me-lg-n2 {
        margin-right: -.5rem!important
    }

    .me-lg-n3 {
        margin-right: -1rem!important
    }

    .me-lg-n4 {
        margin-right: -2rem!important
    }

    .me-lg-n5 {
        margin-right: -4rem!important
    }

    .me-lg-n6 {
        margin-right: -8rem!important
    }

    .me-lg-n7 {
        margin-right: -16rem!important
    }

    .mb-lg-n1 {
        margin-bottom: -.25rem!important
    }

    .mb-lg-n2 {
        margin-bottom: -.5rem!important
    }

    .mb-lg-n3 {
        margin-bottom: -1rem!important
    }

    .mb-lg-n4 {
        margin-bottom: -2rem!important
    }

    .mb-lg-n5 {
        margin-bottom: -4rem!important
    }

    .mb-lg-n6 {
        margin-bottom: -8rem!important
    }

    .mb-lg-n7 {
        margin-bottom: -16rem!important
    }

    .ms-lg-n1 {
        margin-left: -.25rem!important
    }

    .ms-lg-n2 {
        margin-left: -.5rem!important
    }

    .ms-lg-n3 {
        margin-left: -1rem!important
    }

    .ms-lg-n4 {
        margin-left: -2rem!important
    }

    .ms-lg-n5 {
        margin-left: -4rem!important
    }

    .ms-lg-n6 {
        margin-left: -8rem!important
    }

    .ms-lg-n7 {
        margin-left: -16rem!important
    }

    .p-lg-0 {
        padding: 0!important
    }

    .p-lg-1 {
        padding: .25rem!important
    }

    .p-lg-2 {
        padding: .5rem!important
    }

    .p-lg-3 {
        padding: 1rem!important
    }

    .p-lg-4 {
        padding: 2rem!important
    }

    .p-lg-5 {
        padding: 4rem!important
    }

    .p-lg-6 {
        padding: 8rem!important
    }

    .p-lg-7 {
        padding: 16rem!important
    }

    .px-lg-0 {
        padding-left: 0!important;
        padding-right: 0!important
    }

    .px-lg-1 {
        padding-left: .25rem!important;
        padding-right: .25rem!important
    }

    .px-lg-2 {
        padding-left: .5rem!important;
        padding-right: .5rem!important
    }

    .px-lg-3 {
        padding-left: 1rem!important;
        padding-right: 1rem!important
    }

    .px-lg-4 {
        padding-left: 2rem!important;
        padding-right: 2rem!important
    }

    .px-lg-5 {
        padding-left: 4rem!important;
        padding-right: 4rem!important
    }

    .px-lg-6 {
        padding-left: 8rem!important;
        padding-right: 8rem!important
    }

    .px-lg-7 {
        padding-left: 16rem!important;
        padding-right: 16rem!important
    }

    .py-lg-0 {
        padding-bottom: 0!important;
        padding-top: 0!important
    }

    .py-lg-1 {
        padding-bottom: .25rem!important;
        padding-top: .25rem!important
    }

    .py-lg-2 {
        padding-bottom: .5rem!important;
        padding-top: .5rem!important
    }

    .py-lg-3 {
        padding-bottom: 1rem!important;
        padding-top: 1rem!important
    }

    .py-lg-4 {
        padding-bottom: 2rem!important;
        padding-top: 2rem!important
    }

    .py-lg-5 {
        padding-bottom: 4rem!important;
        padding-top: 4rem!important
    }

    .py-lg-6 {
        padding-bottom: 8rem!important;
        padding-top: 8rem!important
    }

    .py-lg-7 {
        padding-bottom: 16rem!important;
        padding-top: 16rem!important
    }

    .pt-lg-0 {
        padding-top: 0!important
    }

    .pt-lg-1 {
        padding-top: .25rem!important
    }

    .pt-lg-2 {
        padding-top: .5rem!important
    }

    .pt-lg-3 {
        padding-top: 1rem!important
    }

    .pt-lg-4 {
        padding-top: 2rem!important
    }

    .pt-lg-5 {
        padding-top: 4rem!important
    }

    .pt-lg-6 {
        padding-top: 8rem!important
    }

    .pt-lg-7 {
        padding-top: 16rem!important
    }

    .pe-lg-0 {
        padding-right: 0!important
    }

    .pe-lg-1 {
        padding-right: .25rem!important
    }

    .pe-lg-2 {
        padding-right: .5rem!important
    }

    .pe-lg-3 {
        padding-right: 1rem!important
    }

    .pe-lg-4 {
        padding-right: 2rem!important
    }

    .pe-lg-5 {
        padding-right: 4rem!important
    }

    .pe-lg-6 {
        padding-right: 8rem!important
    }

    .pe-lg-7 {
        padding-right: 16rem!important
    }

    .pb-lg-0 {
        padding-bottom: 0!important
    }

    .pb-lg-1 {
        padding-bottom: .25rem!important
    }

    .pb-lg-2 {
        padding-bottom: .5rem!important
    }

    .pb-lg-3 {
        padding-bottom: 1rem!important
    }

    .pb-lg-4 {
        padding-bottom: 2rem!important
    }

    .pb-lg-5 {
        padding-bottom: 4rem!important
    }

    .pb-lg-6 {
        padding-bottom: 8rem!important
    }

    .pb-lg-7 {
        padding-bottom: 16rem!important
    }

    .ps-lg-0 {
        padding-left: 0!important
    }

    .ps-lg-1 {
        padding-left: .25rem!important
    }

    .ps-lg-2 {
        padding-left: .5rem!important
    }

    .ps-lg-3 {
        padding-left: 1rem!important
    }

    .ps-lg-4 {
        padding-left: 2rem!important
    }

    .ps-lg-5 {
        padding-left: 4rem!important
    }

    .ps-lg-6 {
        padding-left: 8rem!important
    }

    .ps-lg-7 {
        padding-left: 16rem!important
    }

    .gap-lg-0 {
        gap: 0!important
    }

    .gap-lg-1 {
        gap: .25rem!important
    }

    .gap-lg-2 {
        gap: .5rem!important
    }

    .gap-lg-3 {
        gap: 1rem!important
    }

    .gap-lg-4 {
        gap: 2rem!important
    }

    .gap-lg-5 {
        gap: 4rem!important
    }

    .gap-lg-6 {
        gap: 8rem!important
    }

    .gap-lg-7 {
        gap: 16rem!important
    }

    .text-lg-start {
        text-align: left!important
    }

    .text-lg-end {
        text-align: right!important
    }

    .text-lg-center {
        text-align: center!important
    }
}

@media(min-width: 1280px) {
    .float-xl-start {
        float:left!important
    }

    .float-xl-end {
        float: right!important
    }

    .float-xl-none {
        float: none!important
    }

    .d-xl-inline {
        display: inline!important
    }

    .d-xl-inline-block {
        display: inline-block!important
    }

    .d-xl-block {
        display: block!important
    }

    .d-xl-grid {
        display: grid!important
    }

    .d-xl-table {
        display: table!important
    }

    .d-xl-table-row {
        display: table-row!important
    }

    .d-xl-table-cell {
        display: table-cell!important
    }

    .d-xl-flex {
        display: flex!important
    }

    .d-xl-inline-flex {
        display: inline-flex!important
    }

    .d-xl-none {
        display: none!important
    }

    .flex-xl-fill {
        flex: 1 1 auto!important
    }

    .flex-xl-row {
        flex-direction: row!important
    }

    .flex-xl-column {
        flex-direction: column!important
    }

    .flex-xl-row-reverse {
        flex-direction: row-reverse!important
    }

    .flex-xl-column-reverse {
        flex-direction: column-reverse!important
    }

    .flex-xl-grow-0 {
        flex-grow: 0!important
    }

    .flex-xl-grow-1 {
        flex-grow: 1!important
    }

    .flex-xl-shrink-0 {
        flex-shrink: 0!important
    }

    .flex-xl-shrink-1 {
        flex-shrink: 1!important
    }

    .flex-xl-wrap {
        flex-wrap: wrap!important
    }

    .flex-xl-nowrap {
        flex-wrap: nowrap!important
    }

    .flex-xl-wrap-reverse {
        flex-wrap: wrap-reverse!important
    }

    .justify-content-xl-start {
        justify-content: flex-start!important
    }

    .justify-content-xl-end {
        justify-content: flex-end!important
    }

    .justify-content-xl-center {
        justify-content: center!important
    }

    .justify-content-xl-between {
        justify-content: space-between!important
    }

    .justify-content-xl-around {
        justify-content: space-around!important
    }

    .justify-content-xl-evenly {
        justify-content: space-evenly!important
    }

    .align-items-xl-start {
        align-items: flex-start!important
    }

    .align-items-xl-end {
        align-items: flex-end!important
    }

    .align-items-xl-center {
        align-items: center!important
    }

    .align-items-xl-baseline {
        align-items: baseline!important
    }

    .align-items-xl-stretch {
        align-items: stretch!important
    }

    .align-content-xl-start {
        align-content: flex-start!important
    }

    .align-content-xl-end {
        align-content: flex-end!important
    }

    .align-content-xl-center {
        align-content: center!important
    }

    .align-content-xl-between {
        align-content: space-between!important
    }

    .align-content-xl-around {
        align-content: space-around!important
    }

    .align-content-xl-stretch {
        align-content: stretch!important
    }

    .align-self-xl-auto {
        align-self: auto!important
    }

    .align-self-xl-start {
        align-self: flex-start!important
    }

    .align-self-xl-end {
        align-self: flex-end!important
    }

    .align-self-xl-center {
        align-self: center!important
    }

    .align-self-xl-baseline {
        align-self: baseline!important
    }

    .align-self-xl-stretch {
        align-self: stretch!important
    }

    .order-xl-first {
        order: -1!important
    }

    .order-xl-0 {
        order: 0!important
    }

    .order-xl-1 {
        order: 1!important
    }

    .order-xl-2 {
        order: 2!important
    }

    .order-xl-3 {
        order: 3!important
    }

    .order-xl-4 {
        order: 4!important
    }

    .order-xl-5 {
        order: 5!important
    }

    .order-xl-last {
        order: 6!important
    }

    .m-xl-0 {
        margin: 0!important
    }

    .m-xl-1 {
        margin: .25rem!important
    }

    .m-xl-2 {
        margin: .5rem!important
    }

    .m-xl-3 {
        margin: 1rem!important
    }

    .m-xl-4 {
        margin: 2rem!important
    }

    .m-xl-5 {
        margin: 4rem!important
    }

    .m-xl-6 {
        margin: 8rem!important
    }

    .m-xl-7 {
        margin: 16rem!important
    }

    .m-xl-auto {
        margin: auto!important
    }

    .mx-xl-0 {
        margin-left: 0!important;
        margin-right: 0!important
    }

    .mx-xl-1 {
        margin-left: .25rem!important;
        margin-right: .25rem!important
    }

    .mx-xl-2 {
        margin-left: .5rem!important;
        margin-right: .5rem!important
    }

    .mx-xl-3 {
        margin-left: 1rem!important;
        margin-right: 1rem!important
    }

    .mx-xl-4 {
        margin-left: 2rem!important;
        margin-right: 2rem!important
    }

    .mx-xl-5 {
        margin-left: 4rem!important;
        margin-right: 4rem!important
    }

    .mx-xl-6 {
        margin-left: 8rem!important;
        margin-right: 8rem!important
    }

    .mx-xl-7 {
        margin-left: 16rem!important;
        margin-right: 16rem!important
    }

    .mx-xl-auto {
        margin-left: auto!important;
        margin-right: auto!important
    }

    .my-xl-0 {
        margin-bottom: 0!important;
        margin-top: 0!important
    }

    .my-xl-1 {
        margin-bottom: .25rem!important;
        margin-top: .25rem!important
    }

    .my-xl-2 {
        margin-bottom: .5rem!important;
        margin-top: .5rem!important
    }

    .my-xl-3 {
        margin-bottom: 1rem!important;
        margin-top: 1rem!important
    }

    .my-xl-4 {
        margin-bottom: 2rem!important;
        margin-top: 2rem!important
    }

    .my-xl-5 {
        margin-bottom: 4rem!important;
        margin-top: 4rem!important
    }

    .my-xl-6 {
        margin-bottom: 8rem!important;
        margin-top: 8rem!important
    }

    .my-xl-7 {
        margin-bottom: 16rem!important;
        margin-top: 16rem!important
    }

    .my-xl-auto {
        margin-bottom: auto!important;
        margin-top: auto!important
    }

    .mt-xl-0 {
        margin-top: 0!important
    }

    .mt-xl-1 {
        margin-top: .25rem!important
    }

    .mt-xl-2 {
        margin-top: .5rem!important
    }

    .mt-xl-3 {
        margin-top: 1rem!important
    }

    .mt-xl-4 {
        margin-top: 2rem!important
    }

    .mt-xl-5 {
        margin-top: 4rem!important
    }

    .mt-xl-6 {
        margin-top: 8rem!important
    }

    .mt-xl-7 {
        margin-top: 16rem!important
    }

    .mt-xl-auto {
        margin-top: auto!important
    }

    .me-xl-0 {
        margin-right: 0!important
    }

    .me-xl-1 {
        margin-right: .25rem!important
    }

    .me-xl-2 {
        margin-right: .5rem!important
    }

    .me-xl-3 {
        margin-right: 1rem!important
    }

    .me-xl-4 {
        margin-right: 2rem!important
    }

    .me-xl-5 {
        margin-right: 4rem!important
    }

    .me-xl-6 {
        margin-right: 8rem!important
    }

    .me-xl-7 {
        margin-right: 16rem!important
    }

    .me-xl-auto {
        margin-right: auto!important
    }

    .mb-xl-0 {
        margin-bottom: 0!important
    }

    .mb-xl-1 {
        margin-bottom: .25rem!important
    }

    .mb-xl-2 {
        margin-bottom: .5rem!important
    }

    .mb-xl-3 {
        margin-bottom: 1rem!important
    }

    .mb-xl-4 {
        margin-bottom: 2rem!important
    }

    .mb-xl-5 {
        margin-bottom: 4rem!important
    }

    .mb-xl-6 {
        margin-bottom: 8rem!important
    }

    .mb-xl-7 {
        margin-bottom: 16rem!important
    }

    .mb-xl-auto {
        margin-bottom: auto!important
    }

    .ms-xl-0 {
        margin-left: 0!important
    }

    .ms-xl-1 {
        margin-left: .25rem!important
    }

    .ms-xl-2 {
        margin-left: .5rem!important
    }

    .ms-xl-3 {
        margin-left: 1rem!important
    }

    .ms-xl-4 {
        margin-left: 2rem!important
    }

    .ms-xl-5 {
        margin-left: 4rem!important
    }

    .ms-xl-6 {
        margin-left: 8rem!important
    }

    .ms-xl-7 {
        margin-left: 16rem!important
    }

    .ms-xl-auto {
        margin-left: auto!important
    }

    .m-xl-n1 {
        margin: -.25rem!important
    }

    .m-xl-n2 {
        margin: -.5rem!important
    }

    .m-xl-n3 {
        margin: -1rem!important
    }

    .m-xl-n4 {
        margin: -2rem!important
    }

    .m-xl-n5 {
        margin: -4rem!important
    }

    .m-xl-n6 {
        margin: -8rem!important
    }

    .m-xl-n7 {
        margin: -16rem!important
    }

    .mx-xl-n1 {
        margin-left: -.25rem!important;
        margin-right: -.25rem!important
    }

    .mx-xl-n2 {
        margin-left: -.5rem!important;
        margin-right: -.5rem!important
    }

    .mx-xl-n3 {
        margin-left: -1rem!important;
        margin-right: -1rem!important
    }

    .mx-xl-n4 {
        margin-left: -2rem!important;
        margin-right: -2rem!important
    }

    .mx-xl-n5 {
        margin-left: -4rem!important;
        margin-right: -4rem!important
    }

    .mx-xl-n6 {
        margin-left: -8rem!important;
        margin-right: -8rem!important
    }

    .mx-xl-n7 {
        margin-left: -16rem!important;
        margin-right: -16rem!important
    }

    .my-xl-n1 {
        margin-bottom: -.25rem!important;
        margin-top: -.25rem!important
    }

    .my-xl-n2 {
        margin-bottom: -.5rem!important;
        margin-top: -.5rem!important
    }

    .my-xl-n3 {
        margin-bottom: -1rem!important;
        margin-top: -1rem!important
    }

    .my-xl-n4 {
        margin-bottom: -2rem!important;
        margin-top: -2rem!important
    }

    .my-xl-n5 {
        margin-bottom: -4rem!important;
        margin-top: -4rem!important
    }

    .my-xl-n6 {
        margin-bottom: -8rem!important;
        margin-top: -8rem!important
    }

    .my-xl-n7 {
        margin-bottom: -16rem!important;
        margin-top: -16rem!important
    }

    .mt-xl-n1 {
        margin-top: -.25rem!important
    }

    .mt-xl-n2 {
        margin-top: -.5rem!important
    }

    .mt-xl-n3 {
        margin-top: -1rem!important
    }

    .mt-xl-n4 {
        margin-top: -2rem!important
    }

    .mt-xl-n5 {
        margin-top: -4rem!important
    }

    .mt-xl-n6 {
        margin-top: -8rem!important
    }

    .mt-xl-n7 {
        margin-top: -16rem!important
    }

    .me-xl-n1 {
        margin-right: -.25rem!important
    }

    .me-xl-n2 {
        margin-right: -.5rem!important
    }

    .me-xl-n3 {
        margin-right: -1rem!important
    }

    .me-xl-n4 {
        margin-right: -2rem!important
    }

    .me-xl-n5 {
        margin-right: -4rem!important
    }

    .me-xl-n6 {
        margin-right: -8rem!important
    }

    .me-xl-n7 {
        margin-right: -16rem!important
    }

    .mb-xl-n1 {
        margin-bottom: -.25rem!important
    }

    .mb-xl-n2 {
        margin-bottom: -.5rem!important
    }

    .mb-xl-n3 {
        margin-bottom: -1rem!important
    }

    .mb-xl-n4 {
        margin-bottom: -2rem!important
    }

    .mb-xl-n5 {
        margin-bottom: -4rem!important
    }

    .mb-xl-n6 {
        margin-bottom: -8rem!important
    }

    .mb-xl-n7 {
        margin-bottom: -16rem!important
    }

    .ms-xl-n1 {
        margin-left: -.25rem!important
    }

    .ms-xl-n2 {
        margin-left: -.5rem!important
    }

    .ms-xl-n3 {
        margin-left: -1rem!important
    }

    .ms-xl-n4 {
        margin-left: -2rem!important
    }

    .ms-xl-n5 {
        margin-left: -4rem!important
    }

    .ms-xl-n6 {
        margin-left: -8rem!important
    }

    .ms-xl-n7 {
        margin-left: -16rem!important
    }

    .p-xl-0 {
        padding: 0!important
    }

    .p-xl-1 {
        padding: .25rem!important
    }

    .p-xl-2 {
        padding: .5rem!important
    }

    .p-xl-3 {
        padding: 1rem!important
    }

    .p-xl-4 {
        padding: 2rem!important
    }

    .p-xl-5 {
        padding: 4rem!important
    }

    .p-xl-6 {
        padding: 8rem!important
    }

    .p-xl-7 {
        padding: 16rem!important
    }

    .px-xl-0 {
        padding-left: 0!important;
        padding-right: 0!important
    }

    .px-xl-1 {
        padding-left: .25rem!important;
        padding-right: .25rem!important
    }

    .px-xl-2 {
        padding-left: .5rem!important;
        padding-right: .5rem!important
    }

    .px-xl-3 {
        padding-left: 1rem!important;
        padding-right: 1rem!important
    }

    .px-xl-4 {
        padding-left: 2rem!important;
        padding-right: 2rem!important
    }

    .px-xl-5 {
        padding-left: 4rem!important;
        padding-right: 4rem!important
    }

    .px-xl-6 {
        padding-left: 8rem!important;
        padding-right: 8rem!important
    }

    .px-xl-7 {
        padding-left: 16rem!important;
        padding-right: 16rem!important
    }

    .py-xl-0 {
        padding-bottom: 0!important;
        padding-top: 0!important
    }

    .py-xl-1 {
        padding-bottom: .25rem!important;
        padding-top: .25rem!important
    }

    .py-xl-2 {
        padding-bottom: .5rem!important;
        padding-top: .5rem!important
    }

    .py-xl-3 {
        padding-bottom: 1rem!important;
        padding-top: 1rem!important
    }

    .py-xl-4 {
        padding-bottom: 2rem!important;
        padding-top: 2rem!important
    }

    .py-xl-5 {
        padding-bottom: 4rem!important;
        padding-top: 4rem!important
    }

    .py-xl-6 {
        padding-bottom: 8rem!important;
        padding-top: 8rem!important
    }

    .py-xl-7 {
        padding-bottom: 16rem!important;
        padding-top: 16rem!important
    }

    .pt-xl-0 {
        padding-top: 0!important
    }

    .pt-xl-1 {
        padding-top: .25rem!important
    }

    .pt-xl-2 {
        padding-top: .5rem!important
    }

    .pt-xl-3 {
        padding-top: 1rem!important
    }

    .pt-xl-4 {
        padding-top: 2rem!important
    }

    .pt-xl-5 {
        padding-top: 4rem!important
    }

    .pt-xl-6 {
        padding-top: 8rem!important
    }

    .pt-xl-7 {
        padding-top: 16rem!important
    }

    .pe-xl-0 {
        padding-right: 0!important
    }

    .pe-xl-1 {
        padding-right: .25rem!important
    }

    .pe-xl-2 {
        padding-right: .5rem!important
    }

    .pe-xl-3 {
        padding-right: 1rem!important
    }

    .pe-xl-4 {
        padding-right: 2rem!important
    }

    .pe-xl-5 {
        padding-right: 4rem!important
    }

    .pe-xl-6 {
        padding-right: 8rem!important
    }

    .pe-xl-7 {
        padding-right: 16rem!important
    }

    .pb-xl-0 {
        padding-bottom: 0!important
    }

    .pb-xl-1 {
        padding-bottom: .25rem!important
    }

    .pb-xl-2 {
        padding-bottom: .5rem!important
    }

    .pb-xl-3 {
        padding-bottom: 1rem!important
    }

    .pb-xl-4 {
        padding-bottom: 2rem!important
    }

    .pb-xl-5 {
        padding-bottom: 4rem!important
    }

    .pb-xl-6 {
        padding-bottom: 8rem!important
    }

    .pb-xl-7 {
        padding-bottom: 16rem!important
    }

    .ps-xl-0 {
        padding-left: 0!important
    }

    .ps-xl-1 {
        padding-left: .25rem!important
    }

    .ps-xl-2 {
        padding-left: .5rem!important
    }

    .ps-xl-3 {
        padding-left: 1rem!important
    }

    .ps-xl-4 {
        padding-left: 2rem!important
    }

    .ps-xl-5 {
        padding-left: 4rem!important
    }

    .ps-xl-6 {
        padding-left: 8rem!important
    }

    .ps-xl-7 {
        padding-left: 16rem!important
    }

    .gap-xl-0 {
        gap: 0!important
    }

    .gap-xl-1 {
        gap: .25rem!important
    }

    .gap-xl-2 {
        gap: .5rem!important
    }

    .gap-xl-3 {
        gap: 1rem!important
    }

    .gap-xl-4 {
        gap: 2rem!important
    }

    .gap-xl-5 {
        gap: 4rem!important
    }

    .gap-xl-6 {
        gap: 8rem!important
    }

    .gap-xl-7 {
        gap: 16rem!important
    }

    .text-xl-start {
        text-align: left!important
    }

    .text-xl-end {
        text-align: right!important
    }

    .text-xl-center {
        text-align: center!important
    }
}

@media(min-width: 1200px) {
    .fs-1 {
        font-size:2.5rem!important
    }

    .fs-2 {
        font-size: 2rem!important
    }

    .fs-3 {
        font-size: 1.75rem!important
    }

    .fs-4 {
        font-size: 1.5rem!important
    }
}

@media print {
    .d-print-inline {
        display: inline!important
    }

    .d-print-inline-block {
        display: inline-block!important
    }

    .d-print-block {
        display: block!important
    }

    .d-print-grid {
        display: grid!important
    }

    .d-print-table {
        display: table!important
    }

    .d-print-table-row {
        display: table-row!important
    }

    .d-print-table-cell {
        display: table-cell!important
    }

    .d-print-flex {
        display: flex!important
    }

    .d-print-inline-flex {
        display: inline-flex!important
    }

    .d-print-none {
        display: none!important
    }
}

/*!* Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
* Copyright 2022 Fonticons, Inc.*/
.fa {
    font-family: var(--fa-style-family,"Font Awesome 6 Free");
    font-weight: var(--fa-style,900)
}

.fa,.fa-brands,.fa-classic,.fa-regular,.fa-sharp,.fa-solid,.fab,.far,.fas {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: var(--fa-display,inline-block);
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    text-rendering: auto
}

.fa-classic,.fa-regular,.fa-solid,.far,.fas {
    font-family: Font Awesome\ 6 Free
}

.fa-brands,.fab {
    font-family: Font Awesome\ 6 Brands
}

.fa-1x {
    font-size: 1em
}

.fa-2x {
    font-size: 2em
}

.fa-3x {
    font-size: 3em
}

.fa-4x {
    font-size: 4em
}

.fa-5x {
    font-size: 5em
}

.fa-6x {
    font-size: 6em
}

.fa-7x {
    font-size: 7em
}

.fa-8x {
    font-size: 8em
}

.fa-9x {
    font-size: 9em
}

.fa-10x {
    font-size: 10em
}

.fa-2xs {
    font-size: .625em;
    line-height: .1em;
    vertical-align: .225em
}

.fa-xs {
    font-size: .75em;
    line-height: .0833333337em;
    vertical-align: .125em
}

.fa-sm {
    font-size: .875em;
    line-height: .0714285718em;
    vertical-align: .0535714295em
}

.fa-lg {
    font-size: 1.25em;
    line-height: .05em;
    vertical-align: -.075em
}

.fa-xl {
    font-size: 1.5em;
    line-height: .0416666682em;
    vertical-align: -.125em
}

.fa-2xl {
    font-size: 2em;
    line-height: .03125em;
    vertical-align: -.1875em
}

.fa-fw {
    text-align: center;
    width: 1.25em
}

.fa-ul {
    list-style-type: none;
    margin-left: var(--fa-li-margin,2.5em);
    padding-left: 0
}

.fa-ul>li {
    position: relative
}

.fa-li {
    left: calc(var(--fa-li-width,2em)*-1);
    line-height: inherit;
    position: absolute;
    text-align: center;
    width: var(--fa-li-width,2em)
}

.fa-border {
    border-color: var(--fa-border-color,#eee);
    border-radius: var(--fa-border-radius,.1em);
    border-style: var(--fa-border-style,solid);
    border-width: var(--fa-border-width,.08em);
    padding: var(--fa-border-padding,.2em .25em .15em)
}

.fa-pull-left {
    float: left;
    margin-right: var(--fa-pull-margin,.3em)
}

.fa-pull-right {
    float: right;
    margin-left: var(--fa-pull-margin,.3em)
}

.fa-beat {
    animation-delay: var(--fa-animation-delay,0s);
    animation-direction: var(--fa-animation-direction,normal);
    animation-duration: var(--fa-animation-duration,1s);
    animation-iteration-count: var(--fa-animation-iteration-count,infinite);
    animation-name: fa-beat;
    animation-timing-function: var(--fa-animation-timing,ease-in-out)
}

.fa-bounce {
    animation-delay: var(--fa-animation-delay,0s);
    animation-direction: var(--fa-animation-direction,normal);
    animation-duration: var(--fa-animation-duration,1s);
    animation-iteration-count: var(--fa-animation-iteration-count,infinite);
    animation-name: fa-bounce;
    animation-timing-function: var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))
}

.fa-fade {
    animation-iteration-count: var(--fa-animation-iteration-count,infinite);
    animation-name: fa-fade;
    animation-timing-function: var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))
}

.fa-beat-fade,.fa-fade {
    animation-delay: var(--fa-animation-delay,0s);
    animation-direction: var(--fa-animation-direction,normal);
    animation-duration: var(--fa-animation-duration,1s)
}

.fa-beat-fade {
    animation-iteration-count: var(--fa-animation-iteration-count,infinite);
    animation-name: fa-beat-fade;
    animation-timing-function: var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))
}

.fa-flip {
    animation-delay: var(--fa-animation-delay,0s);
    animation-direction: var(--fa-animation-direction,normal);
    animation-duration: var(--fa-animation-duration,1s);
    animation-iteration-count: var(--fa-animation-iteration-count,infinite);
    animation-name: fa-flip;
    animation-timing-function: var(--fa-animation-timing,ease-in-out)
}

.fa-shake {
    animation-duration: var(--fa-animation-duration,1s);
    animation-iteration-count: var(--fa-animation-iteration-count,infinite);
    animation-name: fa-shake;
    animation-timing-function: var(--fa-animation-timing,linear)
}

.fa-shake,.fa-spin {
    animation-delay: var(--fa-animation-delay,0s);
    animation-direction: var(--fa-animation-direction,normal)
}

.fa-spin {
    animation-duration: var(--fa-animation-duration,2s);
    animation-iteration-count: var(--fa-animation-iteration-count,infinite);
    animation-name: fa-spin;
    animation-timing-function: var(--fa-animation-timing,linear)
}

.fa-spin-reverse {
    --fa-animation-direction: reverse
}

.fa-pulse,.fa-spin-pulse {
    animation-direction: var(--fa-animation-direction,normal);
    animation-duration: var(--fa-animation-duration,1s);
    animation-iteration-count: var(--fa-animation-iteration-count,infinite);
    animation-name: fa-spin;
    animation-timing-function: var(--fa-animation-timing,steps(8))
}

@media(prefers-reduced-motion:reduce) {
    .fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse {
        animation-delay: -1ms;
        animation-duration: 1ms;
        animation-iteration-count: 1;
        transition-delay: 0s;
        transition-duration: 0s
    }
}

@keyframes fa-beat {
    0%,90% {
        transform: scale(1)
    }

    45% {
        transform: scale(var(--fa-beat-scale,1.25))
    }
}

@keyframes fa-bounce {
    0% {
        transform: scale(1) translateY(0)
    }

    10% {
        transform: scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)
    }

    30% {
        transform: scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))
    }

    50% {
        transform: scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)
    }

    57% {
        transform: scale(1) translateY(var(--fa-bounce-rebound,-.125em))
    }

    64% {
        transform: scale(1) translateY(0)
    }

    to {
        transform: scale(1) translateY(0)
    }
}

@keyframes fa-fade {
    50% {
        opacity: var(--fa-fade-opacity,.4)
    }
}

@keyframes fa-beat-fade {
    0%,to {
        opacity: var(--fa-beat-fade-opacity,.4);
        transform: scale(1)
    }

    50% {
        opacity: 1;
        transform: scale(var(--fa-beat-fade-scale,1.125))
    }
}

@keyframes fa-flip {
    50% {
        transform: rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))
    }
}

@keyframes fa-shake {
    0% {
        transform: rotate(-15deg)
    }

    4% {
        transform: rotate(15deg)
    }

    24%,8% {
        transform: rotate(-18deg)
    }

    12%,28% {
        transform: rotate(18deg)
    }

    16% {
        transform: rotate(-22deg)
    }

    20% {
        transform: rotate(22deg)
    }

    32% {
        transform: rotate(-12deg)
    }

    36% {
        transform: rotate(12deg)
    }

    40%,to {
        transform: rotate(0deg)
    }
}

@keyframes fa-spin {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}

.fa-bomb:before {
    content: "\f1e2"
}

.fa-registered:before {
    content: "\f25d"
}

.fa-address-card:before,.fa-contact-card:before,.fa-vcard:before {
    content: "\f2bb"
}

.fa-balance-scale-right:before,.fa-scale-unbalanced-flip:before {
    content: "\f516"
}

.fa-subscript:before {
    content: "\f12c"
}

.fa-diamond-turn-right:before,.fa-directions:before {
    content: "\f5eb"
}

.fa-burst:before {
    content: "\e4dc"
}

.fa-house-laptop:before,.fa-laptop-house:before {
    content: "\e066"
}

.fa-face-tired:before,.fa-tired:before {
    content: "\f5c8"
}

.fa-money-bills:before {
    content: "\e1f3"
}

.fa-smog:before {
    content: "\f75f"
}

.fa-crutch:before {
    content: "\f7f7"
}

.fa-cloud-arrow-up:before,.fa-cloud-upload-alt:before,.fa-cloud-upload:before {
    content: "\f0ee"
}

.fa-palette:before {
    content: "\f53f"
}

.fa-arrows-turn-right:before {
    content: "\e4c0"
}

.fa-vest:before {
    content: "\e085"
}

.fa-ferry:before {
    content: "\e4ea"
}

.fa-arrows-down-to-people:before {
    content: "\e4b9"
}

.fa-seedling:before,.fa-sprout:before {
    content: "\f4d8"
}

.fa-arrows-alt-h:before,.fa-left-right:before {
    content: "\f337"
}

.fa-boxes-packing:before {
    content: "\e4c7"
}

.fa-arrow-circle-left:before,.fa-circle-arrow-left:before {
    content: "\f0a8"
}

.fa-group-arrows-rotate:before {
    content: "\e4f6"
}

.fa-bowl-food:before {
    content: "\e4c6"
}

.fa-candy-cane:before {
    content: "\f786"
}

.fa-arrow-down-wide-short:before,.fa-sort-amount-asc:before,.fa-sort-amount-down:before {
    content: "\f160"
}

.fa-cloud-bolt:before,.fa-thunderstorm:before {
    content: "\f76c"
}

.fa-remove-format:before,.fa-text-slash:before {
    content: "\f87d"
}

.fa-face-smile-wink:before,.fa-smile-wink:before {
    content: "\f4da"
}

.fa-file-word:before {
    content: "\f1c2"
}

.fa-file-powerpoint:before {
    content: "\f1c4"
}

.fa-arrows-h:before,.fa-arrows-left-right:before {
    content: "\f07e"
}

.fa-house-lock:before {
    content: "\e510"
}

.fa-cloud-arrow-down:before,.fa-cloud-download-alt:before,.fa-cloud-download:before {
    content: "\f0ed"
}

.fa-children:before {
    content: "\e4e1"
}

.fa-blackboard:before,.fa-chalkboard:before {
    content: "\f51b"
}

.fa-user-alt-slash:before,.fa-user-large-slash:before {
    content: "\f4fa"
}

.fa-envelope-open:before {
    content: "\f2b6"
}

.fa-handshake-alt-slash:before,.fa-handshake-simple-slash:before {
    content: "\e05f"
}

.fa-mattress-pillow:before {
    content: "\e525"
}

.fa-guarani-sign:before {
    content: "\e19a"
}

.fa-arrows-rotate:before,.fa-refresh:before,.fa-sync:before {
    content: "\f021"
}

.fa-fire-extinguisher:before {
    content: "\f134"
}

.fa-cruzeiro-sign:before {
    content: "\e152"
}

.fa-greater-than-equal:before {
    content: "\f532"
}

.fa-shield-alt:before,.fa-shield-halved:before {
    content: "\f3ed"
}

.fa-atlas:before,.fa-book-atlas:before {
    content: "\f558"
}

.fa-virus:before {
    content: "\e074"
}

.fa-envelope-circle-check:before {
    content: "\e4e8"
}

.fa-layer-group:before {
    content: "\f5fd"
}

.fa-arrows-to-dot:before {
    content: "\e4be"
}

.fa-archway:before {
    content: "\f557"
}

.fa-heart-circle-check:before {
    content: "\e4fd"
}

.fa-house-chimney-crack:before,.fa-house-damage:before {
    content: "\f6f1"
}

.fa-file-archive:before,.fa-file-zipper:before {
    content: "\f1c6"
}

.fa-square:before {
    content: "\f0c8"
}

.fa-glass-martini:before,.fa-martini-glass-empty:before {
    content: "\f000"
}

.fa-couch:before {
    content: "\f4b8"
}

.fa-cedi-sign:before {
    content: "\e0df"
}

.fa-italic:before {
    content: "\f033"
}

.fa-church:before {
    content: "\f51d"
}

.fa-comments-dollar:before {
    content: "\f653"
}

.fa-democrat:before {
    content: "\f747"
}

.fa-z:before {
    content: "Z"
}

.fa-person-skiing:before,.fa-skiing:before {
    content: "\f7c9"
}

.fa-road-lock:before {
    content: "\e567"
}

.fa-a:before {
    content: "A"
}

.fa-temperature-arrow-down:before,.fa-temperature-down:before {
    content: "\e03f"
}

.fa-feather-alt:before,.fa-feather-pointed:before {
    content: "\f56b"
}

.fa-p:before {
    content: "P"
}

.fa-snowflake:before {
    content: "\f2dc"
}

.fa-newspaper:before {
    content: "\f1ea"
}

.fa-ad:before,.fa-rectangle-ad:before {
    content: "\f641"
}

.fa-arrow-circle-right:before,.fa-circle-arrow-right:before {
    content: "\f0a9"
}

.fa-filter-circle-xmark:before {
    content: "\e17b"
}

.fa-locust:before {
    content: "\e520"
}

.fa-sort:before,.fa-unsorted:before {
    content: "\f0dc"
}

.fa-list-1-2:before,.fa-list-numeric:before,.fa-list-ol:before {
    content: "\f0cb"
}

.fa-person-dress-burst:before {
    content: "\e544"
}

.fa-money-check-alt:before,.fa-money-check-dollar:before {
    content: "\f53d"
}

.fa-vector-square:before {
    content: "\f5cb"
}

.fa-bread-slice:before {
    content: "\f7ec"
}

.fa-language:before {
    content: "\f1ab"
}

.fa-face-kiss-wink-heart:before,.fa-kiss-wink-heart:before {
    content: "\f598"
}

.fa-filter:before {
    content: "\f0b0"
}

.fa-question:before {
    content: "\?"
}

.fa-file-signature:before {
    content: "\f573"
}

.fa-arrows-alt:before,.fa-up-down-left-right:before {
    content: "\f0b2"
}

.fa-house-chimney-user:before {
    content: "\e065"
}

.fa-hand-holding-heart:before {
    content: "\f4be"
}

.fa-puzzle-piece:before {
    content: "\f12e"
}

.fa-money-check:before {
    content: "\f53c"
}

.fa-star-half-alt:before,.fa-star-half-stroke:before {
    content: "\f5c0"
}

.fa-code:before {
    content: "\f121"
}

.fa-glass-whiskey:before,.fa-whiskey-glass:before {
    content: "\f7a0"
}

.fa-building-circle-exclamation:before {
    content: "\e4d3"
}

.fa-magnifying-glass-chart:before {
    content: "\e522"
}

.fa-arrow-up-right-from-square:before,.fa-external-link:before {
    content: "\f08e"
}

.fa-cubes-stacked:before {
    content: "\e4e6"
}

.fa-krw:before,.fa-won-sign:before,.fa-won:before {
    content: "\f159"
}

.fa-virus-covid:before {
    content: "\e4a8"
}

.fa-austral-sign:before {
    content: "\e0a9"
}

.fa-f:before {
    content: "F"
}

.fa-leaf:before {
    content: "\f06c"
}

.fa-road:before {
    content: "\f018"
}

.fa-cab:before,.fa-taxi:before {
    content: "\f1ba"
}

.fa-person-circle-plus:before {
    content: "\e541"
}

.fa-chart-pie:before,.fa-pie-chart:before {
    content: "\f200"
}

.fa-bolt-lightning:before {
    content: "\e0b7"
}

.fa-sack-xmark:before {
    content: "\e56a"
}

.fa-file-excel:before {
    content: "\f1c3"
}

.fa-file-contract:before {
    content: "\f56c"
}

.fa-fish-fins:before {
    content: "\e4f2"
}

.fa-building-flag:before {
    content: "\e4d5"
}

.fa-face-grin-beam:before,.fa-grin-beam:before {
    content: "\f582"
}

.fa-object-ungroup:before {
    content: "\f248"
}

.fa-poop:before {
    content: "\f619"
}

.fa-location-pin:before,.fa-map-marker:before {
    content: "\f041"
}

.fa-kaaba:before {
    content: "\f66b"
}

.fa-toilet-paper:before {
    content: "\f71e"
}

.fa-hard-hat:before,.fa-hat-hard:before,.fa-helmet-safety:before {
    content: "\f807"
}

.fa-eject:before {
    content: "\f052"
}

.fa-arrow-alt-circle-right:before,.fa-circle-right:before {
    content: "\f35a"
}

.fa-plane-circle-check:before {
    content: "\e555"
}

.fa-face-rolling-eyes:before,.fa-meh-rolling-eyes:before {
    content: "\f5a5"
}

.fa-object-group:before {
    content: "\f247"
}

.fa-chart-line:before,.fa-line-chart:before {
    content: "\f201"
}

.fa-mask-ventilator:before {
    content: "\e524"
}

.fa-arrow-right:before {
    content: "\f061"
}

.fa-map-signs:before,.fa-signs-post:before {
    content: "\f277"
}

.fa-cash-register:before {
    content: "\f788"
}

.fa-person-circle-question:before {
    content: "\e542"
}

.fa-h:before {
    content: "H"
}

.fa-tarp:before {
    content: "\e57b"
}

.fa-screwdriver-wrench:before,.fa-tools:before {
    content: "\f7d9"
}

.fa-arrows-to-eye:before {
    content: "\e4bf"
}

.fa-plug-circle-bolt:before {
    content: "\e55b"
}

.fa-heart:before {
    content: "\f004"
}

.fa-mars-and-venus:before {
    content: "\f224"
}

.fa-home-user:before,.fa-house-user:before {
    content: "\e1b0"
}

.fa-dumpster-fire:before {
    content: "\f794"
}

.fa-house-crack:before {
    content: "\e3b1"
}

.fa-cocktail:before,.fa-martini-glass-citrus:before {
    content: "\f561"
}

.fa-face-surprise:before,.fa-surprise:before {
    content: "\f5c2"
}

.fa-bottle-water:before {
    content: "\e4c5"
}

.fa-circle-pause:before,.fa-pause-circle:before {
    content: "\f28b"
}

.fa-toilet-paper-slash:before {
    content: "\e072"
}

.fa-apple-alt:before,.fa-apple-whole:before {
    content: "\f5d1"
}

.fa-kitchen-set:before {
    content: "\e51a"
}

.fa-r:before {
    content: "R"
}

.fa-temperature-1:before,.fa-temperature-quarter:before,.fa-thermometer-1:before,.fa-thermometer-quarter:before {
    content: "\f2ca"
}

.fa-cube:before {
    content: "\f1b2"
}

.fa-bitcoin-sign:before {
    content: "\e0b4"
}

.fa-shield-dog:before {
    content: "\e573"
}

.fa-solar-panel:before {
    content: "\f5ba"
}

.fa-lock-open:before {
    content: "\f3c1"
}

.fa-elevator:before {
    content: "\e16d"
}

.fa-money-bill-transfer:before {
    content: "\e528"
}

.fa-money-bill-trend-up:before {
    content: "\e529"
}

.fa-house-flood-water-circle-arrow-right:before {
    content: "\e50f"
}

.fa-poll-h:before,.fa-square-poll-horizontal:before {
    content: "\f682"
}

.fa-circle:before {
    content: "\f111"
}

.fa-backward-fast:before,.fa-fast-backward:before {
    content: "\f049"
}

.fa-recycle:before {
    content: "\f1b8"
}

.fa-user-astronaut:before {
    content: "\f4fb"
}

.fa-plane-slash:before {
    content: "\e069"
}

.fa-trademark:before {
    content: "\f25c"
}

.fa-basketball-ball:before,.fa-basketball:before {
    content: "\f434"
}

.fa-satellite-dish:before {
    content: "\f7c0"
}

.fa-arrow-alt-circle-up:before,.fa-circle-up:before {
    content: "\f35b"
}

.fa-mobile-alt:before,.fa-mobile-screen-button:before {
    content: "\f3cd"
}

.fa-volume-high:before,.fa-volume-up:before {
    content: "\f028"
}

.fa-users-rays:before {
    content: "\e593"
}

.fa-wallet:before {
    content: "\f555"
}

.fa-clipboard-check:before {
    content: "\f46c"
}

.fa-file-audio:before {
    content: "\f1c7"
}

.fa-burger:before,.fa-hamburger:before {
    content: "\f805"
}

.fa-wrench:before {
    content: "\f0ad"
}

.fa-bugs:before {
    content: "\e4d0"
}

.fa-rupee-sign:before,.fa-rupee:before {
    content: "\f156"
}

.fa-file-image:before {
    content: "\f1c5"
}

.fa-circle-question:before,.fa-question-circle:before {
    content: "\f059"
}

.fa-plane-departure:before {
    content: "\f5b0"
}

.fa-handshake-slash:before {
    content: "\e060"
}

.fa-book-bookmark:before {
    content: "\e0bb"
}

.fa-code-branch:before {
    content: "\f126"
}

.fa-hat-cowboy:before {
    content: "\f8c0"
}

.fa-bridge:before {
    content: "\e4c8"
}

.fa-phone-alt:before,.fa-phone-flip:before {
    content: "\f879"
}

.fa-truck-front:before {
    content: "\e2b7"
}

.fa-cat:before {
    content: "\f6be"
}

.fa-anchor-circle-exclamation:before {
    content: "\e4ab"
}

.fa-truck-field:before {
    content: "\e58d"
}

.fa-route:before {
    content: "\f4d7"
}

.fa-clipboard-question:before {
    content: "\e4e3"
}

.fa-panorama:before {
    content: "\e209"
}

.fa-comment-medical:before {
    content: "\f7f5"
}

.fa-teeth-open:before {
    content: "\f62f"
}

.fa-file-circle-minus:before {
    content: "\e4ed"
}

.fa-tags:before {
    content: "\f02c"
}

.fa-wine-glass:before {
    content: "\f4e3"
}

.fa-fast-forward:before,.fa-forward-fast:before {
    content: "\f050"
}

.fa-face-meh-blank:before,.fa-meh-blank:before {
    content: "\f5a4"
}

.fa-parking:before,.fa-square-parking:before {
    content: "\f540"
}

.fa-house-signal:before {
    content: "\e012"
}

.fa-bars-progress:before,.fa-tasks-alt:before {
    content: "\f828"
}

.fa-faucet-drip:before {
    content: "\e006"
}

.fa-cart-flatbed:before,.fa-dolly-flatbed:before {
    content: "\f474"
}

.fa-ban-smoking:before,.fa-smoking-ban:before {
    content: "\f54d"
}

.fa-terminal:before {
    content: "\f120"
}

.fa-mobile-button:before {
    content: "\f10b"
}

.fa-house-medical-flag:before {
    content: "\e514"
}

.fa-basket-shopping:before,.fa-shopping-basket:before {
    content: "\f291"
}

.fa-tape:before {
    content: "\f4db"
}

.fa-bus-alt:before,.fa-bus-simple:before {
    content: "\f55e"
}

.fa-eye:before {
    content: "\f06e"
}

.fa-face-sad-cry:before,.fa-sad-cry:before {
    content: "\f5b3"
}

.fa-audio-description:before {
    content: "\f29e"
}

.fa-person-military-to-person:before {
    content: "\e54c"
}

.fa-file-shield:before {
    content: "\e4f0"
}

.fa-user-slash:before {
    content: "\f506"
}

.fa-pen:before {
    content: "\f304"
}

.fa-tower-observation:before {
    content: "\e586"
}

.fa-file-code:before {
    content: "\f1c9"
}

.fa-signal-5:before,.fa-signal-perfect:before,.fa-signal:before {
    content: "\f012"
}

.fa-bus:before {
    content: "\f207"
}

.fa-heart-circle-xmark:before {
    content: "\e501"
}

.fa-home-lg:before,.fa-house-chimney:before {
    content: "\e3af"
}

.fa-window-maximize:before {
    content: "\f2d0"
}

.fa-face-frown:before,.fa-frown:before {
    content: "\f119"
}

.fa-prescription:before {
    content: "\f5b1"
}

.fa-shop:before,.fa-store-alt:before {
    content: "\f54f"
}

.fa-floppy-disk:before,.fa-save:before {
    content: "\f0c7"
}

.fa-vihara:before {
    content: "\f6a7"
}

.fa-balance-scale-left:before,.fa-scale-unbalanced:before {
    content: "\f515"
}

.fa-sort-asc:before,.fa-sort-up:before {
    content: "\f0de"
}

.fa-comment-dots:before,.fa-commenting:before {
    content: "\f4ad"
}

.fa-plant-wilt:before {
    content: "\e5aa"
}

.fa-diamond:before {
    content: "\f219"
}

.fa-face-grin-squint:before,.fa-grin-squint:before {
    content: "\f585"
}

.fa-hand-holding-dollar:before,.fa-hand-holding-usd:before {
    content: "\f4c0"
}

.fa-bacterium:before {
    content: "\e05a"
}

.fa-hand-pointer:before {
    content: "\f25a"
}

.fa-drum-steelpan:before {
    content: "\f56a"
}

.fa-hand-scissors:before {
    content: "\f257"
}

.fa-hands-praying:before,.fa-praying-hands:before {
    content: "\f684"
}

.fa-arrow-right-rotate:before,.fa-arrow-rotate-forward:before,.fa-arrow-rotate-right:before,.fa-redo:before {
    content: "\f01e"
}

.fa-biohazard:before {
    content: "\f780"
}

.fa-location-crosshairs:before,.fa-location:before {
    content: "\f601"
}

.fa-mars-double:before {
    content: "\f227"
}

.fa-child-dress:before {
    content: "\e59c"
}

.fa-users-between-lines:before {
    content: "\e591"
}

.fa-lungs-virus:before {
    content: "\e067"
}

.fa-face-grin-tears:before,.fa-grin-tears:before {
    content: "\f588"
}

.fa-phone:before {
    content: "\f095"
}

.fa-calendar-times:before,.fa-calendar-xmark:before {
    content: "\f273"
}

.fa-child-reaching:before {
    content: "\e59d"
}

.fa-head-side-virus:before {
    content: "\e064"
}

.fa-user-cog:before,.fa-user-gear:before {
    content: "\f4fe"
}

.fa-arrow-up-1-9:before,.fa-sort-numeric-up:before {
    content: "\f163"
}

.fa-door-closed:before {
    content: "\f52a"
}

.fa-shield-virus:before {
    content: "\e06c"
}

.fa-dice-six:before {
    content: "\f526"
}

.fa-mosquito-net:before {
    content: "\e52c"
}

.fa-bridge-water:before {
    content: "\e4ce"
}

.fa-person-booth:before {
    content: "\f756"
}

.fa-text-width:before {
    content: "\f035"
}

.fa-hat-wizard:before {
    content: "\f6e8"
}

.fa-pen-fancy:before {
    content: "\f5ac"
}

.fa-digging:before,.fa-person-digging:before {
    content: "\f85e"
}

.fa-trash:before {
    content: "\f1f8"
}

.fa-gauge-simple-med:before,.fa-gauge-simple:before,.fa-tachometer-average:before {
    content: "\f629"
}

.fa-book-medical:before {
    content: "\f7e6"
}

.fa-poo:before {
    content: "\f2fe"
}

.fa-quote-right-alt:before,.fa-quote-right:before {
    content: "\f10e"
}

.fa-shirt:before,.fa-t-shirt:before,.fa-tshirt:before {
    content: "\f553"
}

.fa-cubes:before {
    content: "\f1b3"
}

.fa-divide:before {
    content: "\f529"
}

.fa-tenge-sign:before,.fa-tenge:before {
    content: "\f7d7"
}

.fa-headphones:before {
    content: "\f025"
}

.fa-hands-holding:before {
    content: "\f4c2"
}

.fa-hands-clapping:before {
    content: "\e1a8"
}

.fa-republican:before {
    content: "\f75e"
}

.fa-arrow-left:before {
    content: "\f060"
}

.fa-person-circle-xmark:before {
    content: "\e543"
}

.fa-ruler:before {
    content: "\f545"
}

.fa-align-left:before {
    content: "\f036"
}

.fa-dice-d6:before {
    content: "\f6d1"
}

.fa-restroom:before {
    content: "\f7bd"
}

.fa-j:before {
    content: "J"
}

.fa-users-viewfinder:before {
    content: "\e595"
}

.fa-file-video:before {
    content: "\f1c8"
}

.fa-external-link-alt:before,.fa-up-right-from-square:before {
    content: "\f35d"
}

.fa-table-cells:before,.fa-th:before {
    content: "\f00a"
}

.fa-file-pdf:before {
    content: "\f1c1"
}

.fa-bible:before,.fa-book-bible:before {
    content: "\f647"
}

.fa-o:before {
    content: "O"
}

.fa-medkit:before,.fa-suitcase-medical:before {
    content: "\f0fa"
}

.fa-user-secret:before {
    content: "\f21b"
}

.fa-otter:before {
    content: "\f700"
}

.fa-female:before,.fa-person-dress:before {
    content: "\f182"
}

.fa-comment-dollar:before {
    content: "\f651"
}

.fa-briefcase-clock:before,.fa-business-time:before {
    content: "\f64a"
}

.fa-table-cells-large:before,.fa-th-large:before {
    content: "\f009"
}

.fa-book-tanakh:before,.fa-tanakh:before {
    content: "\f827"
}

.fa-phone-volume:before,.fa-volume-control-phone:before {
    content: "\f2a0"
}

.fa-hat-cowboy-side:before {
    content: "\f8c1"
}

.fa-clipboard-user:before {
    content: "\f7f3"
}

.fa-child:before {
    content: "\f1ae"
}

.fa-lira-sign:before {
    content: "\f195"
}

.fa-satellite:before {
    content: "\f7bf"
}

.fa-plane-lock:before {
    content: "\e558"
}

.fa-tag:before {
    content: "\f02b"
}

.fa-comment:before {
    content: "\f075"
}

.fa-birthday-cake:before,.fa-cake-candles:before,.fa-cake:before {
    content: "\f1fd"
}

.fa-envelope:before {
    content: "\f0e0"
}

.fa-angle-double-up:before,.fa-angles-up:before {
    content: "\f102"
}

.fa-paperclip:before {
    content: "\f0c6"
}

.fa-arrow-right-to-city:before {
    content: "\e4b3"
}

.fa-ribbon:before {
    content: "\f4d6"
}

.fa-lungs:before {
    content: "\f604"
}

.fa-arrow-up-9-1:before,.fa-sort-numeric-up-alt:before {
    content: "\f887"
}

.fa-litecoin-sign:before {
    content: "\e1d3"
}

.fa-border-none:before {
    content: "\f850"
}

.fa-circle-nodes:before {
    content: "\e4e2"
}

.fa-parachute-box:before {
    content: "\f4cd"
}

.fa-indent:before {
    content: "\f03c"
}

.fa-truck-field-un:before {
    content: "\e58e"
}

.fa-hourglass-empty:before,.fa-hourglass:before {
    content: "\f254"
}

.fa-mountain:before {
    content: "\f6fc"
}

.fa-user-doctor:before,.fa-user-md:before {
    content: "\f0f0"
}

.fa-circle-info:before,.fa-info-circle:before {
    content: "\f05a"
}

.fa-cloud-meatball:before {
    content: "\f73b"
}

.fa-camera-alt:before,.fa-camera:before {
    content: "\f030"
}

.fa-square-virus:before {
    content: "\e578"
}

.fa-meteor:before {
    content: "\f753"
}

.fa-car-on:before {
    content: "\e4dd"
}

.fa-sleigh:before {
    content: "\f7cc"
}

.fa-arrow-down-1-9:before,.fa-sort-numeric-asc:before,.fa-sort-numeric-down:before {
    content: "\f162"
}

.fa-hand-holding-droplet:before,.fa-hand-holding-water:before {
    content: "\f4c1"
}

.fa-water:before {
    content: "\f773"
}

.fa-calendar-check:before {
    content: "\f274"
}

.fa-braille:before {
    content: "\f2a1"
}

.fa-prescription-bottle-alt:before,.fa-prescription-bottle-medical:before {
    content: "\f486"
}

.fa-landmark:before {
    content: "\f66f"
}

.fa-truck:before {
    content: "\f0d1"
}

.fa-crosshairs:before {
    content: "\f05b"
}

.fa-person-cane:before {
    content: "\e53c"
}

.fa-tent:before {
    content: "\e57d"
}

.fa-vest-patches:before {
    content: "\e086"
}

.fa-check-double:before {
    content: "\f560"
}

.fa-arrow-down-a-z:before,.fa-sort-alpha-asc:before,.fa-sort-alpha-down:before {
    content: "\f15d"
}

.fa-money-bill-wheat:before {
    content: "\e52a"
}

.fa-cookie:before {
    content: "\f563"
}

.fa-arrow-left-rotate:before,.fa-arrow-rotate-back:before,.fa-arrow-rotate-backward:before,.fa-arrow-rotate-left:before,.fa-undo:before {
    content: "\f0e2"
}

.fa-hard-drive:before,.fa-hdd:before {
    content: "\f0a0"
}

.fa-face-grin-squint-tears:before,.fa-grin-squint-tears:before {
    content: "\f586"
}

.fa-dumbbell:before {
    content: "\f44b"
}

.fa-list-alt:before,.fa-rectangle-list:before {
    content: "\f022"
}

.fa-tarp-droplet:before {
    content: "\e57c"
}

.fa-house-medical-circle-check:before {
    content: "\e511"
}

.fa-person-skiing-nordic:before,.fa-skiing-nordic:before {
    content: "\f7ca"
}

.fa-calendar-plus:before {
    content: "\f271"
}

.fa-plane-arrival:before {
    content: "\f5af"
}

.fa-arrow-alt-circle-left:before,.fa-circle-left:before {
    content: "\f359"
}

.fa-subway:before,.fa-train-subway:before {
    content: "\f239"
}

.fa-chart-gantt:before {
    content: "\e0e4"
}

.fa-indian-rupee-sign:before,.fa-indian-rupee:before,.fa-inr:before {
    content: "\e1bc"
}

.fa-crop-alt:before,.fa-crop-simple:before {
    content: "\f565"
}

.fa-money-bill-1:before,.fa-money-bill-alt:before {
    content: "\f3d1"
}

.fa-left-long:before,.fa-long-arrow-alt-left:before {
    content: "\f30a"
}

.fa-dna:before {
    content: "\f471"
}

.fa-virus-slash:before {
    content: "\e075"
}

.fa-minus:before,.fa-subtract:before {
    content: "\f068"
}

.fa-chess:before {
    content: "\f439"
}

.fa-arrow-left-long:before,.fa-long-arrow-left:before {
    content: "\f177"
}

.fa-plug-circle-check:before {
    content: "\e55c"
}

.fa-street-view:before {
    content: "\f21d"
}

.fa-franc-sign:before {
    content: "\e18f"
}

.fa-volume-off:before {
    content: "\f026"
}

.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before,.fa-hands-american-sign-language-interpreting:before,.fa-hands-asl-interpreting:before {
    content: "\f2a3"
}

.fa-cog:before,.fa-gear:before {
    content: "\f013"
}

.fa-droplet-slash:before,.fa-tint-slash:before {
    content: "\f5c7"
}

.fa-mosque:before {
    content: "\f678"
}

.fa-mosquito:before {
    content: "\e52b"
}

.fa-star-of-david:before {
    content: "\f69a"
}

.fa-person-military-rifle:before {
    content: "\e54b"
}

.fa-cart-shopping:before,.fa-shopping-cart:before {
    content: "\f07a"
}

.fa-vials:before {
    content: "\f493"
}

.fa-plug-circle-plus:before {
    content: "\e55f"
}

.fa-place-of-worship:before {
    content: "\f67f"
}

.fa-grip-vertical:before {
    content: "\f58e"
}

.fa-arrow-turn-up:before,.fa-level-up:before {
    content: "\f148"
}

.fa-u:before {
    content: "U"
}

.fa-square-root-alt:before,.fa-square-root-variable:before {
    content: "\f698"
}

.fa-clock-four:before,.fa-clock:before {
    content: "\f017"
}

.fa-backward-step:before,.fa-step-backward:before {
    content: "\f048"
}

.fa-pallet:before {
    content: "\f482"
}

.fa-faucet:before {
    content: "\e005"
}

.fa-baseball-bat-ball:before {
    content: "\f432"
}

.fa-s:before {
    content: "S"
}

.fa-timeline:before {
    content: "\e29c"
}

.fa-keyboard:before {
    content: "\f11c"
}

.fa-caret-down:before {
    content: "\f0d7"
}

.fa-clinic-medical:before,.fa-house-chimney-medical:before {
    content: "\f7f2"
}

.fa-temperature-3:before,.fa-temperature-three-quarters:before,.fa-thermometer-3:before,.fa-thermometer-three-quarters:before {
    content: "\f2c8"
}

.fa-mobile-android-alt:before,.fa-mobile-screen:before {
    content: "\f3cf"
}

.fa-plane-up:before {
    content: "\e22d"
}

.fa-piggy-bank:before {
    content: "\f4d3"
}

.fa-battery-3:before,.fa-battery-half:before {
    content: "\f242"
}

.fa-mountain-city:before {
    content: "\e52e"
}

.fa-coins:before {
    content: "\f51e"
}

.fa-khanda:before {
    content: "\f66d"
}

.fa-sliders-h:before,.fa-sliders:before {
    content: "\f1de"
}

.fa-folder-tree:before {
    content: "\f802"
}

.fa-network-wired:before {
    content: "\f6ff"
}

.fa-map-pin:before {
    content: "\f276"
}

.fa-hamsa:before {
    content: "\f665"
}

.fa-cent-sign:before {
    content: "\e3f5"
}

.fa-flask:before {
    content: "\f0c3"
}

.fa-person-pregnant:before {
    content: "\e31e"
}

.fa-wand-sparkles:before {
    content: "\f72b"
}

.fa-ellipsis-v:before,.fa-ellipsis-vertical:before {
    content: "\f142"
}

.fa-ticket:before {
    content: "\f145"
}

.fa-power-off:before {
    content: "\f011"
}

.fa-long-arrow-alt-right:before,.fa-right-long:before {
    content: "\f30b"
}

.fa-flag-usa:before {
    content: "\f74d"
}

.fa-laptop-file:before {
    content: "\e51d"
}

.fa-teletype:before,.fa-tty:before {
    content: "\f1e4"
}

.fa-diagram-next:before {
    content: "\e476"
}

.fa-person-rifle:before {
    content: "\e54e"
}

.fa-house-medical-circle-exclamation:before {
    content: "\e512"
}

.fa-closed-captioning:before {
    content: "\f20a"
}

.fa-hiking:before,.fa-person-hiking:before {
    content: "\f6ec"
}

.fa-venus-double:before {
    content: "\f226"
}

.fa-images:before {
    content: "\f302"
}

.fa-calculator:before {
    content: "\f1ec"
}

.fa-people-pulling:before {
    content: "\e535"
}

.fa-n:before {
    content: "N"
}

.fa-cable-car:before,.fa-tram:before {
    content: "\f7da"
}

.fa-cloud-rain:before {
    content: "\f73d"
}

.fa-building-circle-xmark:before {
    content: "\e4d4"
}

.fa-ship:before {
    content: "\f21a"
}

.fa-arrows-down-to-line:before {
    content: "\e4b8"
}

.fa-download:before {
    content: "\f019"
}

.fa-face-grin:before,.fa-grin:before {
    content: "\f580"
}

.fa-backspace:before,.fa-delete-left:before {
    content: "\f55a"
}

.fa-eye-dropper-empty:before,.fa-eye-dropper:before,.fa-eyedropper:before {
    content: "\f1fb"
}

.fa-file-circle-check:before {
    content: "\e5a0"
}

.fa-forward:before {
    content: "\f04e"
}

.fa-mobile-android:before,.fa-mobile-phone:before,.fa-mobile:before {
    content: "\f3ce"
}

.fa-face-meh:before,.fa-meh:before {
    content: "\f11a"
}

.fa-align-center:before {
    content: "\f037"
}

.fa-book-dead:before,.fa-book-skull:before {
    content: "\f6b7"
}

.fa-drivers-license:before,.fa-id-card:before {
    content: "\f2c2"
}

.fa-dedent:before,.fa-outdent:before {
    content: "\f03b"
}

.fa-heart-circle-exclamation:before {
    content: "\e4fe"
}

.fa-home-alt:before,.fa-home-lg-alt:before,.fa-home:before,.fa-house:before {
    content: "\f015"
}

.fa-calendar-week:before {
    content: "\f784"
}

.fa-laptop-medical:before {
    content: "\f812"
}

.fa-b:before {
    content: "B"
}

.fa-file-medical:before {
    content: "\f477"
}

.fa-dice-one:before {
    content: "\f525"
}

.fa-kiwi-bird:before {
    content: "\f535"
}

.fa-arrow-right-arrow-left:before,.fa-exchange:before {
    content: "\f0ec"
}

.fa-redo-alt:before,.fa-rotate-forward:before,.fa-rotate-right:before {
    content: "\f2f9"
}

.fa-cutlery:before,.fa-utensils:before {
    content: "\f2e7"
}

.fa-arrow-up-wide-short:before,.fa-sort-amount-up:before {
    content: "\f161"
}

.fa-mill-sign:before {
    content: "\e1ed"
}

.fa-bowl-rice:before {
    content: "\e2eb"
}

.fa-skull:before {
    content: "\f54c"
}

.fa-broadcast-tower:before,.fa-tower-broadcast:before {
    content: "\f519"
}

.fa-truck-pickup:before {
    content: "\f63c"
}

.fa-long-arrow-alt-up:before,.fa-up-long:before {
    content: "\f30c"
}

.fa-stop:before {
    content: "\f04d"
}

.fa-code-merge:before {
    content: "\f387"
}

.fa-upload:before {
    content: "\f093"
}

.fa-hurricane:before {
    content: "\f751"
}

.fa-mound:before {
    content: "\e52d"
}

.fa-toilet-portable:before {
    content: "\e583"
}

.fa-compact-disc:before {
    content: "\f51f"
}

.fa-file-arrow-down:before,.fa-file-download:before {
    content: "\f56d"
}

.fa-caravan:before {
    content: "\f8ff"
}

.fa-shield-cat:before {
    content: "\e572"
}

.fa-bolt:before,.fa-zap:before {
    content: "\f0e7"
}

.fa-glass-water:before {
    content: "\e4f4"
}

.fa-oil-well:before {
    content: "\e532"
}

.fa-vault:before {
    content: "\e2c5"
}

.fa-mars:before {
    content: "\f222"
}

.fa-toilet:before {
    content: "\f7d8"
}

.fa-plane-circle-xmark:before {
    content: "\e557"
}

.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen-sign:before,.fa-yen:before {
    content: "\f157"
}

.fa-rouble:before,.fa-rub:before,.fa-ruble-sign:before,.fa-ruble:before {
    content: "\f158"
}

.fa-sun:before {
    content: "\f185"
}

.fa-guitar:before {
    content: "\f7a6"
}

.fa-face-laugh-wink:before,.fa-laugh-wink:before {
    content: "\f59c"
}

.fa-horse-head:before {
    content: "\f7ab"
}

.fa-bore-hole:before {
    content: "\e4c3"
}

.fa-industry:before {
    content: "\f275"
}

.fa-arrow-alt-circle-down:before,.fa-circle-down:before {
    content: "\f358"
}

.fa-arrows-turn-to-dots:before {
    content: "\e4c1"
}

.fa-florin-sign:before {
    content: "\e184"
}

.fa-arrow-down-short-wide:before,.fa-sort-amount-desc:before,.fa-sort-amount-down-alt:before {
    content: "\f884"
}

.fa-less-than:before {
    content: "\<"
}

.fa-angle-down:before {
    content: "\f107"
}

.fa-car-tunnel:before {
    content: "\e4de"
}

.fa-head-side-cough:before {
    content: "\e061"
}

.fa-grip-lines:before {
    content: "\f7a4"
}

.fa-thumbs-down:before {
    content: "\f165"
}

.fa-user-lock:before {
    content: "\f502"
}

.fa-arrow-right-long:before,.fa-long-arrow-right:before {
    content: "\f178"
}

.fa-anchor-circle-xmark:before {
    content: "\e4ac"
}

.fa-ellipsis-h:before,.fa-ellipsis:before {
    content: "\f141"
}

.fa-chess-pawn:before {
    content: "\f443"
}

.fa-first-aid:before,.fa-kit-medical:before {
    content: "\f479"
}

.fa-person-through-window:before {
    content: "\e5a9"
}

.fa-toolbox:before {
    content: "\f552"
}

.fa-hands-holding-circle:before {
    content: "\e4fb"
}

.fa-bug:before {
    content: "\f188"
}

.fa-credit-card-alt:before,.fa-credit-card:before {
    content: "\f09d"
}

.fa-automobile:before,.fa-car:before {
    content: "\f1b9"
}

.fa-hand-holding-hand:before {
    content: "\e4f7"
}

.fa-book-open-reader:before,.fa-book-reader:before {
    content: "\f5da"
}

.fa-mountain-sun:before {
    content: "\e52f"
}

.fa-arrows-left-right-to-line:before {
    content: "\e4ba"
}

.fa-dice-d20:before {
    content: "\f6cf"
}

.fa-truck-droplet:before {
    content: "\e58c"
}

.fa-file-circle-xmark:before {
    content: "\e5a1"
}

.fa-temperature-arrow-up:before,.fa-temperature-up:before {
    content: "\e040"
}

.fa-medal:before {
    content: "\f5a2"
}

.fa-bed:before {
    content: "\f236"
}

.fa-h-square:before,.fa-square-h:before {
    content: "\f0fd"
}

.fa-podcast:before {
    content: "\f2ce"
}

.fa-temperature-4:before,.fa-temperature-full:before,.fa-thermometer-4:before,.fa-thermometer-full:before {
    content: "\f2c7"
}

.fa-bell:before {
    content: "\f0f3"
}

.fa-superscript:before {
    content: "\f12b"
}

.fa-plug-circle-xmark:before {
    content: "\e560"
}

.fa-star-of-life:before {
    content: "\f621"
}

.fa-phone-slash:before {
    content: "\f3dd"
}

.fa-paint-roller:before {
    content: "\f5aa"
}

.fa-hands-helping:before,.fa-handshake-angle:before {
    content: "\f4c4"
}

.fa-location-dot:before,.fa-map-marker-alt:before {
    content: "\f3c5"
}

.fa-file:before {
    content: "\f15b"
}

.fa-greater-than:before {
    content: "\>"
}

.fa-person-swimming:before,.fa-swimmer:before {
    content: "\f5c4"
}

.fa-arrow-down:before {
    content: "\f063"
}

.fa-droplet:before,.fa-tint:before {
    content: "\f043"
}

.fa-eraser:before {
    content: "\f12d"
}

.fa-earth-america:before,.fa-earth-americas:before,.fa-earth:before,.fa-globe-americas:before {
    content: "\f57d"
}

.fa-person-burst:before {
    content: "\e53b"
}

.fa-dove:before {
    content: "\f4ba"
}

.fa-battery-0:before,.fa-battery-empty:before {
    content: "\f244"
}

.fa-socks:before {
    content: "\f696"
}

.fa-inbox:before {
    content: "\f01c"
}

.fa-section:before {
    content: "\e447"
}

.fa-gauge-high:before,.fa-tachometer-alt-fast:before,.fa-tachometer-alt:before {
    content: "\f625"
}

.fa-envelope-open-text:before {
    content: "\f658"
}

.fa-hospital-alt:before,.fa-hospital-wide:before,.fa-hospital:before {
    content: "\f0f8"
}

.fa-wine-bottle:before {
    content: "\f72f"
}

.fa-chess-rook:before {
    content: "\f447"
}

.fa-bars-staggered:before,.fa-reorder:before,.fa-stream:before {
    content: "\f550"
}

.fa-dharmachakra:before {
    content: "\f655"
}

.fa-hotdog:before {
    content: "\f80f"
}

.fa-blind:before,.fa-person-walking-with-cane:before {
    content: "\f29d"
}

.fa-drum:before {
    content: "\f569"
}

.fa-ice-cream:before {
    content: "\f810"
}

.fa-heart-circle-bolt:before {
    content: "\e4fc"
}

.fa-fax:before {
    content: "\f1ac"
}

.fa-paragraph:before {
    content: "\f1dd"
}

.fa-check-to-slot:before,.fa-vote-yea:before {
    content: "\f772"
}

.fa-star-half:before {
    content: "\f089"
}

.fa-boxes-alt:before,.fa-boxes-stacked:before,.fa-boxes:before {
    content: "\f468"
}

.fa-chain:before,.fa-link:before {
    content: "\f0c1"
}

.fa-assistive-listening-systems:before,.fa-ear-listen:before {
    content: "\f2a2"
}

.fa-tree-city:before {
    content: "\e587"
}

.fa-play:before {
    content: "\f04b"
}

.fa-font:before {
    content: "\f031"
}

.fa-rupiah-sign:before {
    content: "\e23d"
}

.fa-magnifying-glass:before,.fa-search:before {
    content: "\f002"
}

.fa-ping-pong-paddle-ball:before,.fa-table-tennis-paddle-ball:before,.fa-table-tennis:before {
    content: "\f45d"
}

.fa-diagnoses:before,.fa-person-dots-from-line:before {
    content: "\f470"
}

.fa-trash-can-arrow-up:before,.fa-trash-restore-alt:before {
    content: "\f82a"
}

.fa-naira-sign:before {
    content: "\e1f6"
}

.fa-cart-arrow-down:before {
    content: "\f218"
}

.fa-walkie-talkie:before {
    content: "\f8ef"
}

.fa-file-edit:before,.fa-file-pen:before {
    content: "\f31c"
}

.fa-receipt:before {
    content: "\f543"
}

.fa-pen-square:before,.fa-pencil-square:before,.fa-square-pen:before {
    content: "\f14b"
}

.fa-suitcase-rolling:before {
    content: "\f5c1"
}

.fa-person-circle-exclamation:before {
    content: "\e53f"
}

.fa-chevron-down:before {
    content: "\f078"
}

.fa-battery-5:before,.fa-battery-full:before,.fa-battery:before {
    content: "\f240"
}

.fa-skull-crossbones:before {
    content: "\f714"
}

.fa-code-compare:before {
    content: "\e13a"
}

.fa-list-dots:before,.fa-list-ul:before {
    content: "\f0ca"
}

.fa-school-lock:before {
    content: "\e56f"
}

.fa-tower-cell:before {
    content: "\e585"
}

.fa-down-long:before,.fa-long-arrow-alt-down:before {
    content: "\f309"
}

.fa-ranking-star:before {
    content: "\e561"
}

.fa-chess-king:before {
    content: "\f43f"
}

.fa-person-harassing:before {
    content: "\e549"
}

.fa-brazilian-real-sign:before {
    content: "\e46c"
}

.fa-landmark-alt:before,.fa-landmark-dome:before {
    content: "\f752"
}

.fa-arrow-up:before {
    content: "\f062"
}

.fa-television:before,.fa-tv-alt:before,.fa-tv:before {
    content: "\f26c"
}

.fa-shrimp:before {
    content: "\e448"
}

.fa-list-check:before,.fa-tasks:before {
    content: "\f0ae"
}

.fa-jug-detergent:before {
    content: "\e519"
}

.fa-circle-user:before,.fa-user-circle:before {
    content: "\f2bd"
}

.fa-user-shield:before {
    content: "\f505"
}

.fa-wind:before {
    content: "\f72e"
}

.fa-car-burst:before,.fa-car-crash:before {
    content: "\f5e1"
}

.fa-y:before {
    content: "Y"
}

.fa-person-snowboarding:before,.fa-snowboarding:before {
    content: "\f7ce"
}

.fa-shipping-fast:before,.fa-truck-fast:before {
    content: "\f48b"
}

.fa-fish:before {
    content: "\f578"
}

.fa-user-graduate:before {
    content: "\f501"
}

.fa-adjust:before,.fa-circle-half-stroke:before {
    content: "\f042"
}

.fa-clapperboard:before {
    content: "\e131"
}

.fa-circle-radiation:before,.fa-radiation-alt:before {
    content: "\f7ba"
}

.fa-baseball-ball:before,.fa-baseball:before {
    content: "\f433"
}

.fa-jet-fighter-up:before {
    content: "\e518"
}

.fa-diagram-project:before,.fa-project-diagram:before {
    content: "\f542"
}

.fa-copy:before {
    content: "\f0c5"
}

.fa-volume-mute:before,.fa-volume-times:before,.fa-volume-xmark:before {
    content: "\f6a9"
}

.fa-hand-sparkles:before {
    content: "\e05d"
}

.fa-grip-horizontal:before,.fa-grip:before {
    content: "\f58d"
}

.fa-share-from-square:before,.fa-share-square:before {
    content: "\f14d"
}

.fa-child-combatant:before,.fa-child-rifle:before {
    content: "\e4e0"
}

.fa-gun:before {
    content: "\e19b"
}

.fa-phone-square:before,.fa-square-phone:before {
    content: "\f098"
}

.fa-add:before,.fa-plus:before {
    content: "\+"
}

.fa-expand:before {
    content: "\f065"
}

.fa-computer:before {
    content: "\e4e5"
}

.fa-close:before,.fa-multiply:before,.fa-remove:before,.fa-times:before,.fa-xmark:before {
    content: "\f00d"
}

.fa-arrows-up-down-left-right:before,.fa-arrows:before {
    content: "\f047"
}

.fa-chalkboard-teacher:before,.fa-chalkboard-user:before {
    content: "\f51c"
}

.fa-peso-sign:before {
    content: "\e222"
}

.fa-building-shield:before {
    content: "\e4d8"
}

.fa-baby:before {
    content: "\f77c"
}

.fa-users-line:before {
    content: "\e592"
}

.fa-quote-left-alt:before,.fa-quote-left:before {
    content: "\f10d"
}

.fa-tractor:before {
    content: "\f722"
}

.fa-trash-arrow-up:before,.fa-trash-restore:before {
    content: "\f829"
}

.fa-arrow-down-up-lock:before {
    content: "\e4b0"
}

.fa-lines-leaning:before {
    content: "\e51e"
}

.fa-ruler-combined:before {
    content: "\f546"
}

.fa-copyright:before {
    content: "\f1f9"
}

.fa-equals:before {
    content: "\="
}

.fa-blender:before {
    content: "\f517"
}

.fa-teeth:before {
    content: "\f62e"
}

.fa-ils:before,.fa-shekel-sign:before,.fa-shekel:before,.fa-sheqel-sign:before,.fa-sheqel:before {
    content: "\f20b"
}

.fa-map:before {
    content: "\f279"
}

.fa-rocket:before {
    content: "\f135"
}

.fa-photo-film:before,.fa-photo-video:before {
    content: "\f87c"
}

.fa-folder-minus:before {
    content: "\f65d"
}

.fa-store:before {
    content: "\f54e"
}

.fa-arrow-trend-up:before {
    content: "\e098"
}

.fa-plug-circle-minus:before {
    content: "\e55e"
}

.fa-sign-hanging:before,.fa-sign:before {
    content: "\f4d9"
}

.fa-bezier-curve:before {
    content: "\f55b"
}

.fa-bell-slash:before {
    content: "\f1f6"
}

.fa-tablet-android:before,.fa-tablet:before {
    content: "\f3fb"
}

.fa-school-flag:before {
    content: "\e56e"
}

.fa-fill:before {
    content: "\f575"
}

.fa-angle-up:before {
    content: "\f106"
}

.fa-drumstick-bite:before {
    content: "\f6d7"
}

.fa-holly-berry:before {
    content: "\f7aa"
}

.fa-chevron-left:before {
    content: "\f053"
}

.fa-bacteria:before {
    content: "\e059"
}

.fa-hand-lizard:before {
    content: "\f258"
}

.fa-notdef:before {
    content: "\e1fe"
}

.fa-disease:before {
    content: "\f7fa"
}

.fa-briefcase-medical:before {
    content: "\f469"
}

.fa-genderless:before {
    content: "\f22d"
}

.fa-chevron-right:before {
    content: "\f054"
}

.fa-retweet:before {
    content: "\f079"
}

.fa-car-alt:before,.fa-car-rear:before {
    content: "\f5de"
}

.fa-pump-soap:before {
    content: "\e06b"
}

.fa-video-slash:before {
    content: "\f4e2"
}

.fa-battery-2:before,.fa-battery-quarter:before {
    content: "\f243"
}

.fa-radio:before {
    content: "\f8d7"
}

.fa-baby-carriage:before,.fa-carriage-baby:before {
    content: "\f77d"
}

.fa-traffic-light:before {
    content: "\f637"
}

.fa-thermometer:before {
    content: "\f491"
}

.fa-vr-cardboard:before {
    content: "\f729"
}

.fa-hand-middle-finger:before {
    content: "\f806"
}

.fa-percent:before,.fa-percentage:before {
    content: "\%"
}

.fa-truck-moving:before {
    content: "\f4df"
}

.fa-glass-water-droplet:before {
    content: "\e4f5"
}

.fa-display:before {
    content: "\e163"
}

.fa-face-smile:before,.fa-smile:before {
    content: "\f118"
}

.fa-thumb-tack:before,.fa-thumbtack:before {
    content: "\f08d"
}

.fa-trophy:before {
    content: "\f091"
}

.fa-person-praying:before,.fa-pray:before {
    content: "\f683"
}

.fa-hammer:before {
    content: "\f6e3"
}

.fa-hand-peace:before {
    content: "\f25b"
}

.fa-rotate:before,.fa-sync-alt:before {
    content: "\f2f1"
}

.fa-spinner:before {
    content: "\f110"
}

.fa-robot:before {
    content: "\f544"
}

.fa-peace:before {
    content: "\f67c"
}

.fa-cogs:before,.fa-gears:before {
    content: "\f085"
}

.fa-warehouse:before {
    content: "\f494"
}

.fa-arrow-up-right-dots:before {
    content: "\e4b7"
}

.fa-splotch:before {
    content: "\f5bc"
}

.fa-face-grin-hearts:before,.fa-grin-hearts:before {
    content: "\f584"
}

.fa-dice-four:before {
    content: "\f524"
}

.fa-sim-card:before {
    content: "\f7c4"
}

.fa-transgender-alt:before,.fa-transgender:before {
    content: "\f225"
}

.fa-mercury:before {
    content: "\f223"
}

.fa-arrow-turn-down:before,.fa-level-down:before {
    content: "\f149"
}

.fa-person-falling-burst:before {
    content: "\e547"
}

.fa-award:before {
    content: "\f559"
}

.fa-ticket-alt:before,.fa-ticket-simple:before {
    content: "\f3ff"
}

.fa-building:before {
    content: "\f1ad"
}

.fa-angle-double-left:before,.fa-angles-left:before {
    content: "\f100"
}

.fa-qrcode:before {
    content: "\f029"
}

.fa-clock-rotate-left:before,.fa-history:before {
    content: "\f1da"
}

.fa-face-grin-beam-sweat:before,.fa-grin-beam-sweat:before {
    content: "\f583"
}

.fa-arrow-right-from-file:before,.fa-file-export:before {
    content: "\f56e"
}

.fa-shield-blank:before,.fa-shield:before {
    content: "\f132"
}

.fa-arrow-up-short-wide:before,.fa-sort-amount-up-alt:before {
    content: "\f885"
}

.fa-house-medical:before {
    content: "\e3b2"
}

.fa-golf-ball-tee:before,.fa-golf-ball:before {
    content: "\f450"
}

.fa-chevron-circle-left:before,.fa-circle-chevron-left:before {
    content: "\f137"
}

.fa-house-chimney-window:before {
    content: "\e00d"
}

.fa-pen-nib:before {
    content: "\f5ad"
}

.fa-tent-arrow-turn-left:before {
    content: "\e580"
}

.fa-tents:before {
    content: "\e582"
}

.fa-magic:before,.fa-wand-magic:before {
    content: "\f0d0"
}

.fa-dog:before {
    content: "\f6d3"
}

.fa-carrot:before {
    content: "\f787"
}

.fa-moon:before {
    content: "\f186"
}

.fa-wine-glass-alt:before,.fa-wine-glass-empty:before {
    content: "\f5ce"
}

.fa-cheese:before {
    content: "\f7ef"
}

.fa-yin-yang:before {
    content: "\f6ad"
}

.fa-music:before {
    content: "\f001"
}

.fa-code-commit:before {
    content: "\f386"
}

.fa-temperature-low:before {
    content: "\f76b"
}

.fa-biking:before,.fa-person-biking:before {
    content: "\f84a"
}

.fa-broom:before {
    content: "\f51a"
}

.fa-shield-heart:before {
    content: "\e574"
}

.fa-gopuram:before {
    content: "\f664"
}

.fa-earth-oceania:before,.fa-globe-oceania:before {
    content: "\e47b"
}

.fa-square-xmark:before,.fa-times-square:before,.fa-xmark-square:before {
    content: "\f2d3"
}

.fa-hashtag:before {
    content: "\#"
}

.fa-expand-alt:before,.fa-up-right-and-down-left-from-center:before {
    content: "\f424"
}

.fa-oil-can:before {
    content: "\f613"
}

.fa-t:before {
    content: "T"
}

.fa-hippo:before {
    content: "\f6ed"
}

.fa-chart-column:before {
    content: "\e0e3"
}

.fa-infinity:before {
    content: "\f534"
}

.fa-vial-circle-check:before {
    content: "\e596"
}

.fa-person-arrow-down-to-line:before {
    content: "\e538"
}

.fa-voicemail:before {
    content: "\f897"
}

.fa-fan:before {
    content: "\f863"
}

.fa-person-walking-luggage:before {
    content: "\e554"
}

.fa-arrows-alt-v:before,.fa-up-down:before {
    content: "\f338"
}

.fa-cloud-moon-rain:before {
    content: "\f73c"
}

.fa-calendar:before {
    content: "\f133"
}

.fa-trailer:before {
    content: "\e041"
}

.fa-bahai:before,.fa-haykal:before {
    content: "\f666"
}

.fa-sd-card:before {
    content: "\f7c2"
}

.fa-dragon:before {
    content: "\f6d5"
}

.fa-shoe-prints:before {
    content: "\f54b"
}

.fa-circle-plus:before,.fa-plus-circle:before {
    content: "\f055"
}

.fa-face-grin-tongue-wink:before,.fa-grin-tongue-wink:before {
    content: "\f58b"
}

.fa-hand-holding:before {
    content: "\f4bd"
}

.fa-plug-circle-exclamation:before {
    content: "\e55d"
}

.fa-chain-broken:before,.fa-chain-slash:before,.fa-link-slash:before,.fa-unlink:before {
    content: "\f127"
}

.fa-clone:before {
    content: "\f24d"
}

.fa-person-walking-arrow-loop-left:before {
    content: "\e551"
}

.fa-arrow-up-z-a:before,.fa-sort-alpha-up-alt:before {
    content: "\f882"
}

.fa-fire-alt:before,.fa-fire-flame-curved:before {
    content: "\f7e4"
}

.fa-tornado:before {
    content: "\f76f"
}

.fa-file-circle-plus:before {
    content: "\e494"
}

.fa-book-quran:before,.fa-quran:before {
    content: "\f687"
}

.fa-anchor:before {
    content: "\f13d"
}

.fa-border-all:before {
    content: "\f84c"
}

.fa-angry:before,.fa-face-angry:before {
    content: "\f556"
}

.fa-cookie-bite:before {
    content: "\f564"
}

.fa-arrow-trend-down:before {
    content: "\e097"
}

.fa-feed:before,.fa-rss:before {
    content: "\f09e"
}

.fa-draw-polygon:before {
    content: "\f5ee"
}

.fa-balance-scale:before,.fa-scale-balanced:before {
    content: "\f24e"
}

.fa-gauge-simple-high:before,.fa-tachometer-fast:before,.fa-tachometer:before {
    content: "\f62a"
}

.fa-shower:before {
    content: "\f2cc"
}

.fa-desktop-alt:before,.fa-desktop:before {
    content: "\f390"
}

.fa-m:before {
    content: "M"
}

.fa-table-list:before,.fa-th-list:before {
    content: "\f00b"
}

.fa-comment-sms:before,.fa-sms:before {
    content: "\f7cd"
}

.fa-book:before {
    content: "\f02d"
}

.fa-user-plus:before {
    content: "\f234"
}

.fa-check:before {
    content: "\f00c"
}

.fa-battery-4:before,.fa-battery-three-quarters:before {
    content: "\f241"
}

.fa-house-circle-check:before {
    content: "\e509"
}

.fa-angle-left:before {
    content: "\f104"
}

.fa-diagram-successor:before {
    content: "\e47a"
}

.fa-truck-arrow-right:before {
    content: "\e58b"
}

.fa-arrows-split-up-and-left:before {
    content: "\e4bc"
}

.fa-fist-raised:before,.fa-hand-fist:before {
    content: "\f6de"
}

.fa-cloud-moon:before {
    content: "\f6c3"
}

.fa-briefcase:before {
    content: "\f0b1"
}

.fa-person-falling:before {
    content: "\e546"
}

.fa-image-portrait:before,.fa-portrait:before {
    content: "\f3e0"
}

.fa-user-tag:before {
    content: "\f507"
}

.fa-rug:before {
    content: "\e569"
}

.fa-earth-europe:before,.fa-globe-europe:before {
    content: "\f7a2"
}

.fa-cart-flatbed-suitcase:before,.fa-luggage-cart:before {
    content: "\f59d"
}

.fa-rectangle-times:before,.fa-rectangle-xmark:before,.fa-times-rectangle:before,.fa-window-close:before {
    content: "\f410"
}

.fa-baht-sign:before {
    content: "\e0ac"
}

.fa-book-open:before {
    content: "\f518"
}

.fa-book-journal-whills:before,.fa-journal-whills:before {
    content: "\f66a"
}

.fa-handcuffs:before {
    content: "\e4f8"
}

.fa-exclamation-triangle:before,.fa-triangle-exclamation:before,.fa-warning:before {
    content: "\f071"
}

.fa-database:before {
    content: "\f1c0"
}

.fa-arrow-turn-right:before,.fa-mail-forward:before,.fa-share:before {
    content: "\f064"
}

.fa-bottle-droplet:before {
    content: "\e4c4"
}

.fa-mask-face:before {
    content: "\e1d7"
}

.fa-hill-rockslide:before {
    content: "\e508"
}

.fa-exchange-alt:before,.fa-right-left:before {
    content: "\f362"
}

.fa-paper-plane:before {
    content: "\f1d8"
}

.fa-road-circle-exclamation:before {
    content: "\e565"
}

.fa-dungeon:before {
    content: "\f6d9"
}

.fa-align-right:before {
    content: "\f038"
}

.fa-money-bill-1-wave:before,.fa-money-bill-wave-alt:before {
    content: "\f53b"
}

.fa-life-ring:before {
    content: "\f1cd"
}

.fa-hands:before,.fa-sign-language:before,.fa-signing:before {
    content: "\f2a7"
}

.fa-calendar-day:before {
    content: "\f783"
}

.fa-ladder-water:before,.fa-swimming-pool:before,.fa-water-ladder:before {
    content: "\f5c5"
}

.fa-arrows-up-down:before,.fa-arrows-v:before {
    content: "\f07d"
}

.fa-face-grimace:before,.fa-grimace:before {
    content: "\f57f"
}

.fa-wheelchair-alt:before,.fa-wheelchair-move:before {
    content: "\e2ce"
}

.fa-level-down-alt:before,.fa-turn-down:before {
    content: "\f3be"
}

.fa-person-walking-arrow-right:before {
    content: "\e552"
}

.fa-envelope-square:before,.fa-square-envelope:before {
    content: "\f199"
}

.fa-dice:before {
    content: "\f522"
}

.fa-bowling-ball:before {
    content: "\f436"
}

.fa-brain:before {
    content: "\f5dc"
}

.fa-band-aid:before,.fa-bandage:before {
    content: "\f462"
}

.fa-calendar-minus:before {
    content: "\f272"
}

.fa-circle-xmark:before,.fa-times-circle:before,.fa-xmark-circle:before {
    content: "\f057"
}

.fa-gifts:before {
    content: "\f79c"
}

.fa-hotel:before {
    content: "\f594"
}

.fa-earth-asia:before,.fa-globe-asia:before {
    content: "\f57e"
}

.fa-id-card-alt:before,.fa-id-card-clip:before {
    content: "\f47f"
}

.fa-magnifying-glass-plus:before,.fa-search-plus:before {
    content: "\f00e"
}

.fa-thumbs-up:before {
    content: "\f164"
}

.fa-user-clock:before {
    content: "\f4fd"
}

.fa-allergies:before,.fa-hand-dots:before {
    content: "\f461"
}

.fa-file-invoice:before {
    content: "\f570"
}

.fa-window-minimize:before {
    content: "\f2d1"
}

.fa-coffee:before,.fa-mug-saucer:before {
    content: "\f0f4"
}

.fa-brush:before {
    content: "\f55d"
}

.fa-mask:before {
    content: "\f6fa"
}

.fa-magnifying-glass-minus:before,.fa-search-minus:before {
    content: "\f010"
}

.fa-ruler-vertical:before {
    content: "\f548"
}

.fa-user-alt:before,.fa-user-large:before {
    content: "\f406"
}

.fa-train-tram:before {
    content: "\e5b4"
}

.fa-user-nurse:before {
    content: "\f82f"
}

.fa-syringe:before {
    content: "\f48e"
}

.fa-cloud-sun:before {
    content: "\f6c4"
}

.fa-stopwatch-20:before {
    content: "\e06f"
}

.fa-square-full:before {
    content: "\f45c"
}

.fa-magnet:before {
    content: "\f076"
}

.fa-jar:before {
    content: "\e516"
}

.fa-note-sticky:before,.fa-sticky-note:before {
    content: "\f249"
}

.fa-bug-slash:before {
    content: "\e490"
}

.fa-arrow-up-from-water-pump:before {
    content: "\e4b6"
}

.fa-bone:before {
    content: "\f5d7"
}

.fa-user-injured:before {
    content: "\f728"
}

.fa-face-sad-tear:before,.fa-sad-tear:before {
    content: "\f5b4"
}

.fa-plane:before {
    content: "\f072"
}

.fa-tent-arrows-down:before {
    content: "\e581"
}

.fa-exclamation:before {
    content: "\!"
}

.fa-arrows-spin:before {
    content: "\e4bb"
}

.fa-print:before {
    content: "\f02f"
}

.fa-try:before,.fa-turkish-lira-sign:before,.fa-turkish-lira:before {
    content: "\e2bb"
}

.fa-dollar-sign:before,.fa-dollar:before,.fa-usd:before {
    content: "\$"
}

.fa-x:before {
    content: "X"
}

.fa-magnifying-glass-dollar:before,.fa-search-dollar:before {
    content: "\f688"
}

.fa-users-cog:before,.fa-users-gear:before {
    content: "\f509"
}

.fa-person-military-pointing:before {
    content: "\e54a"
}

.fa-bank:before,.fa-building-columns:before,.fa-institution:before,.fa-museum:before,.fa-university:before {
    content: "\f19c"
}

.fa-umbrella:before {
    content: "\f0e9"
}

.fa-trowel:before {
    content: "\e589"
}

.fa-d:before {
    content: "D"
}

.fa-stapler:before {
    content: "\e5af"
}

.fa-masks-theater:before,.fa-theater-masks:before {
    content: "\f630"
}

.fa-kip-sign:before {
    content: "\e1c4"
}

.fa-hand-point-left:before {
    content: "\f0a5"
}

.fa-handshake-alt:before,.fa-handshake-simple:before {
    content: "\f4c6"
}

.fa-fighter-jet:before,.fa-jet-fighter:before {
    content: "\f0fb"
}

.fa-share-alt-square:before,.fa-square-share-nodes:before {
    content: "\f1e1"
}

.fa-barcode:before {
    content: "\f02a"
}

.fa-plus-minus:before {
    content: "\e43c"
}

.fa-video-camera:before,.fa-video:before {
    content: "\f03d"
}

.fa-graduation-cap:before,.fa-mortar-board:before {
    content: "\f19d"
}

.fa-hand-holding-medical:before {
    content: "\e05c"
}

.fa-person-circle-check:before {
    content: "\e53e"
}

.fa-level-up-alt:before,.fa-turn-up:before {
    content: "\f3bf"
}

.fa-sr-only,.fa-sr-only-focusable:not(:focus),.sr-only,.sr-only-focusable:not(:focus) {
    clip: rect(0,0,0,0);
    border-width: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px
}

/*!* Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
* Copyright 2022 Fonticons, Inc.*/
:host,:root {
    --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free"
}

@font-face {
    font-display: block;
    font-family: Font Awesome\ 6 Free;
    font-style: normal;
    font-weight: 400;
    src: url(/page/static/fonts/fa-regular-400.1f377217.woff2) format("woff2"),url(/page/static/fonts/fa-regular-400.3cd9fb8f.ttf) format("truetype")
}

.fa-regular,.far {
    font-weight: 400
}

/*!* Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
* Copyright 2022 Fonticons, Inc.*/
:host,:root {
    --fa-style-family-classic: "Font Awesome 6 Free";
    --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free"
}

@font-face {
    font-display: block;
    font-family: Font Awesome\ 6 Free;
    font-style: normal;
    font-weight: 900;
    src: url(/page/static/fonts/fa-solid-900.41c0f706.woff2) format("woff2"),url(/page/static/fonts/fa-solid-900.b1a653db.ttf) format("truetype")
}

.fa-solid,.fas {
    font-weight: 900
}

/*!* Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
* Copyright 2022 Fonticons, Inc.*/
:host,:root {
    --fa-style-family-brands: "Font Awesome 6 Brands";
    --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands"
}

@font-face {
    font-display: block;
    font-family: Font Awesome\ 6 Brands;
    font-style: normal;
    font-weight: 400;
    src: url(/page/static/fonts/fa-brands-400.3ac6859b.woff2) format("woff2"),url(/page/static/fonts/fa-brands-400.450a5c89.ttf) format("truetype")
}

.fa-brands,.fab {
    font-weight: 400
}

.fa-monero:before {
    content: "\f3d0"
}

.fa-hooli:before {
    content: "\f427"
}

.fa-yelp:before {
    content: "\f1e9"
}

.fa-cc-visa:before {
    content: "\f1f0"
}

.fa-lastfm:before {
    content: "\f202"
}

.fa-shopware:before {
    content: "\f5b5"
}

.fa-creative-commons-nc:before {
    content: "\f4e8"
}

.fa-aws:before {
    content: "\f375"
}

.fa-redhat:before {
    content: "\f7bc"
}

.fa-yoast:before {
    content: "\f2b1"
}

.fa-cloudflare:before {
    content: "\e07d"
}

.fa-ups:before {
    content: "\f7e0"
}

.fa-wpexplorer:before {
    content: "\f2de"
}

.fa-dyalog:before {
    content: "\f399"
}

.fa-bity:before {
    content: "\f37a"
}

.fa-stackpath:before {
    content: "\f842"
}

.fa-buysellads:before {
    content: "\f20d"
}

.fa-first-order:before {
    content: "\f2b0"
}

.fa-modx:before {
    content: "\f285"
}

.fa-guilded:before {
    content: "\e07e"
}

.fa-vnv:before {
    content: "\f40b"
}

.fa-js-square:before,.fa-square-js:before {
    content: "\f3b9"
}

.fa-microsoft:before {
    content: "\f3ca"
}

.fa-qq:before {
    content: "\f1d6"
}

.fa-orcid:before {
    content: "\f8d2"
}

.fa-java:before {
    content: "\f4e4"
}

.fa-invision:before {
    content: "\f7b0"
}

.fa-creative-commons-pd-alt:before {
    content: "\f4ed"
}

.fa-centercode:before {
    content: "\f380"
}

.fa-glide-g:before {
    content: "\f2a6"
}

.fa-drupal:before {
    content: "\f1a9"
}

.fa-hire-a-helper:before {
    content: "\f3b0"
}

.fa-creative-commons-by:before {
    content: "\f4e7"
}

.fa-unity:before {
    content: "\e049"
}

.fa-whmcs:before {
    content: "\f40d"
}

.fa-rocketchat:before {
    content: "\f3e8"
}

.fa-vk:before {
    content: "\f189"
}

.fa-untappd:before {
    content: "\f405"
}

.fa-mailchimp:before {
    content: "\f59e"
}

.fa-css3-alt:before {
    content: "\f38b"
}

.fa-reddit-square:before,.fa-square-reddit:before {
    content: "\f1a2"
}

.fa-vimeo-v:before {
    content: "\f27d"
}

.fa-contao:before {
    content: "\f26d"
}

.fa-square-font-awesome:before {
    content: "\e5ad"
}

.fa-deskpro:before {
    content: "\f38f"
}

.fa-sistrix:before {
    content: "\f3ee"
}

.fa-instagram-square:before,.fa-square-instagram:before {
    content: "\e055"
}

.fa-battle-net:before {
    content: "\f835"
}

.fa-the-red-yeti:before {
    content: "\f69d"
}

.fa-hacker-news-square:before,.fa-square-hacker-news:before {
    content: "\f3af"
}

.fa-edge:before {
    content: "\f282"
}

.fa-napster:before {
    content: "\f3d2"
}

.fa-snapchat-square:before,.fa-square-snapchat:before {
    content: "\f2ad"
}

.fa-google-plus-g:before {
    content: "\f0d5"
}

.fa-artstation:before {
    content: "\f77a"
}

.fa-markdown:before {
    content: "\f60f"
}

.fa-sourcetree:before {
    content: "\f7d3"
}

.fa-google-plus:before {
    content: "\f2b3"
}

.fa-diaspora:before {
    content: "\f791"
}

.fa-foursquare:before {
    content: "\f180"
}

.fa-stack-overflow:before {
    content: "\f16c"
}

.fa-github-alt:before {
    content: "\f113"
}

.fa-phoenix-squadron:before {
    content: "\f511"
}

.fa-pagelines:before {
    content: "\f18c"
}

.fa-algolia:before {
    content: "\f36c"
}

.fa-red-river:before {
    content: "\f3e3"
}

.fa-creative-commons-sa:before {
    content: "\f4ef"
}

.fa-safari:before {
    content: "\f267"
}

.fa-google:before {
    content: "\f1a0"
}

.fa-font-awesome-alt:before,.fa-square-font-awesome-stroke:before {
    content: "\f35c"
}

.fa-atlassian:before {
    content: "\f77b"
}

.fa-linkedin-in:before {
    content: "\f0e1"
}

.fa-digital-ocean:before {
    content: "\f391"
}

.fa-nimblr:before {
    content: "\f5a8"
}

.fa-chromecast:before {
    content: "\f838"
}

.fa-evernote:before {
    content: "\f839"
}

.fa-hacker-news:before {
    content: "\f1d4"
}

.fa-creative-commons-sampling:before {
    content: "\f4f0"
}

.fa-adversal:before {
    content: "\f36a"
}

.fa-creative-commons:before {
    content: "\f25e"
}

.fa-watchman-monitoring:before {
    content: "\e087"
}

.fa-fonticons:before {
    content: "\f280"
}

.fa-weixin:before {
    content: "\f1d7"
}

.fa-shirtsinbulk:before {
    content: "\f214"
}

.fa-codepen:before {
    content: "\f1cb"
}

.fa-git-alt:before {
    content: "\f841"
}

.fa-lyft:before {
    content: "\f3c3"
}

.fa-rev:before {
    content: "\f5b2"
}

.fa-windows:before {
    content: "\f17a"
}

.fa-wizards-of-the-coast:before {
    content: "\f730"
}

.fa-square-viadeo:before,.fa-viadeo-square:before {
    content: "\f2aa"
}

.fa-meetup:before {
    content: "\f2e0"
}

.fa-centos:before {
    content: "\f789"
}

.fa-adn:before {
    content: "\f170"
}

.fa-cloudsmith:before {
    content: "\f384"
}

.fa-pied-piper-alt:before {
    content: "\f1a8"
}

.fa-dribbble-square:before,.fa-square-dribbble:before {
    content: "\f397"
}

.fa-codiepie:before {
    content: "\f284"
}

.fa-node:before {
    content: "\f419"
}

.fa-mix:before {
    content: "\f3cb"
}

.fa-steam:before {
    content: "\f1b6"
}

.fa-cc-apple-pay:before {
    content: "\f416"
}

.fa-scribd:before {
    content: "\f28a"
}

.fa-openid:before {
    content: "\f19b"
}

.fa-instalod:before {
    content: "\e081"
}

.fa-expeditedssl:before {
    content: "\f23e"
}

.fa-sellcast:before {
    content: "\f2da"
}

.fa-square-twitter:before,.fa-twitter-square:before {
    content: "\f081"
}

.fa-r-project:before {
    content: "\f4f7"
}

.fa-delicious:before {
    content: "\f1a5"
}

.fa-freebsd:before {
    content: "\f3a4"
}

.fa-vuejs:before {
    content: "\f41f"
}

.fa-accusoft:before {
    content: "\f369"
}

.fa-ioxhost:before {
    content: "\f208"
}

.fa-fonticons-fi:before {
    content: "\f3a2"
}

.fa-app-store:before {
    content: "\f36f"
}

.fa-cc-mastercard:before {
    content: "\f1f1"
}

.fa-itunes-note:before {
    content: "\f3b5"
}

.fa-golang:before {
    content: "\e40f"
}

.fa-kickstarter:before {
    content: "\f3bb"
}

.fa-grav:before {
    content: "\f2d6"
}

.fa-weibo:before {
    content: "\f18a"
}

.fa-uncharted:before {
    content: "\e084"
}

.fa-firstdraft:before {
    content: "\f3a1"
}

.fa-square-youtube:before,.fa-youtube-square:before {
    content: "\f431"
}

.fa-wikipedia-w:before {
    content: "\f266"
}

.fa-rendact:before,.fa-wpressr:before {
    content: "\f3e4"
}

.fa-angellist:before {
    content: "\f209"
}

.fa-galactic-republic:before {
    content: "\f50c"
}

.fa-nfc-directional:before {
    content: "\e530"
}

.fa-skype:before {
    content: "\f17e"
}

.fa-joget:before {
    content: "\f3b7"
}

.fa-fedora:before {
    content: "\f798"
}

.fa-stripe-s:before {
    content: "\f42a"
}

.fa-meta:before {
    content: "\e49b"
}

.fa-laravel:before {
    content: "\f3bd"
}

.fa-hotjar:before {
    content: "\f3b1"
}

.fa-bluetooth-b:before {
    content: "\f294"
}

.fa-sticker-mule:before {
    content: "\f3f7"
}

.fa-creative-commons-zero:before {
    content: "\f4f3"
}

.fa-hips:before {
    content: "\f452"
}

.fa-behance:before {
    content: "\f1b4"
}

.fa-reddit:before {
    content: "\f1a1"
}

.fa-discord:before {
    content: "\f392"
}

.fa-chrome:before {
    content: "\f268"
}

.fa-app-store-ios:before {
    content: "\f370"
}

.fa-cc-discover:before {
    content: "\f1f2"
}

.fa-wpbeginner:before {
    content: "\f297"
}

.fa-confluence:before {
    content: "\f78d"
}

.fa-mdb:before {
    content: "\f8ca"
}

.fa-dochub:before {
    content: "\f394"
}

.fa-accessible-icon:before {
    content: "\f368"
}

.fa-ebay:before {
    content: "\f4f4"
}

.fa-amazon:before {
    content: "\f270"
}

.fa-unsplash:before {
    content: "\e07c"
}

.fa-yarn:before {
    content: "\f7e3"
}

.fa-square-steam:before,.fa-steam-square:before {
    content: "\f1b7"
}

.fa-500px:before {
    content: "\f26e"
}

.fa-square-vimeo:before,.fa-vimeo-square:before {
    content: "\f194"
}

.fa-asymmetrik:before {
    content: "\f372"
}

.fa-font-awesome-flag:before,.fa-font-awesome-logo-full:before,.fa-font-awesome:before {
    content: "\f2b4"
}

.fa-gratipay:before {
    content: "\f184"
}

.fa-apple:before {
    content: "\f179"
}

.fa-hive:before {
    content: "\e07f"
}

.fa-gitkraken:before {
    content: "\f3a6"
}

.fa-keybase:before {
    content: "\f4f5"
}

.fa-apple-pay:before {
    content: "\f415"
}

.fa-padlet:before {
    content: "\e4a0"
}

.fa-amazon-pay:before {
    content: "\f42c"
}

.fa-github-square:before,.fa-square-github:before {
    content: "\f092"
}

.fa-stumbleupon:before {
    content: "\f1a4"
}

.fa-fedex:before {
    content: "\f797"
}

.fa-phoenix-framework:before {
    content: "\f3dc"
}

.fa-shopify:before {
    content: "\e057"
}

.fa-neos:before {
    content: "\f612"
}

.fa-hackerrank:before {
    content: "\f5f7"
}

.fa-researchgate:before {
    content: "\f4f8"
}

.fa-swift:before {
    content: "\f8e1"
}

.fa-angular:before {
    content: "\f420"
}

.fa-speakap:before {
    content: "\f3f3"
}

.fa-angrycreative:before {
    content: "\f36e"
}

.fa-y-combinator:before {
    content: "\f23b"
}

.fa-empire:before {
    content: "\f1d1"
}

.fa-envira:before {
    content: "\f299"
}

.fa-gitlab-square:before,.fa-square-gitlab:before {
    content: "\e5ae"
}

.fa-studiovinari:before {
    content: "\f3f8"
}

.fa-pied-piper:before {
    content: "\f2ae"
}

.fa-wordpress:before {
    content: "\f19a"
}

.fa-product-hunt:before {
    content: "\f288"
}

.fa-firefox:before {
    content: "\f269"
}

.fa-linode:before {
    content: "\f2b8"
}

.fa-goodreads:before {
    content: "\f3a8"
}

.fa-odnoklassniki-square:before,.fa-square-odnoklassniki:before {
    content: "\f264"
}

.fa-jsfiddle:before {
    content: "\f1cc"
}

.fa-sith:before {
    content: "\f512"
}

.fa-themeisle:before {
    content: "\f2b2"
}

.fa-page4:before {
    content: "\f3d7"
}

.fa-hashnode:before {
    content: "\e499"
}

.fa-react:before {
    content: "\f41b"
}

.fa-cc-paypal:before {
    content: "\f1f4"
}

.fa-squarespace:before {
    content: "\f5be"
}

.fa-cc-stripe:before {
    content: "\f1f5"
}

.fa-creative-commons-share:before {
    content: "\f4f2"
}

.fa-bitcoin:before {
    content: "\f379"
}

.fa-keycdn:before {
    content: "\f3ba"
}

.fa-opera:before {
    content: "\f26a"
}

.fa-itch-io:before {
    content: "\f83a"
}

.fa-umbraco:before {
    content: "\f8e8"
}

.fa-galactic-senate:before {
    content: "\f50d"
}

.fa-ubuntu:before {
    content: "\f7df"
}

.fa-draft2digital:before {
    content: "\f396"
}

.fa-stripe:before {
    content: "\f429"
}

.fa-houzz:before {
    content: "\f27c"
}

.fa-gg:before {
    content: "\f260"
}

.fa-dhl:before {
    content: "\f790"
}

.fa-pinterest-square:before,.fa-square-pinterest:before {
    content: "\f0d3"
}

.fa-xing:before {
    content: "\f168"
}

.fa-blackberry:before {
    content: "\f37b"
}

.fa-creative-commons-pd:before {
    content: "\f4ec"
}

.fa-playstation:before {
    content: "\f3df"
}

.fa-quinscape:before {
    content: "\f459"
}

.fa-less:before {
    content: "\f41d"
}

.fa-blogger-b:before {
    content: "\f37d"
}

.fa-opencart:before {
    content: "\f23d"
}

.fa-vine:before {
    content: "\f1ca"
}

.fa-paypal:before {
    content: "\f1ed"
}

.fa-gitlab:before {
    content: "\f296"
}

.fa-typo3:before {
    content: "\f42b"
}

.fa-reddit-alien:before {
    content: "\f281"
}

.fa-yahoo:before {
    content: "\f19e"
}

.fa-dailymotion:before {
    content: "\e052"
}

.fa-affiliatetheme:before {
    content: "\f36b"
}

.fa-pied-piper-pp:before {
    content: "\f1a7"
}

.fa-bootstrap:before {
    content: "\f836"
}

.fa-odnoklassniki:before {
    content: "\f263"
}

.fa-nfc-symbol:before {
    content: "\e531"
}

.fa-ethereum:before {
    content: "\f42e"
}

.fa-speaker-deck:before {
    content: "\f83c"
}

.fa-creative-commons-nc-eu:before {
    content: "\f4e9"
}

.fa-patreon:before {
    content: "\f3d9"
}

.fa-avianex:before {
    content: "\f374"
}

.fa-ello:before {
    content: "\f5f1"
}

.fa-gofore:before {
    content: "\f3a7"
}

.fa-bimobject:before {
    content: "\f378"
}

.fa-facebook-f:before {
    content: "\f39e"
}

.fa-google-plus-square:before,.fa-square-google-plus:before {
    content: "\f0d4"
}

.fa-mandalorian:before {
    content: "\f50f"
}

.fa-first-order-alt:before {
    content: "\f50a"
}

.fa-osi:before {
    content: "\f41a"
}

.fa-google-wallet:before {
    content: "\f1ee"
}

.fa-d-and-d-beyond:before {
    content: "\f6ca"
}

.fa-periscope:before {
    content: "\f3da"
}

.fa-fulcrum:before {
    content: "\f50b"
}

.fa-cloudscale:before {
    content: "\f383"
}

.fa-forumbee:before {
    content: "\f211"
}

.fa-mizuni:before {
    content: "\f3cc"
}

.fa-schlix:before {
    content: "\f3ea"
}

.fa-square-xing:before,.fa-xing-square:before {
    content: "\f169"
}

.fa-bandcamp:before {
    content: "\f2d5"
}

.fa-wpforms:before {
    content: "\f298"
}

.fa-cloudversify:before {
    content: "\f385"
}

.fa-usps:before {
    content: "\f7e1"
}

.fa-megaport:before {
    content: "\f5a3"
}

.fa-magento:before {
    content: "\f3c4"
}

.fa-spotify:before {
    content: "\f1bc"
}

.fa-optin-monster:before {
    content: "\f23c"
}

.fa-fly:before {
    content: "\f417"
}

.fa-aviato:before {
    content: "\f421"
}

.fa-itunes:before {
    content: "\f3b4"
}

.fa-cuttlefish:before {
    content: "\f38c"
}

.fa-blogger:before {
    content: "\f37c"
}

.fa-flickr:before {
    content: "\f16e"
}

.fa-viber:before {
    content: "\f409"
}

.fa-soundcloud:before {
    content: "\f1be"
}

.fa-digg:before {
    content: "\f1a6"
}

.fa-tencent-weibo:before {
    content: "\f1d5"
}

.fa-symfony:before {
    content: "\f83d"
}

.fa-maxcdn:before {
    content: "\f136"
}

.fa-etsy:before {
    content: "\f2d7"
}

.fa-facebook-messenger:before {
    content: "\f39f"
}

.fa-audible:before {
    content: "\f373"
}

.fa-think-peaks:before {
    content: "\f731"
}

.fa-bilibili:before {
    content: "\e3d9"
}

.fa-erlang:before {
    content: "\f39d"
}

.fa-cotton-bureau:before {
    content: "\f89e"
}

.fa-dashcube:before {
    content: "\f210"
}

.fa-42-group:before,.fa-innosoft:before {
    content: "\e080"
}

.fa-stack-exchange:before {
    content: "\f18d"
}

.fa-elementor:before {
    content: "\f430"
}

.fa-pied-piper-square:before,.fa-square-pied-piper:before {
    content: "\e01e"
}

.fa-creative-commons-nd:before {
    content: "\f4eb"
}

.fa-palfed:before {
    content: "\f3d8"
}

.fa-superpowers:before {
    content: "\f2dd"
}

.fa-resolving:before {
    content: "\f3e7"
}

.fa-xbox:before {
    content: "\f412"
}

.fa-searchengin:before {
    content: "\f3eb"
}

.fa-tiktok:before {
    content: "\e07b"
}

.fa-facebook-square:before,.fa-square-facebook:before {
    content: "\f082"
}

.fa-renren:before {
    content: "\f18b"
}

.fa-linux:before {
    content: "\f17c"
}

.fa-glide:before {
    content: "\f2a5"
}

.fa-linkedin:before {
    content: "\f08c"
}

.fa-hubspot:before {
    content: "\f3b2"
}

.fa-deploydog:before {
    content: "\f38e"
}

.fa-twitch:before {
    content: "\f1e8"
}

.fa-ravelry:before {
    content: "\f2d9"
}

.fa-mixer:before {
    content: "\e056"
}

.fa-lastfm-square:before,.fa-square-lastfm:before {
    content: "\f203"
}

.fa-vimeo:before {
    content: "\f40a"
}

.fa-mendeley:before {
    content: "\f7b3"
}

.fa-uniregistry:before {
    content: "\f404"
}

.fa-figma:before {
    content: "\f799"
}

.fa-creative-commons-remix:before {
    content: "\f4ee"
}

.fa-cc-amazon-pay:before {
    content: "\f42d"
}

.fa-dropbox:before {
    content: "\f16b"
}

.fa-instagram:before {
    content: "\f16d"
}

.fa-cmplid:before {
    content: "\e360"
}

.fa-facebook:before {
    content: "\f09a"
}

.fa-gripfire:before {
    content: "\f3ac"
}

.fa-jedi-order:before {
    content: "\f50e"
}

.fa-uikit:before {
    content: "\f403"
}

.fa-fort-awesome-alt:before {
    content: "\f3a3"
}

.fa-phabricator:before {
    content: "\f3db"
}

.fa-ussunnah:before {
    content: "\f407"
}

.fa-earlybirds:before {
    content: "\f39a"
}

.fa-trade-federation:before {
    content: "\f513"
}

.fa-autoprefixer:before {
    content: "\f41c"
}

.fa-whatsapp:before {
    content: "\f232"
}

.fa-slideshare:before {
    content: "\f1e7"
}

.fa-google-play:before {
    content: "\f3ab"
}

.fa-viadeo:before {
    content: "\f2a9"
}

.fa-line:before {
    content: "\f3c0"
}

.fa-google-drive:before {
    content: "\f3aa"
}

.fa-servicestack:before {
    content: "\f3ec"
}

.fa-simplybuilt:before {
    content: "\f215"
}

.fa-bitbucket:before {
    content: "\f171"
}

.fa-imdb:before {
    content: "\f2d8"
}

.fa-deezer:before {
    content: "\e077"
}

.fa-raspberry-pi:before {
    content: "\f7bb"
}

.fa-jira:before {
    content: "\f7b1"
}

.fa-docker:before {
    content: "\f395"
}

.fa-screenpal:before {
    content: "\e570"
}

.fa-bluetooth:before {
    content: "\f293"
}

.fa-gitter:before {
    content: "\f426"
}

.fa-d-and-d:before {
    content: "\f38d"
}

.fa-microblog:before {
    content: "\e01a"
}

.fa-cc-diners-club:before {
    content: "\f24c"
}

.fa-gg-circle:before {
    content: "\f261"
}

.fa-pied-piper-hat:before {
    content: "\f4e5"
}

.fa-kickstarter-k:before {
    content: "\f3bc"
}

.fa-yandex:before {
    content: "\f413"
}

.fa-readme:before {
    content: "\f4d5"
}

.fa-html5:before {
    content: "\f13b"
}

.fa-sellsy:before {
    content: "\f213"
}

.fa-sass:before {
    content: "\f41e"
}

.fa-wirsindhandwerk:before,.fa-wsh:before {
    content: "\e2d0"
}

.fa-buromobelexperte:before {
    content: "\f37f"
}

.fa-salesforce:before {
    content: "\f83b"
}

.fa-octopus-deploy:before {
    content: "\e082"
}

.fa-medapps:before {
    content: "\f3c6"
}

.fa-ns8:before {
    content: "\f3d5"
}

.fa-pinterest-p:before {
    content: "\f231"
}

.fa-apper:before {
    content: "\f371"
}

.fa-fort-awesome:before {
    content: "\f286"
}

.fa-waze:before {
    content: "\f83f"
}

.fa-cc-jcb:before {
    content: "\f24b"
}

.fa-snapchat-ghost:before,.fa-snapchat:before {
    content: "\f2ab"
}

.fa-fantasy-flight-games:before {
    content: "\f6dc"
}

.fa-rust:before {
    content: "\e07a"
}

.fa-wix:before {
    content: "\f5cf"
}

.fa-behance-square:before,.fa-square-behance:before {
    content: "\f1b5"
}

.fa-supple:before {
    content: "\f3f9"
}

.fa-rebel:before {
    content: "\f1d0"
}

.fa-css3:before {
    content: "\f13c"
}

.fa-staylinked:before {
    content: "\f3f5"
}

.fa-kaggle:before {
    content: "\f5fa"
}

.fa-space-awesome:before {
    content: "\e5ac"
}

.fa-deviantart:before {
    content: "\f1bd"
}

.fa-cpanel:before {
    content: "\f388"
}

.fa-goodreads-g:before {
    content: "\f3a9"
}

.fa-git-square:before,.fa-square-git:before {
    content: "\f1d2"
}

.fa-square-tumblr:before,.fa-tumblr-square:before {
    content: "\f174"
}

.fa-trello:before {
    content: "\f181"
}

.fa-creative-commons-nc-jp:before {
    content: "\f4ea"
}

.fa-get-pocket:before {
    content: "\f265"
}

.fa-perbyte:before {
    content: "\e083"
}

.fa-grunt:before {
    content: "\f3ad"
}

.fa-weebly:before {
    content: "\f5cc"
}

.fa-connectdevelop:before {
    content: "\f20e"
}

.fa-leanpub:before {
    content: "\f212"
}

.fa-black-tie:before {
    content: "\f27e"
}

.fa-themeco:before {
    content: "\f5c6"
}

.fa-python:before {
    content: "\f3e2"
}

.fa-android:before {
    content: "\f17b"
}

.fa-bots:before {
    content: "\e340"
}

.fa-free-code-camp:before {
    content: "\f2c5"
}

.fa-hornbill:before {
    content: "\f592"
}

.fa-js:before {
    content: "\f3b8"
}

.fa-ideal:before {
    content: "\e013"
}

.fa-git:before {
    content: "\f1d3"
}

.fa-dev:before {
    content: "\f6cc"
}

.fa-sketch:before {
    content: "\f7c6"
}

.fa-yandex-international:before {
    content: "\f414"
}

.fa-cc-amex:before {
    content: "\f1f3"
}

.fa-uber:before {
    content: "\f402"
}

.fa-github:before {
    content: "\f09b"
}

.fa-php:before {
    content: "\f457"
}

.fa-alipay:before {
    content: "\f642"
}

.fa-youtube:before {
    content: "\f167"
}

.fa-skyatlas:before {
    content: "\f216"
}

.fa-firefox-browser:before {
    content: "\e007"
}

.fa-replyd:before {
    content: "\f3e6"
}

.fa-suse:before {
    content: "\f7d6"
}

.fa-jenkins:before {
    content: "\f3b6"
}

.fa-twitter:before {
    content: "\f099"
}

.fa-rockrms:before {
    content: "\f3e9"
}

.fa-pinterest:before {
    content: "\f0d2"
}

.fa-buffer:before {
    content: "\f837"
}

.fa-npm:before {
    content: "\f3d4"
}

.fa-yammer:before {
    content: "\f840"
}

.fa-btc:before {
    content: "\f15a"
}

.fa-dribbble:before {
    content: "\f17d"
}

.fa-stumbleupon-circle:before {
    content: "\f1a3"
}

.fa-internet-explorer:before {
    content: "\f26b"
}

.fa-telegram-plane:before,.fa-telegram:before {
    content: "\f2c6"
}

.fa-old-republic:before {
    content: "\f510"
}

.fa-square-whatsapp:before,.fa-whatsapp-square:before {
    content: "\f40c"
}

.fa-node-js:before {
    content: "\f3d3"
}

.fa-edge-legacy:before {
    content: "\e078"
}

.fa-slack-hash:before,.fa-slack:before {
    content: "\f198"
}

.fa-medrt:before {
    content: "\f3c8"
}

.fa-usb:before {
    content: "\f287"
}

.fa-tumblr:before {
    content: "\f173"
}

.fa-vaadin:before {
    content: "\f408"
}

.fa-quora:before {
    content: "\f2c4"
}

.fa-reacteurope:before {
    content: "\f75d"
}

.fa-medium-m:before,.fa-medium:before {
    content: "\f23a"
}

.fa-amilia:before {
    content: "\f36d"
}

.fa-mixcloud:before {
    content: "\f289"
}

.fa-flipboard:before {
    content: "\f44d"
}

.fa-viacoin:before {
    content: "\f237"
}

.fa-critical-role:before {
    content: "\f6c9"
}

.fa-sitrox:before {
    content: "\e44a"
}

.fa-discourse:before {
    content: "\f393"
}

.fa-joomla:before {
    content: "\f1aa"
}

.fa-mastodon:before {
    content: "\f4f6"
}

.fa-airbnb:before {
    content: "\f834"
}

.fa-wolf-pack-battalion:before {
    content: "\f514"
}

.fa-buy-n-large:before {
    content: "\f8a6"
}

.fa-gulp:before {
    content: "\f3ae"
}

.fa-creative-commons-sampling-plus:before {
    content: "\f4f1"
}

.fa-strava:before {
    content: "\f428"
}

.fa-ember:before {
    content: "\f423"
}

.fa-canadian-maple-leaf:before {
    content: "\f785"
}

.fa-teamspeak:before {
    content: "\f4f9"
}

.fa-pushed:before {
    content: "\f3e1"
}

.fa-wordpress-simple:before {
    content: "\f411"
}

.fa-nutritionix:before {
    content: "\f3d6"
}

.fa-wodu:before {
    content: "\e088"
}

.fa-google-pay:before {
    content: "\e079"
}

.fa-intercom:before {
    content: "\f7af"
}

.fa-zhihu:before {
    content: "\f63f"
}

.fa-korvue:before {
    content: "\f42f"
}

.fa-pix:before {
    content: "\e43a"
}

.fa-steam-symbol:before {
    content: "\f3f6"
}

/*!* Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
* Copyright 2022 Fonticons, Inc.*/
.fa.fa-glass:before {
    content: "\f000"
}

.fa.fa-envelope-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-envelope-o:before {
    content: "\f0e0"
}

.fa.fa-star-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-star-o:before {
    content: "\f005"
}

.fa.fa-close:before,.fa.fa-remove:before {
    content: "\f00d"
}

.fa.fa-gear:before {
    content: "\f013"
}

.fa.fa-trash-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-trash-o:before {
    content: "\f2ed"
}

.fa.fa-home:before {
    content: "\f015"
}

.fa.fa-file-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-file-o:before {
    content: "\f15b"
}

.fa.fa-clock-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-clock-o:before {
    content: "\f017"
}

.fa.fa-arrow-circle-o-down {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-arrow-circle-o-down:before {
    content: "\f358"
}

.fa.fa-arrow-circle-o-up {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-arrow-circle-o-up:before {
    content: "\f35b"
}

.fa.fa-play-circle-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-play-circle-o:before {
    content: "\f144"
}

.fa.fa-repeat:before,.fa.fa-rotate-right:before {
    content: "\f01e"
}

.fa.fa-refresh:before {
    content: "\f021"
}

.fa.fa-list-alt {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-list-alt:before {
    content: "\f022"
}

.fa.fa-dedent:before {
    content: "\f03b"
}

.fa.fa-video-camera:before {
    content: "\f03d"
}

.fa.fa-picture-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-picture-o:before {
    content: "\f03e"
}

.fa.fa-photo {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-photo:before {
    content: "\f03e"
}

.fa.fa-image {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-image:before {
    content: "\f03e"
}

.fa.fa-map-marker:before {
    content: "\f3c5"
}

.fa.fa-pencil-square-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-pencil-square-o:before {
    content: "\f044"
}

.fa.fa-edit {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-edit:before {
    content: "\f044"
}

.fa.fa-share-square-o:before {
    content: "\f14d"
}

.fa.fa-check-square-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-check-square-o:before {
    content: "\f14a"
}

.fa.fa-arrows:before {
    content: "\f0b2"
}

.fa.fa-times-circle-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-times-circle-o:before {
    content: "\f057"
}

.fa.fa-check-circle-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-check-circle-o:before {
    content: "\f058"
}

.fa.fa-mail-forward:before {
    content: "\f064"
}

.fa.fa-expand:before {
    content: "\f424"
}

.fa.fa-compress:before {
    content: "\f422"
}

.fa.fa-eye,.fa.fa-eye-slash {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-warning:before {
    content: "\f071"
}

.fa.fa-calendar:before {
    content: "\f073"
}

.fa.fa-arrows-v:before {
    content: "\f338"
}

.fa.fa-arrows-h:before {
    content: "\f337"
}

.fa.fa-bar-chart-o:before,.fa.fa-bar-chart:before {
    content: "\e0e3"
}

.fa.fa-twitter-square {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-twitter-square:before {
    content: "\f081"
}

.fa.fa-facebook-square {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-facebook-square:before {
    content: "\f082"
}

.fa.fa-gears:before {
    content: "\f085"
}

.fa.fa-thumbs-o-up {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-thumbs-o-up:before {
    content: "\f164"
}

.fa.fa-thumbs-o-down {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-thumbs-o-down:before {
    content: "\f165"
}

.fa.fa-heart-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-heart-o:before {
    content: "\f004"
}

.fa.fa-sign-out:before {
    content: "\f2f5"
}

.fa.fa-linkedin-square {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-linkedin-square:before {
    content: "\f08c"
}

.fa.fa-thumb-tack:before {
    content: "\f08d"
}

.fa.fa-external-link:before {
    content: "\f35d"
}

.fa.fa-sign-in:before {
    content: "\f2f6"
}

.fa.fa-github-square {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-github-square:before {
    content: "\f092"
}

.fa.fa-lemon-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-lemon-o:before {
    content: "\f094"
}

.fa.fa-square-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-square-o:before {
    content: "\f0c8"
}

.fa.fa-bookmark-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-bookmark-o:before {
    content: "\f02e"
}

.fa.fa-facebook,.fa.fa-twitter {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-facebook:before {
    content: "\f39e"
}

.fa.fa-facebook-f {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-facebook-f:before {
    content: "\f39e"
}

.fa.fa-github {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-credit-card {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-feed:before {
    content: "\f09e"
}

.fa.fa-hdd-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-hdd-o:before {
    content: "\f0a0"
}

.fa.fa-hand-o-right {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-hand-o-right:before {
    content: "\f0a4"
}

.fa.fa-hand-o-left {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-hand-o-left:before {
    content: "\f0a5"
}

.fa.fa-hand-o-up {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-hand-o-up:before {
    content: "\f0a6"
}

.fa.fa-hand-o-down {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-hand-o-down:before {
    content: "\f0a7"
}

.fa.fa-globe:before {
    content: "\f57d"
}

.fa.fa-tasks:before {
    content: "\f828"
}

.fa.fa-arrows-alt:before {
    content: "\f31e"
}

.fa.fa-group:before {
    content: "\f0c0"
}

.fa.fa-chain:before {
    content: "\f0c1"
}

.fa.fa-cut:before {
    content: "\f0c4"
}

.fa.fa-files-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-files-o:before {
    content: "\f0c5"
}

.fa.fa-floppy-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-floppy-o:before {
    content: "\f0c7"
}

.fa.fa-save {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-save:before {
    content: "\f0c7"
}

.fa.fa-navicon:before,.fa.fa-reorder:before {
    content: "\f0c9"
}

.fa.fa-magic:before {
    content: "\e2ca"
}

.fa.fa-pinterest,.fa.fa-pinterest-square {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-pinterest-square:before {
    content: "\f0d3"
}

.fa.fa-google-plus-square {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-google-plus-square:before {
    content: "\f0d4"
}

.fa.fa-google-plus {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-google-plus:before {
    content: "\f0d5"
}

.fa.fa-money:before {
    content: "\f3d1"
}

.fa.fa-unsorted:before {
    content: "\f0dc"
}

.fa.fa-sort-desc:before {
    content: "\f0dd"
}

.fa.fa-sort-asc:before {
    content: "\f0de"
}

.fa.fa-linkedin {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-linkedin:before {
    content: "\f0e1"
}

.fa.fa-rotate-left:before {
    content: "\f0e2"
}

.fa.fa-legal:before {
    content: "\f0e3"
}

.fa.fa-dashboard:before,.fa.fa-tachometer:before {
    content: "\f625"
}

.fa.fa-comment-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-comment-o:before {
    content: "\f075"
}

.fa.fa-comments-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-comments-o:before {
    content: "\f086"
}

.fa.fa-flash:before {
    content: "\f0e7"
}

.fa.fa-clipboard:before {
    content: "\f0ea"
}

.fa.fa-lightbulb-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-lightbulb-o:before {
    content: "\f0eb"
}

.fa.fa-exchange:before {
    content: "\f362"
}

.fa.fa-cloud-download:before {
    content: "\f0ed"
}

.fa.fa-cloud-upload:before {
    content: "\f0ee"
}

.fa.fa-bell-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-bell-o:before {
    content: "\f0f3"
}

.fa.fa-cutlery:before {
    content: "\f2e7"
}

.fa.fa-file-text-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-file-text-o:before {
    content: "\f15c"
}

.fa.fa-building-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-building-o:before {
    content: "\f1ad"
}

.fa.fa-hospital-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-hospital-o:before {
    content: "\f0f8"
}

.fa.fa-tablet:before {
    content: "\f3fa"
}

.fa.fa-mobile-phone:before,.fa.fa-mobile:before {
    content: "\f3cd"
}

.fa.fa-circle-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-circle-o:before {
    content: "\f111"
}

.fa.fa-mail-reply:before {
    content: "\f3e5"
}

.fa.fa-github-alt {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-folder-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-folder-o:before {
    content: "\f07b"
}

.fa.fa-folder-open-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-folder-open-o:before {
    content: "\f07c"
}

.fa.fa-smile-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-smile-o:before {
    content: "\f118"
}

.fa.fa-frown-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-frown-o:before {
    content: "\f119"
}

.fa.fa-meh-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-meh-o:before {
    content: "\f11a"
}

.fa.fa-keyboard-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-keyboard-o:before {
    content: "\f11c"
}

.fa.fa-flag-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-flag-o:before {
    content: "\f024"
}

.fa.fa-mail-reply-all:before {
    content: "\f122"
}

.fa.fa-star-half-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-star-half-o:before {
    content: "\f5c0"
}

.fa.fa-star-half-empty {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-star-half-empty:before {
    content: "\f5c0"
}

.fa.fa-star-half-full {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-star-half-full:before {
    content: "\f5c0"
}

.fa.fa-code-fork:before {
    content: "\f126"
}

.fa.fa-chain-broken:before,.fa.fa-unlink:before {
    content: "\f127"
}

.fa.fa-calendar-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-calendar-o:before {
    content: "\f133"
}

.fa.fa-css3,.fa.fa-html5,.fa.fa-maxcdn {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-unlock-alt:before {
    content: "\f09c"
}

.fa.fa-minus-square-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-minus-square-o:before {
    content: "\f146"
}

.fa.fa-level-up:before {
    content: "\f3bf"
}

.fa.fa-level-down:before {
    content: "\f3be"
}

.fa.fa-pencil-square:before {
    content: "\f14b"
}

.fa.fa-external-link-square:before {
    content: "\f360"
}

.fa.fa-compass {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-caret-square-o-down {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-caret-square-o-down:before {
    content: "\f150"
}

.fa.fa-toggle-down {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-toggle-down:before {
    content: "\f150"
}

.fa.fa-caret-square-o-up {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-caret-square-o-up:before {
    content: "\f151"
}

.fa.fa-toggle-up {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-toggle-up:before {
    content: "\f151"
}

.fa.fa-caret-square-o-right {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-caret-square-o-right:before {
    content: "\f152"
}

.fa.fa-toggle-right {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-toggle-right:before {
    content: "\f152"
}

.fa.fa-eur:before,.fa.fa-euro:before {
    content: "\f153"
}

.fa.fa-gbp:before {
    content: "\f154"
}

.fa.fa-dollar:before,.fa.fa-usd:before {
    content: "\$"
}

.fa.fa-inr:before,.fa.fa-rupee:before {
    content: "\e1bc"
}

.fa.fa-cny:before,.fa.fa-jpy:before,.fa.fa-rmb:before,.fa.fa-yen:before {
    content: "\f157"
}

.fa.fa-rouble:before,.fa.fa-rub:before,.fa.fa-ruble:before {
    content: "\f158"
}

.fa.fa-krw:before,.fa.fa-won:before {
    content: "\f159"
}

.fa.fa-bitcoin,.fa.fa-btc {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-bitcoin:before {
    content: "\f15a"
}

.fa.fa-file-text:before {
    content: "\f15c"
}

.fa.fa-sort-alpha-asc:before {
    content: "\f15d"
}

.fa.fa-sort-alpha-desc:before {
    content: "\f881"
}

.fa.fa-sort-amount-asc:before {
    content: "\f884"
}

.fa.fa-sort-amount-desc:before {
    content: "\f160"
}

.fa.fa-sort-numeric-asc:before {
    content: "\f162"
}

.fa.fa-sort-numeric-desc:before {
    content: "\f886"
}

.fa.fa-youtube-square {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-youtube-square:before {
    content: "\f431"
}

.fa.fa-xing,.fa.fa-xing-square,.fa.fa-youtube {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-xing-square:before {
    content: "\f169"
}

.fa.fa-youtube-play {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-youtube-play:before {
    content: "\f167"
}

.fa.fa-adn,.fa.fa-bitbucket,.fa.fa-bitbucket-square,.fa.fa-dropbox,.fa.fa-flickr,.fa.fa-instagram,.fa.fa-stack-overflow {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-bitbucket-square:before {
    content: "\f171"
}

.fa.fa-tumblr,.fa.fa-tumblr-square {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-tumblr-square:before {
    content: "\f174"
}

.fa.fa-long-arrow-down:before {
    content: "\f309"
}

.fa.fa-long-arrow-up:before {
    content: "\f30c"
}

.fa.fa-long-arrow-left:before {
    content: "\f30a"
}

.fa.fa-long-arrow-right:before {
    content: "\f30b"
}

.fa.fa-android,.fa.fa-apple,.fa.fa-dribbble,.fa.fa-foursquare,.fa.fa-gittip,.fa.fa-gratipay,.fa.fa-linux,.fa.fa-skype,.fa.fa-trello,.fa.fa-windows {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-gittip:before {
    content: "\f184"
}

.fa.fa-sun-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-sun-o:before {
    content: "\f185"
}

.fa.fa-moon-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-moon-o:before {
    content: "\f186"
}

.fa.fa-pagelines,.fa.fa-renren,.fa.fa-stack-exchange,.fa.fa-vk,.fa.fa-weibo {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-arrow-circle-o-right {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-arrow-circle-o-right:before {
    content: "\f35a"
}

.fa.fa-arrow-circle-o-left {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-arrow-circle-o-left:before {
    content: "\f359"
}

.fa.fa-caret-square-o-left {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-caret-square-o-left:before {
    content: "\f191"
}

.fa.fa-toggle-left {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-toggle-left:before {
    content: "\f191"
}

.fa.fa-dot-circle-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-dot-circle-o:before {
    content: "\f192"
}

.fa.fa-vimeo-square {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-vimeo-square:before {
    content: "\f194"
}

.fa.fa-try:before,.fa.fa-turkish-lira:before {
    content: "\e2bb"
}

.fa.fa-plus-square-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-plus-square-o:before {
    content: "\f0fe"
}

.fa.fa-openid,.fa.fa-slack,.fa.fa-wordpress {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-bank:before,.fa.fa-institution:before {
    content: "\f19c"
}

.fa.fa-mortar-board:before {
    content: "\f19d"
}

.fa.fa-google,.fa.fa-reddit,.fa.fa-reddit-square,.fa.fa-yahoo {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-reddit-square:before {
    content: "\f1a2"
}

.fa.fa-behance,.fa.fa-behance-square,.fa.fa-delicious,.fa.fa-digg,.fa.fa-drupal,.fa.fa-joomla,.fa.fa-pied-piper-alt,.fa.fa-pied-piper-pp,.fa.fa-stumbleupon,.fa.fa-stumbleupon-circle {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-behance-square:before {
    content: "\f1b5"
}

.fa.fa-steam,.fa.fa-steam-square {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-steam-square:before {
    content: "\f1b7"
}

.fa.fa-automobile:before {
    content: "\f1b9"
}

.fa.fa-cab:before {
    content: "\f1ba"
}

.fa.fa-deviantart,.fa.fa-soundcloud,.fa.fa-spotify {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-file-pdf-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-file-pdf-o:before {
    content: "\f1c1"
}

.fa.fa-file-word-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-file-word-o:before {
    content: "\f1c2"
}

.fa.fa-file-excel-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-file-excel-o:before {
    content: "\f1c3"
}

.fa.fa-file-powerpoint-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-file-powerpoint-o:before {
    content: "\f1c4"
}

.fa.fa-file-image-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-file-image-o:before {
    content: "\f1c5"
}

.fa.fa-file-photo-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-file-photo-o:before {
    content: "\f1c5"
}

.fa.fa-file-picture-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-file-picture-o:before {
    content: "\f1c5"
}

.fa.fa-file-archive-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-file-archive-o:before {
    content: "\f1c6"
}

.fa.fa-file-zip-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-file-zip-o:before {
    content: "\f1c6"
}

.fa.fa-file-audio-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-file-audio-o:before {
    content: "\f1c7"
}

.fa.fa-file-sound-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-file-sound-o:before {
    content: "\f1c7"
}

.fa.fa-file-video-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-file-video-o:before {
    content: "\f1c8"
}

.fa.fa-file-movie-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-file-movie-o:before {
    content: "\f1c8"
}

.fa.fa-file-code-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-file-code-o:before {
    content: "\f1c9"
}

.fa.fa-codepen,.fa.fa-jsfiddle,.fa.fa-vine {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-life-bouy:before,.fa.fa-life-buoy:before,.fa.fa-life-saver:before,.fa.fa-support:before {
    content: "\f1cd"
}

.fa.fa-circle-o-notch:before {
    content: "\f1ce"
}

.fa.fa-ra,.fa.fa-rebel {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-ra:before {
    content: "\f1d0"
}

.fa.fa-resistance {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-resistance:before {
    content: "\f1d0"
}

.fa.fa-empire,.fa.fa-ge {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-ge:before {
    content: "\f1d1"
}

.fa.fa-git-square {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-git-square:before {
    content: "\f1d2"
}

.fa.fa-git,.fa.fa-hacker-news,.fa.fa-y-combinator-square {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-y-combinator-square:before {
    content: "\f1d4"
}

.fa.fa-yc-square {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-yc-square:before {
    content: "\f1d4"
}

.fa.fa-qq,.fa.fa-tencent-weibo,.fa.fa-wechat,.fa.fa-weixin {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-wechat:before {
    content: "\f1d7"
}

.fa.fa-send:before {
    content: "\f1d8"
}

.fa.fa-paper-plane-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-paper-plane-o:before {
    content: "\f1d8"
}

.fa.fa-send-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-send-o:before {
    content: "\f1d8"
}

.fa.fa-circle-thin {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-circle-thin:before {
    content: "\f111"
}

.fa.fa-header:before {
    content: "\f1dc"
}

.fa.fa-futbol-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-futbol-o:before {
    content: "\f1e3"
}

.fa.fa-soccer-ball-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-soccer-ball-o:before {
    content: "\f1e3"
}

.fa.fa-slideshare,.fa.fa-twitch,.fa.fa-yelp {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-newspaper-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-newspaper-o:before {
    content: "\f1ea"
}

.fa.fa-cc-amex,.fa.fa-cc-discover,.fa.fa-cc-mastercard,.fa.fa-cc-paypal,.fa.fa-cc-stripe,.fa.fa-cc-visa,.fa.fa-google-wallet,.fa.fa-paypal {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-bell-slash-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-bell-slash-o:before {
    content: "\f1f6"
}

.fa.fa-trash:before {
    content: "\f2ed"
}

.fa.fa-copyright {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-eyedropper:before {
    content: "\f1fb"
}

.fa.fa-area-chart:before {
    content: "\f1fe"
}

.fa.fa-pie-chart:before {
    content: "\f200"
}

.fa.fa-line-chart:before {
    content: "\f201"
}

.fa.fa-lastfm,.fa.fa-lastfm-square {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-lastfm-square:before {
    content: "\f203"
}

.fa.fa-angellist,.fa.fa-ioxhost {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-cc {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-cc:before {
    content: "\f20a"
}

.fa.fa-ils:before,.fa.fa-shekel:before,.fa.fa-sheqel:before {
    content: "\f20b"
}

.fa.fa-buysellads,.fa.fa-connectdevelop,.fa.fa-dashcube,.fa.fa-forumbee,.fa.fa-leanpub,.fa.fa-sellsy,.fa.fa-shirtsinbulk,.fa.fa-simplybuilt,.fa.fa-skyatlas {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-diamond {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-diamond:before {
    content: "\f3a5"
}

.fa.fa-intersex:before,.fa.fa-transgender:before {
    content: "\f224"
}

.fa.fa-transgender-alt:before {
    content: "\f225"
}

.fa.fa-facebook-official {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-facebook-official:before {
    content: "\f09a"
}

.fa.fa-pinterest-p,.fa.fa-whatsapp {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-hotel:before {
    content: "\f236"
}

.fa.fa-medium,.fa.fa-viacoin,.fa.fa-y-combinator,.fa.fa-yc {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-yc:before {
    content: "\f23b"
}

.fa.fa-expeditedssl,.fa.fa-opencart,.fa.fa-optin-monster {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-battery-4:before,.fa.fa-battery:before {
    content: "\f240"
}

.fa.fa-battery-3:before {
    content: "\f241"
}

.fa.fa-battery-2:before {
    content: "\f242"
}

.fa.fa-battery-1:before {
    content: "\f243"
}

.fa.fa-battery-0:before {
    content: "\f244"
}

.fa.fa-object-group,.fa.fa-object-ungroup,.fa.fa-sticky-note-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-sticky-note-o:before {
    content: "\f249"
}

.fa.fa-cc-diners-club,.fa.fa-cc-jcb {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-clone {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-hourglass-o:before {
    content: "\f254"
}

.fa.fa-hourglass-1:before {
    content: "\f251"
}

.fa.fa-hourglass-2:before {
    content: "\f252"
}

.fa.fa-hourglass-3:before {
    content: "\f253"
}

.fa.fa-hand-rock-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-hand-rock-o:before {
    content: "\f255"
}

.fa.fa-hand-grab-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-hand-grab-o:before {
    content: "\f255"
}

.fa.fa-hand-paper-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-hand-paper-o:before {
    content: "\f256"
}

.fa.fa-hand-stop-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-hand-stop-o:before {
    content: "\f256"
}

.fa.fa-hand-scissors-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-hand-scissors-o:before {
    content: "\f257"
}

.fa.fa-hand-lizard-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-hand-lizard-o:before {
    content: "\f258"
}

.fa.fa-hand-spock-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-hand-spock-o:before {
    content: "\f259"
}

.fa.fa-hand-pointer-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-hand-pointer-o:before {
    content: "\f25a"
}

.fa.fa-hand-peace-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-hand-peace-o:before {
    content: "\f25b"
}

.fa.fa-registered {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-creative-commons,.fa.fa-gg,.fa.fa-gg-circle,.fa.fa-odnoklassniki,.fa.fa-odnoklassniki-square {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-odnoklassniki-square:before {
    content: "\f264"
}

.fa.fa-chrome,.fa.fa-firefox,.fa.fa-get-pocket,.fa.fa-internet-explorer,.fa.fa-opera,.fa.fa-safari,.fa.fa-wikipedia-w {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-television:before {
    content: "\f26c"
}

.fa.fa-500px,.fa.fa-amazon,.fa.fa-contao {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-calendar-plus-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-calendar-plus-o:before {
    content: "\f271"
}

.fa.fa-calendar-minus-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-calendar-minus-o:before {
    content: "\f272"
}

.fa.fa-calendar-times-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-calendar-times-o:before {
    content: "\f273"
}

.fa.fa-calendar-check-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-calendar-check-o:before {
    content: "\f274"
}

.fa.fa-map-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-map-o:before {
    content: "\f279"
}

.fa.fa-commenting:before {
    content: "\f4ad"
}

.fa.fa-commenting-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-commenting-o:before {
    content: "\f4ad"
}

.fa.fa-houzz,.fa.fa-vimeo {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-vimeo:before {
    content: "\f27d"
}

.fa.fa-black-tie,.fa.fa-edge,.fa.fa-fonticons,.fa.fa-reddit-alien {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-credit-card-alt:before {
    content: "\f09d"
}

.fa.fa-codiepie,.fa.fa-fort-awesome,.fa.fa-mixcloud,.fa.fa-modx,.fa.fa-product-hunt,.fa.fa-scribd,.fa.fa-usb {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-pause-circle-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-pause-circle-o:before {
    content: "\f28b"
}

.fa.fa-stop-circle-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-stop-circle-o:before {
    content: "\f28d"
}

.fa.fa-bluetooth,.fa.fa-bluetooth-b,.fa.fa-envira,.fa.fa-gitlab,.fa.fa-wheelchair-alt,.fa.fa-wpbeginner,.fa.fa-wpforms {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-wheelchair-alt:before {
    content: "\f368"
}

.fa.fa-question-circle-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-question-circle-o:before {
    content: "\f059"
}

.fa.fa-volume-control-phone:before {
    content: "\f2a0"
}

.fa.fa-asl-interpreting:before {
    content: "\f2a3"
}

.fa.fa-deafness:before,.fa.fa-hard-of-hearing:before {
    content: "\f2a4"
}

.fa.fa-glide,.fa.fa-glide-g {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-signing:before {
    content: "\f2a7"
}

.fa.fa-viadeo,.fa.fa-viadeo-square {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-viadeo-square:before {
    content: "\f2aa"
}

.fa.fa-snapchat,.fa.fa-snapchat-ghost {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-snapchat-ghost:before {
    content: "\f2ab"
}

.fa.fa-snapchat-square {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-snapchat-square:before {
    content: "\f2ad"
}

.fa.fa-first-order,.fa.fa-google-plus-official,.fa.fa-pied-piper,.fa.fa-themeisle,.fa.fa-yoast {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-google-plus-official:before {
    content: "\f2b3"
}

.fa.fa-google-plus-circle {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-google-plus-circle:before {
    content: "\f2b3"
}

.fa.fa-fa,.fa.fa-font-awesome {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-fa:before {
    content: "\f2b4"
}

.fa.fa-handshake-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-handshake-o:before {
    content: "\f2b5"
}

.fa.fa-envelope-open-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-envelope-open-o:before {
    content: "\f2b6"
}

.fa.fa-linode {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-address-book-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-address-book-o:before {
    content: "\f2b9"
}

.fa.fa-vcard:before {
    content: "\f2bb"
}

.fa.fa-address-card-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-address-card-o:before {
    content: "\f2bb"
}

.fa.fa-vcard-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-vcard-o:before {
    content: "\f2bb"
}

.fa.fa-user-circle-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-user-circle-o:before {
    content: "\f2bd"
}

.fa.fa-user-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-user-o:before {
    content: "\f007"
}

.fa.fa-id-badge {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-drivers-license:before {
    content: "\f2c2"
}

.fa.fa-id-card-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-id-card-o:before {
    content: "\f2c2"
}

.fa.fa-drivers-license-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-drivers-license-o:before {
    content: "\f2c2"
}

.fa.fa-free-code-camp,.fa.fa-quora,.fa.fa-telegram {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-thermometer-4:before,.fa.fa-thermometer:before {
    content: "\f2c7"
}

.fa.fa-thermometer-3:before {
    content: "\f2c8"
}

.fa.fa-thermometer-2:before {
    content: "\f2c9"
}

.fa.fa-thermometer-1:before {
    content: "\f2ca"
}

.fa.fa-thermometer-0:before {
    content: "\f2cb"
}

.fa.fa-bathtub:before,.fa.fa-s15:before {
    content: "\f2cd"
}

.fa.fa-window-maximize,.fa.fa-window-restore {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-times-rectangle:before {
    content: "\f410"
}

.fa.fa-window-close-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-window-close-o:before {
    content: "\f410"
}

.fa.fa-times-rectangle-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-times-rectangle-o:before {
    content: "\f410"
}

.fa.fa-bandcamp,.fa.fa-eercast,.fa.fa-etsy,.fa.fa-grav,.fa.fa-imdb,.fa.fa-ravelry {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa.fa-eercast:before {
    content: "\f2da"
}

.fa.fa-snowflake-o {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

.fa.fa-snowflake-o:before {
    content: "\f2dc"
}

.fa.fa-meetup,.fa.fa-superpowers,.fa.fa-wpexplorer {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.cursor-pointer {
    cursor: pointer
}

.d-block {
    display: block!important
}

.d-inline-block {
    display: inline-block!important
}

.nomargin {
    margin: 0
}

.break-words {
    word-break: break-word
}

.no-padding-top {
    padding-top: 0!important
}

.no-padding-bottom {
    padding-bottom: 0!important
}

.no-padding-right {
    padding-right: 0!important
}

.no-padding-left {
    padding-left: 0!important
}

.no-margin-top {
    margin-top: 0!important
}

.no-margin-bottom {
    margin-bottom: 0!important
}

.no-margin-right {
    margin-right: 0!important
}

.no-margin-left {
    margin-left: 0!important
}

.padding-bottom5 {
    padding-bottom: 5px!important
}

.padding-top5 {
    padding-top: 5px!important
}

.margin-bottom5 {
    margin-bottom: 5px!important
}

.margin-top5 {
    margin-top: 5px!important
}

.padding-bottom10 {
    padding-bottom: 10px!important
}

.padding-top10 {
    padding-top: 10px!important
}

.margin-bottom10 {
    margin-bottom: 10px!important
}

.margin-top10 {
    margin-top: 10px!important
}

.padding-bottom20 {
    padding-bottom: 20px!important
}

.padding-top20 {
    padding-top: 20px!important
}

.margin-bottom20 {
    margin-bottom: 20px!important
}

.margin-top20 {
    margin-top: 20px!important
}

.padding-bottom30 {
    padding-bottom: 30px!important
}

.padding-top30 {
    padding-top: 30px!important
}

.margin-bottom30 {
    margin-bottom: 30px!important
}

.margin-top30 {
    margin-top: 30px!important
}

.padding-bottom40 {
    padding-bottom: 40px!important
}

.padding-top40 {
    padding-top: 40px!important
}

.margin-bottom40 {
    margin-bottom: 40px!important
}

.margin-top40 {
    margin-top: 40px!important
}

.padding-bottom50 {
    padding-bottom: 50px!important
}

.padding-top50 {
    padding-top: 50px!important
}

.margin-bottom50 {
    margin-bottom: 50px!important
}

.margin-top50 {
    margin-top: 50px!important
}

.padding-bottom60 {
    padding-bottom: 60px!important
}

.padding-top60 {
    padding-top: 60px!important
}

.margin-bottom60 {
    margin-bottom: 60px!important
}

.margin-top60 {
    margin-top: 60px!important
}

.padding-bottom70 {
    padding-bottom: 70px!important
}

.padding-top70 {
    padding-top: 70px!important
}

.margin-bottom70 {
    margin-bottom: 70px!important
}

.margin-top70 {
    margin-top: 70px!important
}

.padding-bottom80 {
    padding-bottom: 80px!important
}

.padding-top80 {
    padding-top: 80px!important
}

.margin-bottom80 {
    margin-bottom: 80px!important
}

.margin-top80 {
    margin-top: 80px!important
}

.animation {
    visibility: hidden
}

.animated,.ie .animation,.ie9 .animation {
    visibility: visible
}

img.labycoin {
    height: 22px;
    width: 22px
}

img.labycoin.small {
    height: 16px;
    margin-top: -2px;
    width: 16px
}

.lm-box {
    background-color: hsla(0,0%,94%,.64);
    border: 2px solid #d2d1d1;
    margin: 30px 0;
    padding: 15px
}

@media(prefers-color-scheme: dark) {
    .lm-box {
        background-color:#17181d;
        border: 2px solid #1e1f26
    }
}

.lm-box.include-header {
    margin-top: 0!important
}

.lm-box-header {
    background-color: #0a56a5;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    color: #fff;
    font-weight: 700;
    height: 35px;
    line-height: 35px;
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    text-transform: uppercase;
    width: 100%
}

@media(prefers-color-scheme: dark) {
    .lm-box-header {
        background-color:#0a56a5
    }

    code {
        background-color: #3b3b3b;
        color: #f86d90
    }
}

code.method {
    color: #0a56a5
}

@media(prefers-color-scheme: dark) {
    code.method {
        color:#008de4
    }
}

code.green {
    color: #a0c725
}

code.neutral {
    color: #d2d2d2
}

@media(prefers-color-scheme: dark) {
    pre {
        background-color:#212121;
        border: 1px solid #373737;
        color: #95d494
    }
}

[x-cloak] {
    display: none!important
}

.mc-head {
    image-rendering: pixelated
}

.info-bar {
    background-color: #d60903;
    color: #fff;
    font-size: 15px;
    letter-spacing: 1px;
    padding: 10px;
    text-align: center;
    width: 100%
}

.info-bar i,.info-bar img {
    font-size: 20px;
    margin-left: 10px;
    margin-right: 10px
}

.info-bar .code {
    background-color: #3c3c3c;
    border-radius: 1px;
    font-family: Courier Courier New,Courier,monospace;
    font-size: 20px;
    letter-spacing: 2px;
    margin-left: 3px;
    padding: 0 5px
}

.header-main-big .page-header-content {
    padding-bottom: 40px
}

.header-main-big .page-header-content p {
    color: #fff;
    font-size: 18px;
    line-height: 26px;
    margin: 10px 0 0
}

@media(prefers-color-scheme: dark) {
    .header-main-big .page-header-content p {
        color:#b8b8b8
    }
}

header .scroll-down {
    cursor: pointer;
    font-size: 20px;
    margin-bottom: -30px;
    margin-top: 30px;
    text-align: center
}

header .dev-sign {
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    vertical-align: top
}

header .header-heading {
    margin-bottom: 10px
}

header .header-content .header-text {
    margin-bottom: 90px;
    padding-top: 80px
}

nav#navigation .dropdown-menu a,nav#navigation_affix .dropdown-menu a {
    font-size: 14px;
    line-height: 1.42857143
}

nav#navigation .dropdown-menu a.admin,nav#navigation_affix .dropdown-menu a.admin {
    color: #a94442
}

nav#navigation .dropdown-menu a.special,nav#navigation_affix .dropdown-menu a.special {
    color: #31708f
}

nav#navigation .dropdown-menu a i,nav#navigation_affix .dropdown-menu a i {
    margin-right: 5px;
    min-width: 22px;
    text-align: center
}

nav#navigation {
    transition: background-color 1s ease-in-out
}

@media(min-width: 767px) {
    nav#navigation .login {
        background-color:rgba(0,0,0,.18)
    }
}

nav#navigation ul.navbar-nav:not(.nav).beforeload {
    margin-right: 240px!important
}

nav#navigation ul.nav.beforeload,nav#navigation ul.navbar-nav.beforeload {
    margin-right: 225px
}

nav#navigation ul.nav .dropdown-menu,nav#navigation ul.navbar-nav .dropdown-menu {
    border-radius: 10px 10px 10px 10px!important
}

nav#navigation ul.nav #userbtn,nav#navigation ul.nav .lm-notifications,nav#navigation ul.nav .openLogin,nav#navigation ul.navbar-nav #userbtn,nav#navigation ul.navbar-nav .lm-notifications,nav#navigation ul.navbar-nav .openLogin {
    animation: fadein .2s
}

@keyframes fadein {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

nav#navigation ul.nav li.open-login,nav#navigation ul.navbar-nav li.open-login {
    padding: 10px 0!important;
    width: 215px
}

@media(max-width: 1000px) {
    nav#navigation ul.nav li.open-login,nav#navigation ul.navbar-nav li.open-login {
        width:auto!important
    }
}

nav#navigation ul.nav li.open-login .openLogin,nav#navigation ul.navbar-nav li.open-login .openLogin {
    float: right
}

nav#navigation ul.nav li.userbtn,nav#navigation ul.navbar-nav li.userbtn {
    padding: 4px 0;
    width: 180px
}

@media(max-width: 1000px) {
    nav#navigation ul.nav li.userbtn,nav#navigation ul.navbar-nav li.userbtn {
        width:auto!important
    }
}

nav#navigation ul.nav li.lm-notifications,nav#navigation ul.navbar-nav li.lm-notifications {
    padding: 4px 5px!important;
    width: 35px
}

.login-container {
    display: none
}

.login-container .loginform {
    margin: auto;
    max-width: 875px
}

.login-container .loginform .fa-info-circle {
    cursor: pointer;
    font-size: 12px;
    margin-left: 1px;
    vertical-align: text-top
}

.login-container .loginform .form-group {
    margin: 0 5px
}

.login-container .loginform input {
    color: #000!important;
    font-size: 16px;
    font-weight: 700
}

@media(prefers-color-scheme: dark) {
    .login-container .loginform input {
        color:#fff!important
    }
}

.login-container .loginform button.btn-custom {
    line-height: 19px;
    margin-bottom: 29px
}

.login-container .loginform .load {
    display: none;
    margin: 15px auto auto
}

.login-container .loginform.loading .load {
    display: block
}

.login-container .loginform.loading button {
    opacity: .65
}

.login-container .loginform button {
    margin: 20px 5px 0;
    vertical-align: bottom
}

.login-container button.btn-login {
    background-color: #f65050;
    border-bottom: 3px solid #e84343
}

.login-container button.btn-login:hover {
    background-color: #e23d3d;
    border-bottom-color: #d53232
}

.login-container label.forgotPassword,.login-container label.memLogin {
    display: block
}

.nav li .label-danger,.nav li .new-badge,.navbar-nav li .label-danger,.navbar-nav li .new-badge {
    font-size: 8px;
    vertical-align: top
}

#lm4-header .label-danger,#lm4-header .new-badge {
    margin-left: 15px
}

.switch-handle,.switch-label {
    transition: All .3s ease;
    -webkit-transition: All .3s ease;
    -moz-transition: All .3s ease;
    -o-transition: All .3s ease
}

@media(max-width: 400px) {
    .navbar .userbtn button {
        display:block;
        min-width: 5rem
    }

    .navbar .userbtn {
        padding: 4px 25px!important
    }
}

@media(max-width: 768px) {
    .userbtn ul li a {
        color:#fff
    }
}

#navigation_affix.navbar-nav>li.userbtn {
    padding-top: 15px
}

#header .nav,#navigation_affix,#navigation_affix .nav {
    overflow: inherit
}

.index-alert {
    margin-left: auto;
    margin-right: auto;
    margin-top: -25px;
    width: 50%
}

@media(max-width: 750px) {
    .index-alert {
        width:90%
    }
}

#header .navbar {
    border: 0;
    border-radius: 0;
    color: #c7e0fa;
    margin: 0;
    min-height: 0;
    padding: 40px 0;
    z-index: 2
}

#header .navbar-brand,#navigation_affix .navbar-brand {
    color: #fff;
    height: auto;
    padding: 0
}

#header .navbar>.container .navbar-brand,#navigation_affix .navbar>.container .navbar-brand {
    margin: 0
}

@media(max-width: 767px) {
    #header .navbar>.container .navbar-brand,#navigation_affix .navbar>.container .navbar-brand {
        margin-left:20px
    }
}

#header .navbar-brand img,#navigation_affix .navbar-brand img {
    height: 40px
}

#header .nav,#navigation_affix.navbar-nav {
    height: auto
}

@media(max-width: 768px) {
    #header .nav li.single-nav-point,#navigation_affix.navbar-nav li.single-nav-point {
        margin-bottom:10px
    }
}

#header .navbar-nav>li,#navigation_affix.navbar-nav>li {
    padding: 10px 25px
}

#header .navbar-nav>li:last-child,#navigation_affix.navbar-nav>li:last-child {
    padding-right: 0
}

#header .navbar-nav>li>a,#navigation_affix .navbar-nav>li>a {
    background: 0 0!important;
    color: #f4f9ff;
    float: left;
    font-family: Inter,Arial,serif;
    font-size: 15px;
    line-height: 20px;
    padding: 0
}

#header .navbar-nav>li.active>a,#header .navbar-nav>li>a:hover {
    color: #fff
}

#header .navbar-nav,#navigation_affix .navbar-nav {
    margin-bottom: 0;
    margin-top: 0
}

.navbar-collapse.collapse.show ul.navbar-nav li.userbtn {
    padding-left: 25px!important;
    width: 100%!important
}

.navbar-collapse.collapse.show ul.navbar-nav li.userbtn button.float-end {
    float: unset!important;
    padding-left: 10px!important
}

.navbar-collapse.collapse.show ul.navbar-nav li.lm-notifications {
    margin-top: 1rem!important;
    padding: 0 0 0 25px!important
}

.navbar-collapse.collapse.show ul.navbar-nav ul.dropdown-menu {
    border-radius: 10px 10px 10px 10px!important;
    width: 12rem
}

#footer {
    background-color: #101010;
    color: #fff;
    text-align: center
}

#footer .lm-footer {
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 80px;
    padding-top: 80px;
    width: 80%
}

#footer .lm-footer .sm-title {
    color: #444;
    cursor: default;
    display: block;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 10px;
    text-transform: uppercase
}

#footer .lm-footer .footer-socials {
    text-align: left
}

#footer .lm-footer .footer-socials a {
    color: #fff;
    display: inline-block;
    font-size: 28px;
    margin: 0 8px;
    text-align: left;
    vertical-align: top
}

#footer .lm-footer .footer-socials a:hover {
    color: #fff
}

#footer .lm-footer .language-selector {
    float: left;
    margin-top: 25px
}

@media(max-width: 700px) {
    #footer .lm-footer .language-selector {
        display:block;
        margin-bottom: 50px;
        width: 100%
    }
}

#footer .lm-footer .language-selector .crowdin-icon {
    margin-left: 15px
}

#footer .lm-footer .language-selector .crowdin-icon img {
    height: 30px;
    margin-right: 10px;
    width: 100px
}

#footer .lm-footer .language-selector .dropup {
    cursor: pointer;
    float: left;
    font-size: 17px;
    margin-top: 3px
}

#footer .lm-footer .language-selector .dropup img.flag {
    border-radius: 5px
}

#footer .lm-footer .link-wrapper {
    text-align: center
}

@media(max-width: 700px) {
    #footer .lm-footer .link-wrapper.second-link-wrapper {
        margin-top:20px
    }

    #footer .lm-footer .link-wrapper {
        text-align: left
    }
}

#footer .lm-footer .link-wrapper .links {
    display: inline-block;
    text-align: left
}

#footer .lm-footer .link-wrapper .links a {
    color: #fff;
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
    text-align: left;
    width: 100%
}

#footer .lm-footer .link-wrapper .links a.title {
    color: #444;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase
}

#footer .lm-footer .link-wrapper .links a.title:hover {
    color: #444;
    cursor: default
}

#footer .lm-footer .link-wrapper .links a:hover {
    color: #dadada
}

#footer .lm-footer .copyright {
    float: right;
    width: auto
}

@media(max-width: 700px) {
    #footer .lm-footer .copyright {
        float:left;
        margin-top: 50px
    }
}

#footer .lm-footer .copyright .sm-title {
    text-align: left
}

#footer .lm-footer .copyright .laby-brand {
    display: block;
    float: right;
    margin-bottom: 10px;
    margin-top: 5px;
    width: 100%
}

@media(max-width: 700px) {
    #footer .lm-footer .copyright .laby-brand .legal-img-wrapper {
        display:block;
        height: 30px;
        margin-bottom: 20px;
        width: 100%
    }
}

#footer .lm-footer .copyright .laby-brand img {
    float: left
}

#footer .lm-footer .copyright .laby-brand p {
    color: grey;
    font-size: 12px;
    line-height: 19px;
    margin-left: 5px;
    text-align: left
}

@media(max-width: 700px) {
    #footer .lm-footer .copyright .laby-brand p {
        margin-left:0
    }
}

#footer .lm-footer .copyright .links {
    text-align: left
}

#footer .lm-footer .copyright .links a {
    color: grey;
    display: initial;
    font-size: 12px;
    margin-bottom: 0;
    margin-right: 10px;
    text-align: left
}

@media(max-width: 700px) {
    #footer .lm-footer .footer-box.social-language-box {
        min-height:190px
    }
}

.language-selector .language-dropdown {
    border-radius: 10px;
    max-height: 200px;
    overflow: auto;
    width: 180px
}

.language-selector .language-dropdown li {
    font-size: 14px;
    padding: 4px 8px
}

.language-selector .dropdown-toggle:after {
    display: none
}

.grecaptcha-badge {
    visibility: collapse
}

@media(prefers-color-scheme: dark) {
    * {
        scrollbar-color:#585a5f #191c1e;
        scrollbar-width: thin
    }

    ::-webkit-scrollbar {
        width: 15px
    }

    ::-webkit-scrollbar-track {
        background: #191c1e
    }

    ::-webkit-scrollbar-thumb {
        background-color: #585a5f;
        border: 3px solid #191c1e;
        border-radius: 6px
    }

    body {
        background-color: #0e0d10;
        color: #e6e6e6
    }

    body.index #header {
        background: #0a56a5 url(/page/static/images/labybg_dark-min.5b872716.jpg) no-repeat 0 100%;
        background-size: cover
    }

    .h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6 {
        color: #efefef
    }

    hr {
        border-top: 1px solid #131313
    }

    .btn-default {
        background-color: #1c1d1e!important;
        border-bottom: none
    }

    .btn-default,.btn-default i:before {
        color: #fff!important
    }

    .btn-warning {
        background-color: #a5631c;
        border-color: #74460c;
        color: #fff
    }

    .sep-border {
        background-color: #131313
    }

    .bg-grey {
        background-color: #0e0d10
    }

    .bg-dark {
        background-color: #0e1419
    }

    .sp-replacer {
        background-color: #1d1f20;
        border: 1px solid #3d4042!important
    }

    .form-control {
        background-color: #404040!important;
        border: 1px solid #505050!important;
        color: #fff
    }

    .post-heading-center .h2:after,.post-heading-center h2:after,.post-heading-left .h2:after,.post-heading-left h2:after {
        background-color: #0a56a5
    }

    ul.list-icon li .fa {
        color: #0a56a5
    }

    .affa-feature-icon .fa {
        background-color: #0a56a5
    }

    .remodal {
        background: #0e0d10;
        color: #eaeaea
    }

    .swal2-popup {
        background: #0e0d10!important
    }

    .swal2-popup .swal2-content,.swal2-popup .swal2-title {
        color: #fff!important
    }

    .swal2-popup .swal2-select {
        color: #e8e8e8!important
    }

    .swal2-cancel {
        background-color: #343434!important
    }

    .swal2-progresscircle,.swal2-progressline {
        background-color: #183563!important
    }

    .jconfirm .jconfirm-box {
        background-color: #202125;
        background-color: #252525!important;
        color: #eaeaea
    }

    .jconfirm .jconfirm-box .jconfirm-title,.jconfirm .jconfirm-box label {
        color: #fff
    }

    .jconfirm .jconfirm-box div.jconfirm-content,.jconfirm .jconfirm-box div.jconfirm-title-c {
        color: hsla(0,0%,100%,.87)
    }

    .btn-custom,button,input[type=button],input[type=number],input[type=reset],input[type=submit] {
        background-color: #0a56a5;
        border-bottom: 3px solid #094788
    }

    .btn-custom.focus,.btn-custom:hover {
        background-color: #074484;
        border-bottom: 3px solid #083d75
    }

    .btn-primary {
        background-color: #0a56a5
    }

    #header {
        background: #0a56a5 url(/page/static/images/base-header-overlay.8a0bdc58.png) repeat 0 0
    }

    #header .header-content .header-text .btn-custom.btn-more-link {
        border-bottom: 3px solid #bdbdbd;
        color: #000!important
    }

    #header .header-content .header-text .btn-custom.btn-more-link:hover {
        background-color: #e9e9e9;
        border-bottom: 3px solid #bdbdbd
    }

    .loginform .form-control {
        color: #fff!important
    }

    .ie input[type=range],.ie9 input[type=range],input[type=color],input[type=date],input[type=datetime-local],input[type=datetime],input[type=email],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],select,textarea {
        background-color: #404040;
        border: 2px solid #505050;
        color: #e6e6e6
    }

    .ie input[type=range]:focus,.ie9 input[type=range]:focus,input[type=color]:focus,input[type=date]:focus,input[type=datetime-local]:focus,input[type=datetime]:focus,input[type=email]:focus,input[type=month]:focus,input[type=number]:focus,input[type=password]:focus,input[type=search]:focus,input[type=tel]:focus,input[type=text]:focus,input[type=time]:focus,input[type=url]:focus,input[type=week]:focus,select:focus,textarea:focus {
        background-color: #282828;
        border-color: #505050;
        color: #e6e6e6
    }

    .panel-default>.panel-heading {
        background-color: #2b2b2b;
        border-color: #2d2d2d;
        color: #fff
    }

    .panel-default>.panel-heading+.panel-collapse>.panel-body {
        border-top-color: #313131
    }

    .panel-default {
        border-color: #272727
    }

    .panel {
        background-color: #141414
    }

    #header .header-content.page-header-content .page-header-text {
        background-color: #090909
    }

    .featureItem {
        background-color: #0e0d10
    }

    #partner .item p,.post-heading-center .h2,.post-heading-center h2,.post-heading-left .h2,.post-heading-left h2 {
        color: #fff
    }

    .affa-testimonial {
        box-shadow: none
    }

    .affa-testimonial .testimonial-author,.affa-testimonial .testimonial-text {
        background-color: #373737;
        color: #d9d9d9
    }

    .affa-testimonial .testimonial-author .h4,.affa-testimonial .testimonial-author h4 {
        color: #fff
    }

    #shoploading {
        display: none
    }

    #shopWrapper {
        background-color: #0e0d10
    }

    .shop-nav {
        background-color: #1d1d1d
    }

    .shop-nav li {
        background: #565656;
        color: #fff
    }

    .shop-nav li.active {
        background: #303030
    }

    .shop-nav li a {
        color: #fff
    }

    .shop-tabs li.ui-tabs-active {
        background: #262626
    }

    .cart-btn:hover i {
        color: #aeaeae
    }

    .cart-btn:active i,.cart-btn:focus i {
        color: #fff
    }

    .checkout-btn:disabled {
        background: #292929;
        border-bottom: #292929;
        color: #5f5f5f!important
    }

    .variation-wrapper .duration-item {
        background-color: #505050
    }

    .article-image-carousel .carousel-control i {
        color: #fff;
        font-size: 12px;
        text-shadow: 0 0 3px #000
    }

    .article {
        background: linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(/page/static/images/bg_grey.fe627345.png);
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover
    }

    #article-section .shop-tabs li {
        background-color: #565656
    }

    #article-section .plus-emotes-overlay {
        background: hsla(0,0%,4%,.8);
        color: #fff;
        text-shadow: none
    }

    .plus-feature {
        background: #2d2d2d
    }

    .laby-popover {
        background: #1a1a1a;
        border: 1px solid #131313
    }

    .popover-header {
        color: #fff
    }

    .popover-footer,.popover-header {
        background: #171717
    }

    .popover-header:before {
        border-bottom: 15px solid #171717
    }

    .popover-body {
        border-bottom: 1px solid #262626;
        border-top: 1px solid #262626
    }

    .popover-body::-webkit-scrollbar-thumb {
        background-color: #585a5f;
        border: 0;
        border-radius: 6px
    }

    .summary-popover .remove-item i:hover {
        color: #fff
    }

    .popover-message-success {
        background-color: #004f21;
        border-bottom: 1px solid #000301
    }

    .table-hover>tbody>tr:hover {
        background-color: #2d2d2d!important
    }

    #shopWrapper .summary.boxed tr {
        background-color: transparent;
        border: 1px solid #232323
    }

    #shopWrapper .summary.boxed tr td:first-child {
        background-color: transparent
    }

    #shopWrapper .summaryWrapper .btn.back {
        background-color: #2c2c2c;
        border: 1px solid #4b4b4b
    }

    #shopWrapper .summaryWrapper .btn.back:hover {
        background-color: #1d1d1d;
        border: 1px solid #4b4b4b;
        color: #fff
    }

    .summary tfoot {
        border-top: 1px solid #131313
    }

    #shopWrapper .h3,#shopWrapper h3,.shop-wrapper .h3,.shop-wrapper h3 {
        color: #fff!important
    }

    #article-section .shopTabs li a {
        color: #fff;
        outline: none
    }

    #articleSection-gifts .gift-desc,#articleSection-partner .featured-headline p {
        color: #fff
    }

    .product-feature,.variation-section input[type=radio]:checked+.duration-item {
        background-color: #0a56a5
    }

    .article .corner-ribbon.new {
        background: #0a56a5
    }

    .adyen-checkout__payment-method,.adyen-checkout__payment-method--selected,.adyen-checkout__status {
        background: #1e1e1e!important;
        border: 1px solid #3a3a3a!important;
        color: #fff!important
    }

    .adyen-checkout__checkbox__label,.adyen-checkout__helper-text,.adyen-checkout__label__text,.adyen-checkout__payment-method__header,.adyen-checkout__payment-method__name {
        color: #fff!important
    }

    .adyen-checkout__button {
        background: #0a56a5!important
    }

    .adyen-checkout__button:hover {
        background: #09478d!important
    }

    .adyen-checkout__field--country,.adyen-checkout__field--stateOrProvince {
        color: #000
    }

    .ui-widget-content {
        background: #0e0d10
    }

    .dashboard .dashboardWrapper .dashboardItem {
        background-color: #1d1d1d
    }

    .dashboard .dashboardWrapper .dashboardItem .headline {
        background-color: #0a56a5
    }

    .dashboard .dashboardWrapper .dashboardItem.emotes table tr.emoteItem {
        border-bottom: 1px solid #2d2d2d
    }

    .dashboard .dashboardWrapper .dashboardItem.emotes table {
        border-left: 1px solid #2d2d2d
    }

    .dashboard .dashboardWrapper .dashboardItem.referrer .referrerTableWrapper .urlField {
        background: inherit
    }

    .table-striped>tbody>tr:nth-of-type(odd) {
        background-color: #111
    }

    .table>tbody>tr>td,.table>tbody>tr>th,.table>tfoot>tr>td,.table>tfoot>tr>th,.table>thead>tr>td,.table>thead>tr>th {
        border-top: 1px solid #333
    }

    .table>tbody>tr>td select {
        background-color: #1d1f20!important;
        border: 1px solid #3d4042!important
    }

    .ideas #ideaList_wrapper tr.even {
        background-color: #131313
    }

    .pagination li a {
        background-color: transparent!important;
        border-color: #545454!important;
        color: #757575
    }

    .pagination li.active a {
        background-color: #2156a5!important;
        border-color: #0f2e5c!important;
        font-weight: 700
    }

    .ideas tr td .badgeComments {
        background-color: #2f2f2f!important;
        border-color: #545454!important
    }

    .ideas tr td .badgeVotes {
        background-color: #2a552a!important;
        border-color: #3c793c!important
    }

    .ideas .wysibb-toolbar-btn:hover {
        background-color: #3d3d3d!important;
        cursor: pointer
    }

    .swal2-input {
        background-color: #3d3d3d!important;
        border-color: #4b4b4b!important;
        color: #fff!important
    }

    #wbbmodal .wbbm-title .wbbm-title-text {
        color: #d9d9d9!important
    }

    #wbbmodal .wbbm,.wbbm-bottom {
        background-color: #3d3d3d!important;
        color: #fff!important
    }

    .select2-container--default .select2-selection--multiple,.select2-container--default .select2-selection--single {
        background-color: #404040;
        border: 1px solid #505050
    }

    .select2-container--default .select2-selection--single .select2-selection__rendered {
        color: #fff
    }

    .select2-container--default .select2-selection--multiple .select2-selection__choice {
        background-color: #242424
    }

    .modal-content {
        background-color: #0e0d10
    }

    .select2-dropdown {
        background-color: #404040
    }

    .select2-container--default .select2-results__option[aria-selected=true] {
        background-color: #242424
    }

    .ideas .categoryBadge {
        background-color: #3d3d3d
    }

    .ideas .table>tbody>tr>td {
        border-top: 1px solid #222
    }

    .well {
        background-color: #1d1d1d
    }

    .well,.wysibb {
        border: 1px solid #2f2f2f
    }

    .wysibb {
        background: #1d1d1d
    }

    .wysibb .wysibb-toolbar {
        border-bottom: 1px solid #2f2f2f
    }

    .wysibb .wysibb-toolbar .wysibb-toolbar-container {
        border-right: 1px solid #2f2f2f
    }

    .wysibb .wysibb-toolbar .wysibb-toolbar-container .wysibb-toolbar-btn .fonticon {
        color: #fff;
        text-shadow: none
    }

    .wysibb .wysibb-toolbar .wysibb-toolbar-container .wysibb-toolbar-btn .wbb-list {
        background: #292929
    }

    .wysibb .wysibb-toolbar .wysibb-toolbar-container .wysibb-toolbar-btn.wbb-select.on,.wysibb .wysibb-toolbar .wysibb-toolbar-container .wysibb-toolbar-btn.wbb-select.on:active {
        background: #545454;
        box-shadow: none
    }

    .wysibb .wysibb-toolbar .wysibb-toolbar-container .wysibb-toolbar-btn.wbb-select:hover {
        background: #545454
    }

    .wysibb .wysibb-toolbar .wysibb-toolbar-container .wysibb-toolbar-btn:hover {
        background: #545454;
        color: #fff
    }

    .wysibb .wysibb-toolbar .wysibb-toolbar-container .wysibb-toolbar-btn.on,.wysibb .wysibb-toolbar .wysibb-toolbar-container .wysibb-toolbar-btn.on:hover,.wysibb .wysibb-toolbar .wysibb-toolbar-container .wysibb-toolbar-btn:active {
        background: #080808;
        box-shadow: none
    }

    .wbb-select .option:hover {
        background: #545454
    }

    .addons table tr,.changelog table tr,.control table tr,.serverlist table tr {
        background: #1c1c1c
    }

    .addons table th,.changelog table th,.control table th,.serverlist table th {
        background: #0a56a5
    }

    .table>thead>tr>th {
        border-bottom: 2px solid #323232
    }

    .table>tbody>tr.warning>td,.table>tbody>tr.warning>th,.table>tbody>tr>td.warning,.table>tbody>tr>th.warning,.table>tfoot>tr.warning>td,.table>tfoot>tr.warning>th,.table>tfoot>tr>td.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>thead>tr.warning>th,.table>thead>tr>td.warning,.table>thead>tr>th.warning {
        background-color: #2f240c
    }

    .table>tbody>tr.success>td,.table>tbody>tr.success>th,.table>tbody>tr>td.success,.table>tbody>tr>th.success,.table>tfoot>tr.success>td,.table>tfoot>tr.success>th,.table>tfoot>tr>td.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>thead>tr.success>th,.table>thead>tr>td.success,.table>thead>tr>th.success {
        background-color: #1d2b18
    }

    .table>tbody>tr.danger>td,.table>tbody>tr.danger>th,.table>tbody>tr>td.danger,.table>tbody>tr>th.danger,.table>tfoot>tr.danger>td,.table>tfoot>tr.danger>th,.table>tfoot>tr>td.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>thead>tr.danger>th,.table>thead>tr>td.danger,.table>thead>tr>th.danger {
        background-color: #310f0f
    }

    .table>tbody>tr.info>td,.table>tbody>tr.info>th,.table>tbody>tr>td.info,.table>tbody>tr>th.info,.table>tfoot>tr.info>td,.table>tfoot>tr.info>th,.table>tfoot>tr>td.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>thead>tr.info>th,.table>thead>tr>td.info,.table>thead>tr>th.info {
        background-color: #101e25
    }

    .addons table tr:nth-of-type(odd),.changelog table tr:nth-of-type(odd),.control table tr:nth-of-type(odd),.serverlist table tr:nth-of-type(odd) {
        background: #111
    }

    .reports table th {
        background: #0a56a5
    }

    #partner .item [alt=Discord],#partner .item [alt=teamspeak] {
        filter: invert(1)
    }

    .list-group-item {
        border: 1px solid #292929
    }

    .dropdown-menu,.list-group-item {
        background-color: #1d1d1d
    }

    .dropdown-menu>li>a {
        color: #e2e2e2
    }

    .dropdown-menu .divider,.dropdown-menu .dropdown-divider {
        background-color: #3c3c3c
    }

    .dropdown-menu a.admin {
        color: #b2403e
    }

    .dropdown-menu a.special {
        color: #12aefb
    }

    .dropdown-menu>li>a:focus,.dropdown-menu>li>a:hover {
        background-color: #212121;
        color: #dedede
    }

    .bg-success {
        background-color: #22351a
    }

    .bg-warning {
        background-color: #4a400d
    }

    .bg-danger {
        background-color: #581515
    }

    .modal-header {
        border-bottom: 1px solid #272727
    }

    .modal-footer {
        border-top: 1px solid #272727
    }

    .help-block {
        color: #e6e6e6
    }

    .help-block.text-danger {
        color: #b2403e
    }

    .finish .sa,.finish .sa-success,.finish .sa-success-fix,.finish .sa-success:after,.finish .sa-success:before {
        background: #0e0d10
    }

    .checkout-promo-info i {
        color: #fff
    }

    .code-info .invalid-code {
        background-color: #1c1b1b;
        color: #dedbdb
    }

    .code-info .table-box {
        border: 2px solid #343437
    }

    .code-info .product-box {
        background-color: #202022
    }

    .code-info .product-box:hover {
        background-color: #171718
    }

    .ql-toolbar {
        background-color: #292b30!important
    }

    .ql-snow.ql-toolbar svg {
        filter: invert(1)!important
    }

    .header-content #autosuggest-container {
        background-color: #32353b!important
    }

    .header-content #autosuggest-container a {
        color: #dedfe2!important
    }

    .adyen-checkout__dropdown ul li span {
        color: #000!important
    }

    .alert-warning {
        background-color: #856d2f!important;
        border-color: #3b3b37!important;
        color: #fff
    }

    .alert-warning i {
        color: #db6b6b!important
    }

    .alert-success {
        background-color: #004f21;
        border-color: #000301;
        color: #dff0d8
    }

    table.adminTable .light {
        background-color: hsla(0,0%,100%,.16)!important
    }

    .setCapeRow .capes li:hover {
        background-color: #2b2b2b!important
    }

    .flash-sale-panel {
        background-color: #6e1418;
        border: 1px solid #fff
    }

    .flash-sale-wrapper .countdown-wrapper {
        background-color: #fff
    }

    #ui-datepicker-div .ui-widget-header,#ui-datepicker-div a.ui-state-default {
        background: rgba(34,34,34,.64);
        border: 1px solid rgba(57,57,57,.49);
        color: #d7d7d7
    }

    #ui-datepicker-div .ui-state-active {
        background: rgba(79,79,79,.64)!important
    }

    .ui-widget.ui-widget-content {
        border: 1px solid rgba(57,57,57,.49)
    }

    .input-group-addon {
        background-color: #292929;
        border-color: #505050;
        color: #fff
    }

    button.close {
        color: #fff!important
    }

    input.sp-validation-error {
        color: #000
    }

    .medium-zoom-overlay {
        background: hsla(0,0%,9%,.95)!important
    }

    .breadcrumb {
        background-color: #1d1d1d;
        border: 1px solid #292929
    }
}

.navbar .notifications {
    padding: 4px 0 4px 10px!important
}

#navigation_affix .notifications {
    padding: 15px 0 0!important
}

@media only screen and (max-width: 600px) {
    .notifications,.userbtn {
        display:inline!important;
        list-style: none!important;
        padding: 0!important
    }
}

.nav .notifications #notificationBtn,.navbar-nav .notifications #notificationBtn {
    position: relative
}

.nav .notifications #notificationBtn:hover,.navbar-nav .notifications #notificationBtn:hover {
    background: hsla(0,0%,100%,.2);
    color: #fff
}

.nav .notifications #notificationBtn:focus,.navbar-nav .notifications #notificationBtn:focus {
    color: #fff
}

.nav .notifications #notificationBtn .button-badge-style,.navbar-nav .notifications #notificationBtn .button-badge-style {
    background-color: #fa3e3e;
    border-radius: 2px;
    color: #fff;
    font-size: 10px;
    padding: 1px 5px;
    position: absolute;
    right: -7px;
    top: -7px
}

.nav .notifications ::-webkit-scrollbar,.navbar-nav .notifications ::-webkit-scrollbar {
    width: 10px
}

.nav .notifications ::-webkit-scrollbar-thumb,.navbar-nav .notifications ::-webkit-scrollbar-thumb {
    background-color: #0a56a5;
    -webkit-transition: .2s;
    transition: .2s
}

@media(prefers-color-scheme: dark) {
    .nav .notifications ::-webkit-scrollbar-thumb,.navbar-nav .notifications ::-webkit-scrollbar-thumb {
        background-color:#2c3e50
    }
}

.nav .notifications ::-webkit-scrollbar-thumb:hover,.navbar-nav .notifications ::-webkit-scrollbar-thumb:hover {
    background-color: #0b63bd;
    -webkit-transition: .2s;
    transition: .2s
}

@media(prefers-color-scheme: dark) {
    .nav .notifications ::-webkit-scrollbar-thumb:hover,.navbar-nav .notifications ::-webkit-scrollbar-thumb:hover {
        background-color:#354b60
    }
}

.nav .notifications .mark-all-read,.navbar-nav .notifications .mark-all-read {
    color: #676767;
    cursor: pointer;
    float: right
}

.nav .notifications .dropdown-menu,.navbar-nav .notifications .dropdown-menu {
    border: 0;
    max-height: 700px;
    min-height: 230px;
    min-width: 400px;
    overflow-y: auto;
    padding: 0
}

.nav .notifications .dropdown-menu .no-notifications,.navbar-nav .notifications .dropdown-menu .no-notifications {
    padding: 14px
}

.nav .notifications .dropdown-menu li,.navbar-nav .notifications .dropdown-menu li {
    border-bottom: 1px solid #edeeee;
    cursor: pointer;
    line-height: 15px;
    padding: 14px 14px 9px
}

.nav .notifications .dropdown-menu li[data-url=""],.navbar-nav .notifications .dropdown-menu li[data-url=""] {
    cursor: default
}

@media(prefers-color-scheme: dark) {
    .nav .notifications .dropdown-menu li,.navbar-nav .notifications .dropdown-menu li {
        border-bottom:1px solid #000
    }
}

.nav .notifications .dropdown-menu li:last-child,.navbar-nav .notifications .dropdown-menu li:last-child {
    border-bottom: 0;
    border-radius: 0 0 10px 10px
}

.nav .notifications .dropdown-menu li.new,.navbar-nav .notifications .dropdown-menu li.new {
    background-color: #d6eefd;
    transition: .1s
}

@media(prefers-color-scheme: dark) {
    .nav .notifications .dropdown-menu li.new,.navbar-nav .notifications .dropdown-menu li.new {
        background-color:#1e3247
    }
}

.nav .notifications .dropdown-menu li.new:hover,.navbar-nav .notifications .dropdown-menu li.new:hover {
    background-color: #e0f2fd;
    transition: .1s
}

@media(prefers-color-scheme: dark) {
    .nav .notifications .dropdown-menu li.new:hover,.navbar-nav .notifications .dropdown-menu li.new:hover {
        background-color:#2b3b4f
    }
}

.nav .notifications .dropdown-menu li.read,.navbar-nav .notifications .dropdown-menu li.read {
    background-color: #d6eefd;
    transition: .1s
}

@media(prefers-color-scheme: dark) {
    .nav .notifications .dropdown-menu li.read,.navbar-nav .notifications .dropdown-menu li.read {
        background-color:#323232
    }
}

.nav .notifications .dropdown-menu li.read:last-child,.navbar-nav .notifications .dropdown-menu li.read:last-child {
    border-bottom-right-radius: 0
}

.nav .notifications .dropdown-menu li:hover,.navbar-nav .notifications .dropdown-menu li:hover {
    background-color: #f8f8f8
}

@media(prefers-color-scheme: dark) {
    .nav .notifications .dropdown-menu li:hover,.navbar-nav .notifications .dropdown-menu li:hover {
        background-color:#2b2b2b
    }
}

.nav .notifications .dropdown-menu li.category,.navbar-nav .notifications .dropdown-menu li.category {
    background-color: #2c3e50;
    color: #fff;
    cursor: default;
    font-size: 8px;
    height: 23px;
    letter-spacing: 2px;
    line-height: 23px;
    padding-bottom: 0;
    padding-top: 0;
    text-transform: uppercase
}

@media(prefers-color-scheme: dark) {
    .nav .notifications .dropdown-menu li.category,.navbar-nav .notifications .dropdown-menu li.category {
        background-color:#1d1d1d;
        color: #e5e5e5
    }
}

.nav .notifications .dropdown-menu li p,.navbar-nav .notifications .dropdown-menu li p {
    color: #4b4b4b;
    display: inline-block;
    font-size: 13px;
    line-height: 18px;
    margin: 0;
    width: calc(100% - 65px)
}

@media(prefers-color-scheme: dark) {
    .nav .notifications .dropdown-menu li p,.navbar-nav .notifications .dropdown-menu li p {
        color:#fff
    }
}

.nav .notifications .dropdown-menu li p b,.navbar-nav .notifications .dropdown-menu li p b {
    color: #000
}

@media(prefers-color-scheme: dark) {
    .nav .notifications .dropdown-menu li p b,.navbar-nav .notifications .dropdown-menu li p b {
        color:#fff
    }
}

.nav .notifications .dropdown-menu li .time,.navbar-nav .notifications .dropdown-menu li .time {
    color: #979797;
    display: block;
    font-size: 11px;
    margin-top: 2px
}

.nav .notifications .dropdown-menu li .mark-read,.navbar-nav .notifications .dropdown-menu li .mark-read {
    color: #9db2c8;
    cursor: pointer;
    position: absolute;
    right: 15px;
    transition: .2s
}

@media(prefers-color-scheme: dark) {
    .nav .notifications .dropdown-menu li .mark-read,.navbar-nav .notifications .dropdown-menu li .mark-read {
        color:rgba(199,224,250,.58)
    }
}

.nav .notifications .dropdown-menu li .mark-read:hover,.navbar-nav .notifications .dropdown-menu li .mark-read:hover {
    color: #0a56a5;
    transition: .2s
}

@media(prefers-color-scheme: dark) {
    .nav .notifications .dropdown-menu li .mark-read:hover,.navbar-nav .notifications .dropdown-menu li .mark-read:hover {
        color:#0b63bd
    }
}

.nav .notifications .dropdown-menu li.loading,.navbar-nav .notifications .dropdown-menu li.loading {
    -webkit-text-fill-color: transparent;
    -webkit-animation-duration: 4.2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-name: shimmer;
    background: #acacac -webkit-gradient(linear,100% 0,0 0,from(#acacac),color-stop(.5,#fff),to(#acacac));
    -webkit-background-clip: text;
    background-position: -4rem top;
    background-repeat: no-repeat;
    -webkit-background-size: 4rem 100%;
    color: #fff
}

.notification-list {
    margin: 0 auto;
    min-height: 500px;
    width: 80%
}

.lm-notifications .image {
    border-radius: 3px;
    display: inline-block;
    margin-right: 14px;
    margin-top: 2px;
    vertical-align: top;
    width: 30px
}

.lm-notifications .image.full {
    width: 100%!important
}

.lm-notifications .image .primary {
    max-width: 100%
}

.lm-notifications .image .secondary {
    box-shadow: -1px -1px 4px 0 rgba(0,0,0,.3);
    margin-left: 55%;
    margin-top: -70%;
    width: 62%
}

* {
    text-rendering: optimizeLegibility
}

*,html {
    -webkit-font-smoothing: antialiased
}

html {
    overflow-x: hidden
}

body {
    color: #707070;
    font-family: Inter,Arial,sans-serif;
    font-size: 14px;
    line-height: 24px
}

.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6 {
    color: #303030;
    font-family: Inter,Arial,serif;
    font-weight: 400;
    margin-top: 0
}

.h1,.h2,.h3,.h4,h1,h2,h3,h4 {
    margin-bottom: 15px
}

.h5,.h6,h5,h6 {
    margin-bottom: 10px
}

.h1,h1 {
    font-size: 42px;
    line-height: 52px
}

.h2,h2 {
    font-size: 36px;
    line-height: 44px
}

.h3,h3 {
    font-size: 30px;
    line-height: 38px
}

.h4,h4 {
    font-size: 24px;
    line-height: 32px
}

.h5,h5 {
    font-size: 18px;
    line-height: 24px
}

.h6,h6 {
    font-size: 14px;
    line-height: 20px
}

a,a:visited {
    transition: color .2s ease,background-color .2s ease,background .2s ease,border .2s ease,outline .2s ease,opacity .2s ease-in-out
}

a:hover {
    color: #4a4a4a
}

a:focus,a:hover {
    text-decoration: none
}

ul li {
    line-height: inherit
}

figure {
    margin: 0
}

figure img {
    height: auto;
    width: 100%
}

figure iframe {
    background-color: #f4f4f4;
    border: 0;
    overflow: hidden;
    width: 100%!important
}

video {
    height: auto
}

input[type=range][orient=vertical] {
    -webkit-appearance: slider-vertical;
    height: 175px;
    padding: 0 5px;
    width: 8px;
    writing-mode: bt-lr
}

.alert-success table {
    border-radius: 10px;
    margin-top: 20px
}

.color-primary {
    color: #0a56a5
}

@media(prefers-color-scheme: dark) {
    .color-primary {
        color:#0a56a5
    }
}

.btn-default {
    border-bottom: none
}

input.form-control.small-form-control {
    background-color: transparent!important;
    height: 30px;
    padding: 10px
}

.confetti:after,.confetti:before {
    background-repeat: no-repeat;
    content: "";
    display: block;
    height: 100%;
    left: -20%;
    position: absolute;
    transition: all .5s ease-in-out;
    width: 140%;
    z-index: -1000
}

.confetti:before {
    background-image: radial-gradient(circle,#ff0081 20%,transparent 0),radial-gradient(circle,transparent 20%,#ff0081 0,transparent 30%),radial-gradient(circle,#ff0081 20%,transparent 0),radial-gradient(circle,#ff0081 20%,transparent 0),radial-gradient(circle,transparent 10%,#ff0081 15%,transparent 20%),radial-gradient(circle,#ff0081 20%,transparent 0),radial-gradient(circle,#ff0081 20%,transparent 0),radial-gradient(circle,#ff0081 20%,transparent 0),radial-gradient(circle,#ff0081 20%,transparent 0);
    background-size: 10% 10%,20% 20%,15% 15%,20% 20%,18% 18%,10% 10%,15% 15%,10% 10%,18% 18%;
    display: none;
    top: -75%
}

.confetti:after {
    background-image: radial-gradient(circle,#ff0081 20%,transparent 0),radial-gradient(circle,#ff0081 20%,transparent 0),radial-gradient(circle,transparent 10%,#ff0081 15%,transparent 20%),radial-gradient(circle,#ff0081 20%,transparent 0),radial-gradient(circle,#ff0081 20%,transparent 0),radial-gradient(circle,#ff0081 20%,transparent 0),radial-gradient(circle,#ff0081 20%,transparent 0);
    background-size: 15% 15%,20% 20%,18% 18%,20% 20%,15% 15%,10% 10%,20% 20%;
    bottom: -75%;
    display: none
}

.confetti.animate:before {
    animation: topBubbles .75s ease-in-out forwards;
    display: block
}

.confetti.animate:after {
    animation: bottomBubbles .75s ease-in-out forwards;
    display: block
}

@keyframes topBubbles {
    0% {
        background-position: 5% 90%,10% 90%,10% 90%,15% 90%,25% 90%,25% 90%,40% 90%,55% 90%,70% 90%
    }

    50% {
        background-position: 0 80%,0 20%,10% 40%,20% 0,30% 30%,22% 50%,50% 50%,65% 20%,90% 30%
    }

    to {
        background-position: 0 70%,0 10%,10% 30%,20% -10%,30% 20%,22% 40%,50% 40%,65% 10%,90% 20%;
        background-size: 0 0,0 0,0 0,0 0,0 0,0 0
    }
}

@keyframes bottomBubbles {
    0% {
        background-position: 10% -10%,30% 10%,55% -10%,70% -10%,85% -10%,70% -10%,70% 0
    }

    50% {
        background-position: 0 80%,20% 80%,45% 60%,60% 100%,75% 70%,95% 60%,105% 0
    }

    to {
        background-position: 0 90%,20% 90%,45% 70%,60% 110%,75% 80%,95% 70%,110% 10%;
        background-size: 0 0,0 0,0 0,0 0,0 0,0 0
    }
}

.lm-alert-response {
    padding-bottom: 10vh;
    padding-top: 10vh
}

.lm-alert-response .form-icon {
    stroke: #fff;
    stroke-width: 2;
    stroke-miterlimit: 10;
    animation: fill .4s ease-in-out .4s forwards,scale .3s ease-in-out .9s both;
    border-radius: 50%;
    box-shadow: inset 0 0 0 #fff;
    display: block;
    height: 100px;
    margin: 0 auto;
    position: relative;
    right: 5px;
    top: 5px;
    width: 100px
}

.lm-alert-response .form-icon.success .checkmark-circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #fff;
    fill: transparent;
    animation: stroke .6s cubic-bezier(.65,0,.45,1) forwards
}

.lm-alert-response .form-icon.success .checkmark-check {
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke .3s cubic-bezier(.65,0,.45,1) .8s forwards;
    transform-origin: 50% 50%
}

.lm-alert-response .form-icon.error .error-circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #fff;
    animation: stroke .6s cubic-bezier(.65,0,.45,1) forwards
}

.lm-alert-response .form-icon.error .error-line1,.lm-alert-response .form-icon.error .error-line2 {
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke .3s cubic-bezier(.65,0,.45,1) .8s forwards
}

@keyframes stroke {
    to {
        stroke-dashoffset: 0
    }
}

@keyframes scale {
    0%,to {
        transform: none
    }

    50% {
        transform: scale3d(1.1,1.1,1)
    }
}

@keyframes fill {
    to {
        box-shadow: inset 0 0 0 30px #000
    }
}

a {
    text-decoration: none
}

#header {
    background: #0a56a5!important
}

#header .navbar-brand img {
    height: 50px!important;
    width: auto!important
}

#header .collapsing,#header .navbar-collapse.collapse.show {
    background-color: #0a56a5!important
}

body {
    letter-spacing: .3px
}

.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6,li,p,span {
    color: #fff
}

.lm-box-trans {
    background-clip: padding-box;
    background-color: hsla(0,0%,100%,.09);
    border: 8px solid rgba(180,160,161,.09);
    border-radius: 40px;
    z-index: 1
}

ul>li {
    list-style-type: none;
    padding: 0
}

.header .h3,.header h3 {
    font-size: 1.4rem;
    font-weight: 300
}

.header .h1,.header h1 {
    font-size: 2rem;
    margin-top: .2rem
}

a.btn-laby,button.btn-laby {
    background-color: #d7d8dd;
    border-color: #d7d8dd;
    color: #000;
    font-weight: bolder;
    padding: 6px 25px
}

.mt-4.text-center .btn-secondary {
    margin: 0 .25rem
}

.w-80 {
    width: 80%
}

.w-70 {
    width: 70%
}

.mb-n7 {
    margin-bottom: -7rem
}

.pt-7 {
    padding-top: 7rem!important
}

.pt-11 {
    padding-top: 11rem!important
}

.pt-16 {
    padding-top: 16rem
}

.mt-7 {
    margin-top: 7rem!important
}

.lm-form-switch {
    margin-bottom: 2rem
}

.lm-form-switch .form-check-input {
    background-color: #424053;
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPSczJyBmaWxsPScjZmZmJy8+PC9zdmc+);
    border-radius: 5rem;
    height: 2.5rem;
    width: 4.75rem
}

.lm-form-switch .form-check-input:checked {
    background-color: #646473;
    border-color: unset;
    box-shadow: none
}

.lm-form-switch .form-check-input:focus {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPSczJyBmaWxsPScjZmZmJy8+PC9zdmc+);
    border-color: unset;
    box-shadow: none
}

.form-check-input {
    clear: left
}

.ln-shadow {
    filter: drop-shadow(-8px 4px 6px rgba(0,0,0,.3))
}

a.btn.btn-secondary {
    background-color: #dce6f1;
    border: none;
    color: #0d0d0d;
    font-size: .9rem;
    font-weight: 700;
    padding: .5rem 2rem
}

a.btn.btn-secondary.download-btn {
    font-size: 1rem;
    padding: .6rem 2.4rem
}

a.btn.btn-secondary.download-btn i {
    margin-right: 10px
}

.center {
    margin-left: auto;
    margin-right: auto;
    text-align: center
}
.container__grid {
    -moz-column-gap: 1.25rem;
    column-gap: 1.25rem;
    display: grid;
    grid-template-columns: 4fr 4fr 4fr;
    grid-template-rows: .92fr .5fr .81fr .5fr .1fr;
    margin-top: 2rem;
    row-gap: 1.25rem
}

.container__grid .grid__cell-styling {
    background-clip: padding-box;
    background-color: hsla(0,0%,100%,.07);
    border-radius: 20px;
    padding: 2rem
}

.container__grid .grid__cell-styling.animation__element.waiting {
    opacity: 0
}

.container__grid .grid__cell-styling .grid__cell-styling--iconBox {
    background-color: #fff;
    border-radius: 10px;
    color: #000;
    display: inline-block;
    height: 2.5rem;
    text-align: center;
    width: 2.5rem
}

.container__grid .grid__cell-styling .grid__cell-styling--iconBox img {
    height: 2.3rem;
    margin-top: .1rem;
    width: 2.3rem
}

.container__grid .grid__cell-styling .grid__cell-styling--iconBox i {
    font-size: 25px;
    line-height: 40px
}

.container__grid .grid__cell-styling .grid__cell-styling--image {
    display: inline-block;
    float: right;
    height: 8rem;
    width: 8rem
}

.container__grid .grid__cell-styling .grid__cell-styling--badge {
    display: inline-block;
    float: right
}

.container__grid .grid__cell-styling .grid__cell-styling--badge .badge {
    font-size: 13.5px;
    height: 1.5rem;
    line-height: 13px;
    width: 3.9rem
}

.container__grid .grid__cell-styling .grid__cell-styling--heading {
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    margin: 2rem 0
}

.container__grid .grid__cell-styling .grid__cell-styling--text {
    color: hsla(0,0%,100%,.8);
    font-size: 16px;
    line-height: 24px
}

.container__grid .animation__fadeIn {
    animation-duration: 2s;
    animation-fill-mode: both
}

@keyframes fadeInSticky {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

.container__grid .animation__fadeIn .fadeInSticky {
    animation-name: fadeInSticky
}

@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translate3d(0,-50px,0)
    }

    to {
        opacity: 1;
        transform: none
    }
}

.container__grid .animation__fadeIn .fadeInDown {
    animation-name: fadeInDown
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translate3d(0,50px,0)
    }

    to {
        opacity: 1;
        transform: none
    }
}

.container__grid .animation__fadeIn .fadeInUp {
    animation-name: fadeInUp
}

@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translate3d(50px,0,0)
    }

    to {
        opacity: 1;
        transform: none
    }
}

.container__grid .animation__fadeIn .fadeInLeft {
    animation-name: fadeInLeft
}

@keyframes fadeInRight {
    0% {
        opacity: 0;
        transform: translate3d(-50px,0,0)
    }

    to {
        opacity: 1;
        transform: none
    }
}

.container__grid .animation__fadeIn .fadeInRight {
    animation-name: fadeInRight
}

.container__grid .animation__fadeIn.animation__fadeIn_Down {
    animation: fadeInDown
}

.container__grid #grid__cell-chat {
    background: linear-gradient(114.88deg,#389aff,#181624);
    display: flex;
    flex-direction: row-reverse;
    gap: 2.8rem;
    grid-column: 1/span 3;
    grid-row: 1;
    padding-left: 5rem
}

.container__grid #grid__cell-chat.in-view {
    animation: fadeInDown 2s
}

.container__grid #grid__cell-chat .grid__cell-styling--chat {
    display: flex;
    flex-basis: 76%
}

.container__grid #grid__cell-chat .grid__cell-styling--text-container {
    display: flex;
    flex-basis: 40%;
    flex-direction: column;
    justify-content: center
}

.container__grid #grid__cell-singleplayer,.container__grid #grid__cell-widgets {
    display: flex;
    flex-direction: row-reverse;
    grid-column: 1/span 3;
    grid-row: 5;
    padding: 0;
    position: relative
}

.container__grid #grid__cell-singleplayer.grid__cell-styling,.container__grid #grid__cell-widgets.grid__cell-styling {
    background: 0 0
}

.container__grid #grid__cell-singleplayer.in-view,.container__grid #grid__cell-widgets.in-view {
    animation: fadeInUp 2s
}

.container__grid #grid__cell-singleplayer .grid__cell-styling--chat,.container__grid #grid__cell-widgets .grid__cell-styling--chat {
    display: flex;
    flex-basis: 76%
}

.container__grid #grid__cell-singleplayer .grid__cell-styling--chat img,.container__grid #grid__cell-widgets .grid__cell-styling--chat img {
    align-self: center
}

.container__grid #grid__cell-singleplayer .grid__cell-styling--text-container,.container__grid #grid__cell-widgets .grid__cell-styling--text-container {
    background-color: rgba(13,17,24,.9);
    border-radius: 20px;
    bottom: -84px;
    left: 16px;
    padding: 1rem;
    position: absolute;
    width: 35%
}

.container__grid #grid__cell-singleplayer .grid__cell-styling--text-container .grid__cell-styling--heading,.container__grid #grid__cell-widgets .grid__cell-styling--text-container .grid__cell-styling--heading {
    margin-top: 1rem
}

.container__grid #grid__cell-feature1 {
    grid-column: 1;
    grid-row: 2/span 2
}

.container__grid #grid__cell-feature1.in-view {
    animation: fadeInRight 2s
}

.container__grid #grid__cell-feature2 {
    grid-column: 2;
    grid-row: 2/span 2;
    height: 100%
}

.container__grid #grid__cell-feature2.in-view {
    animation: fadeInSticky 2.5s
}

.container__grid #grid__cell-feature2 .screenshot {
    left: -25%;
    position: relative;
    width: 150%
}

.container__grid #grid__cell-feature2 .screenshot canvas {
    pointer-events: none!important;
    touch-action: unset!important
}

.container__grid #grid__cell-feature3 {
    grid-column: 3;
    grid-row: 2
}

.container__grid #grid__cell-feature3.in-view {
    animation: fadeInLeft 2s
}

.container__grid #grid__cell-feature4 {
    grid-column: 1;
    grid-row: 4
}

.container__grid #grid__cell-feature4.in-view {
    animation: fadeInRight 2s
}

.container__grid #grid__cell-feature5 {
    grid-column: 3;
    grid-row: 3/span 2
}

.container__grid #grid__cell-feature5.in-view {
    animation: fadeInLeft 2.5s
}

.container__grid #grid__cell-feature6 {
    grid-column: 1;
    grid-row: 4;
    position: relative
}

.container__grid #grid__cell-feature6.in-view {
    animation: fadeInRight 2s
}

.container__grid #grid__cell-feature6 .ingame-account-manager {
    bottom: 0;
    cursor: default;
    margin-left: -2rem;
    position: absolute;
    width: 100%
}

.container__grid #grid__cell-feature6 .ingame-account-manager .account-section {
    display: flow-root;
    position: relative;
    width: 100%
}

.container__grid #grid__cell-feature6 .ingame-account-manager .account-section .account-box {
    background-color: #050505;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    float: right;
    margin-right: 20px;
    padding: 3px;
    width: 180px
}

.container__grid #grid__cell-feature6 .ingame-account-manager .account-section .account-box .account {
    padding: 7px;
    transition: all .3s
}

.container__grid #grid__cell-feature6 .ingame-account-manager .account-section .account-box .account:hover {
    background-color: hsla(236,6%,48%,.2);
    border-radius: 10px
}

.container__grid #grid__cell-feature6 .ingame-account-manager .user-line {
    background-color: #141414;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flow-root;
    padding-bottom: 12px;
    position: relative;
    width: 100%
}

.container__grid #grid__cell-feature6 .ingame-account-manager .user-line .current-user-box {
    background-color: #050505;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    float: right;
    margin-right: 20px;
    padding: 10px 10px 7px;
    width: 180px
}

.container__grid #grid__cell-feature6 .ingame-account-manager .user .username {
    font-size: 15px;
    font-weight: 700;
    margin-left: 5px;
    margin-right: 20px;
    vertical-align: middle
}

.container__grid #grid__cell-feature6 .ingame-account-manager .user i {
    color: #fff;
    vertical-align: middle
}

.container__grid #grid__cell-feature7 {
    grid-column: 2;
    grid-row: 4
}

.container__grid #grid__cell-feature7.in-view {
    animation: fadeInSticky 2s
}

.container__grid .grid__cell-singleplayer {
    grid-column: 1;
    grid-row: 8
}

@media(max-width: 1000px) {
    .container__grid {
        grid-template-columns:100%;
        grid-template-rows: unset
    }

    .container__grid #grid__cell-chat {
        flex-direction: column-reverse;
        grid-column: 1;
        grid-row: 1;
        padding-left: 2rem
    }

    .container__grid #grid__cell-feature1 {
        grid-column: 1;
        grid-row: 2
    }

    .container__grid #grid__cell-feature2 {
        grid-column: 1;
        grid-row: 3
    }

    .container__grid #grid__cell-feature3 {
        grid-column: 1;
        grid-row: 4
    }

    .container__grid #grid__cell-feature4 {
        grid-column: 1;
        grid-row: 5
    }

    .container__grid #grid__cell-feature5 {
        grid-column: 1;
        grid-row: 6
    }

    .container__grid #grid__cell-feature6 {
        grid-column: 1;
        grid-row: 7
    }

    .container__grid #grid__cell-feature7 {
        grid-column: 1;
        grid-row: 8
    }

    .container__grid #grid__cell-singleplayer,.container__grid #grid__cell-widgets {
        flex-direction: column;
        grid-column: 1;
        grid-row: 9;
        overflow: hidden
    }

    .container__grid #grid__cell-singleplayer.grid__cell-styling,.container__grid #grid__cell-widgets.grid__cell-styling {
        background-color: hsla(0,0%,100%,.07)
    }

    .container__grid #grid__cell-singleplayer .grid__cell-styling--text-container,.container__grid #grid__cell-widgets .grid__cell-styling--text-container {
        background-color: unset;
        position: static;
        top: unset;
        width: unset
    }
}

.cosmetics__container h1,.cosmetics__container h3 {
    margin-bottom: 1rem
}

.cosmetics__container .cosmetics-header {
    margin-bottom: 0
}

@media screen and (min-width: 768px) {
    .cosmetics__container .cosmetics-header {
        margin-bottom:-122px
    }
}

@media screen and (min-width: 576px) {
    .cosmetics__container .cosmetics-header {
        margin-bottom:-90px
    }
}

.cosmetics__container select {
    border: 1px solid #0a0e11;
    color: #e2e2e2
}

.cosmetics__container .btn-check:active+.btn,.cosmetics__container .btn-check:checked+.btn {
    background-color: #0a56a5
}

.cosmetics__container .cosmetics__container-styling:not(:last-of-type) {
    margin-bottom: 2rem
}

.cosmetics__container .cosmetics__container-styling {
    display: flex
}

.cosmetics__container .cosmetics__container-styling .cosmetics__styling--canvas {
    flex-basis: 75%
}

.cosmetics__container .cosmetics__container-styling .cosmetics__styling--canvas canvas#cosmetics__canvas-wings {
    margin-left: 10rem
}

.cosmetics__container .cosmetics__container-styling .cosmetics__styling--text {
    display: flex;
    flex-basis: 50%;
    flex-direction: column;
    justify-content: center
}

.cosmetics__container .cosmetics__container-styling .cosmetics__styling--text.lm-box-trans {
    align-self: center;
    max-height: 15rem;
    padding: 2rem
}

.cosmetics__container .cosmetics__container-styling .cosmetics__styling--text h3 {
    font-size: 1.7rem;
    margin-bottom: .5rem;
    text-align: center
}

.cosmetics__container .cosmetics__container-styling.reverse {
    flex-direction: row-reverse
}

@media(max-width: 1280px) {
    .bg-section-3.pt-16 {
        padding-top:8rem!important
    }
}

@media(max-width: 450px) {
    .cosmetics__container h3 {
        line-height:20px
    }

    .cosmetics__container .cosmetics__container-styling,.cosmetics__container .cosmetics__container-styling.reverse {
        flex-direction: column
    }

    .cosmetics__container .cosmetics__container-styling .cosmetics__styling--canvas #cosmetics__canvas-pets,.cosmetics__container .cosmetics__container-styling.reverse .cosmetics__styling--canvas #cosmetics__canvas-pets {
        margin-left: 2rem
    }

    .cosmetics__container .cosmetics__container-styling .cosmetics__styling--canvas #cosmetics__canvas-wings,.cosmetics__container .cosmetics__container-styling.reverse .cosmetics__styling--canvas #cosmetics__canvas-wings {
        margin-bottom: 1rem;
        margin-left: 1rem;
        margin-top: 2rem
    }

    .cosmetics__container .cosmetics__container-styling .cosmetics__styling--canvas #cosmetics__canvas-aura,.cosmetics__container .cosmetics__container-styling.reverse .cosmetics__styling--canvas #cosmetics__canvas-aura {
        margin-bottom: 1.5rem;
        margin-left: 2.75rem;
        margin-top: 3rem
    }

    .cosmetics__container .cosmetics__container-styling .cosmetics__styling--text p,.cosmetics__container .cosmetics__container-styling.reverse .cosmetics__styling--text p {
        margin-top: 1rem;
        text-align: center
    }
}

.container__voicechat {
    margin-bottom: 12rem;
    margin-top: 12rem
}

.container__voicechat .container.lm-box-trans {
    background: linear-gradient(156deg,#491c5e,#1d65a9 72%);
    border: none;
    border-radius: 20px;
    max-height: 20rem
}

@keyframes floating-circular {
    0% {
        transform: rotate(0) translateX(5px)
    }

    to {
        transform: rotate(1turn) translateX(5px) rotate(-1turn)
    }
}

@keyframes floating-vertical-left {
    0% {
        transform: translateY(58%)
    }

    50% {
        transform: translateY(54%)
    }

    to {
        transform: translateY(58%)
    }
}

@keyframes floating-vertical-right {
    0% {
        transform: translateY(55%)
    }

    50% {
        transform: translateY(57%)
    }

    to {
        transform: translateY(55%)
    }
}

.container__voicechat .container.lm-box-trans .floating-island {
    bottom: 50%;
    position: absolute
}

.container__voicechat .container.lm-box-trans .voicechat-island-left-wrapper {
    animation: floating-vertical-left 8s infinite;
    height: 150%;
    left: -6rem;
    transform: translateX(-50%)
}

.container__voicechat .container.lm-box-trans .voicechat-island-left-wrapper .voicechat-island-left {
    height: 100%
}

.container__voicechat .container.lm-box-trans .voicechat-island-left-wrapper .voicechat-speaker-left {
    height: 5.68%;
    left: 82%;
    position: absolute;
    top: 1%
}

.container__voicechat .container.lm-box-trans .voicechat-island-right-wrapper {
    animation: floating-vertical-right 6s infinite;
    height: 170%;
    right: -9rem;
    transform: translateX(50%)
}

.container__voicechat .container.lm-box-trans .voicechat-island-right-wrapper .voicechat-island-right {
    height: 100%
}

.container__voicechat .container.lm-box-trans .voicechat-island-right-wrapper .voicechat-speaker-right {
    height: 5.68%;
    left: 40%;
    position: absolute;
    top: 0
}

.container__voicechat .container .voicechat__text-container {
    padding-bottom: 4rem;
    padding-top: 4rem;
    text-align: center
}

.container__voicechat .container .voicechat__text-container h1 {
    margin-bottom: 2rem
}

.container__voicechat .container .voicechat__text-container p {
    color: hsla(0,0%,100%,.8);
    font-size: 20px;
    line-height: 30px
}

@media(max-width: 1280px) {
    .container__voicechat {
        margin-top:16rem
    }

    .container__voicechat .container .voicechat__text-container {
        padding-top: 1rem
    }

    .container__voicechat .container.lm-box-trans .voicechat-island-left-wrapper {
        left: -9rem
    }

    .container__voicechat .container.lm-box-trans .voicechat-island-right-wrapper {
        right: -13rem
    }

    .container__voicechat .container.lm-box-trans .voicechat__text-container {
        padding-left: 8rem!important;
        padding-right: 8rem!important;
        padding-top: 2rem
    }
}

@media(max-width: 1000px) {
    .container__voicechat .container.lm-box-trans .voicechat-island-left-wrapper {
        left:-11rem
    }

    .container__voicechat .container.lm-box-trans .voicechat-island-right-wrapper {
        right: -15rem
    }

    .container__voicechat .container.lm-box-trans .voicechat__text-container {
        padding-bottom: 2rem;
        padding-top: 3rem
    }

    .container__voicechat .container.lm-box-trans .voicechat__text-container h1 {
        font-size: 37px
    }

    .container__voicechat .container.lm-box-trans .voicechat__text-container p {
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 0
    }
}

@media(max-width: 768px) {
    .container__voicechat {
        margin-bottom:8rem
    }

    .container__voicechat .container.lm-box-trans img {
        display: none!important
    }

    .container__voicechat .container.lm-box-trans .voicechat__text-container {
        padding-left: 2rem!important;
        padding-right: 2rem!important;
        padding-top: 2rem
    }

    .container__voicechat .container.lm-box-trans .voicechat__text-container h1 {
        font-size: 32px;
        line-height: 37px
    }

    .container__voicechat .container.lm-box-trans .voicechat__text-container p {
        font-size: 16px;
        line-height: 22px
    }
}

@media(max-width: 667px) {
    .container__voicechat {
        margin-top:3rem;
        padding-left: 0;
        padding-right: 0
    }

    .container__voicechat .container .voicechat__text-container {
        padding-left: 2rem;
        padding-right: 2rem
    }
}

.mc-color.mc-0 {
    color: #000
}

.mc-color.mc-0,.mc-color.mc-1 {
    font-style: normal;
    font-weight: 400;
    text-decoration: none
}

.mc-color.mc-1 {
    color: #00a
}

.mc-color.mc-2 {
    color: #0a0
}

.mc-color.mc-2,.mc-color.mc-3 {
    font-style: normal;
    font-weight: 400;
    text-decoration: none
}

.mc-color.mc-3 {
    color: #0aa
}

.mc-color.mc-4 {
    color: #a00
}

.mc-color.mc-4,.mc-color.mc-5 {
    font-style: normal;
    font-weight: 400;
    text-decoration: none
}

.mc-color.mc-5 {
    color: #a0a
}

.mc-color.mc-6 {
    color: #fa0
}

.mc-color.mc-6,.mc-color.mc-7 {
    font-style: normal;
    font-weight: 400;
    text-decoration: none
}

.mc-color.mc-7 {
    color: #aaa
}

.mc-color.mc-8 {
    color: #555
}

.mc-color.mc-8,.mc-color.mc-9 {
    font-style: normal;
    font-weight: 400;
    text-decoration: none
}

.mc-color.mc-9 {
    color: #55f
}

.mc-color.mc-a {
    color: #5f5
}

.mc-color.mc-a,.mc-color.mc-b {
    font-style: normal;
    font-weight: 400;
    text-decoration: none
}

.mc-color.mc-b {
    color: #5ff
}

.mc-color.mc-c {
    color: #f55
}

.mc-color.mc-c,.mc-color.mc-d {
    font-style: normal;
    font-weight: 400;
    text-decoration: none
}

.mc-color.mc-d {
    color: #f5f
}

.mc-color.mc-e {
    color: #ff5
}

.mc-color.mc-e,.mc-color.mc-f {
    font-style: normal;
    font-weight: 400;
    text-decoration: none
}

.mc-color.mc-f {
    color: #fff
}

.mc-color {
    color: unset
}

.mc-r {
    color: #fff;
    font-style: normal;
    font-weight: 400;
    text-decoration: none
}

.mc-l {
    font-weight: 700
}

.mc-m {
    text-decoration: line-through
}

.mc-n {
    text-decoration: underline
}

.mc-o {
    font-style: italic
}

.chat-container {
    -webkit-touch-callout: none;
    max-height: 500px;
    min-height: 400px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.chat-container img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none
}

.chat-container .chat-selector {
    background-color: #0d0d0d;
    border-radius: 10px 10px 0 0;
    cursor: grab
}

.chat-container .chat-selector:active {
    cursor: grabbing
}

.chat-container .chat-selector .chat-selector-item {
    cursor: pointer;
    font-weight: 700;
    text-align: center;
    transition: background-color .2s linear
}

.chat-container .chat-selector .chat-selector-item span {
    height: -moz-fit-content;
    height: fit-content;
    margin-left: 5px;
    margin-right: 5px
}

.chat-container .chat-selector .chat-selector-item.chat-selector-user .chat-selector-icon {
    image-rendering: pixelated
}

.chat-container .chat-selector .chat-selector-item:first-child {
    border-radius: 10px 0 0 0
}

.chat-container .chat-selector .chat-selector-item:hover {
    background-color: hsla(0,0%,5%,.93)
}

.chat-container .chat-selector .chat-selector-item.active {
    background-color: #0d4a74
}

.chat-container .chat-selector .chat-selector-item.active:hover {
    background-color: rgba(13,74,116,.8)
}

.chat-container .chat-selector .chat-selector-item.chat-selector-add {
    background-color: #202021;
    border-radius: 0 10px 0 0;
    cursor: not-allowed
}

.chat-container .chat-selector .chat-selector-item.chat-selector-add:hover {
    background-color: rgba(32,32,33,.9)
}

.chat-container .chat-selector .chat-selector-item.chat-selector-add .chat-selector-add-icon {
    width: 30px
}

.chat-container .chat {
    background-color: rgba(5,5,6,.7);
    border-radius: 0 0 10px 10px;
    bottom: 40px;
    overflow-x: hidden;
    overflow-y: scroll;
    position: absolute;
    top: 40px;
    width: 100%
}

.chat-container .chat .chat-messages {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 2px;
    min-height: 99%;
    overflow-x: hidden;
    position: absolute;
    width: 100%
}

.chat-container .chat .chat-messages .server-message {
    color: #fff;
    padding-left: 10px;
    padding-right: 10px
}

.chat-container .chat .chat-messages .server-message:first-child {
    margin-top: auto;
    padding-top: 10px
}

.chat-container .chat .chat-messages .server-message:last-child {
    padding-bottom: 10px
}

.chat-container .chat .chat-messages .chat-message {
    color: #fff;
    display: flex;
    height: auto;
    margin: 8px 0 0;
    overflow: hidden;
    padding-left: 20px;
    padding-right: 20px;
    width: 70%
}

.chat-container .chat .chat-messages .chat-message:first-child {
    margin-top: auto;
    padding-top: 20px
}

.chat-container .chat .chat-messages .chat-message:last-child {
    padding-bottom: 20px
}

.chat-container .chat .chat-messages .chat-message .user {
    display: flex;
    height: 20px;
    margin-bottom: 10px;
    position: relative
}

.chat-container .chat .chat-messages .chat-message .user .avatar {
    height: 24px;
    image-rendering: pixelated;
    order: 1;
    width: 24px
}

.chat-container .chat .chat-messages .chat-message .user .text {
    display: flex;
    height: 20px;
    order: 2
}

.chat-container .chat .chat-messages .chat-message .user .text .username {
    color: #fff;
    font-weight: 700;
    margin-left: 10px;
    margin-right: 10px;
    order: 1
}

.chat-container .chat .chat-messages .chat-message .user .text .time {
    color: #989898;
    order: 2
}

.chat-container .chat .chat-messages .chat-message .message {
    background-color: hsla(0,0%,8%,.8);
    border-radius: 0 10px 10px 10px;
    font-weight: 700;
    margin-left: 30px
}

.chat-container .chat .chat-messages .me {
    align-self: end
}

.chat-container .chat .chat-messages .me .user {
    justify-content: end
}

.chat-container .chat .chat-messages .me .user .text .username {
    order: 2
}

.chat-container .chat .chat-messages .me .user .text .time {
    order: 1
}

.chat-container .chat .chat-messages .me .user .avatar {
    order: 3
}

.chat-container .chat .chat-messages .me .message {
    background-color: #1167a3;
    border-radius: 10px 0 10px 10px;
    margin-right: 30px
}

.chat-container .chat-input-wrapper {
    bottom: 0;
    position: absolute;
    width: 100%
}

.chat-container .chat-input-wrapper .chat-input {
    background-color: hsla(0,0%,8%,.8);
    border: none;
    border-radius: 10px;
    color: #fff;
    height: 35px;
    outline: none;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%
}

.chat-container .chat-input-wrapper .chat-input:focus {
    background-color: hsla(0,0%,8%,.9);
    border: none
}

@keyframes slider {
    0% {
        transform: translateY(100%)
    }

    to {
        transform: translateY(-100%)
    }
}

.drag-transition {
    transition: transform .3s ease-in-out
}

@media(max-width: 576px) {
    .chat-container .chat .chat-messages .chat-message,.chat-container .chat .chat-messages .me .chat-message {
        width:100%
    }

    .chat-container .chat .chat-messages .chat-message .message,.chat-container .chat .chat-messages .me .chat-message .message {
        width: 75%;
        word-break: break-word
    }
}

.version-section .carousel-item {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center
}

.version-section .carousel-item img {
    height: 200px
}

.version-section .version-blocks {
    margin-top: 1rem
}

.version-section .version-blocks span {
    background-color: hsla(0,0%,100%,.07);
    border-radius: 10px;
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 3.5rem;
    min-width: 4rem;
    padding: 0 .5rem;
    text-align: center
}

.grid.version-blocks {
    gap: var(--bs-gap,1rem)
}

@media(max-width: 576px) {
    .version-section {
        margin-top:10rem
    }

    .version-section .version-blocks span {
        font-size: 1.5rem;
        line-height: 2.5rem;
        min-width: 4rem;
        padding: .25rem
    }
}

.container__blog {
    margin-bottom: 6rem;
    text-align: left
}

.container__blog .container__blog-content {
    margin: auto;
    padding: 3rem;
    position: relative
}

.container__blog .container__blog-content .heading {
    padding: 1rem 3rem;
    text-align: center
}

@media(max-width: 667px) {
    .container__blog .container__blog-content .heading {
        padding:0
    }
}

.container__blog .container__blog-content a {
    text-decoration: none
}

.container__blog .container__blog-content #blog-glide {
    margin-top: 20px
}

.container__blog .container__blog-content .blog-preview {
    margin-left: auto;
    margin-right: auto;
    transition: all .1s;
    width: 80%
}

.container__blog .container__blog-content .blog-preview p {
    margin-bottom: unset
}

.container__blog .container__blog-content .blog-preview img {
    border-radius: 15px;
    margin-bottom: 15px
}

.container__blog .container__blog-content .blog-preview:hover {
    opacity: .8
}

.container__blog .container__blog-content .blog-preview time {
    color: #999;
    display: block;
    font-size: 12px;
    text-align: right;
    width: 100%
}

.container__blog .container__blog-content .beta__content-heading h1 {
    font-size: 38px;
    margin-bottom: 0
}

.container__blog .container__blog-content .beta__content-heading h3 {
    color: hsla(0,0%,100%,.6);
    font-size: 26px
}

.widget-container {
    -webkit-touch-callout: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    max-height: 500px;
    min-height: 400px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.widget-container .widget-editor-background {
    background-image: url(/page/static/images/widget-editor-background.2c21d202.png);
    background-position: bottom;
    background-size: cover;
    border-radius: 20px;
    height: 500px;
    position: relative;
    touch-action: unset;
    width: 100%
}

.widget-container .widget-editor-background.lines {
    outline: 4px solid #fff;
    outline-offset: -9px
}

.widget-container .widget-editor-background .widget-bg {
    height: 94%;
    position: absolute;
    right: 2%
}

.widget-container .widget-editor-background div.module {
    font-size: 1.2rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,.85)
}

@media(max-width: 993px) {
    .widget-container .widget-editor-background div.module {
        font-size:1rem
    }
}

@media(max-width: 768px) {
    .widget-container .widget-editor-background div.module {
        font-size:1rem
    }
}

@media(max-width: 576px) {
    .widget-container .widget-editor-background div.module {
        font-size:.8rem
    }
}

.widget-container .widget-editor-background .rendered-widget {
    position: absolute;
    white-space: nowrap
}

.widget-container .widget-editor-background .widget-editor {
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    background-color: rgba(40,44,51,.6);
    border-radius: 10px;
    height: 84%;
    left: 5%;
    overflow: hidden;
    position: absolute;
    top: 10%;
    width: 30%;
    z-index: 100
}

@media(max-width: 993px) {
    .widget-container .widget-editor-background .widget-editor {
        height:114.7%;
        right: -5.7%;
        scale: .8;
        top: -7.4%;
        width: 68.4%
    }
}

@media(max-width: 768px) {
    .widget-container .widget-editor-background .widget-editor {
        height:114.8%;
        right: -5.3%;
        scale: .8;
        top: -7.4%;
        width: 71.2%
    }
}

@media(max-width: 576px) {
    .widget-container .widget-editor-background .widget-editor {
        height:140.8%;
        right: -15%;
        scale: .65;
        top: -19.8%;
        width: 105.4%
    }
}

.widget-container .widget-editor-background .widget-editor .trashcan {
    opacity: 0;
    transition: opacity .1s ease-in-out;
    visibility: hidden
}

.widget-container .widget-editor-background .widget-editor .trashcan i {
    font-size: 7rem
}

.widget-container .widget-editor-background .widget-editor .bar {
    background-color: rgba(18,24,36,.6);
    border-radius: 10px 10px 0 0;
    cursor: grab;
    height: 35px;
    position: relative
}

.widget-container .widget-editor-background .widget-editor .bar:active {
    cursor: grabbing
}

.widget-container .widget-editor-background .widget-editor .bar .title {
    font-weight: 700;
    left: 15px;
    position: absolute;
    top: 5px
}

.widget-container .widget-editor-background .widget-editor .bar .search {
    background-color: #b8babe;
    border: none;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    position: absolute;
    right: 4px;
    top: 5px
}

.widget-container .widget-editor-background .widget-editor .bar .search:focus {
    outline: none
}

.widget-container .widget-editor-background .widget-editor .content {
    height: calc(100% - 35px);
    overflow-x: hidden;
    overflow-y: hidden;
    padding: 15px;
    transition: opacity .1s ease-in-out
}

.widget-container .widget-editor-background .widget-editor .content .category {
    padding-bottom: 10px
}

.widget-container .widget-editor-background .widget-editor .content .category .category-title {
    display: block;
    font-weight: 700;
    line-height: 10px
}

.widget-container .widget-editor-background .widget-editor .content .category .category-sub-title {
    color: #afacb4;
    display: block
}

.widget-container .widget-editor-background .widget-editor .content .grid {
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(auto-fill,170px)
}

.widget-container .widget-editor-background .widget-editor .content .grid:first-child {
    animation: alternate
}

.widget-container .widget-editor-background .widget-editor .content .grid .widget {
    align-items: center;
    background-color: hsla(236,6%,48%,.5);
    border: 1px solid rgba(58,59,70,.9);
    border-radius: 5px;
    cursor: grab;
    display: flex;
    height: 40px;
    image-rendering: pixelated;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    width: 170px
}

.widget-container .widget-editor-background .widget-editor .content .grid .widget:hover {
    background-color: hsla(233,7%,55%,.5)
}

.widget-container .widget-editor-background .widget-editor .content .grid .widget:active {
    cursor: grabbing
}

.widget-container .widget-editor-background .widget-editor .content .grid .widget.disabled {
    background-color: rgba(75,76,70,.5);
    cursor: not-allowed
}

.widget-container .widget-editor-background .widget-editor .content .grid .widget span.name {
    font-size: 12px;
    margin-top: 2px;
    white-space: nowrap
}

.widget-container .widget-editor-background .widget-editor .content .grid .widget .icon {
    margin-left: 5px;
    margin-right: 8px;
    margin-top: 5px
}

.reset-transition {
    transition: left .3s ease-in-out,top .3s ease-in-out
}

.addons-container {
    background-clip: padding-box;
    background-color: hsla(0,0%,100%,.09);
    border: 8px solid rgba(180,160,161,.09);
    border-radius: 40px;
    padding: 4rem
}

.addons-container .sub-heading {
    text-align: center
}

.addons-container .addon-container {
    background-size: cover;
    border-radius: 10px;
    height: 160px;
    margin-top: 20px;
    position: relative
}

.addons-container .addon-container .layer {
    background-color: rgba(0,0,0,.6);
    border-radius: 10px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: .3s;
    width: 100%
}

.addons-container .addon-container .layer:hover {
    background-color: rgba(40,44,51,.1)
}

.addons-container .addon-container .layer .addon-info {
    height: 100%;
    padding: 10px
}

.addons-container .addon-container .layer .addon-info img.icon {
    border-radius: 10px;
    height: 100px;
    margin-top: 40px
}

.addons-container .addon-container .layer .addon-info .info {
    display: inline-block;
    margin-bottom: 0;
    margin-top: 30px
}

.addons-container .addon-container .layer .addon-info .info .stars {
    display: block;
    font-size: 10px;
    opacity: .7
}

.addons-container .addon-container .layer .addon-info .info .stars i {
    color: #ff0
}

.addons-container .addon-container .layer .addon-info .info .title {
    font-size: 22px;
    font-weight: 700;
    line-height: 0;
    margin-bottom: 0;
    margin-top: 10px
}

.addons-container .addon-container .layer .addon-info .info .desc {
    color: #cecece;
    font-size: 12px;
    height: 56px;
    line-height: 14px;
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis
}

.glide {
    box-sizing: border-box;
    position: relative;
    width: 100%
}

.glide * {
    box-sizing: inherit
}

.glide__slides,.glide__track {
    overflow: hidden
}

.glide__slides {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    touch-action: pan-Y;
    transform-style: preserve-3d;
    white-space: nowrap;
    width: 100%;
    will-change: transform
}

.glide__slide,.glide__slides--dragging {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.glide__slide {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    flex-shrink: 0;
    height: 100%;
    white-space: normal;
    width: 100%
}

.glide__slide a {
    -webkit-user-drag: none;
    -webkit-user-select: none;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none
}

.glide__arrows,.glide__bullets {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.glide--rtl {
    direction: rtl
}

body {
    -webkit-font-smoothing: antialiased;
    background-color: #080f16;
    background-image: url(/page/static/images/lm4_website_bg.5575359f.jpg);
    background-image: -webkit-image-set(url(/page/static/images/lm4_website_bg.7da273cc.avif) 1x,url(/page/static/images/lm4_website_bg.f5d5076a.webp) 1x,url(/page/static/images/lm4_website_bg.5575359f.jpg) 1x);
    background-image: image-set(url(/page/static/images/lm4_website_bg.7da273cc.avif) 1x,url(/page/static/images/lm4_website_bg.f5d5076a.webp) 1x,url(/page/static/images/lm4_website_bg.5575359f.jpg) 1x);
    background-position-y: 40rem;
    background-repeat: no-repeat;
    background-size: contain
}

img {
    -webkit-touch-callout: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
}

#header {
    padding-top: 1rem
}

#lm4-header {
    height: 43rem;
    position: absolute;
    top: 0;
    width: 100%
}

#lm4-header.with-banner {
    margin-top: 25px
}

.bg-glow {
    background: url(/page/static/images/lm4_glow_small.e2cab8d1.png) no-repeat;
    background-position: 0 0;
    background-size: cover;
    height: 2000px;
    left: -500px;
    position: absolute;
    right: 0;
    top: -470px;
    z-index: 0
}

h1 {
    font-size: 52px;
    font-weight: 600
}

@media(max-width: 667px) {
    h1 {
        font-size:42px
    }
}

p.sub-heading {
    color: hsla(0,0%,100%,.6);
    font-size: 20px;
    line-height: 30px
}

.btn-plus {
    background-color: #f7cc50;
    border-color: #7d6e44;
    color: #000;
    font-size: .9rem;
    font-weight: 700;
    margin-left: 10px;
    padding: .5rem 1rem
}

#index-video {
    max-width: 100%
}

.bg-section-1 .gradient__main {
    background-image: url(/page/static/images/lm4_website_overlay_blue.47502d8a.png);
    background: linear-gradient(180deg,#0a56a5 42rem,transparent 0);
    margin-top: 0!important;
    max-width: unset;
    padding-top: 10rem
}

.bg-section-1 .gradient__main .grid {
    margin-left: auto;
    margin-right: auto;
    max-width: 1250px
}

.bg-section-1 .gradient__main .grid h3 {
    line-height: 20px;
    margin-bottom: 0!important;
    padding-top: 4rem
}

.bg-section-1 .gradient__main .grid h3 strong {
    font-weight: 700
}

.bg-section-1 .gradient__main .grid h1 {
    margin-bottom: 0!important
}

.bg-section-1 .gradient__main .grid .download-subtitle {
    color: #fff;
    display: block;
    font-size: .7rem
}

.bg-section-2 h1,.bg-section-3 h1 {
    line-height: 60px
}

.performance__list {
    margin-top: 2rem
}

.performance__list ul {
    padding-left: 0
}

.performance__list p {
    display: inline-block;
    font-size: 1.4rem;
    line-height: 28px;
    vertical-align: middle
}

@media(max-width: 667px) {
    .performance__list p {
        font-size:1rem
    }
}

@media(max-width: 993px) {
    .performance__list p {
        font-size:1rem
    }
}

.performance__list i {
    color: #0d6efd;
    font-size: 2rem;
    margin-right: 1.5rem
}

.performance-comparison {
    padding-left: 3rem!important;
    padding-right: 3rem!important
}

.performance-comparison .grid {
    gap: unset
}

.performance-comparison .grid.mb-2 {
    min-height: 3rem
}

.performance-comparison .icon {
    align-self: center;
    color: #fff;
    font-size: 1.9rem
}

.performance-comparison .icon#icon__laby img {
    filter: drop-shadow(0 0 10px #1b77bd);
    width: 35px
}

.performance-comparison .icon#icon__minecraft img {
    width: 35px
}

.performance-comparison .row:not(:first-child) .progress-bar {
    background-color: grey!important
}

.performance-comparison .grid .g-col-1 {
    grid-column: 1;
    margin-top: 0;
    text-align: center;
    width: 42px
}

.performance-comparison .grid .ps-4 {
    grid-column: 2/span 11;
    padding-left: 1rem!important
}

.performance-comparison p.text__hint-fps {
    color: #4b5c74;
    font-size: .85rem;
    font-weight: 500;
    margin-bottom: 0;
    margin-left: .3rem;
    margin-top: 1rem
}

.performance-comparison .progress {
    background-color: unset;
    border-radius: .55rem;
    height: .8rem
}

.performance-comparison .progress .progress-bar {
    background-color: #93999f;
    border-radius: .55rem
}

.performance-comparison .progress .progress-bar.w-20 {
    width: 20%!important
}

.performance-comparison .progress .progress-bar.w-50 {
    width: 50%!important
}

.performance-comparison .progress .progress-bar.w-67 {
    width: 67%!important
}

.performance-comparison .progress .progress-bar.highlighted {
    background-color: #0d6efd
}

.performance-comparison .fps {
    font-size: .9rem;
    font-weight: 600
}

.style-comparison.mt-7 {
    margin-top: 3rem!important
}

.style-comparison .switch-state-label span {
    display: block;
    height: 100%;
    margin-top: .7em
}

.container__image-switcher {
    overflow: hidden
}

.container__image-switcher .image-switcher {
    aspect-ratio: 2559/1389;
    border-radius: 20px;
    height: auto;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    transform: scale(1.7) rotate(-5deg) translate(1%,14%)
}

.image-switcher img {
    height: auto;
    position: absolute;
    width: 200%
}

.btn-cosmetic {
    border: 1px solid #0a0e11
}

#customizer-options {
    display: none
}

.switch-active {
    margin-left: -100%
}

.switch-blur {
    animation: blur .5s cubic-bezier(.61,.26,.28,.87)
}

.switch-background {
    transition: margin-left .5s cubic-bezier(1,0,0,1)
}

.switch-foreground {
    transition: margin-left .5s cubic-bezier(.61,.26,.28,.87)
}

@keyframes blur {
    0% {
        -webkit-filter: brightness(1) blur(0)
    }

    50% {
        -webkit-filter: brightness(1.6) blur(1px)
    }

    to {
        -webkit-filter: brightness(1) blur(0)
    }
}

@keyframes fire {
    0% {
        transform: rotate(0deg)
    }

    25% {
        transform: rotate(3deg)
    }

    50% {
        transform: rotate(0deg)
    }

    75% {
        transform: rotate(-3deg)
    }

    to {
        transform: rotate(0deg)
    }
}

@keyframes floating-allay {
    0% {
        transform: translateY(0)
    }

    50% {
        transform: translateY(20%)
    }

    to {
        transform: translateY(0)
    }
}

#cosmetic-customizer {
    height: 651px;
    pointer-events: none!important
}

.cosmetic-header {
    transform: translateY(20px)
}

.index-alert {
    z-index: 1
}

.versions-overview {
    position: relative
}

.versions-overview .allay {
    animation: floating-allay 6s infinite;
    height: 22.24%;
    left: 57%;
    position: absolute
}

.versions-overview .fire {
    animation: fire .5s infinite;
    animation-timing-function: step-end;
    height: 8.13%;
    image-rendering: pixelated;
    position: absolute;
    transform-origin: 50% 80%
}

.versions-overview .fire1 {
    animation-delay: .5s;
    left: 70.5%;
    top: 72.5%
}

.versions-overview .fire2 {
    animation-delay: .2s;
    left: 77.1%;
    top: 70.2%
}

.versions-overview .fire3 {
    left: 71.5%;
    top: 80%
}

.versions-overview .frog {
    height: 25%;
    left: -6%;
    position: absolute;
    top: 73%
}

.speech-bubble {
    background: #fff;
    border-radius: .4em;
    color: #000;
    font-family: Comic Sans MS,serif;
    padding: 5px;
    position: relative;
    transform: translate(-50%,-250%);
    transition: opacity .2s ease-in-out
}

.speech-bubble:after {
    border: 11px solid transparent;
    border-bottom: 0;
    border-top-color: #fff;
    bottom: 0;
    content: "";
    height: 0;
    left: 50%;
    margin-bottom: -10px;
    margin-left: -10px;
    position: absolute;
    width: 0
}

@media(max-width: 993px) {
    .bg-section-1 img {
        height:auto;
        width: 90%
    }
}

@media(max-width: 768px) {
    body {
        background-position-y:39rem
    }

    body header #lm4-header {
        height: 39rem
    }

    .bg-section-1 .gradient__main {
        background: linear-gradient(180deg,#0a56a5 38rem,transparent 0);
        padding-top: 5rem
    }

    .bg-section-1 .content {
        margin-top: 6rem!important
    }

    .bg-section-1 h1 {
        font-size: 1.7rem!important
    }

    .bg-section-1 h3 {
        font-size: 1.2rem!important
    }
}

@media(max-width: 667px) {
    .bg-section-1 .content {
        margin-top:6rem!important
    }

    .bg-section-1 h1 {
        font-size: 1.4rem!important
    }

    .bg-section-1 h3 {
        font-size: 1rem!important
    }
}

@media(max-width: 576px) {
    body {
        background-position-y:30rem
    }

    body header #lm4-header {
        height: 31rem
    }

    .bg-section-1 .gradient__main {
        background: linear-gradient(180deg,#0a56a5 30rem,transparent 0)
    }

    .bg-section-1 .content {
        margin-top: 2rem!important
    }

    .bg-section-1 h1 {
        font-size: 1.4rem!important
    }

    .bg-section-1 h3 {
        font-size: 1rem!important
    }
}

@media(max-width: 450px) {
    body {
        background-position-y:26rem
    }

    body header #lm4-header {
        height: 26rem
    }

    .bg-section-1 h1 {
        font-size: 1rem!important;
        line-height: 18px;
        margin: auto;
        margin-top: .5rem!important;
        width: 75%
    }

    .bg-section-1 h3 {
        font-size: .8rem!important;
        padding-top: 2.5rem
    }

    .bg-section-1 img {
        width: 80%
    }

    .bg-section-1 .gradient__main {
        background: linear-gradient(180deg,#0a56a5 25rem,transparent 0)
    }

    .bg-section-1 .gradient__main .grid a.btn.btn-secondary {
        font-size: .7rem;
        padding: .25rem .6rem
    }

    .bg-section-2 .mt-7 {
        margin-top: 4rem!important
    }

    .bg-section-2 h1 {
        font-size: 30px;
        line-height: 40px
    }

    .bg-section-2 .p-4 {
        padding: 1rem!important
    }

    .bg-section-2 .me-3 {
        margin-right: 0!important
    }

    .bg-section-2 .grid.mb-2 {
        gap: unset
    }

    .bg-section-2 .grid.mb-2 .ps-4 {
        padding-left: 1rem!important
    }

    .bg-section-2 .text__hint-fps {
        font-size: .7rem!important;
        line-height: 15px;
        margin-top: 1.25rem!important
    }

    .bg-section-2 .image-switcher {
        transform: scale(1.9) rotate(-7deg) translate(10px,20px)
    }

    p.sub-heading {
        font-size: 16px;
        line-height: 22px
    }
}

.cosmetic-customizer-wrapper .easter-egg {
    height: 60px;
    margin-bottom: -10px;
    margin-top: 8px
}

.lm-download .bg-section-1 .gradient__main {
    padding-bottom: 1rem;
    padding-top: 6rem
}

.singleplayer-container .bg-image {
    background-image: url(/page/static/images/singleplayer_background.db579acf.png);
    background-size: cover;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    height: 100%
}

@media(max-width: 993px) {
    .singleplayer-container .bg-image {
        border-bottom-left-radius:0;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px
    }
}

.singleplayer-container .bg-image .inner-wrapper {
    height: 100%;
    min-height: 400px
}

@media(max-width: 667px) {
    .singleplayer-container .bg-image .inner-wrapper {
        position:relative
    }
}

.singleplayer-container .bg-image .inner-wrapper .render-wrapper {
    bottom: 0;
    height: 190px;
    left: 35%;
    margin-right: 20px;
    margin-top: 20px;
    overflow: hidden;
    position: absolute
}

@media(max-width: 667px) {
    .singleplayer-container .bg-image .inner-wrapper .render-wrapper {
        display:none
    }
}

.singleplayer-container .bg-image .inner-wrapper .render-wrapper img.skin-render {
    height: 200px;
    transform: scaleX(-1)
}

.singleplayer-container .bg-image .inner-wrapper .render-wrapper img.skin-render.one {
    height: 220px;
    margin-right: 10px;
    margin-top: 30px
}

.singleplayer-container .bg-image .inner-wrapper .skin-wrapper-main {
    bottom: 0;
    height: 270px;
    left: 17%;
    overflow: hidden;
    position: absolute
}

@media(max-width: 667px) {
    .singleplayer-container .bg-image .inner-wrapper .skin-wrapper-main {
        left:4%
    }
}

.singleplayer-container .bg-image .inner-wrapper .skin-wrapper-main img {
    height: 350px
}

.singleplayer-container .bg-image .inner-wrapper h4 {
    bottom: 0;
    font-weight: 700;
    left: 30px;
    position: absolute;
    text-transform: uppercase
}

@media(max-width: 993px) {
    .singleplayer-container .bg-image .inner-wrapper h4 {
        bottom:auto;
        padding: 20px
    }
}

.singleplayer-container .col-lg-7 {
    padding-right: 0
}

.singleplayer-container .col-lg-5 {
    padding-left: 0
}

.singleplayer-container .content-section {
    background-color: #0690f6;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    padding: 30px 30px 0
}

@media(max-width: 993px) {
    .singleplayer-container .content-section {
        border-bottom-left-radius:30px;
        border-bottom-right-radius: 30px;
        border-top-right-radius: 0
    }
}

.singleplayer-container .content-section h2 {
    margin-bottom: 0
}

.singleplayer-container .content-section h2.right {
    text-align: right
}

.singleplayer-container .content-section p.description {
    color: #e3e3e3;
    font-size: 18px;
    margin: 30px auto;
    max-width: 300px
}

.singleplayer-container .content-section .invite-menu-wrapper {
    margin-left: auto;
    margin-right: auto;
    text-align: center
}

.singleplayer-container .content-section .invite-menu-wrapper .invite-menu {
    background-color: rgba(0,0,0,.6);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: inline-block;
    min-width: 300px;
    padding: 20px 20px 7px;
    text-align: left
}

.singleplayer-container .content-section .invite-menu-wrapper .invite-menu .account {
    margin-bottom: 15px
}

.singleplayer-container .content-section .invite-menu-wrapper .invite-menu .account:last-child {
    margin-bottom: 0
}

.singleplayer-container .content-section .invite-menu-wrapper .invite-menu .account .username,.singleplayer-container .content-section .invite-menu-wrapper .invite-menu .account img {
    cursor: default
}

.singleplayer-container .content-section .invite-menu-wrapper .invite-menu .account .username {
    font-size: 17px;
    margin-left: 7px;
    margin-right: 12px
}

.singleplayer-container .content-section .invite-menu-wrapper .invite-menu .account .btn {
    background-color: #e8e8e8;
    border-radius: 3px;
    float: right;
    font-size: 11px;
    font-weight: 700;
    padding: 4px 10px;
    text-transform: uppercase
}

.launcher img {
    width: 90%
}

.skin-browser video {
    border-radius: 15px;
    float: right;
    width: 90%
}

.four-header .play-btn {
    background-color: #0a56a5;
    bottom: 20px;
    color: #fff;
    font-weight: 700;
    position: absolute
}

.four-header video {
    border-top-left-radius: 34px;
    border-top-right-radius: 34px
}

.download-last {
    margin: auto;
    max-width: 95%;
    width: 550px
}

.download-last h1 {
    font-size: 36px
}

h1 {
    color: white;
    margin-left: 50px;
}
p {
    color: white;
}
.bottomContent {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    color: white;
    padding: 10px;
    width: 100%;
    height: 100px;
    position: fixed;
    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.start_button {
    display: inline-block;
    border-radius: 10px;
    border: none;
    background: #1875FF;
    color: white;
    font-family: inherit;
    text-align: center;
    font-size: 30px;
    box-shadow: 0px 20px 56px -11px #1875FF;
    width: 10em;
    padding: 1em;
    transition: all 0.4s;
    cursor: pointer;
    position: fixed;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 100px;
}
   
.start_button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.4s;
}

.start_button:hover {
    box-shadow: 0px 30px 56px -5px #1875FF;
    width: 410px;
    height: 110px;
}
.buttonPlay {
 display: flex;
 align-items: center;
 justify-content: center;
 height: 50px;
 position: relative;
 padding: 0 20px;
 font-size: 18px;
 text-transform: uppercase;
 border: 0;
 box-shadow: hsl(210deg 87% 36%) 0px 7px 0px 0px;
 background-color: hsl(210deg 100% 44%);
 border-radius: 12px;
 overflow: hidden;
 transition: 31ms cubic-bezier(.5, .7, .4, 1);
}

.buttonPlay:before {
 content: attr(alt);
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 inset: 0;
 font-size: 15px;
 font-weight: bold;
 color: white;
 letter-spacing: 4px;
 opacity: 1;
}

.buttonPlay:active {
 box-shadow: none;
 transform: translateY(7px);
 transition: 35ms cubic-bezier(.5, .7, .4, 1);
}

.buttonPlay:hover:before {
 transition: all .0s;
 transform: translateY(100%);
 opacity: 0;
}

.buttonPlay i {
 color: white;
 font-size: 15px;
 font-weight: bold;
 letter-spacing: 4px;
 font-style: normal;
 transition: all 2s ease;
 transform: translateY(-20px);
 opacity: 0;
}

.buttonPlay:hover i {
 transition: all .2s ease;
 transform: translateY(0px);
 opacity: 1;
}

.buttonPlay:hover i:nth-child(1) {
 transition-delay: 0.045s;
}

.buttonPlay:hover i:nth-child(2) {
 transition-delay: calc(0.045s * 3);
}

.buttonPlay:hover i:nth-child(3) {
 transition-delay: calc(0.045s * 4);
}

.buttonPlay:hover i:nth-child(4) {
 transition-delay: calc(0.045s * 5);
}

.buttonPlay:hover i:nth-child(6) {
 transition-delay: calc(0.045s * 6);
}

.buttonPlay:hover i:nth-child(7) {
 transition-delay: calc(0.045s * 7);
}

.buttonPlay:hover i:nth-child(8) {
 transition-delay: calc(0.045s * 8);
}

.buttonPlay:hover i:nth-child(9) {
 transition-delay: calc(0.045s * 9);
}

.buttonPlay:hover i:nth-child(10) {
 transition-delay: calc(0.045s * 10);
}
`
document.head.appendChild(style)
