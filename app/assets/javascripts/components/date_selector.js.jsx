var DateSelector = React.createClass({

  render: function() {
    var currentYear = parseInt(new Date().getFullYear());
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "Jul",
      "Aug",
      "Sep",
      "Nov",
      "Dec"
    ];
    
    var days = Array.apply(null, Array(31)).map(function (_, i) {return i;});

    var years = Array.apply(null, Array(100)).map(function (_, i) {return i + currentYear;});

    return (
      <div className="date-selector group">
        <select name="Month">
          <option selected>Month</option>
          {
            months.map(function(month) {
              return <option>{month}</option>;
            })
          }
        </select>
        <select name="Day">
          <option selected>Day</option>
          {
            days.map(function(month) {
              return <option>{month}</option>;
            })
          }
        </select>
        <select name="Year">
          <option selected>Year</option>
          {
            years.map(function(month) {
              return <option>{month}</option>;
            })
          }
        </select>
      </div>
    );
  }

});
