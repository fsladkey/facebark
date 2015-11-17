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

    var years = Array.apply(null, Array(100)).map(function (_, i) {return currentYear - i;});

    return (
      <div className="date-selector group">
        <select name="Month" onChange={this.props.setMonth}>
          <option defaultValue>Month</option>
          {
            months.map(function(month) {
              return <option key={month}>{month}</option>;
            })
          }
        </select>
        <select name="Day" onChange={this.props.setDay}>
          <option defaultValue>Day</option>
          {
            days.map(function(day) {
              return <option key={day}>{day}</option>;
            })
          }
        </select>
        <select name="Year" onChange={this.props.setYear}>
          <option defaultValue>Year</option>
          {
            years.map(function(year) {
              return <option key={year}>{year}</option>;
            })
          }
        </select>
      </div>
    );
  }

});
