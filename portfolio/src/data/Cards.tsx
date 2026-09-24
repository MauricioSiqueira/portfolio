import type { CardData } from "../types/CardData"
import grpcImage from "../assets/images/grpc.jpg"
import lariLetterImage from "../assets/images/LariLetter.png"
import mementoImage from "../assets/images/memento.jpeg"
import npostImage from "../assets/images/Npost.png"
import ocrImage from "../assets/images/ocr.webp"

export const cards: CardData[] = [
    {
        id:1,
        title: "Lari's letter",
        description: "Lari's Letter is a simple yet very special project for me; it was the first webpage I ever created, made for someone very special in my life—my girlfriend. The site features some photos of us, a playlist, and a letter I wrote with all my love.",
        urlRepo: "https://github.com/MauricioSiqueira/Lari-Romantic",
        imageUrl: lariLetterImage
    },
    {
        id:2,
        title: "Memento",
        description: "Memento is an app I created during a college course on mobile development; its concept is to serve as a photo album sharing app.",
        urlRepo: "https://github.com/MauricioSiqueira/Memento",
        imageUrl: mementoImage
    },
    {
        id:3,
        title: "gRPC-c#",
        description: "A Google Remote Procedure Call (gRPC) server in C#, used as a mock microservice for consumption by another Java API.",
        urlRepo: "https://github.com/MauricioSiqueira/gRPC-server",
        imageUrl: grpcImage
    },
    {
        id:4,
        title: "OCR-Azure",
        description: "Python app that receives documents and returns Markdown using Azure OCR.",
        urlRepo: "https://github.com/MauricioSiqueira/OcrReader",
        imageUrl: ocrImage
    },
    {
        id:5,
        title: "Npost-Frontend",
        description: "Frontend for the Npost Mobile app I'm building.",
        urlRepo: "https://github.com/MauricioSiqueira/Npost.Frontend",
        imageUrl: npostImage
    },
];
