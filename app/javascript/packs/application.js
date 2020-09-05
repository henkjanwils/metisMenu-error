// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import metisMenu from 'metismenu/dist/metisMenu';
window.metisMenu = metisMenu;

import 'bootstrap'
import '../stylesheets/application'
import 'assets/images'

// import 'assets/javascripts/vendor.min.js'
// import 'assets/javascripts/app.min.js'
// import 'assets/stylesheets/app-creative.min.css'
// import 'assets/stylesheets/icons.min.css'
import 'assets/javascripts/vendor.js'
import 'assets/javascripts/app.js'
import 'assets/stylesheets/icons.css'
import 'assets/stylesheets/app-creative.css'




document.addEventListener('turbolinks:load', () => {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
