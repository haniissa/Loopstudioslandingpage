module.exports = {
  purge: [
      './*.html',
      './src/**/*.js',
    ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	backgroundImage: theme => ({
        'hero-header': "url('../../images/desktop/image-hero.jpg')",
        "interactive-vr":"url('images/desktop/image-interactive.jpg')",
        "curiosity":"url('images/desktop/image-curiosity.jpg')",
        "deep-earth":"url('images/desktop/image-deep-earth.jpg')",
        "fisheye":"url('images/desktop/image-fisheye.jpg')",
        "from-above":"url('images/desktop/image-from-above.jpg')",
        "night-arcade":"url('images/desktop/image-night-arcade.jpg')",
        "pocket-borealis":"url('images/desktop/image-pocket-borealis.jpg')",
        "soccer":"url('images/desktop/image-soccer-team.jpg')",
        "grid":"url('images/desktop/image-grid.jpg')",
        }),
        fontFamily: {
        'body': ['Alata'],
        'body-2':['Josefin Sans'],
      }
    },
    screens: {
    'ss': '375',
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }
  }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
