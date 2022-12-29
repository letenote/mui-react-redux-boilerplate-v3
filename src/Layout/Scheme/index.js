const Scheme = {
  header: {
    config: {
      xs: {
        position: "sticky",
        height: 56,
        clipped: false
      },
      md: {
        position: "relative",
        height: 64,
        clipped: false
      },
    },
  },
  leftEdgeSidebar: {
    autoCollapse: "md",
    config: {
      xs: {
        variant: "temporary",
        width: 220,
      },
      sm: {
        variant: "permanent",
        width: 220,
        collapsible: true,
        collapsedWidth: 64,
      },
      md: {
        variant: "permanent",
        width: 220,
        collapsible: true,
        collapsedWidth: 64,
      },
    },
  },
};

export default Scheme;