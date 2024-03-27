/** @type {import('next').NextConfig} */
const nextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Access-Control-Allow-Origin",
  //           value: "*",
  //         },
  //       ],
  //     },
  //   ];
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com',
      },
    ],
  },
};

export default nextConfig;

