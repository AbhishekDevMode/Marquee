// ===========================
// DOM Manipulation Examples
// ===========================

// ========================================
// 1. SELECTING ELEMENTS
// ========================================


function selectElementsDemo() {
  
  let output = document.getElementById("select-output");

  // getElementById - select by ID
  const para1 = document.getElementById("para1");

  // getElementsByClassName - select by class (returns HTMLCollection)
  const parasByClass = document.getElementsByClassName("para-class");

  // getElementsByTagName - select by tag name
  const allParagraphs = document.getElementsByTagName("p");

  // querySelector - select first matching element (CSS selector)
  const firstPara = document.querySelector(".para-class");

  // querySelectorAll - select all matching elements
  const allParas = document.querySelectorAll(".para-class");

  // querySelector with attribute selector
  const specialDiv = document.querySelector('[data-type="special"]');

  output.innerHTML = `
        <p><span class="success">✓ Selection Methods:</span></p>
        <p>getElementById: ${para1.textContent}</p>
        <p>getElementsByClassName count: ${parasByClass.length}</p>
        <p>getElementsByTagName count: ${allParagraphs.length}</p>
        <p>querySelector: ${firstPara.textContent}</p>
        <p>querySelectorAll count: ${allParas.length}</p>
        <p>Attribute selector: ${specialDiv.textContent}</p>
    `;
}

// ========================================
// 2. MODIFYING CONTENT
// ========================================

function modifyContentDemo() {
  let output = document.getElementById("content-output");
  const contentPara = document.getElementById("content");

  // textContent - sets/gets plain text (secure, ignores HTML)
  contentPara.textContent =
    "Modified using textContent - Plain text only! <b>HTML not rendered</b>";

  output.innerHTML = '<p class="success">✓ Text modified using textContent</p>';
  output.innerHTML += "<p>textContent ignores HTML tags for security</p>";
}

function modifyHTMLDemo() {
  let output = document.getElementById("content-output");
  const htmlDiv = document.getElementById("html-demo");

  // innerHTML - sets/gets HTML content (be careful with user input!)
  htmlDiv.innerHTML =
    "<strong>Modified using innerHTML</strong> - <em>HTML is rendered!</em>";

  output.innerHTML = '<p class="success">✓ HTML modified using innerHTML</p>';
  output.innerHTML +=
    "<p>innerHTML can execute scripts - use with caution!</p>";
}

// ========================================
// 3. MODIFYING ATTRIBUTES
// ========================================

function modifyAttributesDemo() {
  let output = document.getElementById("attr-output");
  const img = document.getElementById("img-demo");
  const link = document.getElementById("link-demo");

  // setAttribute - set attribute value
  img.setAttribute(
    "src",
    "https://via.placeholder.com/150/667eea/ffffff?text=Modified",
  );
  img.setAttribute("alt", "Modified image");

  // Can also access attributes directly
  link.href = "https://www.google.com";
  link.textContent = "Visit Google";
  link.setAttribute("target", "_blank");

  output.innerHTML = `
        <p class="success">✓ Attributes Modified:</p>
        <p>Image src: ${img.getAttribute("src")}</p>
        <p>Link href: ${link.getAttribute("href")}</p>
        <p>Target: ${link.getAttribute("target")}</p>
    `;
}

function resetAttributesDemo() {
  let output = document.getElementById("attr-output");
  const img = document.getElementById("img-demo");
  const link = document.getElementById("link-demo");

  // Reset to original
  img.setAttribute("src", "https://via.placeholder.com/100");
  img.setAttribute("alt", "Demo Image");
  link.href = "#";
  link.textContent = "Click me";
  link.removeAttribute("target");

  output.innerHTML = '<p class="success">✓ Attributes Reset to Original</p>';
}

// ========================================
// 4. MODIFYING CLASSES
// ========================================

function addClassDemo() {
  let output = document.getElementById("class-output");
  const box = document.getElementById("class-box");

  // classList.add() - add one or more classes
  box.classList.add("active");

  output.innerHTML = `
        <p class="success">✓ Class Added</p>
        <p>Current classes: ${box.className}</p>
    `;
}

function removeClassDemo() {
  let output = document.getElementById("class-output");
  const box = document.getElementById("class-box");

  // classList.remove() - remove specific class
  box.classList.remove("active");

  output.innerHTML = `
        <p class="success">✓ Class Removed</p>
        <p>Current classes: ${box.className}</p>
    `;
}

