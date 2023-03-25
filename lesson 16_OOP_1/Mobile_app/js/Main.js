let samsung = new Mobile("samsung");
let iphone = new Mobile("iphone");
samsung.writeMessage('Xin chao Iphone');
samsung.sendMessage(iphone);
samsung.writeMessage('Toi la Samsung');
samsung.sendMessage(iphone);

console.log(iphone.inbox);