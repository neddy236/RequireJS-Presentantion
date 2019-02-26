requirejs.config({
  baseUrl: "scripts/lib",
  paths: {
    example: "modules/example",
    methods: "modules/methods",
    methodsCall: "methodscall",
    jquery: [
      "https://code.jquery.com/jquery-3.3.1",
      "jquery",
    ],
    shimExample: "shimExample"
  },
  shim: {
    example: {
      deps: ['shimExample']
    }
  }
});
