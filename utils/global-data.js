export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'ℹ️.T. WORKS 8️⃣4️⃣4️⃣-7️⃣1️⃣1️⃣-0️⃣0️⃣0️⃣7️⃣';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Making I.T. Invisible';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '©️2022 ℹ️.T. WORKS. All Rights Reserved';

  return {
    name,
    blogTitle,
    footerText,
  };
};
