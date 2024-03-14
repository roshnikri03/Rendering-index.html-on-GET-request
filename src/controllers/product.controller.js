// product.controller.js
import path from 'path';
import express from 'express';

export const getProducts = (req, res) => {
  const filePath = path.resolve("src", "views", "index.html");
  res.sendFile(filePath);
};
