/**
 * Created by David Maser on 09/06/2017.
 */
export const app = {
  server: {
    accepted: [
      {
        alias: "tlh",
        url: "https://cdn.shopify.com/s/files/1/0050/3522/t/22/assets/banners.json"
      }, {
        alias: "alti",
        url: "https://cdn.shopify.com/s/files/1/1230/9376/t/2/assets/ALTI-banners.json"
      }
    ]
  },
  special:{
    case1: 'TLH',
    case2: 'ALTI',
    case3: 'ALTIFY'
  },
  errors:{
    common:'<h1>Error</h1><p>Woops, looks like we\'re unable to load the data at this time.</p>',
    list:'.errorList'
  },
  lang: "en_EN",
  user: "guest",
  callback: true,
  export: "json",
  dialog: true,
  save: true,
  listener: "window",
  version: "../assets/project/release.json",
  languageRoot: "../data/language/",
  methods: {
    g: "get",
    p: "post"
  },
  dom: {
    b: "body",
    h: "html"
  },
  objects: {
    o: "#output",
    e: "#entry",
    h: "#html-zone",
    w: "#wrapper",
    i: ".input_holders",
    b: ".blackify_overlay",
    c: ".check_image",
    ca: ".check_alt_image",
    he: "#help",
    hi: ".help_item",
    cl: ".clonedInput",
    r: "html,body",
    bo: "body",
    g: ".glyphicon",
    l: ".loadLsItems",
    ls: "#loadandsave-zone",
    ro: ".render_output",
    re: ".reordered",
    el: ".errorList",
    form: {
      l: "schema/layout.json"
    }
  },
  buttons:{
    mode:'.btnNmode'
  },
  messages:{
    overlay:'.overlay_message'
  },
  handlers: {
    d: 'data-handler',
    t: 'data-theme',
    i: 'data-item',
    r: 'data-reason',
    s: 'data-split'
  },
  selectors: {
    number:'.num_select',
    lsl:'.lsl_select'
  },
  params: {
    s: 'small',
    e: 'error',
    g: 'good'
  },
  storage: {
    t: 'pgb_Theme',
    n: 'pgb_SavedNode_LS'
  },
  language: {
    e: 'en_EN',
    f: 'fr_FR'
  },
  animation: {
    d: {
      min: 500,
      max: 5000
    }
  },
  images:{
    counter:'.image_count'
  }
};