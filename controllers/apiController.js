exports.getOperationCode = (req, res) => {
  res.status(200).json({ operation_code: 1 });
};

exports.processRequest = (req, res) => {
  const { data } = req.body;
  console.log(data);
  // Validate input
  if (!Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      error: "Invalid input format",
    });
  }

  let numbers = [];
  let alphabets = [];
  let highestLowercaseAlphabet = null;

  data.forEach((item) => {
    if (!isNaN(item) && typeof item !== "object") {
      // Handle numeric values
      numbers.push(item);
    } else if (typeof item === "string" && /^[a-zA-Z]$/.test(item)) {
      // Handle alphabetic characters
      alphabets.push(item);
      if (item === item.toLowerCase()) {
        if (!highestLowercaseAlphabet || item > highestLowercaseAlphabet) {
          highestLowercaseAlphabet = item;
        }
      }
    }
  });

  res.status(200).json({
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet
      ? [highestLowercaseAlphabet]
      : [],
  });
};
