const getData = async () => {
    const response = await fetch("http://worldtimeapi.org/api/timezone/Europe/Copenhagen");
    const data = await response.json();
    return data.datetime;
  };

// (async () => {
//     await getData();
//     console.log(dateTime);
//   })();

export default getData;