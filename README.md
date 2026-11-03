# 🌿 Spice Vault

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live_Store-quadra--spice--flow.base44.app-2E7D32?style=for-the-badge&logo=vercel&logoColor=white)](https://quadra-spice-flow.base44.app)
[![Platform](https://img.shields.io/badge/Platform-Base44_Cloud-FF6F00?style=for-the-badge)](https://base44.app)
[![UI/UX](https://img.shields.io/badge/Design-Responsive_Modern_Web-00ACC1?style=for-the-badge)](https://quadra-spice-flow.base44.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)

**A Modern Spice Discovery & Artisan Culinary E-Commerce Experience**

[Explore the Live Store →](https://quadra-spice-flow.base44.app)

</div>

---

## 📖 Overview

**Spice Vault** is a responsive culinary discovery platform designed to connect home chefs and gourmets with rare, sustainably sourced whole spices. It combines an immersive visual catalog with detailed origin stories, aroma profiles, pairing suggestions, and a streamlined cart and checkout flow.

---

## 🛍️ User Journey & Architecture

```mermaid
graph TD
    User([Customer]) --> Hero[Hero Banner & Featured Collections]
    
    subgraph Discovery & Exploration
        Hero --> Catalog[Interactive Spice Catalog]
        Catalog --> Filter[Filter by Region, Heat Level & Aroma]
        Filter --> Detail[Spice Detail & Pairing Matrix]
    end

    subgraph Cart & Transaction
        Detail --> AddCart[Dynamic Cart State Management]
        AddCart --> Drawer[Slide-over Cart Drawer]
        Drawer --> Checkout[Secure Order Finalization]
    end

    subgraph Hosting & Backend
        Checkout --> Base44Backend[Base44 Managed Cloud API]
        Base44Backend --> Storage[(Product & Order Database)]
    end
```

---

## ✨ Features

- **Sensory Discovery Engine**: Filter spices by origin, flavor profile (warm, earthy, zesty, pungent), and heat index.
- **Pairing Matrix**: Interactive guides suggesting complementary herbs, culinary traditions, and storage recommendations.
- **Fluid Cart & Checkout**: Slide-out cart drawer with instant quantity modification and real-time total calculation.
- **Mobile-First Responsive Layout**: Built with modern CSS Grid and Flexbox for seamless browsing on phones, tablets, and desktops.

---

## 🔗 Live Application
Experience the live application hosted at:
**[https://quadra-spice-flow.base44.app](https://quadra-spice-flow.base44.app)**

---

## 📄 License
MIT License © [Shrikar G S](https://github.com/shrikargs7-cloud)
