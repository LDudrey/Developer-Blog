module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: (date) => {
        let dateString = date.getMonth() + "/" +  date.getDate() + "/" + parseInt(date.getFullYear());
      return dateString();
    },
  };