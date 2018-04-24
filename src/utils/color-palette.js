export const colorPalette = [
  {
    "name" : "nord1",
    "hexadecimal": '#3b4253',
    "fontColor": '#fff',
    "alpha" : 1,
    "red" : 0.230307936668396,
    "blue" : 0.32403910160064697,
    "green" : 0.25760850310325623
  },
  {
    "name" : "nord2",
    "hexadecimal": '#434c5f',
    "fontColor": '#fff',
    "alpha" : 1,
    "red" : 0.26140576601028442,
    "blue" : 0.37144151329994202,
    "green" : 0.2966877818107605
  },
  {
    "name" : "nord3",
    "hexadecimal": '#4c566b',
    "fontColor": '#fff',
    "alpha" : 1,
    "red" : 0.29655107855796814,
    "blue" : 0.41881299018859863,
    "green" : 0.33575332164764404
  },
  {
    "name" : "nord0",
    "hexadecimal": '#2e3440',
    "fontColor": '#fff',
    "alpha" : 1,
    "red" : 0.17950707674026489,
    "blue" : 0.25287657976150513,
    "green" : 0.20303457975387573
  },
  {
    "name" : "nord4",
    "hexadecimal": '#d8dee9',
    "fontColor": '#333',
    "alpha" : 1,
    "red" : 0.84618502855300903,
    "blue" : 0.91559016704559326,
    "green" : 0.8699072003364563
  },
  {
    "name" : "nord5",
    "hexadecimal": '#e5e9f0',
    "fontColor": '#333',
    "alpha" : 1,
    "red" : 0.8974301815032959,
    "blue" : 0.94234734773635864,
    "green" : 0.91332453489303589
  },
  {
    "name" : "nord6",
    "hexadecimal": '#eceff4',
    "fontColor": '#333',
    "alpha" : 1,
    "red" : 0.92501109838485718,
    "blue" : 0.95767825841903687,
    "green" : 0.93699079751968384
  },
  {
    "name" : "nord7",
    "hexadecimal": '#8ebcbb',
    "fontColor": '#333',
    "alpha" : 1,
    "red" : 0.55502402782440186,
    "blue" : 0.73485785722732544,
    "green" : 0.73797625303268433
  },
  {
    "name" : "nord8",
    "hexadecimal": '#86c0d1',
    "fontColor": '#333',
    "alpha" : 1,
    "red" : 0.5254320502281189,
    "blue" : 0.81993180513381958,
    "green" : 0.75247949361801147
  },
  {
    "name" : "nord9",
    "hexadecimal": '#80a0c2',
    "fontColor": '#fff',
    "alpha" : 1,
    "red" : 0.50133770704269409,
    "blue" : 0.76238733530044556,
    "green" : 0.62921124696731567
  },
  {
    "name" : "nord10",
    "hexadecimal": '#5d80ae',
    "fontColor": '#fff',
    "alpha" : 1,
    "red" : 0.36307543516159058,
    "blue" : 0.68117415904998779,
    "green" : 0.50254195928573608
  },
  {
    "name" : "nord11",
    "hexadecimal": '#c16069',
    "fontColor": '#fff',
    "alpha" : 1,
    "red" : 0.75572323799133301,
    "blue" : 0.41053402423858643,
    "green" : 0.37725883722305298
  },
  {
    "name" : "nord12",
    "hexadecimal": '#d2876d',
    "fontColor": '#fff',
    "alpha" : 1,
    "red" : 0.82166057825088501,
    "blue" : 0.42899519205093384,
    "green" : 0.52937620878219604
  },
  {
    "name" : "nord13",
    "hexadecimal": '#eccc87',
    "fontColor": '#333',
    "alpha" : 1,
    "red" : 0.92501872777938843,
    "blue" : 0.52852797508239746,
    "green" : 0.79930514097213745
  },
  {
    "name" : "nord14",
    "hexadecimal": '#a2bf8a',
    "fontColor": '#333',
    "alpha" : 1,
    "red" : 0.63662713766098022,
    "blue" : 0.54056692123413086,
    "green" : 0.74856311082839966
  },
  {
    "name" : "nord15",
    "hexadecimal": '#b58dae',
    "fontColor": '#fff',
    "alpha" : 1,
    "red" : 0.70891869068145752,
    "blue" : 0.68117684125900269,
    "green" : 0.55359965562820435
  }
]

export const darkFontColors = colorPalette.filter(
  ({fontColor}) => (fontColor !== '#fff')
)

export const lightFontColors = colorPalette.filter(
  ({fontColor}) => (fontColor === '#fff')
)


export const randomColor = (transformFunction, allowRepeat = true) => {
  if (typeof transformFunction === 'function') {
    return transformFunction(
      colorPalette[
        Math.floor(Math.random() * colorPalette.length)
      ]
    )
  }

  return colorPalette[
    Math.floor(Math.random() * colorPalette.length)
  ]
}


export default colorPalette
