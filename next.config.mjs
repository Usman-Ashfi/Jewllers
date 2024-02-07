/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  
    // ? Enviornament Variable -----------------------------------------/
    env: {
      MONGO_URI:
        "mongodb://127.0.0.1:27017/Alicasting",
      SECRET_KEY: "a343344$%$s3$%$dwdq3#$3",
    },
    images: {
      remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
    },
  
    // ? Enviornament Variable -----------------------------------------/
  };
  
  export default nextConfig;