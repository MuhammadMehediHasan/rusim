const align = {
  finalStr: "",
  horizontalCenter: function (str = "") {
    this.finalStr = str.padStart(
      process.stdout.columns / 2 + str.length / 2,
      " "
    );
    return this;
  },

  verticalCenter: function (str = "") {
    let height = process.stdout.rows / 2;
    for (let i = 0; i < height; i++) {
      this.finalStr += "\n";
    }
    this.finalStr += str;
    return this;
  },
};

console.log(
  align.horizontalCenter("Test").verticalCenter("This is a test").finalStr
);
