import { createMedia } from '@artsy/fresnel'

const breakpoints = {
  xs: 0,
  sm: 768,
  md: 900,
  lg: 1024,
  xl: 1192,
}

const AppMedia = createMedia({
  breakpoints,
})

// Make styles for injection into the header of the page
const mediaStyles = AppMedia.createMediaStyle()

const { Media, MediaContextProvider } = AppMedia

export { breakpoints, Media, MediaContextProvider, mediaStyles }
