import React, { Component } from "react";
class Box extends Component {
  state = {
    size: this.props.size,
    flag: "false",
    Player: "1",
    result: "",
  };
  Arr = [];

  check(a, b, c, d) {
    if (a === "red" && b === "red" && c === "red" && d === "red") {
      this.setState({ result: "team red wins" });
      return true;
    }
    if (a === "blue" && b === "blue" && c === "blue" && d === "blue") {
      this.setState({ result: "team blue wins" });
      return true;
    }
    return false;
  }

  check_color(color) {
    if (color === "red" || color === "blue") {
      return true;
    }
    return false;
  }

  fun1 = (e) => {
    if (
      this.state.result === "team red wins" ||
      this.state.result === "team blue wins"
    ) {
      return;
    }
    let playerColor = [];
    if (this.state.flag === "false") {
      playerColor = "red";
    } else {
      playerColor = "blue";
    }
    let max, min;

    if (e.target.id >= 1 && e.target.id <= 5) {
      max = 5;
      min = 1;
    } else if (e.target.id >= 6 && e.target.id <= 10) {
      max = 10;
      min = 6;
    } else if (e.target.id >= 11 && e.target.id <= 15) {
      max = 15;
      min = 11;
    } else if (e.target.id >= 16 && e.target.id <= 20) {
      max = 20;
      min = 16;
    } else {
      max = 25;
      min = 21;
    }

    for (let i = max; i >= min; i--) {
      let backcolor = document.getElementById(i).style.backgroundColor;
      if (backcolor === "blue" || backcolor === "red") {
      } else {
        document.getElementById(i).style.backgroundColor = playerColor;

        if (this.state.flag === "false") {
          this.setState({ flag: "true" });
          this.setState({ Player: "2" });
        } else {
          this.setState({ flag: "false" });
          this.setState({ Player: "1" });
        }
        break;
      }
    }
    for (let i = 1; i <= 10; i++) {
      let temparr = [];
      for (let j = i; j <= i + 15; j += 5) {
        temparr.push(document.getElementById(j).style.backgroundColor);
      }

      if (this.check(temparr[0], temparr[1], temparr[2], temparr[3])) {
        document.console(temparr[0]);
        return;
      }
    }

    for (let i = 1; i <= 21; i += 5) {
      let temparr = [];
      for (let j = i; j <= i + 4; j++) {
        temparr.push(document.getElementById(j).style.backgroundColor);
      }
      if (this.check(temparr[0], temparr[1], temparr[2], temparr[3])) {
        return;
      } else if (this.check(temparr[1], temparr[2], temparr[3], temparr[4])) {
        return;
      }
    }

    for (let i = 1; i <= 6; i += 5) {
      let temparr = [];
      let temparr2 = [];
      for (let j = i, k = 0; j <= i + 15 + 3; j += 5, k++) {
        temparr.push(document.getElementById(j + k).style.backgroundColor);
        temparr2.push(document.getElementById(j + 1 + k).style.backgroundColor);
      }

      if (this.check(temparr[0], temparr[1], temparr[2], temparr[3])) {
        return;
      } else if (
        this.check(temparr2[0], temparr2[1], temparr2[2], temparr2[3])
      ) {
        return;
      }
    }

    for (let i = 21; i >= 16; i -= 5) {
      let temparr = [];
      let temparr2 = [];

      for (let j = i, k = 0; j >= i - 15; j -= 5, k++) {
        temparr.push(document.getElementById(j + k).style.backgroundColor);
        temparr2.push(document.getElementById(j + k + 1).style.backgroundColor);
      }

      if (this.check(temparr[0], temparr[1], temparr[2], temparr[3])) {
        return;
      } else if (
        this.check(temparr2[0], temparr2[1], temparr2[2], temparr2[3])
      ) {
        return;
      }
    }

    let draw_counter = 0;
    for (let i = 1; i <= 25; i++) {
      if (this.check_color(document.getElementById(i).style.backgroundColor)) {
        draw_counter++;
      }
    }
    if (draw_counter === 25) {
      this.setState({ result: "Match draw" });
    }
  };

  componentWillMount() {
    let temp = 1;
    for (let i = 10; i < 500; i += 100) {
      for (let j = 10; j < 500; j += 100) {
        this.Arr.push(
          <button
            id={temp++}
            onClick={this.fun1}
            style={{
              background: "aliceblue",
              cursor: "pointer",
              ontSize: "10px",
              display: "flex",
              position: "absolute",
              left: i + "px",
              top: j + "px",
              border: "2px solid black",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              padding: "10px 10px",
              margin: "10px",
            }}
          ></button>
        );
      }
    }
  }

  render(props) {
    return (
      <>
        <div
          style={{
            background: "linear-gradient(45deg, #c6e23b, transparent)",
            borderRadius: "30px",
            position: "absolute",
            height: this.state.size,
            width: this.state.size,
            border: "12px solid black",
            display: "relative",
            textAlign: "center",
            alignContent: "center",
            alignItems: "center",
            margin: "23px 380px",
          }}
        >
          <div style={{ padding: "2px 3px" }}>{this.Arr}</div>
        </div>
        <div
          style={{
            position: "absolute",
            left: "34px",
            top: "250px",
            height: "70px",
            width: "285px",
            border: "4px solid blue",
            fontSize: "45px",
            color: "white",
            background: "black",
            borderRadius: "20px",
          }}
        >
          Player {this.state.Player}'s turn
        </div>
        <div
          style={{
            position: "absolute",
            right: "40px",
            background: "linear-gradient(360deg, #ff9f9f, transparent)",
            fontSize: "40px",
            width: "300px",
            height: "200px",
            display: "flex",
            border: "3px solid black",
            padding: "10px 10px",
            borderRadius: "10px",
          }}
        >
          <b style={{ textAlign: "center" }}>
            Result: <br /> {this.state.result}
          </b>
        </div>
      </>
    );
  }
}

export default Box;