function toggleClassDemo() {
  let output = document.getElementById("class-output");
  const box = document.getElementById("class-box");

  // classList.toggle() - add if not present, remove if present
  box.classList.toggle("active");

  output.innerHTML = `
        <p class="success">✓ Class Toggled</p>
        <p>Current classes: ${box.className}</p>
    `;
}

function checkClassDemo() {
  let output = document.getElementById("class-output");
  const box = document.getElementById("class-box");

  // classList.contains() - check if element has class
  const hasActive = box.classList.contains("active");
  const hasHidden = box.classList.contains("hidden");

  output.innerHTML = `
        <p class="success">✓ Class Check:</p>
        <p>Has 'active': ${hasActive ? "YES ✓" : "NO ✗"}</p>
        <p>Has 'hidden': ${hasHidden ? "YES ✓" : "NO ✗"}</p>
        <p>All classes: ${box.className}</p>
    `;
}

// ========================================
// 5. CREATING ELEMENTS
// ========================================

let createCount = 0;

function createElementDemo() {
  let output = document.getElementById("create-output");
  const container = document.getElementById("create-container");

  createCount++;

  // createElement - create a new element
  const newDiv = document.createElement("div");
  newDiv.classList.add("list-item");
  newDiv.textContent = `Created Element #${createCount}`;

  // Append to container
  container.appendChild(newDiv);

  output.innerHTML = `<p class="success">✓ Element #${createCount} Created and Added</p>`;
}

function clearElementsDemo() {
  let output = document.getElementById("create-output");
  const container = document.getElementById("create-container");

  // Clear all child elements
  container.innerHTML = "";
  createCount = 0;

  output.innerHTML = '<p class="success">✓ All Created Elements Cleared</p>';
}

// ========================================
// 6. APPENDING/INSERTING ELEMENTS
// ========================================

let appendCount = 0;

function appendElementDemo() {
  let output = document.getElementById("append-output");
  const list = document.getElementById("item-list");

  appendCount++;

  // Create new item
  const newItem = document.createElement("li");
  newItem.textContent = `New Item ${appendCount}`;

  // appendChild - add element as last child
  list.appendChild(newItem);

  output.innerHTML = `<p class="success">✓ Item Appended at End</p>`;
}

function prependElementDemo() {
  let output = document.getElementById("append-output");
  const list = document.getElementById("item-list");

  appendCount++;

  const newItem = document.createElement("li");
  newItem.textContent = `Prepended Item ${appendCount}`;

  // insertBefore - add element before specific child
  list.insertBefore(newItem, list.firstChild);

  output.innerHTML = `<p class="success">✓ Item Prepended at Start</p>`;
}

function insertBeforeDemo() {
  let output = document.getElementById("append-output");
  const list = document.getElementById("item-list");

  appendCount++;

  const newItem = document.createElement("li");
  newItem.textContent = `Inserted Item ${appendCount}`;

  // Insert before Item 2
  const secondItem = list.children[1];
  list.insertBefore(newItem, secondItem);

  output.innerHTML = `<p class="success">✓ Item Inserted Before Item 2</p>`;
}

// ========================================
// 7. REMOVING ELEMENTS
// ========================================

function removeElementDemo() {
  let output = document.getElementById("remove-output");
  const removeList = document.getElementById("remove-list");

  if (removeList.children.length > 0) {
    // removeChild - remove specific child
    removeList.removeChild(removeList.lastChild);
    output.innerHTML = `<p class="success">✓ Last item removed</p>`;
    output.innerHTML += `<p>Remaining items: ${removeList.children.length}</p>`;
  } else {
    output.innerHTML = '<p class="error">✗ No items to remove</p>';
  }
}

function removeAllItemsDemo() {
  let output = document.getElementById("remove-output");
  const removeList = document.getElementById("remove-list");

  // Method 1: Remove all children
  while (removeList.firstChild) {
    removeList.removeChild(removeList.firstChild);
  }

  // Alternative: removeList.innerHTML = '';

  output.innerHTML = '<p class="success">✓ All items removed</p>';
}

// ========================================
// 8. EVENT LISTENERS
// ========================================

let listenersAdded = false;

function handleInputChange(e) {
  document.getElementById("event-output-p").textContent =
    `You typed: ${e.target.value}`;
}

function handleButtonClick(e) {
  alert("Button clicked! Event listener is working!");
}

