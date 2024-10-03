import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send({ data: "Hello Brian" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));