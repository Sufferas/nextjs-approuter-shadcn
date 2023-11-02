/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

const nextConfig = {
    // images: {
    //     domains: ['avatars.githubusercontent.com', 'avatar.vercel.sh']
    // }
    ...withPWA({
        dest: 'public',
        register: true,
        skipWaiting: true,
    })
};

module.exports = nextConfig;
