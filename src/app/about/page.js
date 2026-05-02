"use client"; //This is a client component
import SimpleGallery from "../compenents/SimpleGallery";

const images = [
  {
    largeURL:"https://images.unsplash.com/photo-1773655688962-f116b722f1eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnailURL:"https://images.unsplash.com/photo-1773655688962-f116b722f1eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    width: 6000,
    height: 4000,
    alt: "Palm trees against a sunny sky"
  },
  {
    largeURL:"https://images.unsplash.com/photo-1776811805307-a0e0289c672f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnailURL:"https://images.unsplash.com/photo-1776811805307-a0e0289c672f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    width: 6192,
    height: 4128,
    alt:"A desert landscape with cacti"
  },
  {
    largeURL:"https://images.unsplash.com/photo-1643819029797-e824ef027d52?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnailURL:"https://images.unsplash.com/photo-1643819029797-e824ef027d52?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    width: 6016,
    height: 4016,
    alt: "Sunset with desert foliage silhouetted in the foreground"
  }
]
// I belong inside src/app/about/page.js
export default function About() {
  return <div className="p-12">
    <h1>About Page</h1>
    <SimpleGallery images={images} galleryID="about-gallery" />
  </div>
}
