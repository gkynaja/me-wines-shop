import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas as ProFas } from '@fortawesome/pro-solid-svg-icons'
import { far as ProFar } from '@fortawesome/pro-regular-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'

library.add(fas, far, fab, ProFas, ProFar, fal, fad)

require('typeface-roboto')
require('typeface-laila')
require('typeface-love-ya-like-a-sister')
require('normalize.css')
require('./src/styles/global.css')
