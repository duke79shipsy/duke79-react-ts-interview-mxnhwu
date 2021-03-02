import React from "react";
import { Hook, Console, Decode } from "console-feed";

const Logger = ({
  reversed = false
}) => {
  const [logs, setLogs] = React.useState([]);
  const divRef = React.useRef(null);

  React.useEffect(() => {
    // console.log(divRef.current?.scrollHeight);
    // divRef.current?.scrollToBottom();
  }, [divRef?.current]);

  React.useEffect(() => {
    Hook(window.console, log => {
      const thisLog = Decode(log)?.data?.[0];
      const lastLog = logs?.[reversed ? 0 : logs.length - 1]?.data?.[0];
      // const lastLog = '';
      if(thisLog !== lastLog) {
          // alert(thisLog);
          // alert(lastLog);
          setLogs(logs => {
          if (Decode(log)?.data?.[0] === logs?.[reversed ? 9 : logs.length - 1]?.data?.[0]) {
            return logs;
          }
          return reversed ? [Decode(log), ...logs] : [...logs, Decode(log)];
        });
      }
    });

    console.log(`Test Logger!`);
  }, []);

  console.log("This must not print in infinite loop!");

  return (
    <div style={{ backgroundColor: "#242424", overflow: 'auto' }} ref={divRef}>
      <Console logs={logs} variant="dark" />
    </div>
  );
};

export default Logger;
