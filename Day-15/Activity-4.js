// Module pattern

// Task-6 use closures to create a simple module for managing a collection of items, implement methods to add remove list items

const createItemManager = () => {
  let items = [];

  return {
    addItem: function (item) {
      items.push(item);
    },

    removeItem: function (item) {
      const index = items.indexOf(item);

      if (index !== -1) {
        items.splice(index, 1);
      }
    },

    listItem: function () {
      return items.slice();
    },
  };
};

const itemManager = createItemManager();

itemManager.addItem("Apple");
itemManager.addItem("Banana");
itemManager.addItem("Orange");

console.log(itemManager.listItem());

itemManager.removeItem("Banana");

console.log(itemManager.listItem());
