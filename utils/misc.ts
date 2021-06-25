import slugify from "slugify";

export const copyToClipboard = async (
  data: string,
  setCopied?: (value: boolean) => void
) => {
  try {
    await navigator.clipboard.writeText(data);
    if (setCopied) {
      setCopied(true);
      setTimeout(function () {
        setCopied(false);
      }, 2000);
    }
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

export const parseUrl = (url: string) => {
  return url.replace(/^(?:https?:\/\/)?(?:www\.)?(mailto:)?(tel:)?/i, "");
};

export const getDevice = () => {
  const { platform } = navigator;
  if (/iPad|iPhone|iPod/.test(platform)) {
    return "ios";
  }
  if (/Android/.test(navigator.platform)) {
    return "android";
  }
};

export const isMobile = () => {
  const device = getDevice();
  return device === "ios" || device === "android";
};
