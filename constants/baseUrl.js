const dev = process.env.NODE_ENV !== 'production'

const server = dev
  ? 'http://localhost:3000/'
  : 'https://test-nextjs-simple.tenjojeremy.now.sh/'

export default server
