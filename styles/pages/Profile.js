export const Profile = {
  baseStyle: () => {
    return {
      imgContainer: {
        position: "relative",
        width: "80%",
        bottom: 0,
        right: { base: 5, md: 0 },
        top: { base: 0, md: -70 },
        _hover: {
          ".back-img": {
            left: "70%",
          },
          ".me-img": {
            bottom: "5%",
          },
        },
      },
      back: {
        position: "relative",
        left: "65%",
        transform: "translateX(-50%)",
        transition: "bottom 1s, left 1s",
      },
      img: {
        height: "100%",
        position: "absolute",
        left: "65%",
        bottom: "0",
        transform: "translateX(-50%)",
        transition: "bottom 1s, left 1s",
      },
    };
  },
};
