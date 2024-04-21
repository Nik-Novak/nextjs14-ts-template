/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    instrumentationHook: true
  },
  // eslint:{
  //   ignoreDuringBuilds:true
  // },
  // typescript:{
  //   ignoreBuildErrors: true
  // },
  logging:{
    fetches:{
      fullUrl: true
    }
  }
};

export default nextConfig;
