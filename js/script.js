// jQuery Code
function newItem() {
  //1. Adding a new item to the list
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if ($("#input").val() === "") {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

  //2. Crossing an item out
  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  //3. Adding a delete button
  let crossOutButton = $("<crossOutButton></crossOutButton>");
  $(crossOutButton).append("X");
  li.append(crossOutButton);

  //4. Adding CLASS DELETE (DISPLAY: NONE) from the css
  crossOutButton.on("click", function () {
    li.addClass("delete");
  });

  // 5. Reordering the items:
  $("#list").sortable();
}
