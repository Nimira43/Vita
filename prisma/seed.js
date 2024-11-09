const { PrismaClient } = require('@prisma/client')
const products = require('./products.json')
const prisma = new PrismaClient()

async function main