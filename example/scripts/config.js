requirejs.config({
  baseUrl: "scripts/lib",
  paths: {
    jquery: [
      "https://code.jquery.com/jquery-3.3.1",
      "jquery",
    ],
    example: "modules/example",
    methods: "modules/methods",
    awesome: "awesomelib",
    shimExample: "shimExample"
  },
  // shim: {
  //   example: {
  //     deps: ['shimExample']
  //   }
  // }
});
