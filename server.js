const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { spawn } = require("child_process"); // Changed from PythonShell to spawn
const path = require("path");
const axios = require("axios");
const fs = require("fs");
const { promisify } = require("util");
const app = express();
const port = 3000;
// Simulated recommendations database
const recommendations = {
  1: [
    "images/40258.jpg",
    "images/20158.jpg",
    "images/33063.jpg",
    "images/20171.jpg",
    "images/19836.jpg",
  ],
  2: [
    "images/41765.jpg",
    "images/42561.jpg",
    "images/53423.jpg",
    "images/32233.jpg",
    "images/58702.jpg",
  ],
  3: [
    "images/36712.jpg",
    "images/36813.jpg",
    "images/44069.jpg",
    "images/44044.jpg",
    "images/26206.jpg",
  ],
  4: [
    "images/5218.jpg",
    "images/9483.jpg",
    "images/17293.jpg",
    "images/15927.jpg",
    "images/43147.jpg",
  ],
  5: [
    "images/37795.jpg",
    "images/37757.jpg",
    "images/14768.jpg",
    "images/58720.jpg",
    "images/37735.jpg",
  ],
  6: [
    "images/52889.jpg",
    "images/52886.jpg",
    "images/58702.jpg",
    "images/52509.jpg",
    "images/43616.jpg",
  ],
  7: [
    "images/39208.jpg",
    "images/56943.jpg",
    "images/45817.jpg",
    "images/56939.jpg",
    "images/41708.jpg",
  ],
  8: [
    "images/2722.jpg",
    "images/38506.jpg",
    "images/40996.jpg",
    "images/2719.jpg",
    "images/2720.jpg",
  ],
  9: [
    "images/22156.jpg",
    "images/16188.jpg",
    "images/9042.jpg",
    "images/39214.jpg",
    "images/7239.jpg",
  ],
  10: [
    "images/31334.jpg",
    "images/27000.jpg",
    "images/26316.jpg",
    "images/24329.jpg",
    "images/26254.jpg",
  ],
  11: [
    "images/14313.jpg",
    "images/2348.jpg",
    "images/31787.jpg",
    "images/1991.jpg",
    "images/6949.jpg",
  ],
  12: [
    "images/28145.jpg",
    "images/29629.jpg",
    "images/31450.jpg",
    "images/50556.jpg",
    "images/1966.jpg",
  ],
  13: [
    "images/45319.jpg",
    "images/6621.jpg",
    "images/20781.jpg",
    "images/35821.jpg",
    "images/20767.jpg",
  ],
  14: [
    "images/24993.jpg",
    "images/2720.jpg",
    "images/30598.jpg",
    "images/14022.jpg",
    "images/14021.jpg",
  ],
  15: [
    "images/24775.jpg",
    "images/22140.jpg",
    "images/33693.jpg",
    "images/44941.jpg",
    "images/17481.jpg",
  ],
  16: [
    "images/6107.jpg",
    "images/48523.jpg",
    "images/57095.jpg",
    "images/57105.jpg",
    "images/58489.jpg",
  ],
  17: [
    "images/25872.jpg",
    "images/9483.jpg",
    "images/37681.jpg",
    "images/17293.jpg",
    "images/9575.jpg",
  ],
  18: [
    "images/57996.jpg",
    "images/59982.jpg",
    "images/43632.jpg",
    "images/19948.jpg",
    "images/58669.jpg",
  ],
  19: [
    "images/18163.jpg",
    "images/17124.jpg",
    "images/35907.jpg",
    "images/38143.jpg",
    "images/15216.jpg",
  ],
  20: [
    "images/26254.jpg",
    "images/51584.jpg",
    "images/27000.jpg",
    "images/14126.jpg",
    "images/27004.jpg",
  ],
  21: [
    "images/39894.jpg",
    "images/43002.jpg",
    "images/25575.jpg",
    "images/17683.jpg",
    "images/34815.jpg",
  ],
  22: [
    "images/39724.jpg",
    "images/41765.jpg",
    "images/51812.jpg",
    "images/42218.jpg",
    "images/43513.jpg",
  ],
  23: [
    "images/28467.jpg",
    "images/28465.jpg",
    "images/23969.jpg",
    "images/16135.jpg",
    "images/32467.jpg",
  ],
  24: [
    "images/34084.jpg",
    "images/7249.jpg",
    "images/22145.jpg",
    "images/13367.jpg",
    "images/34089.jpg",
  ],
  25: [
    "images/6356.jpg",
    "images/14332.jpg",
    "images/36139.jpg",
    "images/16980.jpg",
    "images/22692.jpg",
  ],
  26: [
    "images/6172.jpg",
    "images/6080.jpg",
    "images/2345.jpg",
    "images/39394.jpg",
    "images/3571.jpg",
  ],
  27: [
    "images/52886.jpg",
    "images/45751.jpg",
    "images/46250.jpg",
    "images/57182.jpg",
    "images/59633.jpg",
  ],
  28: [
    "images/57436.jpg",
    "images/24729.jpg",
    "images/26936.jpg",
    "images/5815.jpg",
    "images/57313.jpg",
  ],
  29: [
    "images/54904.jpg",
    "images/43481.jpg",
    "images/46393.jpg",
    "images/13101.jpg",
    "images/31288.jpg",
  ],
  30: [
    "images/33271.jpg",
    "images/13304.jpg",
    "images/13305.jpg",
    "images/38766.jpg",
    "images/38767.jpg",
  ],
  31: [
    "images/59889.jpg",
    "images/6274.jpg",
    "images/6107.jpg",
    "images/55797.jpg",
    "images/59888.jpg",
  ],
  32: [
    "images/47129.jpg",
    "images/58155.jpg",
    "images/19946.jpg",
    "images/50239.jpg",
    "images/50242.jpg",
  ],
  33: [
    "images/27232.jpg",
    "images/33509.jpg",
    "images/13305.jpg",
    "images/13304.jpg",
    "images/37199.jpg",
  ],
  34: [
    "images/58702.jpg",
    "images/42221.jpg",
    "images/48084.jpg",
    "images/38850.jpg",
    "images/42220.jpg",
  ],
  35: [
    "images/48435.jpg",
    "images/29629.jpg",
    "images/1563.jpg",
    "images/52052.jpg",
    "images/7749.jpg",
  ],
  36: [
    "images/3586.jpg",
    "images/3674.jpg",
    "images/8994.jpg",
    "images/34754.jpg",
    "images/36139.jpg",
  ],
  37: [
    "images/34353.jpg",
    "images/1847.jpg",
    "images/2140.jpg",
    "images/17250.jpg",
    "images/17277.jpg",
  ],
  38: [
    "images/42870.jpg",
    "images/14798.jpg",
    "images/47382.jpg",
    "images/58184.jpg",
    "images/43290.jpg",
  ],
  39: [
    "images/52052.jpg",
    "images/39071.jpg",
    "images/43482.jpg",
    "images/20168.jpg",
    "images/58720.jpg",
  ],
  40: [
    "images/38806.jpg",
    "images/4864.jpg",
    "images/34333.jpg",
    "images/30298.jpg",
    "images/34393.jpg",
  ],
};

