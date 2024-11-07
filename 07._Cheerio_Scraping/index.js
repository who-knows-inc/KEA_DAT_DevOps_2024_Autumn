import fs from "fs";
import { load } from "cheerio";

// const response = await fetch("https://www.proshop.dk/Gaming-baerbar");
// const text = await response.text();
// fs.writeFileSync("proshop.html", text);

const proshopHTML = fs.readFileSync("proshop.html", "utf-8");

const $ = load(proshopHTML);

$("#products [product]").each((index, element) => {
    const name = $(element).find(".site-product-link h2").text();
    const description = $(element).find(".site-product-link div").text();
    const price = $(element).find(".site-currency-lg").text();
    console.log({ name, description, price });
});