function addEventListenersDemo() {
  let output = document.getElementById("event-output");
  const input = document.getElementById("event-input");
  const btn = document.getElementById("event-btn");

  if (!listenersAdded) {
    // addEventListener - attach event listener
    input.addEventListener("input", handleInputChange);
    btn.addEventListener("click", handleButtonClick);

    listenersAdded = true;
    output.innerHTML = `
            <p class="success">✓ Event Listeners Added</p>
            <p>Type in the input or click the button</p>
        `;
  } else {
    output.innerHTML = '<p class="error">✗ Listeners already added</p>';
  }
}

function removeEventListenersDemo() {
  let output = document.getElementById("event-output");
  const input = document.getElementById("event-input");
  const btn = document.getElementById("event-btn");

  if (listenersAdded) {
    // removeEventListener - remove specific listener
    input.removeEventListener("input", handleInputChange);
    btn.removeEventListener("click", handleButtonClick);

    listenersAdded = false;
    document.getElementById("event-output-p").textContent = "";
    output.innerHTML = `
            <p class="success">✓ Event Listeners Removed</p>
            <p>Input and button won't respond anymore</p>
        `;
  } else {
    output.innerHTML = '<p class="error">✗ No listeners to remove</p>';
  }
}

// ========================================
// 9. TRAVERSING DOM
// ========================================

function traverseDemo() {
  let output = document.getElementById("traverse-output");
  const parent = document.getElementById("parent-div");
  const child2 = document.getElementById("child-2");

  // parentElement - get parent
  const parentOfChild = child2.parentElement;

  // children - get all child elements (HTMLCollection)
  const allChildren = parent.children;

  // firstChild / lastChild - get first/last child (includes text nodes)
  const firstChild = parent.firstChild;

  // firstElementChild / lastElementChild - get first/last child element
  const firstElement = parent.firstElementChild;
  const lastElement = parent.lastElementChild;

  // previousElementSibling / nextElementSibling
  const prevSibling = child2.previousElementSibling;
  const nextSibling = child2.nextElementSibling;

  output.innerHTML = `
        <p class="success">✓ DOM Traversal:</p>
        <p>Parent of child-2: ${parentOfChild.id}</p>
        <p>Total children: ${allChildren.length}</p>
        <p>First child element: ${firstElement.id}</p>
        <p>Last child element: ${lastElement.id}</p>
        <p>Previous sibling of child-2: ${prevSibling ? prevSibling.id : "None"}</p>
        <p>Next sibling of child-2: ${nextSibling ? nextSibling.id : "None"}</p>
    `;
}

// ========================================
// 10. STYLING ELEMENTS
// ========================================

function styleElementDemo() {
  let output = document.getElementById("style-output");
  const box = document.getElementById("style-box");

  // style property - inline styles
  box.style.backgroundColor = "#764ba2";
  box.style.color = "white";
  box.style.fontSize = "18px";
  box.style.padding = "20px";
  box.style.borderRadius = "10px";
  box.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";

  output.innerHTML = `
        <p class="success">✓ Styles Applied Inline</p>
        <p>Background, color, font, padding, border-radius, box-shadow modified</p>
    `;
}

function removeStylesDemo() {
  let output = document.getElementById("style-output");
  const box = document.getElementById("style-box");

  // Remove specific styles
  box.style.backgroundColor = "";
  box.style.color = "";
  box.style.fontSize = "";
  box.style.padding = "";
  box.style.borderRadius = "";
  box.style.boxShadow = "";

  // Alternative: box.removeAttribute('style');

  output.innerHTML = '<p class="success">✓ Inline Styles Removed</p>';
}

// ========================================
// 11. FORM MANIPULATION
// ========================================

function getFormValuesDemo() {
  let output = document.getElementById("form-output");
  const nameInput = document.getElementById("form-name");
  const selectInput = document.getElementById("form-select");
  const checkInput = document.getElementById("form-check");

  // Get form values
  const formData = {
    name: nameInput.value,
    selected: selectInput.value,
    isChecked: checkInput.checked,
  };

  output.innerHTML = `
        <p class="success">✓ Form Values Retrieved:</p>
        <p>Name: ${formData.name || "(empty)"}</p>
        <p>Selected: ${formData.selected}</p>
        <p>Checked: ${formData.isChecked ? "YES ✓" : "NO ✗"}</p>
    `;
}

function setFormValuesDemo() {
  let output = document.getElementById("form-output");
  const nameInput = document.getElementById("form-name");
  const selectInput = document.getElementById("form-select");
  const checkInput = document.getElementById("form-check");

  // Set form values
  nameInput.value = "John Doe";
  selectInput.value = "Option 2";
  checkInput.checked = true;

  output.innerHTML = `
        <p class="success">✓ Form Values Set</p>
        <p>Name set to: John Doe</p>
        <p>Selected option: Option 2</p>
        <p>Checkbox: Checked</p>
    `;
}

