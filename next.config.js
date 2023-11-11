/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'v5.airtableusercontent.com'
            }
        ]
    },
    experimental: {
        serverMinification: false
    }
}

module.exports = nextConfig
