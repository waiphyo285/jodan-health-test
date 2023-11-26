const withImages = require('next-images');

const API_URL = process.env.API_URL

module.exports = withImages({
  redirects: async () => {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/admin_1',
        permanent: true
      },
      // {
			// 	source: '/api/:path*',
			// 	destination: `${API_URL}/:path*`,
      //   permanent: false
			// },
    ];
  },
  images: {
    domains: ['tokendoctor-express-bucket.s3.ap-southeast-1.amazonaws.com']
  }

  //   typescript: {
  //     // Dangerously allow production builds to successfully complete even if
  //     // your project has type errors.
  //     ignoreBuildErrors: true
  //   },

  //   eslint: {
  //     // Warning: This allows production builds to successfully complete even if
  //     // your project has ESLint errors.
  //     ignoreDuringBuilds: true
  //   },

  //   env: {
  //     BASE_URL: process.env.BASE_URL
  //   }
});
