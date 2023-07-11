/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MOVIE_API_KEY:'e1a58ff53401a0e085d6819986ea6085',
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:'pk_test_51NQvggSDHJbreWjCQKFs7K9jRAzt49LUyAnFRuw8uk9r3eyek6lvjkkbwcDW22QqCMZCXs4jjb8fixavAqKeIINC008BjwigKb',
    NEXT_PUBLIC_BASE_URL:'http://localhost:3000/login/register'
  },
  images: {
    domains: ['image.tmdb.org','images.unsplash.com'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
