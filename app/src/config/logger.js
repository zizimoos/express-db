const { createLogger, transports, format } = require("winston");
const { combine, timestamp, printf, label } = format;

const printLogFormat = combine(
  label({ label: "my-label" }),
  combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    printf(({ timestamp, label, message, level }) => {
      return `${timestamp} [${label}] ${level} : ${message}`.blue;
    })
  )
);

const options = {
  file: new transports.File({
    filename: "./logs/winstonLog.log",
    level: "info",
    format: printLogFormat,
  }),
  console: new transports.Console({
    format: printLogFormat,
  }),
};
const logger = createLogger({
  transports: [options.file],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(options.console);
}

module.exports = logger;
