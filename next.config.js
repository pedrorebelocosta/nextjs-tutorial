/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: '/core',
	logging: {
		fetches: {
			fullUrl: true
		}
	},
	skipTrailingSlashRedirect: true,
	experimental: {
		logging: {
			level: 'verbose'
		}
	},
};

module.exports = nextConfig;
