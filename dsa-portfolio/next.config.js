/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // This disables image optimization which isn't compatible with static exports
  images: {
    unoptimized: true,
  },
  // For username.github.io repositories, basePath should be empty
  basePath: '',
  // Use trailingSlash to help with file paths when opening locally
  trailingSlash: true,
};

module.exports = nextConfig; 