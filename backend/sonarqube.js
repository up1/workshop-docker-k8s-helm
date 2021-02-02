const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
  {
    serverUrl: "http://128.199.226.142:9000",
    token: "d85ad41b5e8209c6bd23f8dd78563dc9b1257041",
    options: {
      "sonar.projectName": "Backend",
      "sonar.projectDescription": "Backend",
      "sonar.sources": ".",
      "sonar.tests": "src",
      "sonar.inclusions": "**",
      "sonar.test.inclusions":
        "src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx",
      "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "coverage/test-reporter.xml",
    },
  },
  () => {}
);
