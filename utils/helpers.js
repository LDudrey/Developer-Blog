module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: (date) => {
    //     let dateString = Date(date).getMonth() + "/" +  Date(date).getDate() + "/" + Date(date).getFullYear();
    //   return dateString();
    // },
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear()}`;
  },
  };