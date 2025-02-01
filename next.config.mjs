import packageInfo from './package.json' with { type: 'json' };

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        version: packageInfo.version,
    }
};

export default nextConfig;
