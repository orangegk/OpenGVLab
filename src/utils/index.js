export const getImageUrl = (img) => {
    return new URL(
      // 本地资源路径
      `/src/assets/${img}`,
      import.meta.url
    ).href;
  };