// Endpoint to get recommended products based on product ID
app.get("/recommendations/:productId", (req, res) => {
  const productId = parseInt(req.params.productId, 10);
  const recommendedProducts = recommendations[productId] || [];
  res.json(recommendedProducts); // Returns an array of image paths
});

// Serve static files from the "images" folder
app.use("/images", express.static(path.join(__dirname, "images")));

// Serve the index.html file on the root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "index.html"));
});

// Serve static files (e.g., product images)
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());

app.post("/recommend-frequently", (req, res) => {
  const cartData = req.body.cartData; // Items in the current cart
  console.log("Cart data:", cartData);
  const transactionData = [
    [1, 9],
    [1, 15],
    [1, 15],
    [1, 15],
    [1, 15],
    [1, 15],
    [1, 15],
    [1, 15],
    [18, 13],
    [2, 34],
    [5, 24],
    [12, 26],
    [19, 34],
    [32, 22],
    [1, 10],
    [1, 15],
    [3, 7],
    [3, 9],
    [4, 17],
    [6, 7],
    [6, 13],
    [8, 23],
    [9, 10],
    [9, 15],
    [11, 16],
    [14, 21],
    [15, 24],
    [16, 31],
    [17, 23],
    [20, 36],
    [21, 25],
    [22, 34],
    [23, 30],
    [24, 36],
    [25, 33],
    [26, 39],
    [27, 28],
    [29, 37],
    [33, 40],
    [34, 38],
    [35, 37],
    [36, 37],
    [40, 25],
    [1, 9],
    [18, 13],
    [2, 34],
    [5, 24],
    [12, 26],
    [19, 34],
    [32, 22],
    [1, 10],
    [1, 15],
    [3, 7],
    [3, 9],
    [4, 17],
    [6, 7],
    [6, 13],
    [8, 23],
    [9, 10],
    [9, 15],
    [11, 16],
    [14, 21],
    [15, 24],
    [16, 31],
    [17, 23],
    [20, 36],
    [21, 25],
    [22, 34],
    [23, 30],
    [24, 36],
    [25, 33],
    [26, 39],
    [27, 28],
    [29, 37],
    [33, 40],
    [34, 38],
    [35, 37],
    [36, 37],
    [40, 25],

    [1, 9],
    [18, 13],
    [2, 34],
    [5, 24],
    [12, 26],
    [19, 34],
    [32, 22],
    [1, 10],
    [1, 15],
    [3, 7],
    [3, 9],
    [4, 17],
    [6, 7],
    [6, 13],
    [8, 23],
    [9, 10],
    [9, 15],
    [11, 16],
    [14, 21],
    [15, 24],
    [16, 31],
    [17, 23],
    [20, 36],
    [21, 25],
    [22, 34],
    [23, 30],
    [24, 36],
    [25, 33],
    [26, 39],
    [27, 28],
    [29, 37],
    [33, 40],
    [34, 38],
    [35, 37],
    [36, 37],
    [40, 25],
  ];

  const data = {
    cart_data: cartData,
    transaction_data: transactionData,
  };

  const pythonProcess = spawn("python", ["apriori.py"]);

  pythonProcess.stdin.write(JSON.stringify(data));
  pythonProcess.stdin.end();

  pythonProcess.stdout.on("data", (data) => {
    try {
      const recommendations = JSON.parse(data.toString());
      console.log("Recommendations from Python script:", recommendations);
      res.json(recommendations);
    } catch (error) {
      console.error("Error parsing Python response:", error);
      res.status(500).json({
        message: "Error processing recommendations",
        error: error.message,
      });
    }
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error("Error in Python script:", data.toString());
  });
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
