// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: Feb 2025
// This file contains the JS functions for index.html
"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-6-04-Joyce-Nkengbeza/sw.js", {
    scope: "/ICD2O-Unit-6-04-Joyce-Nkengbeza/",
  })
}
window.onload = function () {
  // this calculates volume of a sphere

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get("radius")

  // process
  const volume = (4 / 3) * Math.PI * (radius * radius * radius)
  const dimension = "<ul>\n<li> radius = " + radius + " mm</li>\n</ul>"

  // output
  document.getElementById("dimension").innerHTML = dimension
  document.getElementById("volume").innerHTML =
    "volume is: " + volume.toFixed(3) + " mm³"
}
