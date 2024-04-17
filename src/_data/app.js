const env = (dev, prod = dev) => {
  if (process.env.ELEVENTY_ENV === 'development') {
    return dev;
  }

  return prod;
};

module.exports = {
  title: 'Tanmay| web engineer',
  description: 'Coding for humans. Come say hi 🌳',
  twitter: 'tanmayy4l',
  baseUrl: env('localhost:8080', 'https://.me'),
  thumb: '/assets/images/big-rainbow-static.jpg',
};
