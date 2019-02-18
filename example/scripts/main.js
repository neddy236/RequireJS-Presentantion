requirejs.config({
  baseUrl: "scripts/lib",
  paths: {
    jquery: [
      "https://code.jquery.com/jquery-3.3.1",
      "jquery",
    ],
    awesome: "awesomelib"
  },
  // shim: {
  //   jquery: {
  //     deps: ['awesomelib']
  //   }
  // }
});