// ========================================
// 12. CLONING ELEMENTS
// ========================================

let cloneCount = 0;

function cloneNodeDemo() {
  let output = document.getElementById("clone-output");
  const original = document.getElementById("original-elem");
  const container = document.getElementById("clone-container");

  cloneCount++;

  // cloneNode(false) - shallow clone (element only, no children)
  const clone = original.cloneNode(false);
  clone.id = `clone-${cloneCount}`;
  clone.textContent = `Cloned Element (Shallow) #${cloneCount}`;
  clone.style.marginTop = "10px";
  clone.style.backgroundColor = "#e9ecef";
  clone.style.padding = "10px";
  clone.style.borderRadius = "5px";

  container.appendChild(clone);

  output.innerHTML = `
        <p class="success">✓ Shallow Clone Created</p>
        <p>Cloned element without children</p>
    `;
}

function cloneNodeDeepDemo() {
  let output = document.getElementById("clone-output");
  const original = document.getElementById("original-elem");
  const container = document.getElementById("clone-container");

  cloneCount++;

  // cloneNode(true) - deep clone (element + all children)
  const deepClone = original.cloneNode(true);
  deepClone.id = `deep-clone-${cloneCount}`;
  deepClone.style.marginTop = "10px";
  deepClone.style.backgroundColor = "#d4edff";
  deepClone.style.padding = "10px";
  deepClone.style.borderRadius = "5px";

  container.appendChild(deepClone);

  output.innerHTML = `
        <p class="success">✓ Deep Clone Created</p>
        <p>Cloned element with all children included</p>
    `;
}

// ========================================
// BONUS: COMMON DOM PATTERNS
// ========================================

// Pattern 1: Find multiple elements and modify all
function modifyAllElements(selector, propertyName, propertyValue) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    element.style[propertyName] = propertyValue;
  });
}

// Pattern 2: Toggle visibility
function toggleVisibility(elementId) {
  const element = document.getElementById(elementId);
  element.style.display = element.style.display === "none" ? "block" : "none";
}

// Pattern 3: Add multiple classes at once
function addMultipleClasses(elementId, ...classNames) {
  const element = document.getElementById(elementId);
  element.classList.add(...classNames);
}

// Pattern 4: Create and append multiple elements
function createMultipleItems(containerId, items) {
  const container = document.getElementById(containerId);
  items.forEach((item) => {
    const element = document.createElement("div");
    element.textContent = item;
    element.classList.add("list-item");
    container.appendChild(element);
  });
}

// Pattern 5: Event delegation (handle events on parent)
function setupEventDelegation(parentId, childSelector, eventType, callback) {
  const parent = document.getElementById(parentId);
  parent.addEventListener(eventType, (e) => {
    if (e.target.matches(childSelector)) {
      callback(e);
    }
  });
}

// ===========================
// Console Examples
// ===========================

console.log(`
╔══════════════════════════════════════════════╗
║     DOM MANIPULATION - QUICK REFERENCE       ║
╚══════════════════════════════════════════════╝

📌 SELECTING ELEMENTS:
  • getElementById('id')
  • getElementsByClassName('class')
  • getElementsByTagName('tag')
  • querySelector('selector')
  • querySelectorAll('selector')

📌 MODIFYING CONTENT:
  • element.textContent = 'text'
  • element.innerHTML = '<html>'
  • element.innerText = 'text'

📌 MODIFYING ATTRIBUTES:
  • element.setAttribute('attr', 'value')
  • element.getAttribute('attr')
  • element.removeAttribute('attr')
  • element.hasAttribute('attr')

📌 MODIFYING CLASSES:
  • element.classList.add('class')
  • element.classList.remove('class')
  • element.classList.toggle('class')
  • element.classList.contains('class')

📌 CREATING & INSERTING:
  • document.createElement('tag')
  • element.appendChild(child)
  • element.insertBefore(child, ref)
  • element.replaceChild(new, old)

📌 REMOVING ELEMENTS:
  • element.remove()
  • parent.removeChild(child)
  • element.innerHTML = ''

📌 STYLING:
  • element.style.property = 'value'
  • element.style.backgroundColor = 'red'

📌 EVENTS:
  • element.addEventListener('event', callback)
  • element.removeEventListener('event', callback)

📌 TRAVERSING:
  • element.parentElement
  • element.children
  • element.firstElementChild / lastElementChild
  • element.nextElementSibling / previousElementSibling
`);
