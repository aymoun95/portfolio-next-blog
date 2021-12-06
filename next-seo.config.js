const title = "Aymen Ben Zlaouia blog portflio";
const description =
  "A portfolio that presents what I do exactly and a blog to help people and also for me to learn by teaching.";

const SEO = {
  title,
  description,
  url: process.env.DEPLOY_URL,
  site_name: title,
  openGraph: {
    type: "website",
    locale: "en_US",
  },
};

export default SEO;
