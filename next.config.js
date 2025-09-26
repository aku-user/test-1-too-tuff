/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/quiz',
        destination: 'https://script.google.com/macros/s/AKfycbwjV-6K1hlCwnMsMwHuJuOcP0rE-egz_336hdLdIeHPeyGD4zAywkwu_vcOF6WENsZdeQ/exec',
      },
    ]
  },
}

module.exports = nextConfig;
