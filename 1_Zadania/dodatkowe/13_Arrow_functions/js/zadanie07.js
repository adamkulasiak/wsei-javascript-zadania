const App = function () {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = [];
}


App.prototype.generateLinks = function () {
  this.websites.forEach(link => {
    this.links.push(`https://${link}.com`);
  });
}


let app = new App();
app.generateLinks();
console.log(app.links)

const menuItems = $('.menu li a'); // tu jest uzyte jquery
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].setAttribute('href', app.links[i]);
}

