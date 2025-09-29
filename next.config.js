/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/quiz',
        destination: 'https://script.google.com/macros/s/AKfycbzfDFYAD073Vl6mKZE2I_18uzvf224LDl8T_zhp-AFdeEHa-5G974uLzjBS8uEdG01Uwg/exec',
      },
    ];
  },
};

module.exports = nextConfig;
