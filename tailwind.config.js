module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        "sprite-run": "sprite 2s steps(20) infinite",
        "sprite-punch": "sprite 1s steps(12) infinite",
        "sprite-ko": "sprite-3 3s steps(9) infinite"
      },
      keyframes: {
        "sprite": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "100% 0" }
        },
        "sprite-3": {
          "0%": { backgroundPosition: "0 0" },
          "33.329%": { backgroundPosition: "100% 0" },
          "33.33%": { backgroundPosition: "0 50%" },
          "66.659%": { backgroundPosition: "100% 50%" },
          "66.66%": { backgroundPosition: "0 100%" },
          "100%": { backgroundPosition: "100% 100%" },
        }
      },
    },
    plugins: [],
  }
}