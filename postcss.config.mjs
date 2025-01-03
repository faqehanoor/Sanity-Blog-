import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(), // No need to specify config file unless it's non-standard
    autoprefixer(),
  ],
};
