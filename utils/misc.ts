import slugify from "slugify";

export const copyToClipboard = async (data: string) => {
  try {
    await navigator.clipboard.writeText(data);
  } catch (err) {
    // do nothing
  }
};

export const slugifyText = (text: string) => {
  return slugify(text, {
    replacement: "-",
    lower: true,
  });
};

export const isMobile = () => {};

export const parseUrl = (url: string) => {
  return url.replace(/^(?:https?:\/\/)?(?:www\.)?(mailto:)?(tel:)?/i, "");
};
