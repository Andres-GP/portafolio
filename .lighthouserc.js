module.exports = {
  ci: {
    collect: {
      url: ["https://portafolio-coral-eta.vercel.app/"],
      startServerCommand: "npm run start",
      numberOfRuns: 3,
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
