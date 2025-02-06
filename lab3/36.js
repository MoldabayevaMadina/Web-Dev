let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor(styles.length / 2)] = "Classics";
styles.shift();
styles.unshift("Rap", "Reggae");
console.log(styles)