const courses = {
  buy_beginner: 0,
  buy_normal: 1,
  buy_guru: 2,
};

var courseSelector = document.getElementById("courseSelector");

Object.keys(courses).map(function (v, i) {
  document.getElementById(`${v}`).addEventListener("click", (event) => {
    courseSelector.selectedIndex = i;
  });
});
