/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: `scrum-quiz-app-abeb643fd7fa.herokuapp.com`,
            },
        ],
    },
}

export default nextConfig
